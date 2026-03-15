import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "ia_archiver",
        disallow: "/",
      },
      {
        userAgent: "wayback",
        disallow: "/",
      },
      {
        userAgent: "archive.org_bot",
        disallow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
