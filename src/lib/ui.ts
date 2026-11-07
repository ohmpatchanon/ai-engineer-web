import { phases } from '../data/phases';
import type { Level, Track } from '../data/types';

export const phaseMap = Object.fromEntries(phases.map((p) => [p.id, p]));

export function phaseColor(phase: string) {
  return phaseMap[phase]?.color ?? 'acid';
}

export function phaseName(phase: string) {
  return phaseMap[phase]?.title ?? phase;
}

/** Escape a string for safe interpolation into HTML (e.g. innerHTML templates). */
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch] || ch));
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
  // Thai has no spaces between words, so whitespace tokenisation under-counts.
  // 180 wpm is an EN-equivalent pacing figure; the 3-minute floor keeps Thai
  // estimates conservative rather than understating reading time.
  const WORDS_PER_MINUTE = 180;
  const words = sections.reduce((sum, section) => {
    const text = [...(section.paragraphs ?? []), ...(section.bullets ?? [])].join(' ');
    return sum + text.split(/\s+/).filter(Boolean).length;
  }, 0);
  return Math.max(3, Math.round(words / WORDS_PER_MINUTE));
}
