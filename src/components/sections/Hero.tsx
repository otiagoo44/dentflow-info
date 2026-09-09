import { ArrowRight, CirclePlay, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/hero/DashboardMockup";
import { getWhatsappLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-56 right-[-12rem] h-[42rem] w-[42rem] rounded-full bg-primary/[.10] blur-[110px]" />
        <div className="absolute top-1/3 -left-48 h-[32rem] w-[32rem] rounded-full bg-accent/[.08] blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-16">
          <div className="relative z-10 min-w-0">
            <div className="hero-enter hero-delay-1"><Eyebrow>Control de oportunidades para clínicas odontológicas</Eyebrow></div>
            <h1 className="hero-enter hero-delay-2 mt-6 max-w-2xl font-display text-[2.55rem] font-extrabold leading-[1.04] tracking-[-.045em] text-dark sm:text-5xl lg:text-[3.45rem] xl:text-[3.8rem]">
              Que ninguna consulta quede sin seguimiento.
            </h1>
            <p className="hero-enter hero-delay-3 mt-6 max-w-xl text-lg leading-[1.72] text-text-secondary sm:text-xl">
              DentFlow centraliza, prioriza y organiza las oportunidades de tu clínica para que recepción sepa qué necesita atención y dirección tenga visibilidad del proceso.
            </p>

            <div className="hero-enter hero-delay-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
              <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" size="lg" onClick={() => trackEvent("whatsapp_demo_click", { location: "hero" })}>
                <MessageCircle className="h-4 w-4" />
                Agendar demo por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#producto" variant="secondary" size="lg" onClick={() => trackEvent("view_product_demo", { location: "hero" })}>
                <CirclePlay className="h-4 w-4" />
                Ver cómo funciona
              </Button>
            </div>
            <div className="hero-enter hero-delay-4 mt-5 flex items-center gap-2 text-sm text-text-secondary">
              <ShieldCheck className="h-4 w-4 text-primary" />
              15 minutos · Sin compromiso · Directamente con Tiago
            </div>
          </div>

          <div className="hero-enter hero-delay-4 min-w-0 lg:pl-2">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
