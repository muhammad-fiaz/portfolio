import { create } from "zustand";
import { persist } from "zustand/middleware";

type SnippetTab = "next" | "query" | "store";

type ShowcaseState = {
  activeStack: number;
  activeSnippet: SnippetTab;
  flippedCard: number;
  setActiveStack: (value: number) => void;
  setActiveSnippet: (value: SnippetTab) => void;
  setFlippedCard: (value: number) => void;
};

export const useShowcaseStore = create<ShowcaseState>()(
  persist(
    (set) => ({
      activeStack: 0,
      activeSnippet: "next",
      flippedCard: 0,
      setActiveStack: (value) => set({ activeStack: value }),
      setActiveSnippet: (value) => set({ activeSnippet: value }),
      setFlippedCard: (value) => set({ flippedCard: value }),
    }),
    {
      name: "showcase-store",
      partialize: (state) => ({
        activeStack: state.activeStack,
        activeSnippet: state.activeSnippet,
        flippedCard: state.flippedCard,
      }),
    },
  ),
);
