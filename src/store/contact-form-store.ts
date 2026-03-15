import { create } from "zustand";
import { persist } from "zustand/middleware";

export const CONTACT_SUBMISSION_COOLDOWN_MS = 10 * 60 * 1000;

type PopupState = {
  open: boolean;
  status: "success" | "error" | "info";
  title: string;
  description: string;
};

type ContactFormState = {
  cooldownByEmail: Record<string, number>;
  popup: PopupState;
  setCooldown: (email: string, expiresAt: number) => void;
  getRemainingMs: (email: string, nowMs?: number) => number;
  openPopup: (popup: Omit<PopupState, "open">) => void;
  closePopup: () => void;
};

export const useContactFormStore = create<ContactFormState>()(
  persist(
    (set, get) => ({
      cooldownByEmail: {},
      popup: {
        open: false,
        status: "info",
        title: "",
        description: "",
      },
      setCooldown: (email, expiresAt) =>
        set((state) => ({
          cooldownByEmail: {
            ...state.cooldownByEmail,
            [email]: expiresAt,
          },
        })),
      getRemainingMs: (email, nowMs) => {
        if (!email) {
          return 0;
        }

        const expiresAt = get().cooldownByEmail[email] ?? 0;
        const currentTime = nowMs ?? Date.now();
        return Math.max(0, expiresAt - currentTime);
      },
      openPopup: (popup) =>
        set({
          popup: {
            ...popup,
            open: true,
          },
        }),
      closePopup: () =>
        set((state) => ({
          popup: {
            ...state.popup,
            open: false,
          },
        })),
    }),
    {
      name: "contact-form-store",
      partialize: (state) => ({
        cooldownByEmail: state.cooldownByEmail,
      }),
    },
  ),
);
