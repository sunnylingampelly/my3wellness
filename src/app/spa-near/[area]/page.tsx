import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Car } from "lucide-react";

import { PageHero } from "@/components/ui-custom/page-hero";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { ServiceCard } from "@/components/ui-custom/service-card";
import { FaqAccordion } from "@/components/ui-custom/faq-accordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { CallLink } from "@/components/ui-custom/call-link";
import { DirectionsLink } from "@/components/ui-custom/directions-link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { areas, getAreaBySlug } from "@/content/areas";
import { getServiceBySlug } from "@/content/services";
import { generalFaqs } from "@/content/faqs";
import { siteConfig } from "@/lib/site-config";

const IMAGES = [
  "/images/gallery/gallery-01.png",
  "/images/gallery/gallery-06.png",
  "/images/gallery/gallery-09.jpg",
  "/images/gallery/gallery-02.png",
  "/images/gallery/gallery-05.png",
  "/images/gallery/gallery-08.png",
];

function heroImageFor(slug: string) {
  const index = areas.findIndex((a) => a.slug === slug);
  return IMAGES[index % IMAGES.length];
}

const LOCATION_FAQS = generalFaqs.filter((f) =>
  [
    "Where exactly is MY3 Wellness Spa located",
    "How do I get to MY3 Wellness Spa",
    "Do I need to book in advance",
    "Which massage is best for chronic back and shoulder pain",
  ].some((q) => f.question.startsWith(q))
);

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: `Spa Near ${area.name}, Hyderabad`,
    description: area.shortDescription,
    alternates: { canonical: `/spa-near/${area.slug}` },
    openGraph: {
      title: `Spa Near ${area.name} | MY3 Wellness Spa`,
      description: area.shortDescription,
    },
  };
}

export default async function AreaLandingPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const recommended = area.recommendedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Spa Near You", path: "/spa-near" },
          { name: area.name, path: `/spa-near/${area.slug}` },
        ])}
      />
      <JsonLd data={faqPageSchema(LOCATION_FAQS)} />

      <PageHero
        eyebrow={`Serving ${area.name} & Nearby`}
        title={`Luxury Spa Near ${area.name}`}
        description={area.shortDescription}
        image={heroImageFor(area.slug)}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Spa Near You", href: "/spa-near" },
          { name: area.name },
        ]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-16">
          {/* CTA card first in DOM/mobile order — visible above the fold on a
              phone instead of buried below the intro paragraph. `lg:order-2`
              restores the original right-column position on desktop. */}
          <div className="order-1 lg:order-2 lg:col-span-1">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-gold/50 bg-card p-7 sm:p-8">
                <h2 className="font-heading text-xl text-foreground">Find Us From {area.name}</h2>
                <ul className="mt-5 flex flex-col gap-4 text-sm text-foreground/85">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                    <span>{siteConfig.address.full}</span>
                  </li>
                  <li>
                    <DirectionsLink className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline">
                      <Car className="size-3.5" strokeWidth={1.5} />
                      Get directions from {area.name}
                    </DirectionsLink>
                  </li>
                </ul>
                <WhatsAppLink
                  message={`Hi, I'm near ${area.name} and I'd like to book an appointment at MY3 Wellness Spa.`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <WhatsAppIcon className="size-4" />
                  Book on WhatsApp
                </WhatsAppLink>
                <CallLink className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary">
                  {siteConfig.contact.phoneDisplay}
                </CallLink>
              </div>
            </Reveal>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-2">
            <Reveal>
              <span className="font-accent text-xs sm:text-sm uppercase tracking-[0.28em] text-gold-deep">
                Why {area.name} Chooses MY3
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {area.intro}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {recommended.length > 0 && (
        <section className="bg-secondary/40 py-24 sm:py-28">
          <div className="container-luxe">
            <SectionHeading
              align="left"
              eyebrow="Recommended for Desk-Bound Professionals"
              title={`Popular Therapies With ${area.name} Guests`}
              className="items-start text-left"
            />
            <RevealGroup
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.06}
            >
              {recommended.map((service, i) => (
                <RevealItem key={service.slug}>
                  <ServiceCard service={service} image={IMAGES[i % IMAGES.length]} />
                </RevealItem>
              ))}
            </RevealGroup>
            <div className="mt-12 flex justify-center sm:justify-start">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-accent text-sm uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
              >
                View Full Menu
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {LOCATION_FAQS.length > 0 && (
        <section className="bg-background py-24 sm:py-28">
          <div className="container-luxe max-w-3xl">
            <SectionHeading
              align="left"
              eyebrow="Good to Know"
              title="Location & Booking FAQs"
              className="items-start text-left"
            />
            <div className="mt-10">
              <FaqAccordion faqs={LOCATION_FAQS} idPrefix={`area-${area.slug}`} />
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="container-luxe text-center">
          <Reveal>
            <p className="text-sm text-muted-foreground">
              Also nearby:{" "}
              {areas
                .filter((a) => a.slug !== area.slug)
                .map((a, i, arr) => (
                  <span key={a.slug}>
                    <Link
                      href={`/spa-near/${a.slug}`}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Spa Near {a.name}
                    </Link>
                    {i < arr.length - 1 ? " · " : ""}
                  </span>
                ))}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
