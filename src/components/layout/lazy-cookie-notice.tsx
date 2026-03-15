"use client";

import dynamic from "next/dynamic";

const CookieNotice = dynamic(
  () =>
    import("@/components/layout/cookie-notice").then((mod) => mod.CookieNotice),
  { ssr: false },
);

export function LazyCookieNotice() {
  return <CookieNotice />;
}
