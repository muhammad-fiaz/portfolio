"use client";

import { BlogGrid } from "@/components/portfolio/blog-grid";
import type { BlogPost } from "@/lib/portfolio-types";

type BlogPageClientProps = {
  initialPosts: BlogPost[];
};

export function BlogPageClient({ initialPosts }: BlogPageClientProps) {
  return <BlogGrid initialPosts={initialPosts} />;
}
