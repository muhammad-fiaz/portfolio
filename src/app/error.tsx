"use client";

import { AlertOctagon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { SystemStatusPanel } from "@/components/pages/system-status-panel";
import { Button } from "@/components/retroui/Button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Route error boundary triggered:", error);
  }, [error]);

  return (
    <div className="space-y-6 pb-16">
      <section className="relative overflow-hidden border-4 border-black bg-card p-5 shadow-retro-lg sm:p-7 md:p-9">
        <div
          aria-hidden
          className="retro-stripes pointer-events-none absolute inset-0 opacity-20"
        />
        <div className="relative z-10 space-y-3">
          <p className="inline-flex items-center gap-2 border-2 border-black bg-destructive px-3 py-1 font-pixel text-xs uppercase text-destructive-foreground sm:text-sm">
            <AlertOctagon className="h-4 w-4" />
            Runtime Error
          </p>
          <h1 className="font-display text-4xl uppercase leading-none sm:text-5xl md:text-6xl">
            Recovery Mode Active
          </h1>
          <p className="max-w-3xl text-sm font-semibold leading-relaxed sm:text-base">
            A route-level runtime issue occurred. Use the recovery controls to
            retry rendering or continue browsing stable pages.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              type="button"
              className="border-4 border-black uppercase"
              onClick={reset}
            >
              Retry Route
            </Button>
            <Button
              asChild
              variant="secondary"
              className="border-4 border-black uppercase"
            >
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <SystemStatusPanel
        mode="error"
        onReset={reset}
        errorDigest={error.digest}
      />
    </div>
  );
}
