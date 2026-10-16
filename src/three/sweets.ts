import * as THREE from "three";
import { object, silicone, parametric, paint, mottling } from "./materials";

export function createDonut(color: string) {
  const root = new THREE.Group();
  const geometry = new THREE.TorusGeometry(0.72, 0.34, 36, 96);
  geometry.rotateX(-Math.PI / 2);
  paint(geometry, (x, y, z) =>
    new THREE.Color("#F1CF96").lerp(
      new THREE.Color("#B97132"),
      THREE.MathUtils.smoothstep(Math.abs(y), 0.025, 0.22) *
        (0.68 + mottling(x, y, z) * 0.22),
    ),
  );
  const dough = silicone("#FFFFFF", 0.53, 0.02);
  dough.vertexColors = true;
  root.add(object(geometry, dough));
  const icingGeometry = parametric(20, 100, (u, v) => {
    const angle = u * Math.PI * 2;
    const drip =
      Math.max(0, Math.sin(angle * 7 + 0.8)) ** 10 * 0.45 +
      Math.max(0, Math.sin(angle * 5 - 1.2)) ** 12 * 0.25;
    const cross = (-0.06 - drip) * (1 - v) + (Math.PI + 0.04) * v;
    const radius = 0.72 + Math.cos(cross) * 0.354;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(cross) * 0.344 + 0.008,
      Math.sin(angle) * radius,
    );
  });
  const icing = silicone(color, 0.24, 0.004);
  icing.side = THREE.DoubleSide;
  icing.clearcoat = 0.65;
  root.add(object(icingGeometry, icing));
  const materials = ["#F1D36C", "#F7F0E3", "#B86D70", "#8A6547", "#A4BA8D"].map(
    (tint) => silicone(tint, 0.5, 0.003),
  );
  const sprinkleGeometry = new THREE.CapsuleGeometry(0.014, 0.065, 3, 6);
  for (let i = 0; i < 52; i++) {
    const angle = i * 2.399963,
      radius = 0.72 + Math.sin(i * 7.1) * 0.22;
    const height = Math.sqrt(Math.max(0, 0.354 ** 2 - (radius - 0.72) ** 2));
    const sprinkle = object(sprinkleGeometry, materials[i % materials.length]);
    sprinkle.position.set(
      Math.cos(angle) * radius,
      height + 0.019,
      Math.sin(angle) * radius,
    );
    sprinkle.rotation.set(Math.PI / 2, Math.sin(i * 9) * 0.3, angle + i * 1.5);
    root.add(sprinkle);
  }
  return root;
}

export function leaf(length: number, width: number, color = "#73863A") {
  const geometry = parametric(
    8,
    8,
    (u, v) =>
      new THREE.Vector3(
        (u - 0.5) * width * Math.sin(v * Math.PI),
        Math.sin(v * Math.PI) * 0.05 - Math.abs(u - 0.5) * 0.04,
        v * length,
      ),
  );
  const material = silicone(color, 0.65, 0.008);
  material.side = THREE.DoubleSide;
  return object(geometry, material);
}

export function createMochi(color: string) {
  const root = new THREE.Group(),
    geometry = new THREE.SphereGeometry(1, 64, 40);
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i),
      y = p.getY(i),
      z = p.getZ(i);
    p.setXYZ(
      i,
      x * (0.96 - y * 0.09),
      Math.max(-0.39, y * 0.59),
      z * (0.88 - y * 0.07),
    );
  }
  geometry.computeVertexNormals();
  paint(geometry, (x, y, z) =>
    new THREE.Color(color).lerp(
      new THREE.Color("#FFF5EA"),
      0.18 + mottling(x, y, z) * 0.045,
    ),
  );
  const material = silicone("#FFFFFF", 0.72, 0.024);
  material.vertexColors = true;
  material.clearcoat = 0.015;
  root.add(object(geometry, material));
  const berryGeometry = new THREE.SphereGeometry(1, 40, 32);
  const vertices = berryGeometry.attributes.position;
  for (let i = 0; i < vertices.count; i++) {
    const y = vertices.getY(i),
      taper = 0.74 + y * 0.25;
    vertices.setXYZ(
      i,
      vertices.getX(i) * 0.32 * taper,
      y * 0.34,
      vertices.getZ(i) * 0.3 * taper,
    );
  }
  berryGeometry.computeVertexNormals();
  paint(berryGeometry, (x, y, z) =>
    new THREE.Color("#C85A59").lerp(
      new THREE.Color("#E79586"),
      THREE.MathUtils.clamp(0.24 + y * 0.6 + mottling(x, y, z) * 0.1, 0, 1),
    ),
  );
  const berryMaterial = silicone("#FFFFFF", 0.39, 0.009);
  berryMaterial.vertexColors = true;
  const berry = object(berryGeometry, berryMaterial);
  berry.position.set(0.08, 0.75, 0.02);
  root.add(berry);
  const seedGeometry = new THREE.SphereGeometry(1, 6, 6),
    seedMaterial = silicone("#CDA15D", 0.7, 0.001);
  for (let i = 0; i < 66; i++) {
    const y = 1 - ((i + 0.5) / 66) * 2,
      a = i * 2.399963,
      radius = Math.sqrt(1 - y * y),
      taper = 0.74 + y * 0.25;
    const seed = object(seedGeometry, seedMaterial);
    seed.position.set(
      Math.cos(a) * radius * 0.324 * taper + 0.08,
      y * 0.343 + 0.75,
      Math.sin(a) * radius * 0.304 * taper + 0.02,
    );
    seed.scale.set(0.009, 0.017, 0.007);
    seed.rotation.y = -a;
    seed.rotation.z = ((i % 3) - 1) * 0.12;
    root.add(seed);
  }
  for (let i = 0; i < 6; i++) {
    const item = leaf(0.22, 0.1);
    item.position.set(0.08, 1.045, 0.02);
    item.rotation.set(-0.16, (i / 6) * Math.PI * 2, 0);
    root.add(item);
  }
  return root;
}
