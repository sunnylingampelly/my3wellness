import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui-custom/section-heading";
import { PricingCard } from "@/components/ui-custom/pricing-card";
import { RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { getServiceBySlug } from "@/content/services";

const FEATURED = ["swedish-massage", "deep-tissue-massage", "couples-massage"];

export function PricingTeaser() {
  const cards = FEATURED.map(getServiceBySlug).filter(Boolean);

  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Investment in Your Wellbeing"
          description="No hidden add-ons, no vague estimates — every duration, clearly laid out."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
          {cards.map(
            (service) =>
              service && (
                <RevealItem key={service.slug}>
                  <PricingCard service={service} />
                </RevealItem>
              )
          )}
        </RevealGroup>

        <div className="mt-14 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View All Treatments
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
