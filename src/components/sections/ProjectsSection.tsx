'use client';
import { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { CardProjectProps } from '@/src/types';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import CardProject from '@/src/components/content/CardProject';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';

const ProjectsSection = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [allProjectsInfo, setAllProjectsInfo] = useState<CardProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch GitHub repositories when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/fetch-projects?search=${projectSearch}`);
        const data = await response.json();
        setAllProjectsInfo(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [projectSearch]); // Trigger search whenever projectSearch changes

  // Generate JSON-LD structured data for SEO and social sharing
  const generateJsonLd = (projects: CardProjectProps[]) => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.des,
          url: project.repo, // GitHub URL or project URL
          image: project.link, // Assuming this is the project image URL or screenshot
          keywords: project.topics.join(', '), // Assuming topics are tags
        },

      })),
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Projects" />

        {/* Add JSON-LD metadata for the page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJsonLd(allProjectsInfo),
          }}
        />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-gray-400">
            These are most of the projects I've done since I started
            programming, some of them are personal projects, freelance, work,
            practice, or for other situations. If you want to see absolutely all
            my projects, go to my{' '}
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              className="hover:text-white hover:underline transition-all ease"
            >
              {`github.com/${siteConfig.social.github}`}
            </Link>
            .
          </p>
        </AnimationContainer>

        {/* Search Input Section */}
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
              id="search"
              placeholder="Search projects (Languages, frameworks, libraries, etc...)"
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
            />
          </div>
        </AnimationContainer>

        {/* Display Projects or "No projects found" message */}
        <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
          {isLoading ? (
            // Display skeleton loader instead of text or static content
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
          ) : allProjectsInfo.length > 0 ? (
            allProjectsInfo.map(
              ({ id, title, des, category, repo, link, topics }) => (
                <CardProject
                  key={id}
                  title={title}
                  des={des}
                  category={category}
                  repo={repo}
                  link={link}
                  topics={topics} // Pass topics to CardProject
                />
              )
            )
          ) : (
            <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
              <div className="text-center text-white p-4 bg-gray-800 rounded-md shadow-md">
                <h2>No projects found</h2>
              </div>
            </AnimationContainer>
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
