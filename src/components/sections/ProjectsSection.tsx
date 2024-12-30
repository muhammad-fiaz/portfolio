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
import Script from 'next/script';
import { usePathname } from 'next/navigation';

const ProjectsSection = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [allProjectsInfo, setAllProjectsInfo] = useState<CardProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string>(''); // New state for handling fetch errors

  const pathname = usePathname(); // Hook to track the current path

  // Fetch GitHub repositories when the component mounts or when the search or pathname changes
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setFetchError(''); // Reset error message before fetching
      try {
        const response = await fetch(`/api/fetch-projects?search=${projectSearch}`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Ensure data is an array before setting it
        setAllProjectsInfo(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setFetchError('Failed to fetch projects'); // Set the error message
        setAllProjectsInfo([]); // Fallback to empty array if an error occurs
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [projectSearch, pathname]); // Re-run when either the projectSearch or pathname changes

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
    <>
      <SectionContainer>
        <div className="w-full flex flex-col gap-6">
          <TitleSectionPageContainer title="Projects" />

          <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
            <p className="w-full text-base text-black dark:text-white">
              These are most of the projects I've done since I started programming, some of them are personal projects, freelance, work, practice, or for other situations. If you want to see absolutely all my projects, go to my{' '}
              <Link
                href={`https://github.com/${siteConfig.social.github}`}
                target="_blank"
                className="  underline transition-all ease"
              >
                {`github page`}
              </Link>
              .
            </p>
          </AnimationContainer>

          {/* Search Input Section */}
          <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
            <div className="w-full flex items-center lg:w-4/6 h-12 rounded-xl shadow-lg text-black bg-white border border-gray-800 group-hover:border-gray-500 transition-all ease dark:text-white dark:bg-black dark:border-gray-700">
              <div className="grid place-items-center h-full w-12 text-gray-500 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                className="peer h-full w-full outline-none rounded text-sm px-2 group-hover:border-gray-500 transition-all ease dark:bg-black dark:text-white"
                type="text"
                id="search"
                placeholder="Search projects (Languages, frameworks, libraries, etc...)"
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
              />
            </div>
          </AnimationContainer>

          {/* Display Projects or error message */}
          <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
            {isLoading ? (
              // Display skeleton loader instead of text or static content
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-full h-auto p-4">
                  <Skeleton className="w-full h-10 mb-4 bg-gray-700 dark:bg-gray-600 rounded-md" />
                  <Skeleton className="w-full h-6 bg-gray-700 dark:bg-gray-600 rounded-md" />
                  <Skeleton className="w-3/4 h-4 bg-gray-700 dark:bg-gray-600 rounded-md mt-2" />
                  <Skeleton className="w-full h-10 bg-gray-700 dark:bg-gray-600 rounded-md mt-4" />
                </div>
              ))
            ) : fetchError ? (
              <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
                <div className="text-center text-black dark:text-white p-4">
                  <h2>{fetchError}</h2> {/* Display the error message */}
                </div>
              </AnimationContainer>
            ) : allProjectsInfo.length > 0 ? (
              allProjectsInfo.map(({ id, title, des, category, repo, link, topics }) => (
                <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} topics={topics} />
              ))
            ) : (
              <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
                <div className="text-center text-black dark:text-white p-4">
                  <h2>No projects found</h2>
                </div>
              </AnimationContainer>
            )}
          </article>
        </div>
      </SectionContainer>

      {/* Add JSON-LD metadata for the page */}
      <Script
        id="json-ld-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(allProjectsInfo),
        }}
      />
    </>
  );
};

export default ProjectsSection;
