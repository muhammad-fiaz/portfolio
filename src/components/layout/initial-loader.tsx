"use client";

import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";

export function InitialLoader() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) {
      return;
    }

    const bar = barRef.current;

    const progressAnim = animate(bar, {
      width: ["0%", "100%"],
      duration: 1800,
      ease: "outCubic",
    });

    return () => {
      progressAnim.cancel();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-background/95 px-4">
      <div className="w-full max-w-lg border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6">
        <p className="font-pixel text-2xl uppercase text-foreground sm:text-3xl">
          Muhammad Fiaz
        </p>
        <p className="mt-2 text-sm font-black uppercase text-muted-foreground sm:text-base">
          Loading Workspace<span className="animate-dots" />
        </p>
        <div className="mt-5 h-7 border-4 border-black bg-muted p-1 sm:h-8">
          <div
            ref={barRef}
            className="h-full w-0 border-2 border-black bg-primary shadow-retro-sm"
          />
        </div>
      </div>
    </div>
  );
}
