import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui-custom/section-heading";
import { ServiceCard } from "@/components/ui-custom/service-card";
import { RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { services } from "@/content/services";

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

export function SignatureExperiences() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Our Full Menu"
          title="Therapies Worth Making Time For"
          description="Every treatment on our menu, performed with intention in a private suite — and every first visit comes with 20% off."
        />

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {services.map((service, i) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} image={IMAGES[i % IMAGES.length]} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View Full Price List
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
