import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui-custom/section-heading";
import { Reveal } from "@/components/ui-custom/reveal";
import { galleryImages } from "@/content/gallery";

export function GalleryTeaser() {
  const images = galleryImages.slice(0, 6);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Inside MY3"
          title="A Glimpse of the Sanctuary"
          description="Warm light, natural textures, and quiet detail — a preview of what awaits inside."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05} y={16}>
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto sm:h-full" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Explore Full Gallery
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
