'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Server, Cpu, Database, Stethoscope, Microscope, Brain, Pill } from 'lucide-react';
import { cn } from '@/lib/cn';

interface WishesProps {
  isFullPage?: boolean;
}

const requirements = [
  {
    icon: Stethoscope,
    title: '医疗场景导向',
    desc: '聚焦医疗垂直领域 —— 肿瘤、罕见病、诊断辅助、患者管理、医学文献检索等真实需求。',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    icon: Cpu,
    title: '技术形式',
    desc: '形式为 MCP 工具 或 Agent Skill，可独立运行或集成到现有 Agent 框架。',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
  },
  {
    icon: Server,
    title: '平台部署',
    desc: '须能在魔搭社区部署为 Model 或 Space，确保公开可访问，提供基本 Demo。',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-900/20',
  },
  {
    icon: Sparkles,
    title: '选题登记',
    desc: '选题不限细分方向，但需要在开发前于群内或活动页面登记选题，避免重复。',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
];

const sceneInspiration = [
  { icon: Microscope, title: '肿瘤随访', desc: '随访数据结构化、患者教育、报告解读辅助' },
  { icon: Brain, title: '罕见病', desc: '文献检索、诊断辅助、患者社群匹配' },
  { icon: Database, title: '医学文献', desc: 'PubMed 检索、综述生成、引文图谱' },
  { icon: Pill, title: '用药辅助', desc: '相互作用查询、剂量计算、不良反应识别' },
];

export const Wishes: React.FC<WishesProps> = ({ isFullPage = false }) => {
  return (
    <section
      id="wishes"
      className={cn(
        'relative overflow-hidden font-sans transition-colors duration-300',
        isFullPage ? 'min-h-screen pt-32 pb-24' : 'py-24',
        'bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50',
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            COMPETITION SCOPE
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900 dark:text-white">
            赛题方向 <span className="text-emerald-500">.Theme</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-3">
            通用医学 + 生命科学方向，<strong className="text-zinc-900 dark:text-zinc-100">不做更细的限制</strong>。
            只要你的应用能解决真实医疗场景问题，即刻出发。
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-500">
            核心赛题：聚焦医疗垂直领域，构建可复用的 Skills 或 MCP 扩展工具。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {requirements.map((req, index) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:border-emerald-500/30"
            >
              <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform', req.bg, req.color)}>
                <req.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{req.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{req.desc}</p>
            </motion.div>
          ))}
        </div>

        {isFullPage ? (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">场景灵感（仅供参考）</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-8">
              不限于以下方向，鼓励从一线医护、患者、研究者的真实痛点出发。
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sceneInspiration.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-sm"
                >
                  <s.icon className="text-emerald-500 mb-3" size={20} />
                  <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">{s.title}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-900/10">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
                COMPLIANCE NOTICE
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <strong>禁止使用真实患者数据，不得做出诊断承诺。</strong>
                所有作品须包含医疗合规性声明，明确说明工具输出不作为最终医疗诊断依据。
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};
