"use client";
import React from 'react';
import SectionContainer from '@/src/components/utils/SectionContainer';
import TitleSectionPageContainer from '@/src/components/utils/TitleSectionPageContainer';
import GitHubStreak from '@/src/components/content/GitHubStreak';
import GitHubTrophies from '@/src/components/content/GitHubTrophies';
import DevCard from '@/src/components/content/DevCard';
import GitHubContributionHistory from '@/src/components/content/GitHubContributionHistory';
import SectionHeader from '@/src/components/ui/SectionHeader';


const StatsSection: React.FC = () => {
  return (
    <SectionContainer>
      <div className="text-center w-full h-full mx-auto text-black dark:text-white bg-transparent">
        <SectionHeader
          title="GitHub Stats"
          content="Check out some of my key stats, achievements, and contributions on GitHub. Here's a snapshot of my GitHub journey."
        />
        <GitHubStreak />

        <GitHubContributionHistory />

        <GitHubTrophies />
      </div>
    </SectionContainer>
  );
};

export default StatsSection;
