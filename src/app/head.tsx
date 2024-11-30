'use client';

import { usePathname } from 'next/navigation';
import { siteConfig } from '@/src/configs/config';

const Head = () => {
    const pathname = usePathname() || '/'; // Fallback to '/' if pathname is null

    const titleFixedToShow =
        pathname === '/'
            ? ''
            : `· ${pathname.slice(1).charAt(0).toUpperCase()}${pathname.slice(2)}`;

    const meta = {
        title: `${siteConfig.titlePrefix} ${titleFixedToShow}`,
        description: siteConfig.metadata.description,
        keywords: siteConfig.metadata.keywords,
        type: siteConfig.metadata.type,
        url: `${siteConfig.baseUrl}${pathname}`,
    };

    return (
      <>
          <title>{meta.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          <meta property="og:url" content={meta.url} />
          <link rel="canonical" href={meta.url} />
          <link rel="me" href={siteConfig.social.email} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content={siteConfig.titlePrefix} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={siteConfig.social.twitter} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <link rel="icon" href="/public/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />


      </>
    );
};

export default Head;
