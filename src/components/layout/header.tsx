"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "@/components/ui-custom/logo";
import { NAV_LINKS } from "@/lib/site-config";
import { CallLink } from "@/components/ui-custom/call-link";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useCommandMenu } from "@/components/layout/command-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { setOpen } = useCommandMenu();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-[var(--offer-bar-h)] z-50 transition-[top,background-color,border-color] duration-300",
        scrolled ? "glass shadow-[0_1px_0_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      )}
    >
      <div className="container-luxe flex h-24 items-center justify-between">
        <Logo size={64} />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-accent text-[13px] uppercase tracking-[0.14em] transition-colors relative py-2",
                  active
                    ? scrolled
                      ? "text-primary"
                      : "text-gold"
                    : scrolled
                      ? "text-foreground/75 hover:text-primary"
                      : "text-cream/85 hover:text-cream"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setOpen(true)}
            className={cn(scrolled ? "text-foreground/70 hover:text-primary" : "text-cream/85 hover:text-cream hover:bg-cream/10")}
          >
            <Search className="size-[18px]" strokeWidth={1.5} />
          </Button>
          <CallLink
            className={cn(
              "inline-flex items-center gap-2 pl-1 pr-2 transition-colors",
              scrolled ? "text-foreground/75 hover:text-primary" : "text-cream/85 hover:text-cream"
            )}
            aria-label="Call Anantara Spa"
          >
            <Phone className="size-[16px]" strokeWidth={1.5} />
          </CallLink>
          <ThemeToggle
            className={cn(scrolled ? "text-foreground/70 hover:text-primary" : "text-cream/85 hover:text-cream hover:bg-cream/10")}
          />
          <WhatsAppLink className="inline-flex h-9 items-center justify-center rounded-full bg-gold px-6 font-accent text-xs uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.03]">
            Book Now
          </WhatsAppLink>
        </div>

        <div className="flex items-center gap-0.5 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setOpen(true)}
            className={cn(
              "size-11",
              scrolled ? "text-foreground" : "text-cream hover:bg-cream/10"
            )}
          >
            <Search className="size-5" strokeWidth={1.5} />
          </Button>
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className={cn(
                    "size-11",
                    scrolled ? "text-foreground" : "text-cream hover:bg-cream/10"
                  )}
                />
              }
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-96 bg-background overflow-hidden">
              <SheetHeader>
                <SheetTitle>
                  <Logo size={52} />
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-1 min-h-0 flex-col gap-1 px-6 mt-4 overflow-y-auto">
                <AnimatePresence>
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <SheetClose
                        render={
                          <Link
                            href={link.href}
                            className={cn(
                              "block py-3.5 text-lg font-heading border-b border-border/60",
                              pathname === link.href ? "text-primary" : "text-foreground"
                            )}
                          />
                        }
                      >
                        {link.label}
                      </SheetClose>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </nav>
              <div
                className="mt-auto flex flex-col gap-3 px-6 pt-6"
                style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 1.5rem)" }}
              >
                <WhatsAppLink className="inline-flex h-11 items-center justify-center rounded-full bg-primary font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground">
                  Book on WhatsApp
                </WhatsAppLink>
                <CallLink className="inline-flex h-11 items-center justify-center rounded-full border border-border font-accent text-xs uppercase tracking-[0.14em] text-foreground">
                  Call Now
                </CallLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
