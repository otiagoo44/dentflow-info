import { Bell, Check, Search, Sparkles } from "lucide-react";
import { demoLeads, demoStats } from "@/data/demoLeads";
import { cn } from "@/utils/cn";

const priorityStyles: Record<string, string> = {
  Alta: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
  Media: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  Baja: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
};
const statusStyles: Record<string, string> = {
  Nuevo: "bg-blue-50 text-blue-700",
  Contactado: "bg-cyan-50 text-cyan-800",
  Seguimiento: "bg-amber-50 text-amber-800",
  Agendado: "bg-emerald-50 text-emerald-800",
  "Sin respuesta": "bg-slate-100 text-slate-600",
};

export function DashboardMockup() {
  const rows = demoLeads.slice(0, 4);
  return (
    <div className="relative mx-auto w-[96%] max-w-[620px] sm:w-full lg:w-[92%] xl:w-[94%]" aria-label="Vista previa del panel de DentFlow con datos de demostración">
      <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,rgba(37,99,235,.2),transparent)]" />
      <div className="surface-shadow relative overflow-hidden rounded-[22px] border border-white bg-white ring-1 ring-dark/[.07] sm:rounded-[28px]">
        <div className="flex items-center justify-between border-b border-border/80 bg-white px-4 py-3 sm:px-5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/35" />
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-bg/70 px-3 py-1.5 text-[11px] font-medium text-text-secondary">
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Panel de oportunidades</span>
            <span className="sm:hidden">Oportunidades</span>
          </div>
          <Bell className="h-4 w-4 text-text-secondary" aria-hidden="true" />
        </div>

        <div className="p-3.5 sm:p-5">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-primary">Clínica demo</p>
              <p className="mt-1 font-display text-base font-bold text-dark sm:text-lg">Resumen de seguimiento</p>
            </div>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-800">Datos demo</span>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2">
            {[
              { label: "Consultas", value: demoStats.leadsDelMes },
              { label: "Para hoy", value: demoStats.seguimientoHoy },
              { label: "Prioridad alta", value: demoStats.prioridadAlta },
            ].map((stat, index) => (
              <div key={stat.label} className={cn("rounded-xl border px-3 py-2.5", index === 1 ? "border-primary/20 bg-primary/[.05]" : "border-border bg-bg/60")}>
                <p className="font-display text-xl font-extrabold text-dark sm:text-2xl">{stat.value}</p>
                <p className="mt-0.5 truncate text-[9px] font-semibold uppercase tracking-wide text-text-secondary sm:text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {rows.map((lead, index) => (
              <div key={lead.id} className={cn("grid grid-cols-[auto_1fr_auto] items-center gap-2.5 rounded-xl border border-border/80 px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-blue-50/30", index === 0 && "dashboard-row-live")}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-dark text-[10px] font-bold text-white">
                  {lead.patient.split(" ").map((name) => name[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0">
                  <div className="flex min-w-0 items-center gap-2">
                    <p className="truncate text-xs font-semibold text-text sm:text-sm">{lead.patient}</p>
                    <span className={cn("hidden rounded-full px-2 py-0.5 text-[9px] font-bold sm:inline", priorityStyles[lead.priority])}>{lead.priority}</span>
                  </div>
                  <p className="mt-0.5 truncate text-[10px] text-text-secondary sm:text-[11px]">{lead.nextAction}</p>
                </div>
                <span className={cn("rounded-full px-2 py-1 text-[9px] font-semibold whitespace-nowrap", statusStyles[lead.status])}>{lead.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="float-slow absolute -left-3 top-24 hidden rounded-xl border border-dark/[.08] bg-white px-3 py-2.5 shadow-[0_16px_36px_-16px_rgba(7,17,31,.35)] xl:-left-7 xl:block">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10"><Sparkles className="h-3.5 w-3.5 text-primary" /></span>
          <div><p className="text-[10px] font-bold text-dark">Atención prioritaria</p><p className="text-[9px] text-text-secondary">5 oportunidades identificadas</p></div>
        </div>
      </div>
      <div className="float-slow absolute -bottom-5 right-4 hidden rounded-xl bg-dark px-3.5 py-2.5 text-white shadow-[0_18px_40px_-15px_rgba(7,17,31,.55)] xl:block [animation-delay:-2.5s]">
        <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent" /><div><p className="text-[10px] font-bold">Próxima acción definida</p><p className="text-[9px] text-white/55">El equipo sabe cómo continuar</p></div></div>
      </div>
    </div>
  );
}
