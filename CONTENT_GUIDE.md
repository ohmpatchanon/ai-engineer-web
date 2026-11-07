# คู่มือเพิ่มและแก้เนื้อหา — CONTENT GUIDE

เว็บนี้ออกแบบให้ **เนื้อหาแยกจากโครงหน้าเว็บ** ข้อมูลทุกอย่างอยู่ใน `src/data/` ในรูปแบบ TypeScript ที่มี type ตรวจสอบ การเพิ่มบทเรียน, guide, lab, โปรเจกต์ หรือคำศัพท์ส่วนใหญ่คือการ "เพิ่ม object เข้า array" ไม่ต้องแตะหน้าเว็บเลย

> หลักการสำคัญ: ถ้าเพิ่มเนื้อหาแล้วตัวเลข (เช่น "28 modules") หรือลิงก์ภายในเพี้ยน แสดงว่าพลาด ตรงนี้รวบรวมขั้นตอนและ checklist ให้ตรวจ

---

## 1. ภาพรวมสถาปัตยกรรมเนื้อหา

```
src/data/types.ts          interface กลาง: Module, Phase, Guide, QuizQuestion, Level, Track...
src/data/modules/*.ts      28 modules แยกตาม phase (foundations, core, deep, llm, production, impact)
src/data/modules/index.ts  รวม modules ทั้งหมด -> modules[], moduleBySlug, moduleById
src/data/phases.ts         6 phases + tracks
src/data/paths.ts          4 learning paths
src/data/guides.ts         17 guides
src/data/exercises.ts      10 labs (quiz questions + interactive tools)
src/data/projects.ts       9 portfolio projects
src/data/interview.ts      64 interview questions
src/data/glossary.ts       105 glossary terms
src/data/resources.ts      49 resources
src/data/plan.ts           แผนเรียน 12 สัปดาห์
src/data/cheatsheets.ts    8 cheat sheets
src/content/theory/*.md    20 บททฤษฎี (Markdown + frontmatter — ดูข้อ 2.12)
src/content.config.ts      นิยาม Content Layer collection `theory`
src/data/theory/*          shim (types + async helpers) บน collection ข้างบน
src/pages/**/              route ที่ generate จากข้อมูล (getStaticPaths)
```

Route ที่ข้อมูลเป็นตัวกำหนด: `/modules/[slug]`, `/guides/[slug]`, `/exercises/[slug]`, `/projects/[slug]`, `/paths/[slug]`, `/theory/[slug]` — เพิ่ม entry ใน array ข้อมูล (หรือไฟล์ `.md` ใน `src/content/theory/` สำหรับ theory) แล้วหน้าใหม่จะถูกสร้างให้อัตโนมัติตอน build

---

## 2. Schema reference

### 2.1 Module (ใน `src/data/modules/<phase>.ts`)

```ts
{
  id: 'py01',              // สั้น ไม่ซ้ำ ใช้เป็น key เก็บใน localStorage
  number: '01',            // เลขแสดงผล
  slug: 'python-for-ai',   // kebab-case ใช้เป็น URL: /modules/python-for-ai
  phase: 'foundations',    // ต้องตรงกับ id ใน phases.ts
  title: 'Python สำหรับงาน AI',          // ภาษาไทย
  en: 'Python for AI',                  // ชื่ออังกฤษ/กำกับ
  summary: 'ประโยคสั้น ๆ สำหรับการ์ด',   // 1-2 ประโยค
  why: 'ทำไมต้องเรียนบทนี้',              // 3-4 ประโยค
  mentalModel: 'ภาพจำหลักของบท',        // 1-2 ประโยค
  duration: '~2 สัปดาห์',
  level: 'เริ่มต้น',        // ต้อง: 'เริ่มต้น' | 'กลาง' | 'สูง'
  tracks: ['llm', 'ml'],   // ต้องอยู่ใน: 'llm' | 'ml' | 'product' | 'mlops'
  outcomes: ['สิ่งที่ทำได้หลังเรียน', '...'],      // 3-4 ข้อ
  topics: [{ title: 'หัวข้อ', detail: 'รายละเอียด' }, ...],
  lab: 'ลิงก์ไป lab ที่เกี่ยวข้อง (ถ้ามี)',             // เช่น /exercises/prompt-lab
  deliverable: 'ชิ้นงานที่ต้องส่งของบทนี้',
  checkpoint: ['คำถามเช็คว่าเข้าใจจริงหรือยัง', '...'],  // 2-3 ข้อ
  mistakes: ['ความเข้าใจผิดที่พบบ่อย', '...'],         // 2-3 ข้อ
  resources: [{ title: 'ชื่อ', url: 'https://...', kind: 'เอกสารทางการ' }, ...],
  keywords: ['python', 'typing'],       // ใช้ใน search.json
  quiz: [
    { question: 'คำถาม', options: ['ก', 'ข', 'ค', 'ง'], answer: 2, explanation: 'เพราะว่า...' }
    // answer คือ index ใน options (เริ่ม 0), ควรมีอย่างน้อย 3 ข้อ
  ]
}
```

