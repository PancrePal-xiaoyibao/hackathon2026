
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Bot, User, Dna, FileCode, Sparkles, Activity, Zap, Terminal } from 'lucide-react';
import { Button, Badge, cn } from './UIComponents';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "用代码治愈世界";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      
      {/* === Atmospheric Lighting === */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
         {/* Main Aurora */}
         <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-violet-600/15 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
         <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-sky-500/15 rounded-full blur-[120px] mix-blend-screen" />
         <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-fuchsia-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-20 left-10 animate-float text-sky-500"><Dna size={64} /></div>
        <div className="absolute top-40 right-20 animate-float-delayed text-violet-500"><FileCode size={48} /></div>
        <div className="absolute bottom-20 left-1/4 animate-float text-fuchsia-500"><Terminal size={32} /></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8 text-center lg:text-left"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-8"
              >
                 <Badge variant="gradient" className="pl-1 pr-3 py-1 animate-pulse shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)] border-violet-200/50 backdrop-blur-md">
                   <span className="bg-white text-violet-600 rounded-full px-1.5 py-0.5 text-[10px] mr-2 font-bold shadow-sm">SEASON 2024</span>
                   ✨ 联合主办：OpenMed x Partner
                </Badge>
              </motion.div>
             
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl mb-6 text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                当良医遇上 <br />
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-violet-600 blur-2xl opacity-20"></span>
                  <span className="relative bg-gradient-to-r from-sky-500 via-violet-500 to-sky-500 bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent">
                    {text}
                  </span>
                </span>
                <span className="animate-pulse text-sky-500">|</span>
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">48小时公益挑战赛</strong>。0代码基础门槛，借助 Enterprise AI 模型能力，将医疗一线的真实需求转化为可用的开源工具。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="gradient" className="h-14 px-8 text-lg rounded-full shadow-[0_10px_40px_-10px_rgba(124,58,237,0.5)] transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(124,58,237,0.6)]">
                领取参赛名额 & 算力卡
                <ArrowRight size={20} className="ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md hover:bg-white/80 dark:hover:bg-zinc-800 transition-all hover:border-zinc-300">
                <Play size={18} className="fill-current mr-2" />
                观看演示
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>官方志愿者时长</span>
              </div>
              <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                <span>三甲医院落地</span>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Floating Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative perspective-1000 hidden lg:block"
          >
             {/* 3D Container */}
            <div className="relative transform transition-all duration-500 hover:[transform:rotateY(-5deg)_rotateX(5deg)_scale(1.02)] [transform:rotateY(-12deg)_rotateX(6deg)] [transform-style:preserve-3d]">
               
               {/* Glow behind the card */}
               <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-sky-500 blur-[60px] opacity-40 -z-10 [transform:translateZ(-50px)]"></div>

               {/* Main Window */}
               <div className="relative rounded-2xl border border-white/20 dark:border-zinc-700/50 bg-zinc-900/90 backdrop-blur-xl shadow-2xl overflow-hidden [transform:translateZ(0px)]">
                  
                  {/* Window Controls */}
                  <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="ml-4 px-3 py-1 rounded bg-black/50 text-[10px] font-mono text-zinc-400 flex items-center gap-2">
                       <Zap size={10} className="text-amber-400" />
                       vibe-coding-assistant.tsx
                    </div>
                  </div>

                  {/* Code/Chat Interface */}
                  <div className="grid grid-cols-5 h-[450px]">
                     {/* Sidebar */}
                     <div className="col-span-1 border-r border-white/10 bg-black/20 p-4 space-y-4">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center mb-6"><Terminal size={18} /></div>
                        <div className="space-y-2">
                           {[1,2,3].map(i => <div key={i} className="h-2 w-full bg-white/10 rounded animate-pulse" style={{animationDelay: `${i*0.2}s`}} />)}
                        </div>
                     </div>

                     {/* Content */}
                     <div className="col-span-4 p-6 flex flex-col relative">
                        {/* Chat Bubbles */}
                        <div className="space-y-6">
                           <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center shrink-0 border border-white/10"><User size={14} /></div>
                              <div className="bg-zinc-800 rounded-2xl rounded-tl-none p-4 text-sm text-zinc-300 border border-white/5 shadow-lg max-w-[80%]">
                                 我需要一个急诊分诊表单，根据体温和心率自动计算 MEWS 评分，高危自动标红。
                              </div>
                           </div>
                           
                           <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/20"><Bot size={14} className="text-white" /></div>
                              <div className="flex flex-col gap-3 w-full">
                                 <div className="text-xs text-zinc-500 flex items-center gap-2">
                                    <Sparkles size={10} className="text-violet-400" /> Generating Component...
                                 </div>
                                 {/* Floating Code Card (Parallax) */}
                                 <div className="relative bg-zinc-950 rounded-xl border border-zinc-800 p-4 shadow-2xl [transform:translateZ(30px)] hover:[transform:translateZ(40px)] transition-transform duration-300">
                                     <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                                        <span className="text-xs font-bold text-zinc-400">Preview: TriageForm.tsx</span>
                                        <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div><span className="text-[10px] text-green-500">Live</span></div>
                                     </div>
                                     
                                     {/* Mock UI */}
                                     <div className="space-y-3">
                                        <div className="flex justify-between items-center p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                                           <span className="text-xs text-red-400">MEWS Score</span>
                                           <span className="text-sm font-bold text-red-500">5 (Critical)</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                           <div className="h-8 bg-zinc-800 rounded border border-white/5"></div>
                                           <div className="h-8 bg-zinc-800 rounded border border-white/5"></div>
                                        </div>
                                        <div className="h-8 w-full bg-zinc-800 rounded border border-white/5"></div>
                                        <div className="h-8 w-full bg-white text-black rounded font-bold text-xs flex items-center justify-center mt-2">Submit Assessment</div>
                                     </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Floating Elements (Parallax) */}
               <div className="absolute -right-8 top-20 p-4 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-700/50 shadow-xl [transform:translateZ(60px)] animate-float-delayed">
                  <Activity className="text-sky-500" size={24} />
               </div>
               <div className="absolute -left-6 bottom-32 p-3 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-700/50 shadow-xl [transform:translateZ(40px)] animate-float">
                  <div className="text-xs font-mono text-emerald-400">npm run heal</div>
               </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
