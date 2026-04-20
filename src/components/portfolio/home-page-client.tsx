"use client";

import { Github, Linkedin, Twitter } from "@/components/retroui/icons";
import Image from "next/image";
import Link from "next/link";
import { BlogGrid } from "@/components/portfolio/blog-grid";
import { GithubOverviewBento } from "@/components/portfolio/github-overview-bento";
import { HackatimeBento } from "@/components/portfolio/hackatime-bento";
import { HeroFloatingBadges } from "@/components/portfolio/hero-floating-badges";
import { HomeDeliveryProcess } from "@/components/portfolio/home-delivery-process";
import { HomeEngagementModel } from "@/components/portfolio/home-engagement-model";
import { HyperNameReveal } from "@/components/portfolio/hyper-name-reveal";
import { MorphScrollShowcase } from "@/components/portfolio/morph-scroll-showcase";
import { ProjectsGrid } from "@/components/portfolio/projects-grid";
import { RetroCodeShowcase } from "@/components/portfolio/retro-code-showcase";
import { RetroTerminalSection } from "@/components/portfolio/retro-terminal-section";
import { StatsMarquee } from "@/components/portfolio/stats-marquee";
import { BentoCard, BentoGrid } from "@/components/retroui/Bento";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { links } from "@/lib/link-items";
import type {
  BlogPost,
  GitHubOverviewPayload,
  GithubRepo,
  HackatimePayload,
} from "@/lib/portfolio-types";
import {
  donationUrl,
  githubUrl,
  linkHubUrl,
  linkedinUrl,
  siteHost,
  sponsorUrl,
  xUrl,
} from "@/lib/site-config";
import { useHomeStore } from "@/store/home-store";

const traits = [
  {
    title: "Business-Driven Builder",
    text: "I design and ship products that improve conversion, retention, and operational efficiency.",
  },
  {
    title: "Developer-First Products",
    text: "I build tools and software experiences that help teams ship faster with better quality.",
  },
  {
    title: "Freelance & Startup Partner",
    text: "From MVP to scale, I work closely with founders to turn product ideas into reliable systems.",
  },
  {
    title: "Full-Stack Execution",
    text: "Frontend, backend, automation, and AI integrations delivered with production-ready standards.",
  },
];

const focusFilters = [
  "All",
  "Product",
  "Open Source",
  "AI",
  "Services",
] as const;

