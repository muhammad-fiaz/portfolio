import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "About Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "About",
    title: "Muhammad Fiaz",
    subtitle: "Journey | Work | Open-Sourcerer",
    accent: "accent",
  });
}
