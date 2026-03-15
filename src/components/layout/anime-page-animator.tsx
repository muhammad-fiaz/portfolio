"use client";

import { animate, stagger } from "animejs";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AnimePageAnimator() {
  const _pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      const targets = Array.from(
        document.querySelectorAll("main [data-anim='item']"),
      ) as HTMLElement[];

      if (targets.length === 0) {
        return;
      }

      animate(targets, {
        opacity: [0, 1],
        translateY: [14, 0],
        delay: stagger(55, { start: 100 }),
        duration: 500,
        ease: "outCubic",
      });
    }, 80);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
