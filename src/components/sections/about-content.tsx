"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import {siteConfig} from '@/config/site.config'


export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">

        <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
          <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background">
            <Image
              src={siteConfig.author_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
            {/* SaaS-style background effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
            </div>
          </div>
          <div className="text-center text-3xl font-extrabold text-primary mt-4">Muhammad Fiaz</div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">
            Hi, I&apos;m Muhammad Fiaz—a passionate full-stack developer and SaaS enthusiast dedicated to building modern, scalable web applications. With a strong foundation in TypeScript, React, and Next.js, I thrive on transforming ideas into beautiful, performant products that delight users and drive business growth.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey in tech began with a curiosity for how things work and a drive to solve real-world problems. Over the years, I&apos;ve collaborated with startups and global teams, delivering robust solutions in e-commerce, productivity, and developer tooling. I believe in clean code, thoughtful design, and continuous learning.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing to open source, or sharing insights with the developer community. Let&apos;s connect and build something amazing together!
          </p>
        </CardContent>
    </Card>

    </motion.div>
  );
}
