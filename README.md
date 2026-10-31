# Road to AI Engineer

หลักสูตร AI Engineer ภาษาไทยแบบ self-paced — ตั้งแต่พื้นฐาน Python ถึงระบบ LLM บน production พร้อมทฤษฎีเชิงลึก, roadmap, interactive labs, โจทย์โปรเจกต์, คลังคำถามสัมภาษณ์ และ cheat sheets

> เป้าหมายของโปรเจกต์นี้ไม่ใช่แค่ "เว็บอ่านเนื้อหา" แต่เป็น **field manual** ที่บอกว่าควรเรียนอะไร เรียงลำดับอย่างไร และจะรู้ได้อย่างไรว่าเข้าใจจริง

---

## เนื้อหาที่มีในเว็บ

| ส่วน | จำนวน | เส้นทาง |
| --- | --- | --- |
| Modules (บทเรียน) | 28 บท ใน 6 phases | `/modules`, `/modules/[slug]` |
| ทฤษฎี (ความรู้เชิงลึก) | 19 บท เรียงตามลำดับ + prereq | `/theory`, `/theory/[slug]` |
| Learning paths | 4 สายอาชีพ | `/paths`, `/paths/[slug]` |
| Guides & playbooks | 17 บทความเชิงลึก | `/guides`, `/guides/[slug]` |
| Interactive labs | 10 labs | `/exercises`, `/exercises/[slug]` |
| Portfolio projects | 9 โจทย์พร้อม rubric | `/projects`, `/projects/[slug]` |
| Interview bank | 64 คำถาม | `/interview` |
| Glossary | 105 คำ | `/glossary` |
| Resources | 49 แหล่ง | `/resources` |
| Cheatsheets | 8 ชีต | `/cheatsheets` |
| แผนเรียน 12 สัปดาห์ | 12 สัปดาห์ | `/plan` |
| Self assessment | 6 คำถาม | `/start` |
| Progress dashboard | local only | `/progress` |

## Tech stack

- **Astro 7** — static site generation, zero JS โดยค่าเริ่มต้น
- **TypeScript** — strict mode, เนื้อหาเป็น typed data
- **CSS ที่เขียนเอง** — design tokens ใน `src/styles/global.css` ไม่มี Tailwind
- **Lucide** (`@lucide/astro`) — icon set
- **Self-hosted fonts** — IBM Plex Sans Thai, Space Grotesk, JetBrains Mono
- **Vanilla TS** — interactivity ทั้งหมดทำงานฝั่ง client ไม่มี framework runtime
- **localStorage** — เก็บความคืบหน้า ไม่มี backend ไม่มี account

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build ลง dist/
npm run preview    # preview production build
npm run check      # Astro + TypeScript diagnostics
```

ต้องใช้ Node.js 22 ขึ้นไป

## โครงสร้างโปรเจกต์

```
src/
├── components/
│   ├── labs/                 # interactive lab components
│   ├── BaseLayout.astro      # layout หลัก + theme/progress API
│   ├── Header.astro
│   ├── Footer.astro
│   ├── SearchDialog.astro
│   ├── Quiz.astro
│   └── *Card.astro           # การ์ดที่ใช้ซ้ำ
├── data/
│   ├── modules/              # 28 modules แยกตาม phase
│   ├── theory/               # 19 บททฤษฎี (ความรู้เชิงลึก) แยกตาม phase
│   ├── types.ts              # interface กลางทั้งหมด
│   ├── phases.ts             # 6 phases + tracks
│   ├── paths.ts              # 4 learning paths
│   ├── guides.ts             # 17 guides
│   ├── exercises.ts          # 10 labs + quiz questions
│   ├── projects.ts           # 9 portfolio projects
│   ├── interview.ts          # 64 interview questions
│   ├── glossary.ts           # 105 terms
│   ├── resources.ts          # 49 resources
│   ├── plan.ts               # แผน 12 สัปดาห์
│   └── cheatsheets.ts        # 8 cheat sheets
├── layouts/
├── lib/
├── pages/                    # ทุก route
└── styles/global.css         # design system ทั้งหมด
public/
├── favicon.svg
└── og.svg
```

## หลักการออกแบบ

1. **Content แยกจาก UI** — เพิ่ม/แก้บทเรียนได้โดยไม่แตะหน้าเว็บ
2. **Typed schema** — ทุก data file ถูกตรวจด้วย TypeScript ทำให้เติมเนื้อหาผิดรูปแบบไม่ได้
3. **Static-first** — ไม่มี API, ไม่มี database, deploy ได้ทุกที่ (Netlify, Vercel, Cloudflare Pages, GitHub Pages)
4. **Privacy by default** — ไม่มี analytics, ไม่มี account, ข้อมูลทั้งหมดอยู่ในเบราว์เซอร์ผู้ใช้
5. **Progressive enhancement** — อ่านได้แม้ปิด JavaScript; interactivity เป็นส่วนเสริม

## การเพิ่มหรือแก้เนื้อหา

อ่าน **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** — อธิบาย schema ของทุก data file, ขั้นตอนเพิ่ม module/guide/lab/project และ checklist ก่อน commit

## Deployment

Build output เป็น static files ทั้งหมดใน `dist/`:

```bash
npm run build
# upload dist/ ไปยัง static host
```

กำหนด `site` ใน `astro.config.mjs` ให้ตรงกับโดเมนจริง เพื่อให้ OG image และ canonical URL ถูกต้อง

## ความเป็นส่วนตัว

- ไม่มี analytics หรือ third-party tracking
- ไม่มีการส่งข้อมูลจาก lab หรือแบบประเมินออกจากเบราว์เซอร์
- ความคืบหน้าเก็บใน `localStorage` ภายใต้คีย์ `aie:*` และลบได้จาก `/progress`
- การค้นหาใช้ `/search.json` ที่ generate ตอน build

## License

- **เนื้อหา** — แนะนำ CC BY-NC-SA 4.0
- **โค้ด** — แนะนำ MIT

ลิงก์ภายนอกใน `/resources` เป็นลิขสิทธิ์ของเจ้าของเดิม การกล่าวถึงไม่ใช่การรับรอง
