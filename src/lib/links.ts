import { siteConfig } from "@/lib/site-config";

export function telLink() {
  return `tel:${siteConfig.contact.phoneRaw}`;
}

export function whatsappLink(message?: string) {
  const defaultMessage =
    "Hi MY3 Wellness Spa, I'd like to book an appointment.";
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${text}`;
}

export function mailtoLink(subject?: string) {
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${siteConfig.contact.email}${s}`;
}

export function directionsLink() {
  return siteConfig.address.mapsDirectionsUrl;
}
