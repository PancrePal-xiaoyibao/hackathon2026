'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FastGPTColor from '@lobehub/icons/es/FastGPT/components/Color';
import ModelScopeColor from '@lobehub/icons/es/ModelScope/components/Color';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

interface Partner {
  name: string;
  role: string;
  desc: string;
  highlights: string[];
  badge: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoComponent?: React.ReactNode;
  border: string;
  link?: string;
}

const partners: Partner[] = [
  {
    name: '小X宝开源医疗社区',
    role: '主办方',
    desc: '专注于医疗领域的开源公益社区，致力于用开源协作的方式连接临床、技术与开发者，让 AI 真正服务于真实医疗场景。',
    highlights: ['开源公益', '医疗场景', '社区驱动'],
    badge: 'HOST',
    logo: '/xiao-x-bao.png',
    logoWidth: 1691,
    logoHeight: 1692,
    border: 'border-rose-200 dark:border-rose-900/40',
  },
  {
    name: '魔搭 ModelScope',
    role: '联合主办 · 赛事平台',
    desc: '阿里达摩院联合 CCF 开源发展委员会推出的中国最大 AI 模型开源社区，已汇集 12 万+ 开源模型与 5500+ MCP 服务，覆盖 200+ 国家和地区的开发者。本次黑客松所有作品在此提交、部署与展示。',
    highlights: ['12 万+ 模型', '5500+ MCP 服务', '提交 / 部署平台'],
    badge: 'CO-HOST',
    logoComponent: <ModelScopeColor size={48} />,
    border: 'border-sky-200 dark:border-sky-900/40',
    link: 'https://modelscope.cn/',
  },
  {
    name: 'KnowS',
    role: '合作方 · 医学循证 AI',
    desc: '由上海零假设打造的国内首个循证医学 AI 智能体引擎，整合 4000 万+ 全球权威医学文献（PubMed、中文核心等），24 小时实时更新，自研幻觉抑制算法实现 92%+ 结论准确率，一键溯源。为参赛者构建医疗作品时提供权威医学知识底座。',
    highlights: ['4000 万+ 医学文献', '92%+ 准确率 · 可溯源', '循证医学 AI'],
    badge: 'PARTNER',
    logo: '/sponsor-knows.png',
    logoWidth: 336,
    logoHeight: 354,
    border: 'border-violet-200 dark:border-violet-900/40',
    link: 'https://www.medknows.com/',
  },
  {
    name: '阶跃星辰 StepFun',
    role: '大模型赞助',
    desc: '国内领先的多模态大模型公司，Step 系列覆盖语言、语音、视觉与 GUI 模型。Step 3.7 Flash 面向生产级 Agent 工作流，原生兼容 MCP / Skills 协议与主流 Agent 框架。本次黑客松提供大模型 API 额度，支持作品智能能力构建。',
    highlights: ['多模态大模型', '原生 MCP / Skills', 'API 额度赞助'],
    badge: 'LLM SPONSOR',
    logo: '/sponsor-stepfun.png',
    logoWidth: 889,
    logoHeight: 339,
    border: 'border-emerald-200 dark:border-emerald-900/40',
    link: 'https://platform.stepfun.com/',
  },
  {
    name: 'Sealos（FastGPT）',
    role: '合作方 · RAG 知识库平台',
    desc: '开源 AI 知识库构建平台，基于 LLM 提供开箱即用的数据处理、RAG 检索增强与可视化工作流编排能力。支持多模型接入、文档/网页知识导入与 API 集成，帮助参赛者快速构建具备领域知识的医疗 AI 应用。',
    highlights: ['RAG 知识库', '可视化工作流', '开源 · 可私有化部署'],
    badge: 'PARTNER',
    logoComponent: <FastGPTColor size={48} />,
    border: 'border-blue-200 dark:border-blue-900/40',
    link: 'https://tryfastgpt.ai',
  },
];

export const Partners: React.FC = () => {
  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-32 pb-24 relative overflow-hidden font-sans text-zinc-900 dark:text-zinc-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-200/40 dark:bg-indigo-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-sky-200/40 dark:bg-sky-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6 shadow-sm"
          >
            ECOSYSTEM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-zinc-900 dark:text-white"
          >
            主办与合作{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500">
              Matrix
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light"
          >
            社区驱动 · 平台支持 · 大模型赋能。汇聚顶尖技术力量，构建数字医疗生命体。
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'group relative p-8 rounded-3xl border bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1',
                p.border,
              )}
            >
              <div className="flex items-center mb-4 h-14">
                {p.logoComponent ? (
                  p.logoComponent
                ) : (
                  <Image
                    src={p.logo!}
                    alt={`${p.name} logo`}
                    width={p.logoWidth!}
                    height={p.logoHeight!}
                    className="h-12 w-auto object-contain"
                    priority
                  />
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {p.badge}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{p.role}</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{p.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/40"
                  >
                    {h}
                  </span>
                ))}
              </div>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  访问官网 →
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/20">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            本次黑客松由 <strong className="text-zinc-900 dark:text-zinc-100">{SITE.hosts.main}</strong> 发起，
            联合 <strong className="text-zinc-900 dark:text-zinc-100">{SITE.hosts.coHost}</strong> 共同主办，
            合作方 <strong className="text-zinc-900 dark:text-zinc-100">{SITE.hosts.partner}</strong>、
            <strong className="text-zinc-900 dark:text-zinc-100">{SITE.hosts.ragPartner}</strong>，
            <strong className="text-zinc-900 dark:text-zinc-100">{SITE.hosts.llmSponsor}</strong> 提供大模型 API 额度支持。
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-4 font-mono">
            项目默认开源 · 禁真实患者数据 · 不做诊断承诺
          </p>
        </div>
      </div>
    </section>
  );
};
