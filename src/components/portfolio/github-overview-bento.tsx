"use client";

import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/retroui/Badge";
import { BentoCard, BentoGrid } from "@/components/retroui/Bento";
import { BarChart } from "@/components/retroui/charts/BarChart";
import { LineChart } from "@/components/retroui/charts/LineChart";
import type { GitHubOverviewPayload } from "@/lib/portfolio-types";

const intensityClasses = [
  "bg-white",
  "bg-[#b7e28a]",
  "bg-[#8bcc68]",
  "bg-[#4ea44d]",
  "bg-[#2f6f34]",
];

function getHeatmapData(
  commitHistory: Array<{ date: string; commits: number }>,
  rangeStart?: string,
  rangeEnd?: string,
) {
  const days = 53 * 7;
  const end = new Date(rangeEnd ?? "1970-01-01T00:00:00Z");
  end.setUTCHours(0, 0, 0, 0);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const start = new Date(rangeStart ?? end.toISOString());
  start.setUTCHours(0, 0, 0, 0);

  const dayBuckets = new Map<string, number>();

  for (const entry of commitHistory) {
    const date = new Date(entry.date);
    if (Number.isNaN(date.getTime())) {
      continue;
    }

    const key = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
    dayBuckets.set(key, (dayBuckets.get(key) ?? 0) + entry.commits);
  }

  const cells: Array<{
    key: string;
    week: number;
    day: number;
    value: number;
    isFuture: boolean;
  }> = [];
  for (let i = 0; i < days; i += 1) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);

    const day = i % 7;
    const week = Math.floor(i / 7);
    const key = `${current.getUTCFullYear()}-${String(current.getUTCMonth() + 1).padStart(2, "0")}-${String(current.getUTCDate()).padStart(2, "0")}`;
    const value = dayBuckets.get(key) ?? 0;
    const isFuture = current.getTime() > today.getTime();

    cells.push({ key, week, day, value, isFuture });
  }

  const maxValue = Math.max(...cells.map((cell) => cell.value), 1);
  const withIntensity = cells.map((cell) => {
    if (cell.isFuture) {
      return { ...cell, intensity: 0, isFuture: true };
    }

    if (cell.value <= 0) {
      return { ...cell, intensity: 0 };
    }

    const level = Math.ceil((cell.value / maxValue) * 4);
    return { ...cell, intensity: Math.max(1, Math.min(4, level)) };
  });

  const monthLabels: Array<{ key: string; label: string }> = [];
  let lastMonthKey = "";

  for (let week = 0; week < 53; week += 1) {
    const weekDate = new Date(start);
    weekDate.setUTCDate(start.getUTCDate() + week * 7);
    const monthKey = `${weekDate.getUTCFullYear()}-${weekDate.getUTCMonth()}`;

    if (monthKey !== lastMonthKey) {
      const monthName = weekDate.toLocaleDateString("en-US", {
        month: "short",
        timeZone: "UTC",
      });
      monthLabels.push({ key: `wk-${week}`, label: monthName });
      lastMonthKey = monthKey;
    } else {
      monthLabels.push({ key: `wk-${week}`, label: "" });
    }
  }

  const endMonthLabel = end.toLocaleDateString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  monthLabels[52] = { key: "wk-52", label: endMonthLabel };

  return { cells: withIntensity, monthLabels };
}

