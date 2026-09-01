import type { Metadata } from "next";
import { PageHero } from "@/components/ui-custom/page-hero";
import { FaqAccordion } from "@/components/ui-custom/faq-accordion";
import { Reveal } from "@/components/ui-custom/reveal";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { generalFaqs, membershipFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about MY3 Wellness Spa, Gachibowli — location, hours, booking, hygiene standards, and choosing the right massage therapy.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  const allFaqs = [...generalFaqs, ...membershipFaqs];

  return (
    <>
      <JsonLd data={faqPageSchema(allFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs" },
        ])}
      />
      <PageHero
        eyebrow="Good to Know"
        title="Frequently Asked Questions"
        description="Everything guests usually ask before their first visit to MY3 Wellness Spa in Gachibowli."
        image="/images/gallery/gallery-07.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "FAQs" }]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe max-w-3xl">
          <FaqAccordion faqs={allFaqs} idPrefix="faq-page" />

          <Reveal>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center">
              <h2 className="font-heading text-2xl text-foreground">
                Still have a question?
              </h2>
              <p className="max-w-md text-sm text-muted-foreground">
                Message us on WhatsApp and our team will get back to you within
                minutes during business hours.
              </p>
              <WhatsAppLink
                message="Hi, I have a question about MY3 Wellness Spa."
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <WhatsAppIcon className="size-4" />
                Chat on WhatsApp
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
