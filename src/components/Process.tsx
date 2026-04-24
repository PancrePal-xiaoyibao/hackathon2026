
import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Zap, Bot, Rocket, Terminal, Download, FileText, ChevronRight, Code2, Cpu, Globe } from 'lucide-react';
import { Button, cn } from './UIComponents';

interface ProcessProps {
  isFullPage?: boolean;
}

export const Process: React.FC<ProcessProps> = ({ isFullPage = false }) => {
  const steps = [
    {
      id: '01',
      title: '装备 Setup',
      desc: 'Clone 官方 GitHub 模板，获得标准 Next.js 开发环境。',
      detail: '我们为你准备了基于 Next.js 14 + TailwindCSS + Shadcn/ui 的全能脚手架。内置了与 AI API 通信的 SDK 封装，开箱即用。',
      code: 'git clone https://github.com/codeforhealth/starter-kit.git\ncd starter-kit\nnpm install',
      icon: <GitBranch className="h-6 w-6" />,
      color: 'sky'
    },
    {
      id: '02',
      title: '充能 Power Up',
      desc: '领取 AI 平台专属 Token 算力卡，激活 Vibe Coding 模式。',
      detail: '进入 Discord 社区 #token-claim 频道，发送 /claim 指令，即可获得价值 $500 的 API Key。在 .env 文件中配置后，你的 IDE 将获得医疗垂直领域的代码补全能力。',
      icon: <Zap className="h-6 w-6" />,
      color: 'amber'
    },
    {
      id: '03',
      title: '结对 Pairing',
      desc: '向 AI 描述医疗需求，生成核心组件，人工组装逻辑。',
      detail: '不要从零手写 div。将需求描述（例如“我需要一个急诊分诊的表单，包含血压心率录入和自动计算”）发送给 AI 助手，它会生成符合医学规范的 UI 组件代码。',
      icon: <Bot className="h-6 w-6" />,
      color: 'violet'
    },
    {
      id: '04',
      title: '发射 Launch',
      desc: 'Push 代码自动触发 Vercel 构建，提交链接完成挑战。',
      detail: '项目完成后，推送到你的 GitHub 仓库。Vercel 会自动完成构建部署。将生成的 URL 提交到官网后台，即可等待评审。',
      icon: <Rocket className="h-6 w-6" />,
      color: 'emerald'
    },
  ];

  return (
    <section id="process" className={cn(
      "relative overflow-hidden font-sans transition-colors duration-300",
      isFullPage ? "min-h-screen pt-32 pb-24" : "py-24",
      "bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50"
    )}>
       {/* === Background Atmosphere === */}
       <div className="absolute inset-0 pointer-events-none">
         {/* Gradients - Sky/Violet for Process theme */}
         <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1000px] h-[600px] bg-sky-200/30 dark:bg-sky-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-all duration-500" />
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-200/30 dark:bg-violet-900/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-all duration-500" />
         
         {/* Circuit Grid Pattern */}
         <svg className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.15] text-zinc-900 dark:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="process-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="0" y="0" width="2" height="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#process-grid)" />
         </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* === Header === */}
        <div className="text-center mb-20">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6 shadow-sm"
           >
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
             </span>
             DEVELOPER PROTOCOL
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-white"
           >
             开发者指南 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500">.Guide</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light"
           >
             消除技术恐惧。从环境配置到上线部署，全流程 AI 辅助。
           </motion.p>
        </div>

        {/* === Full Page View: Detailed Timeline === */}
        {isFullPage && (
           <div className="relative max-w-4xl mx-auto">
             {/* Central Spine */}
             <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"></div>

             <div className="space-y-16">
               {steps.map((step, index) => (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center group"
                  >
                     {/* Timeline Node */}
                     <div className="absolute left-[13px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-2 border-zinc-100 dark:border-zinc-900 bg-gradient-to-br from-sky-500 to-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)] z-10"></div>
                     
                     {/* Left Content (Title for Even, Detail for Odd) */}
                     <div className={cn("md:w-1/2 md:pr-12 pl-12 md:pl-0 flex flex-col md:items-end md:text-right", index % 2 === 1 && "md:order-last md:pl-12 md:pr-0 md:items-start md:text-left")}>
                        <div className="inline-flex items-center gap-2 mb-2">
                           <span className={cn("text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider", 
                              step.color === 'sky' ? "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300" :
                              step.color === 'amber' ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" :
                              step.color === 'violet' ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300" :
                              "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                           )}>
                              Step {step.id}
                           </span>
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{step.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
                           {step.detail}
                        </p>
                        
                        {/* Action Buttons for Step 1 */}
                        {index === 0 && (
                           <div className="flex gap-3 mt-4">
                              <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
                                 <Download size={12} /> 下载素材
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
                                 <FileText size={12} /> API 文档
                              </Button>
                           </div>
                        )}
                     </div>

                     {/* Right Content (Code/Icon for Even, Title for Odd) */}
                     <div className={cn("w-full md:w-1/2 md:pl-12 pl-12 md:pr-0", index % 2 === 1 && "md:order-first md:pr-12 md:pl-0 md:text-right")}>
                        {step.code ? (
                           <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-[#1e1e1e] shadow-2xl group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] transition-shadow">
                              <div className="flex items-center gap-1.5 px-4 py-2 bg-[#252526] border-b border-zinc-800">
                                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                                 <div className="ml-2 text-[10px] text-zinc-500 font-mono">bash</div>
                              </div>
                              <div className="p-4 overflow-x-auto">
                                 <pre className="font-mono text-xs text-zinc-300 leading-relaxed">
                                    {step.code}
                                 </pre>
                              </div>
                           </div>
                        ) : (
                           <div className={cn(
                              "relative aspect-video rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center overflow-hidden group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors",
                              index % 2 === 1 ? "md:ml-auto" : "" // Alignment fix
                           )}>
                              <div className={cn("absolute inset-0 opacity-10 bg-gradient-to-br", 
                                 step.color === 'amber' ? "from-amber-500 to-orange-500" :
                                 step.color === 'violet' ? "from-violet-500 to-fuchsia-500" :
                                 "from-emerald-500 to-teal-500"
                              )}></div>
                              
                              <div className={cn("p-4 rounded-full bg-zinc-100 dark:bg-zinc-800",
                                 step.color === 'amber' ? "text-amber-500" :
                                 step.color === 'violet' ? "text-violet-500" :
                                 "text-emerald-500"
                              )}>
                                 {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
                              </div>
                           </div>
                        )}
                     </div>
                  </motion.div>
               ))}
             </div>

             {/* Bottom CTA */}
             <div className="mt-24 text-center">
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="inline-block p-[1px] rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500"
               >
                  <Button variant="default" size="lg" className="rounded-full px-8 bg-zinc-950 text-white dark:bg-white dark:text-zinc-900 border-0">
                     Start Your Journey <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
               </motion.div>
             </div>
           </div>
        )}

        {/* === Widget View: Horizontal Flow === */}
        {!isFullPage && (
          <div className="relative">
             {/* Desktop Beam Track */}
            <div className="absolute top-12 left-0 hidden w-full lg:block">
               {/* Base Track */}
               <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-zinc-200 dark:bg-zinc-800" />
               {/* Gradient Beam */}
               <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 blur-[2px] opacity-40" />
               
               {/* Pulse Animation */}
               <motion.div
                 className="absolute top-1/2 left-0 h-0.5 w-32 -translate-y-1/2 bg-sky-500 dark:bg-white blur-sm"
                 animate={{ left: ["0%", "100%"] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               />
            </div>

            <div className="grid gap-12 lg:grid-cols-4 relative">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Mobile Connector */}
                  {index !== steps.length - 1 && (
                    <div className="absolute h-full w-px bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800 left-1/2 top-12 -translate-x-1/2 lg:hidden" />
                  )}

                  {/* Glass Orb */}
                  <div className={cn(
                    "relative flex h-24 w-24 items-center justify-center rounded-full border bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md transition-all duration-500 group-hover:scale-110 mb-8 z-10",
                    "border-zinc-200 dark:border-zinc-800 shadow-lg",
                    step.color === 'sky' && "group-hover:border-sky-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(14,165,233,0.4)]",
                    step.color === 'amber' && "group-hover:border-amber-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.4)]",
                    step.color === 'violet' && "group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.4)]",
                    step.color === 'emerald' && "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)]",
                  )}>
                     <div className={cn("transition-colors duration-300", 
                        step.color === 'sky' ? "text-sky-500 dark:text-sky-400" :
                        step.color === 'amber' ? "text-amber-500 dark:text-amber-400" :
                        step.color === 'violet' ? "text-violet-500 dark:text-violet-400" :
                        "text-emerald-500 dark:text-emerald-400"
                     )}>
                        {React.cloneElement(step.icon as React.ReactElement<any>, { size: 28 })}
                     </div>
                     
                     {/* Number Watermark */}
                     <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-bold font-mono text-zinc-500 border border-white dark:border-zinc-700">
                        {step.id}
                     </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="max-w-[220px] text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed transition-colors mx-auto">
                    {step.desc}
                  </p>
                  
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
