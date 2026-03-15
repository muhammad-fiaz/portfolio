"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      whileHover={{ x: 4, y: 4, boxShadow: "0px 0px 0px rgba(0,0,0,1)" }}
      className={cn(
        "rounded-none border-4 border-black bg-card p-4 text-card-foreground shadow-retro-md",
        className,
      )}
    >
      {children}
    </motion.article>
  );
}
