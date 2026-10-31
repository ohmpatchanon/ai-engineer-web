export type Level = 'เริ่มต้น' | 'กลาง' | 'สูง';
export type Track = 'llm' | 'ml' | 'product' | 'mlops';

export interface Topic {
  title: string;
  detail: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Module {
  id: string;
  number: string;
  slug: string;
  phase: string;
  title: string;
  en: string;
  summary: string;
  why: string;
  mentalModel: string;
  duration: string;
  level: Level;
  tracks: Track[];
  outcomes: string[];
  topics: Topic[];
  lab: string;
  deliverable: string;
  checkpoint: string[];
  mistakes: string[];
  resources: { title: string; url: string; kind: string }[];
  keywords: string[];
  quiz: QuizQuestion[];
}

export interface Phase {
  id: string;
  number: string;
  title: string;
  en: string;
  weeks: string;
  description: string;
  outcome: string;
  color: string;
}

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; body: string }[];
  callout?: { label: string; text: string };
  code?: { lang: string; content: string };
}

export interface Guide {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
  updated: string;
  tags: string[];
  sections: GuideSection[];
}
