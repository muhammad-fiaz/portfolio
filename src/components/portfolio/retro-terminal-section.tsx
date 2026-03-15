"use client";

import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/retroui/Card";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/retroui/terminal";

const stepLines: Array<{
  kind: "type" | "line";
  text: string;
  className?: string;
}> = [
  { kind: "type", text: "C:\\ops> terminal.exe", className: "text-[#64cbff]" },
  {
    kind: "line",
    text: "# Launching deployment shell for production workflow.",
    className: "text-[#ffc96b]",
  },
  {
    kind: "type",
    text: "$ ssh deploy@prod-node-01",
    className: "text-[#64cbff]",
  },
  {
    kind: "line",
    text: "✔ Connected to production host.",
    className: "text-[#84ff6f]",
  },
  {
    kind: "line",
    text: "# Checking env vars, secrets mount, and release version tag.",
    className: "text-[#ffc96b]",
  },
  {
    kind: "type",
    text: "$ sudo nano /etc/nginx/sites-available/portfolio.conf",
    className: "text-[#64cbff]",
  },
  {
    kind: "line",
    text: "# Updated reverse-proxy rules for app and API routes.",
    className: "text-[#ffc96b]",
  },
  {
    kind: "line",
    text: "# Enabled gzip and basic caching headers for static assets.",
    className: "text-[#ffc96b]",
  },
  { kind: "type", text: "$ sudo nginx -t", className: "text-[#64cbff]" },
  {
    kind: "line",
    text: "✔ nginx config syntax is valid and clean.",
    className: "text-[#84ff6f]",
  },
  {
    kind: "line",
    text: "# Running pre-deploy smoke checks before restart.",
    className: "text-[#ffc96b]",
  },
  {
    kind: "type",
    text: "$ bun run build ; pm2 restart portfolio-app",
    className: "text-[#64cbff]",
  },
  {
    kind: "line",
    text: "✔ Build passed. Zero red flags.",
    className: "text-[#84ff6f]",
  },
  {
    kind: "line",
    text: "✔ Health checks green across routes and API.",
    className: "text-[#84ff6f]",
  },
  {
    kind: "line",
    text: "# Verifying CDN cache, SSL cert, and fallback routes.",
    className: "text-[#ffc96b]",
  },
  {
    kind: "line",
    text: "ℹ modules live: home.hero, github.graphs, project.filters, blog.filters",
    className: "text-[#64cbff]",
  },
  {
    kind: "line",
    text: "# Release logs archived and on-call alert channel updated.",
    className: "text-[#ffc96b]",
  },
  {
    kind: "line",
    text: "✔ Success: Portfolio deployment completed with business-ready uptime.",
    className: "text-[#84ff6f]",
  },
  {
    kind: "line",
    text: "Next: Contact me to build your next product release pipeline.",
    className: "text-[#ffc96b]",
  },
];

type LogEntry = {
  id: number;
  item: (typeof stepLines)[number];
};

export function RetroTerminalSection() {
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const indexRef = useRef(0);
  const idRef = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    setEntries([{ id: 0, item: stepLines[0] }]);
    indexRef.current = 1;
    idRef.current = 1;

    intervalRef.current = window.setInterval(() => {
      setEntries((prev) => {
        if (indexRef.current >= stepLines.length) {
          if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return prev;
        }

        const line = stepLines[indexRef.current];
        if (!line) {
          return prev;
        }

        const lastLine = prev.at(-1)?.item.text;
        if (lastLine === line.text) {
          indexRef.current += 1;
          return prev;
        }

        const next: LogEntry = { id: idRef.current, item: line };
        idRef.current += 1;
        const appended = [...prev, next];
        return appended.length > 24
          ? appended.slice(appended.length - 24)
          : appended;
      });
      indexRef.current += 1;
    }, 760);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) {
      return;
    }

    const supportCards = root.querySelectorAll("[data-support-card]");
    animate(supportCards, {
      opacity: [0, 1],
      translateY: [12, 0],
      delay: (_, index) => index * 75,
      duration: 300,
      ease: "outQuad",
    });
  }, []);

  useEffect(() => {
    if (entries.length === 0) {
      return;
    }

    const node = bodyRef.current;
    if (!node) {
      return;
    }

    node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
  }, [entries]);

  return (
    <section ref={sectionRef} className="space-y-4" data-anim="item">
      <h2 className="font-display text-3xl uppercase sm:text-4xl">
        Deployment Operations Console
      </h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="border-4 border-black bg-card shadow-retro-md">
          <Card.Header>
            <Card.Title className="font-display text-2xl uppercase">
              Cloud Deployment Ownership
            </Card.Title>
          </Card.Header>
          <Card.Content className="space-y-3">
            <p className="font-medium leading-relaxed">
              I handle end-to-end deployments for modern product stacks across
              AWS, Google Cloud, DigitalOcean, and serverless platforms.
            </p>
            <p className="font-medium leading-relaxed">
              From Nginx routing and TLS setup to CI/CD pipelines, rollback
              safety, monitoring, and uptime checks, delivery is
              production-ready and business-focused.
            </p>
            <p className="font-medium leading-relaxed">
              You get reliable launches, clean handover docs, and systems built
              to scale without late-night panic patches.
            </p>
          </Card.Content>
        </Card>

        <Terminal
          className="h-[22rem] md:h-[24rem]"
          bodyRef={bodyRef}
          bodyClassName="retro-terminal-scrollbar pr-3"
        >
          {entries.map((entry) =>
            entry.item.kind === "type" ? (
              <TypingAnimation key={entry.id} className={entry.item.className}>
                {entry.item.text}
              </TypingAnimation>
            ) : (
              <AnimatedSpan key={entry.id} className={entry.item.className}>
                {entry.item.text}
              </AnimatedSpan>
            ),
          )}
        </Terminal>
      </div>

      <h3 className="font-display text-2xl uppercase sm:text-3xl">
        Support & Services
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Card
          className="flex h-full flex-col border-4 border-black bg-card shadow-retro-md"
          data-support-card
        >
          <Card.Header>
            <Card.Title className="font-display text-xl uppercase">
              24/7 Support
            </Card.Title>
          </Card.Header>
          <Card.Content className="flex-1">
            <p className="font-medium leading-relaxed">
              Around-the-clock support for deployments, incidents, hotfixes, and
              release operations.
            </p>
          </Card.Content>
        </Card>
        <Card
          className="flex h-full flex-col border-4 border-black bg-card shadow-retro-md"
          data-support-card
        >
          <Card.Header>
            <Card.Title className="font-display text-xl uppercase">
              Guaranteed Transparency
            </Card.Title>
          </Card.Header>
          <Card.Content className="flex-1">
            <p className="font-medium leading-relaxed">
              Clear status updates, honest timelines, and straightforward
              communication from planning to production.
            </p>
          </Card.Content>
        </Card>
        <Card
          className="flex h-full flex-col border-4 border-black bg-card shadow-retro-md sm:col-span-2 xl:col-span-1"
          data-support-card
        >
          <Card.Header>
            <Card.Title className="font-display text-xl uppercase">
              Service Reliability
            </Card.Title>
          </Card.Header>
          <Card.Content className="flex-1">
            <p className="font-medium leading-relaxed">
              Stable architecture, documented workflows, and practical
              guardrails that keep your product running smoothly.
            </p>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}
