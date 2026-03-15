"use client";

import { animate } from "animejs";
import { useEffect, useState } from "react";

type AnimatedNumberTickerProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function AnimatedNumberTicker({
  value,
  prefix = "",
  suffix = "",
  decimals = 1,
  className,
}: AnimatedNumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    const state = { current: 0 };
    animate(state, {
      current: value,
      duration: 1100,
      ease: "outCubic",
      onUpdate: () => {
        setDisplayValue(state.current);
      },
    });
  }, [value]);

  return (
    <span className={className}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}
