'use client';

import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { usePathname } from 'next/navigation';

const ProgressBar = () => {
  const pathname = usePathname();

  // Trigger NProgress when the route is changing
  useEffect(() => {
    const handleRouteChangeStart = () => NProgress.start();
    const handleRouteChangeComplete = () => NProgress.done();
    const handleRouteChangeError = () => NProgress.done();

    // Trigger NProgress on initial load or when pathname changes
    if (pathname) {
      handleRouteChangeStart();
      handleRouteChangeComplete();
    }

    // Handle when the pathname changes
    NProgress.start(); // Start NProgress
    const timeoutId = setTimeout(() => NProgress.done(), 500); // Finish after 500ms

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]); // Dependency on pathname ensures this runs on route change

  return null; // No need to render anything in the DOM, the NProgress bar is automatically shown
};

export default ProgressBar;
