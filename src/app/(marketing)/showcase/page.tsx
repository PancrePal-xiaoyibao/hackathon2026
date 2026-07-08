import type { Metadata } from 'next';
import { Showcase } from '@/components/Showcase';
import { CANDIDATES } from '@/lib/candidates';
import type { CandidateKind } from '@/types';

const KIND_LABELS: Record<CandidateKind, string> = {
  Studio: 'Studio',
  MCP: 'MCP',
  'Agent Skill': 'Agent Skill',
};

const kindSummary = (Object.keys(KIND_LABELS) as CandidateKind[])
  .map((kind) => {
    const count = CANDIDATES.filter((c) => c.kind === kind).length;
    return count > 0 ? `${KIND_LABELS[kind]} ${count}` : null;
  })
  .filter(Boolean)
  .join('、');

export const metadata: Metadata = {
  title: '作品投票',
  description: `首批参赛者选题与创意展示，共 ${CANDIDATES.length} 件作品（${kindSummary}）。浏览候选卡片，前往问卷投出你心中的最佳选题。`,
  alternates: { canonical: '/showcase' },
};

export default function ShowcasePage() {
  return <Showcase isFullPage />;
}
