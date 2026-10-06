import { useState } from "react";
import type { SectionId } from "@/lib/portfolio/data";
import { projectById, projectsBySection, SECTION_COPY } from "@/lib/portfolio/data";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "./ProjectCard";
import { ProjectViewer } from "./ProjectViewer";

const DELAY = ["stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5", "stagger-6"] as const;

type Props = {
  section: SectionId;
};

export function ProjectGrid({ section }: Props) {
  const items = projectsBySection(section);
  const copy = SECTION_COPY[section];
  const [openId, setOpenId] = useState<string | null>(null);
  const masonry = section === "concept";

  return (
    <>
      <div className={masonry ? "masonry-grid" : "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"}>
        {items.map((project, i) => (
          <Reveal key={project.id} delayClass={DELAY[i % DELAY.length]} className={masonry ? "mb-0" : ""}>
            <ProjectCard
              project={project}
              cta={copy.cta}
              masonry={masonry}
              onOpen={setOpenId}
            />
          </Reveal>
        ))}
      </div>
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
