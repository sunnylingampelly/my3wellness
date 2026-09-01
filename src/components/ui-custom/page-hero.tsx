import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Reveal } from "@/components/ui-custom/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  breadcrumb: { name: string; href?: string }[];
}) {
  return (
    <section id="hero" className="relative flex min-h-[52vh] items-end overflow-hidden pt-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/20" />
      <div className="container-luxe relative z-10 pb-14 sm:pb-16">
        <nav aria-label="Breadcrumb">
          <ol className="mb-6 flex items-center gap-1.5 font-accent text-xs uppercase tracking-[0.12em] text-cream/70">
            {breadcrumb.map((item, i) => (
              <li key={item.name} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3" strokeWidth={1.5} />}
                {item.href ? (
                  <Link href={item.href} className="hover:text-cream">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-cream">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Reveal>
          <span className="font-accent text-xs sm:text-sm uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-3 max-w-2xl text-balance font-heading text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-cream">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-balance text-base sm:text-lg text-cream/80">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
