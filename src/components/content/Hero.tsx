'use client';

import Image from 'next/image';
import { siteConfig } from '@/src/configs/config'; // Import siteConfig
import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      {/* Content Section */}
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
          <span className="font-mono text-teal-500 dark:text-teal-300">
            Hello!{' '}
          </span>
          <span className="font-mono text-pink-500 dark:text-pink-300">
            I am
          </span>
        </p>
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 mx-auto lg:mx-0 text-gray-900 dark:text-white">
          {siteConfig.author} {/* Dynamic author name */}
        </h1>

        <h2 className="flex items-center gap-2 text-lg lg:text-xl text-gray-700 dark:text-gray-400 mb-8 mx-auto lg:mx-0">
          <span className="relative w-[max-content] font-mono typing-animation text-gray-800 dark:text-gray-200">
            I'm a Full Stack Developer
          </span>
        </h2>

        {/* Buttons Section */}
        <div className="flex gap-4 mt-6">
          <Link
            href={`mailto:${siteConfig.social.email}`}
            className="px-4 py-2 sm:px-6 sm:py-3 text-teal-500 font-bold rounded-lg border border-teal-500 hover:bg-teal-500 hover:text-white transition duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 dark:border-teal-300 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white"
          >
            Hire Me
          </Link>
          <Link
            href={siteConfig.social.kofi}
            className="px-4 py-2 sm:px-6 sm:py-3 text-pink-500 font-bold rounded-lg border border-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 dark:border-pink-300 dark:text-pink-300 dark:hover:bg-pink-600 dark:hover:text-white"
          >
            Buy Me a Coffee
          </Link>
        </div>
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
