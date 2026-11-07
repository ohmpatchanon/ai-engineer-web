import { getCollection, getEntry } from 'astro:content';
import type { Lesson } from './types';
import { entryToLesson } from './types';

export type { Lesson, TheoryEntry } from './types';
export { lessonWordCount, lessonMinutes, bodyWordCount, bodyMinutes, entryToLesson } from './types';

/**
 * Shim แทน TS objects เดิม — ข้อมูลจริงอยู่ใน src/content/theory/*.md
 * ใช้ async helpers จาก Content Layer แทน sync array เดิม
 */
export async function getAllLessons(): Promise<Lesson[]> {
  const entries = await getCollection('theory');
  return entries
    .map(entryToLesson)
    .sort((a, b) => a.number.localeCompare(b.number, 'en', { numeric: true }));
}

export async function getLessonBySlug(slug: string): Promise<Lesson | undefined> {
  const entries = await getCollection('theory');
  const entry = entries.find((e) => e.data.slug === slug);
  return entry ? entryToLesson(entry) : undefined;
}

export async function getLessonEntryBySlug(slug: string) {
  const entries = await getCollection('theory');
  return entries.find((e) => e.data.slug === slug);
}

export async function lessonsByPhase(phase: string): Promise<Lesson[]> {
  return (await getAllLessons()).filter((l) => l.phase === phase);
}

export async function lessonSequence(): Promise<Lesson[]> {
  return getAllLessons();
}

// Re-export getEntry helper for callers that prefer it (id = filename = slug)
export { getEntry };
