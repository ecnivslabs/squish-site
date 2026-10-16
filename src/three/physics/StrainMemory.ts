import type { Lattice } from "./lattice";

export class StrainMemory {
  readonly lengths: Float64Array;
  active = false;
  private readonly fast: Float64Array;
  private readonly slow: Float64Array;

  constructor(private readonly lattice: Lattice) {
    this.lengths = lattice.lengths.slice();
    this.fast = new Float64Array(this.lengths.length);
    this.slow = new Float64Array(this.lengths.length);
  }

  capture(positions: Float64Array) {
    for (let k = 0; k < this.fast.length; k++)
      this.fast[k] = this.strain(positions, k);
    this.updateTargets();
  }

  advance(positions: Float64Array, held: boolean, dt: number) {
    for (let k = 0; k < this.fast.length; k++) {
      if (held) {
        const strain = this.strain(positions, k);
        this.fast[k] += (strain - this.fast[k]) * (1 - Math.exp(-12 * dt));
        this.slow[k] += (strain - this.slow[k]) * (1 - Math.exp(-1.5 * dt));
      } else {
        // Local strain history gives deeper dents a longer recovery tail.
        this.fast[k] *= Math.exp(-dt / (1.15 + Math.abs(this.fast[k]) * 2));
        this.slow[k] *= Math.exp(-dt / (4.5 + Math.abs(this.slow[k]) * 4));
      }
    }
    this.updateTargets();
  }

  private strain(positions: Float64Array, k: number) {
    const a = this.lattice.edges[k * 2] * 3;
    const b = this.lattice.edges[k * 2 + 1] * 3;
    const length = Math.hypot(
      positions[a] - positions[b],
      positions[a + 1] - positions[b + 1],
      positions[a + 2] - positions[b + 2],
    );
    return Math.max(-0.4, Math.min(0.5, length / this.lattice.lengths[k] - 1));
  }

  private updateTargets() {
    let maximum = 0;
    for (let k = 0; k < this.lengths.length; k++) {
      const strain = this.fast[k] * 0.86 + this.slow[k] * 0.1;
      this.lengths[k] = this.lattice.lengths[k] * (1 + strain);
      maximum = Math.max(maximum, Math.abs(strain));
    }
    this.active = maximum > 0.0025;
  }
}
