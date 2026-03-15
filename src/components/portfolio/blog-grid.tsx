"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  normalizeTag,
  ResponsiveTagFilter,
} from "@/components/portfolio/responsive-tag-filter";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Input } from "@/components/retroui/Input";
import { usePortfolioPostsQuery } from "@/lib/client/portfolio-queries";
import type { BlogPost } from "@/lib/portfolio-types";
import { useBlogStore } from "@/store/blog-store";

const SOURCES = ["All", "Hashnode", "Dev.to", "Medium"] as const;
const BLOG_SKELETON_KEYS = ["b1", "b2", "b3", "b4", "b5", "b6"] as const;
const BLOG_TAG_SKELETON_KEYS = ["t1", "t2", "t3"] as const;

function BlogSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {BLOG_SKELETON_KEYS.map((key) => (
        <Card
          key={key}
          className="border-4 border-black bg-card p-4 shadow-retro-md"
        >
          <div className="space-y-3 animate-pulse">
            <div className="h-5 w-3/4 border-2 border-black bg-muted" />
            <div className="h-4 w-full border-2 border-black bg-muted" />
            <div className="h-4 w-11/12 border-2 border-black bg-muted" />
            <div className="h-4 w-4/5 border-2 border-black bg-muted" />
            <div className="flex gap-2">
              {BLOG_TAG_SKELETON_KEYS.map((tagKey) => (
                <div
                  key={tagKey}
                  className="h-6 w-16 border-2 border-black bg-muted"
                />
              ))}
            </div>
            <div className="h-10 w-full border-2 border-black bg-muted" />
          </div>
        </Card>
      ))}
    </div>
  );
}

type BlogGridProps = {
  compact?: boolean;
  limit?: number;
  initialPosts?: BlogPost[];
};

