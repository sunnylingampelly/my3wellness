"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { siteConfig } from "@/lib/site-config";

// Desktop-only floating quick-action pill, bottom-right — sized to fit its
// content rather than spanning the viewport. Call Now and WhatsApp Now sit
// side by side inside one rounded dark capsule. Same appear-after-hero /
// hide-near-footer scroll behaviour as MobileCtaBar. Mobile gets its own
// compact glass pill instead (MobileCtaBar).
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroEl = document.getElementById("hero");
      const pastHero = heroEl ? heroEl.getBoundingClientRect().bottom <= 0 : scrollY > 480;
      const distanceFromBottom =
        document.documentElement.scrollHeight - scrollY - window.innerHeight;
      const nearFooter = distanceFromBottom < 480;
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
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-50 hidden items-center gap-1 rounded-full bg-ink p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] lg:flex"
        >
          <CallLink
            aria-label={`Call ${siteConfig.name}`}
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-transform hover:scale-[1.03]"
          >
            <Phone className="size-4" strokeWidth={1.75} />
            Call Now
            <span className="font-heading text-sm normal-case tracking-normal">
              {siteConfig.contact.phoneDisplay}
            </span>
          </CallLink>

          <WhatsAppLink
            aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
            className="flex items-center gap-2 rounded-full px-5 py-2.5 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-cream transition-colors hover:bg-cream/10"
          >
            <WhatsAppIcon className="size-4 text-[#25D366]" />
            WhatsApp Now
          </WhatsAppLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
