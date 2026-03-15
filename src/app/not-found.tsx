import type { Metadata } from "next";
import Link from "next/link";
import { SystemStatusPanel } from "@/components/pages/system-status-panel";
import { Button } from "@/components/retroui/Button";
import { siteUrl } from "@/lib/site-config";

const notFoundOgImageUrl = `${siteUrl}/404/opengraph-image`;

export const metadata: Metadata = {
  title: "404 | Route Not Found",
  description:
    "The requested route was not found. Continue browsing Muhammad Fiaz Portfolio v5.",
  alternates: {
    canonical: "/404",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "404 | Muhammad Fiaz Portfolio",
    description:
      "The requested route is not available in this release. Use retro navigation to continue.",
    url: `${siteUrl}/404`,
    type: "website",
    images: [
      {
        url: notFoundOgImageUrl,
        width: 1200,
        height: 630,
        alt: "404 page for Muhammad Fiaz Portfolio v5",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 | Muhammad Fiaz Portfolio",
    description:
      "The requested route is not available in this release. Use retro navigation to continue.",
    images: [notFoundOgImageUrl],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function NotFoundPage() {
  const notFoundJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 Route Not Found",
    url: `${siteUrl}/404`,
    isPartOf: {
      "@type": "WebSite",
      name: "Muhammad Fiaz Portfolio",
      url: siteUrl,
    },
    description: "Custom route-not-found page for Muhammad Fiaz Portfolio v5.",
  };

  return (
    <div className="space-y-6 pb-16">
      <script type="application/ld+json">
        {serializeJsonLd(notFoundJsonLd)}
      </script>

      <section className="relative overflow-hidden border-4 border-black bg-card p-5 shadow-retro-lg sm:p-7 md:p-9">
        <div
          aria-hidden
          className="retro-stripes pointer-events-none absolute inset-0 opacity-20"
        />
        <div className="relative z-10 space-y-3">
          <p className="inline-flex border-2 border-black bg-primary px-3 py-1 font-pixel text-xs uppercase text-primary-foreground sm:text-sm">
            Error 404
          </p>
          <h1 className="font-display text-4xl uppercase leading-none sm:text-5xl md:text-6xl">
            Route Not Found
          </h1>
          <p className="max-w-3xl text-sm font-semibold leading-relaxed sm:text-base">
            This page does not exist in the current build. Use the retro
            navigation controls below to jump back to active sections.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="border-4 border-black uppercase">
              <Link href="/">Back To Home</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="border-4 border-black uppercase"
            >
              <Link href="/project">Open Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <SystemStatusPanel mode="not-found" />
    </div>
  );
}
