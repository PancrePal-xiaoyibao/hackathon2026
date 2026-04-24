
import React from 'react';
import { motion } from 'framer-motion';
import { CodeXml, Award, Heart, ArrowUpRight, Zap, GitCommitVertical } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, cn } from './UIComponents';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:flex md:justify-between md:items-end">
           <div className="max-w-2xl">
             <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-4">
               这不仅仅是一场比赛 <br/>
               <span className="text-zinc-400">This is where code saves lives.</span>
             </h2>
             <p className="text-lg text-zinc-600 dark:text-zinc-400">
               我们移除了所有技术门槛，让医疗智慧直接转化为数字生产力。
             </p>
           </div>
           <div className="hidden md:block">
              <div className="flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400">
                 Explore the Mission <ArrowUpRight size={16} />
              </div>
           </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[500px]">
          
          {/* Feature 1: The Hero Block (Large Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="p-8 h-full flex flex-col relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                   <CodeXml size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">无需编程基础，AI 做你的 CTO</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-md">
                   你懂业务逻辑，AI 就是你的程序员。我们集成了最新的 Vibe Coding 模式，你只需描述医疗痛点（如：“做一个能自动换算药剂量的计算器”），代码将自动生成并部署。
                </p>
                
                {/* Visual Representation */}
                <div className="mt-auto pt-8 flex items-end justify-center md:justify-start overflow-hidden">
                   <div className="w-full max-w-sm bg-zinc-950 rounded-t-xl border border-zinc-800 shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500 p-4">
                      <div className="flex gap-2 mb-3">
                         <div className="w-2 h-2 rounded-full bg-red-500"/>
                         <div className="w-2 h-2 rounded-full bg-amber-500"/>
                         <div className="w-2 h-2 rounded-full bg-green-500"/>
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

          {/* Feature 2: Certification (Top Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-violet-500/30 transition-colors"
          >
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={80} />
             </div>
             <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4">
                   <Award size={20} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">官方志愿者认证</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                   完赛即可获得社区盖章的志愿服务时长证明，助力学业与职业背景提升。
                </p>
             </div>
          </motion.div>

          {/* Feature 3: Real Impact (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-red-500/30 transition-colors"
          >
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-red-500">
                <Heart size={80} />
             </div>
             <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                   <Zap size={20} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">拒绝 Demo，只要 Real</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                   你的作品将直接部署在合作医院的内网环境，真正服务于一线医护人员。
                </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
