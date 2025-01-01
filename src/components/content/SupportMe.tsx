import React from 'react';
import { siteConfig } from '@/src/configs/config';

const SupportMe = () => {
  return (
    <section id="support" className="text-center mt-12 p-6 bg-black text-white dark:bg-white dark:text-black rounded-lg">
      <h2 className="text-2xl font-semibold">💖 Show Your Support for My Non-Profit Open-Source Project!</h2>
      <p className="my-4">
        As an open-source enthusiast, I'm dedicated to creating free tools and resources for the community.
        Your contribution, no matter how small, helps me keep this project going and make it even better!
      </p>
      <div className="mb-6">
        <button
          onClick={() => window.open(siteConfig.social.sponsor, '_blank')}
          className="bg-[#1EAEDB] text-white py-3 px-6 text-lg font-medium rounded-lg inline-block mr-4 transition-all duration-300 transform hover:bg-[#178CB7] hover:shadow-lg dark:bg-[#0A84FF] dark:hover:bg-[#0056A3]"
        >
          Sponsor on GitHub <span className="heartbeat-animation">🧡</span>
        </button>
        <button
          onClick={() => window.open(siteConfig.social.kofi, '_blank')}
          className="bg-[#FF813F] text-white py-3 px-6 text-lg font-medium rounded-lg inline-block transition-all duration-300 transform hover:bg-[#FF5C1F] hover:shadow-lg dark:bg-[#FF4F00] dark:hover:bg-[#D94400]"
        >
          Buy Me A Coffee <span className="heartbeat-animation">☕</span>
        </button>
      </div>
      <p className="text-lg">Thank you for your support! 🙏</p>

    </section>
  );
};

export default SupportMe;
