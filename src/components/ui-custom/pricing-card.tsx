"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { Service } from "@/content/services";
import { strikeThroughPrice } from "@/content/services";
import { ServiceIcon } from "@/components/ui-custom/service-icon";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { cn } from "@/lib/utils";

export function PricingCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex h-full flex-col gap-6 rounded-3xl border bg-card p-7 sm:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_24px_60px_-24px_rgba(46,94,87,0.25)]",
        service.popular ? "border-gold/60" : "border-border"
      )}
    >
      {service.popular && (
        <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 font-accent text-[10px] uppercase tracking-[0.16em] text-ink">
          Most Booked
        </span>
      )}

      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
          <ServiceIcon icon={service.icon} className="size-5" />
        </span>
        <div>
          <h3 className="font-heading text-xl leading-tight">{service.name}</h3>
          <p className="text-xs text-muted-foreground">{service.tagline}</p>
        </div>
      </div>

      <ul className="flex flex-col gap-2.5">
        {service.prices.map((p) => (
          <li
            key={p.duration}
            className="flex items-baseline justify-between border-b border-dashed border-border/80 pb-2.5 last:border-0 last:pb-0"
          >
            <span className="font-accent text-sm text-muted-foreground">{p.duration} min</span>
            <span className="flex items-baseline gap-2">
              <span className="text-sm text-red-500 line-through decoration-red-500 decoration-2">
                ₹{strikeThroughPrice(p.price).toLocaleString("en-IN")}
              </span>
              <span className="font-accent text-2xl font-bold text-gold-deep">
                ₹{p.price.toLocaleString("en-IN")}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-2 pt-2">
        <WhatsAppLink
          message={`Hi, I'd like to book the ${service.name}.`}
          className="inline-flex items-center justify-center rounded-full bg-primary py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Book Now
        </WhatsAppLink>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-center py-1 text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          View details
        </Link>
      </div>
    </motion.div>
  );
}
