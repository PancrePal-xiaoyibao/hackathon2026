'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'theme';

function applyTheme(next: Theme) {
  document.documentElement.classList.toggle('dark', next === 'dark');
}

function readInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// useSyncExternalStore avoids the "setState in effect" anti-pattern: SSR returns
// the snapshot, client hydrates with the actual stored/system theme in one pass.
function subscribe(onChange: () => void) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', onChange);
  window.addEventListener('storage', onChange);
  return () => {
    mq.removeEventListener('change', onChange);
    window.removeEventListener('storage', onChange);
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [override, setOverride] = useState<Theme | null>(null);

  const detected = useSyncExternalStore(
    subscribe,
    () => readInitialTheme(),
    () => 'light' as Theme,
  );

  const theme: Theme = override ?? detected;

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setOverride((current) => {
      const base = current ?? readInitialTheme();
      const next: Theme = base === 'light' ? 'dark' : 'light';
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return {
      theme: 'light',
      toggleTheme: () => undefined,
    };
  }
  return ctx;
}
