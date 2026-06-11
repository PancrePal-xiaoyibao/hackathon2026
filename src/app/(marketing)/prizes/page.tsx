import type { Metadata } from 'next';
import { Rewards } from '@/components/Rewards';

export const metadata: Metadata = {
  title: '奖励体系',
  description:
    '阶段奖：3 张 WAIC 门票 + 开发者采访。最终总评：一等奖 1000 RMB ×3、二等奖 500 RMB ×7、三等奖 100 RMB ×10 云资源 / API 额度。六维评分（25/20/20/15/10/10）。',
  alternates: { canonical: '/prizes' },
};

export default function PrizesPage() {
  return <Rewards isFullPage />;
}
