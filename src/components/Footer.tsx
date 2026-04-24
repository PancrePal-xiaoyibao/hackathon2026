import React from 'react';
import { Code2, Github } from 'lucide-react';
import { cn } from './UIComponents';

interface FooterProps {
  forceDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ forceDark = false }) => {
  // Styles mapping based on forceDark prop
  const containerClass = forceDark
    ? "border-zinc-800 bg-zinc-950"
    : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950";

  const logoIconBg = forceDark
    ? "bg-zinc-50 text-zinc-900"
    : "bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900";

  const mainText = forceDark
    ? "text-zinc-50"
    : "text-zinc-900 dark:text-zinc-50";

  const subText = forceDark
    ? "text-zinc-400"
    : "text-zinc-500 dark:text-zinc-400";

  const linkText = forceDark
    ? "text-zinc-400 hover:text-zinc-50"
    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50";

  const bottomText = forceDark
    ? "text-zinc-600"
    : "text-zinc-400 dark:text-zinc-600";

  return (
    <footer className={cn("border-t py-12 transition-colors duration-300", containerClass)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg transition-colors", logoIconBg)}>
              <Code2 size={20} />
            </div>
            <span className={cn("font-bold transition-colors", mainText)}>
              Code for Health
            </span>
          </div>
          <p className={cn("text-sm text-center md:text-left transition-colors", subText)}>
            © 2024 Code for Health. <br className="hidden sm:block" />
            Made with ❤️ by Open Source Community.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className={cn("text-sm transition-colors", linkText)}>
            关于社区
          </a>
          <a href="#" className={cn("text-sm transition-colors", linkText)}>
            联系我们
          </a>
          <a href="#" className={cn("transition-colors", linkText)}>
            <Github size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className={cn("text-xs transition-colors", bottomText)}>
          本活动所有产出代码均遵循 MIT 开源协议
        </p>
      </div>
    </footer>
  );
};