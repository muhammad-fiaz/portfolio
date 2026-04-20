"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/retroui/Button";

const CONSENT_KEY = "mf-cookie-consent-v1";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const dismiss = () => {
    window.localStorage.setItem(CONSENT_KEY, "dismissed");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-2 right-2 z-50 border-4 border-black bg-card p-4 shadow-retro-lg sm:bottom-4 sm:right-4 sm:w-full sm:max-w-xl"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
    >
      <p className="font-display text-lg uppercase">Cookie Notice</p>
      <p className="mt-2 text-sm font-medium leading-relaxed">
        This site uses cookies and analytics tools (including Google Analytics
        and Tag Manager) to improve performance and understand usage. By
        continuing, you agree to this use.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <Button
          onClick={accept}
          className="w-full border-4 border-black uppercase shadow-retro-sm sm:w-auto"
        >
          Accept
        </Button>
        <Button
          onClick={dismiss}
          variant="secondary"
          className="w-full border-4 border-black uppercase shadow-retro-sm sm:w-auto"
        >
          Dismiss
        </Button>
        <Link
          href="/cookies-policy"
          className="retro-link block w-full text-center sm:w-auto"
        >
          Cookies Policy
        </Link>
      </div>
    </div>
  );
}
