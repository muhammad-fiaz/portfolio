import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProjectsState = {
  query: string;
  selectedTag: string;
  sortBy: "recent" | "stars-desc" | "stars-asc" | "name-asc";
  setQuery: (query: string) => void;
  setSelectedTag: (selectedTag: string) => void;
  setSortBy: (sortBy: ProjectsState["sortBy"]) => void;
};

export const useProjectsStore = create<ProjectsState>()(
  persist(
    (set) => ({
      query: "",
      selectedTag: "All",
      sortBy: "recent",
      setQuery: (query) => set({ query }),
      setSelectedTag: (selectedTag) => set({ selectedTag }),
      setSortBy: (sortBy) => set({ sortBy }),
    }),
    {
      name: "projects-store",
      partialize: (state) => ({
        query: state.query,
        selectedTag: state.selectedTag,
        sortBy: state.sortBy,
      }),
    },
  ),
);
