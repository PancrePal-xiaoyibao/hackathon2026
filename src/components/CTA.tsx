'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE } from '@/lib/site';

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="relative py-32 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/30 to-sky-500/30 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <Sparkles size={14} className="text-yellow-400" />
          <span>报名截止：滚动报名 · 最终提交 7/12 23:59</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
          {SITE.slogan} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400">
            {SITE.sloganEn}
          </span>
        </h2>

        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
          在医疗的广阔疆域中，仍有许多崎岖之路。加入我们，用代码与 AI 为生命构筑更多可能。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.registerUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center h-16 px-10 text-lg rounded-full bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-[0_0_50px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_80px_-10px_rgba(139,92,246,0.7)] transition-all hover:scale-105"
          >
            前往魔搭报名 <ArrowRight className="ml-2" />
          </a>
          <a
            href={SITE.submissionUrls.skill}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center h-16 px-10 text-lg rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white transition-all"
          >
            提交 Skill
          </a>
          <a
            href={SITE.submissionUrls.mcp}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center h-16 px-10 text-lg rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white transition-all"
          >
            提交 MCP
          </a>
        </div>

        <p className="text-xs text-zinc-500 mt-12 font-mono">
          项目默认开源 · 禁真实患者数据 · 不做诊断承诺
        </p>
      </div>
    </section>
  );
};
