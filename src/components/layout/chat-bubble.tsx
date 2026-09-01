"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Gift } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { siteConfig } from "@/lib/site-config";

const SEEN_KEY = "my3-chat-bubble-seen";

// "Someone's here to help" widget, bottom-left on every breakpoint. Auto-opens
// once per session a couple seconds after landing, then collapses to a small
// avatar that reopens the card on click. Sits higher up on mobile/tablet
// (bottom-24) to clear MobileCtaBar's glass pill docked along the very
// bottom edge; desktop has no such bar, so it can sit lower (bottom-8).
export function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // ignore — worst case it reopens next time
      }
    }, 2500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed left-4 z-50 transition-[bottom] duration-300 lg:bottom-8 lg:left-8 ${
        // The expanded card is much taller than the collapsed avatar, so it
        // needs more clearance above MobileCtaBar's glass pill once scrolled
        // past the hero — otherwise the two can touch along the bottom edge.
        open ? "bottom-28" : "bottom-20"
      }`}
    >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-72 rounded-2xl bg-card p-4 shadow-2xl ring-1 ring-border/60 sm:w-[300px]"
          >
            <div className="flex items-start gap-3">
              <span className="relative shrink-0">
                <span className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-cream ring-1 ring-border">
                  <Image
                    src="/images/brand/my3-icon.png"
                    alt=""
                    width={40}
                    height={40}
                    className="size-full object-cover"
                  />
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-card bg-green-500" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-sm font-semibold text-foreground">
                  MY3 Care Team
                </p>
                <p className="text-xs text-muted-foreground">Online now</p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="flex size-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-3.5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-gold/30 bg-secondary/50 px-3.5 py-3">
              <Gift className="mt-0.5 size-4 shrink-0 text-gold-deep" strokeWidth={1.75} />
              <p className="text-xs leading-relaxed text-foreground">
                <span className="font-semibold text-gold-deep">
                  Special Offer Today! {siteConfig.promo.percent}% OFF
                </span>
                <br />
                Have a question? I&rsquo;m happy to help you book.
              </p>
            </div>

            <WhatsAppLink
              message={`Hi MY3 Wellness Spa! I'd like to know more about the ${siteConfig.promo.percent}% first-visit offer.`}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-2.5 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)] transition-transform hover:scale-[1.02] active:scale-95"
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </WhatsAppLink>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              No advance payment required
            </p>
          </motion.div>
        ) : (
          <motion.button
            key="avatar"
            type="button"
            aria-label="Chat with MY3 Wellness Spa"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex size-14 items-center justify-center overflow-hidden rounded-full bg-cream shadow-[0_10px_24px_rgba(0,0,0,0.18)] ring-2 ring-card"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/30" />
            <Image
              src="/images/brand/my3-icon.png"
              alt=""
              width={56}
              height={56}
              className="relative size-full object-cover"
            />
            <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-card bg-green-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
