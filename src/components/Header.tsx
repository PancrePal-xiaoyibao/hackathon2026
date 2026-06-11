'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './UIComponents';
import { useTheme } from './ThemeProvider';
import { NAV_ITEMS, SITE } from '@/lib/site';

export function Header({ forceDark = false }: { forceDark?: boolean }) {
  const pathname = usePathname() ?? '/';
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerBg =
    isScrolled || mobileMenuOpen
      ? forceDark
        ? 'bg-zinc-950/90 border-zinc-800'
        : 'bg-white/90 dark:bg-zinc-950/90 border-zinc-200 dark:border-zinc-800'
      : 'bg-transparent';

  const logoText = forceDark ? 'text-zinc-50' : 'text-zinc-900 dark:text-zinc-50';

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const navItemClass = (active: boolean) => {
    if (active) {
      return forceDark
        ? 'text-violet-400 font-semibold'
        : 'text-violet-600 dark:text-violet-400 font-semibold';
    }
    return forceDark
      ? 'text-zinc-400 hover:text-white'
      : 'text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400';
  };

  const themeIconColor =
    isScrolled || mobileMenuOpen
      ? forceDark
        ? 'text-zinc-400 hover:bg-zinc-800'
        : 'text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'
      : forceDark
        ? 'text-zinc-400 hover:bg-white/10'
        : 'text-zinc-600 hover:bg-white/10 dark:text-zinc-300 dark:hover:bg-white/10';

  const dividerColor = forceDark ? 'bg-zinc-800' : 'bg-zinc-200 dark:bg-zinc-800';

  const mobileMenuBg = forceDark
    ? 'border-zinc-800 bg-zinc-950'
    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950';
  const mobileLinkHover = forceDark
    ? 'hover:bg-zinc-900 text-zinc-400'
    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans',
        isScrolled || mobileMenuOpen
          ? `${headerBg} backdrop-blur-md border-b py-3 shadow-sm`
          : 'py-5',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="返回首页">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
              <Code2 size={18} />
            </div>
            <span className={cn('text-base font-bold tracking-tight transition-colors', logoText)}>
              小X宝医疗黑客松
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="主导航">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-1',
                    navItemClass(active),
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                  {active ? (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-violet-600 dark:bg-violet-400 rounded-full"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? '切换到浅色主题' : '切换到深色主题'}
              className={cn('p-2.5 rounded-full transition-colors', themeIconColor)}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className={cn('hidden md:block w-px h-5 mx-1 transition-colors', dividerColor)} />

            <a
              href={SITE.registerUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden md:inline-flex items-center justify-center h-9 rounded-full px-6 text-sm font-medium bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-lg shadow-violet-500/20 hover:opacity-90 transition"
            >
              立即报名
            </a>

            <button
              type="button"
              aria-label="切换菜单"
              aria-expanded={mobileMenuOpen}
              className={cn(
                'md:hidden p-2 transition-colors',
                forceDark ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-300',
              )}
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn('md:hidden border-t overflow-hidden', mobileMenuBg)}
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      active
                        ? forceDark
                          ? 'bg-zinc-900 text-violet-400'
                          : 'bg-violet-50 dark:bg-violet-900/10 text-violet-600 dark:text-violet-400'
                        : mobileLinkHover,
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 px-2">
                <a
                  href={SITE.registerUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center w-full rounded-lg h-12 text-base font-medium bg-gradient-to-br from-sky-500 to-violet-600 text-white"
                >
                  立即报名
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
