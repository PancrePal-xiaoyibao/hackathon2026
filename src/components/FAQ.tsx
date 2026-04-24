
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './UIComponents';

const faqs = [
  {
    question: "我完全不会写代码，可以参加吗？",
    answer: "当然可以！在 AI 时代，创意和对业务的理解比语法更重要。你可以担任团队中的 PM（产品经理）角色，负责挖掘医疗痛点、设计功能逻辑，并通过自然语言指挥 AI 完成代码编写。"
  },
  {
    question: "必须使用指定 AI 平台进行开发吗？",
    answer: "是的。本次黑客松的核心目的之一是验证 AI 模型在垂直领域的应用能力。组委会将为所有参赛队伍提供免费的 AI 算力卡。你会发现，使用它进行全栈开发，比传统手写代码快 10 倍以上。"
  },
  {
    question: "知识产权归谁所有？",
    answer: "遵循开源精神，本次活动产出的所有代码将采用 MIT 协议开源，贡献给社区。但作为创作者，你拥有该项目的署名权。"
  },
  {
    question: "我可以一个人参赛吗？",
    answer: "可以，但我们更推荐 2-4 人组队。医疗+AI 是一个跨学科领域，通常“医生/护士 + 程序员 + 设计师”的组合最容易产出大奖作品。"
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
      
      {/* Abstract Background Shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-zinc-100 dark:bg-zinc-900 rounded-full blur-3xl -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Sticky Title Block */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-xs font-bold text-zinc-500 mb-6">
               <HelpCircle size={14} /> SUPPORT
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[0.9]">
              ANY <br/>
              <span className="text-zinc-400 dark:text-zinc-600">QUESTIONS?</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              找不到答案？加入我们的 Discord 社区，那里有 24/7 在线的志愿者。
            </p>
            <button className="flex items-center gap-2 text-sm font-bold text-violet-600 dark:text-violet-400 hover:underline">
               <MessageCircle size={16} />
               Join Discord Community
            </button>
          </div>

          {/* Right: Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  openIndex === index 
                    ? "border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 shadow-lg" 
                    : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className={cn(
                    "font-bold text-lg transition-colors",
                    openIndex === index ? "text-violet-600 dark:text-violet-400" : "text-zinc-900 dark:text-zinc-100"
                  )}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zinc-400" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
