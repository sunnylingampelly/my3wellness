import type { Metadata } from "next";

import { PageHero } from "@/components/ui-custom/page-hero";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { GalleryGrid } from "@/components/ui-custom/gallery-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual tour of MY3 Wellness Spa, Gachibowli — private treatment suites, natural textures, and the warm, candlelit ambience of our wellness sanctuary.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        eyebrow="Inside MY3"
        title="A Visual Tour of the Sanctuary"
        description="Warm light, natural textures, and the quiet detail that defines every corner of MY3 Wellness Spa."
        image="/images/gallery/gallery-08.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Gallery" }]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Tap to Enlarge"
            title="Moments From Inside"
            description="A preview of the textures, tools, and ambience that shape every MY3 treatment."
          />
          <div className="mt-14">
            <GalleryGrid images={galleryImages} />
          </div>
        </div>
      </section>
    </>
  );
}
