"use client";

import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Terminal({
  children,
  className,
  bodyClassName,
  bodyRef,
}: {
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  bodyRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-col overflow-hidden border-4 border-black bg-[#141414] text-[#d9ffd0] shadow-retro-md",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b-4 border-black bg-[#222] px-3 py-2 text-xs font-black uppercase text-white">
        <span className="font-pixel">terminal.exe</span>
        <div className="flex gap-1.5">
          <span className="h-3 w-3 border border-black bg-[#ffd146]" />
          <span className="h-3 w-3 border border-black bg-[#52d46b]" />
          <span className="h-3 w-3 border border-black bg-[#ff6e6e]" />
        </div>
      </div>
      <div
        ref={bodyRef}
        className={cn(
          "min-h-0 flex-1 space-y-1.5 overflow-y-auto p-4 text-xs sm:text-sm",
          bodyClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function AnimatedSpan({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    animate(ref.current, {
      opacity: [0, 1],
      translateY: [8, 0],
      duration: 380,
      delay,
      ease: "outCubic",
    });
  }, [delay]);

  return (
    <p ref={ref} className={cn("font-medium", className)}>
      {children}
    </p>
  );
}

export function TypingAnimation({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let interval: number | undefined;
    const startTimeout = window.setTimeout(() => {
      let index = 0;
      interval = window.setInterval(() => {
        index += 1;
        setValue(children.slice(0, index));
        if (index >= children.length) {
          if (interval !== undefined) {
            window.clearInterval(interval);
          }
        }
      }, 18);
    }, delay);

    return () => {
      window.clearTimeout(startTimeout);
      if (interval !== undefined) {
        window.clearInterval(interval);
      }
    };
  }, [children, delay]);

  const isTyping = value.length < children.length;

  return (
    <p className={cn("font-medium", className)}>
      {value}
      {isTyping ? (
        <span className="ml-1 inline-block h-[1em] w-[0.6ch] animate-pulse bg-current align-[-0.18em]" />
      ) : null}
    </p>
  );
}
