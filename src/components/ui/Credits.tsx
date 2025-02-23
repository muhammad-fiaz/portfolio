'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';
import AnimationContainer from '@/src/components/utils/AnimationContainer';

const Credits = () => {
  const [repoStats, setRepoStats] = useState({ stars: 0, forks: 0 });

  // Fetch repository stats
  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${siteConfig.social.github}/portfolio`
        );
        if (response.ok) {
          const data = await response.json();
          setRepoStats({
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0
          });
        } else {
          console.error('Error fetching GitHub data:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch repo stats:', error);
      }
    };

    fetchRepoStats();
  }, []);

  return (
    <AnimationContainer customClassName="text-center py-4 dark:text-white/50 text-black/50 text-sm  ">
      <p>
        Built with ❤️ by{' '}
        <Link
          href={siteConfig.baseUrl}
          className="text-blue-500 hover:underline"
        >
          {siteConfig.author}
        </Link>
        . All rights reserved © {new Date().getFullYear()}.
      </p>
      <div className="flex justify-center items-center gap-4 mt-2">
        <Link
          href={`https://github.com/${siteConfig.social.github}/portfolio/stargazers`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:underline justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 32 32"
            className="mb-1"
          >
            <path
              fill="currentColor"
              d="m30.336 12.547l-10.172-1.074L16 2.133l-4.164 9.34l-10.172 1.074l7.598 6.848L7.14 29.398L16 24.29l8.86 5.11l-2.122-10.004z"
            />
          </svg>
          <span>{repoStats.stars}</span> Stars
        </Link>
        <Link
          href={`https://github.com/${siteConfig.social.github}/portfolio/fork`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:underline justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 32 32"
            className="mb-1"
          >
            <path
              fill="currentColor"
              d="M11 4C9.355 4 8 5.355 8 7c0 1.293.844 2.395 2 2.813v12.374c-1.156.418-2 1.52-2 2.813c0 1.645 1.355 3 3 3s3-1.355 3-3c0-1.27-.816-2.344-1.938-2.781c.145-1.23.622-1.836 1.376-2.344c.898-.605 2.277-.965 3.78-1.313c1.505-.347 3.118-.707 4.47-1.656c1.187-.832 2.085-2.195 2.28-4.093C25.142 12.402 26 11.3 26 10c0-1.645-1.355-3-3-3s-3 1.355-3 3c0 1.277.832 2.352 1.969 2.781c-.137 1.313-.645 1.965-1.407 2.5c-.898.63-2.285 1-3.78 1.344c-1.497.344-3.118.648-4.47 1.563c-.109.074-.21.167-.312.25V9.813c1.156-.418 2-1.52 2-2.813c0-1.645-1.355-3-3-3zm0 2c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1zm12 3c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1zM11 24c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1z"
            />
          </svg>
          <span>{repoStats.forks}</span> Forks
        </Link>
      </div>
    </AnimationContainer>
  );
};

export default Credits;
