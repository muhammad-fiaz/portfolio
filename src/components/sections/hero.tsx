"use client";

import { motion } from 'motion/react';
import { siteConfig } from '@/config/site.config';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Announcement, AnnouncementTitle ,AnnouncementTag} from '@/components/ui/announcement';
import { ArrowRight, Zap } from 'lucide-react';
import { ArrowUpRightIcon } from 'lucide-react';

export function HeroSection() {



  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden z-10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none select-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none select-none" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Announcement Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Announcement
              themed
              className="mx-auto flex items-center justify-center w-fit max-w-full text-xs sm:text-sm md:text-base px-4 py-1.5 border border-border dark:border-secondary"
            >
              <AnnouncementTag className="truncate">Latest update</AnnouncementTag>
              <AnnouncementTitle className="flex items-center gap-2">
                New Portfolio V4 🎉
                <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
              </AnnouncementTitle>
            </Announcement>
          </motion.div>
          {/* Main Heading - show name and description from config */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[8rem] font-extrabold tracking-tight leading-none">
                <span className="block">{siteConfig.siteName}</span>
            </h1>
              <p className="mx-auto max-w-2xl sm:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed px-4 sm:px-0">
                I Build Next-Generation Technologies
              </p>

          </div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary text-white dark:bg-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <Link href='/projects'>
                <Zap className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 text-white dark:text-black" />
                View Projects

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white dark:text-black" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-border/60 bg-background/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-background/80 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto"
            >
              <Link href={`${siteConfig.links.email}`}>
                Get in Touch

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* Floating Elements */}
      <div className="absolute left-1/4 top-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none select-none" />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none select-none" />
    </motion.section>
  );
}

