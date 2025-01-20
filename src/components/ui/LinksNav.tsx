'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/src/types';

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home'
  },
  '/about': {
    name: 'about'
  },
  '/projects': {
    name: 'projects'
  },
  '/blog': {
    name: 'blog'
  }
};

const LinksNav = () => {
  let pathname = usePathname() as string;

  return (
    <>
      {Object.entries(navItemsSelected).map(([path, { name }]) => {
        const isActive = path === pathname;

        return (
          <Link
            key={path}
            href={path}
            className={clsx(
              'hidden lg:inline-block transition ease py-[2px] px-[10px] focus:outline-none focus-jump hover:jump',
              {
                'text-neutral-500 dark:text-neutral-400': !isActive, // Inactive links
                'text-neutral-800 dark:text-white font-bold': isActive, // Active links
                'hover:text-neutral-700 dark:hover:text-neutral-300': !isActive // Correct hover color for light and dark themes
              }
            )}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default LinksNav;
