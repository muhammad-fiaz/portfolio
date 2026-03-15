import "server-only";
import type {
  BlogPost,
  GitHubOverviewPayload,
  GithubRepo,
  WakaTimePayload,
} from "@/lib/portfolio-types";

const DEFAULT_GITHUB_USER =
  process.env.GITHUB_USER ??
  process.env.NEXT_PUBLIC_GITHUB_USER ??
  "muhammad-fiaz";
const DEVTO_USER = "muhammadfiaz";
const HASHNODE_HOST = "muhammadfiaz.hashnode.dev";
const GITHUB_CACHE_REVALIDATE_SECONDS = 60 * 60 * 12;

function resolveGithubUser(user?: string): string {
  const normalized = (user ?? DEFAULT_GITHUB_USER).trim();
  const isValid = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(normalized);
  return isValid ? normalized : DEFAULT_GITHUB_USER;
}

function getGithubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function getAuthenticatedGithubLogin(
  headers: HeadersInit,
): Promise<string | null> {
  if (!process.env.GITHUB_TOKEN) {
    return null;
  }

  const response = await fetch("https://api.github.com/user", {
    headers,
    cache: "force-cache",
    next: {
      revalidate: GITHUB_CACHE_REVALIDATE_SECONDS,
      tags: ["github-auth-user"],
    },
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { login?: string };
  return payload.login?.trim() || null;
}

function toHours(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, value / 3600);
}

export async function getGithubRepos(user?: string): Promise<GithubRepo[]> {
  const username = resolveGithubUser(user);
  const headers = getGithubHeaders();
  const authenticatedLogin = await getAuthenticatedGithubLogin(headers);
  const canReadOwnerPrivateRepos =
    authenticatedLogin?.toLowerCase() === username.toLowerCase();

  const allRepos: GithubRepo[] = [];

  for (let page = 1; page <= 10; page += 1) {
    const endpoint = canReadOwnerPrivateRepos
      ? `https://api.github.com/user/repos?visibility=all&affiliation=owner&sort=updated&per_page=100&page=${page}`
      : `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner&page=${page}`;

    const response = await fetch(endpoint, {
      headers,
      cache: "force-cache",
      next: {
        revalidate: GITHUB_CACHE_REVALIDATE_SECONDS,
        tags: [`github-repos-${username}`, `github-repos-${username}-p${page}`],
      },
    });

    if (!response.ok) {
      break;
    }

    const pageRepos = (await response.json()) as GithubRepo[];
    allRepos.push(...pageRepos);

    if (pageRepos.length < 100) {
      break;
    }
  }

  const dedupedById = new Map<number, GithubRepo>();
  for (const repo of allRepos) {
    dedupedById.set(repo.id, repo);
  }

  return Array.from(dedupedById.values()).filter(
    (repo) => !repo.name.startsWith("."),
  );
}

export async function getGithubOverview(
  githubUser?: string,
): Promise<GitHubOverviewPayload | null> {
  const username = resolveGithubUser(githubUser);
  const repos = await getGithubRepos(username);
  if (repos.length === 0) {
    return null;
  }

  const headers = getGithubHeaders();
  const authenticatedLogin = await getAuthenticatedGithubLogin(headers);
  const canReadOwnerPrivateRepos =
    authenticatedLogin?.toLowerCase() === username.toLowerCase();

  const userResponse = await fetch(
    canReadOwnerPrivateRepos
      ? "https://api.github.com/user"
      : `https://api.github.com/users/${username}`,
    {
      headers,
      cache: "force-cache",
      next: {
        revalidate: GITHUB_CACHE_REVALIDATE_SECONDS,
        tags: [`github-profile-${username}`],
      },
    },
  );

  const profile = userResponse.ok
    ? ((await userResponse.json()) as {
        login?: string;
        followers?: number;
        following?: number;
        public_repos?: number;
        total_private_repos?: number;
        owned_private_repos?: number;
      })
    : {};

  const responseDateHeader = userResponse.headers.get("date");
  const referenceDate = new Date(
    responseDateHeader ?? repos[0]?.updated_at ?? "1970-01-01T00:00:00Z",
  );
  const rangeEndDate = Number.isNaN(referenceDate.getTime())
    ? new Date("1970-01-01T00:00:00Z")
    : new Date(referenceDate);
  const commitYear = rangeEndDate.getUTCFullYear();
  rangeEndDate.setUTCHours(23, 59, 59, 999);
  const rangeStartDate = new Date(rangeEndDate);
  rangeStartDate.setUTCDate(rangeStartDate.getUTCDate() - 364);
  rangeStartDate.setUTCHours(0, 0, 0, 0);
  const rangeStart = rangeStartDate.toISOString();
  const rangeEnd = rangeEndDate.toISOString();
  let commitHistory: Array<{ date: string; commits: number }> = [];

  // Focus stats/charts on active owned projects.
  const projectRepos = repos.filter((repo) => !repo.fork && !repo.archived);

  // Use GraphQL contribution calendar when token is available for accurate yearly commits.
  if (process.env.GITHUB_TOKEN) {
    const contributionResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $login) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          login: username,
          from: rangeStart,
          to: rangeEnd,
        },
      }),
      cache: "force-cache",
      next: {
        revalidate: GITHUB_CACHE_REVALIDATE_SECONDS,
        tags: [`github-contributions-${username}-${commitYear}`],
      },
    });

    if (contributionResponse.ok) {
      const payload = (await contributionResponse.json()) as {
        data?: {
          user?: {
            contributionsCollection?: {
              contributionCalendar?: {
                weeks?: Array<{
                  contributionDays?: Array<{
                    date: string;
                    contributionCount: number;
                  }>;
                }>;
              };
            };
          };
        };
      };

      const days =
        payload.data?.user?.contributionsCollection?.contributionCalendar?.weeks
          ?.flatMap((week) => week.contributionDays ?? [])
          .filter((day) => typeof day.date === "string") ?? [];

      commitHistory = days.map((day) => ({
        date: day.date,
        commits: day.contributionCount,
      }));
    }
  }

  const totalStars = projectRepos.reduce(
    (sum, repo) => sum + (repo.stargazers_count ?? 0),
    0,
  );
  const totalForks = projectRepos.reduce(
    (sum, repo) => sum + (repo.forks_count ?? 0),
    0,
  );
  const totalWatchers = projectRepos.reduce(
    (sum, repo) => sum + (repo.watchers_count ?? 0),
    0,
  );

  const topRepositories = [...projectRepos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 7)
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
    }));

  const languageMap = new Map<string, number>();
  for (const repo of projectRepos) {
    const language = repo.language?.trim();
    if (!language) {
      continue;
    }

    const value = languageMap.get(language) ?? 0;
    languageMap.set(language, value + 1);
  }

  const languages = Array.from(languageMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([language, count]) => ({
      language,
      repos: count,
    }));

  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthlyMap = new Map<string, number>();

  for (const day of commitHistory) {
    const date = new Date(day.date);
    if (Number.isNaN(date.getTime())) {
      continue;
    }

    const month = monthOrder[date.getUTCMonth()] ?? "Unknown";
    monthlyMap.set(month, (monthlyMap.get(month) ?? 0) + day.commits);
  }

  const monthlyActivity = monthOrder
    .filter((month) => monthlyMap.has(month))
    .map((month) => ({
      month,
      repos: monthlyMap.get(month) ?? 0,
    }));

  const updateDates = commitHistory.flatMap((entry) =>
    Array.from({ length: Math.max(0, entry.commits) }, () => entry.date),
  );

  const publicRepoCount = profile.public_repos ?? projectRepos.length;
  const privateRepoCount = canReadOwnerPrivateRepos
    ? (profile.owned_private_repos ?? profile.total_private_repos ?? 0)
    : 0;
  const profileTotalRepoCount = publicRepoCount + privateRepoCount;
  const totalRepositories = Math.max(
    profileTotalRepoCount,
    projectRepos.length,
  );

  return {
    username: profile.login ?? username,
    commitYear,
    commitRangeStart: rangeStart,
    commitRangeEnd: rangeEnd,
    followers: profile.followers ?? 0,
    following: profile.following ?? 0,
    publicRepos: publicRepoCount,
    totalRepositories,
    totalStars,
    totalForks,
    totalWatchers,
    topRepositories,
    languages,
    monthlyActivity,
    updateDates,
    commitHistory,
  };
}

