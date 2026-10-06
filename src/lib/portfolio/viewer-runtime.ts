import * as THREE from "three";
import type { DemoMesh } from "./data";

const STONE = 0xe9e0cf;
const MOSS = 0x5b6f63;
const GOLD = 0xc4a06a;
const WOOD = 0x6a5340;

function mat(color: number, extra: Partial<THREE.MeshStandardMaterialParameters> = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.12,
    roughness: 0.55,
    flatShading: true,
    ...extra,
  });
}

function addBox(
  group: THREE.Group,
  material: THREE.Material,
  size: [number, number, number],
  pos: [number, number, number],
) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...pos);
  group.add(mesh);
}

export function buildDemoGroup(kind: DemoMesh): THREE.Group {
  const group = new THREE.Group();
  const stone = mat(STONE);
  const moss = mat(MOSS);
  const gold = mat(GOLD, { metalness: 0.45, roughness: 0.35 });
  const wood = mat(WOOD);

  if (kind === "castle") {
    addBox(group, stone, [1.4, 1.5, 1.4], [0, 0.15, 0]);
    addBox(group, stone, [0.55, 2.2, 0.55], [-0.85, 0.5, -0.85]);
    addBox(group, stone, [0.55, 2.2, 0.55], [0.85, 0.5, -0.85]);
    addBox(group, stone, [0.55, 1.9, 0.55], [-0.85, 0.35, 0.85]);
    addBox(group, stone, [0.55, 1.9, 0.55], [0.85, 0.35, 0.85]);
    const keep = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.7, 8), moss);
    keep.position.set(0, 1.2, 0);
    group.add(keep);
    const flag = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.2, 0.04), gold);
    flag.position.set(0.18, 1.6, 0);
    group.add(flag);
  }

  if (kind === "cat") {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.72, 16, 12), stone);
    body.scale.set(1, 0.85, 1.15);
    group.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), stone);
    head.position.set(0, 0.55, 0.55);
    group.add(head);
    const earGeo = new THREE.ConeGeometry(0.16, 0.28, 6);
    const earL = new THREE.Mesh(earGeo, gold);
    earL.position.set(-0.22, 0.92, 0.48);
    const earR = earL.clone();
    earR.position.x = 0.22;
    group.add(earL, earR);
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.12, 0.9, 8), stone);
    tail.rotation.z = 0.8;
    tail.position.set(-0.7, 0.15, -0.4);
    group.add(tail);
  }

  if (kind === "house") {
    addBox(group, wood, [1.6, 1.1, 1.2], [0, -0.1, 0]);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.25, 0.9, 4), moss);
    roof.rotation.y = Math.PI / 4;
    roof.position.y = 0.85;
    group.add(roof);
    addBox(group, gold, [0.28, 0.46, 0.06], [0, -0.22, 0.62]);
    const glow = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.04), gold);
    glow.position.set(-0.4, 0.05, 0.62);
    group.add(glow);
  }

  if (kind === "fountain") {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.2, 0.22, 16), stone);
    base.position.y = -0.7;
    group.add(base);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.7, 0.28, 16), stone);
    bowl.position.y = -0.42;
    group.add(bowl);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 1.2, 12), moss);
    col.position.y = 0.25;
    group.add(col);
    const top = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), gold);
    top.position.y = 0.95;
    group.add(top);
  }

  group.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (mesh.isMesh) {
      mesh.castShadow = false;
      mesh.receiveShadow = false;
    }
  });
  return group;
}

export function parseOBJ(text: string) {
  const vertices: number[][] = [];
  const positions: number[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("v ")) {
      vertices.push(line.split(/\s+/).slice(1, 4).map(Number));
    } else if (line.startsWith("f ")) {
      const idx = line
        .split(/\s+/)
        .slice(1)
        .map((p) => {
          const vi = parseInt(p.split("/")[0] ?? "0", 10);
          return vi > 0 ? vi - 1 : vertices.length + vi;
        });
      for (let k = 1; k < idx.length - 1; k++) {
        const a = vertices[idx[0] ?? 0];
        const b = vertices[idx[k] ?? 0];
        const c = vertices[idx[k + 1] ?? 0];
        if (a && b && c) positions.push(...a, ...b, ...c);
      }
    }
  }
  return new Float32Array(positions);
}

export function geometryFromOBJ(text: string) {
  const positions = parseOBJ(text);
  if (positions.length === 0) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.computeVertexNormals();
  geo.center();
  geo.computeBoundingSphere();
  const radius = geo.boundingSphere?.radius || 1;
  const scale = radius > 0 ? 1.4 / radius : 1;
  geo.scale(scale, scale, scale);
  return geo;
}

export type ViewerHandle = {
  resize: () => void;
  tick: () => void;
  setObject: (object: THREE.Object3D) => void;
  dispose: () => void;
};

export function createViewer(canvas: HTMLCanvasElement): ViewerHandle {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x1f3a2d, 6, 12);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.35, 4.2);

  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(3, 4, 4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xc4a06a, 0.9);
  rim.position.set(-3, -2, -3);
  scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));

  const grid = new THREE.GridHelper(10, 20, 0x9fb3a3, 0x9fb3a3);
  grid.position.y = -1.3;
  scene.add(grid);

  let current: THREE.Object3D | null = null;
  let rotY = 0.4;
  let rotX = -0.1;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let autoRotate = true;
  let resumeTimer: ReturnType<typeof setTimeout> | null = null;

  function pause() {
    autoRotate = false;
    if (resumeTimer) clearTimeout(resumeTimer);
  }
  function scheduleResume() {
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      autoRotate = true;
    }, 1200);
  }

  const onDown = (e: PointerEvent) => {
    dragging = true;
    pause();
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  };
  const onMove = (e: PointerEvent) => {
    if (!dragging) return;
    rotY += (e.clientX - lastX) * 0.006;
    rotX += (e.clientY - lastY) * 0.006;
    rotX = Math.max(-1.1, Math.min(1.1, rotX));
    lastX = e.clientX;
    lastY = e.clientY;
  };
  const onUp = () => {
    dragging = false;
    scheduleResume();
  };
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    pause();
    scheduleResume();
    camera.position.z = Math.max(2.2, Math.min(8, camera.position.z + e.deltaY * 0.003));
  };

  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointerleave", onUp);
  canvas.addEventListener("wheel", onWheel, { passive: false });

  function resize() {
    const parent = canvas.parentElement;
    if (!parent) return;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function tick() {
    if (autoRotate && !reduce) rotY += 0.0022;
    if (current) {
      current.rotation.y = rotY;
      current.rotation.x = rotX;
    }
    renderer.render(scene, camera);
  }

  function setObject(object: THREE.Object3D) {
    if (current) {
      scene.remove(current);
      current.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.isMesh) {
          mesh.geometry.dispose();
          const m = mesh.material;
          if (Array.isArray(m)) m.forEach((x) => x.dispose());
          else m.dispose();
        }
      });
    }
    current = object;
    scene.add(object);
  }

  function dispose() {
    canvas.removeEventListener("pointerdown", onDown);
    canvas.removeEventListener("pointermove", onMove);
    canvas.removeEventListener("pointerup", onUp);
    canvas.removeEventListener("pointerleave", onUp);
    canvas.removeEventListener("wheel", onWheel);
    if (resumeTimer) clearTimeout(resumeTimer);
    if (current) scene.remove(current);
    renderer.dispose();
  }

  return { resize, tick, setObject, dispose };
}
