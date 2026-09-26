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
      "If you're looking for a spa near HITEC City or a massage near HITEC City, MY3 Wellness Spa is a short drive away in Gachibowli. Our private, soundproofed suites and time-tested therapies are built around the kind of everyday strain that comes from long hours at a desk or a screen — neck, shoulders, and lower back.",
    recommendedServices: ["thai-massage", "deep-tissue-massage", "foot-back-shoulder-massage"],
  },
  {
    slug: "financial-district",
    name: "Financial District",
    shortDescription:
      "A private wellness sanctuary near the Financial District for professionals who need real recovery, not just a quick rubdown.",
    intro:
      "Searching for a spa near Nanakramguda or a massage near Nanakramguda? MY3 Wellness Spa is a short drive from the Financial District, in Gachibowli. After a demanding day of back-to-back meetings, our therapists focus on the areas that carry the most desk-related tension — shoulders, lower back, and feet. Every session opens with a short consultation, so pressure and pacing are calibrated to you, not a fixed routine.",
    recommendedServices: ["foot-back-shoulder-massage", "deep-tissue-massage", "thai-deep-tissue-combination"],
  },
  {
    slug: "wipro-circle",
    name: "Wipro Circle",
    shortDescription:
      "A five-star day spa minutes from Wipro Circle, built for busy professionals who need to properly switch off.",
    intro:
      "Wipro Circle sits right in Gachibowli, so MY3 Wellness Spa is close by without a long detour after work. Choose a 60 or 90-minute session to disconnect between the office and home, in a private suite designed for quiet rather than rushing.",
    recommendedServices: ["deep-tissue-massage", "swedish-massage", "thai-deep-tissue-combination"],
  },
  {
    slug: "raidurg-metro",
    name: "Raidurg Metro Station",
    shortDescription:
      "MY3 Wellness Spa is a short walk or ride from Raidurg Metro Station — an easy stop on the way home.",
    intro:
      "MY3 Wellness Spa is easily reached from Raidurg Metro Station — a stop on the way home rather than a special trip, if you'd like to unwind after a long day before heading back.",
    recommendedServices: ["swedish-massage", "thai-foot-reflexology", "foot-head-shoulder-massage"],
  },
  {
    slug: "mindspace",
    name: "Mindspace",
    shortDescription:
      "A private spa sanctuary a short drive from Mindspace, Madhapur — five-star therapy without the five-star hotel prices.",
    intro:
      "MY3 Wellness Spa is a short drive from Mindspace, Madhapur. We combine hotel-spa-level privacy and hygiene standards with accessible pricing, so proper recovery doesn't have to wait for a special occasion.",
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

// Areas that list this service in their own recommendedServices — used to
// link a service's own page back to the location page(s) most relevant to
// it, rather than guessing at a "closest" area.
export function getAreasRecommending(serviceSlug: string) {
  return areas.filter((a) => a.recommendedServices.includes(serviceSlug));
}
