import React from 'react';
import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';

const DevCard: React.FC = () => (
  <AnimationContainer customClassName="w-full">
    <div className="mb-12">
      <SectionHeader
        title="Devcard"
        content="This Devcard represents my daily reading experience and provides insights into the topics I am currently exploring. I use the Daily.dev platform to stay up-to-date with the latest trends in software development and technology."
      />{' '}
      <Link
        href={`https://app.daily.dev/${siteConfig.social.daily_dev.username}`}
      >
        <Image
          src={`${siteConfig.social.daily_dev.card}`}
          alt={`${siteConfig.author}'s DevCard`}
          className="mx-auto mt-8"
          width={652}
          height={300}
        />
      </Link>
    </div>
  </AnimationContainer>
);

export default DevCard;
