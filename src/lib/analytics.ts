import { useEffect, useRef } from "react";

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

// PLACEHOLDER — replace with MY3's own Google Ads "Click to call" conversion
// label before launch (Ads → Conversions → your action → Tag setup). Leaving
// a previous owner's real label here would report conversions into their account.
const CALL_CONVERSION_LABEL = "AW-XXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXX";

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

// PLACEHOLDER — same as CALL_CONVERSION_LABEL above, for the "WhatsApp booking"
// conversion action. Replace before launch.
const WHATSAPP_CONVERSION_LABEL = "AW-XXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXX";

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

/**
 * Attaches a click handler to an anchor/button via a native DOM listener
 * instead of React's onClick prop. React's synthetic click delegation was
 * found to silently fail to invoke onClick on our conversion links in
 * production (clicks recorded zero conversions despite correct wiring) — a
 * listener attached directly to the node bypasses whatever breaks that
 * delegation. Use this for any click that reports a conversion/analytics
 * event; plain navigational links don't need it.
 */
export function useNativeClick<T extends HTMLElement>(
  handler: (e: MouseEvent) => void
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("click", handler);
    return () => el.removeEventListener("click", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler]);
  return ref;
}
