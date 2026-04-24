
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Users, BookOpen, MessageSquare, LogOut, 
  Plus, Search, ShieldAlert, Zap, Terminal, Copy, Check, 
  Lock, Unlock, ChevronRight, Settings, Bell, Crown, Filter,
  Sparkles, ArrowUpRight
} from 'lucide-react';
import { Button, Card, Input, Label, Badge, cn, Avatar, AvatarImage, AvatarFallback } from './UIComponents';
import { Role, Team, TeamMember } from '../types';
import { AppRoute, ROUTES } from '../lib/routes';

interface DashboardProps {
  onNavigate: (route: AppRoute) => void;
  onLogout: () => void;
}

// Extended Mock Data for richer UI
const MOCK_USER: TeamMember = {
  id: 'u1',
  name: 'Dr. Strange',
  role: 'medic',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  isLeader: true
};

const AVAILABLE_TEAMS = [
  { 
    id: 't1', 
    name: 'CodeCure', 
    slogan: '用 AI 优化急诊分诊流程',
    tags: ['Next.js', 'Python', 'RAG'], 
    members: [
       { id: 'm1', name: 'Alice', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
       { id: 'm2', name: 'Bob', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' }
    ],
    max: 4, 
    needed: ['dev', 'medic'] 
  },
  { 
    id: 't2', 
    name: 'NeuroLink', 
    slogan: '脑机接口康复辅助应用', 
    tags: ['BCI', 'WebGL', 'IoT'],
    members: [
        { id: 'm3', name: 'Charlie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie' }
    ],
    max: 3, 
    needed: ['dev', 'design'] 
  },
  { 
    id: 't3', 
    name: 'VitalFlow', 
    slogan: 'ICU 数据可视化大屏', 
    tags: ['D3.js', 'DataViz'],
    members: [
        { id: 'm4', name: 'Dave', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dave' },
        { id: 'm5', name: 'Eve', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eve' }
    ],
    max: 4, 
    needed: ['pm'] 
  },
  { 
    id: 't4', 
    name: 'MediMind', 
    slogan: '术后随访智能语音助手', 
    tags: ['OpenAI', 'Whisper', 'Flutter'],
    members: [
        { id: 'm6', name: 'Frank', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank' }
    ],
    max: 3, 
    needed: ['dev', 'medic'] 
  },
];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onLogout }) => {
  const [hasTeam, setHasTeam] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'challenges' | 'docs'>('overview');
  const [team, setTeam] = useState<Team | null>(null);

  // Simulation: Join a team
  const handleCreateTeam = (e: React.FormEvent) => {
    e.preventDefault();
    setTeam({
      id: 'new-team',
      name: 'My New Squad',
      slogan: 'Solving problems...',
      track: 'light',
      members: [MOCK_USER]
    });
    setHasTeam(true);
  };

  const handleJoinTeam = () => {
    setTeam({
      id: 't2',
      name: 'NeuroLink',
      slogan: '脑机接口康复辅助应用',
      track: 'full',
      members: [
        { id: 'u2', name: 'Dev Dave', role: 'dev', isLeader: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dave' },
        MOCK_USER
      ]
    });
    setHasTeam(true);
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950 overflow-hidden font-sans selection:bg-violet-500/30">
      
      {/* --- Sidebar --- */}
      <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl hidden md:flex flex-col z-20 relative">
        <div className="p-6 flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
            <LayoutDashboard size={20} />
          </div>
          <span className="font-bold text-lg text-zinc-900 dark:text-zinc-50 tracking-tight">Mission Control</span>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 py-4">
          <SidebarItem 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
            icon={<LayoutDashboard size={18} />} 
            label="总览 Overview" 
          />
          <SidebarItem 
            active={activeTab === 'challenges'} 
            onClick={() => onNavigate(ROUTES.wishes)} 
            icon={<Users size={18} />} 
            label="赛题悬赏 Challenges" 
          />
          <SidebarItem 
            active={activeTab === 'docs'} 
            onClick={() => setActiveTab('docs')} 
            icon={<BookOpen size={18} />} 
            label="开发文档 Docs" 
          />
          <SidebarItem 
            active={false}
            onClick={() => {}} 
            icon={<MessageSquare size={18} />} 
            label="社区帮助 Help" 
          />
        </nav>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800/50">
          <div 
            className="group flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/50"
            onClick={() => onNavigate(ROUTES.profile)}
          >
            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-white dark:border-zinc-700 shadow-sm">
                <AvatarImage src={MOCK_USER.avatar} />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-zinc-800 rounded-full"></div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-bold text-zinc-900 dark:text-zinc-50 truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {MOCK_USER.name}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                Level 3 Medic
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-2 justify-start text-zinc-500 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400" onClick={onLogout}>
            <LogOut size={14} className="mr-2" />
            退出登录
          </Button>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        
        {/* Ambient Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full" />
           <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-500/5 blur-[100px] rounded-full" />
        </div>

        {/* Top Header */}
        <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-4">
             <div className="md:hidden p-2 -ml-2 text-zinc-500">
               <LayoutDashboard size={24} />
             </div>
             <div>
                <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                  {hasTeam ? team?.name : '组队大厅 Lobby'}
                  {hasTeam && (
                    <Badge variant="secondary" className="bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 border-transparent">
                        {team?.track === 'light' ? 'Light Track' : 'Full Stack'}
                    </Badge>
                  )}
                </h1>
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="relative p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
             </button>
             <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800"></div>
             <RoleBadge role={MOCK_USER.role} />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto z-10 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto w-full">
            <AnimatePresence mode="wait">
              {!hasTeam ? (
                <LobbyView onCreate={handleCreateTeam} onJoin={handleJoinTeam} />
              ) : (
                <CockpitView team={team!} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Updated Sidebar Item with "Glow" Effect ---
const SidebarItem = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button
    onClick={onClick}
    className={cn(
      "relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group overflow-hidden",
      active 
        ? "text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-900/20" 
        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200"
    )}
  >
    {active && (
      <motion.div 
        layoutId="active-sidebar"
        className="absolute left-0 top-0 bottom-0 w-1 bg-violet-500 rounded-r-full"
      />
    )}
    <span className={cn("relative z-10 transition-colors", active ? "text-violet-600 dark:text-violet-400" : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300")}>
      {icon}
    </span>
    <span className="relative z-10">{label}</span>
  </button>
);

const RoleBadge = ({ role }: { role: Role }) => {
  const styles = {
    medic: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    dev: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    design: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800",
    pm: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  };
  
  const labels = {
    medic: "Doctor / Nurse",
    dev: "Developer",
    design: "Designer",
    pm: "Product Mgr",
  };

  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border shadow-sm", styles[role])}>
      {role === 'medic' && <ShieldAlert size={12} />}
      {role === 'dev' && <Terminal size={12} />}
      {labels[role]}
    </span>
  );
}

// ---------------------------
// VIEW 1: LOBBY (Enhanced)
// ---------------------------
const LobbyView = ({ onCreate, onJoin }: { onCreate: (e: React.FormEvent) => void, onJoin: () => void }) => {
  const [mode, setMode] = useState<'create' | 'join'>('join');
  const [filter, setFilter] = useState('all');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            找到你的战友
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-base">
            你可以加入现有队伍，或者创建一个新的小队。
          </p>
        </div>
        
        <div className="flex p-1.5 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <button 
            onClick={() => setMode('join')}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-lg transition-all", 
              mode === 'join' 
                ? "bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-50" 
                : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            )}
          >
            招募大厅
          </button>
          <button 
            onClick={() => setMode('create')}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-lg transition-all", 
              mode === 'create' 
                ? "bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-50" 
                : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            )}
          >
            创建队伍
          </button>
        </div>
      </div>

      {mode === 'join' ? (
        <div className="space-y-6">
           
           {/* Filters Bar */}
           <div className="flex flex-col sm:flex-row gap-4 p-1">
              <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                 <input 
                    type="text" 
                    placeholder="搜索队伍名称或技术栈..." 
                    className="w-full h-10 pl-9 pr-4 rounded-lg bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-sm focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none transition-all"
                 />
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                 {['all', 'dev', 'design', 'medic', 'pm'].map(role => (
                    <button
                       key={role}
                       onClick={() => setFilter(role)}
                       className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap",
                          filter === role 
                            ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100" 
                            : "bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                       )}
                    >
                       {role === 'all' ? 'All Roles' : `Need ${role.toUpperCase()}`}
                    </button>
                 ))}
              </div>
           </div>

           {/* Cards Grid */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {AVAILABLE_TEAMS.map((team) => (
               <div 
                  key={team.id} 
                  className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-0 shadow-lg shadow-zinc-200/50 dark:shadow-none border border-transparent dark:border-zinc-800/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
               >
                 {/* Top Accent Line */}
                 <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {team.name}
                       </h3>
                       {/* Facepile */}
                       <div className="flex items-center -space-x-2">
                          {team.members.map(m => (
                             <Avatar key={m.id} className="w-8 h-8 border-2 border-white dark:border-zinc-900 shadow-sm">
                                <AvatarImage src={m.avatar} />
                                <AvatarFallback className="text-[10px]">{m.name[0]}</AvatarFallback>
                             </Avatar>
                          ))}
                          {/* Empty Slots */}
                          {Array.from({ length: team.max - team.members.length }).map((_, i) => (
                             <div key={i} className="w-8 h-8 rounded-full border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center z-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                             </div>
                          ))}
                       </div>
                    </div>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-2 min-h-[40px]">
                       {team.slogan}
                    </p>

                    {/* Tags Section */}
                    <div className="mt-auto space-y-4">
                       {/* Tech Stack */}
                       <div className="flex flex-wrap gap-2">
                          {team.tags.map(tag => (
                             <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                                #{tag}
                             </span>
                          ))}
                       </div>
                       
                       <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800"></div>

                       {/* Action Row */}
                       <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                             {team.needed.map(role => (
                                <Badge key={role} variant="secondary" className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-300 border border-violet-100 dark:border-violet-500/20">
                                   Need {role}
                                </Badge>
                             ))}
                          </div>
                          <Button 
                             onClick={onJoin} 
                             size="sm"
                             variant="outline"
                             className="h-8 px-4 text-xs font-semibold rounded-full border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all shadow-none hover:shadow-lg hover:shadow-violet-500/20"
                          >
                             申请加入
                          </Button>
                       </div>
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      ) : (
        <div className="flex justify-center py-12">
            <Card className="max-w-2xl w-full border-zinc-200 dark:border-zinc-800 shadow-2xl dark:shadow-none bg-white dark:bg-zinc-900">
            <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-zinc-900 dark:text-zinc-50">
                        <FlagIcon />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-50">注册新战队</h3>
                    <p className="text-zinc-500 text-sm">作为队长，你需要定义团队的目标并招募队友。</p>
                </div>
                
                <form onSubmit={onCreate} className="space-y-6">
                <div className="space-y-2">
                    <Label>战队名称 Squad Name</Label>
                    <Input placeholder="给你们的队伍起个响亮的名字" required className="h-11" />
                </div>
                <div className="space-y-2">
                    <Label>竞选宣言 Mission Statement</Label>
                    <Input placeholder="一句话描述你们想解决什么痛点" required className="h-11" />
                </div>
                <div className="space-y-2">
                    <Label className="mb-2 block">选择赛道 Track</Label>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="relative border rounded-xl p-4 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-violet-500 transition-all border-violet-500 bg-violet-50/50 dark:bg-violet-900/10">
                        <div className="absolute top-3 right-3 text-violet-600">
                            <CheckCircleIcon />
                        </div>
                        <div className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">💡 轻应用</div>
                        <div className="text-xs text-zinc-500 leading-relaxed">基于现成平台快速搭建工具，无需复杂后端。</div>
                    </div>
                    <div className="border rounded-xl p-4 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-violet-500 transition-all border-zinc-200 dark:border-zinc-800">
                        <div className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">💻 全栈开发</div>
                        <div className="text-xs text-zinc-500 leading-relaxed">独立部署的前后端项目，拥有完全的代码控制权。</div>
                    </div>
                    </div>
                </div>
                <div className="pt-4">
                    <Button type="submit" variant="gradient" className="w-full h-12 text-base shadow-lg shadow-violet-500/20">
                        建立队伍 Create Team
                    </Button>
                </div>
                </form>
            </div>
            </Card>
        </div>
      )}
    </motion.div>
  );
};

// ---------------------------
// VIEW 2: COCKPIT (Has Team)
// ---------------------------
const CockpitView = ({ team }: { team: Team }) => {
  const memberCount = team.members.length;
  const isLocked = memberCount < 2;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      {/* Alert System */}
      {isLocked && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 rounded-xl p-4 flex items-start gap-4">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg text-amber-600 dark:text-amber-400 shrink-0">
             <ShieldAlert size={20} />
          </div>
          <div>
            <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm">队伍尚未集结完毕</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400/80 mt-1 leading-relaxed">
              为了确保项目顺利落地，你需要至少招募 1 名队友才能解锁下方的核心算力包。
              <br/>请复制下方的邀请链接发送给你的伙伴。
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COL 1: ROSTER */}
        <div className="space-y-6">
           <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
             <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
               <h3 className="font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                 <Users size={18} className="text-violet-500" /> 小队成员
               </h3>
               <span className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-500">
                 {memberCount}/4
               </span>
             </div>
             <div className="p-6 space-y-4">
                {team.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                     <Avatar className="h-10 w-10 border border-zinc-200 dark:border-zinc-700">
                        {member.avatar && <AvatarImage src={member.avatar} />}
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                     </Avatar>
                     <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-zinc-900 dark:text-zinc-50">{member.name}</span>
                          {member.isLeader && <Crown size={12} className="text-amber-500 fill-current" />}
                        </div>
                        <div className="text-xs text-zinc-500">{member.role === 'medic' ? 'Medical Expert' : 'Developer'}</div>
                     </div>
                     <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-emerald-200 text-emerald-600 dark:border-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20">Verified</Badge>
                  </div>
                ))}

                {/* Empty Slots */}
                {Array.from({ length: 4 - memberCount }).map((_, i) => (
                   <div key={i} className="flex items-center gap-3 opacity-60 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-2 bg-zinc-50 dark:bg-zinc-800/50">
                      <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                         <Plus size={16} className="text-zinc-400" />
                      </div>
                      <span className="text-sm text-zinc-500 italic">Waiting for member...</span>
                   </div>
                ))}

                <Button variant="outline" className="w-full mt-4 border-dashed h-10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800" onClick={() => alert("邀请链接已复制！")}>
                  <Copy size={14} className="mr-2" /> 复制邀请链接
                </Button>
             </div>
           </Card>
        </div>

        {/* COL 2: SUPPLY CRATE (CORE INTERACTION) */}
        <div className="lg:col-span-2">
           <ResourceCrate isLocked={isLocked} />
        </div>
      </div>
      
      {/* COL 3: CHECKLIST */}
      <Card className="mt-6 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
         <div className="p-6">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                <Check size={18} className="text-violet-500" />
                起飞前检查 Pre-flight Check
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 "全员加入 Discord 社区 #announcements 频道",
                 "Fork 官方 GitHub 仓库到你的账号",
                 "在 .env 文件中配置好 API Key",
                 "成功运行 npm run dev 并看到欢迎页"
               ].map((item, i) => (
                 <label key={i} className="group flex items-start gap-3 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors">
                    <div className="relative flex items-center mt-0.5">
                       <input type="checkbox" className="peer h-4 w-4 rounded border-zinc-300 dark:border-zinc-600 text-violet-600 focus:ring-violet-500 cursor-pointer" />
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">{item}</span>
                 </label>
               ))}
            </div>
         </div>
      </Card>
    </motion.div>
  );
};


// ---------------------------
// COMPONENT: SUPPLY CRATE
// ---------------------------
const ResourceCrate = ({ isLocked }: { isLocked: boolean }) => {
  return (
    <Card className={cn(
      "h-full relative overflow-hidden transition-all duration-500 border-0",
      isLocked 
        ? "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" 
        : "bg-gradient-to-br from-zinc-900 to-zinc-950 text-white shadow-2xl shadow-violet-900/20"
    )}>
      {/* Background FX for Unlocked */}
      {!isLocked && (
        <>
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-600/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </>
      )}

      <div className="relative p-8 h-full flex flex-col justify-center min-h-[320px]">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
             <h3 className={cn("text-2xl font-bold flex items-center gap-3", isLocked ? "text-zinc-400" : "text-white")}>
               <div className={cn("p-2.5 rounded-xl shadow-lg", isLocked ? "bg-zinc-200 dark:bg-zinc-800" : "bg-gradient-to-br from-amber-400 to-orange-500 text-black shadow-amber-500/20")}>
                 {isLocked ? <Lock size={20} /> : <Zap size={20} className="fill-current" />}
               </div>
               {isLocked ? "物资箱已锁定" : "作战补给包 (已激活)"}
             </h3>
             <p className={cn("mt-2 text-sm max-w-md", isLocked ? "text-zinc-500" : "text-zinc-300/80")}>
               {isLocked ? "需要集结更多队友才能解锁算力支持。" : "包含 $500 额度的 AI 模型 Token 与云端 IDE 环境。请妥善保管你的密钥。"}
             </p>
          </div>
          {!isLocked && (
             <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
               Access Granted
             </div>
          )}
        </div>

        {/* Content */}
        {isLocked ? (
           <div className="flex-1 flex flex-col items-center justify-center text-zinc-400 border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 mx-auto w-full max-w-md p-8">
              <div className="p-4 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-4">
                <Lock size={32} className="text-zinc-400 dark:text-zinc-600" />
              </div>
              <p className="text-sm font-medium">Waiting for Teammates...</p>
              <p className="text-xs text-zinc-500 mt-1">Add 1 more member to unlock</p>
           </div>
        ) : (
           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* Resource 1: API Key */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:bg-white/10 transition-colors group">
                 <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                       <ShieldAlert size={14} className="text-sky-400" /> API Token Secret
                    </span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors">仅团队可见</span>
                 </div>
                 <div className="flex gap-3">
                    <div className="flex-1 bg-black/40 rounded-lg px-4 py-3 font-mono text-sm text-emerald-400 tracking-wider flex items-center shadow-inner border border-black/20">
                       sk-proj-**********************892a
                    </div>
                    <Button size="icon" variant="outline" className="h-full aspect-square bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30">
                       <Copy size={16} />
                    </Button>
                 </div>
              </div>

              {/* Resource 2: Cloud IDE */}
              <div className="flex gap-4">
                 <Button variant="gradient" className="flex-1 h-14 text-base font-bold shadow-xl shadow-violet-500/30 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all">
                    <Terminal size={20} className="mr-2" />
                    启动 Cloud IDE 环境
                 </Button>
                 <Button variant="outline" className="h-14 px-8 border-white/10 text-zinc-300 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/30 backdrop-blur-sm">
                    下载 SDK
                 </Button>
              </div>
           </div>
        )}
      </div>
    </Card>
  );
};

// Icons helper
const FlagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
)
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
)
