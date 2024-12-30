"use client";

import Image from 'next/image';
import { siteConfig } from '@/src/configs/config'; // Import siteConfig
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      {/* Content Section */}
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 mx-auto lg:mx-0 text-foreground dark:text-white">
          {siteConfig.author} {/* Dynamic author name */}
        </h1>

        <h2 className="flex items-center gap-2 text-lg lg:text-xl text-muted-foreground dark:text-white/70 mb-8 mx-auto lg:mx-0">
          <span
            className="relative w-[max-content] font-mono typing-animation text-foreground/80 dark:text-white/80"
          >
            I'm a Full Stack Developer
          </span>
        </h2>
      </AnimationContainer>

      {/* Image Section */}
      <AnimationContainer customClassName="w-[150px] sm:w-[250px] relative mb-6 lg:mb-0">
        <Image
          alt={siteConfig.author}
          src={siteConfig.profile_image}
          width={250}
          height={250}
          priority
          className="rounded-[12px] filter grayscale hover:grayscale-0 transition ease bg-background/30 dark:bg-background/30"
        />
      </AnimationContainer>
    </div>
  );
};

export default Hero;
