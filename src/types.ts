export interface Wish {
  id: string;
  title: string;
  difficulty: 1 | 2 | 3;
  description: string;
  tags: string[];
  status: 'claimed' | 'open';
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export type CandidateKind = 'Studio' | 'MCP' | 'Agent Skill';

export interface Candidate {
  candidateId: string;
  team: string;
  kind: CandidateKind;
  displayName: string;
  category: string;
  summary: string;
  highlights: string;
  audience: string;
  link: string;
  altLinks?: { label: string; url: string }[];
  linkAvailable: boolean;
}
