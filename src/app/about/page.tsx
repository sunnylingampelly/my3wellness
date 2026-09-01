import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Leaf, HeartHandshake, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/ui-custom/page-hero";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { FeatureCard } from "@/components/ui-custom/feature-card";
import { StatCounter } from "@/components/ui-custom/stat-counter";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the philosophy behind MY3 Wellness Spa, Gachibowli — a luxury wellness sanctuary blending time-tested therapies with modern relaxation for Hyderabad's busiest professionals.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Intentional Wellness",
    description:
      "Every therapy is chosen with purpose — never a generic routine, always tailored to how you feel that day.",
  },
  {
    icon: Leaf,
    title: "Time-Tested Technique",
    description:
      "Swedish, Thai, and Balinese traditions performed with technical precision, not shortcuts.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Care",
    description:
      "A consultation before every session ensures pressure, pacing, and focus areas are truly yours.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Hygiene",
    description:
      "Single-use linens, sanitised tools, and fully reset private suites — as standard, not as an upsell.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About MY3 Wellness Spa"
        title="Mind. Body. Balance."
        description="In the heart of Gachibowli, a private wellness retreat built for the mind that rarely stops and the body that rarely rests."
        image="/images/gallery/gallery-09.jpg"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="container-luxe grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <span className="font-accent text-xs sm:text-sm uppercase tracking-[0.28em] text-gold-deep">
                Our Philosophy
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-balance font-heading text-4xl sm:text-5xl font-medium leading-[1.1] text-foreground">
                Where the mind quiets and the body unwinds
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p>
                  MY3 Wellness Spa was founded on a simple observation: Gachibowli&rsquo;s
                  professionals were working harder than ever, yet had fewer genuine
                  spaces to disconnect. We built this sanctuary to change that — a
                  place where relaxation is never rushed and healing is treated as
                  deeply personal.
                </p>
                <p>
                  Every treatment we offer combines time-tested therapeutic
                  practice — Swedish, Thai, Balinese, and deep tissue technique —
                  with a contemporary approach to comfort: private suites, curated
                  aromatic oils, and a pace that lets your nervous system actually
                  settle.
                </p>
                <p>
                  We don&rsquo;t aim to be the fastest spa in Gachibowli. We aim to be
                  the one that sends you back into your week genuinely lighter.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/gallery/gallery-04.png"
                alt="Rolled towels, candles, and frangipani flowers at MY3 Wellness Spa Gachibowli"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Principles Behind Every Session"
          />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {VALUES.map((v) => (
              <RevealItem key={v.title}>
                <FeatureCard
                  icon={<v.icon className="size-5" strokeWidth={1.5} />}
                  title={v.title}
                  description={v.description}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-olive py-20 sm:py-24">
        <div className="container-luxe grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatCounter tone="dark" value={siteConfig.yearsOfExperience} suffix="+" label="Years of Care" />
          <StatCounter tone="dark" value={services.length} suffix="+" label="Curated Therapies" />
          <StatCounter tone="dark" value={7} label="Days a Week Open" />
          <StatCounter tone="dark" value={100} suffix="%" label="Private Suites" />
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="container-luxe flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="max-w-xl text-balance font-heading text-3xl sm:text-4xl font-medium text-foreground">
              Ready to experience MY3 for yourself?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-accent text-xs sm:text-sm uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Our Therapies
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
