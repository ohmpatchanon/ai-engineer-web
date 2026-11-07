import type { Level } from '../types';
import type { CollectionEntry } from 'astro:content';

/**
 * ชั้นเนื้อหาความรู้ (Theory) — โหมดตำรา
 * แหล่งข้อมูลจริงคือ Markdown ใน src/content/theory/*.md
 * (Astro Content Layer collection `theory`, นิยามใน src/content.config.ts)
 * type นี้เป็น lesson-like object ที่ map มาจาก entry.data + entry.body
 * เพื่อให้ component เดิม (LessonCard ฯลฯ) รับ prop เดิมได้
 */

export type TheoryEntry = CollectionEntry<'theory'>;

export interface Lesson {
  id: string;                     // สั้น ไม่ซ้ำ ใช้เป็น key
  number: string;                 // 'T.01' — เรียงตามลำดับที่ควรอ่าน (หลักสูตรทฤษฎี)
  slug: string;                   // kebab-case, URL: /theory/<slug>
  phase: string;                  // phase id (foundations, core-ml, ...)
  title: string;                  // ภาษาไทย
  en: string;                     // ชื่ออังกฤษ/กำกับ
  summary: string;                // 1-2 ประโยค
  level: Level;
  prereqLessons: string[];        // slug ของทฤษฎีบทก่อนหน้าที่ควรอ่านก่อน (ว่าง = ไม่มี)
  linkedModules: string[];        // module slugs ที่เกี่ยวข้อง -> cross-link
  teaches: string[];              // สิ่งที่ผู้อ่านจะเข้าใจได้หลังอ่าน
  keywords: string[];             // ใช้ใน search
  updated: string;
  body?: string;                  // raw Markdown body (จาก entry.body) สำหรับนับคำ/นาที
}

/** Map แถว Content Layer entry ให้เป็น lesson-like object */
export function entryToLesson(entry: TheoryEntry): Lesson {
  return { ...entry.data, body: entry.body };
}

export function bodyWordCount(body: string): number {
  const chars = body.replace(/\s+/g, '').length;
  // Thai has no spaces between words — estimate words from characters (ตัวอักษร ÷ 5)
  return Math.round(chars / 5);
}

export function bodyMinutes(body: string): number {
  return Math.max(4, Math.round(bodyWordCount(body) / 150));
}

export function lessonWordCount(lesson: { body?: string } | string): number {
  const body = typeof lesson === 'string' ? lesson : (lesson.body ?? '');
  return bodyWordCount(body);
}

export function lessonMinutes(lesson: { body?: string } | string): number {
  const body = typeof lesson === 'string' ? lesson : (lesson.body ?? '');
  return bodyMinutes(body);
}
