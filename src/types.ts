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
