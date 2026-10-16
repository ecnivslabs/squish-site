import type { Attachment } from "./SoftBody";
import type { Lattice, Vec3 } from "./lattice";

export function coordinates(
  p: ArrayLike<number>,
  indices: ArrayLike<number>,
  offset: number,
  point: Vec3,
) {
  const a = indices[offset] * 3,
    b = indices[offset + 1] * 3,
    c = indices[offset + 2] * 3,
    d = indices[offset + 3] * 3;
  const ax = p[b] - p[a],
    ay = p[b + 1] - p[a + 1],
    az = p[b + 2] - p[a + 2];
  const bx = p[c] - p[a],
    by = p[c + 1] - p[a + 1],
    bz = p[c + 2] - p[a + 2];
  const cx = p[d] - p[a],
    cy = p[d + 1] - p[a + 1],
    cz = p[d + 2] - p[a + 2];
  const x = point[0] - p[a],
    y = point[1] - p[a + 1],
    z = point[2] - p[a + 2];
  const det =
    ax * (by * cz - bz * cy) +
    ay * (bz * cx - bx * cz) +
    az * (bx * cy - by * cx);
  const u =
    (x * (by * cz - bz * cy) +
      y * (bz * cx - bx * cz) +
      z * (bx * cy - by * cx)) /
    det;
  const v =
    (x * (cy * az - cz * ay) +
      y * (cz * ax - cx * az) +
      z * (cx * ay - cy * ax)) /
    det;
  const w =
    (x * (ay * bz - az * by) +
      y * (az * bx - ax * bz) +
      z * (ax * by - ay * bx)) /
    det;
  return [1 - u - v - w, u, v, w];
}

export class Embedding {
  private readonly buckets = new Map<string, number[]>();
  private readonly spacing: number;

  constructor(private readonly lattice: Lattice) {
    this.spacing = lattice.radius * 3;
    const { rest, tetrahedra } = lattice;
    for (let k = 0; k < tetrahedra.length; k += 4) {
      const min = [Infinity, Infinity, Infinity],
        max = [-Infinity, -Infinity, -Infinity];
      for (let j = 0; j < 4; j++) {
        for (let axis = 0; axis < 3; axis++) {
          const coordinate = Math.floor(
            rest[tetrahedra[k + j] * 3 + axis] / this.spacing,
          );
          min[axis] = Math.min(min[axis], coordinate);
          max[axis] = Math.max(max[axis], coordinate);
        }
      }
      for (let x = min[0]; x <= max[0]; x++) {
        for (let y = min[1]; y <= max[1]; y++) {
          for (let z = min[2]; z <= max[2]; z++) {
            const key = `${x}:${y}:${z}`,
              bucket = this.buckets.get(key);
            if (bucket) bucket.push(k);
            else this.buckets.set(key, [k]);
          }
        }
      }
    }
  }

  at(point: Vec3): Attachment {
    const key = point.map((v) => Math.floor(v / this.spacing)).join(":");
    const candidates =
      this.buckets.get(key) ??
      Array.from({ length: this.lattice.volumes.length }, (_, i) => i * 4);
    let best = Infinity,
      offset = 0,
      weights = [1, 0, 0, 0];
    for (const k of candidates) {
      const values = coordinates(
        this.lattice.rest,
        this.lattice.tetrahedra,
        k,
        point,
      );
      const score = values.reduce(
        (sum, value) => sum + Math.max(0, -value, value - 1) ** 2,
        0,
      );
      if (score >= best) continue;
      best = score;
      offset = k;
      weights = values;
      if (score < 1e-12) break;
    }
    return {
      indices: Array.from(this.lattice.tetrahedra.subarray(offset, offset + 4)),
      weights,
    };
  }
}
