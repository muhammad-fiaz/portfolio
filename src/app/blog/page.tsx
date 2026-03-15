import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogPageClient } from "@/components/pages/blog-page-client";
import { getBlogPosts } from "@/lib/server/portfolio-data";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Aggregated blog posts from Hashnode, Dev.to, and Medium via SSR.",
  alternates: {
    canonical: "/blog",
  },
  keywords: [
    "developer blog",
    "engineering articles",
    "next.js articles",
    "open source writing",
  ],
  openGraph: {
    title: "Blog by Muhammad Fiaz",
    description:
      "Engineering, product, and open-source articles aggregated from multiple platforms.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Muhammad Fiaz Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog by Muhammad Fiaz",
    description:
      "Engineering, product, and open-source articles aggregated from multiple platforms.",
    images: ["/android-chrome-512x512.png"],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    url: `${siteUrl}/blog`,
    description:
      "Developer writing across product engineering and open source.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: post.url,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
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
          keywords: post.tags.join(", "),
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
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
    ],
  };

  return (
    <div className="space-y-6 pb-16">
      <script type="application/ld+json">{serializeJsonLd(blogJsonLd)}</script>
      <script type="application/ld+json">
        {serializeJsonLd(breadcrumbJsonLd)}
      </script>
      <section className="border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6 md:p-8">
        <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
          Blog
        </h1>
        <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed sm:text-base">
          Debug logs from product engineering, full stack architecture,
          open-source, and practical AI experiments.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">
          Browse Writing Index
        </h2>
        <p className="text-sm font-medium leading-relaxed sm:text-base">
          Search by topic, filter by source and tag, then sort by publish date
          or reading time.
        </p>
      </section>

      <Suspense fallback={null}>
        <BlogPageClient initialPosts={posts} />
      </Suspense>
    </div>
  );
}
