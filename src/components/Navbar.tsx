import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { getWhatsappLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/utils/cn";

const links = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#producto", label: "El sistema" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
      scrolled || open
        ? "border-dark/[.06] bg-white/88 shadow-[0_8px_30px_-24px_rgba(7,17,31,.45)] backdrop-blur-xl"
        : "border-transparent bg-white/35",
    )}>
      <Container>
        <div className="flex h-[72px] items-center justify-between sm:h-20">
          <a href="#top" className="flex min-h-11 items-center" aria-label="DentFlow, inicio" onClick={() => setOpen(false)}>
            <BrandLogo className="w-[138px] sm:w-[150px]" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="relative py-3 text-sm font-medium text-text-secondary transition-colors hover:text-dark after:absolute after:inset-x-0 after:bottom-1 after:h-px after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_demo_click", { location: "navbar" })}>
              Agendar demo
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-transparent text-dark transition-colors hover:border-border hover:bg-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div id="mobile-menu" className={cn("overflow-hidden border-t border-border/70 bg-white/96 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden", open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0")}>
        <div>
          <Container className="flex flex-col gap-1 py-5">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-dark hover:bg-bg">
                {link.label}
              </a>
            ))}
            <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-3 w-full" size="lg" onClick={() => { trackEvent("whatsapp_demo_click", { location: "mobile_menu" }); setOpen(false); }}>
              Agendar demo por WhatsApp
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
