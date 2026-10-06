import { Box, Brush, Clapperboard, Feather, Trees, Sparkle } from "lucide-react";
import { PROFILE } from "@/lib/portfolio/data";
import { Reveal } from "@/components/site/Reveal";

const CHIP_ICONS = [Clapperboard, Box, Brush, Feather, Sparkle, Trees];

export function AboutContent() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-about">
      <Reveal className="flex flex-col items-center text-center">
        <div className="photo-ring">
          <div className="size-60 overflow-hidden rounded-full border-[6px] border-card shadow-card">
            <img
              src="/images/autorretrato.jpg"
              alt={`Retrato ilustrado de ${PROFILE.firstName}`}
              className="size-full object-cover"
            />
          </div>
        </div>
        <span className="mt-4 font-script text-[2.5rem] leading-none text-accent">
          {PROFILE.firstName}
        </span>
        <span className="mt-1 font-body text-[0.95rem] text-dim">{PROFILE.fullName}</span>
      </Reveal>

      <div>
        <Reveal delayClass="stagger-2">
          <div className="rounded-lg border-l-[5px] border-accent bg-card p-7 shadow-card">
            <p className="font-script text-[1.9rem] leading-none text-accent">¡Hola!</p>
            <p className="mt-3 font-body text-[1.1rem]">{PROFILE.bio}</p>
          </div>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PROFILE.chips.map((chip, i) => {
            const Icon = CHIP_ICONS[i] ?? Sparkle;
            return (
              <Reveal key={chip} delayClass={`stagger-${(i % 6) + 1}`}>
                <div className="flex min-h-14 items-center gap-3 rounded-md bg-card px-4 py-3 shadow-border transition-transform duration-200 hover:-translate-y-0.5">
                  <Icon className="size-4 text-accent" strokeWidth={1.75} />
                  <span className="font-body">{chip}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayClass="stagger-4">
          <div className="mt-5 rounded-lg border-[1.5px] border-accent px-6 py-4">
            <p className="font-display text-[1.35rem] text-accent">Skills</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {PROFILE.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-pill border border-line bg-card px-3.5 py-1 font-ui text-[0.95rem]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
