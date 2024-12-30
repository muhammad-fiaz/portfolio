'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import BlogCard from '@/src/components/content/CardBlog';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { Skeleton } from '@/src/components/ui/skeleton';
import Script from 'next/script';

const BlogSection = () => {
  const [blogSearch, setBlogSearch] = useState<string>('');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/fetchRSS`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        const filteredBlogs = data.items.filter((blog: any) =>
          blog.title.toLowerCase().includes(blogSearch.toLowerCase())
        );
        setBlogs(filteredBlogs);
      } catch (error) {
        setError('Failed to fetch blogs');
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [blogSearch, pathname]);

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Blogs" />
        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-black dark:text-white">
            These are some of the blog posts I've written since I started
            blogging. Some of them are personal, technical articles, or insights
            I've shared on various topics. If you want to see all my posts,
            visit my{' '}
            <Link
              href={siteConfig.social.blog}
              target="_blank"
              rel="noopener noreferrer"
              className=" underline transition-all ease"
            >
              Blog Page
            </Link>          </p>
        </AnimationContainer>

        <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full h-auto p-4">
                <Skeleton className="w-full h-10 mb-4 bg-gray-700 dark:bg-gray-600 rounded-md" />
                <Skeleton className="w-full h-6 bg-gray-700 dark:bg-gray-600 rounded-md" />
                <Skeleton className="w-3/4 h-4 bg-gray-700 dark:bg-gray-600 rounded-md mt-2" />
                <Skeleton className="w-full h-10 bg-gray-700 dark:bg-gray-600 rounded-md mt-4" />
              </div>
            ))
          ) : error ? (
            <div className="w-full flex justify-center items-center text-black dark:text-white p-4">
              <h2>{error}</h2>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map(({ guid, title, link, contentSnippet, categories, source }) => (
              <BlogCard key={guid} title={title} excerpt={contentSnippet} tags={categories} link={link} source={source} />
            ))
          ) : (
            <div className="w-full flex justify-center items-center text-black dark:text-white p-4">
              <h2>No blogs found</h2>
            </div>
          )}
        </article>
      </div>

      <Script
        id="json-ld-blogs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: blogs.map((blog: any, index: number) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'BlogPosting',
                headline: blog.title,
                description: blog.contentSnippet,
                url: blog.link,
                image: blog.thumbnail,
                author: {
                  '@type': 'Person',
                  name: siteConfig.author,
                },
                datePublished: blog.pubDate,
                keywords: blog.categories.join(', '),
              },
            })),
          }),
        }}
      />
    </SectionContainer>
  );
};

export default BlogSection;
