"use client";

import { useEffect, useState } from "react";

export function MatrixBinaryText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 22;

    const interval = window.setInterval(() => {
      frame += 1;

      const next = text
        .split("")
        .map((char, index) => {
          if (char === " ") {
            return " ";
          }

          if (index < Math.floor((frame / totalFrames) * text.length)) {
            return char;
          }

          return Math.random() > 0.5 ? "1" : "0";
        })
        .join("");

      setDisplay(next);

      if (frame >= totalFrames) {
        setDisplay(text);
        window.clearInterval(interval);
      }
    }, 45);

    return () => {
      window.clearInterval(interval);
    };
  }, [text]);

  return <span className={className}>{display}</span>;
}
