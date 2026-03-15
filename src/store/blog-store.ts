import { create } from "zustand";
import { persist } from "zustand/middleware";

type BlogSource = "All" | "Hashnode" | "Dev.to" | "Medium";

type BlogState = {
  query: string;
  source: BlogSource;
  selectedTag: string;
  sortBy: "newest" | "oldest" | "read-desc" | "read-asc" | "title-asc";
  setQuery: (query: string) => void;
  setSource: (source: BlogSource) => void;
  setSelectedTag: (selectedTag: string) => void;
  setSortBy: (sortBy: BlogState["sortBy"]) => void;
};

export const useBlogStore = create<BlogState>()(
  persist(
    (set) => ({
      query: "",
      source: "All",
      selectedTag: "All",
      sortBy: "newest",
      setQuery: (query) => set({ query }),
      setSource: (source) => set({ source }),
      setSelectedTag: (selectedTag) => set({ selectedTag }),
      setSortBy: (sortBy) => set({ sortBy }),
    }),
    {
      name: "blog-store",
      partialize: (state) => ({
        query: state.query,
        source: state.source,
        selectedTag: state.selectedTag,
        sortBy: state.sortBy,
      }),
    },
  ),
);
