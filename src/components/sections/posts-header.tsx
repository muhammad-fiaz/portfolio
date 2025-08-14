"use client";

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { PenTool, Rss, BookOpen } from 'lucide-react';

export function PostsHeader() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20">
          <PenTool className="mr-1 h-3 w-3" />
          Blog Posts
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
          Latest{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Articles
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          My thoughts on technology, development best practices, machine learning, 
          and the future of software development. Articles from both Hashnode and Medium.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-6 mt-8"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span>Hashnode</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Rss className="h-4 w-4" />
          <span>Medium</span>
        </div>
      </motion.div>
    </div>
  );
}
