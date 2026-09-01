import type { Metadata } from "next";

import { PageHero } from "@/components/ui-custom/page-hero";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { MembershipCard } from "@/components/ui-custom/membership-card";
import { FaqAccordion } from "@/components/ui-custom/faq-accordion";
import { RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { membershipTiers } from "@/content/membership";
import { membershipFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "MY3 Wellness Spa membership — Silver, Gold, and Platinum plans with preferential pricing, priority booking, and complimentary birthday treatments.",
  alternates: { canonical: "/membership" },
};

export default function MembershipPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Membership", path: "/membership" },
        ])}
      />
      <PageHero
        eyebrow="MY3 Membership"
        title="Make Wellness a Ritual"
        description="For guests who visit often — preferential pricing, priority booking, and a few thoughtful extras."
        image="/images/gallery/gallery-03.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Membership" }]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Choose Your Plan"
            title="Three Ways to Belong"
            description="Every plan renews annually and unlocks discounted rates across our entire treatment menu."
          />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
            {membershipTiers.map((tier) => (
              <RevealItem key={tier.name}>
                <MembershipCard tier={tier} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 sm:py-28">
        <div className="container-luxe max-w-3xl">
          <SectionHeading eyebrow="Good to Know" title="Membership FAQs" />
          <div className="mt-14">
            <FaqAccordion faqs={membershipFaqs} idPrefix="membership-faq" />
          </div>
        </div>
      </section>
    </>
  );
}
