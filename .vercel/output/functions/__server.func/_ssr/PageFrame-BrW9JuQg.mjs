import { a as cn } from "./utils-5XMSZncU.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageFrame-BrW9JuQg.js
var import_jsx_runtime = require_jsx_runtime();
function PageFrame({ children, tinted, bleed }) {
	if (bleed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("px-page pt-28 pb-20", tinted && "bg-accent/10"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-site",
			children
		})
	});
}
//#endregion
export { PageFrame as t };
