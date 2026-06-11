import type { Metadata } from 'next';
import { Partners } from '@/components/Partners';

export const metadata: Metadata = {
  title: '主办与合作',
  description:
    '主办：小X宝开源医疗公益社区 × 魔搭 ModelScope。合作方：KnowS。大模型赞助：阶跃星辰 StepFun。',
  alternates: { canonical: '/partners' },
};

export default function PartnersPage() {
  return <Partners />;
}
