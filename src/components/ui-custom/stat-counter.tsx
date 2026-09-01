"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

import { cn } from "@/lib/utils";

export function StatCounter({
  value,
  suffix = "",
  label,
  tone = "light",
}: {
  value: number;
  suffix?: string;
  label: string;
  /** "light" = for use on light backgrounds (dark olive number). "dark" = for use on dark/olive backgrounds (cream number). */
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-1 text-center"
    >
      <span
        ref={ref}
        className={cn(
          "font-heading text-4xl sm:text-5xl",
          tone === "dark" ? "text-cream" : "text-primary"
        )}
      >
        {display}
        {suffix}
      </span>
      <span
        className={cn(
          "font-accent text-xs uppercase tracking-[0.14em]",
          tone === "dark" ? "text-cream/80" : "text-muted-foreground"
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}
