import { r as PROFILE } from "./utils-5XMSZncU.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Reveal } from "./Reveal-CQnADNvb.mjs";
import { t as PageFrame } from "./PageFrame-BrW9JuQg.mjs";
import { a as Sparkle, f as Feather, h as Box, m as Brush, p as Clapperboard, r as Trees } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/acerca-DJeMZ4bf.js
var import_jsx_runtime = require_jsx_runtime();
var CHIP_ICONS = [
	Clapperboard,
	Box,
	Brush,
	Feather,
	Sparkle,
	Trees
];
function AboutContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-start gap-10 lg:grid-cols-about",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "photo-ring",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-60 overflow-hidden rounded-full border-[6px] border-card shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/autorretrato.jpg",
							alt: `Retrato ilustrado de ${PROFILE.firstName}`,
							className: "size-full object-cover"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-4 font-script text-[2.5rem] leading-none text-accent",
					children: PROFILE.firstName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 font-body text-[0.95rem] text-dim",
					children: PROFILE.fullName
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delayClass: "stagger-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border-l-[5px] border-accent bg-card p-7 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-[1.9rem] leading-none text-accent",
						children: "¡Hola!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-body text-[1.1rem]",
						children: PROFILE.bio
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",
				children: PROFILE.chips.map((chip, i) => {
					const Icon = CHIP_ICONS[i] ?? Sparkle;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delayClass: `stagger-${i % 6 + 1}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-h-14 items-center gap-3 rounded-md bg-card px-4 py-3 shadow-border transition-transform duration-200 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4 text-accent",
								strokeWidth: 1.75
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-body",
								children: chip
							})]
						})
					}, chip);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delayClass: "stagger-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-lg border-[1.5px] border-accent px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[1.35rem] text-accent",
						children: "Skills"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: PROFILE.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-pill border border-line bg-card px-3.5 py-1 font-ui text-[0.95rem]",
							children: skill
						}, skill))
					})]
				})
			})
		] })]
	});
}
function AcercaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-10 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-script text-script-xl text-accent",
			children: "Acerca de Mi"
		})
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutContent, {})] });
}
//#endregion
export { AcercaPage as component };