export function GithubOverviewBento({
  stats,
}: {
  stats: GitHubOverviewPayload | null;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (
      !root ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const cards = Array.from(
      root.querySelectorAll("[data-gh-card]"),
    ) as HTMLElement[];
    const pills = Array.from(
      root.querySelectorAll("[data-gh-pill]"),
    ) as HTMLElement[];
    const legendItems = Array.from(
      root.querySelectorAll("[data-gh-legend]"),
    ) as HTMLElement[];
    const heatmapCells = Array.from(
      root.querySelectorAll("[data-gh-cell]"),
    ) as HTMLElement[];

    if (cards.length > 0) {
      animate(cards, {
        opacity: [0, 1],
        translateY: [10, 0],
        delay: stagger(40, { start: 50 }),
        duration: 320,
        ease: "outCubic",
      });
    }

    if (pills.length > 0) {
      animate(pills, {
        opacity: [0, 1],
        scale: [0.92, 1],
        delay: stagger(35, { start: 260 }),
        duration: 380,
        ease: "outBack",
      });
    }

    if (legendItems.length > 0) {
      animate(legendItems, {
        opacity: [0, 1],
        translateY: [8, 0],
        delay: stagger(12, { start: 220 }),
        duration: 220,
        ease: "outQuad",
      });
    }

    if (heatmapCells.length > 0) {
      animate(heatmapCells, {
        opacity: [0, 1],
        scale: [0.85, 1],
        delay: stagger(3, { start: 120, from: "center" }),
        duration: 150,
        ease: "outQuad",
      });
    }
  }, []);

  if (!stats) {
    return (
      <div className="border-4 border-black bg-card p-6 text-center font-black uppercase shadow-retro-md">
        GitHub overview is unavailable right now.
      </div>
    );
  }

  const heatmap = getHeatmapData(
    stats.commitHistory,
    stats.commitRangeStart,
    stats.commitRangeEnd,
  );
  const rangeStartYear = new Date(stats.commitRangeStart).getUTCFullYear();
  const rangeEndYear = new Date(stats.commitRangeEnd).getUTCFullYear();
  const languageChartData = [...stats.languages].sort(
    (a, b) => b.repos - a.repos,
  );
  const insightsData = [
    {
      metric: "Stars Avg",
      value: Math.max(
        0,
        Math.round(stats.totalStars / Math.max(stats.totalRepositories, 1)),
      ),
    },
    {
      metric: "Forks Avg",
      value: Math.max(
        0,
        Math.round(stats.totalForks / Math.max(stats.totalRepositories, 1)),
      ),
    },
    {
      metric: "Watch Avg",
      value: Math.max(
        0,
        Math.round(stats.totalWatchers / Math.max(stats.totalRepositories, 1)),
      ),
    },
    {
      metric: "Public Repos",
      value: stats.publicRepos,
    },
  ];

  return (
    <div ref={sectionRef}>
      <BentoGrid className="mx-auto w-full">
        <BentoCard
          data-gh-card
          className="sm:col-span-2 lg:col-span-4 self-start"
        >
          <p className="font-display text-2xl uppercase">GitHub Pulse</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#ffe08a] px-3 py-3 text-center text-sm font-black uppercase text-black"
            >
              Followers {stats.followers}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#8cf5ff] px-3 py-3 text-center text-sm font-black uppercase text-black"
            >
              Following {stats.following}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#b7ff66] px-3 py-3 text-center text-sm font-black uppercase text-black"
            >
              Repos {stats.totalRepositories}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#ffd146] px-3 py-3 text-center text-sm font-black uppercase text-black"
            >
              Stars {stats.totalStars}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#ff9ac2] px-3 py-3 text-center text-sm font-black uppercase text-black"
            >
              Forks {stats.totalForks}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#c6a8ff] px-3 py-3 text-center text-sm font-black uppercase text-black"
            >
              Watch {stats.totalWatchers}
            </Badge>
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="sm:col-span-2 lg:col-span-4 self-start"
        >
          <p className="font-display text-2xl uppercase">Github Graphs</p>
          <p className="mt-1 text-xs font-bold uppercase text-muted-foreground">
            Commit history ({rangeStartYear} - {rangeEndYear})
          </p>
          <div className="mt-4 min-w-0 pb-1">
            <div className="w-full min-w-0">
              <div className="mb-2 grid grid-cols-[2rem_minmax(0,1fr)] gap-2">
                <span />
                <div className="grid grid-cols-53 gap-0.75 text-[9px] font-bold uppercase text-muted-foreground sm:text-[10px]">
                  {heatmap.monthLabels.map((month) => (
                    <span
                      key={month.key}
                      className="overflow-visible whitespace-nowrap leading-none"
                    >
                      {month.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex w-8 flex-col justify-between py-1 text-xs font-bold uppercase text-muted-foreground">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
                <div className="grid min-w-0 flex-1 grid-cols-53 grid-rows-7 gap-0.75">
                  {heatmap.cells.map((cell) => (
                    <span
                      key={cell.key}
                      data-gh-cell
                      className={`aspect-square w-full border border-black/30 ${cell.isFuture ? "bg-background" : intensityClasses[cell.intensity]}`}
                      title={`${cell.key}: ${cell.value} commits`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-end gap-2 text-xs font-black uppercase text-muted-foreground">
            <span data-gh-legend>Less</span>
            <div className="flex items-center gap-1">
              {intensityClasses.map((tone) => (
                <span
                  key={`legend-${tone}`}
                  data-gh-legend
                  className={`h-3.5 w-3.5 border border-black/30 ${tone}`}
                />
              ))}
            </div>
            <span data-gh-legend>More</span>
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="sm:col-span-2 lg:col-span-2 self-start min-h-96 h-full"
        >
          <p className="font-display text-2xl uppercase">
            Top Repositories by Stars
          </p>
          <div className="mt-3 h-72 w-full">
            <BarChart
              data={stats.topRepositories}
              index="name"
              categories={["stars"]}
              className="h-72"
              isAnimationActive={false}
              fillColors={["var(--chart-1)"]}
              strokeColors={["var(--foreground)"]}
              valueFormatter={(value) => `${value}`}
            />
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="sm:col-span-2 lg:col-span-2 self-start min-h-96 h-full"
        >
          <p className="font-display text-2xl uppercase">
            Languages Used Across Projects
          </p>
          <div className="retro-scrollbar mt-3 max-h-96 overflow-y-auto overflow-x-hidden pr-2">
            <BarChart
              data={languageChartData}
              index="language"
              categories={["repos"]}
              className="h-112 w-full min-h-112"
              alignment="horizontal"
              isAnimationActive={false}
              horizontalYAxisWidth={116}
              horizontalCategoryFormatter={(value) =>
                value.length > 12 ? `${value.slice(0, 11)}.` : value
              }
              fillColors={["var(--chart-1)"]}
              strokeColors={["var(--foreground)"]}
              valueFormatter={(value) => `${value}`}
            />
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="sm:col-span-2 lg:col-span-2 self-start min-h-96 h-full"
        >
          <p className="font-display text-2xl uppercase">
            Repository Activity by Month
          </p>
          <div className="mt-3 h-72 w-full">
            <LineChart
              data={stats.monthlyActivity}
              index="month"
              categories={["repos"]}
              className="h-72"
              isAnimationActive={false}
              strokeColors={["var(--chart-2)"]}
              valueFormatter={(value) => `${value}`}
            />
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="sm:col-span-2 lg:col-span-2 self-start min-h-96 h-full"
        >
          <p className="font-display text-2xl uppercase">GitHub Insights</p>
          <div className="mt-4 h-72 w-full">
            <BarChart
              data={insightsData}
              index="metric"
              categories={["value"]}
              className="h-72"
              alignment="horizontal"
              isAnimationActive={false}
              fillColors={["var(--chart-3)"]}
              strokeColors={["var(--foreground)"]}
              valueFormatter={(value) => `${value}`}
            />
          </div>
          <p className="mt-4 text-sm font-medium leading-relaxed">
            Live snapshot based on your current GitHub repository portfolio and
            profile engagement metrics.
          </p>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}
