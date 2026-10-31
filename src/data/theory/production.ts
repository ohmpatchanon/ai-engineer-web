import type { Lesson } from './types';

export const productionLessons: Lesson[] = [
  {
    id: 't-production',
    number: 'T.16',
    slug: 'production-ai-systems',
    phase: 'production',
    title: 'จาก prototype สู่ production: latency, ต้นทุน และการควบคุม',
    en: 'AI Systems in Production',
    summary: 'โมเดล "ทำงาน" ใน demo แต่ต้อง "เสถียร" ใน production — เข้าใจเลเยอร์การควบคุม (timeout, retry, cache, queue), ต้นทุน token และสัญญาที่ให้กับผู้ใช้',
    level: 'สูง',
    prereqLessons: ['how-llms-behave'],
    linkedModules: ['inference-optimization', 'mlops-deployment'],
    teaches: [
      'ออกแบบเลเยอร์ resilience สำหรับ LLM call (timeout, retry, fallback)',
      'ประมาณต้นทุน token และ latency ของระบบล่วงหน้า',
      'แยกความต่างระหว่าง UX ของ streaming กับ synchronous',
      'เลือก "โมเดลให้พอดีงาน" ไม่ใช่ใหญ่สุดเสมอ'
    ],
    keywords: ['production', 'latency', 'throughput', 'cost', 'timeout', 'retry', 'backoff', 'caching', 'queue', 'streaming'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'สิ่งที่ demo ไม่บอก: ความเสถียร',
        paragraphs: [
          'Demo ทำงานกับคน 1 คน เสถียรอย่างเดียวพอ Production ทำงานกับผู้ใช้หลายร้อยพร้อมกัน ท่ามกลาง API ล่ม/ช้า rate limit เครือข่ายผิดพลาด โมเดลที่ "พัง" ไม่ใช่แค่ตรงคำตอบ แต่คือวงจรการเรียกภายนอกทุกจุด งานของวิศวกรคือเปลี่ยน "ความล้มเหลว" เป็น "การเสื่อมอย่างสง่างาม" (graceful degradation) ไม่ใช่พังทั้งระบบ',
          'ท่าพื้นฐาน: ตั้ง timeout (สูงสุดที่ยอมรอ) สำหรับทุก downstream call, retry ด้วย exponential backoff + jitter, circuit breaker พอ external พังซ้ำ และ fallback ไปคำตอบที่ถูกออกแบบไว้ (โมเดลเล็ก/template/แคชเก่า) — ทั้งหมดนี้เป็นโค้ดสถาปัตยกรรม ไม่ใช่ prompt'
        ],
        callout: {
          label: 'DEGRADE, DON\'T CRASH',
          text: 'ผู้ใช้ยอมรับ "ตอบช้า" รึ reply ว่า "ระบบไม่ว่าง ลองใหม่" ดีกว่าหน้าจอ error ลายคา — ออกแบบ fallback ทุกจุดวิกฤติก่อนเปิด'
        }
      },
      {
        heading: 'คณิตต้นทุนและ latency ล่วงหน้า',
        paragraphs: [
          'ต้นทุน LLM = (input tokens × ราคา input + output tokens × ราคา output)/1M × จำนวน call โดยแยกให้เห็น input ที่มาจาก context/retrieval (ส่วนที่ขยายไว ตามเอกสาร) ถ้า RAG ขนาดเอกสารใหญ่ input จะครองต้นทุน — ลดด้วยการตัด/rerank และ cache',
          'Latency ของ LLM ส่วนใหญ่คือ time-to-first-token + ความช้าต่อ token (output) กับ batching/queue ในช่วง load สูง ถ้าจะรับประกัน p95 ต้องทดสอบโหลดจริง (concurrency) และเลือก trade: stream ผลลัพธ์, จำกัด max_tokens, หรือใช้โมเดลเล็ก/เร็วสำหรับงานสั้น — สถิติ p95 สำคัญกว่าเฉลี่ยเสมอ'
        ],
        formula: {
          title: 'ต้นทุนต่อเดือน',
          plain: 'cost = ((in_tok×p_in + out_tok×p_out)/1e6) × requests',
          note: 'อย่าลืม embeddings, retrieval, prompt ที่บังคับ (system), และ retry ที่ทำซ้ำ input'
        }
      },
      {
        heading: 'strategies: cache, แบตช์ และ stream',
        paragraphs: [
          'Cache ชั้นดี: (1) cache ด้วย key ที่ปรับ normalize (คำถามที่พบบ่อย/embedding ที่ deterministic), (2) prompt/context cache (provider เก็บ prefix เหมือน ถามต่อเนื่อง ราคา input ลด), (3) cache การค้น (same doc version) วัด hit rate ก่อนลงทุน เพราะ cache ที่ไม่เคยโดน = เสียเงินเปล่า',
          'Batch (รวมงานหลายคำขอเป็น inference ครั้งเดียว) ช่วย throughput และประหยัด แต่เพิ่ม latency รายคำขอ — เหมาะงานออฟไลน์/คิว ไม่ใช่ real-time UX Streaming เปลี่ยนการรับรู้ latency: แม้ TTFT เท่าเดิม ผู้ใช้รู้สึก "เร็ว" เมื่อเห็นอักษรไหล — เกือบทุกแชท UI ควรเป็น streaming'
        ]
      },
      {
        heading: 'การเลือกโมเดล: พอดีงาน ไม่ใช่ใหญ่สุด',
        bullets: [
          'ไล่จากเล็กสุดที่ eval ผ่าน: บ่อยครั้ง 3-8B ทำงานธรรมดาได้ในราคา/ความเร็วที่ถูกกว่า 10 เท่า',
          'แยกเส้นทาง: งานสั้น/ซ้ำ → โมเดลเล็ก, งานซับซ้อน → ใหญ่สลับ (router)',
          'ตั้ง max_tokens ตามงาน (ไม่ใช่ตามความรู้สึก) เพื่อควบคุมราคา/เวลา',
          'พิจารณา cache/quantization/open-weight เมื่อสเกลหรือต้นทุนเป็นคอขวดจริง'
        ]
      }
    ]
  },
  {
    id: 't-observability',
    number: 'T.17',
    slug: 'observability-and-drift',
    phase: 'production',
    title: 'Observability และ drift: เห็นระบบ "เสื่อม" ก่อนผู้ใช้บ่น',
    en: 'Observing AI Systems',
    summary: 'ถ้าวัดไม่ได้ คุณแค่เดาว่า "ดูดี" — เข้าใจสิ่งที่ต้อง log, metric ที่ต้องติด และวิธีตรวจจับ "ข้อมูล/พฤติกรรมที่เปลี่ยนไป" ก่อนที่คุณภาพจะหล่น',
    level: 'สูง',
    prereqLessons: ['production-ai-systems', 'honest-evaluation'],
    linkedModules: ['monitoring-reliability'],
    teaches: [
      'ออกแบบ log/trace ที่ถูก (trace id, latency, token, model, tool)',
      'รู้ความต่างระหว่าง offline eval กับ online metric',
      'ตรวจจับ drift (input, behaviour, metric) และตอบได้ล่วงหน้า',
      'สร้าง "canary" และ rollback ได้สบาย'
    ],
    keywords: ['observability', 'tracing', 'logging', 'drift', 'online metrics', 'canary', 'rollback', 'evals'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'สิ่งที่คนลืม log (แล้วเดือดร้อน)',
        paragraphs: [
          'ระบบ AI ต้อง log ให้ต่อเนื่อง: trace id ที่ผูกกับทุกขั้น (query → retrieved -> prompt ที่สร้าง -> model/version -> output -> latency/token), การตั้งค่า prompt/version (session/config), การเรียก tool/การตัดสินใจ, และ error/exception ทุกชั้น — ถ้าไม่มี config version กำกับ เมื่อแก้ prompt ไปแล้ว "ผลก่อน-หลัง" จะเทียบไม่ได้',
          'กฎความเป็นส่วนตัว: ห้าม log ข้อมูลอ่อนไหว (เนื้อหาผู้ใช้) เปล่า ๆ — ใช้ hash/redact หรือ log เฉพาะ metadata + ตัวอย่างสุ่มที่ mask แล้ว และกำหนด retention ที่ชัดเจน การ "log ทุกอย่าง" โดยไม่ mask คือหนี้ทางกฎหมาย'
        ]
      },
      {
        heading: 'online metrics: วัดสิ่งที่ eval ออฟไลน์มองไม่เห็น',
        paragraphs: [
          'Offline eval (golden set) บอกว่า "โมเดลนี้ตอบถูกไหม ในชุดที่คุมตัวแปร" แต่ไม่เห็นของจริง: ผู้ใช้จริงถามอะไร, ใช้ต่อหรือไม่, โมเดลถูกเรียกด้วย context ใหญ่แค่ไหน, ต้นทุนจริง, p95 latency — ต้องมี online: task success (จากฟิลด์ที่วัดได้ เช่น จำนวนขั้นที่จบ, rate ยกเลิก, click), escalation/feedback rate, ต้นทุนต่อ request และ "ถ้าแก้ไขช่วย" (edit rate)',
          'การเทียบต้องเป็น "ก่อน/หลังตามเวลา" ด้วย version ที่ fix กัน อย่างเช่น canary rollout: ปล่อยโฟล 5% → 25% → 100% โดย monitor ตัวชี้วัดและจุดหยุด (kill switch) — ห้าม deploy แล้วดูแบบ "แล้วค่อยดูตัวเลขตอนจบเดือน"'
        ]
      },
      {
        heading: 'drift คือต้นตอ "เมื่อวานยังดีวันนี้พัง"',
        paragraphs: [
          'Model doesn\'t "พัง" จากโค้ดที่เปลี่ยน แต่จากสิ่งที่รอบตัวเปลี่ยน: input distribution เปลี่ยน (ผู้ใช้ถามแนวใหม่), data source เปลี่ยน (เอกสารใหม่ format ใหม่), หรือ behaviour ของผู้ใช้เปลี่ยน (กด "ถูกใจ" ต่าง) — กรณี RAG เอกสารเปลี่ยน ทำให้ retrieval เปลี่ยนทั้งระบบ สังเกตแบบเฝ้า: monitor การกระจายของ input, อัตรา refusal, citation rate และ feedback ไม่ใช่แค่ accuracy ตัวเดียว',
          'เมื่อเจอ drift: ต้อง "ดีบักแบบมีหลักฐาน" กลับไปดูตัวอย่างจริงว่าเปลี่ยนตรงไหน (ด้วย trace) แล้วตัดสินใจ: อัปเดตข้อมูล/เอกสาร, ปรับ threshold, ปรับ prompt ใหม่, หรือ re-eval ทั้งชุด — การตอบสนองต้องมี "ปุ่ม" ที่ predefined (runbook) ไม่ใช่การแก้แบบตื่น'
        ],
        callout: {
          label: 'LEADING vs LAGGING',
          text: 'สร้าง "early warning" ที่เห็นก่อนคนบ่น เช่น ระยะเวลา/ต้นทุนขึ้น อัตรา tool error ขึ้น citation rate ลง — พอ threshold ข้าม ก็อัตโนมัติ trigger runbook/แจ้งทีม'
        }
      }
    ]
  }
];
