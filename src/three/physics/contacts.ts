import { Triangle, Vector3 } from "three";
import type { SoftBody } from "./SoftBody";
import type { Vec3 } from "./lattice";
import { coordinates } from "./embedding";
import { SpatialIndex } from "./SpatialIndex";
import { firstCrossing, volumePolynomial } from "./sweep";

export interface Bounds {
  min: Vec3;
  max: Vec3;
  arch?: { base: number; radiusX: number; radiusY: number };
}

export function solveBounds(body: SoftBody, bounds: Bounds) {
  const { positions, contacts } = body;
  for (let i = 0; i < positions.length; i += 3) {
    for (let axis = 0; axis < 3; axis++) {
      if (positions[i + axis] < bounds.min[axis]) {
        positions[i + axis] = bounds.min[axis];
        contacts[i + axis] = 1;
      } else if (positions[i + axis] > bounds.max[axis]) {
        positions[i + axis] = bounds.max[axis];
        contacts[i + axis] = -1;
      }
    }
    const arch = bounds.arch;
    if (!arch || positions[i + 1] <= arch.base) continue;
    const x = positions[i] / arch.radiusX,
      y = (positions[i + 1] - arch.base) / arch.radiusY;
    const length = Math.hypot(x, y);
    if (length <= 1) continue;
    positions[i] /= length;
    positions[i + 1] = arch.base + (positions[i + 1] - arch.base) / length;
    contacts[i] = -x / arch.radiusX;
    contacts[i + 1] = -y / arch.radiusY;
  }
}

class Collider {
  readonly tetrahedra: SpatialIndex;
  readonly surface: SpatialIndex;
  readonly min = [0, 0, 0];
  readonly max = [0, 0, 0];
  readonly neighbours: Set<number>[];
  readonly surfaceBounds: Float64Array;
  readonly tetraBounds: Float64Array;

  constructor(readonly body: SoftBody) {
    const { lattice } = body,
      spacing = lattice.radius * 3;
    this.tetrahedra = new SpatialIndex(spacing, lattice.volumes.length);
    this.surface = new SpatialIndex(spacing, lattice.surface.length / 3);
    this.surfaceBounds = new Float64Array(lattice.surface.length * 2);
    this.tetraBounds = new Float64Array(lattice.volumes.length * 6);
    this.neighbours = Array.from(
      { length: body.positions.length / 3 },
      (_, i) => new Set([i]),
    );
    for (let i = 0; i < lattice.edges.length; i += 2) {
      const a = lattice.edges[i],
        b = lattice.edges[i + 1];
      this.neighbours[a].add(b);
      this.neighbours[b].add(a);
    }
  }

  update() {
    const { positions, previous, lattice } = this.body;
    this.min.fill(Infinity);
    this.max.fill(-Infinity);
    this.tetrahedra.clear();
    this.surface.clear();
    const min = [0, 0, 0],
      max = [0, 0, 0];
    for (let k = 0; k < lattice.volumes.length; k++) {
      min.fill(Infinity);
      max.fill(-Infinity);
      for (let j = 0; j < 4; j++) {
        const offset = lattice.tetrahedra[k * 4 + j] * 3;
        for (let axis = 0; axis < 3; axis++) {
          min[axis] = Math.min(min[axis], positions[offset + axis]);
          max[axis] = Math.max(max[axis], positions[offset + axis]);
        }
      }
      this.tetrahedra.insert(k, min, max);
      this.tetraBounds.set(min, k * 6);
      this.tetraBounds.set(max, k * 6 + 3);
    }
    for (let k = 0; k < lattice.surface.length; k += 3) {
      min.fill(Infinity);
      max.fill(-Infinity);
      for (let j = 0; j < 3; j++) {
        const offset = lattice.surface[k + j] * 3;
        for (let axis = 0; axis < 3; axis++) {
          min[axis] = Math.min(
            min[axis],
            positions[offset + axis],
            previous[offset + axis],
          );
          max[axis] = Math.max(
            max[axis],
            positions[offset + axis],
            previous[offset + axis],
          );
        }
      }
      this.surface.insert(k / 3, min, max);
      this.surfaceBounds.set(min, k * 2);
      this.surfaceBounds.set(max, k * 2 + 3);
      for (let axis = 0; axis < 3; axis++) {
        this.min[axis] = Math.min(this.min[axis], min[axis]);
        this.max[axis] = Math.max(this.max[axis], max[axis]);
      }
    }
  }
}

