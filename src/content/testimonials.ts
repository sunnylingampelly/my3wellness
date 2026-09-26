// Illustrative guest testimonials. These are NOT real, verified reviews —
// they're representative placeholders, not attributed to real, identifiable
// guests, and are not sourced from Google or any other review platform (the
// UI must not claim otherwise — no Google branding, no review-site logos, no
// dates, since none of that can be honestly attributed here).
// TODO(business): replace every entry below with real guest quotes — ideally
// copied from MY3's actual Google Business Profile once one exists (see
// siteConfig.address.mapsEmbedSrc) — before this section ships to real users.

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  service: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    role: "Product Manager, HITEC City",
    quote:
      "Between back-to-back calls all week, the deep tissue session here is the one hour that actually resets me. The private suite makes it feel worlds away from the office, even though it's five minutes down the road.",
    service: "Deep Tissue Massage",
    rating: 5,
  },
  {
    name: "Karthik & Meera",
    role: "Couple, Financial District",
    quote:
      "We booked the couples suite for our anniversary and it set a new standard. Two therapists, perfectly in sync, in a room that felt genuinely private and calm — we've since made it a quarterly ritual.",
    service: "Couples Massage",
    rating: 5,
  },
  {
    name: "Sarah T.",
    role: "Consultant, Gachibowli",
    quote:
      "I've tried spas across the city and this is the first one that feels intentional rather than transactional. The therapists actually listen before they start, and the hygiene standard is visibly a level above.",
    service: "Balinese Massage",
    rating: 5,
  },
  {
    name: "Rohan V.",
    role: "Software Engineer, Mindspace",
    quote:
      "Years of desk work had left my shoulders permanently tight. Three sessions of Thai + Deep Tissue combination and the difference in my posture is something my physiotherapist actually commented on.",
    service: "Thai + Deep Tissue Combination",
    rating: 4,
  },
  {
    name: "Priya N.",
    role: "Founder, Raidurg",
    quote:
      "The little details — the welcome tea, the unhurried consultation, the relaxation lounge afterward — make this feel like a proper wellness retreat rather than a quick massage stop between meetings.",
    service: "Aromatic Massage",
    rating: 5,
  },
];
