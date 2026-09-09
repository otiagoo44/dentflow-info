import { useEffect, useRef } from "react";

/**
 * Agrega la clase `is-visible` cuando el elemento entra en el viewport,
 * para disparar la animación CSS `.reveal`.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useScrollDepthTracking(onDepth: (depth: 50 | 90) => void) {
  useEffect(() => {
    let fired50 = false;
    let fired90 = false;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (scrollTop / docHeight) * 100;
      if (!fired50 && pct >= 50) {
        fired50 = true;
        onDepth(50);
      }
      if (!fired90 && pct >= 90) {
        fired90 = true;
        onDepth(90);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onDepth]);
}
