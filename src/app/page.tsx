import type { Metadata } from "next";

import { Hero } from "@/components/home/hero";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { AboutSplit } from "@/components/home/about-split";
import { SignatureExperiences } from "@/components/home/signature-experiences";
import { LocationSection } from "@/components/home/location-section";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { SpaJourney } from "@/components/home/spa-journey";
import { GalleryTeaser } from "@/components/home/gallery-teaser";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { MembershipBanner } from "@/components/home/membership-banner";
import { FaqTeaser } from "@/components/home/faq-teaser";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema } from "@/lib/schema";
import { generalFaqs } from "@/content/faqs";
import { siteConfig } from "@/lib/site-config";

const homeDescription =
  "Looking for the best spa near me? MY3 Wellness Spa is a luxury day spa in Gachibowli, Raidurg offering full body massage, body massage, Swedish, Thai, Balinese and deep-tissue therapy for Hyderabad's IT corridor — open daily, walk-ins welcome.";

export const metadata: Metadata = {
  // Written out in full (rather than relying on the root layout's title
  // template) because this exact page's title has never picked up that
  // template's " | MY3 Wellness Spa" suffix — true even before this change.
  title: "Best Spa Near Me in Gachibowli, Hyderabad | MY3 Wellness Spa",
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: { description: homeDescription },
  twitter: { description: homeDescription },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema(generalFaqs.slice(0, 6))} />
      <Hero />
      <WhyChooseUs />
      <AboutSplit />
      <SignatureExperiences />
      <LocationSection />
      <PricingTeaser />
      <SpaJourney />
      <GalleryTeaser />
      <TestimonialsSection />
      <MembershipBanner />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}
