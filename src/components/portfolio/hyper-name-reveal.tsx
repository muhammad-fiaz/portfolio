"use client";

import { animate, stagger } from "animejs";
import { useEffect, useMemo, useRef } from "react";
import { useHeroAnimationStore } from "@/store/hero-animation-store";

export function HyperNameReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasPlayed = useHeroAnimationStore((state) => state.hasPlayed);
  const setHasPlayed = useHeroAnimationStore((state) => state.setHasPlayed);

  const wordEntries = useMemo(() => {
    const words = text.split(" ");
    const entries: Array<{
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

      entries.push({ key: wordKey, chars, trailingSpace });
    }

    return entries;
  }, [text]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const letters = Array.from(
      container.querySelectorAll("[data-letter]"),
    ) as HTMLElement[];

    if (letters.length === 0) {
      return;
    }

    if (
      hasPlayed ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      for (const node of letters) {
        node.style.opacity = "1";
        node.style.transform = "translateY(0) scale(1)";
      }

      return;
    }

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
    setHasPlayed(true);
  }, [hasPlayed, setHasPlayed]);

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
