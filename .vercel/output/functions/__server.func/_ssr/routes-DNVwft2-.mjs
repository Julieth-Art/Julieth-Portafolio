import { i as __toESM } from "../_runtime.mjs";
import { i as SECTION_COPY, o as projectById, r as PROFILE, t as FEATURED_IDS } from "./utils-5XMSZncU.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Reveal } from "./Reveal-CQnADNvb.mjs";
import { t as PageFrame } from "./PageFrame-BrW9JuQg.mjs";
import { g as ArrowUpRight, h as Box, i as Sparkles, m as Brush, p as Clapperboard } from "../_libs/lucide-react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Button } from "./router-DSRvR9XM.mjs";
import { n as ProjectViewer, t as ProjectCard } from "./ProjectViewer-BTOk_U1O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNVwft2-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PORTA = [
	"P",
	"o",
	"r",
	"t",
	"a"
];
var FOLIO = [
	"f",
	"o",
	"l",
	"i",
	"o"
];
var STROKE = /* @__PURE__ */ new Set([
	"o",
	"t",
	"f",
	"l"
]);
var PILLS = [
	{
		to: "/acerca",
		label: "Acerca de mi",
		icon: Sparkles
	},
	{
		to: "/modelado",
		label: "Modeling 3D",
		icon: Box
	},
	{
		to: "/animacion",
		label: "Animación",
		icon: Clapperboard
	},
	{
		to: "/concept",
		label: "Concept Art",
		icon: Brush
	}
];
function Letters({ chars, extraDelay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: chars.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `hero-letter ${STROKE.has(ch) ? "stroke-letter" : ""}`,
		style: { animationDelay: `${extraDelay + i * 70}ms` },
		children: ch
	}, `${ch}-${i}`)) });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "hero-stage",
		id: "inicio",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-bg" }),
			Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mote",
				style: {
					left: `${8 + i * 9}%`,
					bottom: `${10 + i % 4 * 8}%`,
					animationDelay: `${i * .8}s`,
					animationDuration: `${9 + i % 5}s`
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-2 flex min-h-[calc(100svh-7.4rem)] w-full flex-col justify-between gap-[5vh]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto font-display text-cream",
					style: {
						fontSize: "var(--text-hero)",
						lineHeight: .92
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-[4.5%]",
						role: "img",
						"aria-label": "Portafolio",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letters, { chars: PORTA })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 grid grid-cols-hero items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "art-rule",
							children: "Art 3D"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "justify-self-start border-b border-l border-cream/75 px-[0.2em] pb-[0.02em] pl-[0.28em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letters, {
								chars: FOLIO,
								extraDelay: 280
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap justify-between gap-2 sm:gap-4",
					"aria-label": "Secciones",
					children: PILLS.map((pill) => {
						const Icon = pill.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: pill.to,
							className: "flex min-h-12 min-w-[140px] flex-1 items-center justify-center gap-2 rounded-pill border border-cream/85 bg-cream/20 px-4 py-3 font-display text-[clamp(0.9rem,1.55vw,1.35rem)] text-cream backdrop-blur-sm transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-cream/35 active:scale-[0.96] even:bg-cream/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								strokeWidth: 1.75
							}), pill.label]
						}, pill.to);
					})
				})]
			})
		]
	});
}
function Home() {
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const featured = FEATURED_IDS.map((id) => projectById(id)).filter((p) => Boolean(p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[62ch] text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-ui text-sm tracking-[0.16em] text-gold uppercase",
					children: "Portafolio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-script text-script-lg text-accent",
					children: "Acerca de Mi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-body text-[1.15rem] text-dim",
					children: PROFILE.bio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/acerca",
						children: ["Conocer más", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-script text-script-lg text-accent",
					children: "Piezas seleccionadas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-body text-dim",
					children: "Un recorte de modelado, animación y concept art. Cada pestaña abre su propia página."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-3",
				children: featured.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					project,
					cta: SECTION_COPY[project.section].cta,
					onOpen: setOpenId
				}) }, project.id))
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectViewer, {
			project: openId ? projectById(openId) ?? null : null,
			open: Boolean(openId),
			onOpenChange: (open) => {
				if (!open) setOpenId(null);
			}
		})
	] });
}
//#endregion
export { Home as component };
