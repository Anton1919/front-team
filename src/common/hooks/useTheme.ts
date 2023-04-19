import { useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark'

export const useTheme = () => {

  const [theme, setTheme] = useState<ThemeType>(localStorage.getItem('theme') as ThemeType || 'dark');

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  return toggle;
};