ข้อกำหนด:
- `slug` ต้อง unique ทั่วทั้ง `modules/` และเป็น kebab-case
- `number` และ `id` ไม่ควรซ้ำกัน
- เพิ่มไฟล์ phase ใหม่ได้ถ้าต้องการ แต่ต้องไป `import` + spread ใน `src/data/modules/index.ts`

### 2.2 Phase (ใน `src/data/phases.ts`)

```ts
{ id: 'foundations', number: '01', title: 'ฐานรากที่มั่นคง', en: 'Foundations',
  weeks: 'สัปดาห์ 1–5', description: '...', outcome: '...', color: 'acid' }
```

`color` ต้องเป็นหนึ่งใน: `acid` `amber` `sky` `violet` `coral` `sand` (มี class `.tag--*` และ `.phase-dot--*` ให้ครบ — ถ้าเพิ่มสีใหม่ต้องเพิ่ม CSS ด้วย)

### 2.3 LearningPath (ใน `src/data/paths.ts`)

```ts
{ slug: 'llm-engineer', title: 'LLM / GenAI Engineer', tagline: '...',
  description: '...', weeks: '22–26 สัปดาห์', level: 'เริ่มต้น–กลาง',
  bestFor: [...], outcomes: [...], moduleSlugs: ['python-for-ai', ...],
  capstone: 'โปรเจกต์สุดท้าย', color: 'acid', track: 'llm' }
```

- `moduleSlugs` ทุกตัวต้องอ้างถึง `slug` ของ module ที่มีจริง (มี script ตรวจได้ใน checklist ข้อ 8)

### 2.4 Guide (ใน `src/data/guides.ts`)

```ts
{
  slug: 'prompt-engineering-guide', title: 'เขียน prompt ให้ทำงานเป็นระบบ',
  dek: 'คำอธิบายสั้นหน้าแรก', category: 'Prompt Engineering',
  readTime: '12 นาที', updated: 'พ.ย. 2026', tags: ['prompt', 'LLM'],
  sections: [
    { heading: 'หัวข้อ', paragraphs: ['ย่อหน้า 1', 'ย่อหน้า 2'] },          // หรือ
    { heading: 'สเต็ป', steps: [{ title: 'ขั้น 1', body: '...' }] },        // หรือ
    { heading: 'ตัวอย่างโค้ด', code: { lang: 'python', content: 'print(1)' } },
    { heading: 'ข้อควรระวัง', callout: { label: 'STOP', text: '...' } }     // หรือ
  ]
}
```

`GuideSection` มี optional fields: `paragraphs`, `bullets`, `steps`, `callout`, `code` — ใช้อย่างน้อย 1 อย่างต่อ section หน้า render เรียงตามลำดับใน array

### 2.5 Exercise / Lab (ใน `src/data/exercises.ts`)

