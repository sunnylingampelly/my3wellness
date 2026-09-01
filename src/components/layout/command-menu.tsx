"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  Info,
  Sparkles,
  Tag,
  Images,
  Crown,
  HelpCircle,
  Phone,
  Newspaper,
  MapPin,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { services } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { areas } from "@/content/areas";
import { telLink, whatsappLink } from "@/lib/links";
import { reportCallConversion, reportWhatsAppConversion } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

type CommandMenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CommandMenuContext = React.createContext<CommandMenuContextValue | null>(null);

export function useCommandMenu() {
  const ctx = React.useContext(CommandMenuContext);
  if (!ctx) throw new Error("useCommandMenu must be used within CommandMenuProvider");
  return ctx;
}

export function CommandMenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        const target = e.target as HTMLElement;
        if (["INPUT", "TEXTAREA"].includes(target?.tagName) && e.key === "/") return;
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const go = React.useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search MY3 Wellness Spa"
        description="Search pages, treatments, and the journal"
      >
        <Command>
        <CommandInput placeholder="Search treatments, pages, articles..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => go("/")}>
              <Home /> Home
            </CommandItem>
            <CommandItem onSelect={() => go("/about")}>
              <Info /> About
            </CommandItem>
            <CommandItem onSelect={() => go("/services")}>
              <Sparkles /> Services
            </CommandItem>
            <CommandItem onSelect={() => go("/pricing")}>
              <Tag /> Pricing
            </CommandItem>
            <CommandItem onSelect={() => go("/gallery")}>
              <Images /> Gallery
            </CommandItem>
            <CommandItem onSelect={() => go("/membership")}>
              <Crown /> Membership
            </CommandItem>
            <CommandItem onSelect={() => go("/faqs")}>
              <HelpCircle /> FAQs
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Treatments">
            {services.slice(0, 8).map((s) => (
              <CommandItem key={s.slug} onSelect={() => go(`/services/${s.slug}`)}>
                <Sparkles /> {s.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Areas We Serve">
            {areas.map((a) => (
              <CommandItem key={a.slug} onSelect={() => go(`/spa-near/${a.slug}`)}>
                <MapPin /> Spa Near {a.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Journal">
            {blogPosts.slice(0, 4).map((p) => (
              <CommandItem key={p.slug} onSelect={() => go(`/blog/${p.slug}`)}>
                <Newspaper /> {p.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                reportWhatsAppConversion();
                window.open(whatsappLink(), "_blank");
              }}
            >
              <WhatsAppIcon className="size-4" /> Book on WhatsApp
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                reportCallConversion(telLink());
              }}
            >
              <Phone /> Call Now
            </CommandItem>
          </CommandGroup>
        </CommandList>
        </Command>
      </CommandDialog>
    </CommandMenuContext.Provider>
  );
}
