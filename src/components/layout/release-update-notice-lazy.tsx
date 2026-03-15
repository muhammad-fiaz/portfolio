"use client";

import dynamic from "next/dynamic";

const ReleaseUpdateNotice = dynamic(
  () =>
    import("@/components/layout/release-update-notice").then(
      (mod) => mod.ReleaseUpdateNotice,
    ),
  {
    ssr: false,
  },
);

export function ReleaseUpdateNoticeLazy() {
  return <ReleaseUpdateNotice />;
}
