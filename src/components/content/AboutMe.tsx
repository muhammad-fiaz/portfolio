import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About Me
      </h2>

      <p className="text-base text-gray-400">
        Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, a dedicated and versatile full-stack developer with a strong background in designing and building user-focused, scalable web applications. Over the years, I’ve honed my skills across the full development lifecycle, from front-end interfaces to back-end systems, ensuring seamless integration and top-notch performance.
      </p>

      <p className="text-base text-gray-400 mt-4">
        On the front end, I excel in creating responsive and engaging user interfaces using modern frameworks like Next.js, React, and Vue.js. I prioritize clean code, intuitive design, and a smooth user experience. For the back end, I leverage tools such as Node.js, Express, and databases like MongoDB and PostgreSQL to craft robust and efficient server-side solutions. I’m also experienced with caching strategies using Redis to optimize performance and scalability.
      </p>

      <p className="text-base text-gray-400 mt-4">
        As a freelance programmer, I’ve had the privilege of working with diverse clients, building everything from e-commerce platforms to custom property apps. Each project has taught me the importance of collaboration, clear communication, and delivering solutions that align with the client’s goals.
      </p>

      <p className="text-base text-gray-400 mt-4">
        Beyond development, I have a deep interest in exploring innovative technologies, troubleshooting complex problems, and continuously improving my craft. My goal is always to create impactful digital experiences that solve real-world challenges.
      </p>

      <p className="text-base text-gray-400 mt-4">
        If you’re looking for someone to turn ideas into reality with technical expertise and a creative approach, let’s connect and make it happen!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
