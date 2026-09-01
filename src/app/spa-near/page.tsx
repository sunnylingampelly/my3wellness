import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/ui-custom/page-hero";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { areas } from "@/content/areas";

export const metadata: Metadata = {
  title: "Spa Near Me — Gachibowli, HITEC City & Nearby Business Hubs",
  description:
    "MY3 Wellness Spa serves professionals across Gachibowli, HITEC City, the Financial District, Wipro Circle, Mindspace, and DLF Cyber City. Find directions and recommended therapies for your area.",
  alternates: { canonical: "/spa-near" },
};

const IMAGES = [
  "/images/gallery/gallery-01.png",
  "/images/gallery/gallery-06.png",
  "/images/gallery/gallery-09.jpg",
  "/images/gallery/gallery-02.png",
  "/images/gallery/gallery-05.png",
  "/images/gallery/gallery-08.png",
];

export default function SpaNearIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Spa Near You", path: "/spa-near" },
        ])}
      />
      <PageHero
        eyebrow="Serving Hyderabad's IT Corridor"
        title="A Luxury Spa Near Your Office"
        description="MY3 Wellness Spa sits in Gachibowli-Raidurg, minutes from the business hubs below. Pick your area for directions and the therapies our guests from there love most."
        image="/images/gallery/gallery-08.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Spa Near You" }]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Choose Your Area"
            title="Nearby Business Hubs We Serve"
            description="Every area page includes real directions, a WhatsApp booking link, and the treatments most requested by guests from that hub."
          />
          <RevealGroup
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {areas.map((area, i) => (
              <RevealItem key={area.slug}>
                <Link
                  href={`/spa-near/${area.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  <Image
                    src={IMAGES[i % IMAGES.length]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/5" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-cream">
                    <h3 className="font-heading text-2xl leading-tight">
                      Spa Near {area.name}
                    </h3>
                    <p className="text-sm text-cream/75">{area.shortDescription}</p>
                    <span className="mt-2 flex size-8 items-center justify-center rounded-full border border-cream/30 text-cream transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="size-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
