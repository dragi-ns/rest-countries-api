import { useState, useMemo, useEffect } from 'react';
import baseTheme from '../styles/theme';

export default function useThemeSwitcher(initialValue) {
  const [colorScheme, setColorScheme] = useState(initialValue);
  const theme = useMemo(
    () => generateTheme(baseTheme, colorScheme),
    [colorScheme]
  );

  useEffect(() => {
    const handleDarkModeQueryChange = (event) => {
      setColorScheme(event.matches ? 'dark' : 'light');
    };

    const savedColorScheme = localStorage.getItem('currentColorScheme');
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (savedColorScheme && ['dark', 'light'].includes(savedColorScheme)) {
      setColorScheme(savedColorScheme);
    } else if (darkModeQuery.matches) {
      setColorScheme('dark');
    }

    darkModeQuery.addEventListener('change', handleDarkModeQueryChange);
    return () => {
      darkModeQuery.removeEventListener('change', handleDarkModeQueryChange);
    };
  }, []);

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    localStorage.setItem('currentColorScheme', newColorScheme);
  };

  return [theme, colorScheme, toggleColorScheme];
}

const generateTheme = (theme, colorScheme) => {
  return {
    ...theme,
    colors: theme.colors[colorScheme],
  };
};
