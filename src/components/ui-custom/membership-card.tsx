"use client";

import { Check, Crown } from "lucide-react";
import { motion } from "framer-motion";

import type { MembershipTier } from "@/content/membership";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { cn } from "@/lib/utils";

export function MembershipCard({ tier }: { tier: MembershipTier }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex h-full flex-col gap-6 rounded-3xl p-8 sm:p-9",
        tier.highlight
          ? "bg-olive text-cream shadow-[0_30px_70px_-30px_rgba(74,86,54,0.5)]"
          : "border border-border bg-card"
      )}
    >
      {tier.highlight && (
        <span className="absolute -top-3 right-8 rounded-full bg-gold px-3 py-1 font-accent text-[10px] uppercase tracking-[0.16em] text-ink">
          Most Popular
        </span>
      )}

      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-full",
            tier.highlight ? "bg-cream/15 text-gold" : "bg-secondary text-primary"
          )}
        >
          <Crown className="size-5" strokeWidth={1.5} />
        </span>
        <h3 className="font-heading text-2xl">{tier.name}</h3>
      </div>

      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-heading text-4xl">₹{tier.price.toLocaleString("en-IN")}</span>
          <span className={cn("text-sm", tier.highlight ? "text-cream/85" : "text-muted-foreground")}>
            {tier.billingPeriod}
          </span>
        </div>
        <p className={cn("mt-1 font-accent text-xs uppercase tracking-[0.12em]", tier.highlight ? "text-gold-light" : "text-gold-deep")}>
          {tier.discount}
        </p>
      </div>

      <ul className="flex flex-1 flex-col gap-3">
        {tier.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed">
            <Check
              className={cn("mt-0.5 size-4 shrink-0", tier.highlight ? "text-gold" : "text-primary")}
              strokeWidth={1.75}
            />
            <span className={tier.highlight ? "text-cream/90" : "text-foreground/85"}>{b}</span>
          </li>
        ))}
      </ul>

      <WhatsAppLink
        message={`Hi, I'd like to enrol in the ${tier.name} membership.`}
        className={cn(
          "inline-flex items-center justify-center rounded-full py-3 font-accent text-xs uppercase tracking-[0.14em] transition-colors",
          tier.highlight
            ? "bg-gold text-ink hover:bg-gold-light"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Become a Member
      </WhatsAppLink>
    </motion.div>
  );
}