async function fetchHashnodePosts(): Promise<BlogPost[]> {
  const query = `
    query PublicationPosts($host: String!) {
      publication(host: $host) {
        posts(first: 50) {
          edges {
            node {
              id
              title
              brief
              url
              publishedAt
              readTimeInMinutes
              tags {
                name
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { host: HASHNODE_HOST } }),
    cache: "force-cache",
    next: { revalidate: 3600, tags: ["blogs", "hashnode"] },
  });

  if (!response.ok) return [];

  const payload = (await response.json()) as {
    data?: {
      publication?: {
        posts?: {
          edges?: Array<{
            node: {
              id: string;
              title: string;
              brief: string;
              url: string;
              publishedAt: string;
              readTimeInMinutes: number;
              tags: Array<{ name: string }>;
            };
          }>;
        };
      };
    };
  };

  const edges = payload.data?.publication?.posts?.edges ?? [];
  return edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    excerpt: node.brief,
    url: node.url,
    source: "Hashnode",
    tags: node.tags.map((tag) => tag.name),
    publishedAt: node.publishedAt,
    readingMinutes: node.readTimeInMinutes,
  }));
}

async function fetchDevToPosts(): Promise<BlogPost[]> {
  const response = await fetch(
    `https://dev.to/api/articles?username=${DEVTO_USER}&per_page=100`,
    {
      cache: "force-cache",
      next: { revalidate: 3600, tags: ["blogs", "devto"] },
    },
  );

  if (!response.ok) return [];

  const payload = (await response.json()) as Array<{
    id: number;
    title: string;
    description: string;
    url: string;
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
  }>;

  return payload.map((post) => ({
    id: `devto-${post.id}`,
    title: post.title,
    excerpt: post.description,
    url: post.url,
    source: "Dev.to",
    tags: post.tag_list,
    publishedAt: post.published_at,
    readingMinutes: post.reading_time_minutes,
  }));
}