```ts
{
  slug: 'prompt-lab', title: 'Prompt Quality Lab',
  en: 'Analyze and improve a prompt',
  kind: 'prompt',            // 'quiz' | 'prompt' | 'chunker' | 'worksheet' | 'canvas' | 'calculator' | 'blueprint'
  category: 'LLM',
  difficulty: 'กลาง',       // 'เริ่มต้น' | 'กลาง' | 'สูง'
  time: '15 นาที',
  summary: '...',
  skills: ['prompt engineering'],
  moduleSlug: 'prompt-context-engineering',   // ต้องมีจริง
  questions: [...]          // เฉพาะ kind: 'quiz' — array QuizQuestion
}
```

Lab ประเภท interactive ต้องมี **component** ลงทะเบียนใน `labMap` ที่ `src/pages/exercises/[slug].astro` (ดูหัวข้อ 5)

### 2.6 Project (ใน `src/data/projects.ts`)

```ts
{ slug: 'custom-finetuned-channel', title: '...', en: '...', level: 'กลาง–สูง',
  time: '3–4 สัปดาห์', category: 'Fine-tuning', summary: '...', why: '...', user: '...',
  skills: [...], requirements: [...],
  milestones: [{ week: 'สัปดาห์ 1', title: '...', body: '...' }],
  rubric: [{ label: 'เกณฑ์', detail: 'สิ่งที่ต้องเห็น' }],
  stretch: [...], stack: [...] }
```

### 2.7 InterviewQuestion (ใน `src/data/interview.ts`)

```ts
{ id: 'lc-01', category: 'Machine Learning', level: 'กลาง', q: 'คำถาม', a: 'แนวทางตอบ', tags: ['metric'] }
```

`category` ต้องอยู่ใน `interviewCategories` (ช่วงบนสุดของไฟล์). `id` ต้อง unique.

### 2.8 GlossaryTerm (ใน `src/data/glossary.ts`)

```ts
{ term: 'Retrieval-Augmented Generation (RAG)', th: 'การสร้างคำตอบโดยอาศัยการค้นคืน',
  category: 'RAG & Search', definition: 'คำอธิบายภาษาไทยที่ใช้การจริง...' }
```

- `term` ต้อง unique — ใช้เป็น anchor ของหน้า (`id` สร้างจาก `term` อัตโนมัติ)
- `category` ต้องอยู่ใน `glossaryCategories`

### 2.9 Resource (ใน `src/data/resources.ts`)

```ts
{ title: 'ชื่อ', url: 'https://...', category: 'คอร์สเรียน', description: '...',
  free: true, level: 'เริ่มต้น', tags: ['ML'] }
```

- `category` ต้องอยู่ใน `resourceCategories`; `free` เป็น boolean; `level` เป็นข้อความอิสระ

### 2.10 PlanWeek (ใน `src/data/plan.ts`)

```ts
{ week: 1, title: 'เครื่องมือและนิสัยการเขียนโค้ด', theme: 'Python + Engineering',
  modules: ['python-for-ai', 'software-engineering'], optional: ['ai-security-privacy'],
  hours: '8–10 ชั่วโมง', deliverable: '...', checkpoint: '...' }
```

- `week` เรียง 1..12; `modules` / `optional` ต้องเป็น slug ที่มีจริงใน modules

### 2.11 CheatGroup / CheatItem (ใน `src/data/cheatsheets.ts`)

```ts
{ id: 'metrics', title: 'Metric ที่ต้องรู้', en: 'ML Metrics', intro: '...',
  items: [{ title: 'Precision', detail: '...' }] }
// หรือ item แบบมีโค้ด:
{ title: 'อ่านไฟล์ใหญ่', code: "with open('data.jsonl') as f:\n    for line in f: ..." }
```

`id` ใช้เป็น anchor ของหน้าและปุ่มกระโดด — ต้อง unique

### 2.12 Theory Lesson — ชั้นความรู้เชิงลึก (Markdown: `src/content/theory/*.md`)

