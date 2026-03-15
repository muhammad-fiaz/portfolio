import { create } from "zustand";
import { persist } from "zustand/middleware";

type SystemPagesState = {
  lastPath: string;
  retryCount: number;
  setLastPath: (path: string) => void;
  incrementRetryCount: () => void;
  clearRetryCount: () => void;
};

export const useSystemPagesStore = create<SystemPagesState>()(
  persist(
    (set) => ({
      lastPath: "/",
      retryCount: 0,
      setLastPath: (path) => set({ lastPath: path }),
      incrementRetryCount: () =>
        set((state) => ({ retryCount: state.retryCount + 1 })),
      clearRetryCount: () => set({ retryCount: 0 }),
    }),
    {
      name: "system-pages-store",
      partialize: (state) => ({
        lastPath: state.lastPath,
        retryCount: state.retryCount,
      }),
    },
  ),
);