type FaqItem = {
  question: string;
  answer: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const faqItems: readonly FaqItem[] = [
  {
    question: "How long will it take to build my project?",
    answer:
      "Most focused service tasks are delivered in 1-3 days. If I am handling another active release, the schedule may shift slightly, but I always share timelines clearly before we start.",
  },
  {
    question: "How much do you charge?",
    answer:
      "Pricing is based on project scope, required timeline, and delivery complexity. I share a clear estimate after reviewing your goals, requirements, and technical constraints.",
  },
  {
    question: "What stack do you work with?",
    answer:
      "I work across modern frontend, backend, cloud, and deployment stacks, including multiple frameworks, databases, and servers. I adapt the stack to your business needs and team workflow.",
  },
  {
    question: "Do you support after launch?",
    answer:
      "Yes. I provide ongoing support for optimizations, fixes, and feature growth so your product remains stable, fast, and ready to scale.",
  },
  {
    question: "Do you provide AI-powered solutions?",
    answer:
      "Yes. I build AI-powered workflows and product features based on your needs, including automation with n8n, Zapier, API-driven integrations, and custom AI service implementation.",
  },
  {
    question: "How can we contact you?",
    answer:
      "You can contact me directly by email at contact@muhammadfiaz.com or connect on LinkedIn for project and collaboration discussions.",
    ctaHref: "mailto:contact@muhammadfiaz.com",
    ctaLabel: "Email Now",
  },
  {
    question: "Can you work with my existing codebase?",
    answer:
      "Absolutely. I can audit, improve, refactor, and scale existing products without forcing unnecessary rewrites, while keeping delivery fast and safe.",
  },
] as const;

type HomePageClientProps = {
  initialRepos?: GithubRepo[];
  initialPosts?: BlogPost[];
  initialHackatime?: HackatimePayload | null;
  initialGitHubOverview?: GitHubOverviewPayload | null;
};

export function HomePageClient({
  initialRepos,
  initialPosts,
  initialHackatime,
  initialGitHubOverview,
}: HomePageClientProps) {
  const hackatime = initialHackatime ?? null;
  const githubOverview = initialGitHubOverview ?? null;
  const focus = useHomeStore((state) => state.focus);
  const setFocus = useHomeStore((state) => state.setFocus);

  const focusItems = [
    {
      key: "Product",
      title: "Product Engineering Services",
      body: "I plan, build, and ship client-facing products from MVP to scale, turning business goals into stable features that improve conversion, retention, and revenue.",
    },
    {
      key: "Open Source",
      title: "Open Source and Dev Tooling",
      body: "I create reusable components, OSS tools, and technical docs that help teams deliver faster with cleaner standards and lower maintenance cost.",
    },
    {
      key: "AI",
      title: "AI and Automation Delivery",
      body: "I implement AI features and practical automations with n8n, Zapier, APIs, and custom workflows so operations stay fast, scalable, and reliable.",
    },
    {
      key: "Services",
      title: "Maintenance and Support Services",
      body: "I provide ongoing maintenance, monitoring, release support, bug fixing, and feature upgrades so your product stays stable after launch.",
    },
  ] as const;

  const visibleFocusItems =
    focus === "All"
      ? focusItems
      : focusItems.filter((item) => item.key === focus);

  return (
    <div className="-mt-3 space-y-8 pb-16 sm:mt-0 sm:space-y-14">
      <StatsMarquee />

      <section
        className="relative overflow-visible border-4 border-black bg-card shadow-retro-lg"
        data-home-reveal
      >
        <div
          aria-hidden
          className="retro-stripes pointer-events-none absolute inset-0 opacity-20"
        />
        <div className="hidden sm:block">
          <HeroFloatingBadges />
        </div>

        <div className="relative z-10 overflow-hidden border-4 border-black bg-card">
          <div className="flex items-center justify-between border-b-4 border-black bg-[#d7d7d7] px-2 py-2 text-black sm:px-3 dark:bg-[#2f2f2f] dark:text-white">
            <p className="font-pixel text-[11px] font-black sm:text-xs">
              {siteHost}
            </p>
            <div className="flex gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center border-2 border-black bg-[#ffd146] text-[#5c3d00] font-black text-[10px] shadow-retro-sm sm:h-6 sm:w-6 sm:text-xs">
                -
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center border-2 border-black bg-[#52d46b] text-[#0d4f1a] font-black text-[10px] shadow-retro-sm sm:h-6 sm:w-6 sm:text-xs">
                +
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center border-2 border-black bg-[#ff6e6e] text-[#6b1010] font-black text-[10px] shadow-retro-sm sm:h-6 sm:w-6 sm:text-xs">
                x
              </span>
            </div>
          </div>

          <div className="grid gap-4 p-2 sm:gap-6 sm:p-5 md:grid-cols-[1.2fr_0.8fr] md:gap-8 md:p-10">
            <div className="order-2 space-y-4 md:order-1 md:space-y-6">
              <h1 className="font-display uppercase leading-[1.1]">
                <span className="block text-[clamp(0.95rem,6vw,2.5rem)] sm:text-[clamp(1.7rem,5.2vw,3.8rem)]">
                  Hey There! I&apos;M
                </span>
                <span className="mt-1 block text-[clamp(1.05rem,8vw,3rem)] sm:text-[clamp(1.8rem,5.6vw,4.4rem)]">
                  <span className="retro-curve-underline">
                    <HyperNameReveal text="Muhammad Fiaz." />
                  </span>
                </span>
              </h1>
              <p className="max-w-2xl border-l-4 border-black pl-3 text-xs font-medium leading-relaxed sm:pl-4 sm:text-sm md:text-lg">
                I help founders and startups scale their business online through
                developer-first tools, modern software solutions, and full-stack
                product execution built for real growth.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="w-full border-4 border-black px-4 py-2 text-sm font-black uppercase tracking-wide shadow-retro retro-press sm:w-auto sm:px-6 sm:py-3 sm:text-base"
                >
                  <Link href="mailto:contact@muhammadfiaz.com">Contact Me</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="w-full border-4 border-black px-4 py-2 text-sm font-black uppercase tracking-wide shadow-retro retro-press sm:w-auto sm:px-6 sm:py-3 sm:text-base"
                >
                  <Link href="/project">View Projects</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 mx-auto w-full max-w-56 border-4 border-black bg-primary p-2 shadow-retro-md sm:max-w-xs sm:p-3 md:order-2 md:max-w-sm">
              <div className="border-4 border-black bg-card p-0">
                <Image
                  src="https://avatars.githubusercontent.com/u/75434191?v=4"
                  alt="Muhammad Fiaz"
                  width={384}
                  height={384}
                  loading="eager"
                  priority
                  fetchPriority="high"
                  quality={65}
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 320px, 384px"
                  className="block h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-center gap-3">
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="retro-social-icon"
                  aria-label="GitHub profile"
                >
                  <Github className="h-4 w-4" />
                </Link>
                <Link
                  href={xUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="retro-social-icon"
                  aria-label="X profile"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="retro-social-icon"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4" data-home-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          Mission Control
        </h2>
        <BentoGrid>
          <BentoCard className="min-h-48 h-full sm:col-span-1 lg:col-span-2">
            <p className="font-display text-xl uppercase sm:text-2xl">
              Founder, Product and Growth Partner
            </p>
            <p className="mt-3 font-medium leading-relaxed">
              I work with founders, startups, and businesses to design and
              execute digital products, improve UX, and deliver measurable
              business growth through reliable engineering.
            </p>
          </BentoCard>
          <BentoCard className="min-h-48 h-full sm:col-span-1 lg:col-span-2">
            <p className="font-display text-xl uppercase">
              Client Services and Product Delivery
            </p>
            <p className="mt-2 text-sm font-medium">
              From planning to launch, I deliver web apps, product features,
              integrations, and support systems tailored to customer and client
              requirements.
            </p>
          </BentoCard>
          <BentoCard className="min-h-48 h-full sm:col-span-1 lg:col-span-2">
            <p className="font-display text-xl uppercase">
              Adaptive Tech Stack Execution
            </p>
            <p className="mt-2 text-sm font-medium">
              I adapt to your stack and infrastructure needs across frontend,
              backend, cloud, AI, and automation for long-term maintainability.
            </p>
          </BentoCard>
          <BentoCard className="min-h-48 h-full sm:col-span-1 lg:col-span-2">
            <p className="font-display text-xl uppercase">
              Maintenance and Support
            </p>
            <p className="mt-2 text-sm font-medium">
              Post-launch, I handle updates, performance tuning, incident fixes,
              and support workflows so clients get dependable long-term service.
            </p>
          </BentoCard>
          <BentoCard className="min-h-48 h-full sm:col-span-1 lg:col-span-2">
            <p className="font-display text-xl uppercase">
              Performance and UX Optimization
            </p>
            <p className="mt-2 text-sm font-medium">
              I improve speed, accessibility, and user flows with targeted UX
              and performance upgrades that raise engagement and conversion
              quality.
            </p>
          </BentoCard>
          <BentoCard className="min-h-48 h-full sm:col-span-1 lg:col-span-2">
            <p className="font-display text-xl uppercase">
              Launch and Growth Operations
            </p>
            <p className="mt-2 text-sm font-medium">
              I support launch operations, analytics setup, release workflows,
              and post-launch growth execution so your team can scale with
              confidence.
            </p>
          </BentoCard>
        </BentoGrid>
      </section>

      <section className="space-y-4" data-home-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          Core Traits
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {traits.map((trait) => (
            <Card
              key={trait.title}
              className="w-full border-4 border-black bg-card shadow-retro-md retro-press"
            >
              <Card.Header>
                <Card.Title className="font-display text-2xl uppercase">
                  {trait.title}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="font-medium leading-relaxed">{trait.text}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <div data-home-reveal>
        <HomeDeliveryProcess />
      </div>

      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-wrap items-center gap-2">
          {focusFilters.map((item) => (
            <Button
              key={item}
              variant={focus === item ? "default" : "secondary"}
              onClick={() => setFocus(item)}
              className="border-4 border-black shadow-retro-sm uppercase"
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {visibleFocusItems.map((item) => (
            <Card
              key={item.key}
              className="border-4 border-black bg-card shadow-retro-md"
            >
              <Card.Header>
                <Card.Title className="font-display text-xl uppercase">
                  {item.title}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="font-medium leading-relaxed">{item.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <div data-home-reveal>
        <HomeEngagementModel />
      </div>

      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Featured Projects
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full sm:w-auto uppercase"
          >
            <Link href="/project">View All</Link>
          </Button>
        </div>
        <ProjectsGrid compact limit={3} initialRepos={initialRepos} />
      </section>

      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Latest Writing
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full sm:w-auto uppercase"
          >
            <Link href="/blog">View All</Link>
          </Button>
        </div>
        <BlogGrid compact limit={3} initialPosts={initialPosts} />
      </section>

      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Github Stats
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
          >
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Full GitHub Profile
            </Link>
          </Button>
        </div>
        <p className="font-bold uppercase text-muted-foreground">
          Followers, following, stars, forks, watchers, repositories, and GitHub
          activity analytics.
        </p>
        <GithubOverviewBento stats={githubOverview ?? null} />
      </section>

      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Hackatime Insights
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
          >
            <Link
              href="https://hackatime.hackclub.com/@muhammadfiaz"
              target="_blank"
              rel="noreferrer noopener"
            >
              View HackClub Profile
            </Link>
          </Button>
        </div>
        <p className="font-bold uppercase text-muted-foreground">
          Live coding insights from Hack Club for the last 7 days and total
          tracked development time.
        </p>
        <HackatimeBento stats={hackatime ?? null} />
      </section>

      <section className="space-y-4" data-home-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {[
            {
              quote:
                "Shipped our startup MVP in record time with a clean architecture and no drama.",
              by: "Founder, SaaS Startup",
            },
            {
              quote:
                "Strong ownership, fast delivery, and product decisions that improved conversion directly.",
              by: "Product Lead, Global Agency",
            },
            {
              quote:
                "Open-source mindset plus business outcomes. Rare combination.",
              by: "Engineering Manager",
            },
          ].map((item) => (
            <Card
              key={item.by}
              className="flex h-full w-full flex-col border-4 border-black bg-card shadow-retro-md retro-press"
            >
              <Card.Content className="flex h-full min-h-44 flex-col gap-4">
                <p className="text-lg font-bold leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-auto text-sm font-black uppercase text-muted-foreground">
                  {item.by}
                </p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4" data-home-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          Donate & Sponsor
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="w-full border-4 border-black bg-card shadow-retro-md retro-press">
            <Card.Header>
              <Card.Title className="font-display text-2xl uppercase">
                Support via GitHub Sponsors
              </Card.Title>
            </Card.Header>
            <Card.Content className="space-y-4">
              <p className="font-medium">
                Fund open-source work and long-term product experiments through
                GitHub Sponsors.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <Link
                  href={sponsorUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Sponsor on GitHub
                </Link>
              </Button>
            </Card.Content>
          </Card>

          <Card className="w-full border-4 border-black bg-card shadow-retro-md retro-press">
            <Card.Header>
              <Card.Title className="font-display text-2xl uppercase">
                Direct Donation
              </Card.Title>
            </Card.Header>
            <Card.Content className="space-y-4">
              <p className="font-medium">
                If my content, products, or OSS work helped you, you can donate
                directly here.
              </p>
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <Link
                  href={donationUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Donate Now
                </Link>
              </Button>
            </Card.Content>
          </Card>
        </div>
      </section>

      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Connect Hub
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
          >
            <Link
              href={linkHubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Open Link Hub
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.slice(0, 9).map((item) => (
            <Card
              key={item.href}
              className="flex h-full w-full flex-col border-4 border-black bg-card shadow-retro-md retro-press"
            >
              <Card.Header className="min-h-36 flex-1">
                <Card.Title className="font-display text-xl uppercase">
                  {item.name}
                </Card.Title>
                <Card.Description className="mt-2 text-base leading-relaxed">
                  {item.description}
                </Card.Description>
              </Card.Header>
              <Card.Content className="pt-0">
                <Button
                  asChild
                  className="w-full border-4 border-black shadow-retro-sm uppercase"
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Open Link
                  </Link>
                </Button>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4" data-home-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">FAQ</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <Card
              key={item.question}
              className="flex h-full w-full flex-col border-4 border-black bg-card shadow-retro-md retro-press"
            >
              <Card.Header>
                <Card.Title className="font-display text-xl uppercase">
                  {item.question}
                </Card.Title>
              </Card.Header>
              <Card.Content className="flex flex-1 flex-col gap-3">
                <p className="font-medium leading-relaxed">{item.answer}</p>
                {item.ctaHref && item.ctaLabel ? (
                  <Button
                    asChild
                    className="mt-auto w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
                  >
                    <Link href={item.ctaHref}>{item.ctaLabel}</Link>
                  </Button>
                ) : null}
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <div data-home-reveal>
        <MorphScrollShowcase />
      </div>

      <div data-home-reveal>
        <RetroCodeShowcase />
      </div>

      <div data-home-reveal>
        <RetroTerminalSection />
      </div>
    </div>
  );
}
