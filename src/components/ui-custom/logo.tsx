import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// Intrinsic aspect ratio of /images/brand/my3-logo.webp (1983 × 793) — the lockup is a
// wide icon + wordmark, not a square badge, so height drives the box and width follows.
const LOGO_ASPECT = 1983 / 793;

export function Logo({
  className,
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={cn("flex items-center shrink-0", className)}
    >
      <span className="inline-flex items-center rounded-full bg-cream/95 px-3 py-1.5 shadow-sm ring-1 ring-black/5">
        <Image
          src="/images/brand/my3-logo.webp"
          alt={`${siteConfig.name} logo`}
          width={Math.round(size * LOGO_ASPECT)}
          height={size}
          priority
          className="w-auto"
          style={{ height: size }}
        />
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </Link>
  );
}
