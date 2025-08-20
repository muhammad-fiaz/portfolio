import { siteConfig } from '@/config/site.config';

export function FooterSection() {
  return (
    <footer className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 text-center text-xs sm:text-sm text-muted-foreground px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 md:mb-8">
      <div className="max-w-7xl mx-auto">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
        </p>
        <p className="mt-2">
          Built with <a href="https://nextjs.org" className="text-primary hover:underline">Next.js</a> and <a href="https://tailwindcss.com" className="text-primary hover:underline">Tailwind CSS</a>.
        </p>
      </div>
    </footer>

  );
}