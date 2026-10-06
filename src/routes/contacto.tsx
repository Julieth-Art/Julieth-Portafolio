import { createFileRoute } from "@tanstack/react-router";
import { ContactContent } from "@/components/portfolio/ContactContent";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [{ title: "Contacto — Julieth" }],
  }),
});

function ContactoPage() {
  return (
    <section className="pt-16">
      <ContactContent />
    </section>
  );
}
