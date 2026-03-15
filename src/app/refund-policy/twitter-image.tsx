import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Refund Policy | Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Refund Policy",
    title: "Muhammad Fiaz",
    subtitle: "Service Refund Conditions",
    accent: "accent",
  });
}
