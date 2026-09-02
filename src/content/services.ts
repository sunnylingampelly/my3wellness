import { siteConfig } from "@/lib/site-config";

export type PriceOption = {
  duration: number; // minutes
  price: number; // INR
};

export type Service = {
  slug: string;
  name: string;
  category: "signature" | "combination";
  icon:
    | "hand"
    | "leaf"
    | "waves"
    | "footprints"
    | "flame"
    | "users"
    | "sparkles"
    | "heart";
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  prices: PriceOption[];
  popular?: boolean;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    category: "signature",
    icon: "waves",
    tagline: "The art of gentle release",
    description:
      "Long, flowing strokes and gentle pressure ease muscular tension, quiet the nervous system, and restore a natural sense of ease — an elegant entry point into deep relaxation.",
    longDescription:
      "Our Swedish massage is the foundation of restorative bodywork — a sequence of long gliding strokes, kneading, and gentle joint mobilisation performed with warmed aromatic oils. It is designed to lower stress hormones, improve circulation, and leave you in a state of unhurried calm. A favourite first experience for guests newer to spa therapy, and equally cherished as a weekly ritual by longtime visitors.",
    benefits: [
      "Eases everyday muscular tension",
      "Improves circulation and lymphatic flow",
      "Calms the nervous system and mind",
      "Ideal for first-time spa guests",
    ],
    prices: [
      { duration: 60, price: 3200 },
      { duration: 90, price: 4300 },
      { duration: 120, price: 5000 },
    ],
    popular: true,
    keywords: ["swedish massage hyderabad", "relaxation massage hyderabad", "body massage hyderabad"],
  },
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "signature",
    icon: "hand",
    tagline: "For the tension that lingers",
    description:
      "Slow, firm strokes work into deeper muscle layers to release chronic stiffness, knots, and postural strain — a purposeful therapy for bodies carrying real tension.",
    longDescription:
      "Designed for guests who spend long hours at a desk or carry tension in the neck, shoulders, and lower back, our deep tissue massage applies focused, sustained pressure along muscle fibres and connective tissue. Therapists work with you to identify tight zones and calibrate pressure precisely, leaving the body looser, straighter, and noticeably lighter.",
    benefits: [
      "Releases chronic muscle knots",
      "Improves posture and mobility",
      "Relieves desk-related back and neck strain",
      "Supports faster recovery after exertion",
    ],
    prices: [
      { duration: 60, price: 3400 },
      { duration: 90, price: 4500 },
      { duration: 120, price: 5300 },
    ],
    popular: true,
    keywords: ["deep tissue massage hyderabad", "professional massage gachibowli"],
  },
  {
    slug: "balinese-massage",
    name: "Balinese Massage",
    category: "signature",
    icon: "flame",
    tagline: "Island ritual, rhythmic and warm",
    description:
      "Acupressure, rhythmic strokes, gentle stretching, and warmed aromatic oils combine in this Indonesian ritual — deeply relaxing for both body and mind.",
    longDescription:
      "A cherished ritual from the islands of Indonesia, Balinese massage blends skin rolling, acupressure, and long strokes with fragrant oils to melt away tension while encouraging deep, meditative calm. It is a full sensory experience — as much about the mind settling as the body softening.",
    benefits: [
      "Deep full-body relaxation",
      "Improves flexibility through gentle stretching",
      "Aromatic oils elevate mood and calm",
      "A holistic mind-body reset",
    ],
    prices: [
      { duration: 60, price: 3300 },
      { duration: 90, price: 4400 },
      { duration: 120, price: 5100 },
    ],
    keywords: ["balinese massage hyderabad", "aroma therapy hyderabad"],
  },
  {
    slug: "thai-massage",
    name: "Thai Massage",
    category: "signature",
    icon: "sparkles",
    tagline: "Ancient stretch, modern vitality",
    description:
      "A dry therapy combining assisted yoga-like stretches, rhythmic acupressure, and energy-line work to restore flexibility, circulation, and vitality.",
    longDescription:
      "Rooted in centuries-old healing tradition, Thai massage is performed without oils, using guided stretching and acupressure along the body's energy lines. Guests often describe it as part massage, part yoga — leaving with a marked increase in flexibility, better circulation, and a renewed sense of physical vitality.",
    benefits: [
      "Increases flexibility and range of motion",
      "Stimulates circulation and energy flow",
      "Relieves stiffness without oils",
      "Invigorating rather than purely sedative",
    ],
    prices: [
      { duration: 60, price: 2500 },
      { duration: 90, price: 3000 },
      { duration: 120, price: 4500 },
    ],
    keywords: ["thai massage hyderabad", "thai massage near hitech city"],
  },
  {
    slug: "aromatic-massage",
    name: "Aromatic Massage",
    category: "signature",
    icon: "leaf",
    tagline: "Essential oils, essential calm",
    description:
      "Pure essential oils paired with soothing massage techniques to calm the mind, dissolve stress, and restore emotional balance.",
    longDescription:
      "Aromatherapy massage pairs curated essential oil blends — lavender, sandalwood, citrus, and more — with slow, intentional strokes. Beyond physical relief, this treatment works on the emotional register: guests frequently leave feeling lighter, calmer, and more centred than when they arrived.",
    benefits: [
      "Reduces stress and anxious tension",
      "Uplifts mood through curated oil blends",
      "Softens skin with nourishing carrier oils",
      "A gentle, sensory-led experience",
    ],
    prices: [
      { duration: 60, price: 2700 },
      { duration: 90, price: 3800 },
      { duration: 120, price: 4700 },
    ],
    keywords: ["aroma therapy hyderabad", "relaxation massage hyderabad"],
  },
  {
    slug: "thai-foot-reflexology",
    name: "Thai Foot Reflexology",
    category: "signature",
    icon: "footprints",
    tagline: "The soles carry more than weight",
    description:
      "Precise pressure techniques on the reflex points of the feet restore circulation, ease fatigue, and re-balance energy through the whole body.",
    longDescription:
      "Reflexology treats the feet as a map of the body — applying targeted pressure to specific points to relieve tension held far beyond the feet themselves. A quietly powerful treatment for anyone who spends the day standing, walking, or simply carrying stress in their body without realising it.",
    benefits: [
      "Relieves tired, aching feet",
      "Improves circulation throughout the body",
      "Restores balance and energy flow",
      "A calming treatment that requires no undressing",
    ],
    prices: [
      { duration: 60, price: 2200 },
      { duration: 90, price: 2700 },
    ],
    keywords: ["foot reflexology hyderabad", "massage centre gachibowli"],
  },
  {
    slug: "four-hands-massage",
    name: "Four Hands Massage",
    category: "signature",
    icon: "sparkles",
    tagline: "Two therapists, one seamless rhythm",
    description:
      "Two therapists move in mirrored, synchronised rhythm across the body — an immersive, luxurious therapy that multiplies relaxation rather than simply doubling it.",
    longDescription:
      "Reserved for guests seeking the most immersive treatment in our menu, four hands massage is performed by two therapists working in perfect synchrony. The layered, symmetrical sensation is difficult to replicate any other way — many guests describe entering a state of relaxation deeper than any single-therapist treatment can reach.",
    benefits: [
      "The most immersive full-body treatment we offer",
      "Synchronised technique doubles sensory depth",
      "Ideal for special occasions or milestone self-care",
      "Faster, more thorough full-body coverage",
    ],
    prices: [
      { duration: 60, price: 5500 },
      { duration: 90, price: 7500 },
    ],
    keywords: ["premium spa hyderabad", "luxury spa gachibowli"],
  },
  {
    slug: "couples-massage",
    name: "Couples Massage",
    category: "signature",
    icon: "heart",
    tagline: "Wellness, shared",
    description:
      "Two people, two therapists, one tranquil suite — soothing therapies experienced side-by-side for a shared moment of stillness and connection.",
    longDescription:
      "Our couple suite is designed for two guests to unwind together, each receiving individual attention from their own therapist in a shared, softly lit room. Popular with partners, close friends, and family, it turns wellness into a shared ritual rather than a solitary errand.",
    benefits: [
      "Private suite for two",
      "Individual therapists for each guest",
      "A meaningful shared wellness experience",
      "Perfect for anniversaries and celebrations",
    ],
    prices: [
      { duration: 60, price: 6300 },
      { duration: 90, price: 8500 },
    ],
    popular: true,
    keywords: ["couple spa hyderabad", "couples massage gachibowli"],
  },
  {
    slug: "foot-head-shoulder-massage",
    name: "Foot, Head & Shoulder Massage",
    category: "signature",
    icon: "footprints",
    tagline: "Where tension quietly gathers",
    description:
      "Foot reflexology paired with head and shoulder therapy to relieve stress, tension headaches, and the fatigue that builds through a long day.",
    longDescription:
      "A focused therapy for the three places tension gathers most quietly — the feet, the shoulders, and the head. This combination is especially loved by guests managing screen fatigue, tension headaches, or the accumulated stress of a demanding week.",
    benefits: [
      "Relieves tension headaches",
      "Eases shoulder and neck fatigue",
      "Restores circulation through the feet",
      "A complete upper-body and lower-body reset",
    ],
    prices: [{ duration: 60, price: 2800 }],
    keywords: ["head massage hyderabad", "weekend spa hyderabad"],
  },
  {
    slug: "foot-back-shoulder-massage",
    name: "Foot, Back & Shoulder Massage",
    category: "signature",
    icon: "footprints",
    tagline: "Posture, restored from the ground up",
    description:
      "Foot reflexology paired with therapeutic back and shoulder work to reduce soreness and improve posture — a favourite for the desk-bound.",
    longDescription:
      "This combination pairs the restorative effect of foot reflexology with focused therapeutic work across the back and shoulders — two areas most affected by long hours at a desk. Guests leave standing taller, breathing easier, and noticeably less sore.",
    benefits: [
      "Improves posture and spinal ease",
      "Reduces back and shoulder soreness",
      "Restores circulation from the ground up",
      "A favourite among IT and corporate professionals",
    ],
    prices: [{ duration: 60, price: 2800 }],
    keywords: ["professional massage gachibowli", "spa near financial district"],
  },
  {
    slug: "thai-aroma-combination",
    name: "Thai + Aroma Combination",
    category: "combination",
    icon: "sparkles",
    tagline: "Stretch, then soothe",
    description:
      "Thai stretching to release stiffness, followed by an aromatic oil massage to calm and restore — vitality and stillness in one session.",
    longDescription:
      "This signature combination opens with invigorating Thai stretching to loosen the body, then transitions into a slow, aromatic oil massage that settles the nervous system. The result is a full-spectrum treatment — energising where you need mobility, soothing where you need calm.",
    benefits: ["Combines mobility and deep calm", "Improves flexibility and circulation", "Finishes on a deeply relaxing note"],
    prices: [
      { duration: 90, price: 3700 },
      { duration: 120, price: 4700 },
    ],
    keywords: ["thai massage hyderabad", "aroma therapy hyderabad"],
  },
  {
    slug: "thai-swedish-combination",
    name: "Thai + Swedish Combination",
    category: "combination",
    icon: "waves",
    tagline: "Movement meets classic calm",
    description:
      "Energising Thai stretch techniques paired with the smooth, flowing strokes of Swedish massage for a balanced full-body reset.",
    longDescription:
      "A well-rounded combination for guests who want the mobility benefits of Thai stretching without giving up the classic, flowing comfort of Swedish massage. It bridges the two disciplines into one cohesive, deeply satisfying session.",
    benefits: ["Balances mobility with relaxation", "Full-body coverage in one session", "Suited to varied tension patterns"],
    prices: [
      { duration: 90, price: 3900 },
      { duration: 120, price: 5000 },
    ],
    keywords: ["swedish massage hyderabad", "thai massage hyderabad"],
  },
  {
    slug: "thai-balinese-combination",
    name: "Thai + Balinese Combination",
    category: "combination",
    icon: "flame",
    tagline: "Two traditions, one journey",
    description:
      "Thai stretch work opens the body; Balinese rhythm and warmth close the session — a cross-cultural therapy for total-body renewal.",
    longDescription:
      "A guest favourite for those who can't choose between two traditions — this combination lets you experience the mobility of Thai massage and the sensory richness of Balinese technique within a single, unhurried session.",
    benefits: ["Best of two therapeutic traditions", "Improves flexibility and deep relaxation", "A longer, more immersive journey"],
    prices: [
      { duration: 90, price: 4100 },
      { duration: 120, price: 5400 },
    ],
    keywords: ["balinese massage hyderabad", "thai massage hyderabad"],
  },
  {
    slug: "thai-deep-tissue-combination",
    name: "Thai + Deep Tissue Combination",
    category: "combination",
    icon: "hand",
    tagline: "For the most demanding tension",
    description:
      "Thai stretching to mobilise, followed by focused deep tissue work on the areas that need it most — our most therapeutic combination.",
    longDescription:
      "Built for guests carrying real, persistent tension, this combination opens the body through Thai stretching before applying firm, targeted deep tissue work exactly where it's needed. It is our most results-driven combination therapy.",
    benefits: ["Our most therapeutic combination", "Targets chronic tension directly", "Improves mobility before deep work"],
    prices: [
      { duration: 90, price: 4300 },
      { duration: 120, price: 5800 },
    ],
    keywords: ["deep tissue massage hyderabad", "professional massage gachibowli"],
  },
  {
    slug: "reflexology-aroma-combination",
    name: "Reflexology + Aroma Combination",
    category: "combination",
    icon: "footprints",
    tagline: "From the feet, upward calm",
    description:
      "Foot reflexology paired with an aromatic oil massage — a gentle, restorative combination ideal for stress and fatigue.",
    longDescription:
      "This combination begins by grounding the body through foot reflexology, then extends that sense of calm through an aromatic oil massage. A gentle, wholly restorative pairing — ideal for guests seeking calm over intensity.",
    benefits: ["Gentle, deeply calming pairing", "Eases fatigue from the feet up", "Ideal for stress-led tension"],
    prices: [{ duration: 90, price: 3600 }],
    keywords: ["foot reflexology hyderabad", "aroma therapy hyderabad"],
  },
  {
    slug: "reflexology-swedish-combination",
    name: "Reflexology + Swedish Combination",
    category: "combination",
    icon: "footprints",
    tagline: "Grounded, then unwound",
    description:
      "Reflexology to restore circulation, followed by Swedish massage to ease the whole body into deep relaxation.",
    longDescription:
      "A well-loved pairing for guests who want the grounding benefit of reflexology alongside the broad, flowing comfort of Swedish massage — a complete relaxation session from the feet up.",
    benefits: ["Comprehensive head-to-toe relaxation", "Improves circulation and eases tension", "A gentle, well-rounded session"],
    prices: [{ duration: 90, price: 3800 }],
    keywords: ["swedish massage hyderabad", "foot reflexology hyderabad"],
  },
  {
    slug: "reflexology-balinese-combination",
    name: "Reflexology + Balinese Combination",
    category: "combination",
    icon: "footprints",
    tagline: "Ritual, from ground to shoulder",
    description:
      "Foot reflexology paired with the warmth and rhythm of Balinese massage for a sensory-rich, full-body combination.",
    longDescription:
      "This combination pairs the precision of reflexology with the warm, rhythmic sensory richness of Balinese massage — a longer, more immersive experience for guests who want to fully disconnect.",
    benefits: ["Sensory-rich full-body ritual", "Combines precision and warmth", "A longer, more immersive session"],
    prices: [{ duration: 90, price: 4000 }],
    keywords: ["balinese massage hyderabad", "luxury spa gachibowli"],
  },
];

export const signatureServices = services.filter((s) => s.category === "signature");
export const combinationServices = services.filter((s) => s.category === "combination");

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function startingPrice(service: Service) {
  return Math.min(...service.prices.map((p) => p.price));
}

// The prices in `services` above are what guests actually pay. For the
// struck-through "was" price shown alongside them, we mark up by the current
// promo percentage — i.e. the listed price already *is* the discounted one.
export function strikeThroughPrice(price: number) {
  return Math.round(price * (1 + siteConfig.promo.percent / 100));
}
