import { create } from "zustand";
import { persist } from "zustand/middleware";

type HomeFocus = "All" | "Product" | "Open Source" | "AI" | "Services";

type HomeState = {
  focus: HomeFocus;
  setFocus: (focus: HomeFocus) => void;
};

export const useHomeStore = create<HomeState>()(
  persist(
    (set) => ({
      focus: "All",
      setFocus: (focus) => set({ focus }),
    }),
    {
      name: "home-store",
      partialize: (state) => ({ focus: state.focus }),
    },
  ),
);
