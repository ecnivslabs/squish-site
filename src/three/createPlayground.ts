import * as THREE from "three";
import { createCharacter, disposeScene } from "./characters";
import { DeformableModel } from "./DeformableModel";
import { PhysicsClient } from "./physics/PhysicsClient";
import { connectPlaygroundInput } from "./playgroundInput";
import { lightStudio } from "./studio";
import { roundedBox } from "./materials";

export function createPlayground(
  element: HTMLElement,
  announce: (message: string) => void,
  unavailable: (failed: boolean) => void,
) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  const scene = new THREE.Scene();
  let disposeEnvironment = () => {};
  let disconnectInput = () => {};
  let resizeObserver: ResizeObserver | undefined;
  let observer: IntersectionObserver | undefined;
  let frame = 0,
    visible = true,
    disposed = false,
    last = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const camera = new THREE.OrthographicCamera(-3.2, 3.2, 3.1, -3.1, 0.1, 40);
  camera.position.set(0, 4.2, 10);
  camera.lookAt(0, 0.65, 0);
  let world: PhysicsClient;
  const models: DeformableModel[] = [];
  let pixelRatio = Math.min(window.devicePixelRatio, 1.25);
  let slowFrames = 0;
  let needsRender = true;
  const render = () => renderer.render(scene, camera);
  const animate = (timestamp: number) => {
    frame = 0;
    if (
      disposed ||
      !visible ||
      document.hidden ||
      renderer.getContext().isContextLost()
    )
      return;
    const elapsed = last ? (timestamp - last) / 1000 : 1 / 60;
    slowFrames = elapsed > 0.032 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
    if (slowFrames >= 10 && pixelRatio > 0.75) {
      pixelRatio = Math.max(0.75, pixelRatio * 0.8);
      renderer.setPixelRatio(pixelRatio);
      slowFrames = 0;
    }
    world.advance(elapsed);
    last = timestamp;
    if (world.sample(timestamp)) {
      for (const model of models) model.update();
      needsRender = true;
    }
    if (needsRender) {
      render();
      needsRender = false;
    }
    if (world.active) frame = requestAnimationFrame(animate);
  };
  const resume = () => {
    if (disposed || !visible || document.hidden || frame) return;
    last = 0;
    frame = requestAnimationFrame(animate);
  };
  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    last = 0;
  };
  const visibility = () => {
    if (document.hidden) stop();
    else resume();
  };
  const contextLost = (event: Event) => {
    event.preventDefault();
    stop();
    disconnectInput();
    disconnectInput = () => {};
    unavailable(true);
  };
  const contextRestored = () => {
    try {
      disposeEnvironment();
      disposeEnvironment = lightStudio(scene, renderer);
      disconnectInput = connectPlaygroundInput(
        element,
        camera,
        models,
        world,
        resume,
        announce,
      );
      unavailable(false);
      needsRender = true;
      resume();
    } catch {
      unavailable(true);
    }
  };
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    stop();
    disconnectInput();
    world?.dispose();
    resizeObserver?.disconnect();
    observer?.disconnect();
    document.removeEventListener("visibilitychange", visibility);
    renderer.domElement.removeEventListener("webglcontextlost", contextLost);
    renderer.domElement.removeEventListener(
      "webglcontextrestored",
      contextRestored,
    );
    disposeScene(scene);
    disposeEnvironment();
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };
  try {
    renderer.setPixelRatio(pixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.94;
    renderer.domElement.setAttribute("aria-hidden", "true");
    element.appendChild(renderer.domElement);
    disposeEnvironment = lightStudio(scene, renderer);
    const definitions = [
      {
        kind: "butter" as const,
        color: "#FDE68A",
        scale: 0.69,
        x: -1.62,
        z: -0.75,
        rotation: 0.18,
        cells: [5, 3, 3] as const,
      },
      {
        kind: "cheese" as const,
        color: "#FDE68A",
        scale: 0.78,
        x: 1.62,
        z: -0.55,
        rotation: -0.3,
        cells: [3, 3, 3] as const,
      },
      {
        kind: "pancakes" as const,
        color: "#FFCBA4",
        scale: 0.94,
        x: -0.02,
        z: 0.45,
        rotation: -0.15,
        cells: [5, 3, 5] as const,
        cylinder: true,
      },
    ];
    for (const definition of definitions) {
      const source = createCharacter(definition.kind, definition.color, true);
      const materials = new Map<THREE.Material, THREE.Material>();
      source.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        const convert = (material: THREE.Material) => {
          if (!(material instanceof THREE.MeshPhysicalMaterial))
            return material;
          let standard = materials.get(material);
          if (!standard) {
            standard = new THREE.MeshStandardMaterial().copy(material);
            materials.set(material, standard);
          }
          return standard;
        };
        object.material = Array.isArray(object.material)
          ? object.material.map(convert)
          : convert(object.material);
      });
      materials.forEach((_, material) => material.dispose());
      const size = new THREE.Box3()
        .setFromObject(source)
        .getSize(new THREE.Vector3());
      const model = new DeformableModel(source, {
        ...definition,
        position: [
          definition.x,
          -1.025 + (size.y * definition.scale) / 2,
          definition.z,
        ],
      });
      models.push(model);
      scene.add(model.group);
    }
    const floor = new THREE.Mesh(
      roundedBox(6.2, 0.2, 3.3, 0.08, 10),
      new THREE.MeshStandardMaterial({ color: "#E9DECC", roughness: 0.72 }),
    );
    floor.position.set(0, -1.15, 0);
    floor.receiveShadow = true;
    floor.castShadow = true;
    scene.add(floor);
    for (const model of models) model.update();
    world = new PhysicsClient(
      models.map((model) => model.body),
      {
        min: [-2.75, -1.05, -1.3],
        max: [2.75, 3, 1.45],
        arch: { base: 1.15, radiusX: 2.75, radiusY: 1.85 },
      },
      reduced.matches,
      resume,
      (error) => {
        stop();
        disconnectInput();
        unavailable(true);
        console.error("Unable to simulate the squishy playground.", error);
        announce(
          "Interactive preview unavailable. Product photos remain available.",
        );
        renderer.domElement.style.visibility = "hidden";
      },
    );
    const resize = () => {
      const width = element.clientWidth,
        height = element.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height);
      const aspect = width / height,
        span = Math.max(5.9, 6.3 / aspect);
      camera.left = (-span * aspect) / 2;
      camera.right = (span * aspect) / 2;
      camera.top = span / 2;
      camera.bottom = -span / 2;
      camera.updateProjectionMatrix();
      needsRender = true;
      resume();
    };
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(element);
    resize();
    disconnectInput = connectPlaygroundInput(
      element,
      camera,
      models,
      world,
      resume,
      announce,
    );
    observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) resume();
      else stop();
    });
    observer.observe(element);
    document.addEventListener("visibilitychange", visibility);
    renderer.domElement.addEventListener("webglcontextlost", contextLost);
    renderer.domElement.addEventListener(
      "webglcontextrestored",
      contextRestored,
    );
    render();
    resume();
    return dispose;
  } catch (error) {
    dispose();
    throw error;
  }
}
