import type { Lesson } from './types';
export type { Lesson, TheorySection, TheoryFormula } from './types';
export { lessonWordCount, lessonMinutes } from './types';

import { foundationLessons } from './foundations';
import { coreLessons } from './core';
import { deepLessons } from './deep';
import { llmLessons } from './llm';
import { llmAdvancedLessons } from './llm_advanced';
import { productionLessons } from './production';
import { impactLessons } from './impact';

const allLessons: Lesson[] = [
  ...foundationLessons,
  ...coreLessons,
  ...deepLessons,
  ...llmLessons,
  ...llmAdvancedLessons,
  ...productionLessons,
  ...impactLessons
] as Lesson[];

// เรียงตามหมายเลขบท (T.xx) เพื่อให้ T.20 อยู่ท้ายลำดับเสมอ ไม่ว่าจะอยู่ในไฟล์ไหน
export const lessons: Lesson[] = [...allLessons].sort((a, b) => a.number.localeCompare(b.number, 'en', { numeric: true }));

export const lessonBySlug = Object.fromEntries(lessons.map((l) => [l.slug, l])) as Record<string, Lesson>;

export function lessonsByPhase(phase: string): Lesson[] {
  return lessons.filter((l) => l.phase === phase);
}

export function lessonSequence(): Lesson[] {
  // เรียงตามหมายเลขบท (T.xx) เพื่อใช้แสดงลำดับการอ่าน
  return [...lessons].sort((a, b) => a.number.localeCompare(b.number, 'en', { numeric: true }));
}
