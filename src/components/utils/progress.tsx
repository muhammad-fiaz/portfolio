'use client';

import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { usePathname } from 'next/navigation';

const ProgressBar = () => {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const handleRouteChangeStart = () => {
      NProgress.start(); // Start NProgress
    };

    const handleRouteChangeComplete = () => {
      NProgress.done(); // Finish NProgress
    };

    const handleRouteChangeError = () => {
      NProgress.done(); // Finish NProgress if error occurs
    };

    // Call the start and done manually for the first load
    handleRouteChangeStart();
    handleRouteChangeComplete();

    // Whenever pathname changes, trigger NProgress
    NProgress.start(); // Start NProgress
    const timeoutId = setTimeout(() => NProgress.done(), 500); // Finish NProgress after a timeout

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]); // Re-run when the pathname changes

  return null; // No need to render anything, NProgress is globally managed
};

export default ProgressBar;
