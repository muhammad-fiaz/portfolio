"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, unknown>[];
  index: string;
  categories: string[];
  strokeColors?: string[];
  tooltipBgColor?: string;
  tooltipBorderColor?: string;
  gridColor?: string;
  valueFormatter?: (value: number) => string;
  showGrid?: boolean;
  showTooltip?: boolean;
  strokeWidth?: number;
  dotSize?: number;
  isAnimationActive?: boolean;
  animationDuration?: number;
  className?: string;
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data = [],
      index,
      categories = [],
      strokeColors = ["var(--foreground)"],
      tooltipBgColor = "var(--background)",
      tooltipBorderColor = "var(--border)",
      gridColor = "var(--muted)",
      valueFormatter = (value: number) => value.toString(),
      showGrid = true,
      showTooltip = true,
      strokeWidth = 2,
      dotSize = 4,
      isAnimationActive = true,
      animationDuration = 800,
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
          <RechartsLineChart
            width={size.width}
            height={size.height}
            data={data}
            margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
          >
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
              const strokeColor = strokeColors[index] || strokeColors[0];

              return (
                <Line
                  key={category}
                  dataKey={category}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  isAnimationActive={isAnimationActive}
                  animationDuration={animationDuration}
                  dot={{ r: dotSize, fill: strokeColor }}
                  activeDot={{ r: dotSize + 2, fill: strokeColor }}
                />
              );
            })}
          </RechartsLineChart>
        ) : (
          <div className="h-full w-full border-2 border-black/20 bg-muted/30" />
        )}
      </div>
    );
  },
);

LineChart.displayName = "LineChart";

export { LineChart, type LineChartProps };
