import { useState } from "react";
import { Box, Image as ImageIcon } from "lucide-react";
import type { Project } from "@/lib/portfolio/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ObjViewer } from "./ObjViewer";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectViewer({ project, open, onOpenChange }: Props) {
  const [tab, setTab] = useState<"img" | "3d">("img");
  const [shot, setShot] = useState<string | null>(null);

  const gallery = project
    ? [project.img, project.img2].filter((x): x is string => Boolean(x))
    : [];
  const current = shot ?? project?.img;
  const has3d = Boolean(project?.demoMesh);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) {
          setTab("img");
          setShot(null);
        }
      }}
    >
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="p-5 sm:p-6"
      >
        {project ? (
          <div className="grid gap-6 lg:grid-cols-viewer">
            <div>
              {has3d ? (
                <div className="mb-3 flex gap-2">
                  <Button
                    size="sm"
                    variant={tab === "img" ? "solid" : "outline"}
                    onClick={() => setTab("img")}
                  >
                    <ImageIcon className="size-3.5" />
                    Imagen
                  </Button>
                  <Button
                    size="sm"
                    variant={tab === "3d" ? "solid" : "outline"}
                    onClick={() => setTab("3d")}
                  >
                    <Box className="size-3.5" />
                    Modelo 3D
                  </Button>
                </div>
              ) : null}

              {tab === "3d" && project.demoMesh ? (
                <ObjViewer demoMesh={project.demoMesh} />
              ) : (
                <div className="grid min-h-[240px] place-items-center overflow-hidden rounded-md bg-card">
                  {current ? (
                    <img
                      src={current}
                      alt={project.name}
                      className="max-h-[70vh] w-full object-contain"
                    />
                  ) : null}
                </div>
              )}

              {tab === "img" && gallery.length > 1 ? (
                <div className="mt-3 flex gap-2">
                  {gallery.map((src) => (
                    <button
                      key={src}
                      type="button"
                      className="size-16 overflow-hidden rounded-sm shadow-border"
                      onClick={() => setShot(src)}
                    >
                      <img src={src} alt="" className="size-full object-cover" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <p className="font-ui text-[0.78rem] tracking-[0.08em] text-gold uppercase">
                {project.cat}
              </p>
              <DialogTitle className="mt-1 font-display text-[1.85rem] text-accent">
                {project.name}
              </DialogTitle>
              <DialogDescription className="mt-3 font-body text-[1.08rem] text-dim">
                {project.desc}
              </DialogDescription>
              <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-body">
                {project.year ? (
                  <>
                    <dt className="text-dim">Año</dt>
                    <dd>{project.year}</dd>
                  </>
                ) : null}
                {project.software ? (
                  <>
                    <dt className="text-dim">Software</dt>
                    <dd>{project.software}</dd>
                  </>
                ) : null}
                {has3d ? (
                  <>
                    <dt className="text-dim">Modelo</dt>
                    <dd>Vista 3D interactiva</dd>
                  </>
                ) : null}
              </dl>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