ชั้นทฤษฎีเป็น "โหมดตำรา" แยกจาก modules ที่เน้นลงมือทำ ข้อมูลจริงอยู่ใน **Astro Content Layer** — ไฟล์ Markdown หนึ่งไฟล์ต่อหนึ่งบทที่ `src/content/theory/<slug>.md` นิยาม collection ที่ `src/content.config.ts` (`theory`, loader `glob({ pattern: '**/*.md', base: './src/content/theory' })`) และ schema frontmatter แบบเดียวกับด้านล่าง ส่วน `src/data/theory/types.ts` + `index.ts` เป็น shim ที่ map `entry.data + entry.body` ให้เป็น lesson-like object พร้อม helper `getAllLessons()` / `getLessonBySlug()` / `lessonMinutes()` / `lessonWordCount()` (นับจาก `body`)

```md
---
id: "t-rag"               # สั้น ไม่ซ้ำ
number: "T.13"            # เรียงตามลำดับการอ่าน (T.01 →)
slug: "rag-inside"        # kebab-case, URL: /theory/<slug> (ชื่อไฟล์ต้องตรงกับ slug)
phase: "llm-engineering"  # phase id จาก phases.ts (string อิสระ)
title: "RAG ภายในระบบ: ..."
en: "Retrieval-Augmented Generation"
summary: "1-2 ประโยค"
level: "กลาง"             # ต้อง: 'เริ่มต้น' | 'กลาง' | 'สูง' (z.enum ใน schema)
prereqLessons: ["embeddings-and-search", "how-llms-behave"]  # slug ของทฤษฎีที่ควรอ่านก่อน
linkedModules: ["rag-systems", "llm-evaluation"]             # module slugs ที่เกี่ยวข้อง
teaches: ["สิ่งที่ผู้อ่านจะเข้าใจได้หลังอ่าน", "..."]
keywords: ["RAG", "chunking"]
updated: "ต.ค. 2026"
---
## ชื่อหัวข้อ (H2 = TOC หนึ่งข้อ + section หนึ่งส่วน)
ย่อหน้าอธิบายยาวแบบ long-form ...
- bullet ได้ตามปกติ
```

**รูปประโยค Markdown ที่ใช้ใน body** (หน้า `/theory/[slug]` render ตรง ๆ ผ่าน `Content`):

| รูปแบบ | ใช้เมื่อไร |
| --- | --- |
| `## หัวข้อ` (H2) | หัวข้อหลักของบท — ถูกดึงเป็น TOC อัตโนมัติ (`headings` จาก `entry.render()`, anchor = slug ของหัวข้อ) |
| `### สูตร: <ชื่อสูตร>` (H3) + บรรทัดถัดไปเป็นสูตร plain + `> คำอธิบาย` | บล็อกสูตร — `h3` แสดงเป็น mono สี acid, บรรทัดหลัง `h3` ถูก style เป็น mono block, blockquote ที่ตามมาคือคำอธิบายสูตร |
| `> [!TAKEAWAY] / > [!STOP: ...]` + `> ข้อความ` | callout จุดจำ/ต้องระวัง (render เป็น blockquote) |
| `**ตัวอย่าง — <ชื่อ>**` + ย่อหน้า | ตัวอย่าง/อุปมาในเนื้อความ |
| `![alt](/diagrams/<ชื่อ>.svg)` + บรรทัดถัดไป `*<caption>*` | ไดอะแกรม SVG ใน `public/diagrams/` (ปัจจุบัน 10 ไฟล์) — path ต้องเริ่ม `/diagrams/` และไฟล์ต้องมีจริงใน `public/` |
| ```` ```python / ```pytorch / ```json / ```text ```` | โค้ดตัวอย่าง — ต้องปิด fence ให้ครบ ไม่ใช้ indent-code |
| `- ข้อ` | bullet list |

