"use client";

import { animate } from "animejs";
import { Rocket, X } from "@/components/retroui/icons";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CURRENT_PORTFOLIO_VERSION,
  PORTFOLIO_REPO_URL,
} from "@/lib/portfolio-version";

const RELEASE_API_URL =
  "https://api.github.com/repos/muhammad-fiaz/portfolio/releases/latest";
const DISMISS_STORAGE_KEY = "portfolio-release-notice-dismiss-until";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function normalizeVersion(value: string): string {
  return value.trim().replace(/^v/i, "");
}

function toVersionParts(value: string): number[] {
  return normalizeVersion(value)
    .split(".")
    .map((part) => Number.parseInt(part, 10))
    .map((part) => (Number.isNaN(part) ? 0 : part));
}

function isLatestNewer(currentVersion: string, latestVersion: string): boolean {
  const current = toVersionParts(currentVersion);
  const latest = toVersionParts(latestVersion);
  const maxLen = Math.max(current.length, latest.length);

  for (let i = 0; i < maxLen; i += 1) {
    const currentPart = current[i] ?? 0;
    const latestPart = latest[i] ?? 0;
    if (latestPart > currentPart) {
      return true;
    }
    if (latestPart < currentPart) {
      return false;
    }
  }

  return false;
}

export function ReleaseUpdateNotice() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [latestVersion, setLatestVersion] = useState<string | null>(null);

  const normalizedCurrentVersion = useMemo(
    () => normalizeVersion(CURRENT_PORTFOLIO_VERSION),
    [],
  );

  useEffect(() => {
    const dismissedUntil = Number.parseInt(
      window.localStorage.getItem(DISMISS_STORAGE_KEY) ?? "0",
      10,
    );

    if (!Number.isNaN(dismissedUntil) && dismissedUntil > Date.now()) {
      return;
    }

    const controller = new AbortController();

    const checkRelease = async () => {
      try {
        const response = await fetch(RELEASE_API_URL, {
          signal: controller.signal,
          headers: {
            Accept: "application/vnd.github+json",
          },
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as { tag_name?: string };
        const releaseTag = payload.tag_name?.trim();
        if (!releaseTag) {
          return;
        }

        const normalizedLatest = normalizeVersion(releaseTag);
        if (isLatestNewer(normalizedCurrentVersion, normalizedLatest)) {
          setLatestVersion(normalizedLatest);
          setIsOpen(true);
        }
      } catch {
        // Silently ignore transient network errors for release checks.
      }
    };

    void checkRelease();

    return () => {
      controller.abort();
    };
  }, [normalizedCurrentVersion]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) {
      return;
    }

    animate(panelRef.current, {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 260,
      ease: "outQuad",
    });
  }, [isOpen]);

  const handleDismiss = () => {
    window.localStorage.setItem(
      DISMISS_STORAGE_KEY,
      String(Date.now() + ONE_DAY_MS),
    );
    setIsOpen(false);
  };

  if (!isOpen || !latestVersion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-120 px-4 sm:bottom-5">
      <div
        ref={panelRef}
        className="pointer-events-auto mx-auto w-full max-w-xl border-4 border-black bg-card p-4 shadow-retro-lg"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center border-2 border-black bg-primary text-primary-foreground shadow-retro-sm">
              <Rocket className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-2xl uppercase">
                New Release Available
              </p>
              <p className="mt-1 text-sm font-medium leading-relaxed sm:text-base">
                Latest portfolio release is <strong>v{latestVersion}</strong>.
                You are on
                <strong> v{normalizedCurrentVersion}</strong>.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            className="retro-social-icon"
            aria-label="Dismiss update notice"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex items-center justify-center border-4 border-black bg-muted px-4 py-2 text-sm font-black uppercase shadow-retro-sm transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Got It (1 Day)
          </button>
          <Link
            href={`${PORTFOLIO_REPO_URL}/releases/latest`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center border-4 border-black bg-primary px-4 py-2 text-sm font-black uppercase text-primary-foreground shadow-retro-sm transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Upgrade Now
          </Link>
        </div>
      </div>
    </div>
  );
}
