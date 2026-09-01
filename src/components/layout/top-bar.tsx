import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { CallLink } from "@/components/ui-custom/call-link";
import { DirectionsLink } from "@/components/ui-custom/directions-link";
import { mailtoLink } from "@/lib/links";

// Slim contact strip pinned above the offer bar and header. Desktop/tablet
// only — see --topbar-h in globals.css for the matching layout offset; on
// mobile this same info is already surfaced via MobileCtaBar. Location/hours
// need more room than phone/email, so they only join in from the lg
// breakpoint up — below that, just phone + email on the right.
export function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[70] hidden h-9 items-center border-b border-cream/10 bg-olive text-cream/90 md:flex">
      <div className="container-luxe flex items-center font-accent text-[11px] uppercase tracking-[0.12em]">
        <div className="hidden items-center gap-5 lg:flex">
          <DirectionsLink
            aria-label="Get directions to MY3 Wellness Spa"
            className="flex items-center gap-2 transition-colors hover:text-gold"
          >
            <MapPin className="size-3" strokeWidth={1.75} />
            {siteConfig.address.addressLocality}, Hyderabad
          </DirectionsLink>
          <span className="h-3 w-px bg-cream/20" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <Clock className="size-3" strokeWidth={1.75} />
            Open Daily &middot; {siteConfig.hours[0].time}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-6">
          <CallLink className="flex items-center gap-2 transition-colors hover:text-gold">
            <Phone className="size-3" strokeWidth={1.75} />
            {siteConfig.contact.phoneDisplay}
          </CallLink>
          <span className="h-3 w-px bg-cream/20" aria-hidden="true" />
          <a
            href={mailtoLink()}
            className="flex items-center gap-2 normal-case tracking-normal transition-colors hover:text-gold"
          >
            <Mail className="size-3" strokeWidth={1.75} />
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
