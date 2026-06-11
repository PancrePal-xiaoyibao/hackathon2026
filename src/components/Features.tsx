'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Heart, Users } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-4">
            为什么参加？ <br />
            <span className="text-zinc-400">Why this hackathon.</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            在医疗的广阔疆域中，仍有许多崎岖之路 —— 肿瘤的复杂、罕见病的孤独。科技的力量，应当成为照亮这些角落的火炬。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-8 h-full flex flex-col relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench size={24} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                构建医疗 MCP 工具与 Agent Skill
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-md">
                聚焦真实医疗痛点：肿瘤随访、罕见病文献检索、诊断辅助、患者管理、用药辅助。
                作品须能在魔搭社区部署为 Model 或 Space，独立运行或集成到现有 Agent 框架。
              </p>

              <div className="mt-auto pt-8 flex items-end justify-center md:justify-start overflow-hidden">
                <div className="w-full max-w-sm bg-zinc-950 rounded-t-xl border border-zinc-800 shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500 p-4">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="ml-2 text-[10px] font-mono text-zinc-500">my-medical-skill.py</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-zinc-800 rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-zinc-800 rounded animate-pulse delay-75" />
                    <div className="h-2 w-full bg-zinc-800 rounded animate-pulse delay-150" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-violet-500/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">直通 WAIC 2026</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                三个阶段共发放 3 张 WAIC 门票，获奖代表 7/17 — 7/20 上海现场展示。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-rose-500/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-rose-500">
              <Heart size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4">
                <Heart size={20} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">公益开源 · 真实价值</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                所有作品默认开源（推荐 MIT / Apache 2.0），优秀作品上架 GitHub 与魔搭社区。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
