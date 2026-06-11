/**
 * 站点配置：核心字段（域名、报名链接、提交入口）支持通过环境变量覆盖。
 *
 * 部署时在 .env / 平台环境变量中设置：
 *   NEXT_PUBLIC_SITE_URL              站点公网地址，用于 sitemap、OG、JSON-LD
 *   NEXT_PUBLIC_REGISTER_URL          魔搭活动页正式 URL
 *   NEXT_PUBLIC_SKILL_SUBMIT_URL      Skill 提交入口
 *   NEXT_PUBLIC_MCP_SUBMIT_URL        MCP 提交入口
 *
 * 环境变量必须以 NEXT_PUBLIC_ 开头才能在客户端组件读取。
 */

const env = (key: string, fallback: string) => {
  const v = process.env[key];
  return v && v.length > 0 ? v : fallback;
};

export const SITE = {
  name: '小X宝开源医疗社区黑客松',
  title: '2026 小X宝开源医疗社区黑客松 · 光已成炬，照亮崎岖',
  shortTitle: '2026 小X宝开源医疗社区黑客松',
  slogan: '光已成炬，照亮崎岖',
  sloganEn: 'Light Turns Into Torches, Illuminating the Rugged Path',
  description:
    '小X宝开源医疗社区 × 魔搭 ModelScope 联合主办。聚焦医疗垂直领域，构建可复用的 Skills 或 MCP 扩展工具。6 月 18 日 — 7 月 12 日，三阶段冲刺，直通 WAIC 2026。',
  keywords: [
    '小X宝开源医疗社区',
    '医疗黑客松',
    'AI 黑客松',
    'MCP 工具',
    'Agent Skill',
    '魔搭 ModelScope',
    'KnowS',
    'StepFun 阶跃星辰',
    'WAIC 2026',
    '开源医疗',
    '医疗 AI',
    '罕见病',
    '肿瘤辅助',
    '生命科学',
  ],
  url: env('NEXT_PUBLIC_SITE_URL', 'https://hackathon.xiaoxbao.org'),
  locale: 'zh_CN',
  ogImage: '/poster.png',
  bannerImage: '/banner.png',
  registerUrl: env('NEXT_PUBLIC_REGISTER_URL', 'https://modelscope.cn/'),
  submissionUrls: {
    skill: env(
      'NEXT_PUBLIC_SKILL_SUBMIT_URL',
      'https://modelscope.cn/skills/create?template=custom',
    ),
    mcp: env(
      'NEXT_PUBLIC_MCP_SUBMIT_URL',
      'https://modelscope.cn/mcp/servers/create',
    ),
  },
  hosts: {
    main: '小X宝开源医疗公益社区',
    coHost: '魔搭 ModelScope',
    partner: 'KnowS',
    llmSponsor: '阶跃星辰 StepFun',
  },
  schedule: {
    start: '2026-06-18',
    end: '2026-07-12',
    finalAnnounce: '2026-07-15',
    waicStart: '2026-07-17',
    waicEnd: '2026-07-20',
  },
} as const;

export const NAV_ITEMS = [
  { id: 'wishes', label: '赛题方向', href: '/wishes' },
  { id: 'process', label: '赛程安排', href: '/process' },
  { id: 'prizes', label: '奖励体系', href: '/prizes' },
  { id: 'submit', label: '提交规范', href: '/submit' },
  { id: 'partners', label: '主办合作', href: '/partners' },
] as const;
