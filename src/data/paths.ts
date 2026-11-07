import type { Track } from './types';

export interface LearningPath {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  weeks: string;
  level: string;
  bestFor: string[];
  outcomes: string[];
  moduleSlugs: string[];
  capstone: string;
  color: string;
  track: Track;
}

const sharedFoundation = [
  'python-for-ai',
  'math-for-ml',
  'data-wrangling',
  'sql-data-modeling',
  'software-engineering'
];

export const paths: LearningPath[] = [
  {
    slug: 'llm-engineer',
    title: 'LLM / GenAI Engineer',
    tagline: 'สร้างระบบ AI ที่ใช้ภาษาเป็นแกนหลัก',
    description: 'เส้นทางยอดนิยมสำหรับคนที่อยากทำงานกับ LLM, RAG, agents และ evaluation ในผลิตภัณฑ์จริง เน้นการส่งมอบระบบที่วัดผลได้มากกว่าการเทรนโมเดลจากศูนย์ (หมายเหตุ: ตัด classical ML, features/leakage และ deep-learning foundations ออกเพื่อความเร็ว กลับไปเสริมภายหลังหากต้องการพื้นฐานเชิงลึก)',
    weeks: '22–26 สัปดาห์',
    level: 'เริ่มต้น–กลาง',
    bestFor: ['developer ที่อยากต่อยอดไป LLM', 'data analyst ที่อยากสร้าง AI product', 'ML engineer ที่อยากอัปสกิล GenAI'],
    outcomes: ['สร้าง RAG ที่มี citation และ eval suite', 'ออกแบบ agent ที่มี guardrail', 'วัดคุณภาพและต้นทุนของ LLM app', 'deploy และ monitor ระบบจริง'],
    moduleSlugs: [
      ...sharedFoundation,
      'ml-foundations',
      'evaluation-experimentation',
      'nlp-foundations',
      'transformers',
      'llm-foundations',
      'prompt-context-engineering',
      'embeddings-search',
      'rag-systems',
      'llm-evaluation',
      'fine-tuning',
      'agents-tool-use',
      'inference-optimization',
      'mlops-deployment',
      'monitoring-reliability',
      'ai-system-design',
      'ai-security-privacy',
      'portfolio-career'
    ],
    capstone: 'RAG assistant สำหรับเอกสารองค์กร 200+ หน้า พร้อม citation, permission filter, eval 40 เคส และ monitoring dashboard',
    color: 'acid',
    track: 'llm'
  },
  {
    slug: 'ml-engineer',
    title: 'Machine Learning Engineer',
    tagline: 'สร้างโมเดลและระบบ ML ที่แม่นและทนทาน',
    description: 'เส้นทางที่ลงลึกกว่าใน foundations, classical ML และ deep learning เหมาะกับคนที่ต้องการทำงานกับโมเดล tabular, vision, NLP หรือ recommendation และดูแลตั้งแต่ training ถึง serving (หมายเหตุ: ตัด prompt engineering และ agents ออกเพื่อโฟกัส ML core; multimodal/responsible AI เป็นทางเลือกสายข้างเคียง)',
    weeks: '26–32 สัปดาห์',
    level: 'กลาง',
    bestFor: ['software engineer ที่มีพื้นฐานคณิต', 'data scientist ที่อยากทำงาน production', 'นักศึกษาที่อยากสร้างฐาน ML แน่น'],
    outcomes: ['ออกแบบ feature และtraining pipeline ที่ถูกต้อง', 'เทรนและ debug PyTorch model', 'วัดผลด้วย metric ที่เหมาะกับธุรกิจ', 'deploy โมเดลพร้อม monitoring'],
    moduleSlugs: [
      ...sharedFoundation,
      'ml-foundations',
      'classical-machine-learning',
      'evaluation-experimentation',
      'features-and-leakage',
      'deep-learning-foundations',
      'pytorch',
      'transformers',
      'nlp-foundations',
      'embeddings-search',
      'llm-foundations',
      'llm-evaluation',
      'fine-tuning',
      'inference-optimization',
      'mlops-deployment',
      'monitoring-reliability',
      'ai-system-design',
      'ai-security-privacy',
      'portfolio-career'
    ],
    capstone: 'ระบบทำนาย churn พร้อม feature pipeline, model registry, API, monitoring และ business impact estimate',
    color: 'amber',
    track: 'ml'
  },
  {
    slug: 'ai-product-engineer',
    title: 'AI Product Engineer',
    tagline: 'เปลี่ยน AI เป็นผลิตภัณฑ์ที่คนใช้จริง',
    description: 'เส้นทางเร็วสำหรับ developer หรือ founder ที่ต้องการสร้าง AI product ตั้งแต่ zero to one เน้น LLM API, UX, evaluation และการ iterate จากผู้ใช้จริง โดยลดรายละเอียด training ที่ไม่จำเป็น (หมายเหตุ: ตัด math/sql แบบละเอียด, classical ML, PyTorch และ transformers ออกเพื่อความเร็ว เหมาะกับคนที่มีพื้นฐานอยู่แล้ว)',
    weeks: '14–18 สัปดาห์',
    level: 'เริ่มต้น–กลาง',
    bestFor: ['full-stack developer', 'indie hacker / founder', 'product manager ที่อยากลงมือสร้าง'],
    outcomes: ['สร้าง LLM app ที่มี guardrail', 'ออกแบบ UX สำหรับความไม่แน่นอน', 'วัดผลด้วย product และ quality metric', 'ปล่อย product พร้อม feedback loop'],
    moduleSlugs: [
      'python-for-ai',
      'data-wrangling',
      'software-engineering',
      'ml-foundations',
      'evaluation-experimentation',
      'llm-foundations',
      'prompt-context-engineering',
      'embeddings-search',
      'rag-systems',
      'llm-evaluation',
      'agents-tool-use',
      'multimodal-ai',
      'inference-optimization',
      'ai-system-design',
      'responsible-ai-product',
      'ai-security-privacy',
      'portfolio-career'
    ],
    capstone: 'AI product ขนาดเล็กที่มีผู้ใช้จริง 10 คน, feedback loop, eval 25 เคส และ cost/latency dashboard',
    color: 'violet',
    track: 'product'
  },
  {
    slug: 'mlops-engineer',
    title: 'MLOps / AI Platform Engineer',
    tagline: 'สร้างแพลตฟอร์มที่ทำให้ AI ทำงานได้เสถียร',
    description: 'เส้นทางสำหรับคนที่ชอบ infrastructure, automation และ reliability เน้น deployment, observability, security และต้นทุนของระบบ AI ตั้งแต่โมเดล tabular ถึง LLM (หมายเหตุ: ตัด prompt/agents และ multimodal ออกเพื่อโฟกัส production; responsibility อยู่ในโมดูล responsible-ai-product เชื่อมกับ guardrail)',
    weeks: '24–30 สัปดาห์',
    level: 'กลาง–สูง',
    bestFor: ['DevOps / platform engineer', 'backend engineer', 'ML engineer ที่สนใจ production'],
    outcomes: ['สร้าง CI/CD สำหรับ ML artifact', 'ออกแบบ serving และ autoscaling', 'ติดตั้ง observability ครบสามเสา', 'บริหารต้นทุนและ incident ได้'],
    moduleSlugs: [
      ...sharedFoundation,
      'ml-foundations',
      'evaluation-experimentation',
      'deep-learning-foundations',
      'pytorch',
      'llm-foundations',
      'embeddings-search',
      'rag-systems',
      'inference-optimization',
      'mlops-deployment',
      'monitoring-reliability',
      'ai-system-design',
      'ai-security-privacy',
      'responsible-ai-product',
      'portfolio-career'
    ],
    capstone: 'ML platform ขนาดเล็ก: registry, CI/CD, serving, tracing, cost dashboard และ runbook สำหรับ incident 3 แบบ',
    color: 'sky',
    track: 'mlops'
  }
];

export const pathBySlug = Object.fromEntries(paths.map((p) => [p.slug, p]));
