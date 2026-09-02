import Image from "next/image";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/ui-custom/section-heading";
import { Reveal } from "@/components/ui-custom/reveal";
import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { DirectionsLink } from "@/components/ui-custom/directions-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { siteConfig } from "@/lib/site-config";

export function LocationSection() {
  return (
    <section className="bg-background pt-12 pb-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading eyebrow="Find Us" title="Our Location in Gachibowli" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-ink p-8 text-cream">
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream ring-1 ring-cream/20">
                  <Image
                    src="/images/brand/my3-icon.png"
                    alt=""
                    width={56}
                    height={56}
                    className="size-full object-cover"
                  />
                </span>
                <h3 className="font-heading text-2xl font-semibold leading-tight">
                  {siteConfig.name}
                </h3>
              </div>

              <ul className="flex flex-col gap-4 text-sm text-cream/85">
                <li className="flex gap-3">
                  <MapPin className="size-4 shrink-0 mt-0.5 text-gold" strokeWidth={1.75} />
                  <span>{siteConfig.address.full}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="size-4 shrink-0 mt-0.5 text-gold" strokeWidth={1.75} />
                  <span>
                    {siteConfig.hours[0].time}
                    <br />
                    {siteConfig.hoursNote}
                  </span>
                </li>
              </ul>

              <div className="mt-auto flex flex-col gap-2.5 pt-2">
                <CallLink className="flex items-center justify-center gap-2 rounded-xl bg-cream/10 py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cream/20">
                  <Phone className="size-4" strokeWidth={1.75} />
                  {siteConfig.contact.phoneDisplay}
                </CallLink>
                <WhatsAppLink className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)] transition-transform hover:scale-[1.02]">
                  <WhatsAppIcon className="size-4" />
                  WhatsApp Booking
                </WhatsAppLink>
                <DirectionsLink className="flex items-center justify-center gap-2 rounded-xl border border-cream/25 py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-cream transition-colors hover:border-gold hover:text-gold">
                  <MapPin className="size-4" strokeWidth={1.75} />
                  View on Google Maps
                </DirectionsLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-border lg:h-full">
              <iframe
                title={`${siteConfig.name} on Google Maps`}
                src={siteConfig.address.mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Our own info card, styled like a native Maps place card — deliberately
                  not relying on Google's live listing data, which still belongs to this
                  address's previous tenant (see the mapsEmbedSrc comment in site-config.ts). */}
              <div className="pointer-events-none absolute left-4 top-4 max-w-[280px] rounded-2xl bg-card/95 p-4 shadow-lg ring-1 ring-black/10 backdrop-blur-sm sm:max-w-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-heading text-base font-semibold text-foreground">
                    {siteConfig.name}
                  </span>
                  <DirectionsLink
                    aria-label={`Get directions to ${siteConfig.name}`}
                    className="pointer-events-auto flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-gold hover:text-ink"
                  >
                    <ExternalLink className="size-3.5" strokeWidth={1.75} />
                  </DirectionsLink>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {siteConfig.address.full}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
