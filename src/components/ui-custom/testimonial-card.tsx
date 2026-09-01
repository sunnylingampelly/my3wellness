import { Star } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { GoogleIcon } from "@/components/ui-custom/brand-icons";
import { cn } from "@/lib/utils";

// Google's default avatar palette for reviewers without a profile photo —
// a stable color per name (simple hash) rather than random, so the same
// person always gets the same color across renders.
const AVATAR_COLORS = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#1E88E5",
  "#039BE5",
  "#00897B",
  "#43A047",
  "#FB8C00",
];

function avatarColor(name: string) {
  const hash = [...name].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initial = testimonial.name.trim().charAt(0).toUpperCase();

  return (
    <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
      <div className="flex items-start gap-3">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-full font-heading text-lg font-semibold text-white"
          style={{ backgroundColor: avatarColor(testimonial.name) }}
          aria-hidden="true"
        >
          {initial}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate font-accent text-sm font-medium text-foreground">
              {testimonial.name}
            </span>
            <GoogleIcon className="size-3.5 shrink-0" />
          </div>
          <div className="mt-0.5 flex items-center gap-1.5">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "size-3.5",
                    i < testimonial.rating
                      ? "fill-[#FBBC04] text-[#FBBC04]"
                      : "fill-none text-border"
                  )}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{testimonial.timeAgo}</span>
          </div>
          <span className="sr-only">
            {testimonial.rating} out of 5 stars, reviewed on Google {testimonial.timeAgo}
          </span>
        </div>
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
        {testimonial.quote}
      </blockquote>

      <figcaption className="border-t border-border pt-3 text-xs text-gold-deep">
        {testimonial.service} &middot; <span className="text-muted-foreground">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
