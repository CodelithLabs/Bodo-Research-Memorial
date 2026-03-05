// Types for Bodo Memorial Website

export interface Leader {
  id: string;
  name: string;
  title: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  biography: string;
  contributions: string[];
  slogans?: string[];
  imageUrl?: string;
  gallery?: string[];
  region: string;
  district: string;
  era: string;
  isMartyr: boolean;
  movement: string;
  sources?: {
    type: 'book' | 'journal' | 'newspaper' | 'interview' | 'archive';
    title: string;
    author: string;
    year: string;
    publisher?: string;
  }[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'birth' | 'death' | 'movement' | 'achievement' | 'memorial';
  leaderId?: string;
  imageUrl?: string;
}

export interface Tribute {
  id: string;
  name: string;
  message: string;
  date: string;
  isApproved: boolean;
}

export interface LeaderSubmission {
  id?: string;
  name: string;
  email: string;
  leaderName: string;
  details: string;
  isCorrection: boolean;
}

export type Region = 'BTC' | 'Assam' | 'Other';
export type Era = '1950s' | '1960s' | '1970s' | '1980s' | '1990s' | '2000s';
