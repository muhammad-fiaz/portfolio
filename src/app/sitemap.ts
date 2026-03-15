import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/project",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/refund-policy",
    "/terms-of-service",
    "/delivery-policy",
    "/cookies-policy",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
