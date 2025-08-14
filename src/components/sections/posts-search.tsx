"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';

interface PostsSearchProps {
  onSearch?: (query: string) => void;
  onTagFilter?: (tag: string | null) => void;
}


export function PostsSearch({ onSearch, onTagFilter }: PostsSearchProps = {}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // If you want to pass tags, do it via props in future
  const tags: string[] = [];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleTagClick = (tag: string) => {
    const newTag = selectedTag === tag ? null : tag;
    setSelectedTag(newTag);
    onTagFilter?.(newTag);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag(null);
    onSearch?.('');
    onTagFilter?.(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-12 space-y-6"
    >
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
  <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2 transition-colors" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 bg-background/50 backdrop-blur-sm border-border/60 focus:border-primary/50"
        />
      </div>

      {/* Tag Filters (dynamic, if tags are provided) */}
      {tags.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleTagClick(tag)}
              className="text-xs h-7"
            >
              {tag}
            </Button>
          ))}
          {(searchQuery || selectedTag) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs h-7 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
      )}

      {/* Active Filters */}
      {(searchQuery || selectedTag) && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {searchQuery && (
            <Badge variant="secondary" className="text-xs">
              Search: &quot;{searchQuery}&quot;
            </Badge>
          )}
          {selectedTag && (
            <Badge variant="secondary" className="text-xs">
              Tag: {selectedTag}
            </Badge>
          )}
        </div>
      )}
    </motion.div>
  );
}
