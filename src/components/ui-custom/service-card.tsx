"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gift } from "lucide-react";
import { motion } from "framer-motion";

import type { Service } from "@/content/services";
import { startingPrice } from "@/content/services";
import { ServiceIcon } from "@/components/ui-custom/service-icon";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  image,
  className,
}: {
  service: Service;
  image: string;
  className?: string;
}) {
  const price = startingPrice(service);
  const minDuration = Math.min(...service.prices.map((p) => p.duration));

  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl bg-card p-4 shadow-sm ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-xl sm:p-5",
        className
      )}
    >
      <Link
        href={`/services/${service.slug}`}
        className="relative block aspect-[4/3] overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <motion.div
          initial={false}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            className="object-cover"
          />
        </motion.div>

        {service.popular && (
          <span className="absolute right-3 top-3 rounded-full bg-gold/95 px-3 py-1 font-accent text-[10px] uppercase tracking-[0.18em] text-ink">
            Signature
          </span>
        )}
        <span className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-full glass text-cream">
          <ServiceIcon icon={service.icon} className="size-[18px]" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 pt-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/services/${service.slug}`}
              className="font-heading text-xl font-semibold leading-tight text-foreground transition-colors hover:text-primary sm:text-2xl"
            >
              {service.name}
            </Link>
            <ArrowUpRight
              className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </div>
          <p className="mt-1.5 font-accent text-[11px] uppercase tracking-[0.12em] text-gold-deep">
            From {minDuration} min &middot; ₹{price.toLocaleString("en-IN")}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {service.description}
        </p>

        <div className="mt-1 flex items-center gap-2.5 rounded-xl bg-secondary/60 px-4 py-3">
          <Gift className="size-4 shrink-0 text-gold-deep" strokeWidth={1.75} />
          <span className="text-xs font-medium text-gold-deep sm:text-sm">
            {siteConfig.promo.cardBadge}
          </span>
        </div>

        <WhatsAppLink
          message={`Hi MY3 Wellness Spa, I'd like to check availability for ${service.name}.`}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <WhatsAppIcon className="size-4" />
          Check Availability on WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}
