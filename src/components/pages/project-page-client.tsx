"use client";

import dynamic from "next/dynamic";
import { RetroContentLoading } from "@/components/portfolio/retro-content-loading";
import type { GithubRepo } from "@/lib/portfolio-types";

const ProjectsGrid = dynamic(
  () =>
    import("@/components/portfolio/projects-grid").then(
      (mod) => mod.ProjectsGrid,
    ),
  {
    ssr: false,
    loading: () => (
      <RetroContentLoading
        title="Projects"
        message="Loading repositories, topics, and delivery metrics..."
      />
    ),
  },
);

type ProjectPageClientProps = {
  initialRepos: GithubRepo[];
};

export function ProjectPageClient({ initialRepos }: ProjectPageClientProps) {
  return <ProjectsGrid initialRepos={initialRepos} />;
}
