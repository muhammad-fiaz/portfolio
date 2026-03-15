"use client";

import React from "react";
import {
  Area,
  CartesianGrid,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

interface AreaChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, unknown>[];
  index: string;
  categories: string[];
  strokeColors?: string[];
  fillColors?: string[];
  tooltipBgColor?: string;
  tooltipBorderColor?: string;
  gridColor?: string;
  valueFormatter?: (value: number) => string;
  showGrid?: boolean;
  showTooltip?: boolean;
  fill?: "gradient" | "solid";
  className?: string;
}

const AreaChart = React.forwardRef<HTMLDivElement, AreaChartProps>(
  (
    {
      data = [],
      index,
      categories = [],
      strokeColors = ["var(--foreground)"],
      fillColors = ["var(--primary)"],
      tooltipBgColor = "var(--background)",
      tooltipBorderColor = "var(--border)",
      gridColor = "var(--muted)",
      valueFormatter = (value: number) => value.toString(),
      showGrid = true,
      showTooltip = true,
      fill = "gradient",
      className,
      ...props
    },
    ref,
  ) => {
    const chartId = React.useId();
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);
    const [canRenderChart, setCanRenderChart] = React.useState(false);

    React.useEffect(() => {
      const node = wrapperRef.current;
      if (!node) {
        return;
      }

      const update = () => {
        setCanRenderChart(node.clientWidth > 0 && node.clientHeight > 0);
      };

      update();
      const observer = new ResizeObserver(update);
      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    }, []);

    return (
      <div
        ref={(node) => {
          wrapperRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={cn("h-80 min-h-64 w-full min-w-0", className)}
        {...props}
      >
        {canRenderChart ? (
          <ResponsiveContainer
            width="100%"
            height="100%"
            minWidth={0}
            minHeight={0}
            debounce={80}
          >
            <RechartsAreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                {categories.map((category, index) => {
                  const fillColor = fillColors[index] || fillColors[0];
                  const gradientId = `gradient-${chartId}-${category}`;
                  return (
                    <linearGradient
                      key={category}
                      id={gradientId}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      {fill === "gradient" ? (
                        <>
                          <stop
                            offset="5%"
                            stopColor={fillColor}
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor={fillColor}
                            stopOpacity={0}
                          />
                        </>
                      ) : (
                        <stop stopColor={fillColor} stopOpacity={0.6} />
                      )}
                    </linearGradient>
                  );
                })}
              </defs>

              {showGrid && (
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              )}

              <XAxis
                dataKey={index}
                axisLine={false}
                tickLine={false}
                className="text-xs fill-muted-foreground"
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-xs fill-muted-foreground"
                tickFormatter={valueFormatter}
              />

              {showTooltip && (
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (!active || !payload?.length) return null;

                    return (
                      <div className="border border-border bg-popover p-2 text-popover-foreground shadow">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {index}
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {label}
                            </span>
                          </div>
                          {payload.map((entry) => (
                            <div
                              key={`${String(entry.dataKey ?? "")}-${String(entry.value ?? "")}`}
                              className="flex flex-col"
                            >
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {String(entry.dataKey ?? "")}
                              </span>
                              <span className="font-bold text-foreground">
                                {valueFormatter(entry.value as number)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }}
                />
              )}

              {categories.map((category, index) => {
                const strokeColor = strokeColors[index] || strokeColors[0];
                const gradientId = `gradient-${chartId}-${category}`;

                return (
                  <Area
                    key={category}
                    dataKey={category}
                    stroke={strokeColor}
                    fill={`url(#${gradientId})`}
                    strokeWidth={2}
                  />
                );
              })}
            </RechartsAreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full w-full border-2 border-black/20 bg-muted/30" />
        )}
      </div>
    );
  },
);

AreaChart.displayName = "AreaChart";

export { AreaChart, type AreaChartProps };
