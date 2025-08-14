import { Suspense } from 'react';
import { PostsGrid } from '@/components/sections/posts-grid';
import { PostsHeader } from '@/components/sections/posts-header';
import { PostsSearch } from '@/components/sections/posts-search';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: `Posts | ${siteConfig.siteName}`,
  description: 'Read my latest thoughts on technology, development, and innovation from Hashnode and Medium.',
};

export default function PostsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
        <PostsHeader />
        <PostsSearch />
        <Suspense fallback={<PostsLoading />}>
          <PostsGrid />
        </Suspense>
      </div>
    </div>
  );
}

function PostsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-80 bg-muted/30 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}
