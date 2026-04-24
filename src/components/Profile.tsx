
import React, { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import { 
  Button, 
  Input, 
  Label, 
  Textarea, 
  Avatar, 
  AvatarFallback, 
  AvatarImage, 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger, 
  cn 
} from "./UIComponents";
import { 
  Download, 
  ScanLine, 
  Binary, 
  Stethoscope, 
  Briefcase, 
  Check, 
  Terminal, 
  Activity, 
  Sparkles,
  Lock,
  Cpu
} from "lucide-react";

// --- Toast Notification Helper ---
const useToast = () => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');
  
  const toast = (message: string) => {
    setMsg(message);
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };
  
  return { show, msg, toast };
};

export const Profile: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const { show, msg, toast } = useToast();

  // State
  const [user, setUser] = useState({
    name: "Dr. Strange",
    role: "Medical Pro" as "Medical Pro" | "Developer" | "Designer" | "Product Mgr",
    id: "89757",
    wechat: "magic_doc_88",
    hospital: "纽约长老公立医院",
    tags: ["神经外科", "Python", "RAG"],
    bio: "寻找前端队友！我有完整的脑机接口临床数据，缺人写界面。",
  });

  // Handle Export
  const handleExport = useCallback(async () => {
    if (cardRef.current === null) return;
    
    setIsExporting(true);
    // Temporarily remove tilt for flat export
    if (wrapperRef.current) {
        wrapperRef.current.style.transform = 'none';
    }

    try {
      // Use a small delay to ensure styles are stable
      await new Promise(resolve => setTimeout(resolve, 100));
      const dataUrl = await toPng(cardRef.current, { 
        cacheBust: true, 
        pixelRatio: 3, // High resolution
        backgroundColor: 'transparent'
      });
      
      const link = document.createElement("a");
      link.download = `CodeForHealth_Pass_${user.id}.png`;
      link.href = dataUrl;
      link.click();
      toast("工牌已保存！快去晒朋友圈吧 📸");
    } catch (err) {
      console.error(err);
      toast("保存失败，请重试");
    } finally {
      setIsExporting(false);
      // Transform will be re-applied on next mouse move
    }
  }, [user.id, toast]);

  // 3D Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isExporting || !wrapperRef.current) return;
    
    const card = wrapperRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (limit max degrees)
    const rotateX = ((y - centerY) / centerY) * -8; 
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Role Config
  const roles = [
    { id: 'Medical Pro', icon: Stethoscope, color: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'shadow-emerald-500/20' },
    { id: 'Developer', icon: Terminal, color: 'text-sky-400', border: 'border-sky-500/30', glow: 'shadow-sky-500/20' },
    { id: 'Designer', icon: Sparkles, color: 'text-pink-400', border: 'border-pink-500/30', glow: 'shadow-pink-500/20' },
    { id: 'Product Mgr', icon: Briefcase, color: 'text-amber-400', border: 'border-amber-500/30', glow: 'shadow-amber-500/20' },
  ];

  const currentRoleConfig = roles.find(r => r.id === user.role) || roles[0];

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full flex justify-center p-4 lg:p-12 overflow-hidden">
      
      {/* Custom Animations */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Toast */}
      {show && (
        <div className="fixed top-24 right-6 z-50 bg-zinc-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-zinc-800 animate-in slide-in-from-top-2 flex items-center gap-2">
           <Check size={16} className="text-emerald-400" />
           {msg}
        </div>
      )}

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* === LEFT COLUMN: The Digital Asset === */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24 perspective-1000">
          
          <div 
            ref={wrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group transition-transform duration-200 ease-out preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
          >
             {/* Glow behind card */}
             <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-[26px] blur-md opacity-40 group-hover:opacity-60 transition duration-500 -z-10 translate-z-[-20px]"></div>
             
             {/* === THE CARD === */}
             <div 
               ref={cardRef}
               className="relative w-full aspect-[4/5] sm:aspect-[3/4.5] bg-zinc-950 rounded-[24px] overflow-hidden flex flex-col shadow-2xl border border-white/10"
             >
                {/* 1. Card Background & Texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                
                {/* Decoration Circles */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full"></div>
                <div className="absolute top-1/3 -left-20 w-40 h-40 bg-sky-600/10 blur-[60px] rounded-full"></div>

                {/* 2. Top Section: Identity */}
                <div className="relative z-10 flex-1 flex flex-col items-center pt-10 px-8 text-center">
                  
                  {/* Event Logo */}
                  <div className="flex items-center gap-2 mb-8 opacity-90">
                    <div className="w-5 h-5 rounded-[4px] bg-white text-zinc-950 flex items-center justify-center">
                      <Binary size={12} strokeWidth={3} />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-white/90 uppercase font-semibold">Code for Health</span>
                  </div>

                  {/* Avatar with Animated Ring */}
                  <div className="relative w-28 h-28 mb-6">
                    {/* Role Specific Glow */}
                    <div className={cn("absolute inset-0 rounded-full blur-xl opacity-40", currentRoleConfig.color.replace('text-', 'bg-'))}></div>
                    
                    <div className="absolute inset-0 rounded-full border border-white/10"></div>
                    {/* Spinning ring */}
                    <div className={cn(
                        "absolute -inset-3 rounded-full border border-t-transparent border-l-transparent animate-[spin_8s_linear_infinite]",
                        currentRoleConfig.color.replace('text-', 'border-')
                    )}></div>
                    
                    <Avatar className="w-full h-full rounded-full border-4 border-zinc-950 shadow-2xl bg-zinc-900">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                      <AvatarFallback className="bg-zinc-800 text-zinc-400 text-2xl">{user.name[0]}</AvatarFallback>
                    </Avatar>

                    {/* Role Badge */}
                    <div className={cn(
                      "absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full border shadow-lg flex items-center gap-1.5 whitespace-nowrap backdrop-blur-xl bg-zinc-950/90",
                      currentRoleConfig.border
                    )}>
                      {React.createElement(currentRoleConfig.icon, { size: 12, className: currentRoleConfig.color })}
                      <span className={cn("text-[10px] font-bold tracking-wide uppercase", currentRoleConfig.color)}>{user.role}</span>
                    </div>
                  </div>

                  {/* Name & Org */}
                  <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{user.name}</h2>
                  <p className="text-sm text-zinc-400 font-medium mb-6 flex items-center gap-1.5">
                     <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", currentRoleConfig.color.replace('text-', 'bg-'))}></span>
                     {user.hospital}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {user.tags.map((tag) => (
                      <span key={tag} className={cn(
                          "px-2.5 py-0.5 rounded border text-[10px] font-mono tracking-wide bg-zinc-900/50",
                          currentRoleConfig.border, 
                          currentRoleConfig.color
                      )}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-full border-t border-dashed border-white/10 my-2"></div>

                  {/* Bio Quote */}
                  <div className="w-full relative mt-4">
                     <p className="text-sm text-zinc-200 font-serif italic leading-relaxed px-2 opacity-90">
                       "{user.bio}"
                     </p>
                  </div>
                </div>

                {/* 3. Bottom Section: Pass Info */}
                <div className="relative z-10 mt-auto">
                   <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                   
                   <div className="bg-white/5 backdrop-blur-xl p-5 flex items-center justify-between">
                      <div className="flex flex-col items-start gap-1">
                         <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Access Pass ID</div>
                         <div className="font-mono text-2xl text-white font-medium tracking-widest flex items-center gap-2">
                           {user.id}
                         </div>
                      </div>
                      
                      {/* Interactive QR Code Area */}
                      <div className="bg-white p-1 rounded-lg opacity-90 relative overflow-hidden group/qr">
                         <div className="w-10 h-10 border-2 border-zinc-900 border-dashed rounded-sm flex items-center justify-center relative z-10">
                            <Cpu size={20} className="text-zinc-900" />
                         </div>
                         {/* Scanning Beam */}
                         <div className="absolute left-0 w-full h-0.5 bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.5)] z-20 animate-scan pointer-events-none"></div>
                         <div className="absolute inset-0 bg-red-500/10 z-10 animate-pulse"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <Button 
            onClick={handleExport} 
            variant="default"
            size="lg"
            className="w-full h-12 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-xl shadow-indigo-500/10 font-medium text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {isExporting ? (
               <span className="flex items-center gap-2"><Sparkles size={16} className="animate-spin" /> 生成中...</span>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" /> 保存到相册
              </>
            )}
          </Button>

          <p className="text-center text-xs text-zinc-400">
            * 还可以将工牌截图分享到 Discord 寻找队友
          </p>
        </div>

        {/* === RIGHT COLUMN: Config Form === */}
        <div className="lg:col-span-7 w-full">
           <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8">
              
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                   配置你的数字形象
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                  完善你的资料卡，让潜在的队友更快了解你的能力。
                </p>
              </div>

              <Tabs defaultValue="identity" className="w-full">
                <TabsList className="mb-8 w-full p-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl h-auto">
                  <TabsTrigger value="identity" className="flex-1 rounded-lg py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm transition-all">
                     身份信息
                  </TabsTrigger>
                  <TabsTrigger value="details" className="flex-1 rounded-lg py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm transition-all">
                     个性化展示
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="identity" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                   
                   {/* Role Selector Grid */}
                   <div className="space-y-3">
                      <Label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">选择你的角色 Role</Label>
                      <div className="grid grid-cols-2 gap-3">
                         {roles.map((role) => (
                           <button
                             key={role.id}
                             type="button"
                             onClick={() => setUser({ ...user, role: role.id as any })}
                             className={cn(
                               "relative flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 group",
                               user.role === role.id 
                                 ? `bg-zinc-50 dark:bg-zinc-800 ring-1 ring-inset ${role.border.replace('border-', 'ring-')} border-transparent`
                                 : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                             )}
                           >
                              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors", 
                                  user.role === role.id ? role.color.replace('text-', 'bg-') + "/10 " + role.color : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                              )}>
                                 <role.icon size={20} />
                              </div>
                              <div className="flex-1">
                                 <div className={cn("text-sm font-semibold transition-colors", user.role === role.id ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400")}>
                                    {role.id}
                                 </div>
                              </div>
                              {user.role === role.id && (
                                 <div className={cn("absolute top-3 right-3", role.color)}>
                                    <Check size={14} strokeWidth={3} />
                                 </div>
                              )}
                           </button>
                         ))}
                      </div>
                   </div>

                   {/* Inputs */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>显示名称</Label>
                        <Input 
                           value={user.name} 
                           onChange={e => setUser({...user, name: e.target.value})} 
                           className="h-11 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>所属机构 / 院校</Label>
                        <Input 
                           value={user.hospital} 
                           onChange={e => setUser({...user, hospital: e.target.value})} 
                           className="h-11 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all"
                        />
                      </div>
                   </div>

                   <div className="space-y-2 pt-2">
                       <Label>联系方式 (WeChat/Email)</Label>
                       <Input 
                          value={user.wechat} 
                          onChange={e => setUser({...user, wechat: e.target.value})} 
                          className="h-11 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all"
                          placeholder="仅通过审核的队友可见"
                       />
                       <div className="flex items-center gap-2 mt-2 text-zinc-400">
                          <Lock size={12} className="text-zinc-400" />
                          <p className="text-[11px]">隐私保护已开启：此信息不会显示在公开工牌上</p>
                       </div>
                   </div>
                </TabsContent>

                <TabsContent value="details" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                   <div className="space-y-3">
                       <Label>技能标签 (Tags)</Label>
                       <Input 
                          value={user.tags.join(", ")} 
                          onChange={e => setUser({...user, tags: e.target.value.split(",").map(t=>t.trim())})} 
                          placeholder="例如：Python, 临床试验, UI设计"
                          className="h-11 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all"
                       />
                       <div className="flex flex-wrap gap-2 mt-2">
                          {user.tags.filter(t => t).map((tag, i) => (
                             <span key={i} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-500">
                                #{tag}
                             </span>
                          ))}
                       </div>
                   </div>

                   <div className="space-y-3">
                       <Label>组队宣言 (Bio)</Label>
                       <Textarea 
                          value={user.bio} 
                          onChange={e => setUser({...user, bio: e.target.value})} 
                          maxLength={60}
                          placeholder="一句话介绍你自己..."
                          className="min-h-[100px] bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all resize-none p-4 leading-relaxed"
                       />
                       <div className="flex justify-between text-xs text-zinc-400">
                          <span>建议使用 "寻找..." 或 "擅长..." 开头</span>
                          <span>{user.bio.length}/60</span>
                       </div>
                   </div>
                </TabsContent>
              </Tabs>
           </div>
        </div>

      </div>
    </div>
  );
}
