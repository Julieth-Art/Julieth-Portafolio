import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site/SiteShell";
import { AppErrorComponent } from "../lib/error-component";
import appCss from "../styles.css?url";

const APP_NAME = "Julieth — Animación 3D & Arte Digital";

function NotFound() {
  return (
    <section className="px-page flex min-h-[70svh] flex-col items-center justify-center pt-28 pb-20 text-center">
      <p className="font-script text-script-lg text-accent">Página no encontrada</p>
      <p className="mt-2 max-w-[36ch] font-body text-dim">
        Ese rincón del portafolio aún no existe. Vuelve al inicio para seguir explorando.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex h-11 items-center rounded-pill bg-accent px-5 font-ui text-card"
      >
        Volver al inicio
      </Link>
    </section>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Portafolio de Melany Julieth Plazas Yacue: animación 3D, modelado, concept art e ilustración digital de fantasía.",
      },
      { name: "theme-color", content: "#36503f" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=EB+Garamond:wght@400;500;600&family=Great+Vibes&family=Playfair+Display:wght@700;900&display=swap",
      },
    ],
  }),
  errorComponent: AppErrorComponent,
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="es" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
