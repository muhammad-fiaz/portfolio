"use client";

import { create } from "zustand";
import {
  type StateStorage,
  createJSONStorage,
  persist,
} from "zustand/middleware";

export const BUSINESS_NOTICE_COOKIE_KEY = "mf-business-scale-notice";
export const BUSINESS_NOTICE_CYCLE_MS = 7 * 24 * 60 * 60 * 1000;

function getCookieValue(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const encodedName = `${encodeURIComponent(name)}=`;
  const cookieParts = document.cookie ? document.cookie.split("; ") : [];

  for (const part of cookieParts) {
    if (part.startsWith(encodedName)) {
      return decodeURIComponent(part.slice(encodedName.length));
    }
  }

  return null;
}

const cookieStorage: StateStorage = {
  getItem: (name) => getCookieValue(name),
  setItem: (name, value) => {
    if (typeof document === "undefined") {
      return;
    }

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
  },
  removeItem: (name) => {
    if (typeof document === "undefined") {
      return;
    }

    document.cookie = `${encodeURIComponent(name)}=; Path=/; Max-Age=0; SameSite=Lax`;
  },
};

type BusinessNoticeState = {
  dismissed: boolean;
  cycleStartAt: number | null;
  hydrated: boolean;
  dismissNotice: () => void;
  ensureCycleStarted: (now: number) => void;
  syncCycle: (now: number) => void;
  resetCycle: (now: number) => void;
  setHydrated: (hydrated: boolean) => void;
};

export const useBusinessNoticeStore = create<BusinessNoticeState>()(
  persist(
    (set) => ({
      dismissed: false,
      cycleStartAt: null,
      hydrated: false,
      dismissNotice: () => set({ dismissed: true }),
      ensureCycleStarted: (now) =>
        set((state) => {
          if (state.cycleStartAt !== null) {
            return state;
          }

          return {
            cycleStartAt: now,
            dismissed: false,
          };
        }),
      syncCycle: (now) =>
        set((state) => {
          if (state.cycleStartAt === null) {
            return {
              cycleStartAt: now,
              dismissed: false,
            };
          }

          if (now - state.cycleStartAt >= BUSINESS_NOTICE_CYCLE_MS) {
            return {
              cycleStartAt: now,
              dismissed: false,
            };
          }

          return state;
        }),
      resetCycle: (now) => set({ cycleStartAt: now, dismissed: false }),
      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: BUSINESS_NOTICE_COOKIE_KEY,
      storage: createJSONStorage(() => cookieStorage),
      partialize: (state) => ({
        dismissed: state.dismissed,
        cycleStartAt: state.cycleStartAt,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
