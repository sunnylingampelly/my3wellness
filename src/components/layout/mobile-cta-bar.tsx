"use client";

import { useEffect, useState } from "react";
import { Navigation, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { DirectionsLink } from "@/components/ui-custom/directions-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // "Past hero" means the hero section has fully scrolled out of view —
      // measured against its real height (the homepage hero is ~100svh, page
      // heroes are ~52vh) rather than a guessed pixel offset, so the bar
      // never appears while any part of the hero is still on screen.
      const heroEl = document.getElementById("hero");
      const pastHero = heroEl ? heroEl.getBoundingClientRect().bottom <= 0 : scrollY > 480;
      const distanceFromBottom =
        document.documentElement.scrollHeight - scrollY - window.innerHeight;
      const nearFooter = distanceFromBottom < 480;
      // Plain sticky bar: visible the whole time once past the hero, until
      // nearing the footer — no scroll-direction hide/show.
      setVisible(pastHero && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="glass mx-3 mb-3 flex items-center gap-2 rounded-full p-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <DirectionsLink
              aria-label="Get directions to MY3 Wellness Spa"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform active:scale-90"
            >
              <Navigation className="size-5" strokeWidth={1.5} />
            </DirectionsLink>
            <CallLink
              aria-label="Call MY3 Wellness Spa"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform active:scale-90"
            >
              <Phone className="size-5" strokeWidth={1.5} />
            </CallLink>
            {/* True WhatsApp brand green — this is the "WhatsApp button" people
                recognize at a glance, kept distinct from the site's teal/gold theme. */}
            <WhatsAppLink className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-accent text-xs uppercase tracking-[0.14em] text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)] transition-transform active:scale-95">
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </WhatsAppLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
