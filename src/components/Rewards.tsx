'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileBadge, Github, Ticket, Keyboard, Sparkles } from 'lucide-react';
import { cn } from '@/lib/cn';

interface RewardsProps {
  isFullPage?: boolean;
}

const stagePrizes = [
  {
    id: '01',
    label: '阶段 1',
    date: '6/18 — 6/24',
    title: '🎯 最佳选题潜力奖',
    reward: '3 张 WAIC 单日票 + 开发者采访',
    rewardIcon: 'ticket',
    desc: '重点评估选题是否真实、有价值、可在短周期内落地。',
    color: 'amber',
  },
  {
    id: '02',
    label: '阶段 2',
    date: '6/25 — 7/1',
    title: '⚡ 最佳 MVP 原型奖',
    reward: '1 个 Vibecoding 键盘 + 开发者采访',
    rewardIcon: 'keyboard',
    desc: '奖励最早把核心能力跑起来的队伍，必须能演示。',
    color: 'violet',
  },
  {
    id: '03',
    label: '阶段 3',
    date: '7/2 — 7/8',
    title: '🌟 社区影响力奖',
    reward: '1 个 Vibecoding 键盘 + 开发者采访',
    rewardIcon: 'keyboard',
    desc: '综合有效调用、收藏、评论质量、传播质量，异常流量剔除。',
    color: 'emerald',
  },
];

const criteria = [
  { name: '技术实现与可运行性', weight: 25, desc: '代码结构清晰、核心功能能跑、部署稳定' },
  { name: '医疗场景价值与问题定义', weight: 20, desc: '场景真实、目标用户明确、解决方案有意义' },
  { name: 'MCP/Skill 完成度与平台适配', weight: 20, desc: '是否符合魔搭社区提交、运行和展示要求' },
  { name: '开源质量与文档可复现性', weight: 15, desc: '公开仓库、License、README、部署步骤、示例输入输出' },
  { name: '安全合规与风险控制', weight: 10, desc: '不使用真实患者数据，不承诺诊断，明确局限性' },
  { name: '社区反馈质量', weight: 10, desc: '真实用户反馈、Issue、有效讨论，而非单纯调用数' },
];

const extras = [
  {
    icon: FileBadge,
    title: '荣誉见证',
    desc: '所有完成提交的参与者均可获得官方电子参与证书。',
    audience: '全员',
  },
  {
    icon: Github,
    title: '品牌曝光',
    desc: '优秀作品将上架 GitHub 与魔搭社区，获得全平台流量支持。',
    audience: '优秀作品',
  },
];

const partnerBenefits = [
  {
    sponsor: 'KnowS',
    sponsorRole: '医学循证 AI',
    accent: 'from-violet-500 to-fuchsia-500',
    border: 'border-violet-200 dark:border-violet-900/40',
    items: [
      {
        scope: '通过审核团队',
        title: '团队独立 API Key + 共享额度池',
        value: '总价值 ¥10,000',
        desc: '开放文献、指南、说明书、临床试验等检索能力，活动期间团队共同使用，自活动开始起生效。',
      },
      {
        scope: '一等奖团队（每队最多 3 人）',
        title: 'KnowS 专业版-3 倍积分年度会员',
        value: '等值 ¥2,388 / 人',
        desc: '获奖团队内每位有效成员额外获得 1 份。',
      },
      {
        scope: '二等奖团队（每队最多 3 人）',
        title: 'KnowS 专业版-1 倍积分年度会员',
        value: '等值 ¥828 / 人',
        desc: '获奖团队内每位有效成员额外获得 1 份。',
      },
    ],
  },
  {
    sponsor: '阶跃星辰 StepFun',
    sponsorRole: '大模型赞助',
    accent: 'from-emerald-500 to-sky-500',
    border: 'border-emerald-200 dark:border-emerald-900/40',
    items: [
      {
        scope: '全员普惠（每位有效参赛选手）',
        title: 'Flash Pro 月度套餐',
        value: '等值 ¥199 / 人',
        desc: '每位选手仅可加入 1 支队伍，并仅可领取 1 份普惠权益。',
      },
      {
        scope: '一等奖团队（每位有效成员）',
        title: 'Flash Max 季度套餐',
        value: '等值 ¥1,889 / 人',
        desc: '获奖专项权益可与参赛普惠权益叠加。',
      },
      {
        scope: '二等奖团队（每位有效成员）',
        title: 'Flash Pro 季度套餐',
        value: '等值 ¥539 / 人',
        desc: '获奖专项权益可与参赛普惠权益叠加。',
      },
      {
        scope: '三等奖团队（每位有效成员）',
        title: 'Flash Pro 月度 Coding Plan',
        value: '等值 ¥199 / 人',
        desc: '获奖专项权益可与参赛普惠权益叠加。',
      },
    ],
  },
];

