import type { Metadata } from 'next';
import { Process } from '@/components/Process';

export const metadata: Metadata = {
  title: '赛程安排',
  description:
    '6 月 18 日 — 7 月 12 日，三阶段冲刺。阶段 1 选题潜力（6/24 评选）与阶段 2 MVP（7/1 评选）各发放 1 个 Vibecoding 键盘；阶段 3 社区影响力（7/8 评选）发放 1 张 WAIC 门票。',
  alternates: { canonical: '/process' },
};

export default function ProcessPage() {
  return <Process isFullPage />;
}
