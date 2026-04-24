
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './UIComponents';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black text-white">
       {/* Background Effects */}
       <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/30 to-sky-500/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
       </div>

       <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-8">
             <Sparkles size={14} className="text-yellow-400" />
             <span>仅剩最后 32 个早鸟名额</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
             Ready to Heal <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400">
                The World with Code?
             </span>
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
             不要让你的才华只停留在 GitHub 的私有仓库里。加入我们，把代码变成拯救生命的工具。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button variant="gradient" size="lg" className="h-16 px-10 text-lg rounded-full shadow-[0_0_50px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_80px_-10px_rgba(139,92,246,0.7)] transition-all scale-100 hover:scale-105">
                立即报名 Join Now <ArrowRight className="ml-2" />
             </Button>
             <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white">
                查看开发文档
             </Button>
          </div>
       </div>
    </section>
  );
}
