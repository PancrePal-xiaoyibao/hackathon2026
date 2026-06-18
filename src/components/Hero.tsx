'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileCode, Terminal, Wrench } from 'lucide-react';
import ModelScopeColor from '@lobehub/icons/es/ModelScope/components/Color';
import { Button, Badge } from './UIComponents';
import { SITE } from '@/lib/site';

interface HeroSponsor {
  name: string;
  role: string;
  logo?: string;
  w?: number;
  h?: number;
  logoComponent?: React.ReactNode;
}

const heroSponsors: HeroSponsor[] = [
  { name: '小X宝', role: '主办', logo: '/xiao-x-bao.png', w: 1691, h: 1692 },
  { name: '魔搭 ModelScope', role: '联合主办', logoComponent: <ModelScopeColor size={28} /> },
  { name: 'KnowS', role: '医学循证 AI', logo: '/sponsor-knows.png', w: 336, h: 354 },
  { name: '阶跃星辰 StepFun', role: '大模型', logo: '/sponsor-stepfun.png', w: 889, h: 339 },
  { name: 'Sealos', role: '技术支持 · RAG', logo: '/sealos.svg', w: 40, h: 40 },
];

export const Hero: React.FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fullText = SITE.slogan;
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Atmospheric Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-violet-600/15 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-sky-500/15 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-fuchsia-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-20 left-10 animate-float text-sky-500"><Wrench size={48} /></div>
        <div className="absolute top-40 right-20 animate-float-delayed text-violet-500"><FileCode size={48} /></div>
        <div className="absolute bottom-20 left-1/4 animate-float text-fuchsia-500"><Terminal size={32} /></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-3 flex flex-col justify-center space-y-8 text-center lg:text-left"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-8"
              >
                <Badge variant="gradient" className="pl-1 pr-3 py-1 animate-pulse shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)] border-violet-200/50 backdrop-blur-md">
                  <span className="bg-white text-violet-600 rounded-full px-1.5 py-0.5 text-[10px] mr-2 font-bold shadow-sm">2026 SEASON</span>
                  ✨ {SITE.hosts.main} × {SITE.hosts.coHost}
                </Badge>
              </motion.div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl mb-4 text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                2026 小X宝开源医疗
                <br />
                社区黑客松
              </h1>
              <h2 className="text-2xl sm:text-3xl xl:text-4xl mb-6 leading-[1.2]">
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-violet-600 blur-2xl opacity-20"></span>
                  <span className="relative bg-gradient-to-r from-sky-500 via-violet-500 to-sky-500 bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent font-extrabold">
                    {text}
                  </span>
                </span>
                <span className="animate-pulse text-sky-500">|</span>
              </h2>
              <p className="text-base text-zinc-500 dark:text-zinc-400 italic mb-6 max-w-xl mx-auto lg:mx-0">
                {SITE.sloganEn}
              </p>
              <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                聚焦医疗垂直领域，构建可复用的 <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Skills 或 MCP 扩展工具</strong>。三阶段冲刺，魔搭社区联合主办。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={SITE.registerUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center h-14 px-8 text-lg rounded-full bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.5)] transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(124,58,237,0.6)]"
              >
                前往魔搭报名
                <ArrowRight size={20} className="ml-2" />
              </a>
              <Link href="/process">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg rounded-full border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md hover:bg-white/80 dark:hover:bg-zinc-800 transition-all hover:border-zinc-300"
                >
                  查看赛程
                </Button>
              </Link>
            </div>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>阶段奖品</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>云资源 + 模型额度</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>开发者采访</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>开源认证</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Date Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative space-y-4">
              <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Live Hackathon
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">报名 / 开发</span>
                    <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">6/18 起</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">阶段 1 选题潜力</span>
                    <span className="font-mono text-amber-600 dark:text-amber-400">6/18 — 6/24</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">阶段 2 MVP</span>
                    <span className="font-mono text-violet-600 dark:text-violet-400">6/25 — 7/1</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">阶段 3 社区影响</span>
                    <span className="font-mono text-sky-600 dark:text-sky-400">7/2 — 7/8</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">最终提交</span>
                    <span className="font-mono font-bold text-rose-600 dark:text-rose-400">7/12 23:59</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 dark:text-zinc-400">结果公示</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">7/15</span>
                  </div>
                </div>
              </div>

              <Link
                href="/partners"
                className="block group"
              >
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl p-5 transition-all hover:border-violet-300 dark:hover:border-violet-700/60 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                      Partners &amp; Sponsors
                    </div>
                    <ArrowRight size={12} className="text-zinc-400 group-hover:text-violet-500 group-hover:translate-x-0.5 transition" />
                  </div>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                    {heroSponsors.map((s) => (
                      <div key={s.name} className="flex flex-col gap-1.5">
                        <div className="h-7 flex items-center">
                          {s.logoComponent ? (
                            s.logoComponent
                          ) : (
                            <Image
                              src={s.logo!}
                              alt={`${s.name} logo`}
                              width={s.w!}
                              height={s.h!}
                              className="h-7 w-auto object-contain"
                            />
                          )}
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 truncate">
                          {s.role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
