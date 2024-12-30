'use client';

import Image from 'next/image';

const MySkills = () => {

  return (
    <div
      className={` w-full h-full flex justify-center items-center`}
    >

      <Image
        src="https://skillicons.dev/icons?i=androidstudio,angular,atom,aws,azure,bash,blender,bootstrap,c,cs,cpp,cloudflare,codepen,css,dart,django,docker,dotnet,eclipse,express,figma,firebase,flask,flutter,gcp,git,github,githubactions,gitlab,go,gradle,gulp,heroku,html,idea,java,js,jquery,kotlin,linkedin,linux,md,mongodb,mysql,netlify,nextjs,nginx,nodejs,ps,php,rust,svelte,tauri,electron,postgres,powershell,py,pytorch,qt,react,redux,regex,sass,sqlite,stackoverflow,svg,tailwind,tensorflow,twitter,ts,unity,unreal,vercel,visualstudio,vite,vscode,vue,webflow,webpack,wordpress&perline=15"
        alt="My Skills"
        className="relative w-full h-full"
        width={500}
        height={500}
      />


    </div>
  );
};

export default MySkills;
