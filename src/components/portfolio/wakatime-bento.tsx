"use client";

import { useEffect, useState } from "react";
import { AnimatedNumberTicker } from "@/components/portfolio/animated-number-ticker";
import { BentoCard, BentoGrid } from "@/components/retroui/Bento";
import { BarChart } from "@/components/retroui/charts/BarChart";
import { PieChart } from "@/components/retroui/charts/PieChart";
import type { WakaTimePayload } from "@/lib/portfolio-types";

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

export function WakaTimeBento({ stats }: { stats: WakaTimePayload | null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!stats) {
    return (
      <div className="border-4 border-black bg-card p-6 text-center font-bold uppercase shadow-retro-md">
        WakaTime data is unavailable right now. Please check server API key.
      </div>
    );
  }

  const languageData = stats.topLanguages.map((item) => ({
    language: item.name,
    hours: item.hours,
  }));

  const totalHours = splitNumericText(stats.totalHours);
  const dailyAverage = splitNumericText(stats.dailyAverage);

  const chartReady = mounted && stats.last7Days.length > 0;
  const languageReady = mounted && languageData.length > 0;

  return (
    <BentoGrid>
      <BentoCard className="sm:col-span-2 lg:col-span-2">
        <p className="font-display text-2xl uppercase">Total WakaTime</p>
        <p className="mt-3 text-5xl font-black">
          <AnimatedNumberTicker
            value={totalHours.value}
            decimals={1}
            suffix={totalHours.suffix ? ` ${totalHours.suffix}` : "h"}
          />
        </p>
        <p className="mt-2 text-sm font-bold uppercase text-muted-foreground">
          Daily average:{" "}
          <AnimatedNumberTicker
            value={dailyAverage.value}
            decimals={1}
            suffix={dailyAverage.suffix ? ` ${dailyAverage.suffix}` : " h/day"}
          />
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
        <p className="font-display text-2xl uppercase">Language Breakdown</p>
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
    </BentoGrid>
  );
}
