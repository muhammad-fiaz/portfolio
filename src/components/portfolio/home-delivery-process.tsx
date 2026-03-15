"use client";

import { Card } from "@/components/retroui/Card";

const processSteps = [
  {
    title: "Discover",
    description:
      "Align on goals, constraints, and success metrics so every technical decision maps to business value.",
  },
  {
    title: "Build",
    description:
      "Ship in focused iterations with clean architecture, practical UX, and production-safe engineering standards.",
  },
  {
    title: "Launch",
    description:
      "Release with observability, performance checks, and rollback-aware workflows for stable go-live execution.",
  },
  {
    title: "Scale",
    description:
      "Improve reliability, automate repetitive tasks, and evolve the system based on product and user signals.",
  },
] as const;

export function HomeDeliveryProcess() {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-3xl uppercase sm:text-4xl">
        Delivery Process
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Card
            key={step.title}
            className="h-full border-4 border-black bg-card shadow-retro-md"
          >
            <Card.Header>
              <p className="retro-badge w-max text-[10px] sm:text-xs">
                Step {index + 1}
              </p>
              <Card.Title className="mt-2 font-display text-2xl uppercase">
                {step.title}
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="font-medium leading-relaxed">{step.description}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}
