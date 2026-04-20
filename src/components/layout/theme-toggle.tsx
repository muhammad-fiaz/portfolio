"use client";

import { Moon, Sun } from "@/components/retroui/icons";
import { useTheme } from "next-themes";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => {
    ready: Promise<void>;
  };
};

export function ThemeToggle({
  className,
  duration = 420,
  ...props
}: AnimatedThemeTogglerProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current;

    if (!button) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y),
    );

    const applyTheme = () => {
      setTheme(isDark ? "light" : "dark");
    };

    const doc = document as ViewTransitionDocument;
    if (typeof doc.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const transition = doc.startViewTransition(() => {
      flushSync(() => {
        applyTheme();
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, [duration, isDark, setTheme]);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-11 w-11 border-4 border-black bg-card shadow-retro"
      />
    );
  }

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center border-4 border-black bg-card text-card-foreground shadow-retro transition-transform hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-none active:translate-x-1.5 active:translate-y-1.5 active:shadow-none",
        className,
      )}
      aria-label="Toggle theme"
      {...props}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
