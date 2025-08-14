"use client";
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { siteConfig } from '@/config/site.config';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={siteConfig.theme.default}
      enableSystem={siteConfig.theme.allowSystem}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
