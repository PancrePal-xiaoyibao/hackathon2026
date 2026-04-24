
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Circle, Square, Hexagon, Triangle, Box, Terminal } from 'lucide-react';
import { Button, cn } from './UIComponents';

// --- Types & Data ---
type Tier = 'host' | 'strategic' | 'tech' | 'community';

interface Partner {
  id: string;
  name: string;
  tier: Tier;
  color: string; // Tailwind color name for gradients/glows
  desc?: string;
}

const PARTNERS: Partner[] = [
  // Hosts
  { id: '1', name: 'OpenMed', tier: 'host', color: 'from-sky-400 to-blue-600' },
  { id: '2', name: 'DevGuild', tier: 'host', color: 'from-violet-400 to-fuchsia-600' },
  
  // Strategic
  { id: '3', name: 'AI Studio', tier: 'strategic', color: 'violet', desc: 'Core Compute' },
  { id: '4', name: 'CloudScale', tier: 'strategic', color: 'sky', desc: 'Infrastructure' },
  { id: '5', name: 'MediData', tier: 'strategic', color: 'emerald', desc: 'Dataset Provider' },
  
  // Tech
  { id: '6', name: 'Vercel', tier: 'tech', color: 'white' },
  { id: '7', name: 'Supabase', tier: 'tech', color: 'emerald' },
  { id: '8', name: 'Auth0', tier: 'tech', color: 'orange' },
  { id: '9', name: 'LangChain', tier: 'tech', color: 'yellow' },
  { id: '10', name: 'HuggingFace', tier: 'tech', color: 'yellow' },
  { id: '11', name: 'Next.js', tier: 'tech', color: 'white' },
  { id: '12', name: 'Tailwind', tier: 'tech', color: 'sky' },
  { id: '13', name: 'ShadcnUI', tier: 'tech', color: 'zinc' },
  { id: '14', name: 'Prisma', tier: 'tech', color: 'indigo' },
  { id: '15', name: 'Resend', tier: 'tech', color: 'white' },

  // Community
  { id: '16', name: 'GitHub', tier: 'community', color: 'zinc' },
  { id: '17', name: 'Dribbble', tier: 'community', color: 'pink' },
  { id: '18', name: 'IndieHacker', tier: 'community', color: 'indigo' },
  { id: '19', name: 'ProductHunt', tier: 'community', color: 'orange' },
  { id: '20', name: 'Dev.to', tier: 'community', color: 'zinc' },
  { id: '21', name: 'Discord', tier: 'community', color: 'indigo' },
  { id: '22', name: 'X.com', tier: 'community', color: 'zinc' },
];

export const Partners: React.FC = () => {
  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-32 pb-24 relative overflow-hidden font-sans text-zinc-900 dark:text-zinc-50 selection:bg-violet-500/30 transition-colors duration-300">
      
      {/* === Background Atmosphere === */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Deep Space Gradients */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-200/40 dark:bg-indigo-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-all duration-500" />
         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-sky-200/40 dark:bg-sky-900/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-all duration-500" />
         
         {/* Circuit Grid Pattern */}
         <svg className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.15] text-zinc-900 dark:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <rect x="0" y="0" width="2" height="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
         </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* === Header === */}
        <div className="text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6 shadow-sm"
           >
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
             </span>
             ECOSYSTEM MATRIX
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-zinc-900 dark:text-white"
           >
             生态连接 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500">Matrix</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light"
           >
             以代码为神经，以数据为血液。汇聚顶尖技术力量，构建数字医疗生命体。
           </motion.p>
        </div>

        {/* === Tier 0: Core Energy (Hosts) === */}
        <div className="relative mb-32">
           {/* Connecting Beam */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-violet-500/20 dark:via-violet-500/50 to-transparent blur-[1px]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-zinc-900/10 dark:via-white/50 to-transparent"></div>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
              <HostNode name="OpenMed" gradient="from-sky-400 to-blue-600" delay={0.3} />
              
              {/* Central Node (Symbolic) */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                 <div className="absolute inset-0 bg-violet-500 blur-xl opacity-30 dark:opacity-50 animate-pulse"></div>
                 <Hexagon className="relative z-10 text-zinc-900 dark:text-white fill-white dark:fill-zinc-950 stroke-[1.5]" size={32} />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-zinc-900 dark:bg-white rounded-full shadow-[0_0_10px_currentColor]"></div>
                 </div>
              </div>

              <HostNode name="DevGuild" gradient="from-violet-400 to-fuchsia-600" align="right" delay={0.4} />
           </div>
        </div>

        {/* === Tier 1: Strategic Hubs === */}
        <div className="mb-32 relative">
           {/* Vertical Data Lines */}
           <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/20 dark:to-violet-500/30"></div>
           
           <div className="text-center mb-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-600">Strategic Hubs</span>
           </div>

           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {PARTNERS.filter(p => p.tier === 'strategic').map((p, i) => (
                 <StrategicCapsule key={p.id} partner={p} index={i} />
              ))}
           </div>
        </div>

        {/* === Tier 2: Tech Infrastructure === */}
        <div className="mb-32 relative">
           <div className="text-center mb-12">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-600">Tech Infrastructure</span>
           </div>

           <div className="relative p-8 border-y border-zinc-200 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-sm">
              {/* Decorative horizontal lines */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent opacity-50"></div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 text-center md:text-left">
                 {PARTNERS.filter(p => p.tier === 'tech').map((p, i) => (
                    <TechNode key={p.id} partner={p} index={i} />
                 ))}
              </div>
           </div>
        </div>

        {/* === Tier 3: Community Cloud === */}
        <div className="mb-24">
           <div className="text-center mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-700">Community Nodes</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto opacity-80 dark:opacity-70">
              {PARTNERS.filter(p => p.tier === 'community').map((p, i) => (
                 <CommunityNode key={p.id} partner={p} index={i} />
              ))}
           </div>
        </div>

        {/* === Footer CTA === */}
        <div className="text-center pt-10 border-t border-dashed border-zinc-200 dark:border-zinc-900">
           <Button variant="ghost" className="text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 group">
              Become a Node <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
           </Button>
        </div>

      </div>
    </section>
  );
};

// --- Sub-Components ---

// 1. Host Node: Big, Gradient Text, Energy Bar
const HostNode: React.FC<{ name: string; gradient: string; align?: 'left' | 'right'; delay: number }> = ({ name, gradient, align = 'left', delay }) => {
   return (
      <motion.div 
         initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ delay, duration: 0.8 }}
         className="relative group cursor-default"
      >
         <div className={cn(
            "text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r transition-all duration-500",
            gradient
         )}>
            {name}
         </div>
         {/* Energy Bar */}
         <div className={cn(
            "h-1 mt-2 rounded-full bg-gradient-to-r opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_15px_currentColor] transition-all duration-500",
            gradient
         )}></div>
         {/* Reflection blur */}
         <div className={cn(
            "absolute -inset-4 opacity-0 group-hover:opacity-20 blur-xl bg-gradient-to-r transition-opacity duration-500 -z-10",
            gradient
         )}></div>
      </motion.div>
   );
};

