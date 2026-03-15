export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  source: "Hashnode" | "Dev.to" | "Medium";
  tags: string[];
  publishedAt: string;
  readingMinutes: number;
}

export interface WakaTimePayload {
  totalHours: string;
  dailyAverage: string;
  topLanguages: Array<{ name: string; hours: number }>;
  last7Days: Array<{ day: string; hours: number }>;
  hasActivity: boolean;
}

export interface GitHubOverviewPayload {
  username: string;
  commitYear: number;
  commitRangeStart: string;
  commitRangeEnd: string;
  followers: number;
  following: number;
  publicRepos: number;
  totalRepositories: number;
  totalStars: number;
  totalForks: number;
  totalWatchers: number;
  topRepositories: Array<{ name: string; stars: number }>;
  languages: Array<{ language: string; repos: number }>;
  monthlyActivity: Array<{ month: string; repos: number }>;
  updateDates: string[];
  commitHistory: Array<{ date: string; commits: number }>;
}
