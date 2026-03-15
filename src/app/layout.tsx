import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Bungee, Press_Start_2P, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { AnimePageAnimator } from "@/components/layout/anime-page-animator";
import { CookieNotice } from "@/components/layout/cookie-notice";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@/components/layout/google-analytics";
import { GoogleTagManager } from "@/components/layout/google-tag-manager";
import { InitialLoader } from "@/components/layout/initial-loader";
import { Navbar } from "@/components/layout/navbar";
import { ReleaseUpdateNotice } from "@/components/layout/release-update-notice";
import { RouteProgressBar } from "@/components/layout/route-progress-bar";
import { ThemeProvider } from "@/components/theme-provider";
import {
  donationUrl,
  fiazDevUrl,
  githubUrl,
  linkedinUrl,
  linkHubUrl,
  ogImageUrl,
  siteUrl,
  sponsorUrl,
  wakatimeUrl,
  xUrl,
} from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Muhammad Fiaz Portfolio",
  title: {
    default: "Muhammad Fiaz | Founder, Entrepreneur, Full Stack Developer",
    template: "%s | Muhammad Fiaz",
  },
  description:
    "High-converting personal portfolio of Muhammad Fiaz. Founder, Entrepreneur, Full Stack Developer, Freelancer and Full-Time Open-Sourcerer.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Muhammad Fiaz",
    "muhammadfiaz.com",
    "Full Stack Developer",
    "Next.js developer",
    "TypeScript developer",
    "Freelancer",
    "Startup product engineer",
    "Open-Sourcerer",
    "WakaTime",
    "Portfolio",
    "India",
  ],
  creator: "Muhammad Fiaz",
  publisher: "Muhammad Fiaz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Muhammad Fiaz | Founder, Entrepreneur, Full Stack Developer",
    description:
      "25+ happy clients worldwide, 99.9% delivery, and modern full stack products built with speed.",
    url: siteUrl,
    siteName: "Muhammad Fiaz",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Muhammad Fiaz Portfolio v5",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fiaz",
    description:
      "Founder, Entrepreneur, Full Stack Developer, Freelancer and Full-Time Open-Sourcerer.",
    images: [ogImageUrl],
    creator: "@muhammadfiaz_",
  },
};

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ff7a00" },
      { media: "(prefers-color-scheme: dark)", color: "#ff9d00" },
    ],
    colorScheme: "light dark",
  };
}

const DEFAULT_GTM_ID = "GTM-5BQ5RPW2";
const DEFAULT_GA_ID = "G-SDJ0K1Y70X";

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || DEFAULT_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID;
  const shouldLoadAnalytics = process.env.NODE_ENV === "production";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Fiaz",
    url: siteUrl,
    jobTitle: "Founder, Entrepreneur, Full Stack Developer",
    sameAs: [
      githubUrl,
      linkedinUrl,
      xUrl,
      wakatimeUrl,
      linkHubUrl,
      sponsorUrl,
      donationUrl,
      fiazDevUrl,
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Fiaz",
    url: siteUrl,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: "Muhammad Fiaz",
      url: siteUrl,
    },
    sameAs: [linkHubUrl, fiazDevUrl, sponsorUrl, donationUrl],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/project?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fiaz Technologies",
    url: fiazDevUrl,
    founder: {
      "@type": "Person",
      name: "Muhammad Fiaz",
      url: siteUrl,
    },
    sameAs: [githubUrl, linkedinUrl, xUrl, linkHubUrl],
    sponsor: {
      "@type": "Offer",
      url: sponsorUrl,
      name: "Sponsor Muhammad Fiaz on GitHub",
    },
    funding: donationUrl,
  };

  const shellFallback = (
    <div className="fixed inset-0 z-80 flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6">
        <p className="font-pixel text-2xl uppercase text-foreground sm:text-3xl">
          Muhammad Fiaz
        </p>
        <p className="mt-2 text-sm font-black uppercase text-muted-foreground sm:text-base">
          Loading workspace...
        </p>
        <div className="mt-5 h-7 border-4 border-black bg-muted p-1 sm:h-8">
          <div className="h-full w-full animate-pulse border-2 border-black bg-primary" />
        </div>
      </div>
    </div>
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://avatars.githubusercontent.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://avatars.githubusercontent.com" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${bungee.variable} ${pressStart.variable} antialiased`}
      >
        {shouldLoadAnalytics && gtmId ? (
          <GoogleTagManager gtmId={gtmId} />
        ) : null}
        {shouldLoadAnalytics && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <Suspense fallback={shellFallback}>
          <ThemeProvider>
            <RouteProgressBar />
            <InitialLoader />
            <AnimePageAnimator />
            <script type="application/ld+json" suppressHydrationWarning>
              {serializeJsonLd(personJsonLd)}
            </script>
            <script type="application/ld+json" suppressHydrationWarning>
              {serializeJsonLd(websiteJsonLd)}
            </script>
            <script type="application/ld+json" suppressHydrationWarning>
              {serializeJsonLd(organizationJsonLd)}
            </script>
            <div className="relative flex min-h-screen flex-col overflow-x-hidden">
              <Navbar />
              <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-24 sm:pt-28">
                {children}
              </main>
              <Footer />
              <CookieNotice />
              <ReleaseUpdateNotice />
            </div>
          </ThemeProvider>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
