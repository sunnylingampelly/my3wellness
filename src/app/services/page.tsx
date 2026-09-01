import type { Metadata } from "next";

import { PageHero } from "@/components/ui-custom/page-hero";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { ServiceCard } from "@/components/ui-custom/service-card";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui-custom/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { signatureServices, combinationServices } from "@/content/services";

export const metadata: Metadata = {
  title: "Massage & Spa Services in Gachibowli, Hyderabad",
  description:
    "Explore MY3 Wellness Spa's full menu of signature and combination therapies — Swedish, Thai, Balinese, Deep Tissue, Couples Massage, and more, in Gachibowli, Hyderabad.",
  alternates: { canonical: "/services" },
};

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

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Our Menu"
        title="Treatments Worth Making Time For"
        description="Every therapy is performed in a private suite, tailored to you through a short consultation before we begin."
        image="/images/gallery/gallery-06.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            align="left"
            eyebrow="Signature Therapies"
            title="Individual Treatments"
            className="items-start text-left"
          />
          <RevealGroup
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {signatureServices.map((service, i) => (
              <RevealItem key={service.slug}>
                <ServiceCard service={service} image={IMAGES[i % IMAGES.length]} />
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
            title="Layered Rituals for Deeper Results"
            description="Pair two disciplines in a single, unhurried session — designed for guests who want more than one benefit at a time."
            className="items-start text-left"
          />
          <RevealGroup
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {combinationServices.map((service, i) => (
              <RevealItem key={service.slug}>
                <ServiceCard
                  service={service}
                  image={IMAGES[(i + signatureServices.length) % IMAGES.length]}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container-luxe text-center">
          <Reveal>
            <p className="text-sm text-muted-foreground">
              Unsure which therapy is right for you? Every visit begins with a short
              consultation — our therapists are happy to recommend the best fit.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
