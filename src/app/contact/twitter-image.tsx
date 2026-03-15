import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Contact Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Contact",
    title: "Muhammad Fiaz",
    subtitle: "Projects | Consulting | Collaboration",
    accent: "primary",
  });
}
