import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui-custom/page-hero";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { PricingCard } from "@/components/ui-custom/pricing-card";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui-custom/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { signatureServices, combinationServices } from "@/content/services";

export const metadata: Metadata = {
  title: "Massage Pricing in Gachibowli, Hyderabad",
  description:
    "Transparent pricing for every treatment at MY3 Wellness Spa, Gachibowli — Swedish, Thai, Balinese, Deep Tissue, and combination therapies, from 60 to 120 minutes.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHero
        eyebrow="Transparent Pricing"
        title="Every Price, Published Openly"
        description="No hidden add-ons, no vague estimates. Choose your duration, choose your therapy — and book with confidence."
        image="/images/gallery/gallery-05.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Pricing" }]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            align="left"
            eyebrow="Signature Therapies"
            title="Individual Treatments"
            className="items-start text-left"
          />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {signatureServices.map((service) => (
              <RevealItem key={service.slug}>
                <PricingCard service={service} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            align="left"
            eyebrow="Combination Therapies"
            title="Layered Rituals"
            className="items-start text-left"
          />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {combinationServices.map((service) => (
              <RevealItem key={service.slug}>
                <PricingCard service={service} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-luxe flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="max-w-lg text-balance font-heading text-3xl sm:text-4xl font-medium text-foreground">
              Prefer to book more than one session?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-md text-sm sm:text-base text-muted-foreground">
              MY3 members receive preferential pricing on every visit. See our
              membership plans or message us directly to check current offers.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <WhatsAppLink className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90">
                <WhatsAppIcon className="size-4" />
                Ask About Offers
              </WhatsAppLink>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View Membership
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
