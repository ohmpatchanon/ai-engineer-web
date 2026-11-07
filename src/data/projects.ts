export interface Project {
  slug: string;
  title: string;
  en: string;
  level: string;
  time: string;
  category: string;
  summary: string;
  why: string;
  user: string;
  skills: string[];
  requirements: string[];
  milestones: { week: string; title: string; body: string }[];
  rubric: { label: string; detail: string }[];
  stretch: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: 'rag-knowledge-assistant',
    title: 'ผู้ช่วยความรู้จากเอกสารองค์กร',
    en: 'RAG Knowledge Assistant',
    level: 'กลาง',
    time: '3–4 สัปดาห์',
    category: 'LLM',
    summary: 'ระบบตอบคำถามจากเอกสาร 200+ หน้า พร้อม citation, permission filter และชุดประเมินคุณภาพ',
    why: 'เป็นโปรเจกต์ที่แสดงทักษะ LLM ครบวงจร: ingestion, retrieval, generation, evaluation, security และ deployment เหมาะเป็นชิ้นหลักของ portfolio',
    user: 'พนักงานที่ต้องค้นหานโยบาย HR หรือคู่มือปฏิบัติงานจากเอกสารหลายร้อยหน้า',
    skills: ['Python', 'embeddings', 'hybrid search', 'prompt engineering', 'evaluation', 'FastAPI'],
    requirements: [
      'รองรับ PDF/DOCX/HTML อย่างน้อย 2 รูปแบบ และรักษาโครงสร้างหน้า/หัวข้อ',
      'มี metadata และ filter ตามแผนก/สิทธิ์',
      'แสดง citation ที่ตรวจสอบกลับไปยังหน้าเอกสารได้',
      'pgvector เก็บเฉพาะ dense vectors — BM25 ต้องแยก implement เป็น full-text index หรือ rank_bm25 เพื่อทำ hybrid search',
      'มี eval set 40 คำถาม ครอบคลุมคำถามที่ไม่มีคำตอบ',
      'รายงาน retrieval recall, faithfulness, latency และต้นทุนต่อคำถาม',
      'มีหน้า admin สำหรับ ingest/ลบเอกสารและดู failure cases'
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Ingestion + baseline', body: 'ทำ parser, chunking และ retrieval แบบง่าย วัด recall@5 ก่อนปรับ' },
      { week: 'สัปดาห์ 2', title: 'Quality', body: 'เพิ่ม hybrid search, reranker และ citation พร้อมทดสอบ 20 เคส' },
      { week: 'สัปดาห์ 3', title: 'Evaluation', body: 'สร้าง eval suite, failure taxonomy และตัวเลขก่อน/หลังปรับ' },
      { week: 'สัปดาห์ 4', title: 'Ship', body: 'เพิ่ม auth, logging, dashboard, Docker และ README/case study' }
    ],
    rubric: [
      { label: 'คุณภาพ', detail: 'ตอบตรงคำถาม มีหลักฐาน และยอมรับเมื่อไม่รู้' },
      { label: 'วิศวกรรม', detail: 'โครงสร้างโค้ด test ได้ และจัดการ error ที่ขอบระบบ' },
      { label: 'การวัดผล', detail: 'มี eval ที่ออกแบบดีและตัวเลขที่ตรวจสอบได้' },
      { label: 'ความปลอดภัย', detail: 'มี permission filter, PII handling และ injection test' }
    ],
    stretch: ['เพิ่ม multi-query retrieval', 'รองรับตารางและภาพในเอกสาร', 'ทำ feedback loop และ dashboard สำหรับ content gap'],
    stack: ['Python', 'FastAPI', 'PostgreSQL + pgvector', 'BM25', 'LLM API', 'Docker']
  },
  {
    slug: 'llm-eval-harness',
    title: 'Eval Harness สำหรับ LLM',
    en: 'LLM Evaluation Harness',
    level: 'กลาง',
    time: '2–3 สัปดาห์',
    category: 'Evaluation',
    summary: 'เครื่องมือรันชุดทดสอบ LLM เทียบหลายโมเดล/prompt พร้อม scorecard และ regression gate',
    why: 'แสดงว่าคุณเข้าใจปัญหา hardest ของ LLM engineering นั่นคือการวัดคุณภาพอย่างเป็นระบบ เป็นโปรเจกต์ที่พูดถึงในสัมภาษณ์ได้ลึก',
    user: 'ทีม AI ที่ต้องตัดสินใจว่า prompt หรือโมเดลใหม่ดีขึ้นจริงหรือไม่',
    skills: ['Python', 'pytest', 'LLM-as-judge', 'statistics', 'CLI'],
    requirements: [
      'โหลด test case จาก YAML/JSON และรองรับหลาย provider',
      'มี deterministic checks, rubric judge และ human review export',
      'คำนวณ confidence interval หรือ bootstrap สำหรับผลต่าง',
      'รายงาน HTML/Markdown scorecard พร้อม failure examples',
      'ตั้ง regression threshold สำหรับ CI ได้',
      'เก็บ version ของ prompt, model และ dataset'
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Core runner', body: 'Adapter สำหรับ 2 providers และ deterministic checks' },
      { week: 'สัปดาห์ 2', title: 'Judging', body: 'Rubric judge, bias checks และ human calibration' },
      { week: 'สัปดาห์ 3', title: 'Report + CI', body: 'Scorecard, regression gate และ documentation' }
    ],
    rubric: [
      { label: 'ความถูกต้อง', detail: 'ผลลัพธ์ reproducible และจัดการ rate limit/error ได้' },
      { label: 'สถิติ', detail: 'ไม่สรุปผลจาก sample เล็กโดยไม่มี uncertainty' },
      { label: 'การออกแบบ', detail: 'เพิ่ม provider/metric ได้โดยไม่แก้แกนหลัก' },
      { label: 'หลักฐาน', detail: 'มีตัวอย่างจริงที่ harness จับ regression ได้' }
    ],
    stretch: ['รองรับ multimodal eval', 'เปรียบเทียบ pairwise พร้อม position swap', 'แดชบอร์ดเปรียบเทียบหลาย run'],
    stack: ['Python', 'Typer', 'Pydantic', 'Jinja2', 'GitHub Actions']
  },
  {
    slug: 'document-extraction',
    title: 'สกัดข้อมูลจากเอกสารอัตโนมัติ',
    en: 'Document Extraction Pipeline',
    level: 'กลาง',
    time: '2–3 สัปดาห์',
    category: 'Multimodal',
    summary: 'แปลงใบเสร็จ/invoice เป็น JSON ที่ validate ได้ พร้อม confidence และ human review queue',
    why: 'เป็นงานองค์กรที่เกิดขึ้นจริงสูงและวัดผลได้ชัด เหมาะแสดงทักษะ multimodal, schema design และ error handling',
    user: 'ทีมบัญชีที่ต้องคีย์ข้อมูลจากเอกสารจำนวนมาก',
    skills: ['OCR', 'vision LLM', 'Pydantic', 'queue', 'human-in-the-loop'],
    requirements: [
      'รองรับ PDF และภาพถ่ายที่เอียง/แสงไม่ดี',
      'สกัดฟิลด์หลักพร้อม confidence และ source bounding box (bbox ต้องมี OCR/vision grounding รองรับ ไม่ควรแต่งตำแหน่งเอง)',
      'validate ตัวเลขและผลรวม พร้อม flag เมื่อไม่ตรง',
      'มี review UI สำหรับเคสที่ confidence ต่ำ',
      'วัด field-level accuracy บน 50 เอกสาร',
      'มี audit log และไม่เก็บภาพนานเกินจำเป็น'
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Baseline', body: 'OCR + schema + 20 ตัวอย่าง และวัดผลเริ่มต้น' },
      { week: 'สัปดาห์ 2', title: 'Robustness', body: 'จัดการเอกสารหลายรูปแบบ เพิ่ม validation และ confidence' },
      { week: 'สัปดาห์ 3', title: 'Workflow', body: 'Review queue, export, metrics และ case study' }
    ],
    rubric: [
      { label: 'ความแม่นยำ', detail: 'แยกฟิลด์ถูก/ผิดและวัด per-field' },
      { label: 'ความน่าเชื่อถือ', detail: 'validation จับผลรวมผิดและเคสคุณภาพต่ำ' },
      { label: 'UX', detail: ' reviewer เห็นภาพต้นฉบับและแก้ไขได้เร็ว' },
      { label: 'Privacy', detail: 'มี retention และ redaction ที่เหมาะสม' }
    ],
    stretch: ['รองรับหลายภาษา', 'เทรน classifier แยกประเภทเอกสาร', 'เปรียบเทียบต้นทุน OCR-local vs vision API'],
    stack: ['Python', 'PaddleOCR/Tesseract', 'Vision LLM', 'Pydantic', 'Streamlit/Next.js']
  },
  {
    slug: 'thai-semantic-search',
    title: 'Semantic Search ภาษาไทย',
    en: 'Thai Semantic Search',
    level: 'เริ่มต้น–กลาง',
    time: '2 สัปดาห์',
    category: 'Search',
    summary: 'ค้นหาคำตัดสิน/บทความภาษาไทยด้วยความหมาย เปรียบเทียบ dense, BM25 และ hybrid',
    why: 'ภาษาไทยมีโจทย์เฉพาะด้าน tokenization และ embedding ทำให้โปรเจกต์นี้แสดงความเข้าใจทั้ง retrieval และบริบทภาษา',
    user: 'นักวิจัยหรือประชาชนที่ต้องการค้นเอกสารภาษาไทยด้วยคำถามธรรมชาติ',
    skills: ['Thai NLP', 'embeddings', 'BM25', 'evaluation', 'FastAPI'],
    requirements: [
      'เตรียม corpus ภาษาไทยอย่างน้อย 300 เอกสาร',
      'เปรียบเทียบ 3 วิธี: BM25, dense และ hybrid',
      'สร้าง query set 30 ข้อพร้อม relevance label',
      'รายงาน recall@5, MRR และตัวอย่างที่แต่ละวิธีชนะ/แพ้',
      'มี UI ค้นหาและ filter ตามหมวด/ปี',
      'อธิบายข้อจำกัดของ embedding ภาษาไทย'
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Corpus + baselines', body: 'เตรียมข้อมูล, BM25 และ dense baseline' },
      { week: 'สัปดาห์ 2', title: 'Hybrid + report', body: 'รวมผล, rerank และเขียน evaluation report' }
    ],
    rubric: [
      { label: 'ข้อมูล', detail: 'corpus และ label มีคุณภาพและมีที่มา' },
      { label: 'การทดลอง', detail: 'เปรียบเทียบยุติธรรมและวัดผลเหมาะสม' },
      { label: 'ภาษาไทย', detail: 'จัดการ tokenization/คำเฉพาะได้อย่างมีเหตุผล' },
      { label: 'การสื่อสาร', detail: 'อธิบาย trade-off และ failure case ชัดเจน' }
    ],
    stretch: ['เพิ่ม reranker ข้ามภาษา', 'รองรับคำถามหลายประโยค', 'สร้าง citation กลับไปยังย่อหน้า'],
    stack: ['Python', 'sentence-transformers', 'rank_bm25', 'FastAPI', 'SQLite']
  },
  {
    slug: 'support-agent',
    title: 'Support Triage Agent',
    en: 'Customer Support Agent',
    level: 'สูง',
    time: '3–4 สัปดาห์',
    category: 'Agents',
    summary: 'agent ที่ช่วยคัดแยกตั๋ว สนับสนุนการเรียกเครื่องมือ และส่งต่อมนุษย์อย่างปลอดภัย พร้อม trace และ eval',
    why: 'แสดงความสามารถด้าน agentic workflow, tool use, permission, error recovery และ evaluation สำหรับงานหลายขั้น',
    user: 'ทีม support ที่ต้องจัดลำดับความสำคัญและดึงข้อมูลลูกค้าจากหลายระบบ',
    skills: ['tool calling', 'workflow design', 'guardrails', 'observability', 'evaluation'],
    requirements: [
      'มี tool อย่างน้อย 4 ตัว เช่น ดูคำสั่งซื้อ, ค้น KB, สร้าง draft, escalate',
      'ทุก tool มี schema, authorization และ audit log',
      'มี step limit, timeout และ fallback',
      'งานที่เสี่ยงสูงต้องมี human approval',
      'มี trace viewer แสดงการตัดสินใจและ tool calls',
      'eval 20 งานวัด task success, steps และ unsafe action rate'
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Workflow', body: 'เริ่มจาก deterministic workflow ก่อนเพิ่ม agent loop' },
      { week: 'สัปดาห์ 2', title: 'Tools + guardrails', body: 'จำกัดสิทธิ์, validation และ human approval' },
      { week: 'สัปดาห์ 3', title: 'Eval + trace', body: 'สร้าง environment จำลองและ failure cases' },
      { week: 'สัปดาห์ 4', title: 'Polish', body: 'UI, runbook, demo video และ case study' }
    ],
    rubric: [
      { label: 'ความปลอดภัย', detail: 'ไม่มี unsafe action โดยไม่มีการยืนยัน' },
      { label: 'ความคาดเดาได้', detail: 'จัดการ loop, error และ timeout' },
      { label: 'คุณภาพ', detail: 'task success สูงและส่งต่อมนุษย์เมื่อควร' },
      { label: 'Observability', detail: 'trace ละเอียดพอ debug ได้' }
    ],
    stretch: ['เพิ่ม multi-agent worker', 'เปรียบเทียบ workflow vs agent', 'เพิ่ม cost budget ต่อ ticket'],
    stack: ['Python', 'LangGraph/Google ADK', 'FastAPI', 'SQLite', 'OpenTelemetry']
  },
  {
    slug: 'churn-prediction',
    title: 'Churn Prediction ที่วัดคุณค่าธุรกิจ',
    en: 'Churn Prediction System',
    level: 'กลาง',
    time: '3 สัปดาห์',
    category: 'ML',
    summary: 'โมเดล tabular ตั้งแต่ feature engineering ถึง API และ monitoring พร้อม business impact',
    why: 'งาน ML แบบดั้งเดิมยังมีอยู่มากและวัดผลธุรกิจได้ชัด เป็นโปรเจกต์ที่แสดงพื้นฐาน ML, leakage, deployment และการสื่อสารกับ stakeholder',
    user: 'ทีม CRM ที่ต้องการรู้ว่าควรดูแลลูกค้ากลุ่มใดก่อน',
    skills: ['feature engineering', 'scikit-learn', 'SQL', 'FastAPI', 'monitoring'],
    requirements: [
      'สร้าง point-in-time features จากข้อมูลธุรกรรม',
      'เปรียบเทียบ baseline กับอย่างน้อย 2 โมเดล',
      'เลือก threshold จากต้นทุน campaign และมูลค่าลูกค้า',
      'มี calibration ของโมเดล',
      'deploy API พร้อม batch scoring',
      'monitor drift และ quality ของ input'
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Data + baseline', body: 'EDA, leakage audit และ baseline' },
      { week: 'สัปดาห์ 2', title: 'Model + business metric', body: 'เปรียบเทียบโมเดลและคำนวณ expected value' },
      { week: 'สัปดาห์ 3', title: 'Deploy + monitor', body: 'API, dashboard, drift check และ case study' }
    ],
    rubric: [
      { label: 'Data', detail: 'feature ถูกต้อง ณ เวลาทำนายและไม่มี leakage' },
      { label: 'Evaluation', detail: 'metric เชื่อมกับต้นทุนและมีการ calibration' },
      { label: 'Production', detail: 'API และ monitoring ทำงานได้' },
      { label: 'ธุรกิจ', detail: 'ประเมินผลกระทบอย่างระวังและสมเหตุสมผล' }
    ],
    stretch: ['เพิ่ม uplift modeling', 'สร้าง cohort analysis', 'ทดลอง policy การให้ส่วนลดด้วย simulation'],
    stack: ['Python', 'pandas', 'scikit-learn/LightGBM', 'FastAPI', 'PostgreSQL', 'Evidently']
  },
  {
    slug: 'ai-cost-router',
    title: 'LLM Cost & Latency Router',
    en: 'Intelligent Model Router',
    level: 'สูง',
    time: '2–3 สัปดาห์',
    category: 'Infrastructure',
    summary: 'router เลือกโมเดลตามความยากของงาน งบ และ SLA พร้อม fallback และ cost dashboard',
    why: 'แสดงความเข้าใจ trade-off ระหว่างคุณภาพ ต้นทุน และ latency ซึ่งเป็นโจทย์จริงของทีมที่ scale AI',
    user: 'ทีมแพลตฟอร์มที่ต้องควบคุมค่าใช้จ่าย LLM โดยไม่ทำให้คุณภาพตก',
    skills: ['LLM APIs', 'caching', 'routing', 'benchmarking', 'observability'],
    requirements: [
      'classify งานเป็นง่าย/ยากด้วย heuristic หรือ model เล็ก',
      'route ไปยังอย่างน้อย 3 model tiers',
      'มี cache และ fallback เมื่อ provider ล่ม/rate limit',
      'วัดคุณภาพแยกตาม route และเทียบ baseline',
      'แดชบอร์ด cost, latency p95 และ escalation rate',
      'เอกสารนโยบาย routing และ budget guard',
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Benchmark', body: 'สร้าง eval set และวัดคุณภาพ/ต้นทุนของแต่ละโมเดล' },
      { week: 'สัปดาห์ 2', title: 'Router', body: ' classifier, cache, fallback และ budget guard' },
      { week: 'สัปดาห์ 3', title: 'Dashboard', body: 'observability, A/B comparison และ report' }
    ],
    rubric: [
      { label: 'Trade-off', detail: 'ลดต้นทุนโดยรักษาคุณภาพตามเกณฑ์' },
      { label: 'Reliability', detail: 'fallback และ rate limit ทำงานถูกต้อง' },
      { label: 'Measurement', detail: 'เปรียบเทียบ baseline อย่างยุติธรรม' },
      { label: 'Operations', detail: 'มี dashboard และ alert ที่มีประโยชน์' }
    ],
    stretch: ['เรียนรู้ router จากข้อมูลจริง', 'เพิ่ม semantic cache', 'รองรับ multi-provider failover อัตโนมัติ'],
    stack: ['Python', 'FastAPI', 'Redis', 'LLM APIs', 'Grafana/Metabase']
  },
  {
    slug: 'ai-feature-flag',
    title: 'AI Feature Launch Kit',
    en: 'Responsible AI Feature Launch',
    level: 'เริ่มต้น–กลาง',
    time: '2 สัปดาห์',
    category: 'Product',
    summary: 'ชุดเครื่องมือสำหรับปล่อยฟีเจอร์ AI อย่างมีความรับผิดชอบ: risk review, guardrail, feedback และ rollback',
    why: 'เป็นโปรเจกต์ที่แสดง product sense และ responsible AI ซึ่งทีมสัมภาษณ์ระดับกลางขึ้นไปให้ความสำคัญ',
    user: 'ทีมผลิตภัณฑ์ที่ต้องเปิดฟีเจอร์ AI ให้ผู้ใช้จริงโดยควบคุมความเสี่ยง',
    skills: ['product thinking', 'guardrails', 'A/B testing', 'UX', 'governance'],
    requirements: [
      'risk register ระบุ harm, likelihood และ mitigation',
      'guardrail metric และเกณฑ์หยุด rollout',
      'UI แสดงข้อจำกัด/confidence และทางแก้ไข',
      'กลไก feedback และ human escalation',
      'A/B test plan พร้อม sample size',
      'runbook สำหรับ rollback และ incident',
      'model card ภาษาเข้าใจง่าย'
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Risk + design', body: 'stakeholder map, harm analysis และ UX flow' },
      { week: 'สัปดาห์ 2', title: 'Guardrails + launch', body: 'metrics, experiment plan, runbook และ demo' }
    ],
    rubric: [
      { label: 'ความเสี่ยง', detail: 'ระบุ harm ได้ครอบคลุมและมี mitigation ที่ใช้ได้' },
      { label: 'UX', detail: 'ผู้ใช้เข้าใจข้อจำกัดและแก้ไขได้' },
      { label: 'การวัด', detail: 'มี guardrail และ experiment plan' },
      { label: 'ปฏิบัติได้', detail: 'runbook และ rollback ชัดเจน' }
    ],
    stretch: ['ทำ red-team workshop', 'เพิ่ม accessibility review', 'ทดสอบกับผู้ใช้จริง 5 คน'],
    stack: ['Next.js', 'LLM API', 'Feature flag', 'Analytics', 'Markdown docs']
  },
  {
    slug: 'custom-finetuned-channel',
    title: 'Fine-tune โมเดลเล็กด้วยข้อมูลของคุณ',
    en: 'Custom Fine-tuning Pipeline',
    level: 'กลาง–สูง',
    time: '3–4 สัปดาห์',
    category: 'Fine-tuning',
    summary: 'ปรับโมเดล open-weight ขนาดเล็กด้วย LoRA ให้ทำงานเฉพาะทาง วัดเทียบ API ขนาดใหญ่ และเปรียบเทียบต้นทุนกับคุณภาพ',
    why: 'เป็นโปรเจกต์ที่แยกคุณออกจากคนที่เรียก API อย่างเดียว — แสดงความเข้าใจ dataset, training, evaluation และตัดสินใจ trade-off ระหว่างราคากับคุณภาพได้จริง',
    user: 'ทีมที่ต้องทำงานเฉพาะทางซ้ำ ๆ ประจำวัน เช่น แปลงเอกสารที่เขียนมือ หรือสรุปผลการประชุมที่ศัพท์เฉพาะของบริษัท',
    skills: ['dataset curation', 'LoRA', 'Hugging Face', 'evaluation', 'cost analysis', 'Docker'],
    requirements: [
      'สร้าง dataset อย่างน้อย 300 ตัวอย่างที่มีรูปแบบและคุณภาพตรวจสอบได้ แยก train/val/test',
      'ใช้ LoRA fine-tune โมเดล open-weight ขนาดเล็ก (เช่น 1–8B) บน GPU ฟรีหรือราคาถูก',
      'เปรียบเทียบโมเดลที่ fine-tune กับ baseline GPT/API บน test set เดียวกัน',
      'รายงาน metric อย่างเป็นธรรม: task success, latency, cost ต่อคำขอ',
      'บันทึก failure cases และผลเมื่อข้อมูลเปลี่ยน',
      'containerize และเขียน reproducibility notes (seed, hyperparameter, บันทึก eval)'
    ],
    milestones: [
      { week: 'สัปดาห์ 1', title: 'Dataset + baseline', body: 'เก็บข้อมูลจริง สร้าง prompt template วัด baseline กับ API ก่อนลงทุนเทรน' },
      { week: 'สัปดาห์ 2', title: 'LoRA + วัดผล', body: 'รันเทรนด้วยชุด hyperparameter สั้น ๆ และเทียบ performance อย่างซื่อสัตย์' },
      { week: 'สัปดาห์ 3', title: 'Stable + deploy', body: 'เลือก model ที่ชนะใน eval, containerize และเขียนบทวิเคราะห์ราคา/คุณภาพ' },
      { week: 'สัปดาห์ 4', title: 'Case study + หา trade-off', body: 'เขียน case study เปรียบเทียบ fine-tune vs API พร้อมต้นทุน/คุณภาพ และเปิดให้ทีมทบทวน' }
    ],
    rubric: [
      { label: 'คุณภาพข้อมูล', detail: 'dataset มีการตรวจสอบ, ปราศจาก label leak และมี split ที่ถูกต้อง' },
      { label: 'การประเมิน', detail: 'ผลเทียบกับ baseline ด้วย test set เดียวและ metric ตรงกับปัญหาจริง' },
      { label: 'การทำซ้ำได้', detail: 'seed, hyperparameter และขั้นตอนเทรนบันทึกครบ รันซ้ำได้' },
      { label: 'การตัดสินใจ', detail: 'อธิบายได้ว่าเมื่อไร fine-tune คุ้มกว่าและเมื่อไรควรใช้ API' }
    ],
    stretch: ['ลอง quantization เพื่อลดต้นทุน GPU', 'เพิ่ม RLHF/DPO ขั้นต้น', 'ทำ eval set ที่มีข้อมูลใหม่หลังเทรนเพื่อตรวจ regress'],
    stack: ['Python', 'PyTorch', 'PEFT/LoRA', 'Hugging Face datasets', 'W&B', 'Docker']
  }
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
