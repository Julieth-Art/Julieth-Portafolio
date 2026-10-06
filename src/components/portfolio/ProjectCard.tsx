import { useRef, type PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  project: Project;
  cta: string;
  onOpen: (id: string) => void;
  masonry?: boolean;
};

export function ProjectCard({ project, cta, onOpen, masonry }: Props) {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tilt-x", `${(-py * 5).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * 6).toFixed(2)}deg`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <article
      ref={ref}
      className="project-card"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <button
        type="button"
        className={cn(
          "thumb relative block w-full overflow-hidden bg-accent/15",
          masonry ? "min-h-44" : "aspect-photo",
        )}
        onClick={() => onOpen(project.id)}
      >
        <img
          src={project.img}
          alt={project.name}
          className={cn("w-full object-cover", masonry ? "h-auto" : "h-full")}
          loading="lazy"
        />
      </button>
      <div className="px-[1.15rem] pt-4 pb-3">
        <p className="font-ui text-[0.78rem] tracking-[0.08em] text-gold uppercase">
          {project.cat}
        </p>
        <h3 className="mt-1 font-display text-[1.35rem] text-accent">{project.name}</h3>
        {project.section !== "concept" ? (
          <p className="mt-1 mb-3 line-clamp-3 font-body text-[1rem] text-dim">
            {project.desc}
          </p>
        ) : (
          <div className="mb-2" />
        )}
        <Button size="sm" onClick={() => onOpen(project.id)}>
          {cta}
          <ArrowUpRight className="size-3.5" />
        </Button>
      </div>
    </article>
  );
}