async function fetchMediumPosts(): Promise<BlogPost[]> {
  return [];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const [hashnode, devto, medium] = await Promise.all([
    fetchHashnodePosts(),
    fetchDevToPosts(),
    fetchMediumPosts(),
  ]);

  return [...hashnode, ...devto, ...medium].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
  );
}

export async function getWakaTimeStats(): Promise<WakaTimePayload | null> {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) return null;

  const [summariesResponse, sevenDayResponse, allTimeResponse] =
    await Promise.all([
      fetch(
        `https://api.wakatime.com/api/v1/users/current/summaries?range=last_7_days&api_key=${apiKey}`,
        {
          cache: "force-cache",
          next: { revalidate: 1800, tags: ["wakatime", "wakatime-summaries"] },
        },
      ),
      fetch(
        `https://api.wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${apiKey}`,
        {
          cache: "force-cache",
          next: { revalidate: 1800, tags: ["wakatime", "wakatime-seven-days"] },
        },
      ),
      fetch(
        `https://api.wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`,
        {
          cache: "force-cache",
          next: { revalidate: 1800, tags: ["wakatime", "wakatime-total"] },
        },
      ),
    ]);

  if (!allTimeResponse.ok || (!summariesResponse.ok && !sevenDayResponse.ok)) {
    return null;
  }

  const summaries = summariesResponse.ok
    ? ((await summariesResponse.json()) as {
        data?: Array<{
          range?: { date?: string };
          grand_total?: { total_seconds?: number };
          languages?: Array<{ name: string; total_seconds: number }>;
        }>;
      })
    : { data: [] };

  const sevenDay = sevenDayResponse.ok
    ? ((await sevenDayResponse.json()) as {
        data?: {
          human_readable_daily_average_including_other_language?: string;
          human_readable_total_including_other_language?: string;
          languages?: Array<{ name: string; total_seconds: number }>;
          days?: Array<{
            date: string;
            grand_total: {
              total_seconds: number;
            };
          }>;
        };
      })
    : { data: {} };

  const allTime = (await allTimeResponse.json()) as {
    data?: {
      total_seconds: number;
      text?: string;
    };
  };

  const summaryDays = summaries.data ?? [];
  const daysFromSummaries = summaryDays.map((entry) => ({
    day: new Date(entry.range?.date ?? "1970-01-01").toLocaleDateString(
      "en-US",
      {
        weekday: "short",
      },
    ),
    hours: Number(toHours(entry.grand_total?.total_seconds ?? 0).toFixed(2)),
  }));

  const daysFromStats = (sevenDay.data?.days ?? []).map((day) => ({
    day: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
    hours: Number(toHours(day.grand_total?.total_seconds ?? 0).toFixed(2)),
  }));

  const last7Days =
    daysFromSummaries.length > 0 ? daysFromSummaries : daysFromStats;

  const languageAccumulator = new Map<string, number>();
  for (const entry of summaryDays) {
    for (const language of entry.languages ?? []) {
      const existing = languageAccumulator.get(language.name) ?? 0;
      languageAccumulator.set(
        language.name,
        existing + (language.total_seconds ?? 0),
      );
    }
  }

  const topLanguagesFromSummaries = Array.from(languageAccumulator.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, seconds]) => ({
      name,
      hours: Number(toHours(seconds).toFixed(1)),
    }));

  const topLanguagesFromStats = (sevenDay.data?.languages ?? [])
    .slice(0, 5)
    .map((lang) => ({
      name: lang.name,
      hours: Number(toHours(lang.total_seconds).toFixed(1)),
    }));

  const topLanguages =
    topLanguagesFromSummaries.length > 0
      ? topLanguagesFromSummaries
      : topLanguagesFromStats;

  const totalSeconds = allTime.data?.total_seconds ?? 0;
  const totalHours = `${toHours(totalSeconds).toFixed(1)}h`;
  const hasActivity =
    last7Days.some((day) => day.hours > 0) ||
    topLanguages.some((language) => language.hours > 0);

  return {
    totalHours,
    dailyAverage:
      sevenDay.data?.human_readable_daily_average_including_other_language ??
      "0 hrs 0 mins",
    topLanguages,
    last7Days,
    hasActivity,
  };
}
