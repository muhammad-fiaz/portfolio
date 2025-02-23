'use client';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';

type BlogCardProps = {
  title: string;
  excerpt: string;
  tags?: string[];
  link: string;
  source: string;
};

const BlogCard = ({ title, excerpt, tags, link, source }: BlogCardProps) => {
  const [showFullExcerpt, setShowFullExcerpt] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const maxExcerptLength = 100; // Limit for excerpt on mobile
  const maxTagsToShowMobile = 3; // Limit for tags on mobile

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimationContainer customClassName="w-full flex flex-col justify-center items-center rounded-xl border border-black/20 hover:border-white bg-[#080809] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 transition-all ease-in-out duration-300 transform hover:scale-105 text-black bg-white dark:bg-black dark:text-white">
      <div className="w-full flex flex-col justify-center items-start gap-5">
        {/* Title */}
        <h3 className="text-2xl lg:text-2xl font-medium transition-all ease-in-out duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-base transition-all ease-in-out duration-300">
          {!isMobile || showFullExcerpt || excerpt.length <= maxExcerptLength
            ? excerpt
            : `${excerpt.slice(0, maxExcerptLength)}...`}
          {isMobile && excerpt.length > maxExcerptLength && (
            <Button
              onPress={() => setShowFullExcerpt(!showFullExcerpt)}
              className="ml-2 text-sm text-blue-500 hover:underline bg-transparent"
            >
              {showFullExcerpt ? 'Show Less' : 'Show More'}
            </Button>
          )}
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags &&
            tags.length > 0 &&
            tags
              .slice(
                0,
                isMobile && !showAllTags ? maxTagsToShowMobile : tags.length
              )
              .map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap bg-gray-400 dark:bg-gray-700"
                >
                  {tag}
                </span>
              ))}
          {isMobile &&
            tags &&
            tags.length > maxTagsToShowMobile &&
            !showAllTags && (
              <Button
                onPress={() => setShowAllTags(true)}
                className="text-xs px-2 py-1 rounded-md shadow-md bg-gray-300 dark:bg-gray-600"
              >
                ...
              </Button>
            )}
          {isMobile && showAllTags && (
            <Button
              onPress={() => setShowAllTags(false)}
              className="text-xs px-2 py-1 rounded-md shadow-md text-blue-500 bg-transparent"
            >
              Show Less
            </Button>
          )}
        </div>

        {/* Action Links */}
        <div className="w-full flex justify-between items-center flex-wrap gap-2 mt-4">
          <span className="text-sm ">
            From:{' '}
            <Link
              href={link}
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {source}
            </Link>
          </span>
          <ExternalLink
            href={link}
            customClassName="text-white inline-flex items-center rounded-lg bg-black dark:bg-white dark:text-black text-white p-2 hover:bg-gray-900 dark:hover:bg-gray-200 transition-all ease-in-out duration-300 transform hover:scale-110"
          >
            <span>Read More</span>
          </ExternalLink>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default BlogCard;
