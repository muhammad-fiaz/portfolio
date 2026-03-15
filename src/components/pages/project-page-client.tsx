"use client";

import { ProjectsGrid } from "@/components/portfolio/projects-grid";
import type { GithubRepo } from "@/lib/portfolio-types";

type ProjectPageClientProps = {
  initialRepos: GithubRepo[];
};

export function ProjectPageClient({ initialRepos }: ProjectPageClientProps) {
  return <ProjectsGrid initialRepos={initialRepos} />;
}
