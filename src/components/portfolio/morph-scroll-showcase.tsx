"use client";

import { animate } from "animejs";
import { useEffect, useRef } from "react";
import { Card } from "@/components/retroui/Card";

const words = ["Scale", "Convert", "Automate", "Ship", "Grow"];

export function MorphScrollShowcase() {
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const nodes = wordRefs.current.filter(Boolean) as HTMLSpanElement[];
      if (nodes[0]) {
        nodes[0].style.opacity = "1";
        nodes[0].style.transform = "translateY(0px)";
      }
      return;
    }

    const nodes = wordRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (nodes.length === 0) {
      return;
    }

    let index = 0;
    const interval = window.setInterval(() => {
      const current = nodes[index % nodes.length];
      const next = nodes[(index + 1) % nodes.length];

      animate(current, {
        opacity: [1, 0],
        translateY: [0, -12],
        duration: 320,
        ease: "inQuad",
      });

      animate(next, {
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 360,
        ease: "outCubic",
      });

      index += 1;
    }, 1800);

    animate(nodes[0], {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 450,
      ease: "outCubic",
    });

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = revealRef.current;
    if (!root) {
      return;
    }

    const targets = Array.from(
      root.querySelectorAll("[data-reveal]"),
    ) as HTMLElement[];

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            animate(target, {
              opacity: [0, 1],
              translateY: [18, 0],
              duration: 520,
              ease: "outCubic",
            });
            observer.unobserve(target);
          }
        }
      },
      { threshold: 0.2 },
    );

    for (const node of targets) {
      observer.observe(node);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="space-y-4" ref={revealRef} data-anim="item">
      <h2 className="font-display text-3xl uppercase sm:text-4xl">
        Execution Engine
      </h2>
      <Card className="border-4 border-black bg-card shadow-retro-md">
        <Card.Content className="space-y-4">
          <p className="font-display text-2xl uppercase sm:text-3xl">
            We Build to
            <span className="relative ml-3 inline-flex h-9 min-w-36 align-middle sm:h-10 sm:min-w-40">
              {words.map((word, idx) => (
                <span
                  key={word}
                  ref={(el) => {
                    wordRefs.current[idx] = el;
                  }}
                  className="absolute left-0 top-0 font-pixel text-foreground opacity-0"
                >
                  {word}
                </span>
              ))}
            </span>
          </p>
          <p
            data-reveal
            className="translate-y-4 font-medium leading-relaxed opacity-0"
          >
            From discovery to delivery, I combine product strategy, engineering
            execution, and developer-first tooling to help founders launch
            faster and scale with confidence.
          </p>
          <p
            data-reveal
            className="translate-y-4 font-medium leading-relaxed opacity-0"
          >
            This portfolio is built to show real capability: business-oriented
            builds, reliable architecture, and practical automation that
            improves outcomes.
          </p>
        </Card.Content>
      </Card>
    </section>
  );
}
