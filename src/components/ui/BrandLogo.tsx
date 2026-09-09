import { SITE } from "@/config/site";
import { cn } from "@/utils/cn";

export function BrandLogo({ className, mono = false }: { className?: string; mono?: boolean }) {
  return (
    <img
      src={mono ? SITE.logoMono : SITE.logoColor}
      alt="DentFlow"
      width="720"
      height="154"
      className={cn("h-auto w-[148px] object-contain", className)}
      decoding="async"
    />
  );
}