export interface ContactPair {
  a: SoftBody;
  vertex: number;
  b: SoftBody;
  face: number[];
  weights: number[];
  normal: number[];
}

const colliders = new WeakMap<SoftBody, Collider>();
const triangle = new Triangle(),
  point = new Vector3(),
  closest = new Vector3(),
  normal = new Vector3(),
  bary = new Vector3();
const oldPoints = new Float64Array(12),
  newPoints = new Float64Array(12);
const interpolate = (
  target: Vector3,
  start: Float64Array,
  end: Float64Array,
  offset: number,
  t: number,
) =>
  target.set(
    start[offset] + (end[offset] - start[offset]) * t,
    start[offset + 1] + (end[offset + 1] - start[offset + 1]) * t,
    start[offset + 2] + (end[offset + 2] - start[offset + 2]) * t,
  );

function contact(
  a: SoftBody,
  vertex: number,
  collider: Collider,
): ContactPair | null {
  const b = collider.body,
    offset = vertex * 3,
    p = a.positions;
  const current: Vec3 = [p[offset], p[offset + 1], p[offset + 2]];
  const min = [0, 1, 2].map((axis) =>
    Math.min(current[axis], a.previous[offset + axis]),
  );
  const max = [0, 1, 2].map((axis) =>
    Math.max(current[axis], a.previous[offset + axis]),
  );
  if (
    min.some(
      (value, axis) =>
        value > collider.max[axis] + 0.005 ||
        max[axis] < collider.min[axis] - 0.005,
    )
  )
    return null;
  const eligible = (face: number[]) =>
    a !== b || face.every((index) => !collider.neighbours[vertex].has(index));
  let earliest = Infinity,
    selected: ContactPair | null = null;
  const setTriangle = (face: number[]) => {
    triangle.a.fromArray(b.positions, face[0] * 3);
    triangle.b.fromArray(b.positions, face[1] * 3);
    triangle.c.fromArray(b.positions, face[2] * 3);
  };
  for (const id of collider.surface.query(min, max)) {
    if (
      min.some(
        (value, axis) =>
          value > collider.surfaceBounds[id * 6 + axis + 3] + 1e-8 ||
          max[axis] < collider.surfaceBounds[id * 6 + axis] - 1e-8,
      )
    )
      continue;
    const face = Array.from(b.lattice.surface.subarray(id * 3, id * 3 + 3));
    if (!eligible(face)) continue;
    for (let j = 0; j < 4; j++) {
      const source = j === 3 ? a : b,
        index = j === 3 ? vertex : face[j];
      for (let axis = 0; axis < 3; axis++) {
        oldPoints[j * 3 + axis] = source.previous[index * 3 + axis];
        newPoints[j * 3 + axis] = source.positions[index * 3 + axis];
      }
    }
    const polynomial = volumePolynomial(oldPoints, newPoints, [0, 1, 2, 3]);
    if (polynomial[0] < -1e-9) continue;
    const time = firstCrossing(polynomial);
    if (time === null || time >= earliest) continue;
    interpolate(triangle.a, oldPoints, newPoints, 0, time);
    interpolate(triangle.b, oldPoints, newPoints, 3, time);
    interpolate(triangle.c, oldPoints, newPoints, 6, time);
    interpolate(point, oldPoints, newPoints, 9, time);
    if (
      !triangle.getBarycoord(point, bary) ||
      Math.min(bary.x, bary.y, bary.z) < -1e-5
    )
      continue;
    setTriangle(face);
    triangle.getNormal(normal);
    earliest = time;
    selected = {
      a,
      vertex,
      b,
      face,
      weights: bary.toArray(),
      normal: normal.toArray(),
    };
  }
  if (selected) return selected;
  let inside = false;
  for (const id of collider.tetrahedra.query(current)) {
    if (
      current.some(
        (value, axis) =>
          value < collider.tetraBounds[id * 6 + axis] - 1e-8 ||
          value > collider.tetraBounds[id * 6 + axis + 3] + 1e-8,
      )
    )
      continue;
    const indices = b.lattice.tetrahedra.subarray(id * 4, id * 4 + 4);
    if (a === b && indices.includes(vertex)) continue;
    const weights = coordinates(
      b.positions,
      b.lattice.tetrahedra,
      id * 4,
      current,
    );
    const tolerance = a === b ? 1e-7 : -1e-8;
    if (
      weights.every((weight) => weight >= tolerance && weight <= 1 - tolerance)
    ) {
      inside = true;
      break;
    }
  }
  if (!inside) return null;
  let distance = Infinity;
  point.fromArray(current);
  for (let k = 0; k < b.lattice.surface.length; k += 3) {
    const face = Array.from(b.lattice.surface.subarray(k, k + 3));
    if (!eligible(face)) continue;
    setTriangle(face);
    triangle.closestPointToPoint(point, closest);
    const squared = closest.distanceToSquared(point);
    if (squared >= distance || !triangle.getBarycoord(closest, bary)) continue;
    distance = squared;
    normal.copy(closest).sub(point).normalize();
    selected = {
      a,
      vertex,
      b,
      face,
      weights: bary.toArray(),
      normal: normal.toArray(),
    };
  }
  return selected;
}

