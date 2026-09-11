import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section className="section-shell bg-bg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-24">
          <Reveal variant="scale">
            <figure className="surface-shadow mx-auto w-full max-w-[21rem] overflow-hidden rounded-2xl border border-dark/[.08] bg-white sm:max-w-[24rem] lg:mx-0 lg:max-w-[25rem]">
              <div className="aspect-[4/5] overflow-hidden bg-bg">
                <img
                  src="/tiago-ortega.jpg"
                  alt="Tiago, responsable de la implementación de DentFlow"
                  className="h-full w-full object-cover object-[50%_22%]"
                  width="1200"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="border-t border-border px-5 py-4 sm:px-6 sm:py-5">
                <p className="font-display text-xl font-bold tracking-[-.02em] text-dark">Tiago</p>
                <p className="mt-1 text-sm text-text-secondary">Responsable de DentFlow</p>
              </figcaption>
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
