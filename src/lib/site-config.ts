const DEFAULT_SITE_URL = "https://muhammadfiaz.com";

function normalizeSiteUrl(rawUrl: string): string {
  const normalized = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

  try {
    const parsed = new URL(normalized);
    parsed.pathname = "/";
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL,
);

export const siteHost = new URL(`${siteUrl}/`).host;

export const fiazDevUrl = "https://fiaz.dev";
export const linkHubUrl = "https://links.muhammadfiaz.com";
export const githubUrl = "https://github.com/muhammad-fiaz";
export const linkedinUrl = "https://www.linkedin.com/in/muhammad-fiaz-";
export const xUrl = "https://x.com/muhammadfiaz_";
export const wakatimeUrl = "https://wakatime.com/@muhammadfiaz";
export const sponsorUrl = "https://github.com/sponsors/muhammad-fiaz/";
export const donationUrl = "https://pay.muhammadfiaz.com/";
export const ogImageUrl = `${siteUrl}/opengraph-image`;
