import type { BodyOptions, Attachment } from "./SoftBody";
import type { Pinch } from "./Grip";
import type { Bounds } from "./contacts";
import type { Vec3 } from "./lattice";

export interface GripRequest {
  attachment: Attachment;
  point: Vec3;
  pads: Pinch[];
}

export type PhysicsCommand =
  | ({ kind: "grab"; body: number } & GripRequest)
  | { kind: "move"; body: number; point: Vec3 }
  | { kind: "release"; body: number; velocity?: Vec3; minimumDuration: number };

export type PhysicsRequest =
  | { kind: "init"; bodies: BodyOptions[]; bounds: Bounds; settle: number }
  | { kind: "step"; seconds: number; commands: PhysicsCommand[] };

export type PhysicsResponse =
  | { kind: "state"; positions: Float64Array[]; sleeping: boolean }
  | { kind: "error"; message: string };
