import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  tinted?: boolean;
  bleed?: boolean;
};

export function PageFrame({ children, tinted, bleed }: Props) {
  if (bleed) return <>{children}</>;
  return (
    <section className={cn("px-page pt-28 pb-20", tinted && "bg-accent/10")}>
      <div className="mx-auto max-w-site">{children}</div>
    </section>
  );
}
