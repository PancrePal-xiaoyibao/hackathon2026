import React from 'react';
import { Button } from '../components/UIComponents';
import { AppRoute, ROUTES } from '../lib/routes';

interface NotFoundPageProps {
  navigate: (route: AppRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-20">
      <div className="text-center max-w-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">404</p>
        <h1 className="mt-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">页面不存在</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          当前路由没有对应页面，已保留返回首页入口。
        </p>
        <Button className="mt-8" onClick={() => navigate(ROUTES.home)}>
          返回首页
        </Button>
      </div>
    </section>
  );
};
