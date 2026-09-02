// Single source of truth for business data, used across pages, metadata, and JSON-LD.
//
// Domain, phone, and email below are MY3's real, confirmed details. The street address,
// socials, and analytics IDs are still placeholders inherited from an earlier build for
// a different spa business — replace those with MY3's real details before launch.

export const siteConfig = {
  name: "MY3 Wellness Spa",
  legalName: "MY3 Wellness Spa",
  tagline: "Mind. Body. Balance.",
  shortDescription:
    "A luxury day spa in Gachibowli-Raidurg, Hyderabad's IT corridor, offering Swedish, Thai, Balinese and deep-tissue massage for busy professionals.",
  url: "https://my3wellnessspa.in",
  ogImage: "/opengraph-image",
  locale: "en_IN",
  themeColor: "#4a5636",
  // MY3 is a new business with no GTM/GA4/Google Ads accounts yet — these stay
  // as placeholders until real containers exist. layout.tsx uses
  // hasRealAnalyticsId() below to skip loading GTM/gtag entirely while they're
  // placeholders, so nothing loads, nothing fires, and no bytes are spent on
  // this until there's a real account to point at. Fill these in once MY3
  // sets up its own GTM/GA4/Google Ads accounts.
  gtmId: "GTM-XXXXXXX",
  googleAdsId: "AW-XXXXXXXXXX",
  ga4Id: "G-XXXXXXXXXX",

  contact: {
    phoneDisplay: "+91 99484 81838",
    phoneRaw: "+919948481838",
    whatsappRaw: "919948481838",
    email: "my3wellnessspa@gmail.com",
  },

  address: {
    // PLACEHOLDER — confirm the real building/floor details with the client.
    streetAddress: "MY3 Wellness Spa, Gachibowli",
    addressLocality: "Gachibowli, Raidurg",
    addressRegion: "Telangana",
    postalCode: "500032",
    addressCountry: "IN",
    full: "Gachibowli, Raidurg, Hyderabad, Telangana 500032",
    mapsQuery: "MY3 Wellness Spa, Gachibowli, Raidurg, Hyderabad, Telangana",
    // PLACEHOLDER — no real Google Business listing exists yet for MY3, so this uses
    // a plain keyless search-embed against the address text above (approximate pin,
    // no API key required). Swap for a proper Maps "Share > Embed a map" link once
    // MY3's Google Business Profile is live.
    mapsEmbedSrc:
      "https://maps.google.com/maps?q=MY3+Wellness+Spa+Gachibowli+Raidurg+Hyderabad+Telangana&output=embed",
    mapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=MY3+Wellness+Spa+Gachibowli+Raidurg+Hyderabad+Telangana",
  },

  // Placeholder — confirm real hours with the client before launch.
  hours: [{ days: "Monday — Sunday", time: "10:00 AM – 9:00 PM" }],
  hoursNote: "Open all seven days · Last booking 8:00 PM",

  // Single source of truth for the current promo — change the number here and
  // it updates everywhere (offer bar, hero badge, service cards, popup).
  promo: {
    percent: 20,
    eyebrow: "First Visit Offer",
    headline: "Flat 20% Off All Therapies",
    cardBadge: "Get 20% Off For First-Time Guests",
    popupHeadline: "Grab 20% Off Your First Visit",
    popupBody:
      "Book your first treatment at MY3 Wellness Spa today and save 20% instantly — no advance payment required.",
  },

  social: {
    instagram: "https://www.instagram.com/my3wellnessspa/",
    facebook: "https://www.facebook.com/profile.php?id=61594087136309",
  },

  // PLACEHOLDER — confirm real founding year with the client.
  founded: 2020,
  yearsOfExperience: 5,

  nearbyLandmarks: [
    "HITEC City",
    "Financial District",
    "Wipro Circle",
    "Raidurg Metro Station",
    "Mindspace",
    "DLF Cyber City",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/membership" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Membership", href: "/membership" },
    { label: "Gallery", href: "/gallery" },
    { label: "Journal", href: "/blog" },
    { label: "Areas We Serve", href: "/spa-near" },
  ],
  support: [
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

// True once an analytics ID has been filled in with a real value (i.e. no
// longer contains the "X" placeholder run) — see the gtmId/googleAdsId/ga4Id
// comment above.
export function hasRealAnalyticsId(id: string) {
  return id.length > 0 && !id.includes("XXX");
}
