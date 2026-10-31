export interface CheatItem {
  title: string;
  detail?: string;
  code?: string;
}

export interface CheatGroup {
  id: string;
  title: string;
  en: string;
  intro: string;
  items: CheatItem[];
}

export const cheatsheets: CheatGroup[] = [
  {
    id: 'metrics',
    title: 'Metric ที่ต้องรู้',
    en: 'ML Metrics',
    intro: 'เลือก metric จากต้นทุนของความผิดพลาด ไม่ใช่จากค่าที่ดูสูงที่สุด',
    items: [
      { title: 'Precision', detail: 'ในสิ่งที่โมเดลบอกว่า positive มีของจริงกี่ส่วน — ใช้เมื่อ false positive แพง' },
      { title: 'Recall', detail: 'ในของจริงทั้งหมด โมเดลจับได้กี่ส่วน — ใช้เมื่อ false negative แพง เช่น คัดกรองความเสี่ยง' },
      { title: 'F1', detail: 'ค่าเฉลี่ยฮาร์มอนิกของ precision และ recall — ใช้เมื่อต้องการสมดุล แต่ระวังซ่อนต้นทุนที่ไม่เท่ากัน' },
      { title: 'ROC-AUC', detail: 'ความสามารถแยกสองคลาสในทุก threshold — ไม่บอกคุณภาพที่ threshold ที่คุณจะใช้จริง' },
      { title: 'PR-AUC', detail: 'เหมาะกับข้อมูลไม่สมดุลมาก ๆ เช่น fraud หรือ retrieval' },
      { title: 'RMSE / MAE', detail: 'RMSE ลงโทษ error ใหญ่มากกว่า MAE — เลือกตามว่าคุณรับ error ขนาดใหญ่ได้แค่ไหน' },
      { title: 'Recall@k', detail: 'ใน k ผลลัพธ์แรก มีเอกสารที่ถูกอย่างน้อยหนึ่งรายการหรือไม่ — metric หลักของ retrieval' },
      { title: 'Latency p95', detail: 'ค่าเฉลี่ยหลอกคุณได้ ใช้ percentile เพื่อเห็นประสบการณ์ของผู้ใช้ส่วนท้าย' }
    ]
  },
  {
    id: 'rag',
    title: 'RAG Checklist',
    en: 'Retrieval-Augmented Generation',
    intro: 'แยกให้ออกว่า failure มาจาก retrieval หรือ generation ก่อนแก้ prompt',
    items: [
      { title: 'Ingestion', detail: 'รักษาโครงสร้างหน้า/หัวข้อ ทำ metadata และเก็บ source id ทุก chunk' },
      { title: 'Chunking', detail: 'เริ่ม 300–600 tokens พร้อม overlap 10–15% แล้ววัดด้วยคำถามจริง ไม่มีค่าที่ดีที่สุด universally' },
      { title: 'Hybrid search', detail: 'รวม BM25 กับ dense retrieval เพื่อจับทั้งคำเฉพาะและความหมาย' },
      { title: 'Reranking', detail: 'ดึง 20–50 candidates แล้ว rerank เหลือ 5–8 ชิ้น ลด noise ก่อนเข้า context' },
      { title: 'Citations', detail: 'บังคับให้อ้าง chunk id และตรวจว่า id นั้นอยู่ใน context จริง' },
      { title: 'No-answer path', detail: 'มีเส้นทาง “ไม่พบข้อมูล” ที่ชัดเจน ดีกว่าปล่อยให้โมเดลเดา' },
      { title: 'Eval set', detail: 'อย่างน้อย 30–50 คำถาม รวมคำถามที่ไม่มีคำตอบและคำถามที่ต้องใช้หลายเอกสาร' },
      { title: 'Debug order', detail: 'ตรวจ retrieval recall ก่อน → context relevance → faithfulness → formatting' }
    ]
  },
  {
    id: 'prompt',
    title: 'โครง Prompt ที่ทดสอบได้',
    en: 'Prompt Patterns',
    intro: 'prompt ที่ดีคือ spec ที่มี input, output, ข้อจำกัด และเกณฑ์สำเร็จ',
    items: [
      { title: 'Role', detail: 'กำหนดบทบาทและความเชี่ยวชาญเมื่อมีผลต่อมุมมอง เช่น “คุณคือ reviewer ที่เน้นความถูกต้องทางกฎหมาย”' },
      { title: 'Task', detail: 'ใช้คำกริยาชัดเจน: สกัด สรุป จำแนก เปรียบเทียบ ตรวจสอบ' },
      { title: 'Context', detail: 'ให้ข้อมูลที่จำเป็น แต่ตัดสิ่งที่ไม่เกี่ยวกับคำตอบออกเพื่อลด token และ noise' },
      { title: 'Constraints', detail: 'ระบุสิ่งที่ห้ามทำ ความยาว ภาษา และวิธีจัดการเมื่อข้อมูลไม่พอ' },
      { title: 'Output schema', detail: 'กำหนด JSON schema หรือรูปแบบตาราง เมื่อต้องนำไปใช้ต่อ' },
      { title: 'Examples', detail: 'Few-shot 1–3 คู่ ช่วยเรื่องรูปแบบมากกว่าความรู้ โดยเฉพาะงาน extraction' },
      { title: 'Success criteria', detail: 'บอกว่า “ดี” หมายถึงอะไร เพื่อให้ตรวจและปรับได้' },
      { title: 'Versioning', detail: 'เก็บ prompt ใน repo พร้อม changelog และ eval result ทุกครั้งที่แก้' }
    ]
  },
  {
    id: 'evaluation',
    title: 'Evaluation Blueprint',
    en: 'Eval Design',
    intro: 'ถ้าวัดไม่ได้ คุณก็แค่เดาว่ามันดีขึ้น',
    items: [
      { title: 'Unit eval', detail: 'ทดสอบชิ้นส่วน เช่น parser, retriever, tool call ด้วย input/output ที่ชัดเจน' },
      { title: 'Task eval', detail: 'วัดว่างานของผู้ใช้สำเร็จหรือไม่ ด้วยชุดเคสที่representative' },
      { title: 'LLM-as-judge', detail: 'ใช้ได้เมื่อมี rubric ชัดและตรวจ calibration กับคน อย่าเชื่อคะแนนเดียวโดยไม่ดูตัวอย่าง' },
      { title: 'Human review', detail: 'สุ่มตรวจอย่างน้อย 20% โดยเฉพาะเคสความเสี่ยงสูงและเคสที่โมเดลมั่นใจสูงแต่ผิด' },
      { title: 'Failure taxonomy', detail: 'จัดกลุ่ม error เช่น retrieval miss, hallucination, format error, refusal ผิด' },
      { title: 'Regression gate', detail: 'ทุกการเปลี่ยน prompt/โมเดลต้องรัน eval เดิมและเทียบผลลัพธ์ก่อน merge' },
      { title: 'Online metrics', detail: 'เพิ่ม task success, edit rate, escalation rate และต้นทุนต่อ task จาก production' }
    ]
  },
  {
    id: 'system',
    title: 'System Design ใน 45 นาที',
    en: 'AI System Design',
    intro: 'เริ่มจากข้อจำกัดและตัวชี้วัด แล้วค่อยเลือกสถาปัตยกรรม',
    items: [
      { title: '1. Clarify', detail: 'ถามผู้ใช้ ปริมาณ ข้อมูลที่มี latency งบ และข้อจำกัดด้านกฎหมาย' },
      { title: '2. Success metric', detail: 'เลือก metric ของธุรกิจและ metric ของโมเดลให้สอดคล้องกัน' },
      { title: '3. Baseline', detail: 'เสนอวิธีง่ายที่สุดก่อน: heuristic, SQL, โมเดลเล็ก หรือ single LLM call' },
      { title: '4. Architecture', detail: 'วาด ingestion → retrieval → orchestration → model → guardrail → observability' },
      { title: '5. Failure modes', detail: 'ระบุสิ่งที่พัง ผลกระทบ และ fallback สำหรับแต่ละจุด' },
      { title: '6. Cost & latency', detail: 'ประมาณ token, จำนวน call, cache, batching และ p95' },
      { title: '7. Rollout', detail: 'เริ่ม shadow mode → canary → full พร้อม kill switch และ rollback' }
    ]
  },
  {
    id: 'engineering',
    title: 'Python & Data Snippets',
    en: 'Engineering',
    intro: 'รูปแบบโค้ดสั้น ๆ ที่ใช้บ่อยในงานข้อมูลและ AI',
    items: [
      { title: 'อ่านไฟล์ใหญ่ทีละบรรทัด', code: "with open('data.jsonl') as f:\n    for line in f:\n        row = json.loads(line)" },
      { title: 'หลีกเลี่ยง mutable default', code: 'def add(item, bucket=None):\n    bucket = [] if bucket is None else bucket\n    bucket.append(item)\n    return bucket' },
      { title: 'Retry แบบ exponential backoff', code: 'for attempt in range(5):\n    try:\n        return call_api()\n    except RateLimitError:\n        time.sleep(min(2 ** attempt, 30))' },
      { title: 'Validate ที่ขอบระบบ', code: 'class Request(BaseModel):\n    query: str = Field(min_length=1, max_length=2000)\n    top_k: int = Field(default=5, ge=1, le=20)' },
      { title: 'Pandas: reset index หลัง concat', code: 'df = pd.concat(parts, ignore_index=True)' },
      { title: 'แยก train/test ก่อนทำ feature', code: 'from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, stratify=y, random_state=42\n)' }
    ]
  },
  {
    id: 'production',
    title: 'Production & Cost',
    en: 'Ship It',
    intro: 'ระบบ AI ที่ดีต้องคาดเดาต้นทุนและความล้มเหลวได้',
    items: [
      { title: 'Cost formula', detail: 'ต้นทุน = (input tokens × ราคา input + output tokens × ราคา output) / 1,000,000 × จำนวน requests' },
      { title: 'Caching', detail: 'cache คำถามที่พบบ่อย, embedding และผลลัพธ์ที่ deterministic — วัด hit rate ก่อนลงทุน' },
      { title: 'Timeout & budget', detail: 'ตั้ง timeout ต่อ downstream call และเพดาน token ต่อ request เสมอ' },
      { title: 'Fallback', detail: 'โมเดลเล็กหรือคำตอบจาก template เมื่อโมเดลหลักล่มหรือช้าเกิน' },
      { title: 'Observability', detail: 'log trace id, latency, token, model, tool calls และ error code โดยไม่ log ข้อมูลอ่อนไหว' },
      { title: 'Drift', detail: 'ติดตามการกระจายของ input, อัตรา refusal, citation rate และ feedback ของผู้ใช้' },
      { title: 'Rollout', detail: 'shadow → canary 5% → 25% → 100% พร้อมตัวชี้วัดและจุดหยุด' }
    ]
  },
  {
    id: 'interview',
    title: 'ตอบสัมภาษณ์ให้ได้คะแนน',
    en: 'Interview',
    intro: 'โครง STAR + trade-off ทำให้คำตอบมีความหนักแน่น',
    items: [
      { title: 'Situation', detail: 'บริบทและข้อจำกัดสั้น ๆ 1–2 ประโยค' },
      { title: 'Task', detail: 'สิ่งที่คุณต้องรับผิดชอบและตัวชี้วัดความสำเร็จ' },
      { title: 'Action', detail: 'สิ่งที่คุณทำจริง ใช้ “ผม/ฉัน” ไม่ใช่ “ทีม” ทั้งหมด' },
      { title: 'Result', detail: 'ตัวเลขก่อน/หลัง พร้อมบริบทและข้อจำกัด' },
      { title: 'Trade-off', detail: 'บอกทางเลือกที่ตัดทิ้งและเหตุผล — นี่คือจุดที่แสดงความเข้าใจจริง' },
      { title: 'Learning', detail: 'สิ่งที่ทำต่างออกไปถ้าเจอเคสเดิมอีก' }
    ]
  }
];
