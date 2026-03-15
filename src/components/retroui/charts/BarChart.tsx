"use client";

import React from "react";
import {
  Bar,
  CartesianGrid,
  BarChart as RechartsBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
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
  stacked?: boolean;
  alignment?: "vertical" | "horizontal";
  isAnimationActive?: boolean;
  animationDuration?: number;
  horizontalYAxisWidth?: number;
  horizontalCategoryFormatter?: (value: string) => string;
  className?: string;
}

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (
    {
      data = [],
      index,
      categories = [],
      strokeColors = ["var(--foreground)"],
      fillColors = ["var(--primary)", "var(--secondary)"],
      tooltipBgColor = "var(--background)",
      tooltipBorderColor = "var(--border)",
      gridColor = "var(--muted)",
      valueFormatter = (value: number) => value.toString(),
      showGrid = true,
      showTooltip = true,
      stacked = false,
      alignment = "vertical",
      isAnimationActive = true,
      animationDuration = 750,
      horizontalYAxisWidth = 96,
      horizontalCategoryFormatter,
      className,
      ...props
    },
    ref,
  ) => {
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);
    const [size, setSize] = React.useState({ width: 0, height: 0 });

    React.useEffect(() => {
      const node = wrapperRef.current;
      if (!node) {
        return;
      }

      const update = () => {
        setSize({
          width: Math.floor(node.clientWidth),
          height: Math.floor(node.clientHeight),
        });
      };

      update();
      const observer = new ResizeObserver(update);
      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    }, []);

    const canRenderChart = size.width > 0 && size.height > 0;

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
          <RechartsBarChart
            width={size.width}
            height={size.height}
            data={data}
            layout={alignment === "horizontal" ? "vertical" : undefined}
            margin={
              alignment === "horizontal"
                ? { top: 10, right: 22, left: 10, bottom: 0 }
                : { top: 10, right: 30, left: 0, bottom: 0 }
            }
          >
            {showGrid && (
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            )}

            {alignment === "horizontal" ? (
              <>
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  className="text-xs fill-muted-foreground"
                  tickFormatter={valueFormatter}
                />

                <YAxis
                  type="category"
                  dataKey={index}
                  axisLine={false}
                  tickLine={false}
                  className="text-xs fill-muted-foreground"
                  width={horizontalYAxisWidth}
                  tickFormatter={horizontalCategoryFormatter}
                />
              </>
            ) : (
              <>
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
              </>
            )}

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
                            key={
                              typeof entry.dataKey === "string" ||
                              typeof entry.dataKey === "number"
                                ? String(entry.dataKey)
                                : "value"
                            }
                            className="flex flex-col"
                          >
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {typeof entry.dataKey === "string" ||
                              typeof entry.dataKey === "number"
                                ? String(entry.dataKey)
                                : "value"}
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
              const fillColor = fillColors[index] || fillColors[0];
              const strokeColor = strokeColors[index] || strokeColors[0];

              return (
                <Bar
                  key={category}
                  dataKey={category}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={1}
                  isAnimationActive={isAnimationActive}
                  animationDuration={animationDuration}
                  stackId={stacked ? "strokeId" : undefined}
                />
              );
            })}
          </RechartsBarChart>
        ) : (
          <div className="h-full w-full border-2 border-black/20 bg-muted/30" />
        )}
      </div>
    );
  },
);

BarChart.displayName = "BarChart";

export { BarChart, type BarChartProps };
