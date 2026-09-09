import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "cta-button group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold whitespace-nowrap transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_10px_26px_-8px_rgba(37,99,235,.62),0_1px_0_rgba(255,255,255,.2)_inset] hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_16px_34px_-10px_rgba(37,99,235,.68),0_1px_0_rgba(255,255,255,.2)_inset]",
  secondary:
    "border border-dark/10 bg-white/90 text-dark shadow-[0_8px_22px_-14px_rgba(7,17,31,.25),0_1px_0_rgba(255,255,255,.9)_inset] hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary",
  ghost: "text-dark hover:bg-primary/5 hover:text-primary",
  light:
    "bg-white text-dark shadow-[0_12px_35px_-12px_rgba(0,0,0,.45),0_1px_0_rgba(255,255,255,.9)_inset] hover:-translate-y-0.5 hover:bg-cyan-50 hover:text-primary",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[15px] sm:px-7 sm:py-4 sm:text-base",
};

type ButtonProps = PropsWithChildren<{
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
}> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, "size">;

export function Button({ children, variant = "primary", size = "md", className, href, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) return <a href={href} className={classes} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}
