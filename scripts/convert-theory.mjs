#!/usr/bin/env node
// Convert src/data/theory/*.ts lessons -> src/content/theory/*.md (Markdown body + frontmatter).
// Usage: node scripts/convert-theory.mjs  (Node >=22 with type stripping)
import { writeFile, mkdir, readdir } from 'node:fs/promises';
import { lessons } from '../src/data/theory/index.ts';

function fm(v) {
  if (Array.isArray(v)) return `[${v.map(s => JSON.stringify(s)).join(', ')}]`;
  if (typeof v === 'string') return JSON.stringify(v);
  return String(v);
}

function bodyOf(lesson) {
  const out = [];
  for (const s of lesson.sections) {
    out.push(`## ${s.heading}\n`);
    for (const p of (s.paragraphs ?? [])) out.push(p.trim());
    if (s.bullets?.length) {
      out.push(s.bullets.map(b => `- ${b}`).join('\n'));
    }
    if (s.formula) {
      out.push(`### สูตร: ${s.formula.title}\n\n${s.formula.plain}\n\n> ${s.formula.note}`);
    }
    if (s.code) {
      out.push(`\`\`\`${s.code.lang}\n${s.code.content}\n\`\`\``);
    }
    if (s.example) out.push(`**ตัวอย่าง — ${s.example.title}**\n\n${s.example.body}`);
    if (s.callout) out.push(`> [!${s.callout.label}]\n> ${s.callout.text}`);
    if (s.figure) out.push(`![${s.figure.alt ?? s.figure.title}](${s.figure.path})\n\n*${s.figure.title}${s.figure.caption ? ' — ' + s.figure.caption : ''}*`);
    out.push('');
  }
  return out.join('\n');
}

await mkdir('src/content/theory', { recursive: true });
for (const l of lessons) {
  const front = [
    '---',
    `id: ${fm(l.id)}`,
    `number: ${fm(l.number)}`,
    `slug: ${fm(l.slug)}`,
    `phase: ${fm(l.phase)}`,
    `title: ${fm(l.title)}`,
    `en: ${fm(l.en)}`,
    `summary: ${fm(l.summary)}`,
    `level: ${fm(l.level)}`,
    `prereqLessons: ${fm(l.prereqLessons)}`,
    `linkedModules: ${fm(l.linkedModules)}`,
    `teaches: ${fm(l.teaches)}`,
    `keywords: ${fm(l.keywords)}`,
    `updated: ${fm(l.updated)}`,
    '---', '',
  ].join('\n');
  await writeFile(`src/content/theory/${l.slug}.md`, front + bodyOf(l));
  console.log('wrote', l.slug);
}
