import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export function lightStudio(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
  const room = new RoomEnvironment();
  const generator = new THREE.PMREMGenerator(renderer);
  const environment = generator.fromScene(room, 0.04);
  room.dispose();
  generator.dispose();
  scene.environment = environment.texture;
  scene.environmentIntensity = 0.45;
  const ambient = new THREE.HemisphereLight("#FFFCF5", "#B6C8C3", 0.5);
  scene.add(ambient);
  const key = new THREE.DirectionalLight("#FFF5E6", 2.4);
  key.position.set(-3, 6, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(512, 512);
  key.shadow.camera.left = -4;
  key.shadow.camera.right = 4;
  key.shadow.camera.top = 5;
  key.shadow.camera.bottom = -3;
  key.shadow.normalBias = 0.025;
  key.shadow.bias = -0.0001;
  key.shadow.blurSamples = 8;
  scene.add(key);
  const rim = new THREE.DirectionalLight("#FFFFFF", 1.3);
  rim.position.set(4, 3, -4);
  scene.add(rim);
  return () => {
    scene.remove(ambient, key, rim);
    scene.environment = null;
    key.shadow.dispose();
    environment.dispose();
  };
}
