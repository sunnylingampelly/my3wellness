import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Google's official multicolor "G" mark, as published in Google's brand/sign-in
// button assets — used here purely as a "posted via Google" source icon on the
// review cards, not as an endorsement.
export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20c11.045 0 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917Z"
      />
      <path
        fill="#FF3D00"
        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.682 0-14.344 4.337-17.694 10.691Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917Z"
      />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    >
      <path d="M15 4h-2.5A3.5 3.5 0 0 0 9 7.5V10H7v3h2v7h3v-7h2.5l.5-3H12V7.75c0-.69.31-1.25 1.2-1.25H15V4Z" />
    </svg>
  );
}

// Font Awesome's "whatsapp" brand glyph (fa-brands), self-hosted as inline SVG rather
// than loaded from the Font Awesome CDN — pulling their full icon font/CSS over the
// network for a single icon would add real weight and hurt the site's Lighthouse
// Performance score. Same visual result, zero extra requests.
export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 110.9L1.9 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-68.9-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.6-9.7-1.5-2.8-13.4-32.3-18.3-44.2-4.8-11.6-9.7-10-13.3-10.2-3.4-.2-7.3-.2-11.2-.2-3.9 0-10.2 1.5-15.6 7.3-5.4 5.8-20.7 20.3-20.7 49.4 0 29.1 21.2 57.2 24.2 61.1 2.9 3.9 40.7 62.4 100.4 85 49.9 19.1 60.1 15.5 71 14.5 10.9-1 34.8-14.3 39.7-28 4.9-13.7 4.9-25.4 3.4-28-1.4-2.5-5.1-3.9-10.6-6.7z" />
    </svg>
  );
}
