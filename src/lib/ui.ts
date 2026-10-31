import { phases } from '../data/phases';
import type { Level, Track } from '../data/types';

export const phaseMap = Object.fromEntries(phases.map((p) => [p.id, p]));

export function phaseColor(phase: string) {
  return phaseMap[phase]?.color ?? 'acid';
}

export function phaseName(phase: string) {
  return phaseMap[phase]?.title ?? phase;
}

export function phaseNumber(phase: string) {
  return phaseMap[phase]?.number ?? '—';
}

export const trackLabels: Record<Track, string> = {
  llm: 'LLM',
  ml: 'ML',
  product: 'Product',
  mlops: 'MLOps'
};

export const levelTone: Record<Level, string> = {
  'เริ่มต้น': 'sky',
  'กลาง': 'amber',
  'สูง': 'coral'
};

export function readingTime(sections: { paragraphs?: string[]; bullets?: string[]; steps?: unknown[] }[]) {
  const words = sections.reduce((sum, section) => {
    const text = [...(section.paragraphs ?? []), ...(section.bullets ?? [])].join(' ');
    return sum + text.split(/\s+/).filter(Boolean).length;
  }, 0);
  return Math.max(3, Math.round(words / 180));
}

export function formatDate(date = new Date()) {
  return date.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
}
