import React from 'react';
import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const GitHubContributionHistory: React.FC = () => (
  <AnimationContainer customClassName="w-full mt-16">
    <div className="mb-12">
      <h3 className="text-3xl font-medium mb-6 mt-12 text-center">
        GitHub Contributions
      </h3>
      <Image
        alt="GitHub Snake"
        src={`${siteConfig.other.github_snake}`}
        className="w-full h-full mx-auto mt-8 rounded-lg shadow-lg border border-gray-200 p-4 dark:bg-white bg-black"
        width={1000}
        height={600}
      />
    </div>
  </AnimationContainer>
);

export default GitHubContributionHistory;
