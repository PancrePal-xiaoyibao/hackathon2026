import type { Metadata } from 'next';
import { Submission } from '@/components/Submission';

export const metadata: Metadata = {
  title: '作品提交规范',
  description:
    '2026 小X宝开源医疗社区黑客松作品提交规范：魔搭社区作品链接、公开代码仓库、规范 README，仓库须公开并含 LICENSE，推荐 MIT 或 Apache 2.0。',
  alternates: { canonical: '/submit' },
};

export default function SubmitPage() {
  return <Submission isFullPage />;
}
