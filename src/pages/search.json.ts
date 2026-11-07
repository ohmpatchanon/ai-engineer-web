import { modules } from '../data/modules';
import { lessons } from '../data/theory';
import { guides } from '../data/guides';
import { exercises } from '../data/exercises';
import { projects } from '../data/projects';
import { paths } from '../data/paths';
import { glossary } from '../data/glossary';
import { interviewQuestions } from '../data/interview';

export const GET = () => {
  const items = [
    ...modules.map((m) => ({
      title: m.title,
      subtitle: m.en,
      url: `/modules/${m.slug}`,
      type: 'Module',
      description: m.summary,
      keywords: [m.en, ...m.keywords, m.phase, m.level].join(' ')
    })),
    ...lessons.map((l) => ({
      title: l.title,
      subtitle: `${l.number} · ${l.en}`,
      url: `/theory/${l.slug}`,
      type: 'Theory',
      description: l.summary,
      keywords: [l.en, ...l.keywords, l.phase, ...l.linkedModules].join(' ')
    })),
    ...guides.map((g) => ({
      title: g.title,
      subtitle: g.category,
      url: `/guides/${g.slug}`,
      type: 'Guide',
      description: g.dek,
      keywords: [g.category, ...g.tags].join(' ')
    })),
    ...exercises.map((e) => ({
      title: e.title,
      subtitle: e.en,
      url: `/exercises/${e.slug}`,
      type: 'Lab',
      description: e.summary,
      keywords: [e.category, e.difficulty, ...e.skills].join(' ')
    })),
    ...projects.map((p) => ({
      title: p.title,
      subtitle: p.en,
      url: `/projects/${p.slug}`,
      type: 'Project',
      description: p.summary,
      keywords: [p.category, p.level, ...p.skills].join(' ')
    })),
    ...paths.map((p) => ({
      title: p.title,
      subtitle: p.tagline,
      url: `/paths/${p.slug}`,
      type: 'Path',
      description: p.description,
      keywords: [p.level, ...p.bestFor].join(' ')
    })),
    ...glossary.map((term) => ({
      title: term.term,
      subtitle: term.th,
      url: `/glossary/#${term.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      type: 'Term',
      description: term.definition,
      keywords: [term.category, term.th].join(' ')
    })),
    { title: 'Roadmap', subtitle: '26 สัปดาห์', url: '/roadmap', type: 'Page', description: 'เส้นทางเรียน 6 phase พร้อมบันทึกความคืบหน้า', keywords: 'roadmap curriculum' },
    { title: 'เริ่มตรงนี้', subtitle: 'Self assessment', url: '/start', type: 'Page', description: 'ตอบคำถาม 6 ข้อเพื่อหาจุดเริ่มต้นและเส้นทางที่เหมาะกับคุณ', keywords: 'start beginner assessment' },
    { title: 'Projects', subtitle: 'Portfolio briefs', url: '/projects', type: 'Page', description: 'โจทย์โปรเจกต์พร้อม milestone และ rubric สำหรับ portfolio', keywords: 'project portfolio' },
    { title: 'Interview Bank', subtitle: `${interviewQuestions.length} questions`, url: '/interview', type: 'Page', description: 'คำถามสัมภาษณ์ AI Engineer พร้อมแนวทางตอบ', keywords: 'interview job career' },
    { title: 'Glossary', subtitle: `${glossary.length} terms`, url: '/glossary', type: 'Page', description: 'อภิธานศัพท์ AI ภาษาไทย–อังกฤษ', keywords: 'glossary dictionary' },
    { title: 'Resources', subtitle: 'คอร์สและเครื่องมือ', url: '/resources', type: 'Page', description: 'แหล่งเรียนที่คัดสรรสำหรับ AI Engineer', keywords: 'resources courses books' },
    { title: 'Study Plan', subtitle: '12 สัปดาห์', url: '/plan', type: 'Page', description: 'แผนเรียน 12 สัปดาห์แบบทำไปด้วยทำงานไปด้วย', keywords: 'plan schedule study' },
    { title: 'Cheatsheets', subtitle: 'Quick reference', url: '/cheatsheets', type: 'Page', description: 'สรุป metric, prompt, RAG และ system design สำหรับทบทวนเร็ว', keywords: 'cheatsheet reference' }
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
