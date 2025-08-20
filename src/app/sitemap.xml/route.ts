import { siteConfig } from '@/config/site.config';

const STATIC_PAGES = [
  '/',
  '/about',
  '/projects',
  '/posts',
  '/chat',
  '/privacy-policy',
  '/terms-of-service',
  '/refund-policy',
];

function buildUrl(host: string, path: string) {
  // ensure host has no trailing slash
  const domain = host.replace(/\/$/, '');
  return `https://${domain}${path}`;
}

export async function GET() {
  const host = siteConfig.domain || 'localhost';
  const urls = STATIC_PAGES.map((p) => {
    return `  <url>\n    <loc>${buildUrl(host, p)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
