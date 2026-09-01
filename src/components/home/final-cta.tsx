import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

import { Reveal } from "@/components/ui-custom/reveal";
import { siteConfig } from "@/lib/site-config";
import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src="/images/gallery/gallery-02.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />

      <div className="container-luxe relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="font-accent text-xs sm:text-sm uppercase tracking-[0.28em] text-gold">
            Visit Us in Gachibowli
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-2xl text-balance font-heading text-4xl sm:text-5xl font-medium text-cream">
            Your Moment of Balance Awaits
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-col items-center gap-3 text-cream/85 sm:flex-row sm:gap-8">
            <span className="flex items-center gap-2 text-sm">
              <MapPin className="size-4 text-gold" strokeWidth={1.5} />
              {siteConfig.address.full}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Clock className="size-4 text-gold" strokeWidth={1.5} />
              {siteConfig.hours[0].time}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppLink className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-accent text-xs sm:text-sm uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.03]">
              <WhatsAppIcon className="size-4" />
              Book on WhatsApp
            </WhatsAppLink>
            <CallLink className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 font-accent text-xs sm:text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/10">
              <Phone className="size-4" strokeWidth={1.75} />
              {siteConfig.contact.phoneDisplay}
            </CallLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
