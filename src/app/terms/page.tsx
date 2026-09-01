import type { Metadata } from "next";

import { PageHero } from "@/components/ui-custom/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for booking and visiting MY3 Wellness Spa, Gachibowli.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        image="/images/gallery/gallery-03.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Terms & Conditions" }]}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="container-luxe max-w-3xl">
          <p className="text-sm text-muted-foreground">Last updated: August 2026</p>

          <div className="mt-8 flex flex-col gap-8 text-base leading-relaxed text-foreground/90">
            <p>
              These Terms &amp; Conditions govern your use of {siteConfig.url} and your visit
              to {siteConfig.name} in Gachibowli, Hyderabad. By browsing the Site or booking a
              treatment with us, you agree to the terms below.
            </p>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Bookings &amp; Cancellations</h2>
              <p className="mt-3">
                Appointments can be booked by phone or WhatsApp. We recommend arriving 10–15
                minutes before your scheduled time. If you need to reschedule or cancel, please
                inform us at least a few hours in advance where possible so the slot can be
                offered to another guest.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Pricing</h2>
              <p className="mt-3">
                Prices listed on the Site are in Indian Rupees (₹) and are current at the time
                of publishing. Prices may be revised from time to time; the rate confirmed at
                the time of booking will apply to your appointment.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Health &amp; Safety</h2>
              <p className="mt-3">
                Please inform our therapists of any medical conditions, allergies, injuries, or
                pregnancy before your session begins, so treatments can be adapted safely.
                {" "}{siteConfig.name} reserves the right to decline or modify a treatment where
                a therapist determines it is not safe to proceed.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Conduct</h2>
              <p className="mt-3">
                We maintain a respectful, professional environment for all guests and staff.
                {" "}{siteConfig.name} reserves the right to end a session and refuse future
                service in cases of inappropriate conduct toward our therapists or team.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Membership Terms</h2>
              <p className="mt-3">
                Membership plans are billed annually and entitle the member to the discounts
                and benefits described on our Membership page for the duration of the
                membership period. Membership benefits are non-transferable unless explicitly
                stated for a given tier.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Limitation of Liability</h2>
              <p className="mt-3">
                While every treatment is performed with care by trained therapists, {siteConfig.name}{" "}
                is not liable for any pre-existing medical conditions not disclosed to us prior
                to treatment.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Governing Law</h2>
              <p className="mt-3">
                These terms are governed by the laws of India, and any disputes shall be
                subject to the jurisdiction of the courts in Hyderabad, Telangana.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Contact Us</h2>
              <p className="mt-3">
                For questions about these terms, reach us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary underline-offset-4 hover:underline">
                  {siteConfig.contact.email}
                </a>{" "}
                or {siteConfig.contact.phoneDisplay}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
