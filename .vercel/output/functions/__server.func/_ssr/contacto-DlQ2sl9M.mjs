import { r as PROFILE } from "./utils-5XMSZncU.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Reveal } from "./Reveal-CQnADNvb.mjs";
import { c as MessageCircle, s as Music2, u as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-DlQ2sl9M.js
var import_jsx_runtime = require_jsx_runtime();
var phoneDigits = PROFILE.phone.replace(/\D/g, "");
var CARDS = [
	{
		href: `https://www.tiktok.com/@${PROFILE.tiktok.replace(/^@/, "")}`,
		label: "TikTok",
		value: PROFILE.tiktok,
		icon: Music2,
		external: true
	},
	{
		href: `mailto:${PROFILE.email}`,
		label: "Correo electrónico",
		value: PROFILE.email,
		icon: Mail,
		external: false
	},
	{
		href: `https://wa.me/57${phoneDigits}`,
		label: "WhatsApp / teléfono",
		value: PROFILE.phone,
		icon: MessageCircle,
		external: true
	}
];
function ContactContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-svh grid-cols-1 lg:grid-cols-thanks lg:min-h-[36rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-[20rem] bg-hero bg-cover bg-center",
			style: { backgroundImage: "url('/images/contacto.jpg')" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-br from-hero/55 via-transparent to-hero/45" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-[9%_16%_0_12%] border-4 border-white/90 border-b-0" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center gap-5 bg-bg/55 px-[clamp(1.1rem,4vw,3.5rem)] py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "gracias-title",
					"aria-label": "Gracias por ver",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "Gracias"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "g2",
						children: "por Ver"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayClass: "stagger-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[36ch] font-body text-[1.15rem] text-dim",
						children: PROFILE.contactLead
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: CARDS.map((card, i) => {
						const Icon = card.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delayClass: `stagger-${i + 3}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: card.href,
								target: card.external ? "_blank" : void 0,
								rel: card.external ? "noopener noreferrer" : void 0,
								className: "block rounded-lg bg-card/85 px-5 py-4 text-center shadow-border transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "mx-auto size-7 text-accent",
										strokeWidth: 1.6
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
										className: "mt-1 block font-ui text-dim",
										children: card.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-body text-[1.05rem]",
										children: card.value
									})
								]
							})
						}, card.label);
					})
				})
			]
		})]
	});
}
function ContactoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactContent, {})
	});
}
//#endregion
export { ContactoPage as component };
