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
  href?: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Role = 'dev' | 'medic' | 'design' | 'pm';

export interface User {
  id: string;
  name: string;
  role: Role;
  avatar?: string;
}

export interface TeamMember extends User {
  isLeader?: boolean;
}

export interface Team {
  id: string;
  name: string;
  slogan: string;
  track: 'light' | 'full';
  members: TeamMember[];
}
