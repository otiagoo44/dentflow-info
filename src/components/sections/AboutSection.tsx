import { CheckCircle2, Layers3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function AboutSection() {
  return (
    <section className="section-shell bg-bg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)] lg:gap-16 xl:gap-24">
          <Reveal variant="scale">
            <figure className="surface-shadow relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[28px] border border-dark/[.08] bg-white lg:mx-0">
              <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="absolute left-5 top-5 z-20 rounded-xl bg-white/90 px-4 py-3 shadow-lg shadow-dark/10 backdrop-blur-md sm:left-7 sm:top-7">
                <BrandLogo className="w-[138px] sm:w-[158px]" />
              </div>

              <div className="relative aspect-[4/5] min-h-[25rem] overflow-hidden bg-dark sm:aspect-[5/6] sm:min-h-[32rem] lg:min-h-[34rem]">
                <img
                  src="/tiago-ortega.jpg"
                  alt="Tiago, responsable de la implementación de DentFlow"
                  className="h-full w-full object-cover object-[50%_24%]"
                  width="1200"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-dark/90 via-dark/35 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-8">
                  <p className="font-display text-2xl font-extrabold tracking-[-.025em] sm:text-3xl">Tiago</p>
                  <p className="mt-1 text-sm text-white/80 sm:text-base">Persona detrás de DentFlow</p>
                </figcaption>
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-bg/70 p-4">
                  <Layers3 className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm font-semibold leading-5 text-dark">Sistema adaptado al flujo necesario</p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-bg/70 p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm font-semibold leading-5 text-dark">Implementación acompañada</p>
                </div>
              </div>
            </figure>
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
