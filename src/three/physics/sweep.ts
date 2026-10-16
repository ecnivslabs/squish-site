const basis = new Float64Array(18),
  coefficients = new Float64Array(4);
const determinant = (a: number, b: number, c: number) =>
  basis[a] * (basis[b + 1] * basis[c + 2] - basis[b + 2] * basis[c + 1]) +
  basis[a + 1] * (basis[b + 2] * basis[c] - basis[b] * basis[c + 2]) +
  basis[a + 2] * (basis[b] * basis[c + 1] - basis[b + 1] * basis[c]);

export function volumePolynomial(
  previous: Float64Array,
  current: Float64Array,
  indices: ArrayLike<number>,
  minimum = 0,
) {
  const base = indices[0] * 3;
  for (let k = 0; k < 3; k++) {
    for (let axis = 0; axis < 3; axis++) {
      const offset = k * 3 + axis;
      basis[offset] =
        previous[indices[k + 1] * 3 + axis] - previous[base + axis];
      basis[offset + 9] =
        current[indices[k + 1] * 3 + axis] -
        current[base + axis] -
        basis[offset];
    }
  }
  coefficients[0] = determinant(0, 3, 6) - minimum * 6;
  coefficients[1] =
    determinant(9, 3, 6) + determinant(0, 12, 6) + determinant(0, 3, 15);
  coefficients[2] =
    determinant(9, 12, 6) + determinant(9, 3, 15) + determinant(0, 12, 15);
  coefficients[3] = determinant(9, 12, 15);
  return coefficients;
}

export function firstCrossing(polynomial: ArrayLike<number>) {
  const a = polynomial[0],
    b = polynomial[1],
    c = polynomial[2],
    d = polynomial[3];
  if (a + Math.min(0, b) + Math.min(0, c) + Math.min(0, d) >= -1e-12)
    return null;
  const value = (t: number) => ((d * t + c) * t + b) * t + a;
  const divisions = [0, 1];
  if (Math.abs(d) < 1e-14) {
    if (Math.abs(c) > 1e-14) divisions.push(-b / (2 * c));
  } else {
    const discriminant = c * c - 3 * d * b;
    if (discriminant >= 0) {
      const root = Math.sqrt(discriminant);
      divisions.push((-c - root) / (3 * d), (-c + root) / (3 * d));
    }
  }
  const points = divisions
    .filter((t) => t >= 0 && t <= 1)
    .sort((x, y) => x - y);
  for (let i = 1; i < points.length; i++) {
    let low = points[i - 1],
      high = points[i];
    if (value(low) < -1e-12 || value(high) >= -1e-12) continue;
    for (let k = 0; k < 24; k++) {
      const middle = (low + high) * 0.5;
      if (value(middle) > 0) low = middle;
      else high = middle;
    }
    return low;
  }
  return null;
}
