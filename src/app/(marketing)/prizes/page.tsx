import type { Metadata } from 'next';
import { Rewards } from '@/components/Rewards';

export const metadata: Metadata = {
  title: '奖励体系',
  description:
    '阶段奖：阶段 1 / 2 各 1 个 Vibecoding 键盘，阶段 3 发放 1 张 WAIC 门票，均含开发者采访。最终奖励由 KnowS 与 StepFun 合作方专项权益构成，覆盖参赛全员普惠与最终总评获奖团队。六维评分（25/20/20/15/10/10）。',
  alternates: { canonical: '/prizes' },
};

export default function PrizesPage() {
  return <Rewards isFullPage />;
}
