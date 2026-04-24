export const ROUTES = {
  home: '/',
  wishes: '/wishes',
  process: '/process',
  prizes: '/prizes',
  partners: '/partners',
  auth: '/auth',
  dashboard: '/dashboard',
  profile: '/profile',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

const routeSet = new Set<string>(Object.values(ROUTES));

export function isAppRoute(pathname: string): pathname is AppRoute {
  return routeSet.has(pathname);
}
