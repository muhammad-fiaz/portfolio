import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Contact Muhammad Fiaz";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "Contact Me For Enquiry",
    title: "Let's Build Together",
    subtitle: "Projects | Consulting | Collaboration",
    accent: "primary",
  });
}
