
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { Button, cn } from './UIComponents';
import { Wish } from '../types';

interface WishesProps {
  isFullPage?: boolean;
}

const wishesData: Wish[] = [
  {
    id: '1',
    title: 'ICU 药品泵速计算器',
    difficulty: 2,
    description: '目前需要手工查表计算不同体重患者的给药速度，紧急情况下容易出错，急需一个手机端网页计算器。',
    tags: ['前端逻辑', '表单'],
    status: 'open'
  },
  {
    id: '2',
    title: '急诊分诊辅助表单',
    difficulty: 1,
    description: '一个快速录入生命体征并自动计算MEWS评分的工具，减少护士心算压力。',
    tags: ['计算工具', '数据录入'],
    status: 'open'
  },
  {
    id: '3',
    title: '儿童疫苗接种提醒',
    difficulty: 2,
    description: '根据出生日期自动生成接种计划表，并支持导出图片方便家长保存。',
    tags: ['日期处理', '生成图片'],
    status: 'open'
  },
  {
    id: '4',
    title: '抗生素使用查询助手',
    difficulty: 3,
    description: '整合常见抗生素的适应症与禁忌症，提供简单的关键词搜索界面。',
    tags: ['搜索', '数据展示'],
    status: 'claimed'
  },
  {
    id: '5',
    title: '夜班排班生成器',
    difficulty: 3,
    description: '输入人员名单和规则（如不连续夜班），自动生成排班草稿。',
    tags: ['算法', '逻辑复杂'],
    status: 'open'
  },
  {
    id: '6',
    title: '血糖监测记录本',
    difficulty: 1,
    description: '简单的记录每日三餐前后血糖值，并用颜色标记异常值。',
    tags: ['数据可视化', '图表'],
    status: 'open'
  },
];

const categories = ["全部", "急诊类", "护理类", "计算工具", "高难度", "AI应用"];

export const Wishes: React.FC<WishesProps> = ({ isFullPage = false }) => {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWishes = wishesData.filter(wish => {
    const matchesCategory = activeCategory === "全部" || wish.tags.some(tag => {
        if (activeCategory === "急诊类") return wish.title.includes("急诊") || wish.title.includes("ICU");
        if (activeCategory === "护理类") return wish.description.includes("护士") || wish.title.includes("记录");
        if (activeCategory === "计算工具") return wish.title.includes("计算") || wish.description.includes("计算");
        if (activeCategory === "高难度") return wish.difficulty === 3;
        if (activeCategory === "AI应用") return wish.description.includes("AI");
        return true;
    });
    const matchesSearch = wish.title.includes(searchQuery) || wish.description.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const displayData = isFullPage ? filteredWishes : wishesData.slice(0, 6);

  return (
    <section id="wishes" className={cn(
      "relative overflow-hidden font-sans transition-colors duration-300",
      isFullPage ? "min-h-screen pt-32 pb-24" : "py-24",
      "bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50"
    )}>
       {/* Background Ambience */}
       <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* === Header === */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-6"
               >
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                 </span>
                 LIVE MISSION BOARD
               </motion.div>
               
               <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900 dark:text-white">
                 赛题需求 <span className="text-emerald-500 animate-pulse">.Wishes</span>
               </h2>
               <p className="text-lg text-zinc-600 dark:text-zinc-400">
                 这些是来自深夜值班室的真实呼唤。领取一个任务，用代码为他们节省哪怕一分钟。
               </p>
           </div>
           
           {!isFullPage && (
              <Button variant="outline" className="hidden md:flex gap-2 group border-zinc-300 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500">
                 查看全部需求 <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
           )}
        </div>

        {/* === Tools Bar === */}
        <div className="mb-10 sticky top-20 z-30">
           <div className="p-2 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-zinc-950/50 flex flex-col md:flex-row gap-4 items-center max-w-5xl mx-auto">
              
              {/* Search or Label */}
              <div className="hidden md:flex items-center gap-2 pl-4 pr-2 font-bold text-zinc-700 dark:text-zinc-300 text-sm whitespace-nowrap">
                  <Sparkles size={16} className="text-emerald-500" />
                  智能筛选
              </div>

              {/* Category Filter */}
              <div className="flex-1 w-full overflow-x-auto no-scrollbar flex items-center gap-2 md:justify-center px-2 md:px-0">
                  {categories.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                           "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap border",
                           activeCategory === cat 
                           ? "bg-zinc-900 text-white border-zinc-900 dark:bg-emerald-500 dark:text-zinc-950 dark:border-emerald-500 shadow-lg shadow-emerald-500/20" 
                           : "bg-transparent border-transparent text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200"
                        )}
                     >
                        {cat}
                     </button>
                  ))}
              </div>
           </div>
        </div>

        {/* === Mission Grid === */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {displayData.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative h-full flex flex-col bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:border-emerald-500/30">
                 
                 <div className="p-6 flex flex-col h-full relative z-10">
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {wish.title}
                       </h3>
                       <div className="flex gap-0.5 mt-1">
                          {[1, 2, 3].map((lvl) => (
                             <div key={lvl} className={cn(
                                "w-1.5 h-4 rounded-full transform skew-x-12",
                                lvl <= wish.difficulty 
                                  ? "bg-emerald-500 dark:bg-emerald-400" 
                                  : "bg-zinc-200 dark:bg-zinc-800"
                             )}></div>
                          ))}
                       </div>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                       {wish.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
                       <div className="flex flex-wrap gap-2">
                          {wish.tags.slice(0, 2).map(tag => (
                             <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                                #{tag}
                             </span>
                          ))}
                       </div>
                       
                       <button className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                          <ArrowUpRight size={16} />
                       </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
