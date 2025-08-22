import { siteConfig } from '@/config/site.config';

export async function GET() {
  const host = siteConfig.domain || 'localhost';
  const lines = [
    'User-agent: *',
  'Disallow:',
  // Explicitly allow common payment/verification endpoints (e.g. Razorpay webhooks)
  'Allow: /api/razorpay',
  'Allow: /api/payment',
  'Allow: /api/webhook',
  'Allow: /verify',
  'Allow: /payments',
    `Sitemap: https://${host}/sitemap.xml`,
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
