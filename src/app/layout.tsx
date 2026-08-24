import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter, Manrope } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CommandMenuProvider } from "@/components/layout/command-menu";
import { Header } from "@/components/layout/header";
import { OfferBar } from "@/components/layout/offer-bar";
import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { BackToTop } from "@/components/layout/back-to-top";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { SwRegister } from "@/components/providers/sw-register";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
    { media: "(prefers-color-scheme: dark)", color: "#1b1f1d" },
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
      className={`${cormorant.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <Script id="gtm-init" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${siteConfig.gtmId}');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.googleAdsId}');
          gtag('config', 'AW-18366122950/GvjwCP7t0-EcEMaX07VE', {
            'phone_conversion_number': '9948481838'
          });
          gtag('config', '${siteConfig.ga4Id}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
                <OfferBar />
                {/* Reserves the same space OfferBar occupies (and collapses with it
                    on dismiss via the shared --offer-bar-h var) so the fixed Header
                    and page content below don't need their own clearance changed. */}
                <div
                  aria-hidden="true"
                  className="h-[var(--offer-bar-h)] transition-[height] duration-300"
                />
                <Header />
                <main id="main-content" className="flex-1">
                  {children}
                </main>
                <Footer />
                <MobileCtaBar />
                <WhatsAppFloat />
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
