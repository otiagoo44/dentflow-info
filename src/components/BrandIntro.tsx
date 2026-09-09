import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const SESSION_KEY = "dentflow-intro-seen";

export function BrandIntro() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
    const close = () => setVisible(false);
    const timer = window.setTimeout(close, 1200);
    window.addEventListener("keydown", close, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", close);
    };
  }, []);
  if (!visible) return null;
  return (
    <div className="brand-intro" role="dialog" aria-label="Presentación de DentFlow" onClick={() => setVisible(false)}>
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-node intro-node-a" aria-hidden="true" />
      <div className="intro-node intro-node-b" aria-hidden="true" />
      <div className="intro-line" aria-hidden="true" />
      <BrandLogo className="relative z-10 w-[210px] sm:w-[260px]" />
      <button className="intro-skip" onClick={() => setVisible(false)}>Omitir</button>
    </div>
  );
}
