import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/project",
    "/projects",
    "/blog",
    "/blogs",
    "/contact",
    "/privacy-policy",
    "/refund-policy",
    "/terms-of-service",
    "/delivery-policy",
    "/cookies-policy",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: "2026-05-02T16:00:00Z",
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
