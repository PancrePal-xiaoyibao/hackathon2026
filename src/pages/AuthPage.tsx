import React from 'react';
import { Auth } from '../components/Auth';
import { AppRoute } from '../lib/routes';

interface AuthPageProps {
  navigate: (route: AppRoute) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ navigate }) => {
  return <Auth onNavigate={navigate} />;
};
