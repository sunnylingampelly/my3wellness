// Single source of truth for business data, used across pages, metadata, and JSON-LD.
//
// Domain, phone, email, address, and socials below are MY3's real, confirmed details.
// gtmId/googleAdsId/ga4Id are MY3's real GTM/Google Ads/GA4 container IDs.

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
  gtmId: "GTM-N6JLKDG2",
  googleAdsId: "AW-18419941272",
  ga4Id: "G-VVRGHV21Q4",

  contact: {
    phoneDisplay: "+91 99484 81838",
    phoneRaw: "+919948481838",
    whatsappRaw: "919948481838",
    email: "my3wellnessspa@gmail.com",
  },

  address: {
    // Real, confirmed location.
    streetAddress: "1st Floor, G Square Building, above HDFC Bank, near Wells Fargo, Madhura Nagar Colony",
    addressLocality: "Gachibowli, Raidurg",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
    full: "1st Floor, G Square Building, Madhura Nagar Colony, Gachibowli, Raidurg, Hyderabad, Telangana 500081",
    mapsQuery: "MY3 Wellness Spa, Gachibowli, Raidurg, Hyderabad, Telangana 500081",
    // Exact real coordinates for the address above.
    lat: 17.4237972,
    lng: 78.3798283,
    // Deliberately a plain lat/lng pin embed rather than a place-ID/business-name
    // search — this building's Google Maps place ID is still registered under a
    // previous, unrelated tenant's business name. A place/name-based embed would
    // pull *their* live listing info (name, rating, reviews) into the card, not
    // MY3's. A coordinate pin sidesteps that entirely: it marks the exact real
    // spot without asserting whose listing lives there. The homepage/contact
    // location cards render MY3's own name/hours/address from this file, not
    // from Google — so nothing here can show the wrong business name. Swap this
    // for a real "Share > Embed a map" link once MY3 has its own Google Business
    // Profile claimed at this address.
    mapsEmbedSrc: "https://maps.google.com/maps?q=17.4237972,78.3798283&z=17&output=embed",
    mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=17.4237972,78.3798283",
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

  // Standard labels for the site's two primary CTAs, kept to just these two
  // everywhere a call/WhatsApp button pair appears (hero, final CTA, discount
  // popup, sticky mobile bar) — call is the priority action, WhatsApp second.
  cta: {
    call: "Book Free 30-Min Session",
    whatsapp: "Get 20% Off",
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