export function BlogGrid({
  compact = false,
  limit = 3,
  initialPosts,
}: BlogGridProps) {
  const PAGE_SIZE = 9;
  const {
    data: posts = [],
    isLoading,
    isFetching,
    isError,
  } = usePortfolioPostsQuery(initialPosts);
  const query = useBlogStore((state) => state.query);
  const source = useBlogStore((state) => state.source);
  const selectedTag = useBlogStore((state) => state.selectedTag);
  const sortBy = useBlogStore((state) => state.sortBy);
  const setQuery = useBlogStore((state) => state.setQuery);
  const setSource = useBlogStore((state) => state.setSource);
  const setSelectedTag = useBlogStore((state) => state.setSelectedTag);
  const setSortBy = useBlogStore((state) => state.setSortBy);

  useEffect(() => {
    if (compact) {
      return;
    }

    setSource("All");
    setSelectedTag("All");
  }, [compact, setSelectedTag, setSource]);

  const distinctTags = useMemo(() => {
    const counts = new Map<string, number>();

    for (const tag of posts
      .flatMap((post) => post.tags ?? [])
      .filter(Boolean)) {
      const key = normalizeTag(tag);
      if (!key) {
        continue;
      }

      counts.set(key, (counts.get(key) ?? 0) + 1);
    }

    const normalized = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([key]) => key.toUpperCase());

    return ["All", ...normalized];
  }, [posts]);

  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase();
    const filteredPosts = posts.filter((post) => {
      const bySource = compact
        ? true
        : source === "All" || post.source === source;
      const normalizedTags = post.tags.map((tag) =>
        normalizeTag(tag).toUpperCase(),
      );
      const byTag = compact
        ? true
        : selectedTag === "All" || normalizedTags.includes(selectedTag);
      const haystack =
        `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
      return bySource && byTag && (compact || haystack.includes(text));
    });

    return [...filteredPosts].sort((a, b) => {
      if (compact) return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
      if (sortBy === "oldest")
        return Date.parse(a.publishedAt) - Date.parse(b.publishedAt);
      if (sortBy === "read-desc") return b.readingMinutes - a.readingMinutes;
      if (sortBy === "read-asc") return a.readingMinutes - b.readingMinutes;
      if (sortBy === "title-asc") return a.title.localeCompare(b.title);
      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    });
  }, [posts, query, source, selectedTag, sortBy, compact]);

  const visible = compact ? filtered.slice(0, limit) : filtered;
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (value: string) => {
    setCurrentPage(1);
    setQuery(value);
  };

  const handleSourceChange = (value: (typeof SOURCES)[number]) => {
    setCurrentPage(1);
    setSource(value);
  };

  const handleTagChange = (value: string) => {
    setCurrentPage(1);
    setSelectedTag(value);
  };

  const handleSortChange = (
    value: "newest" | "oldest" | "read-desc" | "read-asc" | "title-asc",
  ) => {
    setCurrentPage(1);
    setSortBy(value);
  };

  const totalPages = compact
    ? 1
    : Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const paginated = compact
    ? visible
    : visible.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <section className="space-y-6">
      {!compact ? (
        <div className="space-y-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <Input
              value={query}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Search by title, tags, article description..."
              className="w-full border-4 border-black bg-card py-3 pl-11 font-bold shadow-retro"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_16rem] xl:items-start">
              <div className="min-w-0">
                <ResponsiveTagFilter
                  tags={distinctTags}
                  selectedTag={selectedTag}
                  onSelect={handleTagChange}
                  maxVisible={5}
                />
              </div>
              <select
                value={sortBy}
                onChange={(event) =>
                  handleSortChange(
                    event.target.value as
                      | "newest"
                      | "oldest"
                      | "read-desc"
                      | "read-asc"
                      | "title-asc",
                  )
                }
                className="h-11 w-full border-4 border-black bg-card px-3 font-black uppercase shadow-retro"
                aria-label="Sort blog posts"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="read-desc">Read Time: High to Low</option>
                <option value="read-asc">Read Time: Low to High</option>
                <option value="title-asc">Title: A-Z</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              {SOURCES.map((item) => (
                <Button
                  key={item}
                  variant={source === item ? "default" : "secondary"}
                  onClick={() => handleSourceChange(item)}
                  className="border-4 border-black shadow-retro-sm uppercase"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {isLoading || isFetching ? <BlogSkeletonGrid /> : null}

      {isError ? (
        <div className="border-4 border-black bg-destructive p-5 font-black uppercase text-destructive-foreground shadow-retro-md">
          Failed to load blog feed right now.
        </div>
      ) : null}

      {!isLoading && !isFetching ? (
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            {paginated.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ delay: index * 0.03 }}
              >
                <Card className="flex h-full w-full flex-col border-4 border-black shadow-retro-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  <Card.Header
                    className={
                      compact ? "min-h-0 flex-1" : "min-h-40 flex-1 sm:min-h-44"
                    }
                  >
                    <Card.Title className="font-display text-xl uppercase">
                      {post.title}
                    </Card.Title>
                    <Card.Description
                      className={
                        compact
                          ? "mt-2 text-sm leading-relaxed line-clamp-3"
                          : "mt-2 text-sm leading-relaxed sm:text-base line-clamp-4"
                      }
                    >
                      {post.excerpt}
                    </Card.Description>
                  </Card.Header>
                  <Card.Content className="mt-auto flex flex-col gap-4 pt-0">
                    <div className="flex items-center justify-between text-xs font-black uppercase">
                      <span>{post.source}</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, compact ? 4 : 8).map((tag) => (
                        <span
                          key={`${post.id}-${tag}`}
                          title={tag}
                          className="retro-badge max-w-full truncate text-[10px] sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > (compact ? 4 : 8) ? (
                        <span className="retro-badge text-[10px] sm:text-xs">
                          +{post.tags.length - (compact ? 4 : 8)}
                        </span>
                      ) : null}
                    </div>
                    <Button
                      asChild
                      className="mt-auto w-full justify-center border-4 border-black shadow-retro-sm uppercase"
                    >
                      <Link
                        href={post.url}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Read Article
                      </Link>
                    </Button>
                  </Card.Content>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      ) : null}

      {!isLoading && !isFetching && visible.length === 0 ? (
        <div className="border-4 border-black bg-muted p-6 text-center font-black uppercase shadow-retro">
          No blog posts found for this filter.
        </div>
      ) : null}

      {!compact && !isLoading && !isFetching && visible.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-2 border-4 border-black bg-card p-3 shadow-retro-sm">
          <Button
            variant="secondary"
            className="border-4 border-black uppercase"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          >
            Prev
          </Button>

          <span className="min-w-28 border-2 border-black bg-muted px-3 py-2 text-center text-xs font-black uppercase">
            Page {currentPage} / {totalPages}
          </span>

          <Button
            variant="secondary"
            className="border-4 border-black uppercase"
            disabled={currentPage >= totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
          >
            Next
          </Button>
        </div>
      ) : null}
    </section>
  );
}
