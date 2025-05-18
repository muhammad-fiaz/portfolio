'use client';

import { useTheme } from '@/src/components/utils/themeContext';
import { Button } from '@heroui/react';
import { MoonIcon, SunIcon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      isIconOnly
      color="primary"
      variant="flat"
      onPress={toggleTheme}
      className="bg-transparent text-black dark:text-white"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
