import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Projects by Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Projects",
    title: "Muhammad Fiaz",
    subtitle: "Product Engineering Portfolio",
    accent: "primary",
  });
}
