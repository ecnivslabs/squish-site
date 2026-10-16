import type { Vec3 } from "./lattice";

export interface Attachment {
  indices: readonly number[];
  weights: readonly number[];
}

export interface GripPoint {
  attachment: Attachment;
  position: Vec3;
}

export interface Pinch {
  front: GripPoint;
  back: GripPoint;
  restDistance: number;
  pressure?: number;
}

interface Contact extends Attachment {
  offset: number[];
  closing: number[];
  lambda: Float64Array;
}

export class Grip {
  readonly target: number[];
  goal: number[];
  private readonly contacts: Contact[] = [];
  private pressure = 0;
  private elapsed = 0;
  private releaseAt = Infinity;

  constructor(point: GripPoint, pads: readonly Pinch[] = []) {
    this.target = [...point.position];
    this.goal = [...point.position];
    const add = (contact: GripPoint, closing: number[]) => {
      this.contacts.push({
        ...contact.attachment,
        offset: contact.position.map(
          (value, axis) => value - point.position[axis],
        ),
        closing,
        lambda: new Float64Array(3),
      });
    };
    if (!pads.length) add(point, [0, 0, 0]);
    for (const { front, back, restDistance, pressure = 1 } of pads) {
      const distance = Math.hypot(
        ...front.position.map((value, axis) => back.position[axis] - value),
      );
      const fraction =
        Math.max(0, distance - restDistance * (1 - 0.36 * pressure)) /
        Math.max(distance * 2, 1e-9);
      const closing = front.position.map(
        (value, axis) => (back.position[axis] - value) * fraction,
      );
      add(front, closing);
      add(
        back,
        closing.map((value) => -value),
      );
    }
  }

  prepare(dt: number) {
    this.elapsed += dt;
    if (this.elapsed >= this.releaseAt) return false;
    const distance = Math.hypot(
      ...this.goal.map((value, axis) => value - this.target[axis]),
    );
    const fraction = Math.min(
      1 - Math.exp(-38 * dt),
      (8 * dt) / Math.max(distance, 1e-9),
    );
    for (let axis = 0; axis < 3; axis++)
      this.target[axis] += (this.goal[axis] - this.target[axis]) * fraction;
    const progress = Math.min(1, this.elapsed / 0.2);
    this.pressure = progress * progress * (3 - 2 * progress);
    for (const contact of this.contacts) contact.lambda.fill(0);
    return true;
  }

  end(minimumDuration: number) {
    this.releaseAt = minimumDuration;
    return this.elapsed < minimumDuration;
  }

  solve(positions: Float64Array, dt: number) {
    const alpha = 0.000004 / (dt * dt);
    for (const { indices, weights, offset, closing, lambda } of this.contacts) {
      let denominator = alpha;
      for (const weight of weights) denominator += weight * weight;
      for (let axis = 0; axis < 3; axis++) {
        let position = 0;
        for (let k = 0; k < indices.length; k++)
          position += positions[indices[k] * 3 + axis] * weights[k];
        const goal =
          this.target[axis] + offset[axis] + closing[axis] * this.pressure;
        const delta = (goal - position - alpha * lambda[axis]) / denominator;
        lambda[axis] += delta;
        for (let k = 0; k < indices.length; k++)
          positions[indices[k] * 3 + axis] += weights[k] * delta;
      }
    }
  }
}
