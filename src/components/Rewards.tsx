
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Crown, Keyboard, FileBadge, Github, Gem, ThumbsUp, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button, cn } from './UIComponents';

interface RewardsProps {
  isFullPage?: boolean;
}

export const Rewards: React.FC<RewardsProps> = ({ isFullPage = false }) => {
  return (
    <section id="prizes" className={cn(
      "relative overflow-hidden font-sans transition-colors duration-300",
      isFullPage ? "min-h-screen pt-32 pb-24" : "py-24",
      "bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50"
    )}>
      
      {/* === Background Atmosphere (Adapted from Partners) === */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Gradients - Amber/Orange for Rewards theme */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-200/30 dark:bg-amber-900/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-all duration-500" />
         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-200/30 dark:bg-orange-900/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-all duration-500" />
         
         {/* Circuit Grid Pattern */}
         <svg className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.15] text-zinc-900 dark:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="reward-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="0" y="0" width="2" height="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#reward-grid)" />
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
             </span>
             PRIZE POOL MATRIX
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-zinc-900 dark:text-white"
           >
             荣耀加冕 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">Rewards</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light"
           >
             既有顶级荣耀，也有阳光普照。我们尊重每一行有温度的代码。
           </motion.p>
        </div>

        {/* === Tier 1: The Throne (Top Prize) === */}
        <div className="relative mb-24">
           {/* Connecting Beam */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-amber-500/30 dark:via-amber-500/50 to-transparent blur-[1px]"></div>
           
           <div className="flex justify-center">
              <TopPrizeNode />
           </div>
        </div>

        {/* === Tier 2: Universal Loot (Secondary Prizes) === */}
        <div className={cn("relative", isFullPage ? "mb-32" : "mb-12")}>
           <div className="text-center mb-12">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">Universal Loot Box</span>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: FileBadge, title: "志愿时长证明", desc: "官方公章认证，支持学信网查询", color: "sky" },
                { icon: Zap, title: "AI 平台会员", desc: "含 1000 credits 算力包", color: "violet" },
                { icon: Github, title: "开源贡献收录", desc: "进入 Open Source Hall of Fame", color: "zinc" },
                { icon: Gem, title: "纪念电子徽章", desc: "专属设计 NFT 极客身份", color: "pink" }
              ].map((item, i) => (
                <RewardCapsule key={i} {...item} index={i} />
              ))}
           </div>
        </div>

        {/* === Tier 3: Judging Criteria (Full Page Only) === */}
        {isFullPage && (
          <div className="mb-24 relative">
             <div className="text-center mb-12">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">Evaluation Matrix</span>
             </div>

             <div className="relative p-8 sm:p-12 border-y border-zinc-200 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent opacity-50"></div>

                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    <CriteriaNode 
                      icon={ThumbsUp} 
                      title="实用性 Utility" 
                      percent="40%" 
                      items={["需求切入点准确", "解决方案可落地", "医护操作便捷"]} 
                      index={0}
                    />
                    <CriteriaNode 
                      icon={Lightbulb} 
                      title="创新性 Innovation" 
                      percent="30%" 
                      items={["AI 技术巧妙应用", "交互模式创新", "跨学科视角融合"]} 
                      index={1}
                    />
                    <CriteriaNode 
                      icon={CheckCircle2} 
                      title="完整度 Completeness" 
                      percent="30%" 
                      items={["核心流程跑通", "UI/UX 设计美观", "代码规范与文档"]} 
                      index={2}
                    />
                </div>
             </div>
          </div>
        )}

        {/* === Footer CTA (Widget Mode) === */}
        {!isFullPage && (
           <div className="text-center pt-8">
              <Button variant="ghost" className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 group">
                 查看详细评审标准 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
           </div>
        )}

      </div>
    </section>
  );
};

// --- Sub-Components ---

