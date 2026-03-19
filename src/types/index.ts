// Types for Bodo Memorial Website

export type Category = 'Political' | 'Religious' | 'Cultural' | 'Social' | 'Academic' | 'Administrative' | 'Martyr';

export interface Leader {
  id: string;
  name: string;
  title: string;
  category?: Category;
  birthDate: string;
  deathDate?: string;
  birthPlace: string;
  deathPlace?: string;
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

// Research Types
export type ResearchCategory =
  | 'language'
  | 'history'
  | 'culture'
  | 'politics'
  | 'sociology'
  | 'religion'
  | 'ecology'
  | 'literature';

export type ArticleType = 'research-paper' | 'academic-article';

export interface ResearchPaper {
  id: string;
  slug: string;
  type: ArticleType;
  title: string;
  authors: string[];
  institution: string;
  year: number;
  journal?: string;
  volume?: string;
  issn?: string;
  doi?: string;
  url?: string;
  abstract: string;
  keywords: string[];
  category: ResearchCategory;
  pdfAvailable: boolean;
  pages?: number;
  language: 'english' | 'bodo' | 'assamese' | 'hindi';
  isFeatured: boolean;
}

// Archive Types
export type ArchiveType =
  | 'historical-photo'
  | 'document'
  | 'manuscript'
  | 'artifact';

export type ArchiveEra =
  | 'pre-1900'
  | '1900-1950'
  | '1950-1970'
  | '1970-2003'
  | '2003-present';

export interface ArchiveItem {
  id: string;
  slug: string;
  type: ArchiveType;
  title: string;
  description: string;
  year: number | null;
  yearNote?: string;
  era: ArchiveEra;
  location?: string;
  source: string;
  attribution?: string;
  tags: string[];
  isFeatured: boolean;
  imageAlt: string;
  externalUrl?: string;
}
