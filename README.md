# 2026 小X宝开源医疗社区黑客松

> 光已成炬，照亮崎岖 · Light Turns Into Torches, Illuminating the Rugged Path

赛事官网，基于 [Next.js 16](https://nextjs.org/) (App Router) + React 19 + Tailwind CSS v4，纯静态展示页面，针对 SEO 优化。包管理器使用 [Bun](https://bun.sh/)。

主办：小X宝开源医疗公益社区 × 魔搭 ModelScope · 合作方：KnowS · 大模型赞助：阶跃星辰 StepFun

## 开发

```bash
bun install
cp .env.example .env.local   # 按需修改
bun run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 构建 / 部署

```bash
bun run build
bun run start
```

输出全部为静态页（`○ Static`），可部署到任意静态托管（Vercel / Cloudflare Pages / EdgeOne / Netlify 等）。

## 环境变量

部署时通过环境变量覆盖站点地址与外链。所有变量必须以 `NEXT_PUBLIC_` 开头才能在客户端组件读取。

| 变量名 | 默认值 | 用途 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://hackathon.xiaoxbao.org` | 站点公网地址（sitemap、OG、JSON-LD） |
| `NEXT_PUBLIC_REGISTER_URL` | `https://modelscope.cn/` | 魔搭活动页正式 URL（「立即报名」按钮） |
| `NEXT_PUBLIC_SKILL_SUBMIT_URL` | `https://modelscope.cn/skills/create?template=custom` | Skill 提交入口 |
| `NEXT_PUBLIC_MCP_SUBMIT_URL` | `https://modelscope.cn/mcp/servers/create` | MCP 提交入口 |

参见 `.env.example`。

## 路由

- `/` 首页（Hero / Features / Wishes / Process / Rewards / FAQ / CTA）
- `/wishes` 赛题方向
- `/process` 赛程安排
- `/prizes` 奖励体系
- `/submit` 作品提交规范（含仓库规范、README 模板、专家加分项）
- `/partners` 主办与合作
- `/sitemap.xml` 由 `src/app/sitemap.ts` 自动生成
- `/robots.txt` 由 `src/app/robots.ts` 自动生成

## SEO

- 每个页面通过 App Router 的 `metadata` 导出标题与描述
- Open Graph / Twitter Card 默认在 root layout 配置
- 首页注入 `Event` JSON-LD schema（含主办、合作方、赞助方、虚拟+实体双地点、报名链接）
- 多语言 slug 支持（`zh-CN`）

## 目录结构

```
src/
  app/
    layout.tsx              # 根 layout：metadata、字体、ThemeProvider
    (marketing)/            # 营销页 route group
      layout.tsx            # Header + Footer
      page.tsx              # 首页 + Event JSON-LD
      wishes/page.tsx
      process/page.tsx
      prizes/page.tsx
      submit/page.tsx
      partners/page.tsx
    sitemap.ts
    robots.ts
    not-found.tsx
    globals.css             # Tailwind v4 + 自定义动画
  components/               # 各 section 组件，需要交互的标 'use client'
  lib/
    site.ts                 # 站点元数据 + 环境变量读取
    cn.ts                   # className 合并工具（server-safe）
public/
  banner.png                # 主视觉横幅
  poster.png                # 宣传海报（OG 默认图）
```

## 合规说明

> 项目默认开源（推荐 MIT / Apache 2.0） · 禁真实患者数据 · 不做诊断承诺
