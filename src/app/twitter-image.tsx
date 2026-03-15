import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Muhammad Fiaz retro portfolio social card";
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return buildTwitterImage({
    eyebrow: "Shipping Ideas Into Products",
    title: "Muhammad Fiaz",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "secondary",
  });
}
