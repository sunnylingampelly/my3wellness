"use client";

import type { ComponentPropsWithoutRef } from "react";

import { whatsappLink } from "@/lib/links";
import { reportWhatsAppConversion, useNativeClick } from "@/lib/analytics";

export function WhatsAppLink({
  message,
  onClick,
  ...props
}: Omit<ComponentPropsWithoutRef<"a">, "href"> & { message?: string }) {
  const ref = useNativeClick<HTMLAnchorElement>((e) => {
    reportWhatsAppConversion();
    onClick?.(e as unknown as React.MouseEvent<HTMLAnchorElement>);
  });

  return (
    <a
      ref={ref}
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
