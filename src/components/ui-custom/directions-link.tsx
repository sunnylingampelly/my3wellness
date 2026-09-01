"use client";

import type { ComponentPropsWithoutRef } from "react";

import { directionsLink } from "@/lib/links";
import { trackEvent, useNativeClick } from "@/lib/analytics";

export function DirectionsLink({
  onClick,
  ...props
}: Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const ref = useNativeClick<HTMLAnchorElement>((e) => {
    trackEvent("directions_click");
    onClick?.(e as unknown as React.MouseEvent<HTMLAnchorElement>);
  });

  return (
    <a ref={ref} href={directionsLink()} target="_blank" rel="noopener noreferrer" {...props} />
  );
}