**กฎการเขียนเนื้อหาทฤษฎี** (จากความต้องการของโปรเจกต์):
- ต้อง**ละเอียด-อัดแน่น**: 1 บทควรมีหลายหัวข้อ แต่ละหัวข้อยาวพอให้ "อ่านแล้วเข้าใจ" เป็นหลักการ ไม่ใช่ลิสต์ bullet สั้น ๆ
- **เข้าใจง่าย**: มี analogies, ตัวอย่าง, สูตรพร้อมคำอธิบายเป็นภาษาไทย ไม่ใช้ศัพท์เปล่า
- **ลำดับชัด**: `number` เรียงต้องเรียงต่อจากบทก่อนหน้าใน sequence และ `prereqLessons` ต้องมีทุกบท (บทแรกเป็น `[]`)
- **ถูกต้องตามทฤษฎี**: ตัวเลข/สูตร/อ้างอิงต้องถูก หลีกเลี่ยงอักขระผิดภาษา (ดู checklist) และถ้าอธิบาย trade-off ให้บอกทั้งสองด้าน
- **โยงสู่การปฏิบัติ**: `linkedModules` ให้เกิด cross-link ไป module/lab ที่ต้องลงมือทำ

---

## 3. วิธีเพิ่ม module ใหม่
1. เปิดไฟล์ของ phase ที่ตรง (`src/data/modules/foundations.ts` สำหรับฐานราก ฯลฯ)
2. กำหนด `id` (สั้นไม่ซ้ำ), `number`, `slug` (kebab-case ไม่ซ้ำ)
3. ใส่ content ครบทุก field (ดู schema ข้อ 2.1) — TypeScript จะฟ้องถ้าใส่ผิดแบบ
4. มี `quiz` อย่างน้อย 3 ข้อ และ `checkpoint` 2-3 ข้อ
5. ถ้าเป็นไฟล์ phase ใหม่: สร้างไฟล์แล้วไปเพิ่ม `import` + spread ใน `src/data/modules/index.ts`

**สิ่งที่ต้องอัปเดตเมื่อจำนวนเปลี่ยน** (ค้นหาแล้วแก้ให้ตรง):
- `src/components/Footer.astro` — ข้อความ "หลักสูตร 28 modules"
- `src/pages/index.astro`, `src/pages/modules/index.astro` — description/hero ที่เขียนตัวเลขตายตัว
- `src/components/SearchDialog.astro` — ตัวเลขในลิงก์แนะนำ
- `src/pages/progress.astro` — ข้อความ "28 modules" (แนะนำให้แทนด้วย `modules.length` ถ้าแก้ได้)
- `src/pages/search.json.ts` — description ของหน้า static

> แนวทางที่ดีกว่า: แทนที่ตัวเลขตายตัวด้วย `{modules.length}` ใน template เสมอ เพื่อไม่ต้องไล่แก้

## 4. วิธีเพิ่ม guide

1. เพิ่ม object ใน `src/data/guides.ts` (schema ข้อ 2.4)
2. เลือก section shape ตามเนื้อหา: ทฤษฎีใช้ `paragraphs`/`bullets`, วิธีทำใช้ `steps`, โค้ดใช้ `code`, ข้อควรระวังใช้ `callout`
3. หน้า `/guides/[slug]` render ให้อัตโนมัติ — ไม่ต้องแก้หน้า
4. ถ้าต้องลิงก์ข้ามไป module ใช้เส้นทาง `/modules/<slug>` และตรวจว่า slug นั้นมีจริง

### วิธีเพิ่มบททฤษฎี (Theory lesson)

