import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsappLink } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.88);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-dark/[.07] bg-white/92 px-3 pt-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl transition-[transform,opacity] duration-300 md:hidden ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"}`}>
      <Button href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className="w-full" onClick={() => trackEvent("whatsapp_demo_click", { location: "sticky_mobile" })}>
        <MessageCircle className="h-4 w-4" />
        Agendar demo por WhatsApp
      </Button>
    </div>
  );
}
