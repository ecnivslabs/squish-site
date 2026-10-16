import * as THREE from "three";
import { SoftBody, type Attachment } from "./physics/SoftBody";
import { SmoothEmbedding } from "./physics/SmoothEmbedding";
import type { Vec3 } from "./physics/lattice";
import { normalGroups, weldNormals } from "./materials";
import type { Pinch } from "./physics/Grip";
import type { GripRequest } from "./physics/protocol";

interface Skin {
  mesh: THREE.Mesh;
  indices: Uint16Array;
  weights: Float32Array;
  offsets: Uint32Array;
  normals: number[][];
}

interface Options {
  scale: number;
  position: Vec3;
  rotation: number;
  cells: readonly [number, number, number];
  cylinder?: boolean;
}

export class DeformableModel {
  readonly body: SoftBody;
  readonly skins: Skin[] = [];
  readonly group = new THREE.Group();

  constructor(source: THREE.Group, options: Options) {
    const box = new THREE.Box3().setFromObject(source);
    const center = box.getCenter(new THREE.Vector3()),
      size = box.getSize(new THREE.Vector3()).multiplyScalar(options.scale);
    this.body = new SoftBody({
      size: [
        size.x * (options.cylinder ? 1.035 : 1),
        size.y,
        size.z * (options.cylinder ? 1.035 : 1),
      ],
      cells: options.cells,
      shape: options.cylinder ? "cylinder" : "box",
      topInset: options.cylinder ? 0.135 * options.scale : 0,
      position: options.position,
      rotation: options.rotation,
      edgeCompliance: options.cylinder ? 0.00006 : 0.0001,
      volumeCompliance: 0.000000001,
      viscoelastic: true,
    });
    const embedding = new SmoothEmbedding(this.body.lattice, this.body.options);
    source.scale.setScalar(options.scale);
    source.rotation.y = options.rotation;
    center
      .multiplyScalar(options.scale)
      .applyAxisAngle(new THREE.Vector3(0, 1, 0), options.rotation);
    source.position.fromArray(options.position).sub(center);
    source.updateMatrixWorld(true);
    const meshes: THREE.Mesh[] = [],
      originals = new Set<THREE.BufferGeometry>();
    source.traverse((item) => {
      if (item instanceof THREE.Mesh) meshes.push(item);
    });
    for (const mesh of meshes) {
      originals.add(mesh.geometry);
      const geometry = mesh.geometry.clone();
      geometry.applyMatrix4(mesh.matrixWorld);
      mesh.geometry = geometry;
      const p = geometry.getAttribute("position") as THREE.BufferAttribute;
      p.setUsage(THREE.DynamicDrawUsage);
      const indices: number[] = [],
        weights: number[] = [];
      const offsets = new Uint32Array(p.count + 1);
      for (let i = 0; i < p.count; i++) {
        const attachment = embedding.at([p.getX(i), p.getY(i), p.getZ(i)]);
        indices.push(...attachment.indices);
        weights.push(...attachment.weights);
        offsets[i + 1] = indices.length;
      }
      mesh.position.set(0, 0, 0);
      mesh.quaternion.identity();
      mesh.scale.set(1, 1, 1);
      mesh.frustumCulled = false;
      this.group.add(mesh);
      this.skins.push({
        mesh,
        indices: new Uint16Array(indices),
        weights: new Float32Array(weights),
        offsets,
        normals: normalGroups(geometry),
      });
    }
    originals.forEach((geometry) => geometry.dispose());
  }

  update() {
    const p = this.body.positions;
    for (const { mesh, indices, weights, offsets, normals } of this.skins) {
      const vertices = mesh.geometry.attributes.position;
      const array = vertices.array as Float32Array;
      for (let i = 0; i < vertices.count; i++) {
        let x = 0,
          y = 0,
          z = 0;
        for (let k = offsets[i]; k < offsets[i + 1]; k++) {
          const index = indices[k] * 3,
            weight = weights[k];
          x += p[index] * weight;
          y += p[index + 1] * weight;
          z += p[index + 2] * weight;
        }
        array[i * 3] = x;
        array[i * 3 + 1] = y;
        array[i * 3 + 2] = z;
      }
      vertices.needsUpdate = true;
      mesh.geometry.computeVertexNormals();
      weldNormals(mesh.geometry, normals);
      // Raycasting uses both bounds, including boxes cached before deformation.
      mesh.geometry.computeBoundingBox();
      mesh.geometry.computeBoundingSphere();
    }
  }

