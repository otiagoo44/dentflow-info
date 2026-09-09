export type AnalyticsEvent =
  | "whatsapp_demo_click"
  | "product_demo_filter"
  | "view_product_demo"
  | "scroll_50"
  | "scroll_90";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent, meta?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...meta });
}
