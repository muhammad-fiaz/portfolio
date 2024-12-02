import { siteConfig } from '@/src/configs/config';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-extrabold text-white mb-6">404</h1>
      <p className="text-2xl text-gray-400 mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-lg text-gray-500 mb-8">
        The page might have been moved or deleted, or the URL may be incorrect.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-lg text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </a>
        <a
          href={`${siteConfig.social.github}/portfolio/issues/new`}
          className="px-6 py-3 bg-green-600 text-lg text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          Report a Bug
        </a>
      </div>
      <div className="mt-12">
        <p className="text-sm text-gray-500">
          © 2024 {siteConfig.author}. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
