export interface PlanWeek {
  week: number;
  title: string;
  theme: string;
  modules: string[];
  optional?: string[];
  hours: string;
  deliverable: string;
  checkpoint: string;
}

export const plan: PlanWeek[] = [
  {
    week: 1,
    title: 'เครื่องมือและนิสัยการเขียนโค้ด',
    theme: 'Python + Engineering',
    modules: ['python-for-ai', 'software-engineering'],
    hours: '8–10 ชั่วโมง',
    deliverable: 'repo เดียวที่มี Python package, test อย่างน้อย 5 เคส และ README ที่คนอื่นรันตามได้',
    checkpoint: 'อธิบายได้ว่า test ป้องกัน regression อย่างไร และทำไมต้อง pin dependency'
  },
  {
    week: 2,
    title: 'คณิตที่ใช้จริงและข้อมูลดิบ',
    theme: 'Math + Data',
    modules: ['math-for-ml', 'data-wrangling'],
    hours: '8–10 ชั่วโมง',
    deliverable: 'notebook ที่โหลดข้อมูลจริง ทำความสะอาด และเขียนฟังก์ชัน gradient descent ด้วย NumPy',
    checkpoint: 'อธิบาย gradient, normalization และผลของ outlier ต่อโมเดลได้'
  },
  {
    week: 3,
    title: 'SQL และกรอบคิด ML',
    theme: 'SQL + ML Foundations',
    modules: ['sql-data-modeling', 'ml-foundations'],
    hours: '8–10 ชั่วโมง',
    deliverable: 'query สร้าง feature table จากฐานข้อมูลจำลอง พร้อม baseline โมเดลแรก',
    checkpoint: 'แยกได้ว่าเมื่อไรควรใช้ ML และเมื่อไรควรใช้กฎหรือ query ธรรมดา'
  },
  {
    week: 4,
    title: 'โมเดลคลาสสิกและการวัดผล',
    theme: 'Classical ML + Evaluation',
    modules: ['classical-machine-learning', 'evaluation-experimentation'],
    hours: '9–11 ชั่วโมง',
    deliverable: 'เปรียบเทียบ 2 โมเดลด้วย cross-validation เดียวกัน พร้อม error analysis 20 ตัวอย่าง',
    checkpoint: 'เลือก metric ให้ตรงกับต้นทุนของ false positive/negative ได้'
  },
  {
    week: 5,
    title: 'Feature ที่ไม่รั่ว และโครงข่ายประสาท',
    theme: 'Features + Deep Learning',
    modules: ['features-and-leakage', 'deep-learning-foundations'],
    hours: '9–11 ชั่วโมง',
    deliverable: 'feature pipeline ที่ไม่มี leakage และ neural network ขนาดเล็กที่เทรนจากศูนย์',
    checkpoint: 'ตรวจ leakage ได้ก่อนดู metric และอธิบาย backpropagation แบบง่ายได้'
  },
  {
    week: 6,
    title: 'PyTorch และภาษา',
    theme: 'PyTorch + NLP',
    modules: ['pytorch', 'nlp-foundations'],
    hours: '9–11 ชั่วโมง',
    deliverable: 'โมเดล PyTorch สำหรับ classification ข้อความ พร้อม training loop ที่บันทึกผลได้',
    checkpoint: 'debug training loop ที่ loss ไม่ลดได้ และอธิบาย tokenization ได้'
  },
  {
    week: 7,
    title: 'Transformer และพื้นฐาน LLM',
    theme: 'Transformers + LLM',
    modules: ['transformers', 'llm-foundations'],
    hours: '9–11 ชั่วโมง',
    deliverable: 'สรุปกลไก attention ด้วยภาพของตัวเอง และทดลองเปรียบเทียบ prompt 3 แบบ',
    checkpoint: 'อธิบาย context window, token cost และข้อจำกัดของ LLM ได้'
  },
  {
    week: 8,
    title: 'Prompt ที่วัดผลได้ และการค้นคืน',
    theme: 'Prompt + Embeddings',
    modules: ['prompt-context-engineering', 'embeddings-search'],
    hours: '9–11 ชั่วโมง',
    deliverable: 'prompt spec ที่มี input/output ตัวอย่าง และการทดลองเปรียบเทียบ embedding 2 ตัว',
    checkpoint: 'แยกได้ว่า failure มาจาก prompt, retrieval หรือโมเดล'
  },
  {
    week: 9,
    title: 'RAG และชุดประเมิน',
    theme: 'RAG + Evaluation',
    modules: ['rag-systems', 'llm-evaluation'],
    hours: '10–12 ชั่วโมง',
    deliverable: 'RAG prototype ที่มี citation และ eval set 30 คำถาม พร้อมตัวเลข recall/faithfulness',
    checkpoint: 'บอกได้ว่า retrieval พลาดหรือ generation พลาด จากหลักฐาน'
  },
  {
    week: 10,
    title: 'Fine-tuning และ agents',
    theme: 'Fine-tuning + Agents',
    modules: ['fine-tuning', 'agents-tool-use'],
    optional: ['multimodal-ai'],
    hours: '10–12 ชั่วโมง',
    deliverable: 'agent เล็กที่ใช้ 2 tools พร้อม max steps, guardrail และ trace log',
    checkpoint: 'ตัดสินใจได้ว่าเมื่อไร fine-tune คุ้มกว่า prompt/retrieval'
  },
  {
    week: 11,
    title: ' Inference, deploy และความปลอดภัย',
    theme: 'Production + Security',
    modules: ['inference-optimization', 'mlops-deployment'],
    optional: ['ai-security-privacy'],
    hours: '10–12 ชั่วโมง',
    deliverable: 'service ที่ containerized มี health check, timeout, rate limit และ cost estimate',
    checkpoint: 'อธิบาย trade-off ระหว่าง latency, quality และต้นทุนได้'
  },
  {
    week: 12,
    title: 'Monitor, system design และ portfolio',
    theme: 'Reliability + Career',
    modules: ['monitoring-reliability', 'ai-system-design', 'responsible-ai-product', 'portfolio-career'],
    hours: '10–12 ชั่วโมง',
    deliverable: 'case study 1 ชิ้นพร้อม architecture, eval results, failure cases และบทเรียน',
    checkpoint: 'นำเสนอผลงานใน 5 นาทีโดยตอบคำถาม trade-off ได้'
  }
];

export const planByWeek = Object.fromEntries(plan.map((p) => [p.week, p]));
