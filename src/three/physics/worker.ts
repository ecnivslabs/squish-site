import { SoftBody } from "./SoftBody";
import { SoftWorld } from "./SoftWorld";
import type { PhysicsRequest, PhysicsResponse } from "./protocol";

let world: SoftWorld | undefined;
self.onmessage = ({ data }: MessageEvent<PhysicsRequest>) => {
  try {
    if (data.kind === "init") {
      world = new SoftWorld(data.bounds, -9.8, 1 / 60);
      world.bodies.push(...data.bodies.map((options) => new SoftBody(options)));
      for (let i = 0; i < data.settle && !world.sleeping; i++) world.step();
    } else {
      if (!world) throw new Error("The playground physics is not initialized.");
      if (data.commands.length) world.wake();
      for (const command of data.commands) {
        const body = world.bodies[command.body];
        if (!body) throw new Error("The playground body does not exist.");
        if (command.kind === "grab")
          body.beginGrab(command.attachment, command.point, command.pads);
        else if (command.kind === "move") body.moveGrab(command.point);
        else body.release(command.velocity, command.minimumDuration);
      }
      world.advance(data.seconds);
    }
    const positions = world.bodies.map((body) => body.positions.slice());
    if (positions.some((values) => !values.every(Number.isFinite)))
      throw new Error("The playground physics produced an invalid position.");
    const response: PhysicsResponse = {
      kind: "state",
      positions,
      sleeping: world.sleeping,
    };
    self.postMessage(response, {
      transfer: positions.map((values) => values.buffer),
    });
  } catch (error) {
    const response: PhysicsResponse = {
      kind: "error",
      message:
        error instanceof Error
          ? error.message
          : "The playground physics failed.",
    };
    self.postMessage(response);
  }
};
