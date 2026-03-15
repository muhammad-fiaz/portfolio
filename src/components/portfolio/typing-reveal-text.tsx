"use client";

import { useEffect, useState } from "react";

export function TypingRevealText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;
      setDisplay(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, 30);

    return () => {
      window.clearInterval(interval);
    };
  }, [text]);

  return (
    <span className={className}>
      {display}
      <span className="ml-1 inline-block h-[1em] w-[0.62ch] animate-pulse bg-foreground align-[-0.12em]" />
    </span>
  );
}
