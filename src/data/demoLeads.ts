export type Priority = "Alta" | "Media" | "Baja";
export type Status = "Nuevo" | "Contactado" | "Seguimiento" | "Agendado" | "Sin respuesta";

export interface DemoLead {
  id: string;
  patient: string;
  treatment: string;
  priority: Priority;
  status: Status;
  channel: "WhatsApp" | "Formulario web" | "Landing" | "Campaña";
  lastContact: string;
  nextAction: string;
}

// Datos 100% ficticios, generados solo para fines de demostración del sistema.
export const demoLeads: DemoLead[] = [
  {
    id: "L-104",
    patient: "Marcela Duarte",
    treatment: "Implante dental",
    priority: "Alta",
    status: "Seguimiento",
    channel: "WhatsApp",
    lastContact: "Hace 2 días",
    nextAction: "Llamar hoy",
  },
  {
    id: "L-103",
    patient: "Rodrigo Ayala",
    treatment: "Diseño de sonrisa",
    priority: "Alta",
    status: "Contactado",
    channel: "Campaña",
    lastContact: "Ayer",
    nextAction: "Enviar presupuesto",
  },
  {
    id: "L-102",
    patient: "Claudia Benítez",
    treatment: "Ortodoncia / alineadores",
    priority: "Media",
    status: "Nuevo",
    channel: "Formulario web",
    lastContact: "Hace 4 horas",
    nextAction: "Primer contacto",
  },
  {
    id: "L-101",
    patient: "Fabián Torres",
    treatment: "Rehabilitación oral",
    priority: "Alta",
    status: "Seguimiento",
    channel: "WhatsApp",
    lastContact: "Hace 3 días",
    nextAction: "Llamar hoy",
  },
  {
    id: "L-100",
    patient: "Liz Gonzalez",
    treatment: "Estética dental",
    priority: "Baja",
    status: "Agendado",
    channel: "Landing",
    lastContact: "Hace 1 día",
    nextAction: "Confirmar turno",
  },
  {
    id: "L-099",
    patient: "Diego Cabrera",
    treatment: "Implante dental",
    priority: "Media",
    status: "Sin respuesta",
    channel: "Formulario web",
    lastContact: "Hace 5 días",
    nextAction: "Reintentar contacto",
  },
  {
    id: "L-098",
    patient: "Sofía Ramírez",
    treatment: "Ortodoncia / alineadores",
    priority: "Alta",
    status: "Seguimiento",
    channel: "WhatsApp",
    lastContact: "Hoy",
    nextAction: "Llamar hoy",
  },
  {
    id: "L-097",
    patient: "Hugo Villalba",
    treatment: "Diseño de sonrisa",
    priority: "Media",
    status: "Agendado",
    channel: "Formulario web",
    lastContact: "Hace 2 días",
    nextAction: "Confirmar turno",
  },
  {
    id: "L-096",
    patient: "Andrea Franco",
    treatment: "Estética dental",
    priority: "Baja",
    status: "Nuevo",
    channel: "Landing",
    lastContact: "Hace 6 horas",
    nextAction: "Primer contacto",
  },
  {
    id: "L-095",
    patient: "Javier Ortiz",
    treatment: "Rehabilitación oral",
    priority: "Alta",
    status: "Contactado",
    channel: "WhatsApp",
    lastContact: "Hace 1 día",
    nextAction: "Enviar presupuesto",
  },
];

export const demoStats = {
  leadsDelMes: 48,
  pendientes: 11,
  seguimientoHoy: 7,
  prioridadAlta: 5,
  agendados: 16,
};
