import type { Metadata } from 'next';
import { Wishes } from '@/components/Wishes';

export const metadata: Metadata = {
  title: '赛题方向',
  description:
    '通用医学 + 生命科学方向，不做更细的限制。聚焦肿瘤、罕见病、诊断辅助、患者管理、医学文献检索等真实需求，构建可复用的 MCP 工具或 Agent Skill。',
  alternates: { canonical: '/wishes' },
};

export default function WishesPage() {
  return <Wishes isFullPage />;
}
