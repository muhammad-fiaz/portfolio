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
import SearchInput from '@/src/components/ui/SearchInput';

interface Blog {
  guid: string;
  title: string;
  link: string;
  contentSnippet: string;
  categories: string[];
  source: string;
  thumbnail?: string;
  pubDate?: string;
}

const BlogSection = () => {
  const [blogSearch, setBlogSearch] = useState<string>(''); // Add search bar functionality
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

        const filteredBlogs = data.items.filter((blog: Blog) =>
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
              className="underline transition-all ease"
            >
              Blog Page
            </Link>
            .
          </p>

          {/* Use SearchInput component */}
          <SearchInput
            value={blogSearch}
            onChange={(e) => setBlogSearch(e.target.value)}
            placeholder="Search blogs (Articles, topics, etc...)"
            ariaLabel="Search blogs"
          />
        </AnimationContainer>

        <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="w-full h-auto p-4">
                <Skeleton className="w-full h-10 mb-4 bg-gray-700 dark:bg-gray-600 rounded-md" />
                <Skeleton className="w-full h-6 bg-gray-700 dark:bg-gray-600 rounded-md" />
                <Skeleton className="w-3/4 h-4 bg-gray-700 dark:bg-gray-600 rounded-md mt-2" />
                <Skeleton className="w-full h-10 bg-gray-700 dark:bg-gray-600 rounded-md mt-4" />
              </div>
            ))
          ) : error ? (
            <div
              key="error-message"
              className="w-full flex justify-center items-center text-black dark:text-white p-4"
            >
              <h2>{error}</h2>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map(
              ({
                guid,
                title,
                link,
                contentSnippet,
                categories,
                source,
                thumbnail,
                pubDate
              }) => (
                <div key={`blog-${guid}`} className="w-full">
                  {/* Individual JSON-LD for Each Blog Post */}
                  <Script
                    key={`json-ld-blog-${guid}`}
                    id={`json-ld-blog-${guid}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: title,
                        description: contentSnippet,
                        url: link,
                        image: thumbnail || undefined, // Optional field
                        author: {
                          '@type': 'Person',
                          name: siteConfig.author // Assuming the author's name is from siteConfig
                        },
                        datePublished: pubDate || undefined, // Optional field, fallback to undefined if not available
                        keywords: categories.join(', ')
                      })
                    }}
                  />
                  <BlogCard
                    key={guid}
                    title={title}
                    excerpt={contentSnippet}
                    tags={categories}
                    link={link}
                    source={source}
                  />
                </div>
              )
            )
          ) : (
            <div
              key="no-blogs"
              className="w-full flex justify-center items-center text-black dark:text-white p-4"
            >
              <h2>No blogs found</h2>
            </div>
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default BlogSection;