1. สร้างไฟล์ใหม่ `src/content/theory/<slug>.md` — ชื่อไฟล์ (ไม่รวม `.md`) ต้องตรงกับ frontmatter `slug` เพราะ Content Layer ใช้ชื่อไฟล์เป็น `id` และใช้ `slug` สร้าง URL `/theory/<slug>`
2. ใส่ frontmatter ครบทุก field ตาม schema ข้อ 2.12 — กำหนด `id`/`slug` ใหม่ และ `number` เป็นลำดับถัดไปของ sequence (`T.01`, `T.02`, ...) ไม่ต้องเพิ่มไฟล์ phase ใด ๆ อีก
3. เติม `prereqLessons` (slug ของบทที่ควรอ่านก่อน ถ้าเป็นบทเปิดใช้ `[]`) และ `linkedModules` (ต้องเป็น module slug ที่มีจริง)
4. เขียน body เป็น Markdown ตามตารางรูปประโยคในข้อ 2.12 ให้ละเอียด อัดแน่น เข้าใจง่าย (ต้องถูกต้องตามทฤษฎี + ไม่มีอักขระหลุดภาษา) — หัวข้อหลักใช้ `##`, สูตรใช้ `### สูตร: ...`, รูปใช้ `![alt](/diagrams/*.svg)`, โค้ดใช้ fenced code block
5. ไม่ต้องแก้ `src/content.config.ts` (collection โหลด `*.md` ทุกไฟล์อัตโนมัติ), `src/data/theory/*` (shim อ่าน collection), หรือหน้าเว็บใด ๆ — route, TOC, `/theory` index, `/search.json` และหน้าแรก (feature 3 บทแรก) อ่านจาก collection เอง
6. ตรวจสอบ: `npm run build`, `npm run check` — build จะ fail ถ้า frontmatter ขาด field ผิด type, `slug` ซ้ำ, หรือไฟล์รูปใน `public/diagrams/` หาย
7. ตรวจ slug ซ้ำด้วย: `grep -h "^slug:" src/content/theory/*.md | sort | uniq -d` (ควรว่าง) และตรวจว่าไดอะแกรมที่อ้างถึงมีไฟล์จริง: `grep -rhoE "/diagrams/[a-z0-9-]+\.svg" src/content/theory | sort -u` เทียบกับ `ls public/diagrams/`

## 5. วิธีเพิ่ม lab แบบ interactive
Lab ที่เป็น `kind` ไม่ใช่ `quiz` ต้องมี component ที่คล้าย trait ว่า "เครื่องมือในเบราว์เซอร์":

1. สร้างไฟล์ใหม่ `src/components/labs/<ชื่อLab>.astro`
2. component ต้อง:
   - มี root `<section class="lab" data-xxx-lab>`
   - ใช้คลาสร่วมจาก `src/styles/global.css`: `.lab__bar` (แถบบน), `.lab__body`, `.lab__grid--side` / `.lab__grid--2`, `.lab__field`, `.lab__result`, `.lab__score`, `.lab__meter`, `.lab__checklist`, `.lab__chips`, `.lab__output`, `.lab__warning`, `.lab__actions`, `.lab__hint`
   - มี `<script>` (TypeScript ได้) ที่สโคป `querySelector` ใน root ของตัวเองเท่านั้น อย่าใช้ selector ระดับ global
   - เก็บ state ใน `localStorage` ด้วยคีย์ `aie:lab:<ชื่อ>` (เช่น `aie:lab:prompt`) และอ่านกลับตอนโหลด
   - ไม่เรียก API ภายนอก — ข้อมูลไม่ควรออกจากเบราว์เซอร์
3. ลงทะเบียนใน `labMap` ที่ `src/pages/exercises/[slug].astro`:

```ts
const labMap: Record<string, any> = {
  prompt: PromptLab,
  chunker: ChunkLab,
  worksheet: EvalWorksheet,
  canvas: SystemCanvas,
  blueprint: AgentBlueprint,
  calculator: TokenCalculator,
  // mylab: MyLab,
};
```

4. ถ้า `kind` เป็นค่าใหม่ ต้องเพิ่มเข้า union ใน interface `Exercise` ด้วย
5. Accessibility: input ต้องมี `<label>` (หรือ `aria-label`), ผลลัพธ์ที่เปลี่ยนได้ควรมี `aria-live="polite"`, ปุ่มต้องเป็น `<button>` จริง

### การฝังข้อมูลจาก Astro เข้า script

ตัวแปรใน frontmatter **ไม่** เข้าถึงได้จาก `<script>` โดยตรง (script เป็น module แยก) — ใช้วิธีฝังข้อมูลเป็น JSON:

```astro
<!-- ใน template -->
<script type="application/json" data-my-lab data is:inline set:html={JSON.stringify(myData)}></script>

<!-- ใน client script -->
<script>
  const myData = JSON.parse(root.querySelector('[data-my-lab]')?.textContent || '{}');
</script>
```

