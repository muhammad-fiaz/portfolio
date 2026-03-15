import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Privacy Policy | Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "Privacy Policy",
    title: "Data And Privacy",
    subtitle: "Muhammad Fiaz Portfolio",
    accent: "secondary",
  });
}
