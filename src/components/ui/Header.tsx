'use client';

import Link from 'next/link';
import HeaderAnimation from '../utils/HeaderAnimation';
import MobileMenuNav from './MobileMenuNav';
import NavItem from './NavItem';
import { siteConfig } from '@/src/configs/config';
import ThemeToggle from '@/src/components/utils/ThemeToggle';
import AuthAvatar from '@/src/components/ui/AuthAvatar';

const Header = () => {
  return (
    <HeaderAnimation>
      <nav className="w-10/12 lg:max-w-screen-md flex items-center justify-between flex-row relative py-8 sm:pb-8 bg-primary text-foreground dark:text-white gap-5 lg:gap-0">
        <div>
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            <Link
              href="/"
              className="hover:text-foreground dark:hover:text-white"
            >
              <strong className="text-foreground dark:text-white">
                {siteConfig.author}
              </strong>
            </Link>
          </h1>
        </div>

        {/* Navigation Section */}
        <div className="ml-[-0.80rem] flex items-center gap-4">
          <MobileMenuNav />
          <NavItem />
          <AuthAvatar />
          <ThemeToggle />
        </div>
      </nav>
    </HeaderAnimation>
  );
};

export default Header;
