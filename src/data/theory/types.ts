import type { Level } from '../types';

/**
 * ชั้นเนื้อหาความรู้ (Theory) — โหมดตำรา
 * แยกจาก modules (โครงเรียน + ฝึกปฏิบัติ) ให้อ่านแล้วเข้าใจหลักการแบบยาว-ลึก
 * ทุก lesson โยงกลับไปที่ module ที่เกี่ยวข้องด้วย `linkedModules`
 */

export interface TheoryFormula {
  title: string;      // ชื่อสูตร/สัญลักษณ์
  plain: string;      // สูตรในรูปแบบข้อความ (render เป็น mono block)
  note: string;       // ความหมายสั้น ๆ ของสูตร
}

export interface TheorySection {
  heading: string;
  paragraphs?: string[];                    // เนื้อหาแบบ long-form
  bullets?: string[];
  formula?: TheoryFormula;                  // ตาราง/บล็อกสูตร
  code?: { lang: string; content: string }; // pseudocode หรือโค้ดประกอบ
  callout?: { label: string; text: string }; // จุดที่ต้องจำ/ต้องระวัง
  example?: { title: string; body: string }; // ตัวอย่างนำไปใช้
}

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
  sections: TheorySection[];
  keywords: string[];             // ใช้ใน search
  updated: string;
}

export function lessonWordCount(lesson: Lesson): number {
  const count = lesson.sections.reduce((sum, section) => {
    const text = [
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
      section.formula?.note ?? '',
      section.callout?.text ?? '',
      section.example?.body ?? ''
    ].join(' ');
    return sum + text.split(/\s+/).filter(Boolean).length;
  }, 0);
  return count;
}

export function lessonMinutes(lesson: Lesson): number {
  return Math.max(4, Math.round(lessonWordCount(lesson) / 200));
}
