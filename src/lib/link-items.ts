export interface LinkItem {
  href: string;
  name: string;
  description: string;
}

export const links: LinkItem[] = [
  {
    href: "https://github.com/muhammad-fiaz",
    name: "GitHub",
    description: "Open source projects and contributions",
  },
  {
    href: "https://www.linkedin.com/in/muhammad-fiaz-",
    name: "LinkedIn",
    description: "Connect with me professionally",
  },
  {
    href:
      process.env.NEXT_PUBLIC_CODING_STATS_PROVIDER === "hackatime"
        ? "https://heatmap.shymike.dev/?id=30609&timezone=UTC"
        : "https://wakatime.com/@muhammadfiaz",
    name:
      process.env.NEXT_PUBLIC_CODING_STATS_PROVIDER === "hackatime"
        ? "Hackatime Activity"
        : "Wakatime Activity",
    description: "Check my coding activity",
  },
  {
    href: "https://muhammadfiaz.com",
    name: "Portfolio",
    description: "Visit my main website",
  },
  {
    href: "https://x.com/muhammadfiaz_",
    name: "X (Twitter)",
    description: "Follow me for updates",
  },
  {
    href: "https://www.instagram.com/muhammadfiaz.dev",
    name: "Instagram",
    description: "Follow my journey on Instagram",
  },
  {
    href: "https://www.youtube.com/@muhammad_fiaz",
    name: "YouTube",
    description: "Subscribe to my channel for tech content",
  },
  {
    href: "https://dribbble.com/muhammadfiaz",
    name: "Dribbble",
    description: "My design work and shots",
  },
  {
    href: "mailto:contact@muhammadfiaz.com",
    name: "Contact Me",
    description: "Get in touch via email",
  },
  {
    href: "https://orcid.org/0009-0001-5935-7878",
    name: "ORCID",
    description: "My ORCID researcher profile",
  },
  {
    href: "https://dly.to/LQm0vGkFCsi",
    name: "daily.dev Community",
    description: "AI tools, resources, and developer updates",
  },
  {
    href: "https://app.daily.dev/muhammadfiaz",
    name: "daily.dev Profile",
    description: "My daily.dev developer profile",
  },
  {
    href: "https://fiaztechnologies.github.io",
    name: "Fiaz Technologies",
    description: "Developer-first next-generation solutions",
  },
];
