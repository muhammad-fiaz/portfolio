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
  nextShowAt: number | null;
  dismissed: boolean;
  cycleStartAt: number | null;
  hydrated: boolean;
  
  initialize: (now?: number) => void;
  dismissNotice: () => void;
  redeemOffer: (now?: number) => void;
  syncCycle: (now: number) => void;
  setHydrated: (hydrated: boolean) => void;
  ensureCycleStarted: (now: number) => void;
};

export const useBusinessNoticeStore = create<BusinessNoticeState>()(
  persist(
    (set) => ({
      nextShowAt: null,
      dismissed: false,
      cycleStartAt: null,
      hydrated: false,
      
      initialize: (now = Date.now()) => set((state) => {
        const updates: Partial<BusinessNoticeState> = {};
        
        if (state.cycleStartAt === null) {
          updates.cycleStartAt = now;
        }
        
        if (state.nextShowAt === null && !state.dismissed) {
          updates.nextShowAt = now + 5000; // Show after 5 seconds initially
          updates.dismissed = false;
        }
        
        return updates;
      }),
      dismissNotice: () => set({
        nextShowAt: Date.now() + Math.floor(Math.random() * 120000) + 60000,
        dismissed: true
      }),
      redeemOffer: (now = Date.now()) => set({
        nextShowAt: now + 300000,
        dismissed: true
      }),
      syncCycle: (now) => set((state) => {
        if (state.cycleStartAt === null) return { cycleStartAt: now };
        if (now - state.cycleStartAt >= BUSINESS_NOTICE_CYCLE_MS) {
          return { cycleStartAt: now, dismissed: false };
        }
        return state;
      }),
      setHydrated: (hydrated) => set({ hydrated }),
      ensureCycleStarted: (now) => set((state) => {
        if (state.cycleStartAt === null) {
          return { cycleStartAt: now };
        }
        return state;
      }),
    }),
    {
      name: BUSINESS_NOTICE_COOKIE_KEY,
      storage: createJSONStorage(() => cookieStorage),
      partialize: (state) => ({
        nextShowAt: state.nextShowAt,
        dismissed: state.dismissed,
        cycleStartAt: state.cycleStartAt,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
