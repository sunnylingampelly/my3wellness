import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Work_Sans, Jost } from "next/font/google";

import "./globals.css";
import { siteConfig, hasRealAnalyticsId } from "@/lib/site-config";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CommandMenuProvider } from "@/components/layout/command-menu";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { OfferBar } from "@/components/layout/offer-bar";
import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { FloatingCta } from "@/components/layout/floating-cta";
import { ChatBubble } from "@/components/layout/chat-bubble";
import { DiscountPopup } from "@/components/layout/discount-popup";
import { BackToTop } from "@/components/layout/back-to-top";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { SwRegister } from "@/components/providers/sw-register";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury Spa in Gachibowli, Hyderabad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.name,
  keywords: [
    "spa in gachibowli",
    "spa in raidurg",
    "luxury spa gachibowli",
    "best spa in gachibowli",
    "massage centre gachibowli",
    "massage spa near raidurg metro",
    "body massage hyderabad",
    "thai massage hyderabad",
    "balinese massage hyderabad",
    "deep tissue massage hyderabad",
    "couple spa hyderabad",
    "spa near hitech city",
    "spa near financial district",
    "spa near mindspace madhapur",
    "spa near wipro circle gachibowli",
    "spa near dlf cyber city",
    "corporate spa membership hyderabad",
    "stress relief massage for IT professionals",
    "wellness spa hyderabad",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} | Luxury Spa in Gachibowli, Hyderabad`,
    description: siteConfig.shortDescription,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Luxury Spa in Gachibowli, Hyderabad`,
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1d16" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${workSans.variable} ${jost.variable} h-full antialiased`}
    >
      <head>
        {/* These IDs are still placeholders (see siteConfig comments) — loading
            GTM/gtag against a fake ID doesn't just do nothing, it actively
            fires real network requests to Google's ad servers on every
            pageview (and costs ~150KB of JS) for an account that doesn't
            exist. Skip them entirely until real IDs are filled in. */}
        {hasRealAnalyticsId(siteConfig.gtmId) && (
          <Script id="gtm-init" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${siteConfig.gtmId}');`}
          </Script>
        )}
        {(hasRealAnalyticsId(siteConfig.googleAdsId) || hasRealAnalyticsId(siteConfig.ga4Id)) && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${
              hasRealAnalyticsId(siteConfig.googleAdsId) ? siteConfig.googleAdsId : siteConfig.ga4Id
            }`}
            strategy="afterInteractive"
          />
        )}
        {(hasRealAnalyticsId(siteConfig.googleAdsId) || hasRealAnalyticsId(siteConfig.ga4Id)) && (
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${hasRealAnalyticsId(siteConfig.googleAdsId) ? `gtag('config', '${siteConfig.googleAdsId}');` : ""}
            ${hasRealAnalyticsId(siteConfig.ga4Id) ? `gtag('config', '${siteConfig.ga4Id}');` : ""}`}
          </Script>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        {hasRealAnalyticsId(siteConfig.gtmId) && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <JsonLd data={[localBusinessSchema(), organizationSchema()]} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider delay={150}>
            <SmoothScrollProvider>
              <CommandMenuProvider>
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-primary-foreground"
                >
                  Skip to content
                </a>
                <ScrollProgress />
                <CursorGlow />
                <TopBar />
                <OfferBar />
                {/* Reserves the same space TopBar + OfferBar occupy (and collapses
                    with OfferBar on dismiss via the shared --offer-bar-h var, and
                    with TopBar below the md breakpoint via --topbar-h) so the fixed
                    Header and page content below don't need their own clearance
                    changed. */}
                <div
                  aria-hidden="true"
                  className="h-[calc(var(--topbar-h)+var(--offer-bar-h))] transition-[height] duration-300"
                />
                <Header />
                <main id="main-content" className="flex-1">
                  {children}
                </main>
                <Footer />
                <MobileCtaBar />
                <FloatingCta />
                <ChatBubble />
                <DiscountPopup />
                <BackToTop />
                <SwRegister />
              </CommandMenuProvider>
            </SmoothScrollProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
