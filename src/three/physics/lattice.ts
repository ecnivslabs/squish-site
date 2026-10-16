export type Vec3 = readonly [number, number, number];

export interface LatticeOptions {
  size: Vec3;
  cells: readonly [number, number, number];
  shape?: "box" | "cylinder";
  topInset?: number;
}

export interface Lattice {
  rest: Float64Array;
  tetrahedra: Uint16Array;
  edges: Uint16Array;
  lengths: Float64Array;
  volumes: Float64Array;
  surface: Uint16Array;
  surfaceVertices: Uint16Array;
  radius: number;
}

export function signedVolume(
  p: Float64Array,
  a: number,
  b: number,
  c: number,
  d: number,
) {
  const bx = p[b] - p[a],
    by = p[b + 1] - p[a + 1],
    bz = p[b + 2] - p[a + 2];
  const cx = p[c] - p[a],
    cy = p[c + 1] - p[a + 1],
    cz = p[c + 2] - p[a + 2];
  const dx = p[d] - p[a],
    dy = p[d + 1] - p[a + 1],
    dz = p[d + 2] - p[a + 2];
  return (
    (bx * (cy * dz - cz * dy) +
      by * (cz * dx - cx * dz) +
      bz * (cx * dy - cy * dx)) /
    6
  );
}

export function createLattice({
  size,
  cells,
  shape = "box",
  topInset = 0,
}: LatticeOptions): Lattice {
  const [nx, ny, nz] = cells;
  if (!Number.isFinite(topInset) || topInset < 0 || topInset >= size[1])
    throw new Error("The cage top inset must fit inside the body.");
  if (
    cells.some((n) => !Number.isInteger(n) || n < 1) ||
    size.some((n) => !Number.isFinite(n) || n <= 0)
  ) {
    throw new Error(
      "A soft body needs positive dimensions and whole lattice subdivisions.",
    );
  }
  const count = (nx + 1) * (ny + 1) * (nz + 1);
  if (count > 65535)
    throw new Error("The soft-body lattice exceeds its index capacity.");
  const rest = new Float64Array(count * 3);
  const index = (x: number, y: number, z: number) =>
    x + (nx + 1) * (y + (ny + 1) * z);
  for (let z = 0; z <= nz; z++) {
    for (let y = 0; y <= ny; y++) {
      for (let x = 0; x <= nx; x++) {
        const i = index(x, y, z) * 3;
        const u = (x / nx) * 2 - 1,
          v = (z / nz) * 2 - 1;
        rest[i] =
          u *
          size[0] *
          0.5 *
          (shape === "cylinder" ? Math.sqrt(1 - (v * v) / 2) : 1);
        rest[i + 1] = (y / ny - 0.5) * size[1];
        rest[i + 2] =
          v *
          size[2] *
          0.5 *
          (shape === "cylinder" ? Math.sqrt(1 - (u * u) / 2) : 1);
        if (topInset) {
          const peak = Math.exp(
            -(
              (rest[i] / (size[0] * 0.15)) ** 4 +
              (rest[i + 2] / (size[2] * 0.15)) ** 4
            ),
          );
          rest[i + 1] -= topInset * (1 - peak) * (y / ny) ** 3;
        }
      }
    }
  }
  const tetrahedra: number[] = [],
    volumes: number[] = [];
  const edgeSet = new Set<string>(),
    edges: number[] = [],
    lengths: number[] = [];
  const split = [
    [0, 1, 3, 7],
    [0, 3, 2, 7],
    [0, 2, 6, 7],
    [0, 6, 4, 7],
    [0, 4, 5, 7],
    [0, 5, 1, 7],
  ];
  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        const corners = Array.from({ length: 8 }, (_, k) =>
          index(x + (k & 1), y + ((k >> 1) & 1), z + ((k >> 2) & 1)),
        );
        for (const template of split) {
          const tet = template.map((k) => corners[k]);
          let volume = signedVolume(
            rest,
            tet[0] * 3,
            tet[1] * 3,
            tet[2] * 3,
            tet[3] * 3,
          );
          if (volume < 0) {
            [tet[0], tet[1]] = [tet[1], tet[0]];
            volume = -volume;
          }
          tetrahedra.push(...tet);
          volumes.push(volume);
          for (let a = 0; a < 4; a++) {
            for (let b = a + 1; b < 4; b++) {
              const first = Math.min(tet[a], tet[b]),
                second = Math.max(tet[a], tet[b]);
              const key = `${first}:${second}`;
              if (edgeSet.has(key)) continue;
              edgeSet.add(key);
              edges.push(first, second);
              lengths.push(
                Math.hypot(
                  rest[first * 3] - rest[second * 3],
                  rest[first * 3 + 1] - rest[second * 3 + 1],
                  rest[first * 3 + 2] - rest[second * 3 + 2],
                ),
              );
            }
          }
        }
      }
    }
  }
  const faces = new Map<string, number[]>();
  for (let i = 0; i < tetrahedra.length; i += 4) {
    for (const face of [
      [1, 2, 3],
      [0, 3, 2],
      [0, 1, 3],
      [0, 2, 1],
    ]) {
      const vertices = face.map((k) => tetrahedra[i + k]);
      const key = [...vertices].sort((a, b) => a - b).join(":");
      if (faces.has(key)) faces.delete(key);
      else faces.set(key, vertices);
    }
  }
  const surface = [...faces.values()].flat();
  return {
    rest,
    tetrahedra: new Uint16Array(tetrahedra),
    edges: new Uint16Array(edges),
    lengths: new Float64Array(lengths),
    volumes: new Float64Array(volumes),
    surface: new Uint16Array(surface),
    surfaceVertices: new Uint16Array([...new Set(surface)]),
    radius: Math.min(size[0] / nx, size[1] / ny, size[2] / nz) * 0.51,
  };
}
