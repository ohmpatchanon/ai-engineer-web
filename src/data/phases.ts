import type { Phase, Track } from './types';

export const phases: Phase[] = [
  {
    id: 'foundations',
    number: '01',
    title: 'ฐานรากที่มั่นคง',
    en: 'Foundations',
    weeks: 'สัปดาห์ 1–5',
    description: 'เขียนโค้ดให้คนอื่นอ่านได้ เข้าใจคณิตศาสตร์เบื้องหลัง และจัดการข้อมูลได้อย่างไม่หลงทาง',
    outcome: 'สร้าง data pipeline ขนาดเล็กด้วย Python + SQL พร้อม test และเอกสารประกอบได้',
    color: 'acid'
  },
  {
    id: 'core-ml',
    number: '02',
    title: 'คิดแบบ Machine Learning',
    en: 'Core ML',
    weeks: 'สัปดาห์ 6–9',
    description: 'จากข้อมูลสู่แบบจำลองที่วัดผลได้ รู้ว่าเมื่อไรควรใช้ ML และเมื่อไรไม่ควร',
    outcome: 'สร้าง baseline, วัดผลอย่างซื่อสัตย์ และอธิบาย trade-off ของโมเดลได้',
    color: 'amber'
  },
  {
    id: 'deep-learning',
    number: '03',
    title: 'Deep Learning & NLP',
    en: 'Deep Learning',
    weeks: 'สัปดาห์ 10–13',
    description: 'เข้าใจโครงข่ายประสาทเทียม ตั้งแต่ tensor และ backprop ถึง Transformer ที่ขับเคลื่อน LLM',
    outcome: 'เทรนและ debug โมเดล PyTorch ขนาดเล็ก พร้อมอธิบายกลไก attention ได้',
    color: 'sky'
  },
  {
    id: 'llm-engineering',
    number: '04',
    title: 'LLM Engineering',
    en: 'LLM Systems',
    weeks: 'สัปดาห์ 14–19',
    description: 'สร้างระบบที่ใช้ LLM จริง ตั้งแต่ prompt, retrieval, fine-tuning ไปจนถึง evaluation',
    outcome: 'ส่งมอบ RAG หรือ LLM app ที่มีชุดประเมิน, guardrail และตัวเลขคุณภาพ',
    color: 'violet'
  },
  {
    id: 'production',
    number: '05',
    title: 'Production & Agents',
    en: 'Ship It',
    weeks: 'สัปดาห์ 20–23',
    description: 'พา AI ขึ้น production อย่างมีต้นทุนคุมได้ มี observability และรับมือเหตุการณ์ได้',
    outcome: 'deploy บริการ AI ที่มี monitoring, fallback และ runbook พร้อมใช้งาน',
    color: 'coral'
  },
  {
    id: 'impact',
    number: '06',
    title: 'Product, Safety & Career',
    en: 'Make Impact',
    weeks: 'สัปดาห์ 24–26',
    description: 'แปลงเทคโนโลยีเป็นผลิตภัณฑ์ที่ปลอดภัย มีคุณค่า และสร้างอาชีพที่ยั่งยืน',
    outcome: 'มี portfolio 3 ชิ้น, case study ที่วัดผลได้ และพร้อมสัมภาษณ์งาน',
    color: 'sand'
  }
];

export const tracks: { id: Track; label: string; short: string; description: string; weeks: string; color: string }[] = [
  {
    id: 'llm',
    label: 'LLM / GenAI Engineer',
    short: 'LLM',
    description: 'สายที่ตลาดต้องการมากที่สุด: RAG, agents, evaluation และการนำ LLM ไปใช้จริง',
    weeks: '22–26 สัปดาห์',
    color: 'acid'
  },
  {
    id: 'ml',
    label: 'Machine Learning Engineer',
    short: 'ML',
    description: 'เจาะลึกโมเดล, training, feature engineering และระบบ ML แบบดั้งเดิม',
    weeks: '26–32 สัปดาห์',
    color: 'amber'
  },
  {
    id: 'product',
    label: 'AI Product Engineer',
    short: 'Product',
    description: 'เน้นสร้างผลิตภัณฑ์เร็วด้วย API, UX, evals และ iterate จากผู้ใช้จริง',
    weeks: '14–18 สัปดาห์',
    color: 'violet'
  },
  {
    id: 'mlops',
    label: 'MLOps / AI Platform',
    short: 'MLOps',
    description: 'โฟกัส infrastructure, deployment, monitoring, governance และต้นทุน',
    weeks: '24–30 สัปดาห์',
    color: 'sky'
  }
];
