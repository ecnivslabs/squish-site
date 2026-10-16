import * as THREE from "three";
import type { DeformableModel } from "./DeformableModel";
import type { PhysicsClient } from "./physics/PhysicsClient";

export function connectPlaygroundInput(
  element: HTMLElement,
  camera: THREE.Camera,
  models: DeformableModel[],
  world: PhysicsClient,
  resume: () => void,
  announce: (text: string) => void,
) {
  const raycaster = new THREE.Raycaster(),
    pointer = new THREE.Vector2();
  const meshes = models.flatMap((model) => model.skins.map(({ mesh }) => mesh));
  const plane = new THREE.Plane(),
    direction = new THREE.Vector3(),
    target = new THREE.Vector3();
  const names = ["Butter", "Cheese", "Pancakes"];
  let selected = 0;
  let held: {
    model: DeformableModel;
    pointer: number;
    x: number;
    y: number;
    moved: boolean;
  } | null = null;
  let keyboardHeld = false;
  let hovered: {
    hit: THREE.Intersection;
    bary: THREE.Vector3;
    x: number;
    y: number;
    time: number;
  } | null = null;
  const setRay = (event: PointerEvent) => {
    const rect = element.getBoundingClientRect();
    pointer.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      1 - ((event.clientY - rect.top) / rect.height) * 2,
    );
    raycaster.setFromCamera(pointer, camera);
  };
  const pick = (event: PointerEvent, forgiving = false) => {
    setRay(event);
    let hit = raycaster.intersectObjects(meshes, false)[0];
    if (
      !hit &&
      forgiving &&
      hovered &&
      performance.now() - hovered.time < 120 &&
      Math.hypot(event.clientX - hovered.x, event.clientY - hovered.y) < 12
    ) {
      const mesh = hovered.hit.object as THREE.Mesh;
      const face = hovered.hit.face!;
      const vertices = mesh.geometry.attributes.position;
      const point = new THREE.Vector3();
      for (const [corner, index] of [face.a, face.b, face.c].entries())
        point.addScaledVector(
          new THREE.Vector3().fromBufferAttribute(vertices, index),
          hovered.bary.getComponent(corner),
        );
      hit = { ...hovered.hit, point };
    }
    if (!hit && forgiving) {
      const rect = element.getBoundingClientRect(),
        exact = pointer.clone();
      for (const [x, y] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        pointer.set(
          exact.x + (x * 16) / rect.width,
          exact.y + (y * 16) / rect.height,
        );
        raycaster.setFromCamera(pointer, camera);
        hit = raycaster.intersectObjects(meshes, false)[0];
        if (hit) break;
      }
    }
    return hit;
  };
  const wake = () => {
    world.wake();
    resume();
  };
  const release = (pulse = false) => {
    const wasHeld = held || keyboardHeld;
    const previous = held;
    // Keep a quick tap visible for a few physics frames, even on a slow display.
    for (const [index, model] of models.entries())
      world.release(
        index,
        undefined,
        pulse && previous && !previous.moved && model === previous.model
          ? 0.18
          : 0,
      );
    held = null;
    if (previous && element.hasPointerCapture(previous.pointer))
      element.releasePointerCapture(previous.pointer);
    keyboardHeld = false;
    element.classList.remove("is-grabbing");
    if (wasHeld) announce(`${names[selected]} released.`);
    wake();
  };
  const down = (event: PointerEvent) => {
    if (!event.isPrimary || event.button !== 0) return;
    if (held && held.pointer !== event.pointerId) return;
    if (held) release();
    const hit = pick(event, true);
    const model =
      hit &&
      models.find((model) =>
        model.skins.some(({ mesh }) => mesh === hit.object),
      );
    if (!model || !hit.face) return;
    release();
    const grip = model.createGrip(hit, raycaster.ray.direction);
    if (!grip) return;
    selected = models.indexOf(model);
    world.grab(selected, grip);
    plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), hit.point);
    held = {
      model,
      pointer: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      moved: false,
    };
    element.setPointerCapture(event.pointerId);
    element.focus({ preventScroll: true });
    element.classList.add("is-grabbing");
    announce(
      `${names[selected]} held. Squeezing while you hold. Move to lift. Release to drop or throw.`,
    );
    event.preventDefault();
    wake();
  };
  const move = (event: PointerEvent) => {
    if (!held) {
      const hit = pick(event);
      hovered = hit?.barycoord
        ? {
            hit,
            bary: hit.barycoord.clone(),
            x: event.clientX,
            y: event.clientY,
            time: performance.now(),
          }
        : null;
      element.style.cursor = hit ? "grab" : "default";
      return;
    }
    setRay(event);
    if (event.pointerId !== held.pointer) return;
    if (event.pointerType === "mouse" && event.buttons === 0) {
      release();
      return;
    }
    held.moved ||=
      Math.hypot(event.clientX - held.x, event.clientY - held.y) > 5;
    if (!held.moved || !raycaster.ray.intersectPlane(plane, target)) return;
    target.x = THREE.MathUtils.clamp(target.x, -2.6, 2.6);
    target.y = THREE.MathUtils.clamp(target.y, -1, 3.05);
    world.moveGrab(selected, target.toArray());
    event.preventDefault();
    wake();
  };
  const up = (event: PointerEvent) => {
    if (held?.pointer === event.pointerId) release(event.type === "pointerup");
  };
  const beginKeyboardGrab = () => {
    const model = models[selected];
    release();
    camera.getWorldDirection(direction);
    target.fromArray(model.body.center).addScaledVector(direction, -10);
    raycaster.set(target, direction);
    const hit = raycaster.intersectObjects(
      model.skins.map(({ mesh }) => mesh),
      false,
    )[0];
    const grip = hit && model.createGrip(hit, direction);
    if (!grip) return;
    world.grab(selected, grip);
    keyboardHeld = true;
    announce(
      `${names[selected]} held. Arrow keys move it. Space releases. Shift and an arrow throws.`,
    );
  };
  const keydown = (event: KeyboardEvent) => {
    if (held || event.altKey || event.ctrlKey || event.metaKey) return;
    if (["1", "2", "3"].includes(event.key)) {
      release();
      selected = Number(event.key) - 1;
      announce(`${names[selected]} selected. Space grabs and squishes.`);
    } else if (event.code === "Space" || event.key === "Enter") {
      if (event.repeat) return;
      if (keyboardHeld) release();
      else beginKeyboardGrab();
    } else if (event.key === "Escape") release();
    else if (
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    ) {
      if (!keyboardHeld) beginKeyboardGrab();
      const x =
        event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
      const y =
        event.key === "ArrowUp" ? 1 : event.key === "ArrowDown" ? -1 : 0;
      if (event.shiftKey) {
        if (event.repeat) return;
        world.release(selected, [x * 5, y * 5 + 3, 0]);
        keyboardHeld = false;
        announce(`${names[selected]} thrown.`);
      } else if (world.goal(selected)) {
        const point = world.goal(selected)!;
        world.moveGrab(selected, [
          THREE.MathUtils.clamp(point[0] + x * 0.25, -2.5, 2.5),
          THREE.MathUtils.clamp(point[1] + y * 0.25, -0.9, 2.9),
          point[2],
        ]);
      }
    } else return;
    event.preventDefault();
    wake();
  };
  const blur = () => {
    release();
  };
  const visibility = () => {
    if (document.hidden) blur();
  };
  element.addEventListener("pointerdown", down);
  element.addEventListener("pointermove", move);
  element.addEventListener("pointerup", up);
  element.addEventListener("pointercancel", up);
  element.addEventListener("lostpointercapture", up);
  element.addEventListener("keydown", keydown);
  element.addEventListener("blur", blur);
  window.addEventListener("pointerup", up);
  window.addEventListener("blur", blur);
  document.addEventListener("visibilitychange", visibility);
  return () => {
    element.removeEventListener("pointerdown", down);
    element.removeEventListener("pointermove", move);
    element.removeEventListener("pointerup", up);
    element.removeEventListener("pointercancel", up);
    element.removeEventListener("lostpointercapture", up);
    element.removeEventListener("keydown", keydown);
    element.removeEventListener("blur", blur);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("blur", blur);
    document.removeEventListener("visibilitychange", visibility);
    const previous = held;
    held = null;
    if (previous && element.hasPointerCapture(previous.pointer))
      element.releasePointerCapture(previous.pointer);
    element.classList.remove("is-grabbing");
    element.style.removeProperty("cursor");
    for (let index = 0; index < models.length; index++) world.release(index);
  };
}
