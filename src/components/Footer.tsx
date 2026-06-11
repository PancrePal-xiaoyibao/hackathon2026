import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';

interface FooterProps {
  forceDark?: boolean;
}

export function Footer({ forceDark = false }: FooterProps) {
  const containerClass = forceDark
    ? 'border-zinc-800 bg-zinc-950'
    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950';

  const logoIconBg = forceDark
    ? 'bg-zinc-50 text-zinc-900'
    : 'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900';

  const mainText = forceDark ? 'text-zinc-50' : 'text-zinc-900 dark:text-zinc-50';
  const subText = forceDark ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400';
  const linkText = forceDark
    ? 'text-zinc-400 hover:text-zinc-50'
    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50';
  const bottomText = forceDark ? 'text-zinc-600' : 'text-zinc-400 dark:text-zinc-600';

  return (
    <footer className={cn('border-t py-12 transition-colors duration-300', containerClass)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2" aria-label="返回首页">
            <div
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-lg transition-colors',
                logoIconBg,
              )}
            >
              <Code2 size={18} />
            </div>
            <span className={cn('font-bold transition-colors', mainText)}>{SITE.name}</span>
          </Link>
          <p className={cn('text-sm leading-relaxed', subText)}>
            {SITE.slogan} · {SITE.sloganEn}
          </p>
          <p className={cn('text-xs leading-relaxed', subText)}>
            主办：{SITE.hosts.main} × {SITE.hosts.coHost}
            <br />
            合作方：{SITE.hosts.partner} · 大模型赞助：{SITE.hosts.llmSponsor}
          </p>
        </div>

        <nav className="space-y-2 text-sm" aria-label="页脚导航">
          <div className={cn('font-bold mb-2', mainText)}>导航</div>
          <Link href="/wishes" className={cn('block transition-colors', linkText)}>赛题方向</Link>
          <Link href="/process" className={cn('block transition-colors', linkText)}>赛程安排</Link>
          <Link href="/prizes" className={cn('block transition-colors', linkText)}>奖励体系</Link>
          <Link href="/partners" className={cn('block transition-colors', linkText)}>主办合作</Link>
        </nav>

        <div className="space-y-2 text-sm">
          <div className={cn('font-bold mb-2', mainText)}>提交入口</div>
          <a
            href={SITE.submissionUrls.skill}
            target="_blank"
            rel="noreferrer noopener"
            className={cn('block transition-colors', linkText)}
          >
            提交 Skill
          </a>
          <a
            href={SITE.submissionUrls.mcp}
            target="_blank"
            rel="noreferrer noopener"
            className={cn('block transition-colors', linkText)}
          >
            提交 MCP
          </a>
          <a
            href={SITE.registerUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={cn('block transition-colors', linkText)}
          >
            魔搭社区报名
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-900 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p className={cn(bottomText, 'font-mono')}>
          © {new Date().getFullYear()} {SITE.hosts.main}. 项目默认开源（推荐 MIT / Apache 2.0）.
        </p>
        <p className={cn(bottomText, 'font-mono')}>
          禁真实患者数据 · 不做诊断承诺
        </p>
      </div>
    </footer>
  );
}
