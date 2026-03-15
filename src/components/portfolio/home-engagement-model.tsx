"use client";

import Link from "next/link";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";

const models = [
  {
    title: "Sprint Execution",
    summary:
      "Fast delivery for focused features, migrations, and product improvements.",
    bullets: [
      "1-2 week delivery windows",
      "Clear scope and milestone tracking",
      "Weekly progress demos",
    ],
  },
  {
    title: "Embedded Partner",
    summary:
      "Hands-on engineering support integrated into your product and release cycle.",
    bullets: [
      "Architecture and implementation ownership",
      "Collaborative planning with your team",
      "Long-term maintainability focus",
    ],
  },
  {
    title: "AI Automation",
    summary:
      "Automation systems that reduce manual work across product and operations.",
    bullets: [
      "API and workflow integrations",
      "n8n and Zapier orchestration",
      "Monitoring and optimization loops",
    ],
  },
] as const;

export function HomeEngagementModel() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          Engagement Model
        </h2>
        <Button
          asChild
          variant="secondary"
          className="w-full sm:w-auto uppercase"
        >
          <Link href="/contact">Start a Project Discussion</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {models.map((model) => (
          <Card
            key={model.title}
            className="h-full border-4 border-black bg-card shadow-retro-md"
          >
            <Card.Header>
              <Card.Title className="font-display text-2xl uppercase">
                {model.title}
              </Card.Title>
              <Card.Description className="text-sm leading-relaxed sm:text-base">
                {model.summary}
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <ul className="space-y-2">
                {model.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="border-l-4 border-black pl-3 text-sm font-medium leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}
