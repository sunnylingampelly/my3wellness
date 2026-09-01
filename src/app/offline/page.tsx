import type { Metadata } from "next";
import { WifiOff } from "lucide-react";

export const metadata: Metadata = {
  title: "You're Offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-5 pt-24 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
        <WifiOff className="size-6" strokeWidth={1.5} />
      </span>
      <h1 className="font-heading text-3xl text-foreground">You&rsquo;re Currently Offline</h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        It looks like your connection dropped. Reconnect and refresh to keep exploring
        MY3 Wellness Spa — or call us directly to book your appointment.
      </p>
    </section>
  );
}
