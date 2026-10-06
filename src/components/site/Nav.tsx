import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/portfolio/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b border-line px-nav-x py-3 transition-[background-color,box-shadow] duration-200",
        scrolled ? "bg-bg/92 shadow-soft backdrop-blur-md" : "bg-bg/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4">
        <Link
          to="/"
          className="font-script text-[1.65rem] leading-none text-accent"
          onClick={() => setOpen(false)}
        >
          Julieth
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link font-ui text-[0.98rem] text-dim transition-colors duration-150 hover:text-accent"
              activeProps={{ className: "is-active text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open ? (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 top-16 bg-ink/35"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />
          <nav
            className="drawer-panel relative mt-3 flex flex-col overflow-hidden rounded-lg bg-card py-2 shadow-card"
            aria-label="Móvil"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-11 items-center justify-between px-5 py-3 font-ui text-ink hover:bg-bg"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className="text-sm text-dim">{item.hint}</span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
