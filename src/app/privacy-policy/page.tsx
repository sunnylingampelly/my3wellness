import type { Metadata } from "next";

import { PageHero } from "@/components/ui-custom/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MY3 Wellness Spa collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        image="/images/gallery/gallery-05.png"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="container-luxe max-w-3xl">
          <p className="text-sm text-muted-foreground">Last updated: August 2026</p>

          <div className="mt-8 flex flex-col gap-8 text-base leading-relaxed text-foreground/90">
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates{" "}
              {siteConfig.url} (the &ldquo;Site&rdquo;). This Privacy Policy explains what
              information we collect through the Site, how it is used, and the choices
              available to you. The Site is a static, informational website — it does not
              process payments, store passwords, or maintain user accounts.
            </p>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Information We Collect</h2>
              <p className="mt-3">
                The Site itself does not operate a server-side database. When you use the
                Contact form, your name, phone number, and message are used only to open a
                pre-filled WhatsApp or email message on your own device — this information is
                not transmitted to or stored on any server we control. It is sent directly to
                us only if you choose to complete and send that WhatsApp or email message.
              </p>
              <p className="mt-3">
                If you contact us directly by phone, WhatsApp, or email, we receive whatever
                information you choose to share (such as your name, number, and treatment
                preferences) in order to respond to you and manage your booking.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Cookies &amp; Analytics</h2>
              <p className="mt-3">
                The Site may use privacy-respecting analytics to understand aggregate traffic
                patterns (for example, which pages are most visited) so we can improve the
                experience. Where analytics cookies are used, they do not identify you
                personally.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">How We Use Your Information</h2>
              <p className="mt-3">
                Information shared with us via phone, WhatsApp, or email is used solely to
                respond to enquiries, confirm bookings, and provide the service you&rsquo;ve
                requested. We do not sell or rent your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Third-Party Links</h2>
              <p className="mt-3">
                The Site links to third-party services such as WhatsApp, Google Maps, and our
                social media profiles. These services have their own privacy policies, and we
                encourage you to review them independently.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Your Rights</h2>
              <p className="mt-3">
                You may request that we delete any personal information you&rsquo;ve shared
                with us directly (for example, over WhatsApp or email) by contacting us using
                the details on our Contact page.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes will be posted on
                this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-foreground">Contact Us</h2>
              <p className="mt-3">
                For any questions about this Privacy Policy, reach us at{" "}
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
