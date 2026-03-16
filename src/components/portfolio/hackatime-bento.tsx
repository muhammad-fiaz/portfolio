"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedNumberTicker } from "@/components/portfolio/animated-number-ticker";
import { BentoCard, BentoGrid } from "@/components/retroui/Bento";
import { Button } from "@/components/retroui/Button";
import { BarChart } from "@/components/retroui/charts/BarChart";
import { PieChart } from "@/components/retroui/charts/PieChart";
import type { HackatimePayload } from "@/lib/portfolio-types";

function splitNumericText(input: string) {
  const match = input.match(/[\d,.]+/);
  if (!match) {
    return { value: 0, suffix: "" };
  }

  const numericText = match[0].replace(/,/g, "");
  const value = Number.parseFloat(numericText);
  const suffix = input.replace(match[0], "").trim();

  return {
    value: Number.isFinite(value) ? value : 0,
    suffix,
  };
}

export function HackatimeBento({ stats }: { stats: HackatimePayload | null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!stats) {
    return (
      <div className="border-4 border-black bg-card p-6 text-center font-bold uppercase shadow-retro-md">
        Hackatime data is unavailable right now. Please check server API key.
      </div>
    );
  }

  const languageData = stats.topLanguages.map((item) => ({
    language: item.name,
    hours: item.hours,
  }));

  const totalHours = splitNumericText(stats.totalHours);
  const last7DaysTotal = splitNumericText(stats.last7DaysTotalHours);
  const dailyAverage = splitNumericText(stats.dailyAverage);
  const activeDayChartData = [
    { label: "Active", days: stats.activeDaysLast7 },
    { label: "Inactive", days: Math.max(0, 7 - stats.activeDaysLast7) },
  ];
  const todayVsAverageData = [
    {
      label: "Today",
      hours: Number((stats.todaySeconds / 3600).toFixed(2)),
    },
    {
      label: "Avg",
      hours: Number((stats.dailyAverageHours ?? 0).toFixed(2)),
    },
  ];
  const chartReady = mounted && stats.last7Days.length > 0;
  const languageReady = mounted && languageData.length > 0;

  return (
    <BentoGrid>
      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">Today on Hackatime</p>
        <p className="mt-2 text-xs font-black uppercase text-muted-foreground">
          {stats.todayHours ||
            "Today&apos;s coding time will appear once activity is tracked"}
        </p>
        <div className="mt-3 h-52 w-full min-w-0 overflow-hidden">
          <BarChart
            data={todayVsAverageData}
            index="label"
            categories={["hours"]}
            className="h-52"
            fillColors={["var(--chart-3)"]}
            strokeColors={["var(--foreground)"]}
            valueFormatter={(value) => `${value}h`}
          />
        </div>
        <p className="mt-2 text-sm font-bold uppercase text-muted-foreground">
          Live validated data from Hackatime statusbar API
        </p>
      </BentoCard>

      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">Active Days (Last 7)</p>
        <p className="mt-2 text-center text-3xl font-black uppercase sm:text-4xl">
          {stats.activeDaysLast7}/7
        </p>
        <div className="mt-3 h-52 w-full min-w-0 overflow-hidden">
          <BarChart
            data={activeDayChartData}
            index="label"
            categories={["days"]}
            className="h-52"
            fillColors={["var(--chart-1)"]}
            strokeColors={["var(--foreground)"]}
            valueFormatter={(value) => `${value}d`}
          />
        </div>
        <p className="mt-2 text-center text-sm font-bold uppercase text-muted-foreground">
          Days with tracked coding activity
        </p>
      </BentoCard>

      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">
          Last 7 Days Total Hack Time
        </p>
        <p className="mt-3 text-5xl font-black">
          <AnimatedNumberTicker
            value={last7DaysTotal.value}
            decimals={1}
            suffix={last7DaysTotal.suffix ? ` ${last7DaysTotal.suffix}` : "h"}
          />
        </p>
        <p className="mt-2 text-sm font-bold uppercase text-muted-foreground">
          Rolling 7-day coding total
        </p>
      </BentoCard>

      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">Last 7 Days</p>
        <div className="mt-3 h-64 w-full min-w-0 overflow-hidden">
          {chartReady ? (
            <BarChart
              data={stats.last7Days}
              index="day"
              categories={["hours"]}
              className="h-64"
              fillColors={["var(--chart-2)"]}
              strokeColors={["var(--foreground)"]}
              valueFormatter={(value) => `${value}h`}
            />
          ) : stats.hasActivity ? (
            <div className="h-64 border-4 border-black bg-muted" />
          ) : (
            <div className="flex h-64 items-center justify-center border-4 border-black bg-muted p-4 text-center text-sm font-black uppercase">
              No coding activity recorded in the last 7 days.
            </div>
          )}
        </div>
      </BentoCard>

      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">Top Languages</p>
        <div className="mt-3 h-64 w-full min-w-0 overflow-hidden">
          {languageReady ? (
            <PieChart
              data={languageData}
              dataKey="hours"
              nameKey="language"
              className="h-64"
              valueFormatter={(value) => `${value}h`}
            />
          ) : stats.hasActivity ? (
            <div className="h-64 border-4 border-black bg-muted" />
          ) : (
            <div className="flex h-64 items-center justify-center border-4 border-black bg-muted p-4 text-center text-sm font-black uppercase">
              No language usage available for this period.
            </div>
          )}
        </div>
      </BentoCard>

      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">Hack Club Streak</p>
        <p className="mt-2 text-xs font-black uppercase text-muted-foreground">
          Live streak heatmap (UTC) from Hackatime user 30609.
        </p>
        <a
          href="https://heatmap.shymike.dev/?id=30609&timezone=UTC"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 block border-4 border-black bg-muted p-2 shadow-retro-sm"
          aria-label="Open Hack Club streak heatmap"
        >
          <Image
            src="https://heatmap.shymike.dev/?id=30609&timezone=UTC"
            alt="Muhammad Fiaz Hack Club streak heatmap"
            width={1200}
            height={260}
            className="h-auto w-full border-2 border-black bg-card"
            loading="lazy"
            unoptimized
          />
        </a>
        <Button asChild className="mt-4 w-full border-4 border-black uppercase">
          <a
            href="https://hackatime.hackclub.com/@muhammadfiaz"
            target="_blank"
            rel="noreferrer noopener"
          >
            View HackClub Profile
          </a>
        </Button>
      </BentoCard>

      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">
          Last 7 Days Language Breakdown
        </p>
        {stats.topLanguages.length > 0 ? (
          <div className="mt-4 max-h-72 overflow-y-auto pr-1">
            <ul className="space-y-2">
              {stats.topLanguages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-center justify-between border-2 border-black bg-muted px-3 py-2 font-bold uppercase"
                >
                  <span>{language.name}</span>
                  <AnimatedNumberTicker
                    value={language.hours}
                    decimals={1}
                    suffix="h"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-4 border-2 border-black bg-muted px-3 py-4 text-center text-sm font-black uppercase">
            No language breakdown for this date range.
          </div>
        )}
      </BentoCard>

      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">
          Hackatime Validation Snapshot
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between border-2 border-black bg-muted px-3 py-2 font-bold uppercase">
            <span>Grand Total</span>
            <AnimatedNumberTicker
              value={totalHours.value}
              decimals={1}
              suffix={totalHours.suffix ? ` ${totalHours.suffix}` : "h"}
            />
          </div>
          <div className="flex items-center justify-between border-2 border-black bg-muted px-3 py-2 font-bold uppercase">
            <span>Daily Average</span>
            <AnimatedNumberTicker
              value={dailyAverage.value}
              decimals={1}
              suffix={
                dailyAverage.suffix ? ` ${dailyAverage.suffix}` : " h/day"
              }
            />
          </div>
          <div className="flex items-center justify-between border-2 border-black bg-muted px-3 py-2 font-bold uppercase">
            <span>Today Seconds</span>
            <span>{stats.todaySeconds}</span>
          </div>
        </div>
        <p className="mt-3 text-xs font-black uppercase text-muted-foreground">
          Values are validated from Hackatime API endpoints.
        </p>
      </BentoCard>
    </BentoGrid>
  );
}
