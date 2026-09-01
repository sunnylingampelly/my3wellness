import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";

import { PageHero } from "@/components/ui-custom/page-hero";
import { Reveal } from "@/components/ui-custom/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { mailtoLink } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit or contact MY3 Wellness Spa in Gachibowli, Hyderabad — address, phone, WhatsApp, opening hours, and directions from HITEC City and the Financial District.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Visit Our Gachibowli Sanctuary"
        description="Questions, bookings, or directions — we're one call or message away."
        image="/images/gallery/gallery-10.jpg"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="font-accent text-xs sm:text-sm uppercase tracking-[0.28em] text-gold-deep">
                Reach Us
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-medium text-foreground">
                Every Way to Reach MY3
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-[0.12em] text-muted-foreground">Address</p>
                    <p className="mt-1 text-foreground">{siteConfig.address.full}</p>
                    <a
                      href={siteConfig.address.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
                    >
                      <Car className="size-3.5" strokeWidth={1.5} />
                      Get Directions
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Phone className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-[0.12em] text-muted-foreground">Phone</p>
                    <CallLink className="mt-1 block text-foreground hover:text-primary">
                      {siteConfig.contact.phoneDisplay}
                    </CallLink>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-[0.12em] text-muted-foreground">WhatsApp</p>
                    <WhatsAppLink className="mt-1 block text-foreground hover:text-primary">
                      Message us directly
                    </WhatsAppLink>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Mail className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-[0.12em] text-muted-foreground">Email</p>
                    <a href={mailtoLink()} className="mt-1 block break-all text-foreground hover:text-primary">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Clock className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-[0.12em] text-muted-foreground">Hours</p>
                    <p className="mt-1 text-foreground">{siteConfig.hours[0].time}</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.hoursNote}</p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
              <h2 className="font-heading text-2xl text-foreground">Send a Message</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                We&rsquo;ll respond on WhatsApp — usually within minutes.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 pb-24 sm:pb-28">
        <div className="container-luxe">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="MY3 Wellness Spa on Google Maps"
                src={siteConfig.address.mapsEmbedSrc}
                width="100%"
                height="450"
                style={{ border: 0, display: "block", maxWidth: "100%" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-end gap-2 text-xs text-muted-foreground">
              <a
                href={siteConfig.address.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-accent uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
              >
                Open precise directions in Google Maps &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
