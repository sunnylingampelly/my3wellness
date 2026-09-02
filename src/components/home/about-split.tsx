import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui-custom/reveal";
import { StatCounter } from "@/components/ui-custom/stat-counter";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

export function AboutSplit() {
  return (
    <section className="hidden bg-secondary/40 py-24 sm:block sm:py-32">
      <div className="container-luxe grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gallery/gallery-06.png"
              alt="Therapist performing a deep shoulder massage at MY3 Wellness Spa"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="font-accent text-xs sm:text-sm uppercase tracking-[0.28em] text-gold-deep">
              Our Philosophy
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-balance font-heading text-4xl sm:text-5xl font-medium leading-[1.1] text-foreground">
              A sanctuary for those who rarely pause
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-balance text-base sm:text-lg leading-relaxed text-muted-foreground">
              Our sanctuary is designed to help busy professionals disconnect from
              stress and reconnect with inner balance. Every therapy combines
              time-tested technique with modern relaxation, in rooms built for
              quiet — not for rushing.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-accent text-sm uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
            >
              Discover Our Story
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-border pt-8">
              <StatCounter value={siteConfig.yearsOfExperience} suffix="+" label="Years of Care" />
              <StatCounter value={services.length} suffix="+" label="Curated Therapies" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
