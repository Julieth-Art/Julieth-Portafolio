import { i as __toESM } from "../_runtime.mjs";
import { a as cn } from "./utils-5XMSZncU.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as Image, g as ArrowUpRight, h as Box, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as Button } from "./router-DSRvR9XM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectViewer-BTOk_U1O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectCard({ project, cta, onOpen, masonry }) {
	const ref = (0, import_react.useRef)(null);
	function onMove(e) {
		const el = ref.current;
		if (!el || e.pointerType !== "mouse") return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		el.style.setProperty("--tilt-x", `${(-py * 5).toFixed(2)}deg`);
		el.style.setProperty("--tilt-y", `${(px * 6).toFixed(2)}deg`);
	}
	function onLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.setProperty("--tilt-x", "0deg");
		el.style.setProperty("--tilt-y", "0deg");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref,
		className: "project-card",
		onPointerMove: onMove,
		onPointerLeave: onLeave,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: cn("thumb relative block w-full overflow-hidden bg-accent/15", masonry ? "min-h-44" : "aspect-photo"),
			onClick: () => onOpen(project.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.img,
				alt: project.name,
				className: cn("w-full object-cover", masonry ? "h-auto" : "h-full"),
				loading: "lazy"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-[1.15rem] pt-4 pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-ui text-[0.78rem] tracking-[0.08em] text-gold uppercase",
					children: project.cat
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-[1.35rem] text-accent",
					children: project.name
				}),
				project.section !== "concept" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 mb-3 line-clamp-3 font-body text-[1rem] text-dim",
					children: project.desc
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => onOpen(project.id),
					children: [cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
				})
			]
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogTitle = DialogTitle$1;
var DialogDescription = DialogDescription$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-80 bg-ink/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-80 w-[min(1000px,calc(100%-1.5rem))] max-h-[94vh] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg bg-bg p-6 shadow-card modal-in", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-3 right-3 grid size-11 place-items-center rounded-full bg-card text-ink shadow-border transition-transform duration-150 hover:bg-card active:scale-[0.96]",
			"aria-label": "Cerrar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
		})]
	})] });
}
function ObjViewer({ demoMesh = "castle", className }) {
	const wrapRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!canvasRef.current) return;
		let cancelled = false;
		let handle = null;
		let frame = 0;
		(async () => {
			const runtime = await import("./viewer-runtime-B6s8BNiy.mjs");
			if (cancelled || !canvasRef.current) return;
			const viewer = runtime.createViewer(canvasRef.current);
			viewer.setObject(runtime.buildDemoGroup(demoMesh));
			viewer.resize();
			handle = viewer;
			const loop = () => {
				viewer.tick();
				frame = requestAnimationFrame(loop);
			};
			frame = requestAnimationFrame(loop);
		})();
		const ro = new ResizeObserver(() => handle?.resize());
		if (wrapRef.current) ro.observe(wrapRef.current);
		return () => {
			cancelled = true;
			cancelAnimationFrame(frame);
			ro.disconnect();
			handle?.dispose();
		};
	}, [demoMesh]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: cn("relative h-viewer w-full overflow-hidden rounded-md bg-hero", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 size-full cursor-grab active:cursor-grabbing"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute bottom-3 left-3 font-ui text-sm text-cream/80",
			children: "Arrastra para rotar · rueda para zoom"
		})]
	});
}
function ProjectViewer({ project, open, onOpenChange }) {
	const [tab, setTab] = (0, import_react.useState)("img");
	const [shot, setShot] = (0, import_react.useState)(null);
	const gallery = project ? [project.img, project.img2].filter((x) => Boolean(x)) : [];
	const current = shot ?? project?.img;
	const has3d = Boolean(project?.demoMesh);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			onOpenChange(next);
			if (!next) {
				setTab("img");
				setShot(null);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			onOpenAutoFocus: (e) => e.preventDefault(),
			className: "p-5 sm:p-6",
			children: project ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-viewer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					has3d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: tab === "img" ? "solid" : "outline",
							onClick: () => setTab("img"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-3.5" }), "Imagen"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: tab === "3d" ? "solid" : "outline",
							onClick: () => setTab("3d"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "size-3.5" }), "Modelo 3D"]
						})]
					}) : null,
					tab === "3d" && project.demoMesh ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjViewer, { demoMesh: project.demoMesh }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid min-h-[240px] place-items-center overflow-hidden rounded-md bg-card",
						children: current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: current,
							alt: project.name,
							className: "max-h-[70vh] w-full object-contain"
						}) : null
					}),
					tab === "img" && gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex gap-2",
						children: gallery.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "size-16 overflow-hidden rounded-sm shadow-border",
							onClick: () => setShot(src),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								className: "size-full object-cover"
							})
						}, src))
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ui text-[0.78rem] tracking-[0.08em] text-gold uppercase",
						children: project.cat
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-1 font-display text-[1.85rem] text-accent",
						children: project.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-3 font-body text-[1.08rem] text-dim",
						children: project.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-body",
						children: [
							project.year ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "Año"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.year })] }) : null,
							project.software ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "Software"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.software })] }) : null,
							has3d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dim",
								children: "Modelo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Vista 3D interactiva" })] }) : null
						]
					})
				] })]
			}) : null
		})
	});
}
//#endregion
export { ProjectViewer as n, ProjectCard as t };
