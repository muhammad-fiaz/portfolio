import React from 'react';
import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const GitHubTrophies: React.FC = () => (
  <AnimationContainer customClassName="w-full mt-16">
    <div className="mb-12">
      <h3 className="text-3xl font-medium mb-6 text-center">GitHub Trophies</h3>
      <Image
        src={`https://github-profile-trophy.vercel.app/?username=${siteConfig.social.github}&theme=tokyonight`}
        alt="GitHub Trophies"
        className="mx-auto w-full max-w-xl"
        width={500}
        height={400}
      />
    </div>
  </AnimationContainer>
);

export default GitHubTrophies;
