import type { CSSProperties, PropsWithChildren } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/utils/cn";

export type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
}: PropsWithChildren<{ delay?: number; variant?: RevealVariant; className?: string }>) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", `reveal-${variant}`, className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
