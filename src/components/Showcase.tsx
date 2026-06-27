'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Vote,
  Boxes,
  Plug,
  Wrench,
  Users,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';
import { CANDIDATES } from '@/lib/candidates';
import type { Candidate, CandidateKind } from '@/types';

interface ShowcaseProps {
  isFullPage?: boolean;
}

const KIND_META: Record<
  CandidateKind,
  { icon: React.ElementType; color: string; bg: string }
> = {
  Studio: {
    icon: Boxes,
    color: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-900/40',
  },
  MCP: {
    icon: Plug,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-900/40',
  },
  'Agent Skill': {
    icon: Wrench,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-900/40',
  },
};

const FILTERS = ['全部', 'Studio', 'MCP', 'Agent Skill'] as const;
type Filter = (typeof FILTERS)[number];

function CandidateCard({ c, index }: { c: Candidate; index: number }) {
  const meta = KIND_META[c.kind];
  const Icon = meta.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.3) }}
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl',
        c.linkAvailable
          ? 'border-zinc-200 dark:border-zinc-800 hover:shadow-violet-500/10 dark:hover:border-violet-500/30'
          : 'border-amber-300/70 dark:border-amber-900/50',
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold',
              meta.bg,
              meta.color,
            )}
          >
            <Icon size={13} />
            {c.kind}
          </span>
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
            {c.candidateId}
          </span>
        </div>
        {!c.linkAvailable ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 text-[11px] font-medium text-amber-700 dark:text-amber-400">
            <AlertTriangle size={11} />
            待补链
          </span>
        ) : null}
      </div>

      <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-50 mb-1">
        {c.displayName}
      </h3>
      <div className="text-xs font-medium text-violet-600 dark:text-violet-400 mb-3">
        {c.category}
      </div>

      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
        {c.summary}
      </p>

      <div className="mt-auto space-y-3 text-xs">
        <div>
          <div className="mb-1 flex items-center gap-1.5 font-semibold text-zinc-700 dark:text-zinc-300">
            <Sparkles size={12} className="text-amber-500" />
            核心功能 / 亮点
          </div>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-400">{c.highlights}</p>
        </div>
        <div>
          <div className="mb-1 flex items-center gap-1.5 font-semibold text-zinc-700 dark:text-zinc-300">
            <Users size={12} className="text-sky-500" />
            适合关注人群
          </div>
          <p className="leading-relaxed text-zinc-500 dark:text-zinc-400">{c.audience}</p>
        </div>
      </div>

      <div className="mt-5 border-t border-zinc-100 dark:border-zinc-800 pt-4">
        {c.linkAvailable ? (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
            >
              查看作品
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {c.altLink ? (
              <a
                href={c.altLink.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:underline"
              >
                {c.altLink.label}
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </div>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 dark:text-zinc-600">
            链接待补充
          </span>
        )}
      </div>
    </motion.article>
  );
}

export const Showcase: React.FC<ShowcaseProps> = ({ isFullPage = false }) => {
  const [filter, setFilter] = useState<Filter>('全部');

  const visible = useMemo(
    () => (filter === '全部' ? CANDIDATES : CANDIDATES.filter((c) => c.kind === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const total = CANDIDATES.length;
    const studio = CANDIDATES.filter((c) => c.kind === 'Studio').length;
    const mcp = CANDIDATES.filter((c) => c.kind === 'MCP').length;
    const skill = CANDIDATES.filter((c) => c.kind === 'Agent Skill').length;
    return { total, studio, mcp, skill };
  }, []);

  return (
    <section
      id="showcase"
      className={cn(
        'relative overflow-hidden font-sans transition-colors duration-300',
        isFullPage ? 'min-h-screen pt-32 pb-24' : 'py-24',
        'bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50',
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 backdrop-blur-sm text-xs font-mono text-violet-600 dark:text-violet-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            BEST TOPIC VOTING
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900 dark:text-white">
            作品投票 <span className="text-violet-500">.Vote</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-3">
            首批参赛者的选题与创意已经出炉，共 <strong className="text-zinc-900 dark:text-zinc-100">{counts.total}</strong> 件作品。
            浏览下面的候选卡片，再到问卷里投出你心中的最佳选题。
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-3">
          <a
            href={SITE.voteUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center h-11 rounded-full px-7 text-sm font-semibold bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-lg shadow-violet-500/20 hover:opacity-90 transition"
          >
            <Vote size={18} className="mr-2" />
            前往投票问卷
          </a>
          <span className="text-xs text-zinc-400 dark:text-zinc-600">
            每人 1 票最佳选题，可附最多 3 项推荐与 5 维评分
          </span>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            const label =
              f === '全部'
                ? `全部 ${counts.total}`
                : f === 'Studio'
                  ? `Studio ${counts.studio}`
                  : f === 'MCP'
                    ? `MCP ${counts.mcp}`
                    : `Agent Skill ${counts.skill}`;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                  active
                    ? 'border-violet-500 bg-violet-500 text-white'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400',
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c, i) => (
            <CandidateCard key={`${c.candidateId}-${c.team}`} c={c} index={i} />
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-900/10">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
            COMPLIANCE NOTICE
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            以上作品均为参赛选题展示，<strong>输出不作为最终医疗诊断依据</strong>。投票仅用于评选最佳选题，结果不代表主办方对作品安全性或合规性的背书。
          </p>
        </div>
      </div>
    </section>
  );
};
