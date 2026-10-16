import * as THREE from "three";
import type { Character } from "../domain/types";
import { createFood, isFood } from "./food";
import { object, silicone, paint, mottling } from "./materials";

export function createCharacter(
  kind: Character,
  color: string,
  interactive = false,
): THREE.Group {
  if (isFood(kind)) return createFood(kind, color, interactive);
  const root = new THREE.Group();
  const material = silicone(color, 0.61, 0.014);
  material.clearcoat = 0.055;
  material.sheen = 0.28;
  const pigment = silicone("#61504A", 0.56, 0.003);
  const pink = silicone("#DBA3A2", 0.66, 0.007);
  const sphere = new THREE.SphereGeometry(1, 48, 32);
  function oval(
    x: number,
    y: number,
    z: number,
    sx: number,
    sy: number,
    sz: number,
    surface: THREE.Material = material,
  ) {
    const item = object(sphere, surface);
    item.position.set(x, y, z);
    item.scale.set(sx, sy, sz);
    root.add(item);
    return item;
  }
  const bodyGeometry = sphere.clone(),
    p = bodyGeometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i),
      y = p.getY(i),
      z = p.getZ(i);
    p.setXYZ(i, x * (1 - y * 0.12), Math.max(-0.65, y * 0.78), z * 0.82);
  }
  paint(bodyGeometry, (x, y, z) =>
    new THREE.Color().setScalar(0.98 + mottling(x, y, z) * 0.015),
  );
  bodyGeometry.computeVertexNormals();
  const bodyMaterial = material.clone();
  bodyMaterial.vertexColors = true;
  root.add(object(bodyGeometry, bodyMaterial));
  if (kind === "bunny") {
    for (const side of [-1, 1]) {
      const ear = oval(side * 0.35, 0.9, -0.1, 0.19, 0.57, 0.17);
      ear.rotation.z = side * -0.15;
      const inner = oval(side * 0.36, 0.97, 0.045, 0.065, 0.32, 0.013, pink);
      inner.rotation.z = side * -0.15;
    }
    oval(0.7, -0.39, -0.47, 0.24, 0.24, 0.24);
  }
  if (kind === "bear") {
    for (const side of [-1, 1])
      oval(side * 0.65, 0.61, -0.03, 0.28, 0.27, 0.17);
    oval(0, -0.02, 0.8, 0.2, 0.135, 0.035, silicone("#F5E5CE", 0.65));
  }
  if (kind === "cat") {
    for (const side of [-1, 1]) {
      const ear = oval(side * 0.59, 0.59, -0.03, 0.22, 0.32, 0.18);
      ear.rotation.z = side * -0.32;
    }
    oval(0.85, -0.4, -0.16, 0.37, 0.13, 0.22).rotation.y = 0.6;
  }
  if (kind === "frog") {
    for (const side of [-1, 1]) oval(side * 0.53, 0.59, 0.18, 0.28, 0.25, 0.26);
  }
  const eyesY = kind === "frog" ? 0.63 : 0.09,
    eyesZ = kind === "frog" ? 0.41 : 0.789;
  for (const side of [-1, 1]) {
    oval(
      side * (kind === "frog" ? 0.53 : 0.25),
      eyesY,
      eyesZ,
      0.037,
      0.045,
      0.009,
      pigment,
    );
    oval(side * 0.45, -0.09, 0.733, 0.073, 0.032, 0.007, pink);
    oval(side * 0.51, -0.56, 0.45, 0.25, 0.12, 0.29);
  }
  if (kind !== "frog") oval(0, -0.035, 0.828, 0.027, 0.018, 0.006, pink);
  return root;
}

export function disposeScene(scene: THREE.Scene) {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();
  scene.traverse((item) => {
    if (!(item instanceof THREE.Mesh)) return;
    geometries.add(item.geometry);
    for (const material of Array.isArray(item.material)
      ? item.material
      : [item.material])
      materials.add(material);
  });
  geometries.forEach((geometry) => geometry.dispose());
  materials.forEach((material) => {
    for (const value of Object.values(material))
      if (value instanceof THREE.Texture) textures.add(value);
    material.dispose();
  });
  textures.forEach((texture) => texture.dispose());
}
