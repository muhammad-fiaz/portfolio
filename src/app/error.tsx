"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SystemStatusPanel } from "@/components/pages/system-status-panel";
import { Button } from "@/components/retroui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="space-y-6 pb-16">
      <section className="relative overflow-hidden border-4 border-black bg-card p-5 shadow-retro-lg sm:p-7 md:p-9">
        <div
          aria-hidden
          className="retro-stripes pointer-events-none absolute inset-0 opacity-20"
        />
        <div className="relative z-10 space-y-3">
          <p className="inline-flex border-2 border-black bg-destructive px-3 py-1 font-pixel text-xs uppercase text-destructive-foreground sm:text-sm">
            Error 500
          </p>
          <h1 className="font-display text-4xl uppercase leading-none sm:text-5xl md:text-6xl text-destructive">
            System Failure
          </h1>
          <p className="max-w-3xl text-sm font-semibold leading-relaxed sm:text-base">
            A critical error occurred while processing your request. Please try again or use the retro navigation below to return to safe bounds.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              onClick={() => reset()}
              className="border-4 border-black uppercase"
            >
              Retry Connection
            </Button>
            <Button
              asChild
              variant="secondary"
              className="border-4 border-black uppercase"
            >
              <Link href="/">Back To Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <SystemStatusPanel mode="not-found" />
    </div>
  );
}
