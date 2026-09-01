"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Gift, Phone } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";
import { siteConfig } from "@/lib/site-config";

const SEEN_KEY = "my3-discount-popup-seen";
const DELAY_DESKTOP_MS = 5000;
const DELAY_MOBILE_MS = 8000;

// Once-per-session "grab the offer" prompt, homepage only. Desktop gets the
// centered image-banner dialog; mobile gets a compact bottom sheet instead —
// a full centered modal reads as blocking the whole screen on a small phone.
export function DiscountPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // Wait until we know which breakpoint we're on so the right delay applies.
    if (pathname !== "/" || isMobile === null) return;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) return;

    const timer = window.setTimeout(
      () => {
        setOpen(true);
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          // ignore — worst case it reappears next visit
        }
      },
      isMobile ? DELAY_MOBILE_MS : DELAY_DESKTOP_MS
    );
    return () => window.clearTimeout(timer);
  }, [pathname, isMobile]);

  const claimMessage = `Hi MY3 Wellness Spa! I'd like to claim the ${siteConfig.promo.percent}% off first-visit offer.`;

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          showCloseButton
          className="gap-0 rounded-t-3xl border-0 bg-card px-6 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-2xl"
        >
          <div className="mx-auto h-1 w-10 shrink-0 rounded-full bg-border" aria-hidden="true" />
          <div className="mt-3 flex flex-col items-center gap-3 text-center">
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary">
              <Gift className="size-5 text-gold-deep" strokeWidth={1.75} />
            </span>
            <SheetTitle className="font-heading text-xl font-semibold text-foreground">
              {siteConfig.promo.popupHeadline}
            </SheetTitle>
            <SheetDescription className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.promo.popupBody}
            </SheetDescription>

            <div className="mt-1 flex w-full flex-col gap-2.5">
              <WhatsAppLink
                message={claimMessage}
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-accent text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform active:scale-95"
              >
                <WhatsAppIcon className="size-4" />
                Claim on WhatsApp
              </WhatsAppLink>
              <CallLink
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary py-3.5 font-accent text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors active:scale-95"
              >
                <Phone className="size-4" strokeWidth={1.75} />
                {siteConfig.contact.phoneDisplay}
              </CallLink>
            </div>
            <p className="text-[11px] text-muted-foreground">No advance payment required</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton
        className="max-w-sm gap-0 overflow-hidden rounded-3xl border-0 bg-card p-0 shadow-2xl sm:max-w-md [&>button]:z-10 [&>button]:text-cream [&>button]:hover:bg-cream/20 [&>button]:hover:text-cream"
      >
        <div className="relative h-32 w-full overflow-hidden sm:h-36">
          <Image
            src="/images/gallery/gallery-02.png"
            alt=""
            fill
            sizes="480px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <span className="absolute inset-x-0 bottom-3 text-center font-accent text-[11px] uppercase tracking-[0.24em] text-gold">
            {siteConfig.promo.eyebrow}
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 px-6 pb-7 pt-6 text-center sm:px-8">
          <DialogTitle className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            {siteConfig.promo.popupHeadline}
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
            {siteConfig.promo.popupBody}
          </DialogDescription>

          <div className="mt-1 flex w-full flex-col gap-2.5">
            <WhatsAppLink
              message={claimMessage}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-accent text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform hover:scale-[1.02] active:scale-95"
            >
              <WhatsAppIcon className="size-4" />
              Claim on WhatsApp
            </WhatsAppLink>
            <CallLink
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary py-3.5 font-accent text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="size-4" strokeWidth={1.75} />
              {siteConfig.contact.phoneDisplay}
            </CallLink>
          </div>
          <p className="text-[11px] text-muted-foreground">No advance payment required</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
