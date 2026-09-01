import { SectionHeading } from "@/components/ui-custom/section-heading";
import { TestimonialCard } from "@/components/ui-custom/testimonial-card";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui-custom/reveal";
import { GoogleIcon } from "@/components/ui-custom/brand-icons";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Trusted by Hyderabad's Busiest Professionals"
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
            <GoogleIcon className="size-4" />
            <span className="font-accent text-xs uppercase tracking-[0.1em] text-muted-foreground">
              Reviews from Google
            </span>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-10 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
          stagger={0.1}
        >
          {testimonials.slice(0, 3).map((t) => (
            <RevealItem key={t.name} className="w-[85vw] shrink-0 sm:w-auto">
              <TestimonialCard testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
