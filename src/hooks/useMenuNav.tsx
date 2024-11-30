'use client';

import { useState } from 'react';
// import useDelayedRender from 'use-delayed-render';

const useMenuNav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
  //   isMenuOpen,
  //   {
  //     enterDelay: 20,
  //     exitDelay: 1000
  //   }
  // );

  const toggleMenu = () => {

    if (isMenuOpen)
      setIsMenuOpen(false);
    else
      setIsMenuOpen(true);

  }
  return {
    isMenuOpen,
    toggleMenu,
    // isMenuMounted,
    // isMenuRendered
  }
}

export default useMenuNav;