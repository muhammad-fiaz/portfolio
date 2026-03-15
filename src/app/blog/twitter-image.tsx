import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Blog by Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Blog",
    title: "Muhammad Fiaz",
    subtitle: "Product Notes | Engineering",
    accent: "secondary",
  });
}
