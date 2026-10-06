import { Mail, MessageCircle, Music2 } from "lucide-react";
import { PROFILE } from "@/lib/portfolio/data";
import { Reveal } from "@/components/site/Reveal";

const phoneDigits = PROFILE.phone.replace(/\D/g, "");

const CARDS = [
  {
    href: `https://www.tiktok.com/@${PROFILE.tiktok.replace(/^@/, "")}`,
    label: "TikTok",
    value: PROFILE.tiktok,
    icon: Music2,
    external: true,
  },
  {
    href: `mailto:${PROFILE.email}`,
    label: "Correo electrónico",
    value: PROFILE.email,
    icon: Mail,
    external: false,
  },
  {
    href: `https://wa.me/57${phoneDigits}`,
    label: "WhatsApp / teléfono",
    value: PROFILE.phone,
    icon: MessageCircle,
    external: true,
  },
] as const;

export function ContactContent() {
  return (
    <div className="grid min-h-svh grid-cols-1 lg:grid-cols-thanks lg:min-h-[36rem]">
      <div
        className="relative min-h-[20rem] bg-hero bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contacto.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-hero/55 via-transparent to-hero/45" />
        <div className="pointer-events-none absolute inset-[9%_16%_0_12%] border-4 border-white/90 border-b-0" />
      </div>
      <div className="flex flex-col justify-center gap-5 bg-bg/55 px-[clamp(1.1rem,4vw,3.5rem)] py-14">
        <Reveal>
          <h1 className="gracias-title" aria-label="Gracias por ver">
            <span className="block">Gracias</span>
            <span className="g2">por Ver</span>
          </h1>
        </Reveal>
        <Reveal delayClass="stagger-2">
          <p className="max-w-[36ch] font-body text-[1.15rem] text-dim">
            {PROFILE.contactLead}
          </p>
        </Reveal>
        <div className="grid gap-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.label} delayClass={`stagger-${i + 3}`}>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="block rounded-lg bg-card/85 px-5 py-4 text-center shadow-border transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <Icon className="mx-auto size-7 text-accent" strokeWidth={1.6} />
                  <small className="mt-1 block font-ui text-dim">{card.label}</small>
                  <span className="font-body text-[1.05rem]">{card.value}</span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
