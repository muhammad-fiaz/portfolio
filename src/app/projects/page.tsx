import { Suspense } from 'react';
import { ProjectsGrid } from '@/components/sections/projects-grid';
import { ProjectsHeader } from '@/components/sections/projects-header';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: `Projects | ${siteConfig.siteName}`,
  description: 'Explore my latest projects, open source contributions, and technical experiments.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
        <ProjectsHeader />
        <Suspense fallback={<ProjectsLoading />}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </div>
  );
}

function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-64 bg-muted/30 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}
