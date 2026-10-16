import { Embedding } from "./embedding";
import type { Attachment } from "./Grip";
import type { Lattice, LatticeOptions, Vec3 } from "./lattice";

export class SmoothEmbedding {
  private readonly fallback: Embedding;
  private readonly spacing: number[];
  private readonly cosine: number;
  private readonly sine: number;
  private readonly moment = new Float64Array(20);

  constructor(
    private readonly lattice: Lattice,
    options: LatticeOptions & { rotation?: number },
  ) {
    this.fallback = new Embedding(lattice);
    this.spacing = options.size.map(
      (length, axis) => length / options.cells[axis],
    );
    this.cosine = Math.cos(options.rotation ?? 0);
    this.sine = Math.sin(options.rotation ?? 0);
  }

  at(point: Vec3): Attachment {
    const { rest } = this.lattice;
    const indices: number[] = [],
      kernels: number[] = [],
      basis: number[][] = [];
    const matrix = this.moment;
    matrix.fill(0);
    for (let i = 0; i < rest.length; i += 3) {
      const dx = rest[i] - point[0],
        dz = rest[i + 2] - point[2];
      const x = (dx * this.cosine - dz * this.sine) / this.spacing[0];
      const y = (rest[i + 1] - point[1]) / this.spacing[1];
      const z = (dx * this.sine + dz * this.cosine) / this.spacing[2];
      const radius = Math.hypot(x, y, z) / 2.15;
      if (radius >= 1) continue;
      const kernel = (1 - radius) ** 4 * (4 * radius + 1);
      const q = [1, x, y, z];
      indices.push(i / 3);
      kernels.push(kernel);
      basis.push(q);
      for (let row = 0; row < 4; row++)
        for (let column = 0; column < 4; column++)
          matrix[row * 5 + column] += kernel * q[row] * q[column];
    }
    matrix[4] = 1;
    // Linear MLS reproduces affine motion while its compact kernel removes cage creases.
    for (let column = 0; column < 4; column++) {
      let pivot = column;
      for (let row = column + 1; row < 4; row++)
        if (
          Math.abs(matrix[row * 5 + column]) >
          Math.abs(matrix[pivot * 5 + column])
        )
          pivot = row;
      if (Math.abs(matrix[pivot * 5 + column]) < 1e-10)
        return this.fallback.at(point);
      for (let j = column; j < 5; j++) {
        const previous = matrix[column * 5 + j];
        matrix[column * 5 + j] = matrix[pivot * 5 + j];
        matrix[pivot * 5 + j] = previous;
      }
      const diagonal = matrix[column * 5 + column];
      for (let j = column; j < 5; j++) matrix[column * 5 + j] /= diagonal;
      for (let row = 0; row < 4; row++) {
        if (row === column) continue;
        const scale = matrix[row * 5 + column];
        for (let j = column; j < 5; j++)
          matrix[row * 5 + j] -= scale * matrix[column * 5 + j];
      }
    }
    return {
      indices,
      weights: kernels.map(
        (kernel, i) =>
          kernel *
          basis[i].reduce(
            (sum, value, axis) => sum + value * matrix[axis * 5 + 4],
            0,
          ),
      ),
    };
  }
}
