"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  BlogPost,
  GitHubOverviewPayload,
  GithubRepo,
  WakaTimePayload,
} from "@/lib/portfolio-types";

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return (await response.json()) as T;
}

export type Web3FormsSubmissionValues = {
  name: string;
  email: string;
  country: string;
  phone?: string;
  businessInquiry: string;
  projectDetails: string;
  expectedStartDate?: string;
  expectedEndDate?: string;
};

type Web3FormsResponse = {
  success: boolean;
  message: string;
};

const TWELVE_HOURS_MS = 1000 * 60 * 60 * 12;

const WEB3_FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3_FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

async function submitContactForm(
  values: Web3FormsSubmissionValues,
): Promise<Web3FormsResponse> {
  if (!WEB3_FORMS_ACCESS_KEY) {
    throw new Error(
      "Missing Web3Forms key. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local.",
    );
  }

  const formData = new FormData();
  formData.append("access_key", WEB3_FORMS_ACCESS_KEY);
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("country", values.country);
  formData.append("phone", values.phone?.trim() || "Not provided");
  formData.append("business_inquiry", values.businessInquiry);
  formData.append(
    "expected_start_date",
    values.expectedStartDate || "Not provided",
  );
  formData.append(
    "expected_end_date",
    values.expectedEndDate || "Not provided",
  );
  formData.append(
    "message",
    [
      `Business Inquiry: ${values.businessInquiry}`,
      `Project Details: ${values.projectDetails}`,
      `Country: ${values.country}`,
      `Phone: ${values.phone?.trim() || "Not provided"}`,
      `Expected Start Date: ${values.expectedStartDate || "Not provided"}`,
      `Expected End Date: ${values.expectedEndDate || "Not provided"}`,
    ].join("\n"),
  );
  formData.append("subject", `Portfolio Inquiry: ${values.businessInquiry}`);
  formData.append("from_name", "Muhammad Fiaz Portfolio");

  const response = await fetch(WEB3_FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form.");
  }

  const data = (await response.json()) as Web3FormsResponse;
  if (!data.success) {
    throw new Error(data.message || "Submission failed.");
  }

  return data;
}

export function usePortfolioReposQuery(
  initialData?: GithubRepo[],
  user?: string,
) {
  const suffix = user ? `?user=${encodeURIComponent(user)}` : "";

  return useQuery({
    queryKey: ["portfolio", "repos", user ?? "default"],
    queryFn: () => fetchJson<GithubRepo[]>(`/api/portfolio/repos${suffix}`),
    staleTime: TWELVE_HOURS_MS,
    refetchOnMount: false,
    refetchOnReconnect: false,
    initialData,
  });
}

export function usePortfolioPostsQuery(initialData?: BlogPost[]) {
  return useQuery({
    queryKey: ["portfolio", "posts"],
    queryFn: () => fetchJson<BlogPost[]>("/api/portfolio/posts"),
    staleTime: TWELVE_HOURS_MS,
    refetchOnMount: false,
    refetchOnReconnect: false,
    initialData,
  });
}

export function usePortfolioWakaTimeQuery(
  initialData?: WakaTimePayload | null,
) {
  return useQuery({
    queryKey: ["portfolio", "wakatime"],
    queryFn: () => fetchJson<WakaTimePayload | null>("/api/portfolio/wakatime"),
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
  const suffix = user ? `?user=${encodeURIComponent(user)}` : "";

  return useQuery({
    queryKey: ["portfolio", "github-overview", user ?? "default"],
    queryFn: () =>
      fetchJson<GitHubOverviewPayload | null>(
        `/api/portfolio/github-overview${suffix}`,
      ),
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
