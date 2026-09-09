export const SITE = {
  brandName: "DentFlow",
  ownerName: "Tiago",
  whatsappNumber: "595993367341",
  whatsappDisplay: "+595 993 367 341",
  whatsappMessage:
    "Hola Tiago, vi DentFlow y quiero agendar una demostración de 15 minutos para mi clínica odontológica.",
  email: "dentalcrmauth@gmail.com",
  logoColor: "/brand/dentflow-logo-color.png",
  logoMono: "/brand/dentflow-logo-mono.png",
  appIcon: "/brand/dentflow-icon.png",
} as const;

export type CtaLocation =
  | "navbar"
  | "mobile_menu"
  | "hero"
  | "diagnostic"
  | "product_demo"
  | "final_cta"
  | "sticky_mobile"
  | "footer";

export const getWhatsappLink = () => {
  const number = SITE.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
};
