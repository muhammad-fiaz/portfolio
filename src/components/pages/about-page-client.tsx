"use client";

import { animate } from "animejs";
import { Github, Linkedin, Twitter } from "@/components/retroui/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  AboutTimeline,
  type TimelineItem,
} from "@/components/portfolio/about-timeline";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";

type AboutPageClientProps = {
  timelineItems: TimelineItem[];
};

export function AboutPageClient({ timelineItems }: AboutPageClientProps) {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = aboutRef.current;
    if (!root) {
      return;
    }

    const revealTargets = root.querySelectorAll("[data-about-reveal]");
    const dnaTargets = root.querySelectorAll("[data-about-dna]");
    const principleTargets = root.querySelectorAll("[data-about-principle]");

    animate(revealTargets, {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: (_, index) => index * 70,
      duration: 320,
      ease: "outQuad",
    });

    animate(dnaTargets, {
      opacity: [0, 1],
      translateY: [14, 0],
      delay: (_, index) => 180 + index * 50,
      duration: 280,
      ease: "outQuad",
    });

    animate(principleTargets, {
      opacity: [0, 1],
      translateY: [14, 0],
      delay: (_, index) => 320 + index * 50,
      duration: 280,
      ease: "outQuad",
    });
  }, []);

  return (
    <div ref={aboutRef} className="space-y-8 pb-16">
      <section
        className="border-4 border-black bg-card p-6 shadow-retro-lg md:p-8"
        data-about-reveal
      >
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="mx-auto w-full max-w-xs border-4 border-black bg-primary p-3 shadow-retro-md">
            <div className="border-4 border-black bg-card p-0">
              <Image
                src="https://avatars.githubusercontent.com/u/75434191?v=4"
                alt="Muhammad Fiaz"
                width={420}
                height={420}
                className="block h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-center gap-3">
              <Link
                href="https://github.com/muhammad-fiaz"
                target="_blank"
                rel="noreferrer noopener"
                className="retro-social-icon"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com/muhammadfiaz_"
                target="_blank"
                rel="noreferrer noopener"
                className="retro-social-icon"
                aria-label="X profile"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-fiaz-"
                target="_blank"
                rel="noreferrer noopener"
                className="retro-social-icon"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
              About
            </h1>
            <div className="mt-5 space-y-4 text-sm font-medium leading-relaxed sm:text-base md:text-lg">
              <p>
                Hey there, I&apos;m Muhammad Fiaz, a self-taught full stack
                developer, founder, entrepreneur, freelancer, and open-source
                builder. I have been coding since childhood, and that early
                curiosity became a long-term focus on building useful products
                that solve real business problems.
              </p>
              <p>
                I help startups and businesses scale with developer-first tools,
                robust product systems, and practical architecture that stays
                reliable, maintainable, and outcome-driven as teams grow.
              </p>
              <p>
                I work across frontend, backend, and automation layers, explore
                AI and machine learning in production-focused use cases, and
                ship in public because measurable progress matters more than
                hidden drafts.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
              >
                <Link href="/project">Explore Projects</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
              >
                <Link href="mailto:contact@muhammadfiaz.com">
                  Business Inquiries
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4" data-about-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          Execution Snapshot
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Product Engineering",
              detail:
                "Deliver end-to-end product execution from architecture to launch without sacrificing code quality.",
            },
            {
              title: "AI Automation",
              detail:
                "Design and implement practical AI workflows that reduce repetitive operations and speed up teams.",
            },
            {
              title: "Client Delivery",
              detail:
                "Translate goals into milestones, clear communication, and measurable outcomes with reliable iteration.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="border-4 border-black bg-secondary shadow-retro-md"
              data-about-principle
            >
              <Card.Header>
                <Card.Title className="font-display text-2xl uppercase text-secondary-foreground">
                  {item.title}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="font-medium leading-relaxed text-secondary-foreground">
                  {item.detail}
                </p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4" data-about-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          Developer DNA
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            "Builder at heart: I design developer-first tools and reliable software systems that scale with confidence.",
            "AI focused: I use ML and AI where they create practical value, not presentation-only hype.",
            "Collaboration ready: open-source is my default mode and teamwork is my multiplier.",
            "Tech versatile: I work with Python, JavaScript, Rust, and the stack your roadmap needs next.",
          ].map((point) => (
            <Card
              key={point}
              className="border-4 border-black bg-card shadow-retro-md"
              data-about-dna
            >
              <Card.Content>
                <p className="font-medium leading-relaxed">{point}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4" data-about-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          How I Work
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            "Start with clarity: define outcomes, constraints, and technical trade-offs early.",
            "Build iteratively: ship in small reliable increments with measurable progress.",
            "Document and transfer: leave systems maintainable so teams can move fast after handoff.",
          ].map((item) => (
            <Card
              key={item}
              className="border-4 border-black bg-card shadow-retro-md"
              data-about-principle
            >
              <Card.Content>
                <p className="font-medium leading-relaxed">{item}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="border-4 border-black bg-primary p-6 shadow-retro-lg md:p-8"
        data-about-reveal
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase text-primary-foreground sm:text-4xl">
            Experience Journey
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
          >
            <Link
              href="https://fiaz.dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              View Fiaz Technologies Journey
            </Link>
          </Button>
        </div>
        <AboutTimeline items={timelineItems} />
      </section>
    </div>
  );
}
