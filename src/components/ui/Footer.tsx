import Link from 'next/link';
import AnimationContainer from '../utils/AnimationContainer';
import ExternalLink from './ExternalLink';
import { siteConfig } from '@/src/configs/config';

const Footer = () => {
  return (
    <footer className="w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto">
      <hr className="w-full border-1 border-gray-800 mb-8" />

      <AnimationContainer customClassName="w-full grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/home"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
            About
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z"
                clipRule="evenodd"
              />
            </svg>
            Projects
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink href={siteConfig.social.github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </ExternalLink>

          <ExternalLink href={siteConfig.social.linkedin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                clipRule="evenodd"
              />
              <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
            </svg>
            LinkedIn
          </ExternalLink>
          <ExternalLink href={siteConfig.social.medium}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1043.63 592.71"
              role="img"
              fill="currentColor"
              className="h-6 w-6"
            >
              <title>Medium</title>
              <path d="M588.67 296.35c0 163.73-131.88 296.36-294.34 296.36S0 460.08 0 296.35 131.88 0 294.34 0s294.33 132.62 294.33 296.35zM1043.63 296.35c0 154.21-65.88 279.18-147.16 279.18s-147.16-125-147.16-279.18S815.19 17.17 896.47 17.17s147.16 125 147.16 279.18zM792.1 296.35c0 145.1-58.1 262.68-129.8 262.68s-129.8-117.58-129.8-262.68 58.1-262.68 129.8-262.68 129.8 117.58 129.8 262.68z" />
            </svg>
            Medium
          </ExternalLink>
          <ExternalLink href={siteConfig.social.dev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              role="img"
              fill="currentColor"
              className="h-6 w-6"
            >
              <title>Dev.to</title>
              <path d="M10.5 0C4.7 0 0 4.7 0 10.5v19C0 35.3 4.7 40 10.5 40h19c5.8 0 10.5-4.7 10.5-10.5v-19C40 4.7 35.3 0 29.5 0h-19zm3.8 12.5h2.5c.3 0 .5.2.5.5v14c0 .3-.2.5-.5.5h-2.5c-.3 0-.5-.2-.5-.5v-14c0-.3.2-.5.5-.5zm6.2 0h2.5c.3 0 .5.2.5.5v14c0 .3-.2.5-.5.5h-2.5c-.3 0-.5-.2-.5-.5v-14c0-.3.2-.5.5-.5zm6.2 0h2.5c.3 0 .5.2.5.5v14c0 .3-.2.5-.5.5h-2.5c-.3 0-.5-.2-.5-.5v-14c0-.3.2-.5.5-.5z" />
            </svg>
            Dev.to
          </ExternalLink>
          <ExternalLink href={siteConfig.social.hashnode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm7 2a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H7a1 1 0 110-2h4V8a1 1 0 011-1z" />
            </svg>
            Hashnode
          </ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M9.293 16.293a1 1 0 011.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L12.586 12l-3.293 3.293a1 1 0 000 1.414zM4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm1 2v12h14V6H5z" />
            </svg>
            Projects
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
            </svg>
            Blog
          </Link>

          <Link
            href="#contactme"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                clipRule="evenodd"
              />
            </svg>
            Contact
          </Link>
        </div>
      </AnimationContainer>
    </footer>
  );
}

export default Footer;
