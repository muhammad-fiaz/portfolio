'use client';

import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';

type BlogCardProps = {
  title: string;
  excerpt: string;
  tags: string[]; // Optional
  link: string;
  source: string; // Blog source
};

const BlogCard = ({ title, excerpt, tags, link, source }: BlogCardProps) => {
  return (
    <AnimationContainer customClassName="w-full h-42 flex flex-col justify-center items-center rounded border border-gray-800 hover:border-white bg-[#080809] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 transition-all ease-in-out duration-300 transform hover:scale-105">
      <div className="w-full flex flex-col justify-center items-start gap-5">
        <h3 className="text-2xl lg:text-2xl font-medium text-white transition-all ease-in-out duration-300">
          {title}
        </h3>
        <p className="text-base text-gray-400 transition-all ease-in-out duration-300">
          {excerpt}
        </p>
        <div className="w-full flex justify-between items-center flex-wrap gap-2">
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded-md shadow-md whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-500">
            From:{' '}
            <Link
              href={siteConfig.social.blog}
              className="text-blue-500 hover:underline"
            >
              {source}
            </Link>
          </div>
          <ExternalLink
            href={link}
            customClassName="text-black inline-flex items-center rounded-lg bg-white p-2 hover:bg-white/50 transition-all ease-in-out duration-300 transform hover:scale-110"
          >
            <span>Read More</span>
          </ExternalLink>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default BlogCard;
