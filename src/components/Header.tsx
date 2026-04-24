
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { Button, cn } from './UIComponents';
import { Theme } from '../types';
import { AppRoute, ROUTES } from '../lib/routes';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  forceDark?: boolean;
}

const navItems: Array<{ id: AppRoute; label: string }> = [
  { id: ROUTES.wishes, label: '赛题需求' },
  { id: ROUTES.process, label: '参与流程' },
  { id: ROUTES.prizes, label: '奖项设置' },
  { id: ROUTES.partners, label: '生态合作' },
];

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, currentRoute, onNavigate, forceDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (route: AppRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    onNavigate(ROUTES.home);
    setMobileMenuOpen(false);
  };

  const handleAuthClick = () => {
    onNavigate(ROUTES.auth);
    setMobileMenuOpen(false);
  }

  // --- Style Logic ---
  const headerBg = (isScrolled || mobileMenuOpen)
    ? (forceDark ? "bg-zinc-950/90 border-zinc-800" : "bg-white/90 dark:bg-zinc-950/90 border-zinc-200 dark:border-zinc-800")
    : "bg-transparent";

  const logoText = forceDark ? "text-zinc-50" : "text-zinc-900 dark:text-zinc-50";

  const navItemClass = (isActive: boolean) => {
    if (isActive) {
      return forceDark 
        ? "text-violet-400 font-semibold" 
        : "text-violet-600 dark:text-violet-400 font-semibold";
    }
    return forceDark 
      ? "text-zinc-400 hover:text-white" 
      : "text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400";
  };

  const themeIconColor = (isScrolled || mobileMenuOpen)
     ? (forceDark ? "text-zinc-400 hover:bg-zinc-800" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800")
     : (forceDark ? "text-zinc-400 hover:bg-white/10" : "text-zinc-600 hover:bg-white/10 dark:text-zinc-300 dark:hover:bg-white/10");

  const dividerColor = forceDark ? "bg-zinc-800" : "bg-zinc-200 dark:bg-zinc-800";
  
  const mobileMenuBg = forceDark ? "border-zinc-800 bg-zinc-950" : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950";
  const mobileLinkHover = forceDark ? "hover:bg-zinc-900 text-zinc-400" : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans",
        (isScrolled || mobileMenuOpen) ? `${headerBg} backdrop-blur-md border-b py-3 shadow-sm` : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group" 
            onClick={handleLogoClick}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
              <Code2 size={18} />
            </div>
            <span className={cn("text-lg font-bold tracking-tight transition-colors", logoText)}>
              Code for Health
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  navItemClass(currentRoute === item.id)
                )}
              >
                {item.label}
                {currentRoute === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-violet-600 dark:bg-violet-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className={cn("p-2.5 rounded-full transition-colors", themeIconColor)}
            >
              {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className={cn("hidden md:block w-px h-5 mx-1 transition-colors", dividerColor)}></div>
            
            <div className="hidden md:block">
               <Button 
                variant="default" 
                size="sm"
                className="rounded-full px-6 shadow-lg shadow-violet-500/20"
                onClick={handleAuthClick}
              >
                立即报名 / 登录
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={cn("md:hidden p-2 transition-colors", forceDark ? "text-zinc-300" : "text-zinc-600 dark:text-zinc-300")}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn("md:hidden border-t overflow-hidden", mobileMenuBg)}
          >
            <div className="px-4 py-6 space-y-2">
               {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    currentRoute === item.id
                      ? (forceDark ? "bg-zinc-900 text-violet-400" : "bg-violet-50 dark:bg-violet-900/10 text-violet-600 dark:text-violet-400")
                      : mobileLinkHover
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-2">
                <Button className="w-full rounded-lg h-12 text-base shadow-none" size="lg" onClick={handleAuthClick}>
                    立即报名 / 登录
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};