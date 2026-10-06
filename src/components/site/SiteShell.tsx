import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PROFILE } from "@/lib/portfolio/data";
import { Nav } from "./Nav";
import { PawMarquee } from "./PawMarquee";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-svh">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:rounded-md focus:bg-card focus:px-4 focus:py-2"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido" key={pathname} className="page-enter">
        {children}
      </main>
      <PawMarquee />
      <footer className="bg-bg/80 px-6 py-7 text-center font-ui text-dim">
        {PROFILE.footer}
      </footer>
    </div>
  );
}
