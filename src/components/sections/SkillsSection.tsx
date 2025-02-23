'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="I’ve been programming for over years, gaining experience with a variety of programming languages, frameworks, and tools. I’ve worked on both Frontend and Backend technologies, allowing me to understand and contribute to the entire development process."
        />

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src="https://skillicons.dev/icons?i=androidstudio,angular,atom,aws,azure,bash,blender,bootstrap,c,cs,cpp,cloudflare,codepen,css,dart,django,docker,dotnet,eclipse,express,figma,firebase,flask,flutter,gcp,git,github,githubactions,gitlab,go,gradle,gulp,heroku,html,idea,java,js,jquery,kotlin,linkedin,linux,md,mongodb,mysql,netlify,nextjs,nginx,nodejs,ps,php,rust,svelte,tauri,electron,postgres,powershell,py,pytorch,qt,react,redux,regex,sass,sqlite,stackoverflow,svg,tailwind,tensorflow,twitter,ts,unity,unreal,vercel,visualstudio,vite,vscode,vue,webflow,webpack,wordpress&perline=15"
              alt="My Skills"
              className="relative w-full h-full max-w-3xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
