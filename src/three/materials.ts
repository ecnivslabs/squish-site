import * as THREE from "three";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";

export function grain(seed = 17, size = 128) {
  const pixels = new Uint8Array(size * size * 4);
  let state = seed;
  for (let i = 0; i < pixels.length; i += 4) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const value = 112 + (state >>> 25);
    pixels[i] = pixels[i + 1] = pixels[i + 2] = value;
    pixels[i + 3] = 255;
  }
  const texture = new THREE.DataTexture(pixels, size, size);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

export function silicone(
  color: THREE.ColorRepresentation,
  roughness = 0.36,
  bumpScale = 0.008,
) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness,
    metalness: 0,
    ior: 1.43,
    clearcoat: 0.28,
    clearcoatRoughness: 0.3,
    sheen: 0.12,
    sheenColor: "#FFF2DC",
    sheenRoughness: 0.65,
    bumpMap: grain(),
    bumpScale,
    envMapIntensity: 0.85,
  });
}

export function object(
  geometry: THREE.BufferGeometry,
  material: THREE.Material | THREE.Material[],
) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function roundedBox(
  width: number,
  height: number,
  depth: number,
  radius: number,
  segments = 24,
) {
  const geometry = new THREE.BoxGeometry(
    width,
    height,
    depth,
    segments,
    segments,
    segments,
  );
  const p = geometry.attributes.position;
  const point = new THREE.Vector3(),
    inner = new THREE.Vector3(),
    normal = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    point.fromBufferAttribute(p, i);
    inner.set(
      THREE.MathUtils.clamp(point.x, -width / 2 + radius, width / 2 - radius),
      THREE.MathUtils.clamp(point.y, -height / 2 + radius, height / 2 - radius),
      THREE.MathUtils.clamp(point.z, -depth / 2 + radius, depth / 2 - radius),
    );
    normal.subVectors(point, inner).normalize().multiplyScalar(radius);
    point.copy(inner).add(normal);
    p.setXYZ(i, point.x, point.y, point.z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

export function smoothGeometry(geometry: THREE.BufferGeometry) {
  geometry.deleteAttribute("normal");
  const smooth = mergeVertices(geometry, 0.00001);
  smooth.computeVertexNormals();
  weldNormals(smooth, normalGroups(smooth));
  geometry.dispose();
  return smooth;
}

export function normalGroups(geometry: THREE.BufferGeometry) {
  const vertices = geometry.attributes.position;
  const groups = new Map<string, number[]>();
  for (let i = 0; i < vertices.count; i++) {
    const key = `${Math.round(vertices.getX(i) * 100000)}:${Math.round(vertices.getY(i) * 100000)}:${Math.round(vertices.getZ(i) * 100000)}`;
    const group = groups.get(key);
    if (group) group.push(i);
    else groups.set(key, [i]);
  }
  return [...groups.values()].filter((group) => group.length > 1);
}

export function weldNormals(
  geometry: THREE.BufferGeometry,
  groups: number[][],
) {
  const normals = geometry.attributes.normal;
  for (const group of groups) {
    let x = 0,
      y = 0,
      z = 0;
    for (const i of group) {
      x += normals.getX(i);
      y += normals.getY(i);
      z += normals.getZ(i);
    }
    const length = Math.hypot(x, y, z) || 1;
    for (const i of group)
      normals.setXYZ(i, x / length, y / length, z / length);
  }
  normals.needsUpdate = true;
}

export function parametric(
  rows: number,
  columns: number,
  point: (u: number, v: number) => THREE.Vector3,
) {
  const vertices: number[] = [],
    uv: number[] = [],
    indices: number[] = [];
  for (let y = 0; y <= rows; y++) {
    for (let x = 0; x <= columns; x++) {
      vertices.push(...point(x / columns, y / rows).toArray());
      uv.push(x / columns, y / rows);
    }
  }
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const a = x + y * (columns + 1),
        b = a + columns + 1;
      indices.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3),
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

export function paint(
  geometry: THREE.BufferGeometry,
  sample: (x: number, y: number, z: number) => THREE.Color,
) {
  const p = geometry.attributes.position,
    colors = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++)
    sample(p.getX(i), p.getY(i), p.getZ(i)).toArray(colors, i * 3);
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
}

export function mottling(x: number, y: number, z: number) {
  return (
    Math.sin(x * 13.7 + Math.sin(z * 8.1) * 2) * 0.4 +
    Math.sin(z * 24.3 + y * 19.7) * Math.cos(x * 31.1) * 0.25 +
    Math.sin(x * 83.1 + z * 67.5) * Math.cos(y * 93.2 + z * 42.2) * 0.13
  );
}
