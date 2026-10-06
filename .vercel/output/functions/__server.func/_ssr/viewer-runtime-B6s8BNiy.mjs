import { a as CylinderGeometry, c as GridHelper, d as MeshStandardMaterial, f as PerspectiveCamera, i as ConeGeometry, l as Group, m as SphereGeometry, n as AmbientLight, o as DirectionalLight, p as Scene, r as BoxGeometry, s as Fog, t as WebGLRenderer, u as Mesh } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/viewer-runtime-B6s8BNiy.js
var STONE = 15327439;
var MOSS = 5992291;
var GOLD = 12886122;
var WOOD = 6968128;
function mat(color, extra = {}) {
	return new MeshStandardMaterial({
		color,
		metalness: .12,
		roughness: .55,
		flatShading: true,
		...extra
	});
}
function addBox(group, material, size, pos) {
	const mesh = new Mesh(new BoxGeometry(...size), material);
	mesh.position.set(...pos);
	group.add(mesh);
}
function buildDemoGroup(kind) {
	const group = new Group();
	const stone = mat(STONE);
	const moss = mat(MOSS);
	const gold = mat(GOLD, {
		metalness: .45,
		roughness: .35
	});
	const wood = mat(WOOD);
	if (kind === "castle") {
		addBox(group, stone, [
			1.4,
			1.5,
			1.4
		], [
			0,
			.15,
			0
		]);
		addBox(group, stone, [
			.55,
			2.2,
			.55
		], [
			-.85,
			.5,
			-.85
		]);
		addBox(group, stone, [
			.55,
			2.2,
			.55
		], [
			.85,
			.5,
			-.85
		]);
		addBox(group, stone, [
			.55,
			1.9,
			.55
		], [
			-.85,
			.35,
			.85
		]);
		addBox(group, stone, [
			.55,
			1.9,
			.55
		], [
			.85,
			.35,
			.85
		]);
		const keep = new Mesh(new CylinderGeometry(.22, .28, .7, 8), moss);
		keep.position.set(0, 1.2, 0);
		group.add(keep);
		const flag = new Mesh(new BoxGeometry(.35, .2, .04), gold);
		flag.position.set(.18, 1.6, 0);
		group.add(flag);
	}
	if (kind === "cat") {
		const body = new Mesh(new SphereGeometry(.72, 16, 12), stone);
		body.scale.set(1, .85, 1.15);
		group.add(body);
		const head = new Mesh(new SphereGeometry(.42, 16, 12), stone);
		head.position.set(0, .55, .55);
		group.add(head);
		const earGeo = new ConeGeometry(.16, .28, 6);
		const earL = new Mesh(earGeo, gold);
		earL.position.set(-.22, .92, .48);
		const earR = earL.clone();
		earR.position.x = .22;
		group.add(earL, earR);
		const tail = new Mesh(new CylinderGeometry(.07, .12, .9, 8), stone);
		tail.rotation.z = .8;
		tail.position.set(-.7, .15, -.4);
		group.add(tail);
	}
	if (kind === "house") {
		addBox(group, wood, [
			1.6,
			1.1,
			1.2
		], [
			0,
			-.1,
			0
		]);
		const roof = new Mesh(new ConeGeometry(1.25, .9, 4), moss);
		roof.rotation.y = Math.PI / 4;
		roof.position.y = .85;
		group.add(roof);
		addBox(group, gold, [
			.28,
			.46,
			.06
		], [
			0,
			-.22,
			.62
		]);
		const glow = new Mesh(new BoxGeometry(.3, .3, .04), gold);
		glow.position.set(-.4, .05, .62);
		group.add(glow);
	}
	if (kind === "fountain") {
		const base = new Mesh(new CylinderGeometry(1.1, 1.2, .22, 16), stone);
		base.position.y = -.7;
		group.add(base);
		const bowl = new Mesh(new CylinderGeometry(.85, .7, .28, 16), stone);
		bowl.position.y = -.42;
		group.add(bowl);
		const col = new Mesh(new CylinderGeometry(.18, .22, 1.2, 12), moss);
		col.position.y = .25;
		group.add(col);
		const top = new Mesh(new SphereGeometry(.22, 12, 10), gold);
		top.position.y = .95;
		group.add(top);
	}
	group.traverse((obj) => {
		const mesh = obj;
		if (mesh.isMesh) {
			mesh.castShadow = false;
			mesh.receiveShadow = false;
		}
	});
	return group;
}
function createViewer(canvas) {
	const renderer = new WebGLRenderer({
		canvas,
		antialias: true,
		alpha: true
	});
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.setClearColor(0, 0);
	const scene = new Scene();
	scene.fog = new Fog(2046509, 6, 12);
	const camera = new PerspectiveCamera(42, 1, .1, 100);
	camera.position.set(0, .35, 4.2);
	const key = new DirectionalLight(16777215, 1.1);
	key.position.set(3, 4, 4);
	scene.add(key);
	const rim = new DirectionalLight(12886122, .9);
	rim.position.set(-3, -2, -3);
	scene.add(rim);
	scene.add(new AmbientLight(16777215, .4));
	const grid = new GridHelper(10, 20, 10466211, 10466211);
	grid.position.y = -1.3;
	scene.add(grid);
	let current = null;
	let rotY = .4;
	let rotX = -.1;
	let dragging = false;
	let lastX = 0;
	let lastY = 0;
	let autoRotate = true;
	let resumeTimer = null;
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
	const onDown = (e) => {
		dragging = true;
		pause();
		lastX = e.clientX;
		lastY = e.clientY;
		canvas.setPointerCapture(e.pointerId);
	};
	const onMove = (e) => {
		if (!dragging) return;
		rotY += (e.clientX - lastX) * .006;
		rotX += (e.clientY - lastY) * .006;
		rotX = Math.max(-1.1, Math.min(1.1, rotX));
		lastX = e.clientX;
		lastY = e.clientY;
	};
	const onUp = () => {
		dragging = false;
		scheduleResume();
	};
	const onWheel = (e) => {
		e.preventDefault();
		pause();
		scheduleResume();
		camera.position.z = Math.max(2.2, Math.min(8, camera.position.z + e.deltaY * .003));
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
		if (autoRotate && !reduce) rotY += .0022;
		if (current) {
			current.rotation.y = rotY;
			current.rotation.x = rotX;
		}
		renderer.render(scene, camera);
	}
	function setObject(object) {
		if (current) {
			scene.remove(current);
			current.traverse((obj) => {
				const mesh = obj;
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
	return {
		resize,
		tick,
		setObject,
		dispose
	};
}
//#endregion
export { buildDemoGroup, createViewer };
