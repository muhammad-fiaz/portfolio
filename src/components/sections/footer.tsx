import { siteConfig } from '@/config/site.config';

export function FooterSection() {
  return (
    <footer className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 text-center text-xs sm:text-sm text-muted-foreground px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 md:mb-8">
        {siteConfig.footer.copyright}
      </footer>
  );
}