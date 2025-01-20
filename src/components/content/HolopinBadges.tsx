import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/src/components/ui/SectionHeader';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';

const HolopinBadges: React.FC = () => (
  <AnimationContainer customClassName="w-full mt-16">
    <div className="flex flex-col gap-5">
      <SectionHeader
        title="Holopin Badges"
        content="    These badges represent my involvement in open-source projects and my contributions to the software
        development community. I actively engage with repositories on GitHub and other platforms, where I contribute
        code, documentation, and support for open-source tools."
      />

      <Link href={`https://holopin.io/@${siteConfig.social.holopin}`}>
        <Image
          src={`https://holopin.me/${siteConfig.social.holopin}`}
          alt={`${siteConfig.author}'s Holopin Badges`}
          className="mx-auto mb-12"
          width={800}
          height={400}
        />
      </Link>
    </div>
  </AnimationContainer>
);

export default HolopinBadges;
