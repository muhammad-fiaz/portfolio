import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/src/types';

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home',

  },
  '/about': {
    name: 'about',

  },
  '/projects': {
    name: 'projects',

  },
  '/blog': {
    name: 'blog',

  }
};

const LinksNav = () => {

  let pathname = usePathname() as string;
  return (
    <>
      {
        Object.entries(navItemsSelected).map(([path, { name }]) => {

          const isActive = path === pathname;

          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                'hidden lg:inline-block transition ease hover:text-neutral-200 py-[2px] px-[10px] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-md ',
                {
                  'text-neutral-500': !isActive,
                  'font-bold': isActive,
                }
              )}>

              {name}

            </Link>
          )
        })
      }
    </>
  )
}

export default LinksNav;