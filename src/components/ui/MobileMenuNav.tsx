'use client';

import styles from '@/src/styles/mobileMenu.module.css';
import { useEffect } from 'react';
import cn from 'classnames';
import useMenuNav from '@/src/hooks/useMenuNav';
import LinksMenuNav from './LinksMenuNav';

const MenuIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className='h-5 w-5 absolute text-gray-100'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}>
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const CrossIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className='h-5 w-5 absolute text-gray-100'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}>
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
}

const MobileMenuNav = () => {

  const { isMenuOpen, toggleMenu } = useMenuNav();

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible lg:hidden')}
        aria-label='Toggle menu'
        type='button'
        onClick={toggleMenu}>

        <MenuIcon data-hide={isMenuOpen} />

        <CrossIcon data-hide={!isMenuOpen} />

      </button>
      {
        isMenuOpen && (
          <ul
            className={cn(
              styles.menu,
              'flex flex-col items-start justify-center absolute right-0 backdrop-blur-sm bg-black/20 text-end p-5 rounded-br-2xl mr-5',
              styles.menuRendered
            )}>

            <LinksMenuNav />

          </ul>
        )
      }
    </>
  );
}

export default MobileMenuNav;