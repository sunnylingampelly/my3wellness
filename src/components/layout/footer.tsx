import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Logo } from "@/components/ui-custom/logo";
import { InstagramIcon, FacebookIcon } from "@/components/ui-custom/brand-icons";
import { siteConfig, FOOTER_LINKS } from "@/lib/site-config";
import { mailtoLink } from "@/lib/links";
import { CallLink } from "@/components/ui-custom/call-link";
import { areas } from "@/content/areas";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-olive text-cream">
      <div className="container-luxe py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <Logo size={48} />
            <p className="max-w-xs text-sm leading-relaxed text-cream/85">
              {siteConfig.shortDescription}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} on Instagram`}
                className="flex size-9 items-center justify-center rounded-full border border-cream/25 text-cream/85 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} on Facebook`}
                className="flex size-9 items-center justify-center rounded-full border border-cream/25 text-cream/85 transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-accent text-xs uppercase tracking-[0.2em] text-sage mb-5">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/85 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-accent text-xs uppercase tracking-[0.2em] text-sage mb-5">
              Support
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/85 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-accent text-xs uppercase tracking-[0.2em] text-sage mb-5">
              Visit Us
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-cream/85">
              <li className="flex gap-3">
                <MapPin className="size-4 shrink-0 mt-0.5 text-sage" strokeWidth={1.5} />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 shrink-0 mt-0.5 text-sage" strokeWidth={1.5} />
                <CallLink className="hover:text-cream">
                  {siteConfig.contact.phoneDisplay}
                </CallLink>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 shrink-0 mt-0.5 text-sage" strokeWidth={1.5} />
                <a href={mailtoLink()} className="hover:text-cream break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="size-4 shrink-0 mt-0.5 text-sage" strokeWidth={1.5} />
                <span>
                  {siteConfig.hours[0].time}
                  <br />
                  {siteConfig.hoursNote}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/20 pt-8">
          <h3 className="font-accent text-xs uppercase tracking-[0.2em] text-sage">
            Also Serving
          </h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/spa-near/${area.slug}`}
                  className="text-sm text-cream/85 transition-colors hover:text-cream"
                >
                  Spa Near {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-cream/20 pt-8 text-xs text-cream/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-heading text-sm italic text-cream/85">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
