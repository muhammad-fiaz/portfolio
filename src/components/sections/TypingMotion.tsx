"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface TypingMotionProps {
  roles: string[];
  className?: string;
}

export function TypingMotion({ roles, className }: TypingMotionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    setDisplayed(roles[roleIndex]);
  }, [roleIndex, roles]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={displayed}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className={className}
      >
        {displayed}
      </motion.span>
    </AnimatePresence>
  );
}
