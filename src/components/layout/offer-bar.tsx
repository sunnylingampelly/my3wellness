"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";

const DISMISS_KEY = "anantara-offer-bar-dismissed";

function OfferMessage() {
  return (
    <span className="flex items-center gap-2">
      <Sparkles className="size-3 shrink-0 text-gold" strokeWidth={1.75} />
      Welcome to Anantara Spa
      <span className="text-gold">·</span>
      <strong className="font-semibold text-gold">Flat 30% OFF on All Therapies</strong>
    </span>
  );
}

export function OfferBar() {
  const [dismissed, setDismissed] = useState(true); // default hidden until we know sessionStorage state, avoids a flash

  useEffect(() => {
    let alreadyDismissed = false;
    try {
      alreadyDismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      alreadyDismissed = false;
    }
    setDismissed(alreadyDismissed);
    // Collapse the space the fixed header/main content reserve for this bar
    // when it's already been dismissed this session — otherwise the header
    // stays pushed down over an empty gap.
    document.documentElement.style.setProperty("--offer-bar-h", alreadyDismissed ? "0px" : "2.25rem");
  }, []);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center bg-ink text-cream">
      <div className="relative flex-1 overflow-hidden">
        <div className="animate-marquee-track flex w-max items-center gap-10 whitespace-nowrap font-accent text-[11px] uppercase tracking-[0.12em] sm:text-xs">
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center gap-10 pl-10">
              <OfferMessage />
              <OfferMessage />
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => {
          setDismissed(true);
          document.documentElement.style.setProperty("--offer-bar-h", "0px");
          try {
            sessionStorage.setItem(DISMISS_KEY, "1");
          } catch {
            // ignore — worst case it just reappears if storage is unavailable
          }
        }}
        className="flex h-9 w-9 shrink-0 items-center justify-center text-cream/70 transition-colors hover:text-cream"
      >
        <X className="size-3.5" strokeWidth={1.75} />
      </button>
    </div>
  );
}
