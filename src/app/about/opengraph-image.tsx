import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "About Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "About",
    title: "About Muhammad Fiaz",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "accent",
  });
}
