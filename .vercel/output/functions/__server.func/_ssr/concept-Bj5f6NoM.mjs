import { i as SECTION_COPY } from "./utils-5XMSZncU.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as PageFrame } from "./PageFrame-BrW9JuQg.mjs";
import { n as SectionHero, t as ProjectGrid } from "./SectionHero-D6e1t23g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/concept-Bj5f6NoM.js
var import_jsx_runtime = require_jsx_runtime();
function ConceptPage() {
	const copy = SECTION_COPY.concept;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, {
		tinted: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHero, {
			kicker: copy.kicker,
			title: copy.title,
			desc: copy.desc
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectGrid, { section: "concept" })
		})]
	});
}
//#endregion
export { ConceptPage as component };
