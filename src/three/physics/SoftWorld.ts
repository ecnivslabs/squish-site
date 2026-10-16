import {
  contactPairs,
  dampContacts,
  solveBounds,
  solvePairs,
  type Bounds,
} from "./contacts";
import type { SoftBody } from "./SoftBody";
import { limitDeformation } from "./deformation";

export class SoftWorld {
  readonly bodies: SoftBody[] = [];
  sleeping = false;
  private accumulator = 0;
  private quietTime = 0;

  constructor(
    readonly bounds: Bounds,
    readonly gravity = -9.8,
    readonly stepSize = 1 / 120,
  ) {
    if (!Number.isFinite(stepSize) || stepSize <= 0)
      throw new Error("The physics step must be finite and positive.");
  }

  wake() {
    this.sleeping = false;
    this.quietTime = 0;
  }

  advance(seconds: number) {
    if (!Number.isFinite(seconds) || seconds < 0)
      throw new Error("The simulation time must be finite and nonnegative.");
    if (this.sleeping) return;
    this.accumulator += Math.min(seconds, 0.1);
    while (this.accumulator >= this.stepSize) {
      this.accumulator -= this.stepSize;
      this.step();
      if (this.sleeping) {
        this.accumulator = 0;
        break;
      }
    }
  }

  step() {
    const dt = this.stepSize;
    for (const body of this.bodies) body.prepare(dt, this.gravity);
    let pairs: ReturnType<typeof contactPairs> = [];
    for (let iteration = 0; iteration < 7; iteration++) {
      for (const body of this.bodies) {
        body.solve(dt);
        solveBounds(body, this.bounds);
        limitDeformation(body);
      }
      if (iteration % 3 === 0) pairs = contactPairs(this.bodies);
      solvePairs(pairs);
      for (const body of this.bodies) {
        solveBounds(body, this.bounds);
        limitDeformation(body);
      }
    }
    let maximumMeanSpeedSquared = 0;
    for (const body of this.bodies)
      maximumMeanSpeedSquared = Math.max(
        maximumMeanSpeedSquared,
        body.finish(dt),
      );
    dampContacts(pairs);
    const held = this.bodies.some(
      (body) => body.grab !== null || body.memory?.active,
    );
    this.quietTime =
      !held && maximumMeanSpeedSquared < 0.0144 ? this.quietTime + dt : 0;
    if (this.quietTime > 0.8) {
      this.sleeping = true;
      for (const body of this.bodies) body.velocities.fill(0);
    }
  }
}
