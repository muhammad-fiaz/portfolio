"use client";

import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";

export function HyperNameReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");
  const wordEntries: Array<{
    key: string;
    chars: Array<{ key: string; value: string }>;
    trailingSpace: boolean;
  }> = [];

  let cursor = 0;
  for (const word of words) {
    const wordKey = `w-${cursor}-${word}`;
    const chars: Array<{ key: string; value: string }> = [];

    for (const char of Array.from(word)) {
      chars.push({ key: `c-${cursor}-${char}`, value: char });
      cursor += 1;
    }

    const trailingSpace = cursor < text.length;
    if (trailingSpace) {
      cursor += 1;
    }

    wordEntries.push({ key: wordKey, chars, trailingSpace });
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const letters = Array.from(
      container.querySelectorAll("[data-letter]"),
    ) as HTMLElement[];

    for (const node of letters) {
      node.style.opacity = "0";
      node.style.transform = "translateY(14px) scale(0.96)";
    }

    animate(letters, {
      opacity: [0, 1],
      translateY: [14, 0],
      scale: [0.96, 1],
      delay: stagger(45, { start: 120 }),
      duration: 500,
      ease: "outCubic",
    });
  }, []);

  return (
    <span
      ref={containerRef}
      className="inline-flex items-center whitespace-nowrap align-middle"
    >
      {wordEntries.map((entry) => (
        <span key={entry.key} className="inline-flex whitespace-nowrap">
          {entry.chars.map((charEntry) => (
            <span key={charEntry.key} data-letter className="inline-block">
              {charEntry.value}
            </span>
          ))}
          {entry.trailingSpace ? (
            <span data-letter className="inline-block">
              &nbsp;
            </span>
          ) : null}
        </span>
      ))}
    </span>
  );
}
