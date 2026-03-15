import type { Metadata } from "next";
import { HomePageClient } from "@/components/portfolio/home-page-client";
import {
  getBlogPosts,
  getGithubOverview,
  getGithubRepos,
  getWakaTimeStats,
} from "@/lib/server/portfolio-data";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Muhammad Fiaz",
  },
  description:
    "Muhammad Fiaz portfolio: founder, entrepreneur, full stack developer and open-source contributor.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Muhammad Fiaz portfolio",
    "full stack developer",
    "startup engineer",
    "open source projects",
    "software services",
  ],
  openGraph: {
    title: "Muhammad Fiaz | Founder, Entrepreneur, Full Stack Developer",
    description:
      "Business-first product engineering and open-source execution.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Muhammad Fiaz Portfolio Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fiaz",
    description:
      "Business-first product engineering and open-source execution.",
    images: ["/android-chrome-512x512.png"],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default async function HomePage() {
  const [initialRepos, initialPosts, initialWakaTime, initialGitHubOverview] =
    await Promise.all([
      getGithubRepos(),
      getBlogPosts(),
      getWakaTimeStats(),
      getGithubOverview(),
    ]);

  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Muhammad Fiaz Portfolio",
    url: siteUrl,
    description: "Founder, entrepreneur, and full stack developer portfolio.",
    mainEntity: {
      "@type": "Person",
      name: "Muhammad Fiaz",
      url: siteUrl,
    },
  };

  const profileStatsJsonLd = initialGitHubOverview
    ? {
        "@context": "https://schema.org",
        "@type": "Dataset",
        name: "Muhammad Fiaz GitHub Portfolio Stats",
        description:
          "Live GitHub repository, stars, forks, and watcher metrics.",
        creator: {
          "@type": "Person",
          name: "Muhammad Fiaz",
        },
        distribution: {
          "@type": "DataDownload",
          contentUrl: `${siteUrl}/api/portfolio/github-overview`,
          encodingFormat: "application/json",
        },
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {serializeJsonLd(homepageJsonLd)}
      </script>
      {profileStatsJsonLd ? (
        <script type="application/ld+json">
          {serializeJsonLd(profileStatsJsonLd)}
        </script>
      ) : null}
      <script type="application/ld+json">
        {serializeJsonLd(breadcrumbJsonLd)}
      </script>
      <HomePageClient
        initialRepos={initialRepos}
        initialPosts={initialPosts}
        initialWakaTime={initialWakaTime}
        initialGitHubOverview={initialGitHubOverview}
      />
    </>
  );
}
