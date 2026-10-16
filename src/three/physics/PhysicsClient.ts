import type { SoftBody } from "./SoftBody";
import type { Bounds } from "./contacts";
import type { Vec3 } from "./lattice";
import type {
  GripRequest,
  PhysicsCommand,
  PhysicsRequest,
  PhysicsResponse,
} from "./protocol";

export class PhysicsClient {
  sleeping = false;
  private readonly worker: Worker;
  private busy = true;
  private disposed = false;
  private queuedTime = 0;
  private commands: PhysicsCommand[] = [];
  private readonly goals: (Vec3 | null)[];
  private previous: Float64Array[];
  private current: Float64Array[];
  private receivedAt = 0;
  private interval = 16;
  private fraction = -1;

  constructor(
    private readonly bodies: SoftBody[],
    bounds: Bounds,
    reducedMotion: boolean,
    private readonly update: () => void,
    private readonly failed: (error: Error) => void,
  ) {
    this.goals = bodies.map(() => null);
    this.previous = bodies.map((body) => body.positions.slice());
    this.current = this.previous;
    this.worker = new Worker(new URL("./worker.ts", import.meta.url), {
      type: "module",
      name: "Mallow Club physics",
    });
    this.worker.onmessage = ({ data }: MessageEvent<PhysicsResponse>) => {
      if (this.disposed) return;
      if (data.kind === "error") {
        this.fail(new Error(data.message));
        return;
      }
      const now = performance.now();
      this.interval = this.receivedAt
        ? Math.min(40, Math.max(8, now - this.receivedAt))
        : 16;
      this.receivedAt = now;
      this.previous = this.current;
      this.current = data.positions;
      this.fraction = -1;
      this.busy = false;
      this.sleeping = data.sleeping && !this.commands.length;
      this.update();
    };
    this.worker.onerror = (event) => {
      event.preventDefault();
      this.fail(
        new Error(event.message || "The playground worker could not start."),
      );
    };
    this.worker.onmessageerror = () =>
      this.fail(new Error("The playground worker could not return its state."));
    this.post({
      kind: "init",
      bodies: bodies.map((body) => body.options),
      bounds,
      settle: reducedMotion ? 160 : 60,
    });
  }

  private post(request: PhysicsRequest) {
    if (!this.disposed) this.worker.postMessage(request);
  }

  private fail(error: Error) {
    this.dispose();
    this.failed(error);
  }

  private enqueue(command: PhysicsCommand) {
    if (this.disposed) return;
    const last = this.commands.at(-1);
    if (
      command.kind === "move" &&
      last?.kind === "move" &&
      command.body === last.body
    )
      this.commands[this.commands.length - 1] = command;
    else this.commands.push(command);
    this.wake();
  }

  wake() {
    if (!this.disposed) this.sleeping = false;
  }

  grab(body: number, request: GripRequest) {
    this.goals[body] = request.point;
    this.enqueue({ kind: "grab", body, ...request });
  }

  goal(body: number) {
    return this.goals[body];
  }

  moveGrab(body: number, point: Vec3) {
    if (!this.goals[body]) return;
    this.goals[body] = point;
    this.enqueue({ kind: "move", body, point });
  }

  release(body: number, velocity?: Vec3, minimumDuration = 0) {
    this.goals[body] = null;
    this.enqueue({ kind: "release", body, velocity, minimumDuration });
  }

  advance(seconds: number) {
    if (this.disposed) return;
    this.queuedTime = Math.min(1 / 15, this.queuedTime + seconds);
    if (this.busy || (this.sleeping && !this.commands.length)) return;
    this.busy = true;
    this.post({
      kind: "step",
      seconds: this.queuedTime,
      commands: this.commands,
    });
    this.commands = [];
    this.queuedTime = 0;
  }

  sample(timestamp: number) {
    const fraction = Math.min(
      1,
      Math.max(0, (timestamp - this.receivedAt) / this.interval),
    );
    if (fraction === this.fraction) return false;
    this.fraction = fraction;
    for (let k = 0; k < this.bodies.length; k++) {
      const positions = this.bodies[k].positions,
        a = this.previous[k],
        b = this.current[k];
      for (let i = 0; i < positions.length; i++)
        positions[i] = a[i] + (b[i] - a[i]) * fraction;
    }
    return true;
  }

  get active() {
    return !this.disposed && (this.busy || !this.sleeping || this.fraction < 1);
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.busy = false;
    this.sleeping = true;
    this.fraction = 1;
    this.goals.fill(null);
    this.commands = [];
    this.worker.terminate();
  }
}
