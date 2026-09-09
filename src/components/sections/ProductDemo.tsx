import { useMemo, useState } from "react";
import { ArrowRight, Filter, MessageCircle, MonitorDot } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { demoLeads, demoStats, type DemoLead } from "@/data/demoLeads";
import { getWhatsappLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/utils/cn";

type FilterKey = "todos" | "alta" | "hoy" | "pendientes" | "agendados";
const filters: { key: FilterKey; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "alta", label: "Alta prioridad" },
  { key: "hoy", label: "Seguimiento hoy" },
  { key: "pendientes", label: "Pendientes" },
  { key: "agendados", label: "Agendados" },
];
const priorityStyles: Record<string, string> = {
  Alta: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
  Media: "bg-amber-50 text-amber-800 ring-1 ring-amber-200",
  Baja: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
};
const statusStyles: Record<string, string> = {
  Nuevo: "bg-blue-50 text-blue-700",
  Contactado: "bg-cyan-50 text-cyan-800",
  Seguimiento: "bg-amber-50 text-amber-800",
  Agendado: "bg-emerald-50 text-emerald-800",
  "Sin respuesta": "bg-slate-100 text-slate-600",
};
function matchesFilter(lead: DemoLead, filter: FilterKey) {
  if (filter === "alta") return lead.priority === "Alta";
  if (filter === "hoy") return lead.nextAction.toLowerCase().includes("hoy");
  if (filter === "pendientes") return ["Nuevo", "Contactado", "Sin respuesta", "Seguimiento"].includes(lead.status);
  if (filter === "agendados") return lead.status === "Agendado";
  return true;
}

export function ProductDemo() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("todos");
  const rows = useMemo(() => demoLeads.filter((lead) => matchesFilter(lead, activeFilter)), [activeFilter]);
  const setFilter = (filter: FilterKey) => {
    setActiveFilter(filter);
    trackEvent("product_demo_filter", { filter });
  };

  return (
    <section id="producto" className="section-shell overflow-hidden bg-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">El sistema</p>
          <h2 className="section-heading mt-4 text-dark">Tu recepción no debería tener que recordar todo.</h2>
          <p className="section-lead mx-auto mt-6 max-w-2xl">Probá el panel: filtrá las oportunidades como lo haría recepción para ver qué necesita atención.</p>
        </Reveal>

        <Reveal variant="scale" delay={100} className="mt-12">
          <div className="surface-shadow overflow-hidden rounded-[24px] border border-dark/[.08] bg-[#eef3f9] ring-1 ring-white sm:rounded-[30px]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dark/[.07] bg-white px-4 py-3.5 sm:px-6">
              <div className="flex items-center gap-2">
                <MonitorDot className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-dark">DentFlow · Oportunidades</span>
              </div>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-800">Datos de demostración</span>
            </div>

            <div className="p-3 sm:p-5 lg:p-7">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5 sm:gap-3">
                {[
                  ["Consultas del mes", demoStats.leadsDelMes],
                  ["Pendientes", demoStats.pendientes],
                  ["Seguimiento hoy", demoStats.seguimientoHoy],
                  ["Prioridad alta", demoStats.prioridadAlta],
                  ["Agendados", demoStats.agendados],
                ].map(([label, value], index) => (
                  <div key={String(label)} className={cn("rounded-xl border bg-white px-3 py-3.5 sm:px-4", index === 2 ? "border-primary/25 shadow-[0_8px_20px_-16px_rgba(37,99,235,.6)]" : "border-border")}>
                    <p className="font-display text-2xl font-extrabold text-dark sm:text-3xl"><AnimatedNumber value={Number(value)} /></p>
                    <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-wide text-text-secondary sm:text-[11px]">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-white p-2 sm:p-3">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" aria-label="Filtros del panel">
                  <span className="hidden h-10 items-center gap-2 px-2 text-xs font-bold uppercase tracking-wide text-text-secondary sm:flex"><Filter className="h-3.5 w-3.5" />Filtrar</span>
                  {filters.map((filter) => (
                    <button key={filter.key} type="button" aria-pressed={activeFilter === filter.key} onClick={() => setFilter(filter.key)} className={cn("min-h-10 shrink-0 rounded-xl border px-3.5 text-xs font-semibold transition-[background-color,color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", activeFilter === filter.key ? "border-primary bg-primary text-white shadow-[0_6px_16px_-8px_rgba(37,99,235,.65)]" : "border-border bg-white text-text-secondary hover:border-primary/35 hover:text-primary")}>
                      {filter.label}
                    </button>
                  ))}
                </div>

                <div key={activeFilter} className="mt-2 animate-[hero-enter_.45s_cubic-bezier(.16,1,.3,1)_both]">
                  <div className="hidden overflow-hidden rounded-xl border border-border lg:block">
                    <table className="w-full table-fixed text-left text-sm">
                      <thead><tr className="border-b border-border bg-bg/70 text-[10px] font-bold uppercase tracking-[.1em] text-text-secondary">
                        <th className="w-[18%] px-4 py-3">Paciente</th><th className="w-[20%] px-4 py-3">Interés</th><th className="w-[12%] px-4 py-3">Prioridad</th><th className="w-[14%] px-4 py-3">Estado</th><th className="w-[14%] px-4 py-3">Canal</th><th className="w-[22%] px-4 py-3">Próxima acción</th>
                      </tr></thead>
                      <tbody>
                        {rows.map((lead) => (
                          <tr key={lead.id} className="border-b border-border last:border-0 transition-colors hover:bg-blue-50/45">
                            <td className="truncate px-4 py-3.5 font-semibold text-dark">{lead.patient}</td>
                            <td className="truncate px-4 py-3.5 text-text-secondary">{lead.treatment}</td>
                            <td className="px-4 py-3.5"><span className={cn("rounded-full px-2.5 py-1 text-[10px] font-bold", priorityStyles[lead.priority])}>{lead.priority}</span></td>
                            <td className="px-4 py-3.5"><span className={cn("rounded-full px-2.5 py-1 text-[10px] font-semibold", statusStyles[lead.status])}>{lead.status}</span></td>
                            <td className="truncate px-4 py-3.5 text-text-secondary">{lead.channel}</td>
                            <td className="px-4 py-3.5 font-medium text-dark">{lead.nextAction}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="grid gap-2.5 lg:hidden" aria-live="polite">
                    {rows.map((lead) => (
                      <article key={lead.id} className="rounded-xl border border-border bg-white p-4 transition-colors hover:border-primary/25">
                        <div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="truncate font-semibold text-dark">{lead.patient}</p><p className="mt-1 text-sm text-text-secondary">{lead.treatment}</p></div><span className={cn("shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold", priorityStyles[lead.priority])}>{lead.priority}</span></div>
                        <div className="mt-3 flex flex-wrap items-center gap-2"><span className={cn("rounded-full px-2.5 py-1 text-[10px] font-semibold", statusStyles[lead.status])}>{lead.status}</span><span className="text-xs text-text-secondary">{lead.channel} · {lead.lastContact}</span></div>
                        <p className="mt-3 border-t border-border pt-3 text-sm font-semibold text-primary">Próxima acción: {lead.nextAction}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-9 flex max-w-2xl flex-col items-center text-center">
          <p className="section-lead">En lugar de buscar conversaciones una por una, recepción abre el sistema y sabe dónde concentrarse.</p>
          <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-6" size="lg" onClick={() => trackEvent("whatsapp_demo_click", { location: "product_demo" })}>
            <MessageCircle className="h-4 w-4" />Quiero verlo aplicado a mi clínica<ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
