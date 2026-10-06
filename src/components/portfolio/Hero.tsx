import { Link } from "@tanstack/react-router";
import { Box, Brush, Clapperboard, Sparkles } from "lucide-react";

const PORTA = ["P", "o", "r", "t", "a"] as const;
const FOLIO = ["f", "o", "l", "i", "o"] as const;
const STROKE = new Set(["o", "t", "f", "l"]);

const PILLS = [
  { to: "/acerca", label: "Acerca de mi", icon: Sparkles },
  { to: "/modelado", label: "Modeling 3D", icon: Box },
  { to: "/animacion", label: "Animación", icon: Clapperboard },
  { to: "/concept", label: "Concept Art", icon: Brush },
] as const;

function Letters({ chars, extraDelay = 0 }: { chars: readonly string[]; extraDelay?: number }) {
  return (
    <>
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className={`hero-letter ${STROKE.has(ch) ? "stroke-letter" : ""}`}
          style={{ animationDelay: `${extraDelay + i * 70}ms` }}
        >
          {ch}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <header className="hero-stage" id="inicio">
      <div className="hero-bg" />
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          className="mote"
          style={{
            left: `${8 + i * 9}%`,
            bottom: `${10 + (i % 4) * 8}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${9 + (i % 5)}s`,
          }}
        />
      ))}
      <div className="relative z-2 flex min-h-[calc(100svh-7.4rem)] w-full flex-col justify-between gap-[5vh]">
        <div className="mt-auto font-display text-cream" style={{ fontSize: "var(--text-hero)", lineHeight: 0.92 }}>
          <div className="ml-[4.5%]" role="img" aria-label="Portafolio">
            <Letters chars={PORTA} />
          </div>
          <div className="mt-1 grid grid-cols-hero items-start">
            <div className="art-rule">Art 3D</div>
            <div className="justify-self-start border-b border-l border-cream/75 px-[0.2em] pb-[0.02em] pl-[0.28em]">
              <Letters chars={FOLIO} extraDelay={280} />
            </div>
          </div>
        </div>
        <nav
          className="flex flex-wrap justify-between gap-2 sm:gap-4"
          aria-label="Secciones"
        >
          {PILLS.map((pill) => {
            const Icon = pill.icon;
            return (
              <Link
                key={pill.to}
                to={pill.to}
                className="flex min-h-12 min-w-[140px] flex-1 items-center justify-center gap-2 rounded-pill border border-cream/85 bg-cream/20 px-4 py-3 font-display text-[clamp(0.9rem,1.55vw,1.35rem)] text-cream backdrop-blur-sm transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-cream/35 active:scale-[0.96] even:bg-cream/5"
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {pill.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
