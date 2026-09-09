import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/utils/cn";

const faqs = [
  { q: "¿Esto reemplaza WhatsApp?", a: "No necesariamente. DentFlow organiza las oportunidades y el seguimiento alrededor de las consultas que recibe la clínica." },
  { q: "¿Es un chatbot?", a: "No. El foco está en centralizar, priorizar y organizar el seguimiento de las oportunidades." },
  { q: "¿Mi recepcionista necesita conocimientos técnicos?", a: "No. La interfaz está pensada para que el equipo pueda usarla de forma simple y con una próxima acción clara." },
  { q: "¿Necesito cambiar todos mis procesos?", a: "No. Primero revisamos cómo gestionan hoy las consultas y configuramos el sistema alrededor del flujo necesario." },
  { q: "¿Cómo sé si tiene sentido para mi clínica?", a: "La demostración sirve para revisar cómo gestionan hoy las consultas y ver si DentFlow encaja con ese proceso." },
  { q: "¿Cuánto dura la demostración?", a: "Aproximadamente 15 minutos, sin compromiso y directamente con Tiago." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return (
    <section id="faq" className="section-shell bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <Reveal variant="left">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">Preguntas frecuentes</p>
            <h2 className="section-heading mt-4 text-dark">Antes de ver una demo.</h2>
            <p className="section-lead mt-5">Respuestas claras sobre qué hace DentFlow y qué podés esperar del sistema.</p>
          </Reveal>
          <Reveal variant="right" delay={80}>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq, index) => {
                const isOpen = open === index;
                const triggerId = `${baseId}-trigger-${index}`;
                const panelId = `${baseId}-panel-${index}`;
                return (
                  <div key={faq.q}>
                    <h3>
                      <button id={triggerId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? null : index)} className="group flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none">
                        <span className="font-display text-base font-bold text-dark sm:text-lg">{faq.q}</span>
                        <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300", isOpen ? "rotate-180 border-primary bg-primary text-white" : "border-border text-text-secondary group-hover:border-primary/30 group-hover:text-primary")}><ChevronDown className="h-4 w-4" /></span>
                      </button>
                    </h3>
                    <div id={panelId} role="region" aria-labelledby={triggerId} className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(.16,1,.3,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden"><p className="max-w-2xl pb-6 pr-12 text-[15px] leading-7 text-text-secondary">{faq.a}</p></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
