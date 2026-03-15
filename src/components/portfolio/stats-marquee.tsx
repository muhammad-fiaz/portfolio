"use client";

import { motion } from "framer-motion";

const items = [
  "25+ HAPPY CLIENTS WORLDWIDE",
  "99.9% DELIVERY",
  "BASED IN INDIA",
];

export function StatsMarquee() {
  const lineItems: Array<{ id: string; label: string }> = [];

  for (const cycle of ["a", "b", "c", "d"] as const) {
    for (const item of items) {
      lineItems.push({ id: `${cycle}-${item}`, label: item });
    }
  }

  return (
    <div className="relative overflow-hidden border-y-4 border-black bg-primary py-3 text-primary-foreground">
      <motion.div
        className="flex w-max font-black uppercase tracking-wide"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {[0, 1].map((track) => (
          <div
            key={track}
            className="flex shrink-0 gap-6 whitespace-nowrap pr-6"
          >
            {lineItems.map((item) => (
              <span
                key={`${track}-${item.id}`}
                className="inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <span>★</span>
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
