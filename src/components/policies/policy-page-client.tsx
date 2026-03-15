"use client";

import { Card } from "@/components/retroui/Card";

type PolicySection = {
  title: string;
  content: string[];
};

type PolicyPageClientProps = {
  pageTitle: string;
  intro: string;
  sections: PolicySection[];
};

export function PolicyPageClient({
  pageTitle,
  intro,
  sections,
}: PolicyPageClientProps) {
  return (
    <div className="space-y-6 pb-16">
      <section
        className="border-4 border-black bg-card p-6 shadow-retro-lg md:p-8"
        data-anim="item"
      >
        <h1 className="font-pixel text-4xl uppercase sm:text-5xl">
          {pageTitle}
        </h1>
        <p className="mt-4 max-w-4xl font-medium leading-relaxed">{intro}</p>
      </section>

      <section className="space-y-4" data-anim="item">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">
          Policy Sections
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {sections.map((section) => (
            <Card
              key={section.title}
              className="border-4 border-black bg-card shadow-retro-md"
            >
              <Card.Header>
                <Card.Title className="font-display text-xl uppercase">
                  {section.title}
                </Card.Title>
              </Card.Header>
              <Card.Content className="space-y-3">
                {section.content.map((paragraph) => (
                  <p
                    key={`${section.title}-${paragraph}`}
                    className="font-medium leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
