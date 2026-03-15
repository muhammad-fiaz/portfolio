import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Privacy Policy | Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Privacy Policy",
    title: "Muhammad Fiaz",
    subtitle: "Data Use And Protection",
    accent: "secondary",
  });
}
