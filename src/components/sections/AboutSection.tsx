import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import { skills } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">

        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, a Full Stack developer who loves to create new things. I have uploaded some pretty cool stuff, so make sure to check it out on my
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              GitHub profile
            </Link> ✌️.
          </p>

          <ul className="text-base text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>✨ I spend my spare time building and developing free Apps and Web Applications because I want to continue growing and honing my skills 😄.</li>
            <li>📚 I'm currently focused on learning and exploring the exciting fields of Machine Learning (ML) and Artificial Intelligence (AI), including neural networks and other related topics.</li>
            <li>🤝 I'm always excited to collaborate with others and contribute to different projects. If you have a project that needs an extra set of hands or fresh ideas, feel free to reach out to me!</li>
            <li>🔧 I have experience working with various programming languages and technologies, ensuring that I can adapt and contribute effectively to your project's tech stack.</li>
            <li>📬 If you come across anything interesting in my projects or have a project you'd like me to collaborate on, please don't hesitate to get in touch. Let's create something awesome together!</li>
          </ul>

          <p className="text-base text-gray-400 mt-4">
            Feel free to explore my projects and get in touch for collaborations!
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">Skills</h2>

          <p className="text-base text-gray-400">
            I’ve been programming for over years, gaining experience with a
            variety of programming languages, frameworks, and tools. I’ve worked on both Frontend and Backend
            technologies, allowing me to understand and contribute to the entire development process.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">{title}</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>

        </AnimationContainer>

      </div>
    </SectionContainer>
  );
};

export default AboutSection;
