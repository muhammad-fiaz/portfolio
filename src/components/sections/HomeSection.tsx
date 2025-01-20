'use client';

import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import SupportMe from '@/src/components/content/SupportMe';
import FAQSection from '@/src/components/sections/FAQSection';
import StatsSection from '@/src/components/sections/StatsSection';
import SkillsSection from '@/src/components/sections/SkillsSection';
import HolopinBadges from '@/src/components/content/HolopinBadges';
import DevCard from '@/src/components/content/DevCard';

const HomeSection = () => {
  return (
    <SectionContainer>
      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-11rem)] flex items-center justify-center">
        {/* Badge */}
        <AnimationContainer>
          <div className="absolute top-1/4 md:top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-md">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-blink-circle"></span>
              Available for new opportunities 😁
            </span>
          </div>
        </AnimationContainer>
        <Hero />
      </div>

      {/* About Me Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <AboutMe />
      </AnimationContainer>

      {/* Timeline Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <CurrentTimeLineExp />
      </AnimationContainer>

      <AnimationContainer customClassName="w-full mt-16">
        <DevCard />
      </AnimationContainer>

      {/* Skills Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <SkillsSection />
      </AnimationContainer>

      {/* Skills Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <HolopinBadges />
      </AnimationContainer>

      {/* Stats Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <StatsSection />
      </AnimationContainer>

      {/* Contact Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <ContactMe />
      </AnimationContainer>
      {/* Support Me Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <SupportMe />
      </AnimationContainer>

      {/* FAQ Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <FAQSection />
      </AnimationContainer>
    </SectionContainer>
  );
};

export default HomeSection;