หลีกเลี่ยง `define:vars` เพราะทำให้ script กลายเป็น inline JS และเสีย type check

## 6. วิธีเพิ่มโปรเจกต์ / คำถามสัมภาษณ์ / คำศัพท์ / resource / สัปดาห์ / cheatsheet

ทุกอย่างเป็นขั้นตอนเดียวกัน:

1. เพิ่ม object เข้า array ในไฟล์ของมัน (ดู schema ข้อ 2.6–2.11)
2. กำหนด `slug`/`id`/`term` ที่ unique
3. ใช้ `category` ที่อยู่ใน array `*Categories` ของไฟล์นั้นเสมอ (filter บนหน้าอ่านจาก array นี้)
4. ตรวจ `moduleSlug` / `moduleSlugs` ที่อ้างไป modules\
5. ถ้าจำนวนเปลี่ยน ให้แก้ตัวเลขตายตัวตามรายชื่อในข้อ 3

## 7. Design tokens และ class ที่ใช้ซ้ำ

ตัวแปร CSS หลักใน `src/styles/global.css`:

| ตัวแปร | ความหมาย |
| --- | --- |
| `--acid` | สีเน้นเขียวมะนาว (`#d3fa7c`) ใช้ accent, link เน้น, ตัวเลขสำคัญ |
| `--bg`, `--panel`, `--bg-soft`, `--panel-2` | พื้นหลัง/กล่อง ไล่ระดับ |
| `--line`, `--line-strong` | เส้นแบ่ง |
| `--text`, `--muted`, `--faint` | ระดับความเข้มของข้อความ |
| `--font-display` | Space Grotesk (หัวเรื่องใหญ่) |
| `--font-sans` | IBM Plex Sans Thai (เนื้อความ) |
| `--font-mono` | JetBrains Mono (label/ตัวเลข/โค้ด) |

Class ที่ใช้บ่อย:
- `.container`, `.container--narrow` — กำหนดความกว้าง
- `.section`, `.section--tight`, `.section--line`
- `.page-hero`, `.page-hero__grid`, `.eyebrow`, `.lead`
- `.panel`, `.panel--hover`, `.panel--2`
- `.btn .btn--primary .btn--ghost .btn--small`
- `.tag`, `.tag--acid/-amber/-sky/-coral/-sand/-violet`, `.chip`, `.mono .micro .tiny .faint .muted .text-acid`
- `.reveal` — fade-in ตอน scroll (IntersectionObserver ใน BaseLayout)

ภาษาและโทน:
- ภาษาไทยเป็นหลัก ศัพท์เทคนิคคงรูปอังกฤษ (เช่น "evaluation" ไม่ใช่ "การประเมินผล" เสมอไป ถ้าใช้ศัพท์ไทยต้องสอดคล้องกับ glossary)
- โทนเป็น field manual: กระชับ ไม่เวิ่นเว้อ ไม่ขายของ ไม่ใช้คำฟูมฟาย
- คำภาษาอังกฤษในเนื้อหากันอักขระผิดชุด (ดู checklist ข้อ 8)

## 8. Checklist ก่อน commit

```bash
# 1. build ต้องผ่าน และ generate ทุก route
npm run build

# 2. type check
npm run check

# 3. ตรวจ slug/term/id ซ้ำ
grep -rhoE "slug: '[a-z0-9-]+'" src/data | sort | uniq -d
grep -oE "id: '[a-z0-9-]+'" src/data/interview.ts | sort | uniq -d

# 4. ตรวจอักขระภาษาต่างประเทศหลุด (รัสเซีย/เกาหลี/จีน/สเปน)
grep -rnP "[\x{0400}-\x{04FF}\x{AC00}-\x{D7A3}\x{4E00}-\x{9FFF}\x{3040}-\x{30FF}]" src --include="*.ts" --include="*.astro"

# 5. ตรวจ moduleSlug ที่อ้างถึงมีจริง (ตัวอย่าง exercises)
grep -oE "moduleSlug: '[^']+'" src/data/exercises.ts | sort -u > /tmp/refs.txt
grep -rhoE "slug: '[a-z0-9-]+'" src/data/modules/*.ts | sort -u > /tmp/slugs.txt
comm -23 /tmp/refs.txt /tmp/slugs.txt   # ควรว่าง

# 6. ตรวจลิงก์ภายใน: เปิด dev แล้วท่องทุกหน้า หรือเทียบ slug กับ route
```

