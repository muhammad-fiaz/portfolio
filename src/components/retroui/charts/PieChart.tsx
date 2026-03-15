"use client";

import React from "react";
import { Cell, Pie, PieChart as RechartsPieChart, Tooltip } from "recharts";
import { cn } from "@/lib/utils";

interface PieChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, unknown>[];
  dataKey: string;
  nameKey: string;
  colors?: string[];
  tooltipBgColor?: string;
  tooltipBorderColor?: string;
  valueFormatter?: (value: number) => string;
  showTooltip?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  isAnimationActive?: boolean;
  animationDuration?: number;
  className?: string;
}

const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(
  (
    {
      data = [],
      dataKey,
      nameKey,
      colors = [
        "var(--chart-1)",
        "var(--chart-2)",
        "var(--chart-3)",
        "var(--chart-4)",
        "var(--chart-5)",
      ],
      tooltipBgColor = "var(--background)",
      tooltipBorderColor = "var(--border)",
      valueFormatter = (value: number) => value.toString(),
      showTooltip = true,
      innerRadius = 0,
      outerRadius = 100,
      isAnimationActive = true,
      animationDuration = 850,
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
          <RechartsPieChart width={size.width} height={size.height}>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              isAnimationActive={isAnimationActive}
              animationDuration={animationDuration}
              className="w-full h-full"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${String(entry[nameKey] ?? "slice")}-${String(entry[dataKey] ?? "")}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>

            {showTooltip && (
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;

                  const data = payload[0];

                  return (
                    <div className="border border-border bg-popover p-2 text-popover-foreground shadow">
                      <div className="flex flex-col gap-1">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          {data.name}
                        </span>
                        <span className="font-bold text-foreground">
                          {valueFormatter(data.value as number)}
                        </span>
                      </div>
                    </div>
                  );
                }}
              />
            )}
          </RechartsPieChart>
        ) : (
          <div className="h-full w-full border-2 border-black/20 bg-muted/30" />
        )}
      </div>
    );
  },
);

PieChart.displayName = "PieChart";

export { PieChart, type PieChartProps };
