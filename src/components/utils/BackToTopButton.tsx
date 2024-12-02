'use client';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return null instead of false to ensure valid JSX
  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-2.5 bg-black text-white rounded-full border-2 border-white/20 shadow-lg hover:bg-white hover:text-black focus:outline-none transition-all ease-in-out"
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
