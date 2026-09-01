// Landing-page content for corporate/IT-hub area searches (e.g. "spa near Wipro Circle").
// Each entry powers a dedicated /spa-near/[slug] page so paid-search and organic clicks
// for a specific business hub land on copy that matches that search intent, rather than
// the generic homepage. Keep entries in sync with `siteConfig.nearbyLandmarks`.

export type Area = {
  slug: string;
  name: string;
  shortDescription: string;
  intro: string;
  recommendedServices: string[]; // service slugs, see content/services.ts
};

export const areas: Area[] = [
  {
    slug: "hitec-city",
    name: "HITEC City",
    shortDescription:
      "A luxury day spa a short drive from HITEC City, offering therapeutic massage built around long hours at a desk.",
    intro:
      "If you work out of HITEC City, MY3 Wellness Spa is one of the closest genuine luxury spa experiences to you — usually under 15–20 minutes away by car, depending on traffic. Guests from HITEC City often arrive straight from work carrying tension in the neck, shoulders, and lower back from long hours at a screen. Our private, soundproofed suites and time-tested therapies are built specifically around that kind of everyday strain.",
    recommendedServices: ["thai-massage", "deep-tissue-massage", "foot-back-shoulder-massage"],
  },
  {
    slug: "financial-district",
    name: "Financial District",
    shortDescription:
      "A private wellness sanctuary near the Financial District for professionals who need real recovery, not just a quick rubdown.",
    intro:
      "Professionals from the Financial District make up a large share of our regular guests — most reach us in under 15–20 minutes by car, depending on traffic. After a demanding day of back-to-back meetings, our therapists focus on the areas that carry the most desk-related tension: shoulders, lower back, and feet. Every session opens with a short consultation, so pressure and pacing are calibrated to you, not a fixed routine.",
    recommendedServices: ["foot-back-shoulder-massage", "deep-tissue-massage", "thai-deep-tissue-combination"],
  },
  {
    slug: "wipro-circle",
    name: "Wipro Circle",
    shortDescription:
      "A five-star day spa minutes from Wipro Circle, built for busy professionals who need to properly switch off.",
    intro:
      "Wipro Circle sits right in Gachibowli, making MY3 Wellness Spa one of the most convenient genuine luxury spa options nearby — no long detour required after work. Guests from Wipro Circle typically book in for an hour or ninety minutes to fully disconnect between the office and home, in a private suite designed for quiet rather than rushing.",
    recommendedServices: ["deep-tissue-massage", "swedish-massage", "thai-deep-tissue-combination"],
  },
  {
    slug: "raidurg-metro",
    name: "Raidurg Metro Station",
    shortDescription:
      "MY3 Wellness Spa is a short walk or ride from Raidurg Metro Station — an easy stop on the way home.",
    intro:
      "For guests commuting via the Metro, MY3 Wellness Spa is easily reached from Raidurg Metro Station — a convenient stop before heading home rather than a special trip. It's a favourite among Metro commuters looking to unwind after a long day without adding much to the journey.",
    recommendedServices: ["swedish-massage", "thai-foot-reflexology", "foot-head-shoulder-massage"],
  },
  {
    slug: "mindspace",
    name: "Mindspace",
    shortDescription:
      "A private spa sanctuary a short drive from Mindspace, Madhapur — five-star therapy without the five-star hotel prices.",
    intro:
      "Guests working out of Mindspace regularly choose MY3 Wellness Spa as their go-to reset, usually reaching us in under 15–20 minutes by car depending on traffic. We combine hotel-spa-level privacy and hygiene standards with accessible pricing, so proper recovery doesn't have to wait for a special occasion.",
    recommendedServices: ["balinese-massage", "deep-tissue-massage", "couples-massage"],
  },
  {
    slug: "dlf-cyber-city",
    name: "DLF Cyber City",
    shortDescription:
      "A luxury spa near DLF Cyber City, Gachibowli — ideal for a quick, genuine reset between meetings or after work.",
    intro:
      "DLF Cyber City is right in our neighbourhood, which makes MY3 Wellness Spa an easy choice for guests who want real recovery without losing half their evening to travel. Whether it's a lunch-hour reset or an after-work wind-down, our private suites and focused therapies are designed to fit around a demanding corporate schedule.",
    recommendedServices: ["deep-tissue-massage", "four-hands-massage", "thai-massage"],
  },
];

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug);
}
