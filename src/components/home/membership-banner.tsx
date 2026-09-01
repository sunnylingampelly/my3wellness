import Link from "next/link";
import { Crown, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui-custom/reveal";

export function MembershipBanner() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-olive px-8 py-14 text-center sm:px-16">
            <span className="flex size-14 items-center justify-center rounded-full bg-cream/10 text-gold">
              <Crown className="size-6" strokeWidth={1.5} />
            </span>
            <h2 className="max-w-lg text-balance font-heading text-3xl sm:text-4xl font-medium text-cream">
              Make Wellness a Ritual, Not a Reminder
            </h2>
            <p className="max-w-md text-balance text-sm sm:text-base text-cream/75">
              MY3 membership unlocks preferential pricing, priority booking, and a
              complimentary birthday treatment — for guests who visit often.
            </p>
            <Link
              href="/membership"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-accent text-xs uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.03]"
            >
              Explore Membership
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