// 1. Top Prize Node (The Throne Redesigned)
const TopPrizeNode: React.FC = () => {
   return (
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="relative group z-10 w-full max-w-2xl"
      >
         {/* Background Glow */}
         <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
         
         <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
             
             {/* Decorative Corner Lines */}
             <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-500/20 rounded-tl-3xl"></div>
             <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber-500/20 rounded-tr-3xl"></div>
             <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-amber-500/20 rounded-bl-3xl"></div>
             <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-500/20 rounded-br-3xl"></div>

             {/* Trophy Icon */}
             <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 shadow-lg shadow-amber-500/20">
                <Trophy size={48} className="text-amber-600 dark:text-amber-400 drop-shadow-sm" />
                <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-pulse"></div>
             </div>

             <div className="space-y-2 mb-8">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                   TOP 1 最佳落地应用
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white">
                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-300 dark:to-orange-300">
                      顶级荣耀
                   </span>
                </h3>
             </div>

             {/* Prize List as Tech Specs */}
             <div className="grid gap-4 text-left max-w-lg mx-auto bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800/50">
                 <PrizeItem icon={Zap} text="AI 平台年度企业版会员" sub="价值 ¥5,000，解锁无限算力" />
                 <PrizeItem icon={Crown} text="社区荣誉奖杯 + 证书" sub="三甲医院官方盖章认证" />
                 <PrizeItem icon={Keyboard} text="极客外设大礼包" sub="机械键盘 / 鼠标 / 周边" />
             </div>
             
             <div className="mt-6 text-xs text-zinc-400 font-mono">
                * 优秀项目直接部署至合作医院
             </div>
         </div>
      </motion.div>
   );
};

const PrizeItem = ({ icon: Icon, text, sub }: { icon: any, text: string, sub: string }) => (
   <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-white dark:hover:bg-zinc-900 transition-colors">
      <div className="mt-1 p-2 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
         <Icon size={16} />
      </div>
      <div>
         <div className="font-bold text-zinc-800 dark:text-zinc-200">{text}</div>
         <div className="text-xs text-zinc-500 dark:text-zinc-500">{sub}</div>
      </div>
   </div>
);

// 2. Reward Capsule (Secondary Prizes)
const RewardCapsule: React.FC<{ icon: any, title: string, desc: string, color: string, index: number }> = ({ icon: Icon, title, desc, color, index }) => {
   const glowColor = {
      violet: 'group-hover:border-violet-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]',
      sky: 'group-hover:border-sky-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.3)]',
      zinc: 'group-hover:border-zinc-400/50 group-hover:shadow-[0_0_20px_-5px_rgba(161,161,170,0.3)]',
      pink: 'group-hover:border-pink-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(236,72,153,0.3)]',
   }[color] || 'group-hover:border-zinc-400/50';

   const textColor = {
      violet: 'text-violet-600 dark:text-violet-400',
      sky: 'text-sky-600 dark:text-sky-400',
      zinc: 'text-zinc-600 dark:text-zinc-400',
      pink: 'text-pink-600 dark:text-pink-400',
   }[color];

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.1 * index }}
         className={cn(
            "group relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-white/80 dark:hover:bg-zinc-900/80 hover:-translate-y-1 shadow-sm",
            glowColor
         )}
      >
         <div className={cn("mb-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 transition-colors group-hover:scale-110 duration-300", textColor)}>
            <Icon size={24} />
         </div>
         <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-2">{title}</h4>
         <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">{desc}</p>
      </motion.div>
   );
};

// 3. Criteria Node (Judging)
const CriteriaNode: React.FC<{ icon: any, title: string, percent: string, items: string[], index: number }> = ({ icon: Icon, title, percent, items, index }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.2 + (0.1 * index) }}
         className="flex flex-col gap-4 group"
      >
         <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-2">
            <div className="flex items-center gap-3">
               <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
                  <Icon size={18} />
               </div>
               <span className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {title}
               </span>
            </div>
            <span className="font-mono text-2xl font-bold text-zinc-200 dark:text-zinc-800 group-hover:text-violet-200 dark:group-hover:text-violet-900 transition-colors">
               {percent}
            </span>
         </div>
         
         <ul className="space-y-3">
            {items.map((item, i) => (
               <li key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                  {item}
               </li>
            ))}
         </ul>
      </motion.div>
   );
};
