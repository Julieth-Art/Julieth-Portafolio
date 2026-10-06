import { createFileRoute } from "@tanstack/react-router";
import { AboutContent } from "@/components/portfolio/AboutContent";
import { PageFrame } from "@/components/site/PageFrame";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/acerca")({
  component: AcercaPage,
  head: () => ({
    meta: [{ title: "Acerca de mi — Julieth" }],
  }),
});

function AcercaPage() {
  return (
    <PageFrame>
      <Reveal>
        <div className="mb-10 text-center">
          <h1 className="font-script text-script-xl text-accent">Acerca de Mi</h1>
        </div>
      </Reveal>
      <AboutContent />
    </PageFrame>
  );
}
