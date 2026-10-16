import { createLattice, type LatticeOptions, type Vec3 } from "./lattice";
import { dampStrain, solveEdges, solveVolumes } from "./constraints";
import { Grip, type Attachment, type Pinch } from "./Grip";
import { StrainMemory } from "./StrainMemory";
export type { Attachment } from "./Grip";

export interface BodyOptions extends LatticeOptions {
  position?: Vec3;
  rotation?: number;
  edgeCompliance?: number;
  volumeCompliance?: number;
  viscoelastic?: boolean;
}

export class SoftBody {
  readonly lattice;
  readonly positions: Float64Array;
  readonly previous: Float64Array;
  readonly velocities: Float64Array;
  readonly incoming: Float64Array;
  readonly contacts: Float64Array;
  readonly edgeLambdas: Float64Array;
  readonly volumeLambdas: Float64Array;
  readonly edgeCompliance: number;
  readonly volumeCompliance: number;
  readonly memory?: StrainMemory;
  grab: Grip | null = null;

  constructor(readonly options: BodyOptions) {
    this.lattice = createLattice(options);
    const { rest } = this.lattice;
    const origin = options.position ?? [0, 0, 0];
    const cosine = Math.cos(options.rotation ?? 0),
      sine = Math.sin(options.rotation ?? 0);
    for (let i = 0; i < rest.length; i += 3) {
      const x = rest[i],
        z = rest[i + 2];
      rest[i] = x * cosine + z * sine + origin[0];
      rest[i + 1] += origin[1];
      rest[i + 2] = z * cosine - x * sine + origin[2];
    }
    this.positions = rest.slice();
    this.previous = rest.slice();
    this.velocities = new Float64Array(rest.length);
    this.incoming = new Float64Array(rest.length);
    this.contacts = new Float64Array(rest.length);
    this.edgeLambdas = new Float64Array(this.lattice.lengths.length);
    this.volumeLambdas = new Float64Array(this.lattice.volumes.length);
    this.edgeCompliance = options.edgeCompliance ?? 0.00008;
    this.volumeCompliance = options.volumeCompliance ?? 0.00000001;
    if (options.viscoelastic) this.memory = new StrainMemory(this.lattice);
  }

  get center(): [number, number, number] {
    const center: [number, number, number] = [0, 0, 0];
    const count = this.positions.length / 3;
    for (let i = 0; i < this.positions.length; i++)
      center[i % 3] += this.positions[i] / count;
    return center;
  }

  beginGrab(attachment: Attachment, point: Vec3, pads: readonly Pinch[] = []) {
    this.grab = new Grip({ attachment, position: point }, pads);
  }

  moveGrab(point: Vec3) {
    if (this.grab) this.grab.goal = [...point];
  }

  release(velocity?: Vec3, minimumDuration = 0) {
    if (this.grab && !this.grab.end(minimumDuration)) {
      this.memory?.capture(this.positions);
      this.grab = null;
    }
    if (!velocity) return;
    const speed = Math.hypot(...velocity);
    const scale = speed > 12 ? 12 / speed : 1;
    for (let i = 0; i < this.velocities.length; i++)
      this.velocities[i] += velocity[i % 3] * scale;
  }

  prepare(dt: number, gravity: number) {
    if (this.grab && !this.grab.prepare(dt)) {
      this.memory?.capture(this.positions);
      this.grab = null;
    }
    this.memory?.advance(this.positions, this.grab !== null, dt);
    this.previous.set(this.positions);
    this.contacts.fill(0);
    this.edgeLambdas.fill(0);
    this.volumeLambdas.fill(0);
    const drag = Math.exp(-0.45 * dt);
    for (let i = 0; i < this.positions.length; i += 3) {
      this.velocities[i + 1] += gravity * dt;
      const speed = Math.hypot(
        this.velocities[i],
        this.velocities[i + 1],
        this.velocities[i + 2],
      );
      const scale = drag * (speed > 16 ? 16 / speed : 1);
      for (let axis = 0; axis < 3; axis++) {
        this.velocities[i + axis] *= scale;
        this.incoming[i + axis] = this.velocities[i + axis];
        this.positions[i + axis] += this.velocities[i + axis] * dt;
      }
    }
  }

  solve(dt: number) {
    solveEdges(
      this.lattice,
      this.positions,
      this.edgeLambdas,
      this.edgeCompliance / (dt * dt),
      this.memory?.lengths,
    );
    this.grab?.solve(this.positions, dt);
    solveVolumes(
      this.lattice,
      this.positions,
      this.volumeLambdas,
      this.volumeCompliance / (dt * dt),
    );
  }

  finish(dt: number) {
    for (let i = 0; i < this.positions.length; i++)
      this.velocities[i] = (this.positions[i] - this.previous[i]) / dt;
    dampStrain(
      this.lattice,
      this.positions,
      this.velocities,
      1 - Math.exp(-(this.memory ? 55 : 20) * dt),
    );
    let speedSquared = 0,
      impact = false;
    for (let i = 0; i < this.positions.length; i += 3) {
      const nx = this.contacts[i],
        ny = this.contacts[i + 1],
        nz = this.contacts[i + 2];
      const length = Math.hypot(nx, ny, nz);
      if (length > 0) {
        const x = nx / length,
          y = ny / length,
          z = nz / length;
        const incoming =
          this.incoming[i] * x +
          this.incoming[i + 1] * y +
          this.incoming[i + 2] * z;
        if (incoming < -1) impact = true;
        const normal =
          this.velocities[i] * x +
          this.velocities[i + 1] * y +
          this.velocities[i + 2] * z;
        const correction = Math.max(-normal, 0);
        this.velocities[i] += x * correction;
        this.velocities[i + 1] += y * correction;
        this.velocities[i + 2] += z * correction;
        const tx = this.velocities[i] - x * Math.max(normal, 0);
        const ty = this.velocities[i + 1] - y * Math.max(normal, 0);
        const tz = this.velocities[i + 2] - z * Math.max(normal, 0);
        const tangent = Math.hypot(tx, ty, tz);
        const friction = Math.min(
          1,
          ((Math.max(0, -incoming) + 9.8 * dt) * 0.65) /
            Math.max(tangent, 1e-9),
        );
        this.velocities[i] -= tx * friction;
        this.velocities[i + 1] -= ty * friction;
        this.velocities[i + 2] -= tz * friction;
      }
      speedSquared +=
        this.velocities[i] ** 2 +
        this.velocities[i + 1] ** 2 +
        this.velocities[i + 2] ** 2;
    }
    if (impact && !this.grab) this.memory?.capture(this.positions);
    return speedSquared / (this.positions.length / 3);
  }
}
