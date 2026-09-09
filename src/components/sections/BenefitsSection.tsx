import { BrainCircuit, Eye, Gauge, ListOrdered, NotebookPen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  { icon: Gauge, title: "Más control", text: "Sabé qué pasó con cada consulta." },
  { icon: ListOrdered, title: "Prioridades claras", text: "Concentrá al equipo en lo que necesita atención." },
  { icon: Eye, title: "Seguimientos visibles", text: "Mantené las oportunidades pendientes dentro del sistema." },
  { icon: BrainCircuit, title: "Mejores decisiones", text: "Entendé el proceso con métricas claras." },
  { icon: NotebookPen, title: "Menos memoria", text: "Dejá cada próximo paso documentado." },
];

export function BenefitsSection() {
  return (
    <section className="pb-24 bg-white sm:pb-32">
      <Container>
        <Reveal className="border-y border-border py-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-border">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group lg:px-5">
                <benefit.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
                <h3 className="mt-4 font-display text-base font-bold text-dark">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{benefit.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
