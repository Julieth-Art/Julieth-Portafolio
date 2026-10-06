import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectViewer } from "@/components/portfolio/ProjectViewer";
import { PageFrame } from "@/components/site/PageFrame";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  FEATURED_IDS,
  PROFILE,
  projectById,
  SECTION_COPY,
} from "@/lib/portfolio/data";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Julieth — Animación 3D & Arte Digital" }],
  }),
});

function Home() {
  const [openId, setOpenId] = useState<string | null>(null);
  const featured = FEATURED_IDS.map((id) => projectById(id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <>
      <Hero />
      <PageFrame>
        <Reveal>
          <div className="mx-auto max-w-[62ch] text-center">
            <p className="font-ui text-sm tracking-[0.16em] text-gold uppercase">
              Portafolio
            </p>
            <h2 className="mt-2 font-script text-script-lg text-accent">Acerca de Mi</h2>
            <p className="mt-3 font-body text-[1.15rem] text-dim">{PROFILE.bio}</p>
            <Button asChild className="mt-6">
              <Link to="/acerca">
                Conocer más
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <div className="mb-8 text-center">
              <h2 className="font-script text-script-lg text-accent">Piezas seleccionadas</h2>
              <p className="mt-2 font-body text-dim">
                Un recorte de modelado, animación y concept art. Cada pestaña abre su propia página.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <Reveal key={project.id}>
                <ProjectCard
                  project={project}
                  cta={SECTION_COPY[project.section].cta}
                  onOpen={setOpenId}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </PageFrame>
      <ProjectViewer
        project={openId ? projectById(openId) ?? null : null}
        open={Boolean(openId)}
        onOpenChange={(open) => {
          if (!open) setOpenId(null);
        }}
      />
    </>
  );
}
