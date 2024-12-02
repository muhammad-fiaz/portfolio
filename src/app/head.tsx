'use client';

import { usePathname } from 'next/navigation';
import { generateMetadata } from '@/src/components/utils/generateMetadata';

const Head = () => {
  const pathname = usePathname() || '/';

  const meta = generateMetadata({
    title: pathname === '/' ? '' : pathname.slice(1).replace(/-/g, ' '),
    path: pathname,
  });

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content={meta.openGraph.type} />
      <meta property="og:site_name" content={meta.openGraph.site_name} />
      <meta property="og:title" content={meta.openGraph.title} />
      <meta property="og:description" content={meta.openGraph.description} />
      <meta property="og:image" content={meta.openGraph.image} />
      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:site" content={meta.twitter.site} />
      <meta name="twitter:title" content={meta.twitter.title} />
      <meta name="twitter:description" content={meta.twitter.description} />
      <meta name="twitter:image" content={meta.twitter.image} />
      <link rel="canonical" href={meta.url} />
      <link rel="icon" href={meta.link[0].href} />

    </>
  );
};

export default Head;
