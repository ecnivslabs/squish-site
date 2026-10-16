import type { SoftBody } from "./SoftBody";
import { firstCrossing, volumePolynomial } from "./sweep";

export function limitDeformation(body: SoftBody) {
  const { previous, positions, lattice } = body;
  let fraction = 1;
  for (let k = 0; k < lattice.volumes.length; k++) {
    const indices = lattice.tetrahedra.subarray(k * 4, k * 4 + 4);
    const crossing = firstCrossing(
      volumePolynomial(previous, positions, indices, lattice.volumes[k] * 0.15),
    );
    if (crossing !== null) fraction = Math.min(fraction, crossing * 0.98);
  }
  if (fraction < 1) {
    for (let i = 0; i < positions.length; i++)
      positions[i] = previous[i] + (positions[i] - previous[i]) * fraction;
  }
}
