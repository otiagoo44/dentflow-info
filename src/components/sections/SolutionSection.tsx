import { ClipboardList, Database, Flag, LineChart, ListChecks } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { icon: ClipboardList, title: "Captura", text: "La consulta ingresa desde una fuente definida." },
  { icon: Database, title: "Centralización", text: "La oportunidad queda registrada en un solo lugar." },
  { icon: Flag, title: "Priorización", text: "El equipo distingue qué requiere más atención." },
  { icon: ListChecks, title: "Próxima acción", text: "Recepción ve qué hacer y cuándo retomarlo." },
  { icon: LineChart, title: "Métricas", text: "Dirección obtiene una lectura clara del proceso." },
];

export function SolutionSection() {
  return (
    <section id="como-funciona" className="section-shell bg-bg">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">Cómo funciona</p>
          <h2 className="section-heading mt-4 text-dark">De una consulta suelta a una oportunidad con contexto.</h2>
          <p className="section-lead mx-auto mt-6 max-w-2xl">DentFlow ordena el recorrido para que el equipo pueda continuar cada conversación con una próxima acción visible.</p>
        </Reveal>

        <div className="relative mt-16">
          <svg className="absolute left-[8%] right-[8%] top-8 hidden h-2 w-[84%] overflow-visible lg:block" aria-hidden="true">
            <defs><linearGradient id="pipeline-gradient"><stop stopColor="#2563eb" /><stop offset="1" stopColor="#06b6d4" /></linearGradient></defs>
            <path d="M0 1 H1000" pathLength="1000" fill="none" stroke="#dfe7f1" strokeWidth="2" />
            <path className="flow-path" d="M0 1 H1000" pathLength="1000" fill="none" stroke="url(#pipeline-gradient)" strokeWidth="2" />
          </svg>
          <div className="grid gap-0 lg:grid-cols-5">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 100} variant="scale">
                <div className="group relative flex gap-5 border-l border-border pb-9 pl-8 last:pb-0 lg:block lg:border-0 lg:px-3 lg:pb-0 lg:text-center">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-dark/[.08] bg-white shadow-[0_12px_28px_-18px_rgba(7,17,31,.35)] transition-[transform,border-color] duration-300 group-hover:-translate-y-1 group-hover:border-primary/30">
                    <step.icon className="h-6 w-6 text-primary" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-dark text-[10px] font-bold text-white ring-4 ring-bg">{index + 1}</span>
                  </div>
                  <div className="pt-1 lg:pt-0">
                    <h3 className="mt-0 font-display text-base font-bold text-dark lg:mt-5">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
