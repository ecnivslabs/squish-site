import { signedVolume, type Lattice } from "./lattice";

export function solveEdges(
  lattice: Lattice,
  positions: Float64Array,
  lambdas: Float64Array,
  alpha: number,
  targets = lattice.lengths,
) {
  const { edges, lengths } = lattice;
  for (let k = 0; k < lengths.length; k++) {
    const a = edges[k * 2] * 3,
      b = edges[k * 2 + 1] * 3;
    const x = positions[a] - positions[b],
      y = positions[a + 1] - positions[b + 1],
      z = positions[a + 2] - positions[b + 2];
    const length = Math.hypot(x, y, z);
    if (length < 1e-9) continue;
    const bounded = Math.max(
      lengths[k] * 0.55,
      Math.min(lengths[k] * 1.55, length),
    );
    const delta =
      bounded !== length
        ? (bounded - length) * 0.5
        : (targets[k] - length - alpha * lambdas[k]) / (2 + alpha);
    if (bounded === length) lambdas[k] += delta;
    const scale = delta / length;
    positions[a] += x * scale;
    positions[a + 1] += y * scale;
    positions[a + 2] += z * scale;
    positions[b] -= x * scale;
    positions[b + 1] -= y * scale;
    positions[b + 2] -= z * scale;
  }
}

const gradients = new Float64Array(12);
const faceOrder = [
  [1, 3, 2],
  [0, 2, 3],
  [0, 3, 1],
  [0, 1, 2],
];

export function solveVolumes(
  lattice: Lattice,
  positions: Float64Array,
  lambdas: Float64Array,
  alpha: number,
) {
  const { tetrahedra, volumes } = lattice;
  for (let k = 0; k < volumes.length; k++) {
    const offset = k * 4;
    let denominator = alpha;
    for (let vertex = 0; vertex < 4; vertex++) {
      const order = faceOrder[vertex];
      const a = tetrahedra[offset + order[0]] * 3;
      const b = tetrahedra[offset + order[1]] * 3;
      const c = tetrahedra[offset + order[2]] * 3;
      const bx = positions[b] - positions[a],
        by = positions[b + 1] - positions[a + 1],
        bz = positions[b + 2] - positions[a + 2];
      const cx = positions[c] - positions[a],
        cy = positions[c + 1] - positions[a + 1],
        cz = positions[c + 2] - positions[a + 2];
      const x = (by * cz - bz * cy) / 6,
        y = (bz * cx - bx * cz) / 6,
        z = (bx * cy - by * cx) / 6;
      gradients[vertex * 3] = x;
      gradients[vertex * 3 + 1] = y;
      gradients[vertex * 3 + 2] = z;
      denominator += x * x + y * y + z * z;
    }
    if (denominator < 1e-12) continue;
    const volume = signedVolume(
      positions,
      tetrahedra[offset] * 3,
      tetrahedra[offset + 1] * 3,
      tetrahedra[offset + 2] * 3,
      tetrahedra[offset + 3] * 3,
    );
    const delta = (volumes[k] - volume - alpha * lambdas[k]) / denominator;
    lambdas[k] += delta;
    for (let vertex = 0; vertex < 4; vertex++) {
      const i = tetrahedra[offset + vertex] * 3;
      for (let axis = 0; axis < 3; axis++)
        positions[i + axis] += gradients[vertex * 3 + axis] * delta;
    }
  }
}

export function dampStrain(
  lattice: Lattice,
  positions: Float64Array,
  velocities: Float64Array,
  strength: number,
) {
  const { edges } = lattice;
  for (let k = 0; k < edges.length; k += 2) {
    const a = edges[k] * 3,
      b = edges[k + 1] * 3;
    const x = positions[a] - positions[b],
      y = positions[a + 1] - positions[b + 1],
      z = positions[a + 2] - positions[b + 2];
    const lengthSquared = x * x + y * y + z * z;
    if (lengthSquared < 1e-12) continue;
    const scale =
      (((velocities[a] - velocities[b]) * x +
        (velocities[a + 1] - velocities[b + 1]) * y +
        (velocities[a + 2] - velocities[b + 2]) * z) /
        lengthSquared) *
      strength *
      0.5;
    velocities[a] -= x * scale;
    velocities[a + 1] -= y * scale;
    velocities[a + 2] -= z * scale;
    velocities[b] += x * scale;
    velocities[b + 1] += y * scale;
    velocities[b + 2] += z * scale;
  }
}
