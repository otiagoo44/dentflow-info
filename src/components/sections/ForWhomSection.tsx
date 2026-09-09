import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const idealFor = [
  "Tenés recepción o un equipo administrativo que responde consultas.",
  "Recibís oportunidades desde WhatsApp, landing, formularios o campañas.",
  "Necesitás saber qué seguimiento está pendiente y quién debe continuarlo.",
  "La dirección quiere una visión más clara del estado de las consultas.",
  "Ofrecés tratamientos donde el seguimiento importa, como implantes, ortodoncia, estética o rehabilitación.",
];
const notFor = [
  "Recibís muy pocas consultas y podés controlarlas sin dificultad.",
  "Ya usás un CRM y tenés perfectamente ordenados los seguimientos y las métricas.",
  "No necesitás gestionar un proceso de seguimiento comercial.",
  "Buscás solamente un chatbot o envío automático de mensajes.",
];

export function ForWhomSection() {
  return (
    <section id="para-quien" className="section-shell bg-bg">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">Encaje</p>
          <h2 className="section-heading mt-4 text-dark">Tiene sentido cuando cada consulta merece seguimiento.</h2>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-6xl overflow-hidden rounded-[28px] border border-dark/[.08] bg-white shadow-[0_28px_70px_-48px_rgba(7,17,31,.38)] lg:grid-cols-[1.08fr_.92fr]">
          <Reveal variant="left" className="p-6 sm:p-9 lg:p-11">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Ideal para tu clínica si</p>
            <ul className="mt-7 space-y-5">
              {idealFor.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3.5 w-3.5" /></span><span className="text-[15px] leading-6 text-text">{item}</span></li>)}
            </ul>
          </Reveal>
          <Reveal variant="right" delay={80} className="bg-dark p-6 sm:p-9 lg:p-11">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-white/55">Probablemente no lo necesitás si</p>
            <ul className="mt-7 space-y-5">
              {notFor.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/8 text-white/65"><X className="h-3.5 w-3.5" /></span><span className="text-[15px] leading-6 text-white/72">{item}</span></li>)}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
