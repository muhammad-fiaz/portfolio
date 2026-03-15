import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Muhammad Fiaz Portfolio v5 preview";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: "Muhammad Fiaz Portfolio v5",
    title: "Muhammad Fiaz",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "primary",
  });
}
