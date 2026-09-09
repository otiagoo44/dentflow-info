import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getWhatsappLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function DiagnosticSection() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_65%_at_50%_25%,rgba(37,99,235,.22),transparent_72%)]" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative text-center">
        <Reveal variant="fade"><p className="text-xs font-bold uppercase tracking-[.24em] text-accent">Una pregunta de control</p></Reveal>
        <Reveal delay={80} className="mx-auto mt-7 max-w-4xl">
          <h2 className="font-display text-3xl font-bold leading-[1.22] tracking-[-.035em] text-white sm:text-4xl lg:text-[3.25rem]">
            Si te pregunto cuántas consultas entraron el mes pasado, cuántas no agendaron y cuáles todavía necesitan seguimiento…
          </h2>
          <p className="mt-5 font-display text-3xl font-extrabold tracking-[-.03em] text-accent sm:text-4xl lg:text-[3.25rem]">¿podés responderlo en menos de 30 segundos?</p>
        </Reveal>
        <Reveal delay={180} className="mx-auto mt-7 max-w-2xl">
          <p className="text-base leading-7 text-white/65 sm:text-lg">Si la respuesta es no, hay espacio para mejorar el control del proceso sin cambiar toda la operación de la clínica.</p>
        </Reveal>
        <Reveal delay={260} className="mt-9">
          <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" variant="light" size="lg" onClick={() => trackEvent("whatsapp_demo_click", { location: "diagnostic" })}>
            <MessageCircle className="h-4 w-4" />Agendar demostración<ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
