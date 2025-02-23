'use client';

import styles from '@/src/styles/mobileMenu.module.css';
import { JSX, useEffect } from 'react';
import cn from 'classnames';
import useMenuNav from '@/src/hooks/useMenuNav';
import LinksMenuNav from './LinksMenuNav';
import { Button } from '@nextui-org/button';

const MenuIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className="h-5 w-5 absolute text-black dark:text-white"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CrossIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className="h-5 w-5 absolute text-black dark:text-white"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

const MobileMenuNav = () => {
  const { isMenuOpen, toggleMenu } = useMenuNav();

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Button
        className={cn(styles.burger, 'visible lg:hidden')}
        aria-label="Toggle menu"
        type="button"
        onPress={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </Button>

      {isMenuOpen && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col items-center justify-start absolute top-full right-0 mt-0.5 backdrop-blur-md bg-primary  dark:bg-black/50 dark:text-white text-center p-5 rounded-2xl mr-5 w-full sm:w-[90%] md:w-[60%]', // Blurred background with adaptable light/dark theme colors
            styles.menuRendered
          )}
        >
          <LinksMenuNav />
        </ul>
      )}
    </>
  );
};

export default MobileMenuNav;
