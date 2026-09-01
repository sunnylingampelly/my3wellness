"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site-config";
import { trackEvent, reportWhatsAppConversion } from "@/lib/analytics";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  // Always holds the latest field values so the native submit listener below
  // (attached once, not re-bound on every keystroke) never reads stale state.
  const fieldsRef = useRef({ name, phone, message });
  fieldsRef.current = { name, phone, message };

  // Native 'submit' listener instead of React's onSubmit prop — React's
  // synthetic event delegation was found to silently fail to invoke handlers
  // on this site's conversion-reporting elements in production, so this form
  // could open WhatsApp without ever recording the conversion. A listener
  // attached directly to the form node bypasses that.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const handler = (e: SubmitEvent) => {
      e.preventDefault();
      const { name, phone, message } = fieldsRef.current;
      const lines = [
        `Hi MY3 Wellness Spa, my name is ${name || "—"}.`,
        phone ? `My phone number is ${phone}.` : "",
        message || "I'd like to know more about your treatments.",
      ].filter(Boolean);
      const url = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
        lines.join(" ")
      )}`;
      trackEvent("contact_form_whatsapp_submit");
      reportWhatsAppConversion();
      window.open(url, "_blank", "noopener,noreferrer");
    };
    form.addEventListener("submit", handler);
    return () => form.removeEventListener("submit", handler);
  }, []);

  return (
    <form ref={formRef} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ananya Rao"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="98765 43210"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="I'd like to book a Deep Tissue Massage this weekend..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <WhatsAppIcon className="size-4" />
        Send via WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground">
        This opens WhatsApp with your message pre-filled — nothing is stored on our site.
      </p>
    </form>
  );
}
