import { ShieldCheck, Leaf, DoorClosed, HeartHandshake, Sparkles, Star } from "lucide-react";

import { SectionHeading } from "@/components/ui-custom/section-heading";
import { FeatureCard } from "@/components/ui-custom/feature-card";
import { RevealGroup, RevealItem } from "@/components/ui-custom/reveal";
import { TrustedByMarquee } from "@/components/ui-custom/trusted-by-marquee";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Certified Therapists",
    description: "Every therapist is trained specifically in the modality they perform — no generalists, no guesswork.",
  },
  {
    icon: Leaf,
    title: "Pure Aroma Oils",
    description: "Curated essential oils and natural carrier oils, chosen for both therapeutic effect and sensory calm.",
  },
  {
    icon: DoorClosed,
    title: "Private Treatment Rooms",
    description: "Fully enclosed, soundproofed suites — never a curtained bay. Genuine privacy, every visit.",
  },
  {
    icon: HeartHandshake,
    title: "Couple Suites",
    description: "A dedicated room for two, with two therapists working in sync, for shared wellness moments.",
  },
  {
    icon: Sparkles,
    title: "Premium Hygiene",
    description: "Single-use linens, sanitised tools, and fully reset rooms after every single appointment.",
  },
  {
    icon: Star,
    title: "Five-Star Experience",
    description: "From welcome drink to closing tea — every detail is designed around unhurried, attentive care.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The MY3 Standard"
          title="Why Guests Choose MY3"
          description="Gachibowli has no shortage of massage centres. Here's what genuinely sets a five-star wellness sanctuary apart."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {FEATURES.map((f) => (
            <RevealItem key={f.title}>
              <FeatureCard
                icon={<f.icon className="size-5" strokeWidth={1.5} />}
                title={f.title}
                description={f.description}
              />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-20 flex flex-col items-center gap-6">
          <span className="font-accent text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Moments From Hyderabad&rsquo;s Business Hubs
          </span>
          <TrustedByMarquee />
        </div>
      </div>
    </section>
  );
}
