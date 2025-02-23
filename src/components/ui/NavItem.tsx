'use client';

import { usePathname } from 'next/navigation';
import LinksNav from './LinksNav';

const NavItem = () => {
  let pathname = usePathname() as string;

  if (pathname.includes('/blog/')) pathname = '/blog';

  return (
    <>
      <LinksNav />
    </>
  );
};

export default NavItem;
