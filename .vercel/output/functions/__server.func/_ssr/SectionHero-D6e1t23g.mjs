import { i as __toESM } from "../_runtime.mjs";
import { i as SECTION_COPY, o as projectById, s as projectsBySection } from "./utils-5XMSZncU.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Reveal } from "./Reveal-CQnADNvb.mjs";
import { n as ProjectViewer, t as ProjectCard } from "./ProjectViewer-BTOk_U1O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHero-D6e1t23g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DELAY = [
	"stagger-1",
	"stagger-2",
	"stagger-3",
	"stagger-4",
	"stagger-5",
	"stagger-6"
];
function ProjectGrid({ section }) {
	const items = projectsBySection(section);
	const copy = SECTION_COPY[section];
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const masonry = section === "concept";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: masonry ? "masonry-grid" : "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3",
		children: items.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delayClass: DELAY[i % DELAY.length],
			className: masonry ? "mb-0" : "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
				project,
				cta: copy.cta,
				masonry,
				onOpen: setOpenId
			})
		}, project.id))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectViewer, {
		project: openId ? projectById(openId) ?? null : null,
		open: Boolean(openId),
		onOpenChange: (open) => {
			if (!open) setOpenId(null);
		}
	})] });
}
function SectionHero({ kicker, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[62ch] text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ui text-sm tracking-[0.16em] text-gold uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-script text-script-xl text-accent",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-body text-[1.15rem] text-dim",
				children: desc
			})
		] })
	});
}
//#endregion
export { SectionHero as n, ProjectGrid as t };
