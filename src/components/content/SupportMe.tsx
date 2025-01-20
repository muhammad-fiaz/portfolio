'use client';
import React from 'react';
import { siteConfig } from '@/src/configs/config';
import { Button } from '@nextui-org/button';

const SupportMe = () => {
  return (
    <section
      id="support"
      className="text-center mt-12 p-6 bg-black text-white dark:bg-white dark:text-black rounded-lg"
    >
      <h2 className="text-xl sm:text-2xl font-semibold">
        💖 Show Your Support for My Non-Profit Open-Source Project!
      </h2>
      <p className="my-4 text-sm sm:text-base">
        As an open-source enthusiast, I'm dedicated to creating free tools and
        resources for the community. Your contribution, no matter how small,
        helps me keep this project going and make it even better!
      </p>
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
        <Button
          onPress={() => window.open(siteConfig.social.sponsor, '_blank')}
          className="bg-[#1EAEDB] text-white px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg mb-4 sm:mb-0 sm:inline-block transition-all duration-300 transform hover:bg-[#178CB7] hover:shadow-lg dark:bg-[#0A84FF] dark:hover:bg-[#0056A3]"
        >
          Sponsor on GitHub <span className="heartbeat-animation">🧡</span>
        </Button>
        <Button
          onPress={() => window.open(siteConfig.social.kofi, '_blank')}
          className="bg-[#FF813F] text-white px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg sm:inline-block transition-all duration-300 transform hover:bg-[#FF5C1F] hover:shadow-lg dark:bg-[#FF4F00] dark:hover:bg-[#D94400]"
        >
          Buy Me A Coffee <span className="heartbeat-animation">☕</span>
        </Button>
      </div>
      <p className="text-sm sm:text-lg">Thank you for your support! 🙏</p>
    </section>
  );
};

export default SupportMe;
