import * as THREE from "three";
import {
  object,
  roundedBox,
  silicone,
  paint,
  mottling,
  smoothGeometry,
  normalGroups,
  weldNormals,
} from "./materials";

function butterStamp(top: boolean, color?: THREE.Color) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 384;
  const context = canvas.getContext("2d");
  if (!context) return null;
  context.fillStyle = color ? `#${color.getHexString()}` : "#B0B0B0";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = color ? "rgba(121,86,18,0.21)" : "#3D3D3D";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "bold 147px Georgia,serif";
  context.fillText("BUTTER", 512, top ? 185 : 215);
  context.font = "29px Georgia,serif";
  context.fillText("N O M S Q U I S H", 512, top ? 305 : 88);
  context.strokeStyle = color ? "rgba(121,86,18,0.15)" : "#646464";
  context.lineWidth = 4;
  context.beginPath();
  context.roundRect(32, 25, 960, 330, 14);
  context.stroke();
  const texture = new THREE.CanvasTexture(canvas);
  if (color) texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export function createButter(color: string, segments = 26) {
  const root = new THREE.Group();
  const tint =
    color.toUpperCase() === "#FDE68A"
      ? new THREE.Color("#E9C34B")
      : new THREE.Color(color);
  const main = silicone(tint, 0.34, 0.005);
  const front = main.clone(),
    top = main.clone();
  front.bumpMap = butterStamp(false) ?? main.bumpMap;
  top.bumpMap = butterStamp(true) ?? main.bumpMap;
  front.map = butterStamp(false, tint);
  top.map = butterStamp(true, tint);
  if (front.map) front.color.set("#FFFFFF");
  if (top.map) top.color.set("#FFFFFF");
  front.bumpScale = top.bumpScale = 0.045;
  const geometry = roundedBox(2.65, 0.84, 1.04, 0.075, segments);
  paint(geometry, (x, y, z) =>
    new THREE.Color().setScalar(0.96 + mottling(x, y, z) * 0.025),
  );
  for (const material of [main, front, top]) material.vertexColors = true;
  root.add(object(geometry, [main, main, top, main, front, main]));
  const seamMaterial = silicone(tint.clone().multiplyScalar(0.94), 0.4, 0.002);
  for (const side of [-1, 1]) {
    const cap = object(roundedBox(0.022, 0.69, 0.87, 0.01, 3), seamMaterial);
    cap.position.x = side * 1.321;
    root.add(cap);
    const crease = object(
      roundedBox(0.018, 0.025, 0.82, 0.008, 2),
      seamMaterial,
    );
    crease.position.set(side * 1.24, 0.413, 0);
    root.add(crease);
  }
  return root;
}

export function createCheese(color: string, segments = 38) {
  const root = new THREE.Group();
  const geometry = roundedBox(1.65, 1.5, 1.5, 0.12, segments);
  const p = geometry.attributes.position,
    n = geometry.attributes.normal;
  const cavities = [
    [
      [-0.38, 0.24, 0.24],
      [0.3, -0.28, 0.29],
      [0.4, 0.44, 0.16],
      [-0.48, -0.45, 0.12],
    ],
    [
      [-0.3, -0.35, 0.25],
      [0.32, 0.26, 0.23],
    ],
    [
      [-0.35, -0.32, 0.26],
      [0.36, 0.24, 0.27],
      [-0.33, 0.4, 0.15],
      [0.42, -0.43, 0.13],
    ],
    [
      [-0.26, 0.26, 0.25],
      [0.36, -0.22, 0.23],
    ],
    [
      [-0.35, 0.3, 0.28],
      [0.34, -0.24, 0.27],
      [-0.4, -0.43, 0.14],
      [0.38, 0.48, 0.13],
    ],
    [
      [-0.28, 0.28, 0.26],
      [0.3, -0.3, 0.24],
    ],
  ];
  for (let i = 0; i < p.count; i++) {
    const face = Math.floor(i / (segments + 1) ** 2);
    const x = p.getX(i),
      y = p.getY(i),
      z = p.getZ(i);
    const u = face < 2 ? z : x,
      v = face < 4 && face >= 2 ? z : y;
    let depth = 0;
    for (const [cx, cy, radius] of cavities[face]) {
      const radiusSquared = ((u - cx) ** 2 + (v - cy) ** 2) / (radius * radius);
      if (radiusSquared < 1)
        depth += radius * 0.73 * (1 - radiusSquared) ** 1.55;
    }
    const ripple = Math.sin(x * 8 + y * 3) * Math.sin(z * 7 - y * 4) * 0.006;
    p.setXYZ(
      i,
      x - n.getX(i) * (depth + ripple),
      y - n.getY(i) * (depth + ripple),
      z - n.getZ(i) * (depth + ripple),
    );
  }
  geometry.computeVertexNormals();
  const tint =
    color.toUpperCase() === "#FDE68A"
      ? new THREE.Color("#EAB92D")
      : new THREE.Color(color);
  const material = silicone(tint, 0.25, 0.004);
  material.clearcoat = 0.55;
  material.clearcoatRoughness = 0.22;
  paint(geometry, (x, y, z) =>
    new THREE.Color().setScalar(0.97 + mottling(x, y, z) * 0.025),
  );
  material.vertexColors = true;
  root.add(object(geometry, material));
  return root;
}

