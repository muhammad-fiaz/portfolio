"use client";

import { animate } from "animejs";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/retroui/Button";

type ResponsiveTagFilterProps = {
  tags: string[];
  selectedTag: string;
  onSelect: (tag: string) => void;
  maxVisible?: number;
};

export function normalizeTag(raw: string) {
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function ResponsiveTagFilter({
  tags,
  selectedTag,
  onSelect,
  maxVisible = 5,
}: ResponsiveTagFilterProps) {
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const uniqueTags = useMemo(() => {
    const seen = new Set<string>();
    const deduped = tags.filter((tag) => {
      if (seen.has(tag)) {
        return false;
      }
      seen.add(tag);
      return true;
    });

    const allTag = deduped.find((tag) => tag.toUpperCase() === "ALL") ?? "All";
    const rest = deduped.filter((tag) => tag.toUpperCase() !== "ALL");

    return [allTag, ...rest];
  }, [tags]);

  const visibleTags = useMemo(() => {
    if (uniqueTags.length === 0) {
      return [];
    }

    const allTag = uniqueTags[0];
    const rest = uniqueTags.slice(1);

    if (expanded) {
      return [allTag, ...rest];
    }

    return [allTag, ...rest.slice(0, maxVisible)];
  }, [expanded, maxVisible, uniqueTags]);

  const hiddenTagCount = Math.max(0, uniqueTags.length - (maxVisible + 1));

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    const chips = Array.from(
      wrapper.querySelectorAll("[data-tag-chip]"),
    ) as HTMLElement[];

    if (chips.length === 0) {
      return;
    }

    animate(chips, {
      opacity: [0, 1],
      translateY: [8, 0],
      delay: (_, index) => index * 20,
      duration: 250,
      ease: "outQuad",
    });
  });

  return (
    <div className="space-y-2" ref={wrapperRef}>
      <div className="flex flex-wrap gap-2">
        {visibleTags.length > 0 ? (
          <Button
            key={visibleTags[0]}
            data-tag-chip
            variant={selectedTag === visibleTags[0] ? "default" : "secondary"}
            onClick={() => onSelect(visibleTags[0])}
            className="max-w-full border-4 border-black px-2 py-1 text-[10px] shadow-retro-sm uppercase sm:text-xs"
          >
            {visibleTags[0]}
          </Button>
        ) : null}

        {hiddenTagCount > 0 ? (
          <Button
            data-tag-chip
            variant="secondary"
            onClick={() => setExpanded((value) => !value)}
            className="max-w-full border-4 border-black px-2 py-1 text-[10px] shadow-retro-sm uppercase sm:text-xs"
          >
            {expanded ? "Show Less" : `Show More (${hiddenTagCount})`}
          </Button>
        ) : null}

        {visibleTags.slice(1).map((tag) => (
          <Button
            key={tag}
            data-tag-chip
            variant={selectedTag === tag ? "default" : "secondary"}
            onClick={() => onSelect(tag)}
            className="max-w-full border-4 border-black px-2 py-1 text-[10px] shadow-retro-sm uppercase sm:text-xs"
          >
            {tag}
          </Button>
        ))}

        {visibleTags.length === 0 ? (
          <Button
            data-tag-chip
            variant="default"
            onClick={() => onSelect("All")}
            className="max-w-full border-4 border-black px-2 py-1 text-[10px] shadow-retro-sm uppercase sm:text-xs"
          >
            All
          </Button>
        ) : null}
      </div>
    </div>
  );
}
