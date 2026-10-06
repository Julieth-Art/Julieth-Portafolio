import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { SectionHero } from "@/components/portfolio/SectionHero";
import { PageFrame } from "@/components/site/PageFrame";
import { SECTION_COPY } from "@/lib/portfolio/data";

export const Route = createFileRoute("/modelado")({
  component: ModeladoPage,
  head: () => ({
    meta: [{ title: "Modeling 3D — Julieth" }],
  }),
});

function ModeladoPage() {
  const copy = SECTION_COPY.modelado;
  return (
    <PageFrame tinted>
      <SectionHero kicker={copy.kicker} title={copy.title} desc={copy.desc} />
      <div className="mt-10">
        <ProjectGrid section="modelado" />
      </div>
    </PageFrame>
  );
}
