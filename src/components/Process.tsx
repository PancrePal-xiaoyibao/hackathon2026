'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Zap, Users, Trophy, Calendar, Sparkles } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ProcessProps {
  isFullPage?: boolean;
}

const stages = [
  {
    id: '00',
    title: '上线 / 报名开始',
    date: '2026 年 6 月 18 日',
    desc: '在魔搭社区完成身份绑定，加入官方交流群，即刻开发。',
    icon: Rocket,
    color: 'sky',
  },
  {
    id: '01',
    title: '阶段 1 · 选题登记',
    date: '6 月 18 日 — 6 月 24 日',
    desc: '登记选题并完成可行性说明。阶段结束评选「最佳选题潜力奖」，发放 1 个 Vibecoding 键盘 + 开发者采访。',
    icon: Target,
    color: 'amber',
    badge: '🎯 最佳选题潜力奖',
  },
  {
    id: '02',
    title: '阶段 2 · MVP 开发',
    date: '6 月 25 日 — 7 月 1 日',
    desc: '提交可运行 MVP 原型。阶段结束评选「最佳 MVP 原型奖」，发放 1 个 Vibecoding 键盘 + 开发者采访。',
    icon: Zap,
    color: 'violet',
    badge: '⚡ 最佳 MVP 原型奖',
  },
  {
    id: '03',
    title: '阶段 3 · 社区共建',
    date: '7 月 2 日 — 7 月 8 日',
    desc: '鼓励社区试用、反馈与传播。阶段结束评选「社区影响力奖」，发放 1 张 WAIC 门票 + 开发者采访。',
    icon: Users,
    color: 'emerald',
    badge: '🌟 社区影响力奖',
  },
  {
    id: '04',
    title: '最终提交截止',
    date: '7 月 12 日 23:59',
    desc: '将完整作品发布至魔搭社区，并填写最终提交表单。',
    icon: Calendar,
    color: 'rose',
  },
  {
    id: '05',
    title: '集中评审',
    date: '7 月 13 日 — 7 月 14 日',
    desc: '独立专家六维评分制评审。',
    icon: Sparkles,
    color: 'indigo',
  },
  {
    id: '06',
    title: '结果公示与颁奖',
    date: '7 月 15 日',
    desc: '公布最终获奖名单，发放云资源 / API 额度。',
    icon: Trophy,
    color: 'amber',
  },
  {
    id: '07',
    title: 'WAIC 赛果展示',
    date: '7 月 17 日 — 7 月 20 日',
    desc: '获奖代表于上海 WAIC 大会现场做赛果展示。',
    icon: Sparkles,
    color: 'fuchsia',
  },
];

const colorMap: Record<string, { dot: string; text: string; border: string }> = {
  sky: { dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400', border: 'border-sky-500/40' },
  amber: { dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500/40' },
  violet: { dot: 'bg-violet-500', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-500/40' },
  emerald: { dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/40' },
  rose: { dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-500/40' },
  indigo: { dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-500/40' },
  fuchsia: { dot: 'bg-fuchsia-500', text: 'text-fuchsia-600 dark:text-fuchsia-400', border: 'border-fuchsia-500/40' },
};

export const Process: React.FC<ProcessProps> = ({ isFullPage = false }) => {
  const visible = isFullPage ? stages : stages.slice(0, 4);

  return (
    <section
      id="process"
      className={cn(
        'relative overflow-hidden font-sans transition-colors duration-300',
        isFullPage ? 'min-h-screen pt-32 pb-24' : 'py-24',
        'bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50',
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1000px] h-[600px] bg-sky-200/30 dark:bg-sky-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-200/30 dark:bg-violet-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            HACKATHON SCHEDULE
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-white">
            赛程安排 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500">.Schedule</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            为期近四周（6 月 18 日 — 7 月 12 日），节奏紧凑，三个阶段里程碑直通 WAIC 2026。
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

          <div className="space-y-12">
            {visible.map((s, index) => {
              const c = colorMap[s.color];
              const Icon = s.icon;
              const left = index % 2 === 0;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative grid md:grid-cols-2 gap-6 items-center"
                >
                  <div
                    className={cn(
                      'absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 w-3 h-3 rounded-full border-2 border-white dark:border-zinc-900',
                      c.dot,
                    )}
                  />

                  <div className={cn('pl-12 md:pl-0', left ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12')}>
                    <div
                      className={cn(
                        'p-5 rounded-xl border bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md transition-all',
                        c.border,
                      )}
                    >
                      <div className={cn('flex items-center gap-2 mb-2', left ? 'md:justify-end' : '')}>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Step {s.id}</span>
                        <Icon size={16} className={c.text} />
                      </div>
                      <h3 className={cn('text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1')}>
                        {s.title}
                      </h3>
                      <div className={cn('text-xs font-mono mb-2', c.text)}>{s.date}</div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
                      {s.badge ? (
                        <div className={cn('inline-block mt-3 px-2 py-1 rounded text-xs font-bold', c.text, 'bg-white/60 dark:bg-zinc-950/40')}>
                          {s.badge}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className={cn('hidden md:block', left ? 'md:order-2' : '')} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {isFullPage ? (
          <div className="mt-20 max-w-4xl mx-auto p-6 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-900/10">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
              FAIRNESS RULES
            </div>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc pl-5">
              <li>每支队伍在整个比赛期间最多获得 1 次魔搭阶段奖（Vibecoding 键盘或 WAIC 门票），已获奖团队不再参与后续阶段奖评选。</li>
              <li>若某阶段最高分团队已获奖，对应礼品顺延至该阶段下一支未获奖且符合资格的队伍。</li>
              <li>阶段获奖后 24 — 48 小时内完成 5 个问题的轻量采访，用于公众号 / 魔搭社区 / 活动页宣传。</li>
              <li>每人只能加入一队；同一核心成员、同一代码库视为同一参赛主体。</li>
              <li>允许历史项目参赛，但必须披露赛前已有部分，评审重点看比赛期间新增贡献。</li>
              <li>异常流量（刷量、互刷、机器人行为）将被剔除，情节严重者取消评奖资格。</li>
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};