export const Rewards: React.FC<RewardsProps> = ({ isFullPage = false }) => {
  return (
    <section
      id="prizes"
      className={cn(
        'relative overflow-hidden font-sans transition-colors duration-300',
        isFullPage ? 'min-h-screen pt-32 pb-24' : 'py-24',
        'bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50',
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-200/30 dark:bg-amber-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-200/30 dark:bg-orange-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6 shadow-sm"
          >
            PRIZE POOL
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-white">
            奖励体系{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
              Rewards
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            既有阶段直通的实物激励，也有 KnowS 与 StepFun 提供的合作方专项权益。我们尊重每一行有温度的代码。
          </p>
        </div>

        {/* Stage prizes */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
              Stage Prizes · 阶段奖
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stagePrizes.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  'relative p-6 rounded-2xl border bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md',
                  p.color === 'amber' && 'border-amber-200 dark:border-amber-900/40',
                  p.color === 'violet' && 'border-violet-200 dark:border-violet-900/40',
                  p.color === 'emerald' && 'border-emerald-200 dark:border-emerald-900/40',
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={cn(
                    'text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded',
                    p.color === 'amber' && 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
                    p.color === 'violet' && 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
                    p.color === 'emerald' && 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
                  )}>
                    {p.label}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{p.date}</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{p.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  {p.rewardIcon === 'keyboard' ? (
                    <Keyboard size={14} className="text-zinc-500" />
                  ) : (
                    <Ticket size={14} className="text-zinc-500" />
                  )}
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{p.reward}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Six-dimension scoring (full page) */}
        {isFullPage ? (
          <div className="mb-20">
            <div className="text-center mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
                Six-Dimension Evaluation Matrix
              </span>
            </div>
            <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md">
              <div className="space-y-4">
                {criteria.map((c) => (
                  <div key={c.name} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                    <div className="md:col-span-4 font-bold text-zinc-900 dark:text-zinc-100">{c.name}</div>
                    <div className="md:col-span-6">
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{c.desc}</div>
                      <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-sky-500 rounded-full"
                          style={{ width: `${c.weight * 4}%` }}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 text-right font-mono text-2xl font-black text-violet-600 dark:text-violet-400">
                      {c.weight}%
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-6 leading-relaxed">
                最终总评采用独立专家六维评分制，社区反馈质量仅占 10%，不直接主导排名。
              </p>
            </div>
          </div>
        ) : null}

        {/* Partner Special Benefits · 合作方专项权益 */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
              Partner Special Benefits · 合作方专项权益
            </span>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              本次黑客松最终奖励由合作方专项权益构成，覆盖参赛全员普惠与最终总评获奖团队。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {partnerBenefits.map((p, i) => (
              <motion.div
                key={p.sponsor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  'relative p-6 rounded-2xl border bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md',
                  p.border,
                )}
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className={cn('inline-flex p-2.5 rounded-xl bg-gradient-to-br', p.accent)}>
                    <Sparkles size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-zinc-900 dark:text-zinc-100">{p.sponsor}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {p.sponsorRole}
                    </div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {p.items.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <div className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 dark:from-zinc-500 dark:to-zinc-300" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-0.5">
                          {item.scope}
                        </div>
                        <div className="flex items-baseline gap-2 flex-wrap mb-1">
                          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.title}</span>
                          <span className={cn('text-xs font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r', p.accent)}>
                            {item.value}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-6 font-mono leading-relaxed max-w-3xl mx-auto px-4">
            * 以上 KnowS 与 StepFun 专项权益由对应合作方单独提供，具体 API Key 发放形式、套餐名称、领取方式、有效期与使用规则以合作方最终确认为准。
            <br />
            * Sealos（FastGPT）提供的 RAG 能力与技术支持作为技术生态支持展示，不作为奖品或赞助权益发放。
          </p>
        </div>

        {/* Extras */}
        <div>
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
              Additional Benefits · 额外权益
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {extras.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="inline-flex p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-violet-600 dark:text-violet-400">
                    <e.icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    {e.audience}
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">{e.title}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
