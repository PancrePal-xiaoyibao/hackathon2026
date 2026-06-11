import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">404</p>
      <h1 className="mt-4 text-4xl font-bold">页面不存在</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-md text-center">
        当前路由没有对应页面，已保留返回首页入口。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center h-10 px-6 rounded-md bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition"
      >
        返回首页
      </Link>
    </div>
  );
}
