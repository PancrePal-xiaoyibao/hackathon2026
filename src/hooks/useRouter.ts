import { useCallback, useEffect, useState } from 'react';
import { AppRoute, isAppRoute, ROUTES } from '../lib/routes';

function getRouteFromLocation(): AppRoute {
  const pathname = window.location.pathname || ROUTES.home;
  return isAppRoute(pathname) ? pathname : ROUTES.home;
}

export function useRouter() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getRouteFromLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRouteFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = useCallback((route: AppRoute) => {
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    setCurrentRoute(route);
  }, []);

  return { currentRoute, navigate };
}
