import { useEffect, useRef } from "react";
import type { DemoMesh } from "@/lib/portfolio/data";
import { cn } from "@/lib/utils";

type Props = {
  demoMesh?: DemoMesh;
  className?: string;
};

export function ObjViewer({ demoMesh = "castle", className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    let handle: { resize: () => void; tick: () => void; dispose: () => void } | null =
      null;
    let frame = 0;

    (async () => {
      const runtime = await import("@/lib/portfolio/viewer-runtime");
      if (cancelled || !canvasRef.current) return;
      const viewer = runtime.createViewer(canvasRef.current);
      viewer.setObject(runtime.buildDemoGroup(demoMesh));
      viewer.resize();
      handle = viewer;
      const loop = () => {
        viewer.tick();
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    })();

    const ro = new ResizeObserver(() => handle?.resize());
    if (wrapRef.current) ro.observe(wrapRef.current);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      ro.disconnect();
      handle?.dispose();
    };
  }, [demoMesh]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative h-viewer w-full overflow-hidden rounded-md bg-hero",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full cursor-grab active:cursor-grabbing"
      />
      <p className="pointer-events-none absolute bottom-3 left-3 font-ui text-sm text-cream/80">
        Arrastra para rotar · rueda para zoom
      </p>
    </div>
  );
}
