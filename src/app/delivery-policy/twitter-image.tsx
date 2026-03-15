import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Delivery Policy | Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Delivery Policy",
    title: "Muhammad Fiaz",
    subtitle: "Delivery Modes And Timelines",
    accent: "primary",
  });
}
