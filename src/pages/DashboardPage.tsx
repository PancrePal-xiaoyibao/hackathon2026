import React from 'react';
import { Dashboard } from '../components/Dashboard';
import { AppRoute, ROUTES } from '../lib/routes';

interface DashboardPageProps {
  navigate: (route: AppRoute) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ navigate }) => {
  return (
    <Dashboard
      onNavigate={navigate}
      onLogout={() => navigate(ROUTES.home)}
    />
  );
};
