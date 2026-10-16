import * as THREE from "three";
import {
  object,
  silicone,
  parametric,
  paint,
  mottling,
  roundedBox,
} from "./materials";
import { leaf } from "./sweets";

export function createEgg() {
  const root = new THREE.Group();
  const geometry = parametric(48, 96, (u, v) => {
    const radial =
      v < 0.4
        ? (v / 0.4) * 0.97
        : v > 0.6
          ? ((1 - v) / 0.4) * 0.97
          : 0.97 + Math.sin(((v - 0.4) / 0.2) * Math.PI) * 0.035;
    const height =
      v < 0.4
        ? -0.28
        : v > 0.6
          ? -0.2 + Math.sin(radial * Math.PI) * 0.025
          : -0.24 - Math.cos(((v - 0.4) / 0.2) * Math.PI) * 0.04;
    const a = u * Math.PI * 2,
      r = radial * (1 + Math.sin(a * 3) * 0.085 + Math.cos(a * 7) * 0.035);
    return new THREE.Vector3(
      Math.cos(a) * r * 1.13,
      height + Math.cos(a * 5) * radial ** 6 * 0.006,
      Math.sin(a) * r * 0.81,
    );
  });
  paint(geometry, (x, y, z) =>
    new THREE.Color("#FFF8E9").lerp(
      new THREE.Color("#D3AE70"),
      THREE.MathUtils.smoothstep(Math.hypot(x / 1.13, z / 0.81), 0.88, 1.05) *
        (0.35 + mottling(x, y, z) * 0.2),
    ),
  );
  const white = silicone("#FFFFFF", 0.39, 0.014);
  white.vertexColors = true;
  white.side = THREE.DoubleSide;
  root.add(object(geometry, white));
  const yolkGeometry = new THREE.SphereGeometry(
    0.43,
    56,
    24,
    0,
    Math.PI * 2,
    0,
    Math.PI / 2,
  );
  yolkGeometry.scale(1, 0.65, 0.96);
  paint(yolkGeometry, (_x, y) =>
    new THREE.Color("#F8B329").lerp(new THREE.Color("#E59119"), 0.25 - y * 0.4),
  );
  const yolkMaterial = silicone("#FFFFFF", 0.19, 0.002);
  yolkMaterial.vertexColors = true;
  yolkMaterial.clearcoat = 0.7;
  const yolk = object(yolkGeometry, yolkMaterial);
  yolk.position.set(0.08, -0.19, -0.025);
  root.add(yolk);
  return root;
}

function toastOutline() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.73, -0.84);
  shape.quadraticCurveTo(-0.88, -0.84, -0.88, -0.67);
  shape.lineTo(-0.85, 0.19);
  shape.bezierCurveTo(-1.1, 0.29, -1.02, 0.63, -0.74, 0.76);
  shape.bezierCurveTo(-0.37, 0.99, 0.38, 0.96, 0.74, 0.76);
  shape.bezierCurveTo(1.02, 0.63, 1.1, 0.29, 0.85, 0.19);
  shape.lineTo(0.88, -0.67);
  shape.quadraticCurveTo(0.88, -0.84, 0.73, -0.84);
  shape.closePath();
  return shape;
}

function crumbTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) return null;
  context.fillStyle = "#F5DBAE";
  context.fillRect(0, 0, 512, 512);
  let seed = 401;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < 4800; i++) {
    const x = random() * 512,
      y = random() * 512,
      radius = 0.5 + random() ** 4 * 4;
    context.fillStyle = `rgba(144,102,53,${0.06 + random() * 0.1})`;
    context.beginPath();
    context.ellipse(
      x,
      y,
      radius,
      radius * (0.5 + random()),
      random() * Math.PI,
      0,
      Math.PI * 2,
    );
    context.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createToast(color: string) {
  const root = new THREE.Group();
  const geometry = new THREE.ExtrudeGeometry(toastOutline(), {
    depth: 0.43,
    bevelEnabled: true,
    bevelSegments: 6,
    bevelSize: 0.065,
    bevelThickness: 0.055,
    curveSegments: 32,
  });
  geometry.translate(0, 0, -0.215);
  const crust = silicone("#BA793D", 0.62, 0.035);
  paint(geometry, (x, y, z) =>
    new THREE.Color().setScalar(0.94 + mottling(x, y, z) * 0.09),
  );
  crust.vertexColors = true;
  root.add(object(geometry, crust));
  const centerGeometry = new THREE.ExtrudeGeometry(toastOutline(), {
    depth: 0.015,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.035,
    bevelThickness: 0.015,
    curveSegments: 32,
  });
  centerGeometry.scale(0.86, 0.86, 1);
  const p = centerGeometry.attributes.position,
    uv = centerGeometry.attributes.uv;
  for (let i = 0; i < p.count; i++)
    uv.setXY(i, (p.getX(i) + 1) / 2, (p.getY(i) + 1) / 2);
  const crumb = silicone("#FFFFFF", 0.74, 0.025);
  crumb.map = crumbTexture();
  crumb.clearcoat = 0;
  const center = object(centerGeometry, crumb);
  center.position.z = 0.27;
  root.add(center);
  const butter = object(
    roundedBox(0.49, 0.4, 0.075, 0.055, 10),
    silicone(
      new THREE.Color(color).lerp(new THREE.Color("#FFF0B7"), 0.1),
      0.33,
    ),
  );
  butter.position.set(0.07, -0.02, 0.33);
  butter.rotation.z = -0.13;
  root.add(butter);
  return root;
}

export function createPeach(color: string) {
  const root = new THREE.Group(),
    geometry = new THREE.SphereGeometry(1, 64, 40);
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i),
      y = p.getY(i),
      z = p.getZ(i);
    const cleft = Math.exp(-x * x * 180) * Math.max(0, z) * 0.08;
    p.setXYZ(i, x * (1 - y * 0.08), y * 0.94, z * 0.94 - cleft);
  }
  paint(geometry, (x, y, z) =>
    new THREE.Color(color).lerp(
      new THREE.Color("#DF8C86"),
      THREE.MathUtils.clamp(x * 0.28 + 0.3 + mottling(x, y, z) * 0.1, 0, 0.6),
    ),
  );
  geometry.computeVertexNormals();
  const material = silicone("#FFFFFF", 0.68, 0.02);
  material.vertexColors = true;
  root.add(object(geometry, material));
  const stem = object(
    new THREE.CylinderGeometry(0.035, 0.048, 0.22, 10),
    silicone("#8F6B43", 0.8),
  );
  stem.position.y = 0.98;
  stem.rotation.z = -0.15;
  root.add(stem);
  const item = leaf(0.55, 0.28, "#879848");
  item.position.set(0.03, 1.01, 0);
  item.rotation.set(-0.1, -1.3, 0.2);
  root.add(item);
  return root;
}
