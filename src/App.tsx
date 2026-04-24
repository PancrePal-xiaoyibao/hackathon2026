import React, { Suspense, lazy, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { useRouter } from './hooks/useRouter';
import { ROUTES } from './lib/routes';
import { MarketingLayout } from './layouts/MarketingLayout';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const WishesPage = lazy(() => import('./pages/WishesPage').then((module) => ({ default: module.WishesPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then((module) => ({ default: module.ProcessPage })));
const PrizesPage = lazy(() => import('./pages/PrizesPage').then((module) => ({ default: module.PrizesPage })));
const PartnersPage = lazy(() => import('./pages/PartnersPage').then((module) => ({ default: module.PartnersPage })));
const AuthPage = lazy(() => import('./pages/AuthPage').then((module) => ({ default: module.AuthPage })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then((module) => ({ default: module.DashboardPage })));
const ProfilePage = lazy(() => import('./pages/ProfilePage').then((module) => ({ default: module.ProfilePage })));

function App() {
  const { theme, toggleTheme } = useTheme();
  const { currentRoute, navigate } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const renderPage = () => {
    switch (currentRoute) {
      case ROUTES.wishes:
        return <WishesPage />;
      case ROUTES.process:
        return <ProcessPage />;
      case ROUTES.prizes:
        return <PrizesPage />;
      case ROUTES.partners:
        return <PartnersPage />;
      case ROUTES.auth:
        return <AuthPage navigate={navigate} />;
      case ROUTES.dashboard:
        return <DashboardPage navigate={navigate} />;
      case ROUTES.profile:
        return <ProfilePage />;
      case ROUTES.home:
      default:
        return <HomePage />;
    }
  };

  const pageContent = (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400">
          Loading...
        </div>
      }
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoute}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className={currentRoute === ROUTES.dashboard ? 'min-h-screen' : undefined}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );

  if (currentRoute === ROUTES.dashboard) {
    return pageContent;
  }

  return (
    <MarketingLayout
      theme={theme}
      toggleTheme={toggleTheme}
      currentRoute={currentRoute}
      navigate={navigate}
    >
      {pageContent}
    </MarketingLayout>
  );
}

export default App;
