"use client";

import { motion } from "framer-motion";
import { Navigation, Phone } from "lucide-react";

import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { DirectionsLink } from "@/components/ui-custom/directions-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { siteConfig } from "@/lib/site-config";

const ENTER = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

// Desktop-only stack of floating quick actions — call, WhatsApp (the
// largest/primary of the three), and directions. Mobile gets the equivalent
// three actions via the glass pill in MobileCtaBar instead.
export function FloatingCta() {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden flex-col items-center gap-3 lg:flex">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTER, delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <CallLink
          aria-label={`Call ${siteConfig.name}`}
          className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
        >
          <Phone className="size-5" strokeWidth={1.75} />
          <span className="sr-only">Call</span>
        </CallLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTER, delay: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsAppLink
          aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
          className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
        >
          <WhatsAppIcon className="size-6" />
          <span className="sr-only">WhatsApp</span>
        </WhatsAppLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTER, delay: 1.0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <DirectionsLink
          aria-label={`Get directions to ${siteConfig.name}`}
          className="flex size-12 items-center justify-center rounded-full bg-gold text-ink shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
        >
          <Navigation className="size-5" strokeWidth={1.75} />
          <span className="sr-only">Directions</span>
        </DirectionsLink>
      </motion.div>
    </div>
  );
}