  createGrip(
    hit: THREE.Intersection,
    inward: THREE.Vector3,
  ): GripRequest | null {
    const attachment = this.attachment(hit);
    if (!attachment) return null;
    const meshes = this.skins.map(({ mesh }) => mesh);
    const bounds = new THREE.Box3();
    for (const mesh of meshes) bounds.union(mesh.geometry.boundingBox!);
    const size = bounds.getSize(new THREE.Vector3());
    const span = size.length() + 0.1;
    const direction = inward.clone().normalize();
    const horizontal = new THREE.Vector3().crossVectors(
      direction,
      new THREE.Vector3(0, 1, 0),
    );
    if (horizontal.lengthSq() < 1e-6) horizontal.set(1, 0, 0);
    horizontal.normalize();
    const vertical = new THREE.Vector3()
      .crossVectors(horizontal, direction)
      .normalize();
    const radius = Math.min(size.x, size.y, size.z) * 0.32;
    const forward = new THREE.Raycaster(),
      backward = new THREE.Raycaster();
    const pads: Pinch[] = [];
    for (const [x, y] of [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const origin = hit.point
        .clone()
        .addScaledVector(horizontal, x * radius)
        .addScaledVector(vertical, y * radius);
      forward.set(origin.clone().addScaledVector(direction, -span), direction);
      backward.set(
        origin.clone().addScaledVector(direction, span),
        direction.clone().negate(),
      );
      const front = forward.intersectObjects(meshes, false)[0];
      const back = backward.intersectObjects(meshes, false)[0];
      if (!front || !back || front.point.distanceToSquared(back.point) < 1e-6)
        continue;
      const frontAttachment = this.attachment(front),
        backAttachment = this.attachment(back);
      if (frontAttachment && backAttachment) {
        const restPoint = (attachment: Attachment) =>
          new THREE.Vector3(
            ...[0, 1, 2].map((axis) =>
              attachment.indices.reduce(
                (sum, index, k) =>
                  sum +
                  this.body.lattice.rest[index * 3 + axis] *
                    attachment.weights[k],
                0,
              ),
            ),
          );
        pads.push({
          front: {
            attachment: frontAttachment,
            position: front.point.toArray(),
          },
          back: { attachment: backAttachment, position: back.point.toArray() },
          restDistance: restPoint(frontAttachment).distanceTo(
            restPoint(backAttachment),
          ),
          pressure: x === 0 && y === 0 ? 1 : 0.6,
        });
      }
    }
    return { attachment, point: hit.point.toArray(), pads };
  }

  attachment(hit: THREE.Intersection): Attachment | null {
    const skin = this.skins.find(({ mesh }) => mesh === hit.object);
    if (!skin || !hit.face) return null;
    const { a, b, c } = hit.face,
      p = skin.mesh.geometry.attributes.position;
    const bary = THREE.Triangle.getBarycoord(
      hit.point,
      new THREE.Vector3().fromBufferAttribute(p, a),
      new THREE.Vector3().fromBufferAttribute(p, b),
      new THREE.Vector3().fromBufferAttribute(p, c),
      new THREE.Vector3(),
    );
    if (!bary) return null;
    const contributions = new Map<number, number>();
    [a, b, c].forEach((vertex, corner) => {
      for (
        let offset = skin.offsets[vertex];
        offset < skin.offsets[vertex + 1];
        offset++
      ) {
        const index = skin.indices[offset];
        contributions.set(
          index,
          (contributions.get(index) ?? 0) +
            skin.weights[offset] * bary.getComponent(corner),
        );
      }
    });
    return {
      indices: [...contributions.keys()],
      weights: [...contributions.values()],
    };
  }
}
