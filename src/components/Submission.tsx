'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, Shield, Check, ExternalLink, Code2, Video, BookOpen } from 'lucide-react';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

const deliverables = [
  {
    icon: Code2,
    title: '魔搭社区作品链接',
    desc: '部署在魔搭的 Skill 或 MCP，确保公开可访问，有基本 Demo。',
  },
  {
    icon: Github,
    title: '公开代码仓库地址',
    desc: '如 GitHub、Gitee 等，需含开源 License，推荐 Apache 2.0 或 MIT。',
  },
  {
    icon: FileText,
    title: '规范 README 文档',
    desc: '须包含：背景说明、医疗场景解决点、使用方法、部署步骤。',
  },
];

const repoRules = [
  '可见性：仓库必须设置为 Public（公开）。',
  '开源协议：仓库根目录必须包含 LICENSE 文件。建议使用 MIT 或 Apache 2.0 协议，以鼓励社区二次开发。',
  '代码整洁：敏感信息（如 API Keys、个人隐私数据）绝不可硬编码提交，需使用 .env 等方式隔离。',
  '医疗合规：禁止使用真实患者数据，不得做出诊断承诺。',
];

const readmeSections = [
  { num: '1', title: '项目简介与医疗场景', desc: '一句话描述、解决的痛点、目标受众' },
  { num: '2', title: '功能特性', desc: '列出 2-5 个核心特性，如 PubMed 检索、外部知识图谱联动' },
  { num: '3', title: '魔搭社区运行 / 部署指南', desc: '魔搭展示链接 + 本地运行步骤' },
  { num: '4', title: '演示与输入输出示例', desc: '建议附 1-2 张运行截图或视频链接' },
  { num: '5', title: '局限性与未来规划', desc: '医疗应用需严谨，请如实说明不足' },
  { num: '6', title: '团队与致谢', desc: '成员介绍及分工、致谢的开源项目或数据集' },
];

const bonus = [
  {
    icon: Shield,
    title: '医疗合规性声明',
    desc: '明确说明该工具的输出不作为最终医疗诊断依据。',
  },
  {
    icon: BookOpen,
    title: '评测数据报告',
    desc: '提供该 Skill / MCP 在特定测试集上的准确率或可用性评估。',
  },
  {
    icon: Video,
    title: '演示视频',
    desc: '提供一段 1 — 3 分钟的视频，展示完整工作流。',
  },
];

export const Submission: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden font-sans transition-colors duration-300',
        isFullPage ? 'min-h-screen pt-32 pb-24' : 'py-24',
        'bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50',
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-emerald-200/30 dark:bg-emerald-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-6"
          >
            SUBMISSION GUIDE
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-white">
            作品提交规范 <span className="text-emerald-500">.Submit</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            参赛者在魔搭活动页填写表单时，必须包含以下三个核心交付物。
          </p>
        </div>

        {/* Deliverables */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 mb-3">
                <d.icon size={20} />
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">{d.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Submission entries */}
        <div className="grid md:grid-cols-2 gap-4 mb-20 max-w-3xl mx-auto">
          <a
            href={SITE.submissionUrls.skill}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-500/40 transition-colors"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">Skill</div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100">提交 Skill</div>
            </div>
            <ExternalLink size={18} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
          </a>
          <a
            href={SITE.submissionUrls.mcp}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-500/40 transition-colors"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">MCP</div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100">提交 MCP</div>
            </div>
            <ExternalLink size={18} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
          </a>
        </div>

        {/* Repo rules + README sections */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
              <Github size={20} /> 仓库设置规范
            </h3>
            <ul className="space-y-3">
              {repoRules.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Check size={14} className="text-emerald-500 mt-1 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
              <FileText size={20} /> README.md 模板
            </h3>
            <p className="text-xs text-zinc-500 mb-4">
              README 是评委了解作品的第一窗口，必须包含以下结构：
            </p>
            <ol className="space-y-2">
              {readmeSections.map((s) => (
                <li key={s.num} className="flex items-start gap-3 text-sm">
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 shrink-0 w-5">
                    {s.num}.
                  </span>
                  <div>
                    <div className="font-medium text-zinc-900 dark:text-zinc-100">{s.title}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Bonus */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
              Expert Bonus · 专家评委额外加分项
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bonus.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10"
              >
                <div className="inline-flex p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-3">
                  <b.icon size={20} />
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">{b.title}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
