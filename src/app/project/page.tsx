import type { Metadata } from "next";
import { ProjectPageClient } from "@/components/pages/project-page-client";
import { getGithubRepos } from "@/lib/server/portfolio-data";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "SSR-fetched GitHub projects by Muhammad Fiaz with filtering and search.",
  alternates: {
    canonical: "/project",
  },
  keywords: [
    "github projects",
    "full stack projects",
    "open source repositories",
    "startup product builds",
  ],
  openGraph: {
    title: "Projects by Muhammad Fiaz",
    description:
      "Explore top-starred and recently updated projects with filters and search.",
    url: `${siteUrl}/project`,
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Muhammad Fiaz Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Muhammad Fiaz",
    description:
      "Explore top-starred and recently updated projects with filters and search.",
    images: ["/android-chrome-512x512.png"],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default async function ProjectPage() {
  const repos = await getGithubRepos();

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Muhammad Fiaz",
    url: `${siteUrl}/project`,
    description: "GitHub repositories and product engineering work.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: repos.map((repo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: repo.html_url,
        item: {
          "@type": "SoftwareSourceCode",
          name: repo.name,
          codeRepository: repo.html_url,
          description: repo.description ?? "No description provided.",
          programmingLanguage: repo.language ?? "Mixed",
          author: {
            "@type": "Person",
            name: "Muhammad Fiaz",
            url: siteUrl,
          },
          publisher: {
            "@type": "Person",
            name: "Muhammad Fiaz",
            url: siteUrl,
          },
          keywords: (repo.topics ?? []).join(", "),
          dateModified: repo.updated_at,
        },
      })),
    },
  };

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
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/project`,
      },
    ],
  };

  return (
    <div className="space-y-6 pb-16">
      <script type="application/ld+json">
        {serializeJsonLd(projectsJsonLd)}
      </script>
      <script type="application/ld+json">
        {serializeJsonLd(breadcrumbJsonLd)}
      </script>
      <section className="border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6 md:p-8">
        <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed sm:text-base">
          Booting shipped products across full stack apps, AI tooling, and
          open-source libraries. Filter by language and search by domain.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">
          Browse Project Index
        </h2>
        <p className="text-sm font-medium leading-relaxed sm:text-base">
          Filter by topic, sort by stars or recency, and open repositories or
          live deployments.
        </p>
      </section>

      <ProjectPageClient initialRepos={repos} />
    </div>
  );
}
