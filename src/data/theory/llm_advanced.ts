import type { Lesson } from './types';

export const llmAdvancedLessons: Lesson[] = [
  {
    id: 't-rag',
    number: 'T.13',
    slug: 'rag-inside',
    phase: 'llm-engineering',
    title: 'RAG ภายในระบบ: จาก chunking สู่คำตอบที่อ้างอิงได้',
    en: 'Retrieval-Augmented Generation',
    summary: 'RAG คือการ "ดึงหลักฐานก่อนตอบ" — เข้าใจ pipeline, การเลือก chunk, ตรวจความเทียบเคียง (faithfulness) และวิธีแยกว่า failure มาจากการค้นหรือการเปล่ง',
    level: 'กลาง',
    prereqLessons: ['embeddings-and-search', 'how-llms-behave'],
    linkedModules: ['rag-systems', 'llm-evaluation'],
    teaches: [
      'เขียน pipeline RAG: ingest → retrieve → generate → cite',
      'ออกแบบ chunking + metadata ที่คู่กับคำถามจริง',
      'วินิจฉัย failure ว่าเป็น retrieval หรือ generation ด้วยหลักฐาน',
      'วัดคุณภาพ/ต้นทุนของ RAG แบบแยกส่วน'
    ],
    keywords: ['RAG', 'chunking', 'metadata', 'citation', 'faithfulness', 'groundedness', 'retrieval', 'no-answer'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'RAG แก้ปัญหาอะไร และสถาปัตยกรรมคร่าว ๆ',
        paragraphs: [
          'LLM อย่างเดียวตอบจากความรู้ที่เทรนมา (ล้าสมัย/ไม่มีข้อมูลภายใน/หลงประเด็น) RAG แก้ด้วยการ: (1) ingest เอกสาร → แบ่ง chunk → สร้าง embedding และ index, (2) ตอนตอบ ดึง chunk ที่เกี่ยวข้องกับคำถาม, (3) ใส่เข้า context แล้วสั่งให้ตอบโดยอ้าง chunk นั้น — แบบนี้โมเดลไม่ต้อง "รู้" ข้อมูล แต่ "อ่านจากเอกสาร" แล้วตอบ จึงเพิ่มความทันสมัย/ความน่าเชื่อถือ และลด hallucination ได้ถ้าออกแบบถูก',
          'จุดที่ควรจำคือ RAG ไม่ได้ "ทำให้โมเดลเก่งขึ้น" มันเปลี่ยนงานจาก "จำ/เดา" เป็น "อ่านจากแหล่งที่โยงกลับได้" — คุณภาพผลลัพธ์จึงถูกจำกัดโดยคุณภาพการค้นเป็นหลัก ถ้าดึงผิด ต่อให้ prompt ดีแค่ไหนก็ตอบผิด'
        ],
        callout: {
          label: 'DEBUG ORDER',
          text: 'ตรวจครั้งแรกที่ retrieval (พบเคสไหม) → ต่อด้วย context (เคสนั้นไปอยู่ใน prompt หรือไม่) → แล้ว generation (ตอบตามเคสนั้นหรือร่างความ) — อย่าโทษ prompt ตั้งแต่ทีแรก'
        }
      },
      {
        heading: 'Chunking และ metadata: ของดีต้องมี "ป้ายกำกับ"',
        paragraphs: [
          'ไม่มี chunk size ที่ดีที่สุดแบบสากล: เล็กไปขาดบริบท/โป่ง, ใหญ่ไป retrieval ไม่แม่นและเปลือง token จุดตั้งต้นที่สมเหตุสมผลคือ 300-600 token + overlap 10-15% แล้ววัดกับคำถามจริง พร้อมกับรักษาโครงสร้าง (แบ่งตามหัวข้อ/ย่อหน้า) ด้วย sentence/recursive splitter ไม่ใช่ตัดกลางประโยคมั่ว ๆ',
          'Metadata สำคัญพอ ๆ กับเนื้อหา: เก็บ source id, หน้า/หัวข้อ, วันที่, แผนก (สำหรับ filter สิทธิ์) และ "identifier" ที่ช่วย cross-reference — เพราะใช้ลดขอบเขตการค้น (filter ก่อน re-rank) ใช้แสดง citation และใช้ตรวจว่าหลักฐานมาตามจริง'
        ]
      },
      {
        heading: 'การค้นที่ใช่ ไม่ใช่แค่ "embedding อย่างเดียว"',
        paragraphs: [
          'Search ที่ดีในงานจริง มักเป็น hybrid: ในทาง (1) ได้ candidate จาก BM25 + dense (2) รวมด้วย weighted/RRF (3) ถ้าจำเป็นให้ rerank ด้วย cross-encoder ก่อนตัดเหลือ 5-8 อันเข้ากระทู้ แค่เพิ่ม rerank ก็ได้ quality ที่ประจักษ์เพราะมันเปรียบเทียบ query-ด็อกทั้งคู่เต็ม ๆ ไม่ใช่แค่เวกเตอร์',
          'Filter metadata (org/type/date) ที่ทำก่อนค้นช่วยลด noise และเพิ่มความถูกต้องตามสิทธิ์ — ควรทำที่ stage นี้ ไม่ใช่พึ่ง prompt อธิบาย ถ้าผู้ใช้ที่ได้เห็นได้เฉพาะเอกสารของตัวเอง'
        ]
      },
      {
        heading: 'synthesis: บังคับ citation และ "ไม่มีคำตอบ"',
        paragraphs: [
          'Generation ต้องถูกสั่งให้อ้าง chunk id จริง และตรวจการอ้างในโค้ด (ที่ id อยู่ใน context ไหม) ไม่ใช่เชื่อว่าโมเดลจะอ้างถูกเองเสมอ — และต้องมี เส้นทาง "no-results": เมื่อไม่พบข้อมูล ให้ตอบ "ไม่มีในเอกสาร" แทนการเดา เพื่อลด hallucination กับความมั่นใจที่เกินจริง',
          'เทคนิคเสริมที่ทำให้ grounded ขึ้น: ตัด/จัดเรียง context ก่อนใส่, ไม่ให้โมเดล "สรุปเกิน" เกินขอบเอกสาร และเพิ่ม check หลังหาคำตอบว่าหลักฐานรองรับจริงไหม (ตามระดับ: grounded / partial / ungrounded)'
        ]
      },
      {
        heading: 'วัด RAG แยกส่วนเพื่อรู้ว่าต้องแก้ตรงไหน',
        paragraphs: [
          'ถ้าระบบ "พัง" อย่าวัดแค่คำตอบสุดท้าย เพราะไม่รู้ว่าพังที่ stage ไหน ให้วัด: retrieval quality (recall@k: ของที่ถูกอยู่ใน k อันแรกไหม — ดึง โดยไม่มี LLM generation), context relevance (เคสที่ดึงมา ใช้ตอบได้จริงมีกี่เคส), generation faithfulness (ตอบอ้างหลักฐานจริงหรือเพ้อ) — รวมเป็นเมทริกซ์ง่าย ๆ ที่บอกว่า classic failure อยู่ชั้นไหน',
          'ยิงให้ได้ผล: ตั้งรายงานเป็นชุด "trace" (query → retrieved chunks → final answer) ที่ดูรายกรณีได้ — เพราะตัวเลข เฉลี่ย ซ่อนจุดที่ผิดเฉพาะเจาะจงว่าเป็นเอกสาร/รูปแบบใด'
        ]
      }
    ]
  },
  {
    id: 't-finetune',
    number: 'T.14',
    slug: 'fine-tuning-theory',
    phase: 'llm-engineering',
    title: 'Fine-tuning และ PEFT: เมื่อใดที่ "ฝึกลงข้อมูล" ถึงคุ้ม',
    en: 'Fine-tuning & When It Pays Off',
    summary: 'ไม่ใช่ทุกปัญหาควร fine-tune — เข้าใจความต่างระหว่าง prompt, RAG, fine-tuning และการทำ LoRA/quantization พร้อมกฎการตัดสินใจตามต้นทุน',
    level: 'สูง',
    prereqLessons: ['how-llms-behave', 'rag-inside'],
    linkedModules: ['fine-tuning', 'llm-evaluation'],
    teaches: [
      'อธิบายความต่าง objective ของ SFT, instruction tuning และ RLHF/DPO',
      'อธิบาย LoRA ทำงานอย่างไรและทำไมประหยัด',
      'ใช้ "decision ladder" เพื่อเลือก วิธีปรับโมเดล (prompt → RAG → FT)',
      'ระวังการลงทุน "เทรน" ที่ไม่คุ้มเมื่อเทียบกับแค่ prompt/retrieval'
    ],
    keywords: ['fine-tuning', 'SFT', 'instruction tuning', 'RLHF', 'DPO', 'LoRA', 'PEFT', 'quantization'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'คำศัพท์ 3 ชั้นของ "การปรับ LLM"',
        paragraphs: [
          'SFT (supervised fine-tuning) = เทรนต่อจาก pretrain ด้วยชุด (prompt, completion) ที่คนเขียน/เลือก เพื่อ "เปลี่ยนสไตล์/รูปแบบการตอบ" เช่น กลายเป็นผู้เชี่ยวชาญ format หรือศัพท์เฉพาะ Instruction tuning/alignment = ชั้นที่ทำให้ทำตามคำสั่ง (SFT+RLHF/DPO) ส่วนใหญ่ทำโดยผู้ให้บริการโมเดล คำว่า "fine-tune ของคุณเอง" ในทางปฏิบัติ มักคือ SFT บนข้อมูลของคุณ — ไม่ใช่การสร้างโมเดลความรู้ใหม่จากศูนย์',
          'ความเข้าใจที่ต้องเคลียร์: fine-tune ไม่ได้ "เพิ่มความรู้" ให้โมเดลเรียนรู้จากข้อมูลคุณโดยตรง — มันปรับ ท่าทางการตอบ (format, tone, domain style) หากต้องการให้โมเดล "อ้างอิงข้อมูลจริง" ต้องทำผ่าน RAG/grounding ซึ่งตรวจหลักฐานได้ มิฉะนั้นจะได้ "มั่นใจแบบเดิมแต่ตามสไตล์ใหม่"'
        ]
      },
      {
        heading: 'decision ladder: เลือกวิธีที่ประหยัดที่สุดก่อน',
        bullets: [
          '1) Prompt + ตัวอย่าง (zero/few-shot): เริ่มก่อนเสมอ ต้นทุนต่ำสุด เปลี่ยนได้เร็ว วัดผลง่าย',
          '2) Retrieval/RAG: เมื่อข้อมูลเปลี่ยนแปลงบ่อย/ต้องอ้างหลักฐาน แก้ "ความรู้" โดยไม่ต้องเทรน',
          '3) Fine-tuning (SFT/LoRA): เมื่อรูปแบบ/โทน/ศัพท์เฉพาะต้องคงที่ แม้ prompt ดีแล้วยังเพี้ยน และมีข้อมูลคุณภาพ 300-1,000+ ตัวอย่าง',
          '4) Alignment (RLHF/DPO): เมื่อต้องควบคุม "เลือกแบบไหน" ระหว่างความชอบ ไม่ได้ใช้แค่เพื่อเมตริกเฉย ๆ'
        ],
        callout: {
          label: 'LADDER',
          text: 'ถามทุกครั้ง: ข้อมูลเปลี่ยนบ่อยไหม / ต้องอ้างหลักฐานไหม → RAG ก่อน; ปัญหาคือ format/โทน → prompt แล้วค่อย FT; ปัญหาที่ "วัดไม่ได้" → ไปแก้ eval ก่อนอย่าเพิ่งเทรน'
        }
      },
      {
        heading: 'LoRA: เทรนเมทริกซ์เล็กแทนทั้งโมเดล',
        paragraphs: [
          'LoRA (Low-Rank Adaptation) แช่แข็ง weight เดิม แล้วเพิ่มเมทริกซ์เล็กสองชุด (A, B) ที่ผลคูณประมาณ "การปรับ" ของ weight ตลอดการเทรน — เพราะการปรับของ LLM มักมี rank ต่ำ จึงจับด้วยเมทริกซ์เล็กได้ ทำให้: parameter ที่ต้องเทรนลดหลายร้อยเท่า, VRAM ลด ใช้ consumer GPU ได้ และสลับ adapter ได้หลายชุดต่อ 1 checkpoint',
          'ข้อควรระวัง: ถ้าอยาก "รวม" LoRA หลายชุดเข้าด้วยกันต้อง merge ค่าที่ตั้งไว้, ใช้ rank ประมาณ 8-64 แล้วปรับตามงาน; quantized base (QLoRA) ช่วยประหยัด VRAM อีกชั้น แต่ต้องตรวจว่า precision loss ไม่ทำให้คุณภาพลด — การลดต้นทุนทุกแบบคือ trade-off ที่ควร validate ด้วย eval ไม่ใช่เชื่อว่า "LoRA=ใช้ได้เสมอ"'
        ]
      },
      {
        heading: 'ข้อมูลคุณภาพ กับสิ่งที่ "เทรนแล้วยังไม่ดี"',
        paragraphs: [
          'Fine-tune ส่วนใหญ่พังเพราะข้อมูล ไม่ใช่เพราะเทคนิค: ถ้าชุดของคุณมี (ก) ความไม่สอดคล้องกัน (เดียวกันตอบต่างกัน), (ข) ความยาว/โทนไม่ตรง, (ค) ตัวอย่างน้อย (<300) หรือ (ง) ไม่ครอบคลุม edge case ที่เจอจริง — ผลเทรนอาจ "จำ" train ได้ดีแต่ validation แย่ (การฟิตเกิน) การเตรียม: เขียน guideline (style guide), ตรวจความสอดคล้องด้วย LLM+คน sample, สร้าง test set ที่กันออกจาก train',
          'แนวทางที่ทำให้ fine-tune ชนะ prompt จริง ๆ คือการมี eval ที่จับ "สิ่งที่ prompt แก้ไม่ได้" — ถ้ามีเคสที่ prompt + RAG ยังพลาดเพราะ format/ศัพท์ FT จะชนะ แต่ถ้า eval ยังจับไม่ได้ ก็อย่าเพิ่งเพิ่ม FT (ไม่งั้นจะ tuning เพื่อตัวเลขหลอกตัวเอง)'
        ]
      },
      {
        heading: 'ต้นทุนการตัดสินใจ: รวมผมไม่ใช่แค่ GPU',
        paragraphs: [
          'เวลา dataset curation + annotation ที่คนทำ (แพงสุด)', 
          'เทรน loop + eval + re-run หลายรอบ',
          'serving: เช็ค/model ใหญ่ขึ้น latency และ maintenance ของ adapter หลายชุด',
          'ถ้าใช้ API มี provider จำกัด (และราคา) เทียบกับ open-weight คุณภาพเอง'
        ]
      }
    ]
  },
  {
    id: 't-agents',
    number: 'T.15',
    slug: 'agents-theory',
    phase: 'llm-engineering',
    title: 'Agents: การวางแผน, ใช้เครื่องมือ และความปลอดภัย',
    en: 'Agents in Theory',
    summary: 'Agent คือ "LLM + วงรอบตัดสินใจ + การเข้าถึงเครื่องมือ" — เข้าใจ loop, วิธีเลือกสถาปัตยกรรม (chain/router/agent) และฟันเฟืองที่ต้องมีเพื่อไม่ให้หลุดการควบคุม',
    level: 'สูง',
    prereqLessons: ['how-llms-behave', 'rag-inside'],
    linkedModules: ['agents-tool-use'],
    teaches: [
      'แยกได้ว่าเมื่อไรใช้ single call / chain / router / agent',
      'อธิบาย ReAct loop และเหตุผลที่ต้องจำกัด steps',
      'ออกแบบ tool schema และ permission ที่ปลอดภัย',
      'ประเมิน agent ด้วย trace และ task-level metric'
    ],
    keywords: ['agent', 'ReAct', 'tool calling', 'function calling', 'workflow', 'router', 'guardrail', 'agent loop'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'จาก chain ไปถึง agent: เส้นแบ่งบางมาก',
        paragraphs: [
          'Workflow คือลำดับที่มนุษย์กำหนดตายตัว (chain ส่งผลขั้นต่อกัน, router แยกสาขาตามหมวด) ส่วน Agent คือโมเดลที่ "ตัดสินใจเอง" ว่าจะเรียก tool ไหนและลำดับใด ตามเป้าหมาย จนครบเงื่อนไข โมเดลไม่ได้ฉลาดขึ้น แต่วงรอบได้ autonomy มากขึ้น — และ autonomy ที่เพิ่มก็เพิ่มความเสี่ยง/ต้นทุน/ความไม่คาดเดา จึงไม่ควรเลือก agent ไว้ล่วงหน้า ต้องเริ่มจากสิ่งที่ง่ายสุดวัดได้ก่อน',
          'หลัก ReAct: โมเดลผลัดกัน Reason (คิดว่าต้องทำอะไร) แล้ว Action (เรียก tool/ตอบ) ดูผล (Observation) แล้วคิดต่อ วนไปจนจบ ปมสำคัญคือ "เมื่อใดที่ต้องหยุด" — ถ้าไม่มี step limit/เกณฑ์จบ agent วิ่งวนและเผาต้นทุน/เรียก tool ซ้ำ'
        ],
        callout: {
          label: 'DEFAULT',
          text: 'เริ่มจาก workflow ที่ตายตัว/กำหนดได้ ก่อนยอม autonomy: chain → router → agent โดยปล่อย "ลูบ" ทีละชั้นเฉพาะเมื่อวัดแล้วว่าจำเป็นจริง'
        }
      },
      {
        heading: 'tool calling: schema คือ API ของ agent',
        paragraphs: [
          'เครื่องมือต้องประกาศเป็น schema ชัดเจน (ชื่อ, description ที่บอก "เมื่อไรควรใช้", พารามิเตอร์ + คำอธิบาย) และโมเดลเลือก tool+อาร์กิวเมนต์ผ่าน function calling ของ provider / structured output ข้อผิดพลาดบ่อยคือ description เขียนคลุมเครือ ทำให้ agent เรียก tool ผิด หรือ tool ทับกัน (สองตัวทำคล้าย ๆ กัน) → ลดการเลือกผิดได้ด้วย schema ที่แยกสัญญาณชัด',
          'เวลาเรียกจริง ระวัง: (1) validate อาร์กิวเมนต์ก่อน execution (ตาม schema), (2) ตั้ง timeout และ minimum ค่าอินพุต, (3) ผล tool ต้องกลายเป็น observation ที่โมเดลเห็นอ่านได้ (ไม่ใช่ exception ที่พัง loop), (4) log ทุก tool call (tool, args, latency, result) — นี่คือ "กล่องดำ" ที่ต้องเปิดดูตอน debug'
        ],
        code: {
          lang: 'json',
          content: `{ "name": "query_orders",
  "description": "ค้นหาสถานะคำสั่งซื้อด้วย order_id ใช้เมื่อผู้ใช้ถามเรื่องคำสั่งซื้อ",
  "parameters": {
    "type": "object",
    "properties": { "order_id": { "type": "string" } },
    "required": ["order_id"] } }`
        }
      },
      {
        heading: 'memory, context และการปกป้องข้อมูล',
        paragraphs: [
          'Agent ที่คุยหลายรอบต้องจำ: ฝั่ง stateless (อัดประวัติล่าสุดเข้า prompt) กับฝั่ง persistent (สรุป state สั้น หรือเขียนลง store) — การ "จำให้มาก" ยืด context เปลือง token และสับสน ควรสรุปความก้าวหน้าเป็น bullet สั้น ๆ ตามรอบ ไม่ใช่เก็บบทสนทนาทั้งหมด',
          'สิทธิ์สำคัญกว่า prompt: อย่าเขียน prompt ห้ามทำ X แล้วปล่อยให้ agent เรียก tool ได้ทุกตัว ให้ filter/allowlist เครื่องมือตามบทบาทผู้ใช้จริง และขั้นตอนที่ทำลายข้อมูล (ลบ/ส่ง/เขียนทับ) ต้องมี human-in-the-loop ยืนยันก่อนเสมอ — ความปลอดภัยต้องเป็นสถาปัตยกรรม ไม่ใช่คำสั่งใน prompt'
        ]
      },
      {
        heading: 'ประเมิน agent: ดู trace ไม่ใช่ดูคำตอบสุดท้าย',
        paragraphs: [
          'Metric สำหรับ agent: task success rate (ทำภารกิจสำเร็จตามเกณฑ์), steps เฉลี่ย, tool error rate, ต้นทุนต่อ task (เป็นสิ่งสำคัญ) และ distribution ของ failure modes (tool ผิด args, วน loop, หยุดก่อนจบ ฯลฯ) — ใช้ชุดเคส 30-50 งานพร้อมคำตอบที่ยอมรับได้ (golden) และคะแนนว่ามีการตัดสินใจ "ไม่ได้ตั้งใจ" แค่ไหน',
          'หัวใจของการ debug agent คือ trace ที่อ่านได้: query → reasoning → tool call → observation → ต่อยอด หรือจบ การทบทวน trace รายสัปดาห์ของเคสที่ล้มเหลว (แม้เพียง 20-30 รายการ) ให้ข้อมูลปรับได้จริงมากกว่าตัวเลขเฉลี่ย — ถ้าไม่มี trace อย่าไว้ใจระบบที่ "ดูว่าเวิร์ก"'
        ]
      }
    ]
  }
]
