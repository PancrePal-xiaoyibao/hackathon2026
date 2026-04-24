import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Theme } from '../types';
import { AppRoute } from '../lib/routes';

interface MarketingLayoutProps {
  children: React.ReactNode;
  theme: Theme;
  toggleTheme: () => void;
  currentRoute: AppRoute;
  navigate: (route: AppRoute) => void;
}

export const MarketingLayout: React.FC<MarketingLayoutProps> = ({
  children,
  theme,
  toggleTheme,
  currentRoute,
  navigate,
}) => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans antialiased selection:bg-violet-600/30 flex flex-col transition-colors duration-300">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        currentRoute={currentRoute}
        onNavigate={navigate}
      />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
