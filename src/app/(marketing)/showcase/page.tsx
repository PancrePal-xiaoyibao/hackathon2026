import type { Metadata } from 'next';
import { Showcase } from '@/components/Showcase';

export const metadata: Metadata = {
  title: '作品投票',
  description:
    '首批参赛者选题与创意展示，共 12 件作品，覆盖 Studio、MCP、Agent Skill 三类。浏览候选卡片，前往问卷投出你心中的最佳选题。',
  alternates: { canonical: '/showcase' },
};

export default function ShowcasePage() {
  return <Showcase isFullPage />;
}
