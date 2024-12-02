// /pages/api/fetchRSS.ts
import Parser from 'rss-parser';
import { siteConfig } from '@/src/configs/config';

export default async function handler(req: any, res: any) {
  const parser = new Parser();
  const feed = await parser.parseURL(`${siteConfig.social.blog}/rss.xml`);

  // Assuming `feed.items` contains a `categories` field for tags
  const blogs = feed.items.map((item: any) => ({
    guid: item.guid,
    title: item.title,
    link: item.link,
    contentSnippet: item.contentSnippet,
    categories: item.categories || [], // Categories (tags)
    source: item.source?.title || 'Hashnode' // Get the source blog title
  }));

  res.status(200).json({ items: blogs });
}
