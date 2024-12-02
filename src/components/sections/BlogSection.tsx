'use client';

import { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import BlogCard from '@/src/components/content/CardBlog';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { Skeleton } from '@/src/components/ui/skeleton';

const BlogSection = () => {
  const [blogSearch, setBlogSearch] = useState<string>('');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/fetchRSS`);
        const data = await response.json();

        // Filter blogs based on search
        const filteredBlogs = data.items.filter((blog: any) =>
          blog.title.toLowerCase().includes(blogSearch.toLowerCase())
        );

        setBlogs(filteredBlogs);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [blogSearch]);

  // Generate JSON-LD structured data for the blogs
  const generateJsonLd = (blogs: any[]) => {
    const jsonLd = {
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
          image: blog.thumbnail, // Add the thumbnail URL if available
          author: {
            '@type': 'Person',
            name: siteConfig.author, // Assuming you have an author name
          },
          datePublished: blog.pubDate,
          keywords: blog.categories.join(', '), // Assuming categories are tags
        },
      })),
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Blogs" />

        {/* Add JSON-LD metadata for the page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJsonLd(blogs),
          }}
        />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-gray-400">
            These are some of the blog posts I've written since I started
            blogging. Some of them are personal, technical articles, or insights
            I've shared on various topics. If you want to see all my posts,
            visit my{' '}
            <Link
              href={siteConfig.social.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              Blog Page
            </Link>
            .
          </p>
        </AnimationContainer>

        {/* Blog Search */}
        <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
          <div className="w-full flex items-center lg:w-3/6 h-12 rounded-xl shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
            <div className="grid place-items-center h-full w-12 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
              type="text"
              placeholder="Search blogs by title..."
              value={blogSearch}
              onChange={(e) => setBlogSearch(e.target.value)}
            />
          </div>
        </AnimationContainer>

        {/* Display Blogs */}
        <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full h-auto p-4">
                {/* Title Skeleton */}
                <Skeleton className="w-full h-10 mb-4 bg-gray-700 rounded-md" />

                {/* Description Skeleton */}
                <Skeleton className="w-full h-6 bg-gray-700 rounded-md" />

                {/* Categories Skeleton */}
                <Skeleton className="w-3/4 h-4 bg-gray-700 rounded-md mt-2" />

                {/* Footer Links Skeleton */}
                <Skeleton className="w-full h-10 bg-gray-700 rounded-md mt-4" />
              </div>
            ))
          ) : blogs.length > 0 ? (
            blogs.map(
              ({ guid, title, link, contentSnippet, categories, source }) => (
                <BlogCard
                  key={guid}
                  title={title}
                  excerpt={contentSnippet}
                  tags={categories} // Pass categories as tags
                  link={link}
                  source={source} // Pass blog source
                />
              )
            )
          ) : (
            <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
              <div className="text-center text-white p-4 bg-gray-800 rounded-md shadow-md">
                <h2>No blogs found</h2>
              </div>
            </AnimationContainer>
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default BlogSection;
