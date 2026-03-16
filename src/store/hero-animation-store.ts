import { create } from "zustand";

type HeroAnimationState = {
  hasPlayed: boolean;
  setHasPlayed: (value: boolean) => void;
};

export const useHeroAnimationStore = create<HeroAnimationState>((set) => ({
  hasPlayed: false,
  setHasPlayed: (value) => set({ hasPlayed: value }),
}));
