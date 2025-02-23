'use client';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/src/types';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';

const CardProject = ({
  title,
  des,
  category,
  repo,
  link,
  topics
}: CardProjectProps) => {
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const maxTopicsToShowMobile = 3; // Limit for keywords on mobile
  const maxDescriptionLength = 100; // Character limit for description on mobile

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
      <div className="w-full flex flex-col justify-center items-start rounded gap-5">
        {/* Title */}
        <h3 className="text-2xl lg:text-2xl font-medium transition-all ease-in-out duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base transition-all ease-in-out duration-300">
          {!isMobile ||
          showFullDescription ||
          des.length <= maxDescriptionLength
            ? des
            : `${des.slice(0, maxDescriptionLength)}...`}
          {isMobile && des.length > maxDescriptionLength && (
            <Button
              onPress={() => setShowFullDescription(!showFullDescription)}
              className="ml-2 text-sm text-blue-500 hover:underline bg-transparent"
            >
              {showFullDescription ? 'Show Less' : 'Show More'}
            </Button>
          )}
        </p>

        {/* Topics (Tags) Section */}
        <div className="flex flex-wrap gap-2 mt-2">
          {topics &&
            topics.length > 0 &&
            topics
              .slice(
                0,
                isMobile && !showAllTopics
                  ? maxTopicsToShowMobile
                  : topics.length
              )
              .map((topic, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap bg-gray-400 dark:bg-gray-700"
                >
                  {topic}
                </span>
              ))}
          {isMobile &&
            topics &&
            topics.length > maxTopicsToShowMobile &&
            !showAllTopics && (
              <Button
                onPress={() => setShowAllTopics(true)}
                className="text-xs px-2 py-1 rounded-md shadow-md bg-gray-300 dark:bg-gray-600 bg-transparent"
              >
                ...
              </Button>
            )}
          {isMobile && showAllTopics && (
            <Button
              onPress={() => setShowAllTopics(false)}
              className="text-xs px-2 py-1 rounded-md shadow-md text-blue-500 bg-transparent"
            >
              Show Less
            </Button>
          )}
        </div>

        {/* Action Links */}
        <div className="w-full flex justify-between items-start flex-wrap flex-col lg:flex-row gap-5">
          <div className="flex justify-center items-end gap-3">
            <ExternalLink
              href={repo}
              customClassName="text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease-in-out duration-300 transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </ExternalLink>

            <ExternalLink
              href={link}
              customClassName="text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease-in-out duration-300 transform hover:scale-110"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  fill="currentColor"
                  d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708"
                />
              </svg>
            </ExternalLink>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default CardProject;
