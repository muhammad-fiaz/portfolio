"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  BlogPost,
  GitHubOverviewPayload,
  GithubRepo,
  HackatimePayload,
  Web3FormsSubmissionValues,
} from "@/lib/portfolio-types";
import { submitContactAction } from "@/lib/server/contact-actions";

export type { Web3FormsSubmissionValues };

const TWELVE_HOURS_MS = 1000 * 60 * 60 * 12;

async function submitContactForm(values: Web3FormsSubmissionValues) {
  return submitContactAction(values);
}

export function usePortfolioReposQuery(
  initialData?: GithubRepo[],
  user?: string,
) {
  return useQuery({
    queryKey: ["portfolio", "repos", user ?? "default"],
    queryFn: async (): Promise<GithubRepo[]> => {
      const url = user
        ? `/api/portfolio/repos?user=${user}`
        : "/api/portfolio/repos";
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch repos");
      return res.json() as Promise<GithubRepo[]>;
    },
    staleTime: TWELVE_HOURS_MS,
    refetchOnMount: false,
    refetchOnReconnect: false,
    initialData,
  });
}

export function usePortfolioPostsQuery(initialData?: BlogPost[]) {
  return useQuery({
    queryKey: ["portfolio", "posts"],
    queryFn: async (): Promise<BlogPost[]> => {
      const res = await fetch("/api/portfolio/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json() as Promise<BlogPost[]>;
    },
    staleTime: TWELVE_HOURS_MS,
    refetchOnMount: false,
    refetchOnReconnect: false,
    initialData,
  });
}

export function usePortfolioHackatimeQuery(
  initialData?: HackatimePayload | null,
) {
  return useQuery({
    queryKey: ["portfolio", "hackatime"],
    queryFn: async (): Promise<HackatimePayload | null> => {
      const res = await fetch("/api/portfolio/stats");
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json() as Promise<HackatimePayload | null>;
    },
    staleTime: TWELVE_HOURS_MS,
    refetchOnMount: false,
    refetchOnReconnect: false,
    initialData,
  });
}

export function usePortfolioGitHubOverviewQuery(
  initialData?: GitHubOverviewPayload | null,
  user?: string,
) {
  return useQuery({
    queryKey: ["portfolio", "github-overview", user ?? "default"],
    queryFn: async (): Promise<GitHubOverviewPayload | null> => {
      const url = user
        ? `/api/portfolio/github-overview?user=${user}`
        : "/api/portfolio/github-overview";
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch github overview");
      return res.json() as Promise<GitHubOverviewPayload | null>;
    },
    staleTime: TWELVE_HOURS_MS,
    refetchOnMount: false,
    refetchOnReconnect: false,
    initialData,
  });
}

export function useContactSubmissionMutation() {
  return useMutation({
    mutationKey: ["portfolio", "contact-submit"],
    mutationFn: submitContactForm,
  });
}
