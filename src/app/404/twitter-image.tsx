import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "404 | Route Not Found";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "404",
    title: "Muhammad Fiaz",
    subtitle: "This Route Is Not Available",
    accent: "accent",
  });
}
