import { CheckCircle2, Layers3, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function AboutSection() {
  return (
    <section className="section-shell bg-bg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
          <Reveal variant="scale">
            <div className="surface-shadow relative overflow-hidden rounded-[28px] border border-dark/[.08] bg-white p-6 sm:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
              <BrandLogo className="w-[180px]" />
              <div className="mt-8 rounded-2xl border border-border bg-bg/70 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark text-white"><UserRound className="h-5 w-5" /></span>
                  <div><p className="font-display text-lg font-bold text-dark">Tiago</p><p className="text-sm text-text-secondary">Persona detrás de DentFlow</p></div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border p-4"><Layers3 className="h-4 w-4 text-primary" /><p className="mt-3 text-xs font-semibold leading-5 text-dark">Sistema adaptado al flujo necesario</p></div>
                <div className="rounded-xl border border-border p-4"><CheckCircle2 className="h-4 w-4 text-accent" /><p className="mt-3 text-xs font-semibold leading-5 text-dark">Implementación acompañada</p></div>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">Quién está detrás</p>
            <h2 className="section-heading mt-4 text-dark">Una implementación con responsable visible.</h2>
            <p className="section-lead mt-6">Soy <strong className="font-semibold text-dark">Tiago</strong>. Diseño e implemento sistemas para ayudar a clínicas odontológicas a tener mayor control sobre las consultas que reciben y los seguimientos de su equipo.</p>
            <p className="section-lead mt-4">El enfoque es concreto: una herramienta útil, fácil de entender y ajustada al proceso real de la clínica, sin agregar tecnología innecesaria.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
