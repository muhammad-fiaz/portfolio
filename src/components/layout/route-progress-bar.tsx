"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function RouteProgressBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState<"idle" | "start" | "mid" | "end">("idle");
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    setVisible(true);
    setStage("start");

    const tick = window.setTimeout(() => setStage("mid"), 80);
    const complete = window.setTimeout(() => setStage("end"), 220);
    const hide = window.setTimeout(() => {
      setVisible(false);
      setStage("idle");
    }, 430);

    return () => {
      window.clearTimeout(tick);
      window.clearTimeout(complete);
      window.clearTimeout(hide);
    };
  }, [pathname]);

  const widthClass =
    stage === "start"
      ? "w-1/5"
      : stage === "mid"
        ? "w-3/4"
        : stage === "end"
          ? "w-full"
          : "w-0";

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed left-0 right-0 top-0 z-70 h-2 border-b-2 border-black bg-muted transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`h-full bg-primary shadow-retro-sm transition-[width] duration-300 ease-out ${widthClass}`}
      />
    </div>
  );
}
