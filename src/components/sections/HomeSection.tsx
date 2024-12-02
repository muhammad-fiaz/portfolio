'use client';

import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import { skills } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const HomeSection = () => {
  return (
    <SectionContainer>

      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-11rem)] flex items-center justify-center ">
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

      {/* Skills Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white">
            Skills
          </h2>

          <p className="text-base text-gray-400">
            I’ve been programming for over years, gaining experience with a
            variety of programming languages, frameworks, and tools. I’ve worked
            on both Frontend and Backend technologies, allowing me to understand
            and contribute to the entire development process.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                {/* Use h2 for main sections */}
                <h2 className="font-bold text-1xl md:text-2xl tracking-tight mb-5 text-white">
                  {title}
                </h2>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>

        </div>
      </AnimationContainer>

        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>
      </SectionContainer>
  );
};

export default HomeSection;