export function contactPairs(bodies: readonly SoftBody[]): ContactPair[] {
  const active = bodies.map((body) => {
    let collider = colliders.get(body);
    if (!collider) {
      collider = new Collider(body);
      colliders.set(body, collider);
    }
    collider.update();
    return collider;
  });
  const pairs: ContactPair[] = [];
  for (const body of bodies) {
    for (const collider of active) {
      for (const vertex of body.lattice.surfaceVertices) {
        const pair = contact(body, vertex, collider);
        if (pair) pairs.push(pair);
      }
    }
  }
  return pairs;
}

export function solvePairs(pairs: readonly ContactPair[]) {
  for (const { a, vertex, b, face, weights, normal } of pairs) {
    let distance = -0.004;
    for (let axis = 0; axis < 3; axis++) {
      let surface = 0;
      for (let k = 0; k < 3; k++)
        surface += b.positions[face[k] * 3 + axis] * weights[k];
      distance += (a.positions[vertex * 3 + axis] - surface) * normal[axis];
    }
    if (distance >= 0) continue;
    const correction =
      -distance / (1 + weights.reduce((sum, value) => sum + value * value, 0));
    for (let axis = 0; axis < 3; axis++) {
      a.positions[vertex * 3 + axis] += normal[axis] * correction;
      for (let k = 0; k < 3; k++)
        b.positions[face[k] * 3 + axis] -=
          normal[axis] * correction * weights[k];
    }
  }
}

export function dampContacts(pairs: readonly ContactPair[]) {
  for (const { a, vertex, b, face, weights, normal } of pairs) {
    const velocity = [0, 1, 2].map(
      (axis) =>
        a.velocities[vertex * 3 + axis] -
        weights.reduce(
          (sum, weight, k) => sum + b.velocities[face[k] * 3 + axis] * weight,
          0,
        ),
    );
    const closing = velocity.reduce(
      (sum, value, axis) => sum + value * normal[axis],
      0,
    );
    if (closing >= 0) continue;
    const denominator =
      1 + weights.reduce((sum, value) => sum + value * value, 0);
    const impulse = -closing / denominator;
    const tangent = velocity.map(
      (value, axis) => value - closing * normal[axis],
    );
    const friction = Math.min(
      (0.28 * impulse) / Math.max(Math.hypot(...tangent), 1e-9),
      1 / denominator,
    );
    for (let axis = 0; axis < 3; axis++) {
      const change = normal[axis] * impulse - tangent[axis] * friction;
      a.velocities[vertex * 3 + axis] += change;
      for (let k = 0; k < 3; k++)
        b.velocities[face[k] * 3 + axis] -= change * weights[k];
    }
  }
}
