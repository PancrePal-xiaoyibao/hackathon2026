import { useEffect, useState } from 'react';
import { Theme } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const nextTheme = storedTheme === Theme.DARK || (!storedTheme && prefersDark)
      ? Theme.DARK
      : Theme.LIGHT;

    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === Theme.DARK);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      document.documentElement.classList.toggle('dark', nextTheme === Theme.DARK);
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  return { theme, toggleTheme };
}
