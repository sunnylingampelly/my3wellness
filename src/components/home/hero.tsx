"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Phone, PartyPopper } from "lucide-react";

import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { siteConfig } from "@/lib/site-config";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  size: 3 + ((i * 13) % 6),
  duration: 14 + (i % 7) * 2,
  delay: (i % 5) * -3,
}));

// Desktop/tablet only — three real MY3 treatment moments, each with its own
// short line, rotating instead of one static scene. Mobile stays a single
// fixed image (see the <picture>-style split below), no slideshow.
const SLIDES = [
  {
    image: "/images/gallery/hero-2.webp",
    alt: "Therapist performing a warm herbal compress massage on a guest's back",
    headline: "Relax.",
    subtext: "Skilled hands ease every knot of everyday tension away.",
  },
  {
    image: "/images/gallery/hero-web.webp",
    alt: "Private, candlelit MY3 Wellness Spa treatment suite with a garden water feature",
    headline: "Rejuvenate.",
    subtext: "Step into a private suite framed by candlelight and greenery.",
  },
  {
    image: "/images/gallery/hero-1.webp",
    alt: "Serene, candlelit private treatment suite ready for a guest",
    headline: "Rediscover Yourself.",
    subtext: "A private sanctuary in the heart of Gachibowli.",
  },
];

const SLIDE_DURATION = 6000;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 40, damping: 16 });
  const springY = useSpring(mvY, { stiffness: 40, damping: 16 });
  const bgX = useTransform(springX, [-1, 1], [-14, 14]);
  const bgY = useTransform(springY, [-1, 1], [-10, 10]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const handler = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mvX.set((e.clientX / innerWidth) * 2 - 1);
      mvY.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mvX, mvY]);

  // Auto-advance the slideshow; restarts whenever a dot is clicked so the
  // full duration is always given to whichever slide the visitor chose.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(timer);
  }, [index]);

  const slide = SLIDES[index];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-[calc(100svh-var(--offer-bar-h))] flex-col overflow-hidden bg-ink sm:h-[calc(100svh-var(--topbar-h)-var(--offer-bar-h))]"
    >
      {/* Desktop/tablet: rotating slideshow */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 hidden scale-110 sm:block"
      >
        {SLIDES.map((s, i) => (
          <motion.div
            key={s.image}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile: short looping background video, no slideshow. Poster is the
          previous static hero shot — instant first paint, and the fallback
          for any browser that can't/won't autoplay the clip. */}
      <div className="absolute inset-0 sm:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="metadata"
          poster="/images/gallery/mobile-hero.webp"
          aria-hidden="true"
          className="size-full object-cover"
        >
          <source src="/images/gallery/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-gold/50"
            style={{ left: `${p.left}%`, width: p.size, height: p.size, bottom: "-5%" }}
            animate={{ y: ["0%", "-115vh"], opacity: [0, 0.7, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container-luxe relative z-10 flex flex-1 flex-col items-center justify-center pt-[4.5rem] pb-[calc(1.25rem+env(safe-area-inset-bottom))] text-center sm:pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <WhatsAppLink
            message={`Hi MY3 Wellness Spa, I'd like to book a treatment with the ${siteConfig.promo.percent}% off offer.`}
            className="animate-offer-pulse inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1 font-accent text-[10px] font-semibold uppercase tracking-[0.08em] text-ink transition-transform hover:scale-[1.04] active:scale-95 sm:px-4 sm:py-1.5 sm:text-xs"
          >
            <PartyPopper className="size-3 sm:size-3.5" strokeWidth={2} />
            {siteConfig.promo.headline}
          </WhatsAppLink>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-2.5 font-accent text-[10px] uppercase tracking-[0.24em] text-gold sm:mt-4 sm:text-sm sm:tracking-[0.32em]"
        >
          MY3 Wellness Spa &middot; Gachibowli, Hyderabad
        </motion.span>

        <h1 className="mt-3 max-w-2xl font-heading text-4xl font-medium leading-[1.15] text-cream sm:mt-5 sm:text-6xl sm:leading-[1.1] lg:text-7xl">
          {/* Mobile: fixed, short — no slideshow to sync with */}
          <motion.span
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block text-balance sm:hidden"
          >
            Relax. Rejuvenate.
          </motion.span>

          {/* Desktop/tablet: synced to the current slide */}
          <span className="hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.span
                key={slide.headline}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block text-balance"
              >
                {slide.headline}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <div className="mt-2 max-w-xs sm:mt-4 sm:max-w-md">
          <p className="text-balance text-xs text-cream/80 sm:hidden">
            Your private escape in Gachibowli.
          </p>
          {/* Reserved height only matters on desktop, where the text swaps per slide. */}
          <div className="hidden sm:flex sm:h-8 sm:items-start sm:justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.subtext}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-balance text-sm text-cream/80 sm:text-base sm:text-lg"
              >
                {slide.subtext}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 flex w-full flex-col items-center gap-4 sm:mt-8 sm:w-auto sm:flex-row sm:gap-6"
        >
          {/* Call is the priority CTA — primary fill + the glow treatment. */}
          <CallLink className="btn-glow-border inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 font-accent text-xs uppercase tracking-[0.1em] text-ink shadow-lg shadow-gold/30 transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto sm:max-w-none sm:py-3.5 sm:text-sm">
            <Phone className="size-4" strokeWidth={1.75} />
            {siteConfig.cta.call}
          </CallLink>
          <WhatsAppLink className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3 font-accent text-xs uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/10 sm:w-auto sm:max-w-none sm:py-3.5 sm:text-sm">
            <WhatsAppIcon className="size-4" />
            {siteConfig.cta.whatsapp}
          </WhatsAppLink>
        </motion.div>

        <div className="mt-5 hidden items-center gap-2 sm:mt-6 sm:flex">
          {SLIDES.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className="group flex h-4 items-center py-1"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/40 group-hover:bg-cream/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
