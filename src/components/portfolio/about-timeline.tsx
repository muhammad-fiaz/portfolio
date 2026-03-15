"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/retroui/Card";

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  highlights?: string[];
}

function extractYear(period: string) {
  const match = period.match(/(19|20)\d{2}/);
  return match ? match[0] : "Now";
}

export function AboutTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mt-8">
      <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-black md:block" />
      <div className="space-y-6">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const year = extractYear(item.period);
          return (
            <motion.div
              key={`${item.period}-${item.title}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative grid gap-4 md:grid-cols-2"
            >
              <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 md:flex">
                <span className="inline-flex h-4 w-4 rounded-full border-2 border-black bg-primary shadow-retro-sm" />
              </div>

              <div className={isLeft ? "md:pr-8" : "md:col-start-2 md:pl-8"}>
                <Card className="w-full border-4 border-black bg-card shadow-retro-md">
                  <Card.Header>
                    <div
                      className={`mb-2 hidden md:flex ${isLeft ? "justify-end" : "justify-start"}`}
                    >
                      <span className="inline-flex items-center gap-2 border-2 border-black bg-primary px-2 py-0.5 text-xs font-black uppercase shadow-retro-sm">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full border border-black bg-card" />
                        {year}
                      </span>
                    </div>
                    <div className="mb-1 md:hidden">
                      <span className="inline-flex items-center gap-2 border-2 border-black bg-primary px-2 py-0.5 text-xs font-black uppercase shadow-retro-sm">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full border border-black bg-card" />
                        {year}
                      </span>
                    </div>
                    <p className="font-black text-sm uppercase">
                      {item.period}
                    </p>
                    <Card.Title className="font-display text-2xl uppercase">
                      {item.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <p className="font-medium leading-relaxed">
                      {item.description}
                    </p>
                    {item.highlights && item.highlights.length > 0 ? (
                      <ul className="mt-3 space-y-2">
                        {item.highlights.map((point) => (
                          <li
                            key={point}
                            className="border-l-4 border-black pl-3 text-sm font-medium leading-relaxed"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Card.Content>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
