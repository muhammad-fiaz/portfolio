import type { Metadata } from "next";
import { AboutPageClient } from "@/components/pages/about-page-client";
import type { TimelineItem } from "@/components/portfolio/about-timeline";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "The journey, roles, and milestones of Muhammad Fiaz.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "about muhammad fiaz",
    "developer journey",
    "open source maintainer",
    "full stack experience",
  ],
  openGraph: {
    title: "About Muhammad Fiaz",
    description:
      "Journey, milestones, and experience across full stack, open source, and AI delivery.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "About Muhammad Fiaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muhammad Fiaz",
    description:
      "Journey, milestones, and experience across full stack, open source, and AI delivery.",
    images: ["/android-chrome-512x512.png"],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const timelineItems: TimelineItem[] = [
  {
    period: "Sep 2025 - Present · 7 mos",
    title: "Founder (Fiaz Technologies · Full-time)",
    description:
      "Building developer-first tools, software solutions, and AI workflows for founders, startups, and growing businesses as a full-time founder.",
    highlights: [
      "Design and deliver product systems focused on business outcomes and user value.",
      "Build AI and automation workflows that reduce manual operations and improve speed.",
      "Support clients with scalable architecture, release workflows, and long-term maintenance.",
    ],
  },
  {
    period: "Dec 2020 - Present · 5 yrs 4 mos",
    title:
      "Open Source Contributor & Maintainer (Open-Source Developer) · GitHub",
    description:
      "Contributing to and maintaining a range of open-source repositories on GitHub, focused on robust tools and practical solutions for the developer community.",
    highlights: [
      "Oversee issue management, perform code reviews, and merge pull requests across active repositories.",
      "Enhance project documentation for clarity, usability, and contributor onboarding.",
      "Maintain high code quality while fostering collaborative development and continuous innovation.",
    ],
  },
  {
    period: "Dec 2024 - Present · 1 yr 4 mos",
    title: "Community Moderator (Dev Source · Full-time)",
    description:
      "Founded Dev Source as a daily initiative to spotlight the best developer tools, frameworks, and open-source resources.",
    highlights: [
      "Research and share high-value tools that help developers ship faster and build smarter.",
      "Create practical content for developers, startups, and engineering teams.",
      "Build a developer-first brand that educates, inspires, and grows a global audience.",
    ],
  },
  {
    period: "Oct 2025 - Nov 2025 · 2 mos",
    title:
      "Open Source Contributor & Project Maintainer (Hacktoberfest · Freelance)",
    description:
      "Contributed as a freelance open-source maintainer during Hacktoberfest 2025 with focus on repository quality and project operations.",
    highlights: [
      "Reviewed pull requests, triaged issues, and maintained coding standards across active projects.",
      "Managed contribution flow and maintainer-level repository governance.",
      "Supported contributors through practical feedback and technical direction.",
    ],
  },
  {
    period: "Apr 2025 - May 2025 · 2 mos",
    title: "AI Intern (Edunet Foundation · Internship)",
    description:
      "Built and deployed machine learning solutions using Azure and worked on real-world GenAI and capstone projects.",
    highlights: [
      "Developed a Generative AI resume scoring system for practical candidate feedback.",
      "Gained hands-on depth in AI concepts, cloud workflows, and data processing.",
      "Collaborated with peers to optimize delivery under real internship constraints.",
    ],
  },
  {
    period: "Oct 2024 - Nov 2024 · 2 mos",
    title:
      "Open Source Developer & Project Maintainer (Hacktoberfest · Freelance)",
    description:
      "Contributed to and maintained multiple open-source projects for Hacktoberfest 2024, including personal and community-focused repositories.",
    highlights: [
      "Established contribution guides, issue templates, and labeling systems for efficient collaboration.",
      "Reviewed and merged pull requests while maintaining project standards and consistency.",
      "Authored and updated technical docs and project wikis to improve contributor experience.",
      "Built open-source tools and utilities for broader developer community use.",
    ],
  },
  {
    period: "Sep 2023 - Oct 2023 · 2 mos",
    title: "Data Science Intern (CodSoft · Internship)",
    description:
      "Worked across applied ML projects including fraud detection, classification, and forecasting using Python tooling.",
    highlights: [
      "Implemented fraud detection, iris classification, and sales prediction workflows.",
      "Performed cleaning, visualization, and feature preparation for model quality.",
      "Used Pandas, NumPy, Matplotlib, and Scikit-learn to build and evaluate models.",
    ],
  },
  {
    period: "Sep 2023 - Oct 2023 · 2 mos",
    title:
      "Open Source Developer & Project Maintainer (Hacktoberfest · Freelance)",
    description:
      "Contributed as a freelance maintainer and technical writer during Hacktoberfest 2023 with strong focus on collaboration and documentation quality.",
    highlights: [
      "Oversaw repository management by reviewing pull requests, triaging issues, and enforcing best practices.",
      "Authored contribution guidelines and onboarding documentation for new contributors.",
      "Collaborated with global developers to maintain an inclusive and productive open-source workflow.",
    ],
  },
];

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Muhammad Fiaz",
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": "Person",
      name: "Muhammad Fiaz",
      url: siteUrl,
      jobTitle: "Founder, Entrepreneur, Full Stack Developer",
    },
  };

  return (
    <>
      <script type="application/ld+json">{serializeJsonLd(aboutJsonLd)}</script>
      <AboutPageClient timelineItems={timelineItems} />
    </>
  );
}