// 2. Strategic Capsule: Glassmorphism, Glitch Effect
const StrategicCapsule: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => {
   // Map simple color names to Tailwind utility classes
   const glowColor = {
      violet: 'group-hover:border-violet-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]',
      sky: 'group-hover:border-sky-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.3)]',
      emerald: 'group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]',
   }[partner.color] || 'group-hover:border-zinc-400/50';

   const textColor = {
      violet: 'group-hover:text-violet-600 dark:group-hover:text-violet-300',
      sky: 'group-hover:text-sky-600 dark:group-hover:text-sky-300',
      emerald: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-300',
   }[partner.color] || 'group-hover:text-zinc-900 dark:group-hover:text-white';

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.1 * index }}
         className={cn(
            "group relative px-8 py-6 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur-sm flex items-center justify-between transition-all duration-300 overflow-hidden cursor-pointer hover:bg-white/80 dark:hover:bg-zinc-900/80 shadow-sm dark:shadow-none",
            glowColor
         )}
      >
         {/* Scanning line animation */}
         <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-zinc-900/5 dark:via-white/5 to-transparent skew-x-12 group-hover:animate-[shimmer_1s_infinite]"></div>

         <div className="flex flex-col">
            <span className={cn("text-lg font-bold text-zinc-700 dark:text-zinc-300 transition-colors duration-200", textColor)}>
               {partner.name}
            </span>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-600 font-mono uppercase tracking-wider group-hover:text-zinc-600 dark:group-hover:text-zinc-500">
               {partner.desc}
            </span>
         </div>

         {/* Status Light */}
         <div className="flex items-center gap-1">
             <div className={cn("w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors duration-200", textColor.replace('text', 'bg'))}></div>
             <div className={cn("w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors duration-200 delay-75", textColor.replace('text', 'bg'))}></div>
             <div className={cn("w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors duration-200 delay-150", textColor.replace('text', 'bg'))}></div>
         </div>
      </motion.div>
   );
};

// 3. Tech Node: Grid, Mono, Connector Lines
const TechNode: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => {
   // Pseudo-random symbols
   const Icon = [Square, Circle, Triangle, Box, Terminal][index % 5];
   
   return (
      <div className="group flex items-center gap-3 relative cursor-crosshair">
         {/* Connector Line (Vertical, Faint) */}
         <div className="absolute -top-6 left-[7px] w-px h-6 bg-zinc-300 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>

         <div className="relative">
            <div className="w-3.5 h-3.5 flex items-center justify-center rounded-sm border border-zinc-300 dark:border-zinc-700 text-zinc-400 dark:text-zinc-600 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:border-sky-500/50 transition-colors">
               <Icon size={8} fill="currentColor" />
            </div>
         </div>
         
         <span className="font-mono text-sm text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-200">
            {partner.name}
         </span>
      </div>
   );
};

// 4. Community Node: Floating, Minimal
const CommunityNode: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => {
   return (
      <div className="px-3 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer group">
         <span className="text-sm text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
            {partner.name}
         </span>
         {/* Dot reveal */}
         <span className="inline-block w-1 h-1 rounded-full bg-violet-500 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></span>
      </div>
   );
}
