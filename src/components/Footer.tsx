import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SITE, getWhatsappLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14 pb-28 md:pb-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <BrandLogo className="w-[156px]" />
            <p className="mt-5 max-w-md text-sm leading-6 text-text-secondary">
              Sistema de gestión y seguimiento de oportunidades para clínicas odontológicas.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_demo_click", { location: "footer" })} className="flex min-h-11 items-center gap-3 text-text-secondary transition-colors hover:text-primary">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary"><MessageCircle className="h-4 w-4" /></span>
              {SITE.whatsappDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex min-h-11 items-center gap-3 text-text-secondary transition-colors hover:text-primary">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary"><Mail className="h-4 w-4" /></span>
              {SITE.email}
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-text-secondary">© {new Date().getFullYear()} DentFlow. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
