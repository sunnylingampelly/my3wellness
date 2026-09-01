"use client";

import type { ComponentPropsWithoutRef } from "react";

import { telLink } from "@/lib/links";
import { reportCallConversion, useNativeClick } from "@/lib/analytics";

export function CallLink({ onClick, ...props }: ComponentPropsWithoutRef<"a">) {
  const ref = useNativeClick<HTMLAnchorElement>((e) => {
    e.preventDefault();
    reportCallConversion(telLink());
    onClick?.(e as unknown as React.MouseEvent<HTMLAnchorElement>);
  });

  return <a ref={ref} href={telLink()} {...props} />;
}
