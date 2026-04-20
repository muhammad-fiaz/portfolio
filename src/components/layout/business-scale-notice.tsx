"use client";

import { Notification03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useId, useMemo } from "react";
import { Button } from "@/components/retroui/Button";
import { Dialog } from "@/components/retroui/Dialog";
import {
  BUSINESS_NOTICE_CYCLE_MS,
  useBusinessNoticeStore,
} from "@/store/business-notice-store";

function formatCountdownPart(value: number) {
  return String(value).padStart(2, "0");
}

function getCountdownParts(timeLeftMs: number) {
  const totalSeconds = Math.max(0, Math.floor(timeLeftMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: formatCountdownPart(days),
    hours: formatCountdownPart(hours),
    minutes: formatCountdownPart(minutes),
    seconds: formatCountdownPart(seconds),
  };
}

export function BusinessScaleNotice() {
  const nextShowAt = useBusinessNoticeStore((state) => state.nextShowAt);
  const cycleStartAt = useBusinessNoticeStore((state) => state.cycleStartAt);
  const hydrated = useBusinessNoticeStore((state) => state.hydrated);
  const dismissNotice = useBusinessNoticeStore((state) => state.dismissNotice);
  const redeemOffer = useBusinessNoticeStore((state) => state.redeemOffer);
  const initialize = useBusinessNoticeStore((state) => state.initialize);
  const syncCycle = useBusinessNoticeStore((state) => state.syncCycle);
  const descriptionId = useId();

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    const now = Date.now();
    initialize(now);
    syncCycle(now);
  }, [hydrated, initialize, syncCycle]);

  const { data: now = Date.now() } = useQuery({
    queryKey: ["business-notice-countdown-now"],
    queryFn: () => Date.now(),
    enabled: hydrated,
    staleTime: 0,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    syncCycle(now);
  }, [hydrated, now, syncCycle]);

  const timeLeftMs = useMemo(() => {
    if (!hydrated) {
      return 0;
    }

    const effectiveStart = cycleStartAt ?? now;
    const cycleEndsAt = effectiveStart + BUSINESS_NOTICE_CYCLE_MS;
    return Math.max(0, cycleEndsAt - now);
  }, [cycleStartAt, hydrated, now]);

  const countdown = useMemo(() => getCountdownParts(timeLeftMs), [timeLeftMs]);
  const open = hydrated && nextShowAt !== null && now >= nextShowAt && timeLeftMs > 0;

  if (!hydrated) {
    return null;
  }

  const onOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      dismissNotice(Date.now());
    }
  };

  const handleRedeem = () => {
    redeemOffer(Date.now());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Dialog.Content
        size="sm"
        aria-describedby={descriptionId}
        className="z-130 w-[calc(100%-1rem)] max-w-2xl border-4 border-black bg-card p-0 shadow-retro-lg sm:w-full"
        overlay={{ className: "z-[129] bg-black/70" }}
      >
        <Dialog.Description id={descriptionId} className="sr-only">
          Limited-time summer growth offer with a live seven-day countdown and
          direct contact call to action.
        </Dialog.Description>

        <Dialog.Header
          asChild
          className="border-b-4 border-black bg-primary px-4 py-3 text-primary-foreground sm:px-5"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border-2 border-black bg-card text-foreground">
              <HugeiconsIcon
                icon={Notification03Icon}
                size={20}
                strokeWidth={1.8}
                primaryColor="currentColor"
                secondaryColor="currentColor"
                disableSecondaryOpacity
              />
            </span>
            <h2 className="font-display text-xl uppercase leading-tight sm:text-3xl">
              Summer Growth Offer
            </h2>
          </div>
        </Dialog.Header>

        <div className="space-y-4 p-4 sm:space-y-5 sm:p-5">
          <p className="text-sm font-semibold leading-relaxed sm:text-base">
            Limited-time summer offer: get 20% off your growth sprint and launch
            faster with conversion-focused websites, mobile apps, AI workflows,
            and business automations built for revenue.
          </p>

          <div className="border-4 border-black bg-muted p-3 sm:p-4">
            <p className="font-display text-base uppercase sm:text-lg">
              Offer Ends In
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              <div className="border-2 border-black bg-card px-2 py-2 text-center">
                <p className="font-pixel text-xl sm:text-2xl">{countdown.days}</p>
                <p className="text-[10px] font-black uppercase sm:text-xs">Days</p>
              </div>
              <div className="border-2 border-black bg-card px-2 py-2 text-center">
                <p className="font-pixel text-xl sm:text-2xl">{countdown.hours}</p>
                <p className="text-[10px] font-black uppercase sm:text-xs">Hours</p>
              </div>
              <div className="border-2 border-black bg-card px-2 py-2 text-center">
                <p className="font-pixel text-xl sm:text-2xl">
                  {countdown.minutes}
                </p>
                <p className="text-[10px] font-black uppercase sm:text-xs">
                  Minutes
                </p>
              </div>
              <div className="border-2 border-black bg-card px-2 py-2 text-center">
                <p className="font-pixel text-xl sm:text-2xl">
                  {countdown.seconds}
                </p>
                <p className="text-[10px] font-black uppercase sm:text-xs">
                  Seconds
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="secondary"
              className="w-full border-4 border-black uppercase shadow-retro-sm sm:w-auto"
              onClick={() => dismissNotice(Date.now())}
            >
              Not Now
            </Button>
            <Button
              asChild
              className="w-full border-4 border-black uppercase shadow-retro-sm sm:w-auto"
              onClick={handleRedeem}
            >
              <Link href="/contact">
                Claim Summer Offer
              </Link>
            </Button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog>
  );
}
