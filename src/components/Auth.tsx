
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Github, ArrowRight, Stethoscope, Code2, Paintbrush, Briefcase, ChevronLeft } from 'lucide-react';
import { Button, Input, Label } from './UIComponents';
import { AppRoute, ROUTES } from '../lib/routes';

type AuthMode = 'login' | 'register';
type Role = 'dev' | 'medic' | 'design' | 'pm';

interface AuthProps {
  onNavigate?: (route: AppRoute) => void;
}

export const Auth: React.FC<AuthProps> = ({ onNavigate }) => {
  const [mode, setMode] = useState<AuthMode>('register');
  const [role, setRole] = useState<Role>('dev');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // alert(mode === 'login' ? "欢迎回来！" : "注册成功，请查收验证邮件。");
      
      // Redirect to Dashboard
      if (onNavigate) {
        onNavigate(ROUTES.dashboard);
      }
    }, 1500);
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden font-sans transition-colors duration-300">
      
      {/* 1. Global Atmosphere (Adaptive) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-200/40 dark:bg-violet-600/10 rounded-full blur-[100px] pointer-events-none opacity-60 dark:opacity-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-200/40 dark:bg-sky-600/10 rounded-full blur-[100px] pointer-events-none opacity-60 dark:opacity-30" />
      
      {/* 2. Main Card Container */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden transition-colors duration-300">
        
        {/* --- Left Panel: Brand & Vision --- */}
        <div className="relative flex flex-col justify-between p-8 md:p-12 bg-zinc-50 dark:bg-zinc-900/50 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800">
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 text-sky-600 dark:text-sky-400 font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Code for Health 2024
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-4">
              连接代码 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-600 animate-text-shimmer bg-[length:200%_auto]">
                与生命的脉搏
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-xs">
              加入 2,000+ 开发者与医护人员的行列。在这里，你敲下的每一行代码，都可能成为挽救生命的关键。
            </p>
          </div>

          {/* Stat Cards */}
          <div className="relative z-10 grid grid-cols-2 gap-4 mt-12 md:mt-0">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-1">50+</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">三甲医院真实需求</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-1">¥50k</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">奖池与算力支持</div>
            </div>
          </div>
        </div>

        {/* --- Right Panel: Form Area --- */}
        <div className="flex flex-col justify-center p-8 md:p-12 bg-white dark:bg-zinc-950 transition-colors duration-300">
          <div className="max-w-md mx-auto w-full">
            
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                {mode === 'register' ? '创建极客档案' : '欢迎归队'}
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {mode === 'register' ? '准备好开始这场 48 小时的挑战了吗？' : '登录以管理你的队伍和提交项目。'}
              </p>
            </div>

            {/* GitHub Button */}
            <Button 
              variant="outline" 
              className="w-full gap-2 mb-6 h-11 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
               <Github size={18} />
               Continue with GitHub
            </Button>

            <div className="relative my-6">
               <div className="absolute inset-0 flex items-center">
                 <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
               </div>
               <div className="relative flex justify-center text-xs uppercase">
                 <span className="bg-white dark:bg-zinc-950 px-2 text-zinc-400">Or continue with email</span>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="popLayout">
                {mode === 'register' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 overflow-hidden p-1"
                  >
                     {/* Role Selection Grid */}
                     <div className="space-y-2">
                        <Label className="text-xs text-zinc-500 dark:text-zinc-400">选择你的角色 Role</Label>
                        <div className="grid grid-cols-2 gap-3">
                           <RoleButton 
                              active={role === 'dev'} 
                              onClick={() => setRole('dev')} 
                              icon={<Code2 size={16} />} 
                              label="Developer" 
                           />
                           <RoleButton 
                              active={role === 'medic'} 
                              onClick={() => setRole('medic')} 
                              icon={<Stethoscope size={16} />} 
                              label="Medical Pro" 
                           />
                           <RoleButton 
                              active={role === 'design'} 
                              onClick={() => setRole('design')} 
                              icon={<Paintbrush size={16} />} 
                              label="Designer" 
                           />
                           <RoleButton 
                              active={role === 'pm'} 
                              onClick={() => setRole('pm')} 
                              icon={<Briefcase size={16} />} 
                              label="Product Mgr" 
                           />
                        </div>
                     </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">显示昵称</Label>
                      <div className="relative">
                         <User className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                         <Input 
                            id="name" 
                            placeholder="例如：Dr. Strange" 
                            className="pl-9" 
                          />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <Label htmlFor="email">工作邮箱</Label>
                <div className="relative">
                   <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                   <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      required 
                      className="pl-9" 
                    />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">密码</Label>
                  {mode === 'login' && (
                    <a href="#" className="text-xs text-violet-600 dark:text-violet-400 hover:underline">
                      忘记密码?
                    </a>
                  )}
                </div>
                <div className="relative">
                   <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                   <Input 
                      id="password" 
                      type="password" 
                      required 
                      className="pl-9" 
                    />
                </div>
              </div>

              <Button 
                type="submit" 
                variant="gradient" 
                className="w-full h-11 text-base mt-4 gap-2 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
                disabled={loading}
              >
                {loading ? (
                   <span className="animate-pulse">Processing...</span>
                ) : (
                   <>
                     {mode === 'login' ? '立即登录' : '完成注册'}
                     <ArrowRight size={16} />
                   </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-zinc-500 dark:text-zinc-400">
                {mode === 'login' ? "还没有账号？" : "已有账号？"}
              </span>{" "}
              <button
                onClick={toggleMode}
                className="font-semibold text-violet-600 dark:text-violet-400 hover:underline transition-all"
              >
                {mode === 'login' ? "免费注册" : "直接登录"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Refined Role Button Component
const RoleButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 ${
      active
        ? 'border-violet-500 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300'
        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800'
    }`}
  >
    <span className="relative z-10 flex items-center gap-2">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 16, className: active ? 'text-violet-600 dark:text-violet-400' : 'text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300' })}
      {label}
    </span>
  </button>
);