export function createPancakes(_color?: string, segments = 72) {
  const root = new THREE.Group();
  for (let layer = 0; layer < 3; layer++) {
    const radius = 0.99 - layer * 0.025;
    const profile: THREE.Vector2[] = [];
    for (let k = 0; k <= 16; k++)
      profile.push(
        new THREE.Vector2(
          (k / 16) * (radius - 0.1),
          -0.16 - Math.sin((k / 16) * Math.PI) * 0.006,
        ),
      );
    for (let k = 0; k <= 12; k++) {
      const a = -Math.PI / 2 + (k / 12) * Math.PI;
      profile.push(
        new THREE.Vector2(
          radius - 0.11 + Math.cos(a) * 0.11,
          Math.sin(a) * 0.16,
        ),
      );
    }
    for (let k = 16; k >= 0; k--)
      profile.push(
        new THREE.Vector2(
          (k / 16) * (radius - 0.1),
          0.16 + Math.sin((k / 16) * Math.PI) * 0.014,
        ),
      );
    const geometry = smoothGeometry(new THREE.LatheGeometry(profile, segments));
    const p = geometry.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i),
        z = p.getZ(i),
        a = Math.atan2(z, x),
        y = p.getY(i);
      const irregular =
        1 + Math.sin(a * 7 + layer) * 0.009 + Math.cos(a * 11 - layer) * 0.004;
      p.setXYZ(
        i,
        x * irregular,
        y + mottling(x, y + layer, z) * 0.008,
        z * irregular,
      );
    }
    paint(geometry, (x, y, z) => {
      const radial = Math.hypot(x, z) / radius;
      const toasted =
        THREE.MathUtils.smoothstep(Math.abs(y), 0.105, 0.158) *
        (1 - THREE.MathUtils.smoothstep(radial, 0.88, 1));
      return new THREE.Color("#E9C78C").lerp(
        new THREE.Color("#8F481C"),
        toasted * (0.93 + mottling(x, y + layer, z) * 0.1),
      );
    });
    geometry.computeVertexNormals();
    weldNormals(geometry, normalGroups(geometry));
    const material = silicone("#FFFFFF", 0.53, 0.025);
    material.vertexColors = true;
    material.clearcoat = 0.08;
    const pancake = object(geometry, material);
    pancake.position.set(
      Math.sin(layer * 2.1) * 0.035,
      -0.38 + layer * 0.324,
      Math.cos(layer * 2.1) * 0.025,
    );
    pancake.rotation.y = layer * 0.31;
    root.add(pancake);
  }
  const syrupMaterial = silicone("#A96A25", 0.18, 0.003);
  syrupMaterial.clearcoat = 0.85;
  const syrup = object(
    new THREE.CylinderGeometry(0.56, 0.58, 0.014, 72, 1),
    syrupMaterial,
  );
  syrup.position.set(-0.04, 0.442, 0.04);
  syrup.scale.set(1, 1, 0.87);
  root.add(syrup);
  const butter = object(
    roundedBox(0.48, 0.135, 0.42, 0.045, 8),
    silicone("#F9DE7D", 0.32),
  );
  butter.position.set(-0.12, 0.505, 0.03);
  butter.rotation.y = 0.23;
  root.add(butter);
  return root;
}
