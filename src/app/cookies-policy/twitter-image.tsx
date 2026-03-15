import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Cookies Policy | Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Cookies Policy",
    title: "Muhammad Fiaz",
    subtitle: "Cookies And Analytics",
    accent: "secondary",
  });
}
