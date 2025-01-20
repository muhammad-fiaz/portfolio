import React from 'react';
import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const GitHubStreak: React.FC = () => (
  <AnimationContainer customClassName="w-full mt-16">
    <div className="mb-12">
      <h3 className="text-3xl font-medium mb-6 text-center">GitHub Streak</h3>
      <Image
        className="my-8 w-full max-w-xl mx-auto"
        src={`https://github-readme-streak-stats-seven-azure.vercel.app?user=${siteConfig.social.github}&theme=tokyonight`}
        alt="GitHub Streak"
        width={500}
        height={180}
      />
    </div>
  </AnimationContainer>
);

export default GitHubStreak;
