import Image from 'next/image';
import Link from 'next/link';
import FastGPTColor from '@lobehub/icons/es/FastGPT/components/Color';

interface Sponsor {
  name: string;
  role: string;
  logo?: string;
  width?: number;
  height?: number;
  logoComponent?: React.ReactNode;
}

const sponsors: Sponsor[] = [
  {
    name: '小X宝开源医疗社区',
    role: '主办',
    logo: '/xiao-x-bao.png',
    width: 1691,
    height: 1692,
  },
  {
    name: '魔搭 ModelScope',
    role: '联合主办',
    logo: '/modelscope.jpg',
    width: 8504,
    height: 8504,
  },
  {
    name: 'KnowS',
    role: '合作方',
    logo: '/sponsor-knows.png',
    width: 336,
    height: 354,
  },
  {
    name: '阶跃星辰 StepFun',
    role: '大模型赞助',
    logo: '/sponsor-stepfun.png',
    width: 889,
    height: 339,
  },
  {
    name: 'FastGPT',
    role: '合作方',
    logoComponent: <FastGPTColor size={40} />,
  },
];

export function SponsorStrip() {
  return (
    <section
      aria-labelledby="sponsor-strip-heading"
      className="py-16 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="sponsor-strip-heading"
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600"
          >
            Hosts &amp; Sponsors · 主办与赞助
          </h2>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-10 sm:gap-x-16">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-3 group max-w-[200px]"
              title={`${s.role} · ${s.name}`}
            >
              <div className="h-14 flex items-center">
                {s.logoComponent ? (
                  <div className="h-12 flex items-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300">
                    {s.logoComponent}
                  </div>
                ) : (
                  <Image
                    src={s.logo!}
                    alt={`${s.name} logo`}
                    width={s.width!}
                    height={s.height!}
                    className="h-12 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                  />
                )}
              </div>
              <div className="text-center">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {s.role}
                </div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {s.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            查看主办与合作 →
          </Link>
        </div>
      </div>
    </section>
  );
}
