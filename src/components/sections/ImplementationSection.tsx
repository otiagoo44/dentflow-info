import { PackageCheck, Rocket, Search, Settings } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { icon: Search, title: "Diagnóstico", text: "Entendemos cómo reciben y gestionan actualmente las consultas." },
  { icon: Settings, title: "Configuración", text: "Configuramos el sistema de acuerdo con el flujo necesario de la clínica." },
  { icon: Rocket, title: "Implementación", text: "Preparamos usuarios, formularios, landing y estructura de seguimiento." },
  { icon: PackageCheck, title: "Entrega", text: "Tu equipo recibe el sistema listo para utilizar y una explicación clara." },
];

export function ImplementationSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-20">
          <Reveal variant="left" className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">Implementación</p>
            <h2 className="section-heading mt-4 text-dark">Simple para tu equipo. Acompañado por nosotros.</h2>
            <p className="section-lead mt-6">No tenés que rediseñar toda la operación de la clínica. El sistema se configura alrededor del flujo que realmente necesitás.</p>
            <p className="mt-7 inline-flex rounded-full border border-primary/15 bg-primary/[.05] px-4 py-2 text-sm font-semibold text-primary">Nos encargamos de la implementación técnica.</p>
          </Reveal>
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary via-primary/45 to-accent/30" />
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 90} variant="right">
                  <article className="group relative ml-14 rounded-2xl border border-border bg-bg/55 p-5 transition-[background-color,border-color,transform] duration-300 hover:translate-x-1 hover:border-primary/25 hover:bg-white sm:p-6">
                    <span className="absolute -left-[3.45rem] top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/15 bg-white text-primary shadow-[0_10px_24px_-16px_rgba(37,99,235,.6)]"><step.icon className="h-5 w-5" /></span>
                    <div className="flex items-center gap-3"><span className="text-xs font-bold tracking-[.15em] text-primary">0{index + 1}</span><h3 className="font-display text-lg font-bold text-dark">{step.title}</h3></div>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
