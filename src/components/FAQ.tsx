'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';

const faqs = [
  {
    question: '谁可以参加？',
    answer: '面向全球开发者、医疗 AI 实践者与开源社区成员，不限学历、不限职业，个人或团队均可参加。',
  },
  {
    question: '可以用什么技术栈？',
    answer: '不限技术栈，但作品形式须为 MCP 工具或 Agent Skill，且须能在魔搭社区部署为 Model 或 Space。',
  },
  {
    question: '提交后会审核吗？',
    answer: '提交后只要不是反动信息被安全拦截，都会发布在社区里。赛后统一整理为赛果合集进行宣传。',
  },
  {
    question: '选题可以重复吗？',
    answer: '建议在开发前于群内或活动页面登记选题，避免重复。不同角度的实现不受限制。',
  },
  {
    question: 'WAIC 门票如何获得？',
    answer:
      '门票分三个阶段提前发放：6/24 评选「最佳选题潜力奖」、7/1 评选「最佳 MVP 原型奖」、7/8 评选「社区影响力奖」，每阶段 1 张。已获票团队不再参与后续门票评选，门票顺延至下一支符合条件的队伍。',
  },
  {
    question: '奖励如何发放？',
    answer:
      'WAIC 门票在阶段奖公布时同步发放，以便提前安排行程。云资源或 API 额度将在 7 月 15 日结果公示后统一发放。',
  },
  {
    question: '如何加入交流群？',
    answer: '报名成功后将获得官方微信群入口，也可扫描宣传海报上的二维码加入。',
  },
  {
    question: '历史项目可以参赛吗？',
    answer: '允许历史项目参赛，但必须披露赛前已有部分，评审重点看比赛期间新增贡献。每人只能加入一队；同一核心成员、同一代码库的报名视为同一参赛主体。',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-zinc-100 dark:bg-zinc-900 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-xs font-bold text-zinc-500 mb-6">
              <HelpCircle size={14} /> SUPPORT
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[0.9]">
              ANY <br />
              <span className="text-zinc-400 dark:text-zinc-600">QUESTIONS?</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
              更多疑问请加入官方微信群，或前往魔搭社区活动页面留言。
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              赛事详情页采用图文形式，方便实时调整文案。主视觉及 Banner 已完成定稿。
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  'border rounded-2xl overflow-hidden transition-all duration-300',
                  openIndex === index
                    ? 'border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 shadow-lg'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700',
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span
                    className={cn(
                      'font-bold text-base sm:text-lg transition-colors',
                      openIndex === index
                        ? 'text-violet-600 dark:text-violet-400'
                        : 'text-zinc-900 dark:text-zinc-100',
                    )}
                  >
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-violet-600 dark:text-violet-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zinc-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
