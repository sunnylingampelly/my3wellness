import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/ui-custom/page-hero";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { Reveal } from "@/components/ui-custom/reveal";
import { ServiceCard } from "@/components/ui-custom/service-card";
import { ServiceIcon } from "@/components/ui-custom/service-icon";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { services, getServiceBySlug, strikeThroughPrice } from "@/content/services";

const IMAGES = [
  "/images/gallery/gallery-01.png",
  "/images/gallery/gallery-06.png",
  "/images/gallery/gallery-09.jpg",
  "/images/gallery/gallery-02.png",
  "/images/gallery/gallery-05.png",
  "/images/gallery/gallery-08.png",
  "/images/gallery/gallery-03.png",
  "/images/gallery/gallery-07.png",
  "/images/gallery/gallery-10.jpg",
  "/images/gallery/gallery-04.png",
];

function imageFor(slug: string) {
  const index = services.findIndex((s) => s.slug === slug);
  return IMAGES[index % IMAGES.length];
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} in Gachibowli, Hyderabad`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | MY3 Wellness Spa`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <PageHero
        eyebrow={service.category === "signature" ? "Signature Therapy" : "Combination Therapy"}
        title={service.name}
        description={service.tagline}
        image={imageFor(service.slug)}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name },
        ]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-16">
          {/* Price + CTA comes first in DOM/mobile order so it's visible without
              scrolling past the full description on a phone — most ad traffic is
              mobile, and this is exactly what the landing page needs above the
              fold. `lg:order-2` restores the original right-column position on
              desktop, where the persistent header CTA already covers the fold. */}
          <div className="order-1 lg:order-2 lg:col-span-1">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-gold/50 bg-card p-7 sm:p-8">
                <h3 className="font-heading text-xl text-foreground">Duration &amp; Pricing</h3>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {service.prices.map((p) => (
                    <li
                      key={p.duration}
                      className="flex items-baseline justify-between border-b border-dashed border-border/80 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="font-accent text-sm text-muted-foreground">{p.duration} min</span>
                      <span className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground/70 line-through">
                          ₹{strikeThroughPrice(p.price).toLocaleString("en-IN")}
                        </span>
                        <span className="font-heading text-lg font-semibold text-gold-deep">
                          ₹{p.price.toLocaleString("en-IN")}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  message={`Hi, I'd like to book the ${service.name}.`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <WhatsAppIcon className="size-4" />
                  Book on WhatsApp
                </WhatsAppLink>
              </div>
            </Reveal>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-2">
            <Reveal>
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                <ServiceIcon icon={service.icon} className="size-5" />
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {service.longDescription}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h2 className="mt-10 font-heading text-2xl text-foreground">
                What This Treatment Does For You
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm sm:text-base text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-24 sm:py-28">
          <div className="container-luxe">
            <SectionHeading
              align="left"
              eyebrow="You Might Also Like"
              title="Related Treatments"
              className="items-start text-left"
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} image={imageFor(s.slug)} />
              ))}
            </div>
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
    </>
  );
}
