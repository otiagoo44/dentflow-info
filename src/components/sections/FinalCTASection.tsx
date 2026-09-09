import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getWhatsappLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_50%_55%,rgba(37,99,235,.25),transparent_68%)]" />
      <div className="pointer-events-none absolute -bottom-44 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />
      <Container className="relative text-center">
        <Reveal variant="fade"><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Próximo paso</p></Reveal>
        <Reveal delay={80}><h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">Veamos si DentFlow tiene sentido para tu clínica.</h2></Reveal>
        <Reveal delay={160}><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">En 15 minutos te muestro cómo funciona y revisamos cómo gestionás actualmente tus consultas.</p></Reveal>
        <Reveal delay={240} className="mt-9">
          <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" variant="light" size="lg" onClick={() => trackEvent("whatsapp_demo_click", { location: "final_cta" })}>
            <MessageCircle className="h-4 w-4" />Agendar demostración por WhatsApp<ArrowRight className="h-4 w-4" />
          </Button>
          <p className="mt-5 text-sm text-white/50">15 minutos · Sin compromiso · Directamente con Tiago</p>
        </Reveal>
      </Container>
    </section>
  );
}