นอกจากนี้:
- ตัวเลขแสดงผลใน footer/search/hero ควรตรงกับจำนวนจริง (แทนที่ด้วย `*.length` ถ้าเป็นไปได้)
- เนื้อหาทุกชิ้นต้องมี `why`/`summary` ที่บอกว่า "ใช้จริงเมื่อไร" — ห้ามเติมเพื่อให้ดูเยอะ
- ความเห็นต่างจากข้อเท็จจริงต้องระบุให้ชัด

## 9. localStorage keys

| คีย์ | เก็บอะไร | ใช้งานที่ |
| --- | --- | --- |
| `aie:modules` | `string[]` ของ module id ที่เรียนจบ | BaseLayout (AIE API), progress, module page |
| `aie:plan` | `number[]` ของสัปดาห์ที่ส่งงานแล้ว | plan.astro, progress.astro |
| `aie:assessment` | `{score, goal, hours, startSlug, weeks}` | start.astro, progress.astro |
| `aie:theme` | `'dark' \| 'light'` | BaseLayout |
| `aie:lab:prompt` | ข้อความ prompt ที่บันทึกไว้ | PromptLab |
| `aie:lab:eval`, `aie:lab:canvas`, `aie:lab:agent` | JSON state ของ lab | EvalWorksheet / SystemCanvas / AgentBlueprint |

API ส่วนกลาง `window.AIE` (เซ็ตใน BaseLayout):
- `AIE.getModules(): string[]`
- `AIE.setModules(ids: string[])`
- `AIE.toggleModule(id): boolean`
- `AIE.toast(message)`

Event: `window.addEventListener('aie:progress', ...)` — ปล่อยเมื่อความคืบหน้าเปลี่ยน (เช่นหน้า /progress render ใหม่)

> ข้อควรระวัง: คีย์ทุกตัวลงท้ายด้วย namespace `aie:` เพื่อไม่ชนกับไลบรารีอื่น และโค้ดที่อ่านควร `try/catch` เพราะ localStorage อาจถูกปิดหรือเต็ม

## 10. การเพิ่มฟีเจอร์ใหม่

- **เพิ่มหน้า static** → สร้างไฟล์ใน `src/pages/` ใช้ `BaseLayout` + ของตัวเอง, ใส่ลิงก์ใน `Header.astro` / `Footer.astro` / `search.json.ts` เพื่อให้ค้นเจอ
- **เพิ่มข้อมูลแบบใหม่ (เช่น "คอร์สติวเตอร์")** → สร้าง `src/data/<ชื่อ>.ts` พร้อม interface (ควรอยู่ใน `types.ts` หรือไฟล์นั้น), export array + helper การ lookup (เช่น `moduleBySlug`), สร้างหน้า index/detail ตามแบบของ module/project
- **เพิ่ม client interaction** → ใช้องค์ประกอบเดิม: script ที่สโคปใน component, เก็บ state ใน `aie:*`, ถ้าต้องแชร์ข้ามหน้าให้ใช้ `window.AIE` หรือ dispatch event
- **เพิ่ม page ที่ต้องใช้ข้อมูลถูกต้องล่าสุด** — อย่าลืมว่าตัวเลขใน footer/search/hero ต้องตรง (ดูข้อ 3)
- ทุกอย่างต้อง **static** — ห้ามเพิ่ม dépendency ที่ต้อง backend, database หรือ API ภายนอก

---

*เอกสารนี้สอดคล้องกับเวอร์ชันปัจจุบันของโค้ด — ถ้า schema เปลี่ยน อย่าลืมอัปเดตที่นี่ด้วย*
