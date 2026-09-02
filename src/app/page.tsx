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

export const metadata: Metadata = {
  title: "Luxury Spa in Gachibowli, Hyderabad",
  description: siteConfig.shortDescription,
  alternates: { canonical: "/" },
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
