import { CircleAlert, FileText, LayoutGrid, Megaphone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const channels = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: LayoutGrid, label: "Landing" },
  { icon: FileText, label: "Formularios" },
  { icon: Megaphone, label: "Campañas" },
];
const flow = [
  { title: "Consulta nueva", detail: "Entra una oportunidad" },
  { title: "Recepción ocupada", detail: "Se responde después" },
  { title: "Sin próxima acción", detail: "Nadie retoma el contacto" },
  { title: "Oportunidad perdida", detail: "El seguimiento se corta", danger: true },
];

export function ProblemSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">El punto ciego</p>
          <h2 className="section-heading mt-4 text-dark">Las consultas entran. El problema es lo que pasa después.</h2>
          <p className="section-lead mx-auto mt-6 max-w-2xl">Cuando el proceso vive entre chats, notas y memoria, es difícil saber qué paciente necesita seguimiento y qué ocurrió con cada oportunidad.</p>
        </Reveal>

        <Reveal variant="scale" delay={100} className="surface-shadow mx-auto mt-14 max-w-6xl overflow-hidden rounded-[26px] border border-dark/[.07] bg-bg/65 p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {channels.map(({ icon: Icon, label }) => (
              <div key={label} className="flex min-h-11 items-center gap-2 rounded-full border border-border bg-white px-4 text-sm font-semibold text-dark shadow-[0_6px_18px_-14px_rgba(7,17,31,.35)]">
                <Icon className="h-4 w-4 text-primary" />{label}
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-9 max-w-5xl">
            <div className="absolute left-6 top-5 bottom-5 w-px bg-border lg:left-[7%] lg:right-[7%] lg:top-6 lg:bottom-auto lg:h-px lg:w-auto">
              <span className="absolute inset-0 origin-left bg-gradient-to-b from-primary via-primary to-rose-400 lg:bg-gradient-to-r" />
            </div>
            <div className="relative grid gap-4 lg:grid-cols-4">
              {flow.map((step, index) => (
                <Reveal key={step.title} delay={160 + index * 90} variant={index % 2 ? "right" : "left"}>
                  <div className={`relative ml-12 min-h-[112px] rounded-2xl border p-5 lg:ml-0 lg:pt-10 ${step.danger ? "border-rose-200 bg-rose-50/80" : "border-border bg-white"}`}>
                    <span className={`absolute -left-[2.35rem] top-5 flex h-7 w-7 items-center justify-center rounded-full border-4 border-bg text-[10px] font-bold text-white lg:left-1/2 lg:top-2 lg:-translate-x-1/2 ${step.danger ? "bg-rose-500" : "bg-primary"}`}>{index + 1}</span>
                    <p className={`font-display text-base font-bold ${step.danger ? "text-rose-800" : "text-dark"}`}>{step.title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-text-secondary">{step.detail}</p>
                    {step.danger && <CircleAlert className="absolute right-4 top-4 h-4 w-4 text-rose-500" aria-hidden="true" />}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 border-y border-border py-8 sm:grid-cols-3 sm:divide-x sm:divide-border">
          {[
            ["Leads olvidados", "Conversaciones que quedan enterradas entre mensajes."],
            ["Seguimiento irregular", "El próximo paso depende de que alguien lo recuerde."],
            ["Poca visibilidad", "Dirección no ve con claridad qué está pendiente."],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 90} className="px-3 sm:px-6">
              <p className="font-display text-lg font-bold text-dark">{title}</p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
