import { SectionHeading } from "@/components/ui-custom/section-heading";
import { JourneyTimeline } from "@/components/ui-custom/journey-timeline";

export function SpaJourney() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Experience"
          title="Your Journey With Us"
          description="A visit to MY3 Wellness Spa is never rushed. Here's what to expect from arrival to checkout."
        />
        <div className="mt-16">
          <JourneyTimeline />
        </div>
      </div>
    </section>
  );
}
