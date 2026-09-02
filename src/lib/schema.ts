import { siteConfig } from "@/lib/site-config";
import type { FAQ } from "@/content/faqs";
import type { Service } from "@/content/services";
import type { BlogPost } from "@/content/blog";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: "Hyderabad",
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    areaServed: siteConfig.nearbyLandmarks.map((name) => ({
      "@type": "Place",
      name,
    })),
    audience: {
      "@type": "Audience",
      audienceType: "IT and corporate professionals, Gachibowli and Raidurg residents",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    hasMap: siteConfig.address.mapsQuery
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          siteConfig.address.mapsQuery
        )}`
      : undefined,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/my3-icon.png`,
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

export function faqPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  const lowest = Math.min(...service.prices.map((p) => p.price));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "DaySpa",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: lowest,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/brand/my3-icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}
