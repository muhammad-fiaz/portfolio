"use client";

import dynamic from "next/dynamic";
import { RetroContentLoading } from "@/components/portfolio/retro-content-loading";
import type { BlogPost } from "@/lib/portfolio-types";

const BlogGrid = dynamic(
  () => import("@/components/portfolio/blog-grid").then((mod) => mod.BlogGrid),
  {
    ssr: false,
    loading: () => (
      <RetroContentLoading
        title="Blog"
        message="Booting article index, tags, and feed filters..."
      />
    ),
  },
);

type BlogPageClientProps = {
  initialPosts: BlogPost[];
};

export function BlogPageClient({ initialPosts }: BlogPageClientProps) {
  return <BlogGrid initialPosts={initialPosts} />;
}
