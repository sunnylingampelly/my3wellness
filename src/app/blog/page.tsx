import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/ui-custom/page-hero";
import { RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Wellness guides and local insights from MY3 Wellness Spa, Gachibowli — massage comparisons, spa etiquette, and how to make the most of your visit to Hyderabad's wellness scene.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="The Journal"
        title="Wellness Notes From MY3"
        description="Guides on massage, wellness, and making the most of a spa visit in Hyderabad."
        image="/images/gallery/gallery-02.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Journal" }]}
      />

      <section className="bg-background py-24 sm:py-28">
        <div className="container-luxe">
          <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {blogPosts.map((post) => (
              <RevealItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-accent text-[11px] uppercase tracking-[0.14em] text-gold-deep">
                      <span>{post.category}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-2 font-heading text-xl leading-snug text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
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
