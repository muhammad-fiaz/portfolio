import '@/src/styles/globals.css';
import clsx from 'clsx';
import local from 'next/font/local';
import Header from '@/src/components/ui/Header';
import Footer from '@/src/components/ui/Footer';
import FlareCursor from '@/src/components/ui/FlareCursor';
import ProgressBar from '@/src/components/utils/progress';
import BackToTopButton from '@/src/components/utils/BackToTopButton';
import Head from './head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const graphik = local({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010] transition ease',
        graphik.variable
      )}
    >
    <Head />

    <body className="bg-[#080809] transition ease  min-h-screen ">
    <ProgressBar />
    <Header />

    <main className="flex flex-col justify-center items-center mx-auto">
      <FlareCursor />
      {children}
      <SpeedInsights />
      <Analytics />
    </main>
    <BackToTopButton />

    <Footer />
    </body>
    </html>
  );
};

export default RootLayout;
