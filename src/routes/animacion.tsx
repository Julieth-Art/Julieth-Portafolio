import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { SectionHero } from "@/components/portfolio/SectionHero";
import { PageFrame } from "@/components/site/PageFrame";
import { SECTION_COPY } from "@/lib/portfolio/data";

export const Route = createFileRoute("/animacion")({
  component: AnimacionPage,
  head: () => ({
    meta: [{ title: "Animación — Julieth" }],
  }),
});

function AnimacionPage() {
  const copy = SECTION_COPY.animacion;
  return (
    <PageFrame>
      <SectionHero kicker={copy.kicker} title={copy.title} desc={copy.desc} />
      <div className="mt-10">
        <ProjectGrid section="animacion" />
      </div>
    </PageFrame>
  );
}
