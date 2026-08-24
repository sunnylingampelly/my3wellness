declare global {
  interface Window {
    // dataLayer holds both named custom events (trackEvent) and raw
    // gtag()-style argument tuples (["event", "conversion", {...}]) —
    // gtag.js's own shim is just `function gtag(){dataLayer.push(arguments)}`.
    dataLayer: (Record<string, unknown> | unknown[])[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

const CALL_CONVERSION_LABEL = "AW-18366122950/g3JnCL2h7NscEMaX07VE";

/**
 * Google Ads "Click to call" conversion snippet, adapted to navigate the
 * caller (tel: links can't be awaited) instead of relying on onclick's
 * return value.
 */
export function reportCallConversion(url: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];

  let navigated = false;
  const navigate = () => {
    if (navigated) return;
    navigated = true;
    window.location.href = url;
  };

  // Queue the conversion the same way gtag()'s own shim does, so the hit
  // survives even if gtag.js hasn't finished loading yet (or never does,
  // e.g. blocked by an ad blocker) — checking `typeof window.gtag` here
  // would silently drop the conversion for anyone who taps "Call Now"
  // before the script attaches.
  window.dataLayer.push([
    "event",
    "conversion",
    {
      send_to: CALL_CONVERSION_LABEL,
      value: 1.0,
      currency: "INR",
      event_callback: navigate,
    },
  ]);

  // Safety net: never leave the caller stuck waiting on a beacon that may
  // never fire (script blocked/failed to load) — dial after a short grace
  // period regardless. Harmless if event_callback already navigated.
  window.setTimeout(navigate, 400);
}

const WHATSAPP_CONVERSION_LABEL = "AW-18366122950/g0YZCIfU0OEcEMaX07VE";

/**
 * Google Ads "WhatsApp booking" conversion snippet. No navigation
 * handling needed here (unlike the call conversion) since WhatsApp links
 * open in a new tab — the current page never unloads.
 */
export function reportWhatsAppConversion() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    "event",
    "conversion",
    {
      send_to: WHATSAPP_CONVERSION_LABEL,
      value: 1.0,
      currency: "INR",
    },
  ]);
}
