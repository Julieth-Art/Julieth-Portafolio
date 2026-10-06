import { PawPrint } from "lucide-react";

export function PawMarquee() {
  const row = Array.from({ length: 16 }, (_, i) => (
    <PawPrint key={i} className="size-4 shrink-0" strokeWidth={1.75} />
  ));
  return (
    <div className="paw-rail" aria-hidden="true">
      <div className="paw-track">
        {row}
        {row}
      </div>
    </div>
  );
}
