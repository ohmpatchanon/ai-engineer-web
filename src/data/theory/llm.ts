import type { Lesson } from './types';

export const llmLessons: Lesson[] = [
  {
    id: 't-transformer',
    number: 'T.09',
    slug: 'transformer-mechanics',
    phase: 'llm-engineering',
    title: 'Transformer: สถาปัตยกรรมที่ขับเคลื่อน LLM',
    en: 'Inside the Transformer',
    summary: 'จาก RNN สู่ attention — ว่า Transformer แก้ปัญหา "จำบริบทไกล" ได้อย่างไร ผ่าน self-attention, positional encoding และ KV cache',
    level: 'กลาง',
    prereqLessons: ['language-as-vector', 'neural-networks-inside'],
    linkedModules: ['transformers', 'llm-foundations'],
    teaches: [
      'อธิบาย queries, keys, values ของ self-attention ในประโยคเดียว',
      'เข้าใจว่าทำไม Transformer ถึงประมวลผลแบบขนานได้ (ต่างจาก RNN)',
      'รู้ที่มาของ complexity O(n²) และวิธีลดด้วย attention ที่ปรับแต่ง',
      'อธิบาย KV cache และเหตุผลที่ token แรกช้ากว่า token ถัดไป'
    ],
    keywords: ['transformer', 'attention', 'multi-head', 'query key value', 'positional encoding', 'KV cache', 'scaled dot-product'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'จาก RNN -> ข้อจำกัดของลำดับ',
        paragraphs: [
          'โมเดลภาษาแบบก่อนหน้า (RNN/LSTM) อ่านทีละ token แล้วไล่ state ซ้ำ เพื่อ "จำ" บริบท แต่เมื่อทางยาวขึ้น ยิ่งไกลยิ่งจาง (เช่น ข้อมูลในย่อหน้าแรก เหลือผลน้อยมากตอนท้าย) และยังประมวลผลทีละตัว — เทรน/อนุมานช้าแบบถูกบังคับลำดับ Transformer แก้โดยประมวลผลทุกตำแหน่งพร้อมกัน (parallel) ดังนั้น deep learning จึงขยายสู่ภาษาได้จริง',
          'หลักคิดของ Transformer: token ทุกตัวเข้าถึง token อื่นทุกตัวได้โดยตรง (หนึ่ง hop) จึงต้องเพิ่มข้อมูลลำดับ (positional encoding) เข้าไปอย่างชัดเจน เพราะตัว attention เองไม่รู้ว่าใครอยู่ก่อน-หลัง ส่วนการเทรนก็เป็น "ทำนายคำถัดไป" เหมือนโมเดลภาษา รายละเอียดของ objective อยู่ในบทถัดไป'
        ],
        formula: {
          title: 'Scaled dot-product attention',
          plain: 'Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V',
          note: 'QKᵀ ให้คะแนน "ความเกี่ยวข้อง" ของทุกคู่ / √dₖ ป้องกันค่าถล่ม → softmax ทำเป็นน้ำหนัก → ถ่วง V รวม'
        }
      },
      {
        heading: 'queries, keys, values: การเปรียบเทียบแบบพจนานุกรม',
        paragraphs: [
          'คิดง่าย: keys คือ "ป้ายละของแต่ละ token" (เช่น หมวดหมู่ที่ตอบได้), queries คือ "สิ่งที่ token นี้กำลังหา" และ values คือ "เนื้อหาจริงของ token" attention คำนวณว่า query ตรงกับ key ของ token ไหนมาก แล้วดึง value นั้นมาถ่วงน้ำหนัก — สรุปได้: token "เงินเดือน" จะ boost token ที่ key เป็น "รายได้" เพราะหา relevance ตามความหมาย',
          'Multi-head attention รันหลายชุดของ Q/K/V ขนาน โดยแบ่งหน้าที่กัน: ตัวหนึ่งอาจจับความสัมพันธ์ทางไวยากรณ์ อีกตัวจับการอ้างถึง (coreference) อีกตัวจับระยะทางเชิงตัวเลข การรวมหลายมุมมองพร้อมกันคือสิ่งที่ทำให้ Transformer "เข้าใจ" ความสัมพันธ์หลายชนิดในครั้งเดียว'
        ],
        example: {
          title: 'ประโยคตัวอย่าง',
          body: '"อานนท์หยิบหนังสือจากโต๊ะ แล้วเปิดมัน" — attention ช่วยให้ "มัน" รู้ว่าต้องดู "หนังสือ" แม้ห่างกัน 5 คำ โดย score จาก query ของ "มัน" ตรงกับ key ของ "หนังสือ" สูงสุด'
        }
      },
      {
        heading: 'ทำไมความซับซ้อนเป็น O(n²) และลดยังไง',
        paragraphs: [
          'Attention เปรียบเทียบ token ทุกคู่ จึงใช้เวลาและหน่วยความจำ O(n²) กับความยาว n — ที่ n=128k ของ context ใหญ่ นี้คือต้นทุนหลัก (ทั้งเทรนและ inference) แนวทางลด: attention แบบ windowed (ดูแค่เพื่อนบ้าน), attention แบบ sparse/pattern (เช่น sliding + global token), และ recent linear attention / Mamba ที่ประมาณให้เป็น O(n) หรือ O(n·w)',
          'เมื่อเลือกโมเดล อย่าเชื่อตัวเลข context window อย่างเดียว: ถ้า attention เป็นแบบ local การ "ใช้ได้เต็ม 128k" อาจไม่จริงเท่ากับโมเดล global แบบยาวจริง ควรทดสอบบน prompt ที่ต้องใช้บริบทไกลจริง ๆ'
        ]
      },
      {
        heading: 'KV cache: ทำไม token แรกช้าแต่ token ต่อไปเร็ว',
        paragraphs: [
          'เมื่อสร้างผลลัพธ์ทีละ token, เราไม่ควร recompute attention ของ token เก่าทั้งหมดใหม่ทุกครั้ง — แทนที่เราจะแคช keys/values ของทุก token ก่อนหน้าไว้ (KV cache) แล้วคำนวณเฉพาะ token ใหม่ ต้นทุนจึงลดจาก recompute ทั้งประโยคเหลือแค่ขั้นตอนเดียวต่อ token นั่นคือเหตุผลที่ TTFT (time-to-first-token) ช้ากว่า inter-token latency มาก',
          'แต่ KV cache คือหน่วยความจำที่โตตามความยาว: ยิ่ง context ยาว ยิ่งใช้ RAM สูง (ประมาณ 2×hidden×layers bytes ต่อ token ต่อ batch) — ที่ทำให้ "128k context" แพงในแง่ memory และเหตุผลที่ความยาวจริงถูกจำกัดด้วย hardware ยิ่งกว่าตัวเลขโมเดล'
        ]
      },
      {
        heading: 'ตำแหน่งที่ควรอ่านต่อ',
        bullets: [
          'เมื่อเข้าใจ attention -> ไปดูรายละเอียดของ pre-training objective (next-token prediction) ในบทถัดไป',
          'การประยุกต์กับภาพ (ViT) และเสียง ใช้หลักเดียวกัน (patch กับ token)',
          'ถ้าจะเข้าไปเทรนเอง ควรทำ attention จากศูนย์ใน PyTorch ก่อนใช้ไลบรารี'
        ]
      }
    ]
  },
  {
    id: 't-llm',
    number: 'T.10',
    slug: 'how-llms-behave',
    phase: 'llm-engineering',
    title: 'LLM ทำงานอย่างไรเบื้องหลัง: token, context และ sampling',
    en: 'How LLMs Behave',
    summary: 'LLM คือเครื่องทำนาย "คำถัดไป" ที่ฉลาดเป็นพิเศษ — เข้าใจ tokenizer, context window, ความน่าจะเป็นและการสุ่ม (temperature) ที่เป็นต้นเหตุทั้งความเก่งและความเพี้ยน',
    level: 'กลาง',
    prereqLessons: ['transformer-mechanics'],
    linkedModules: ['llm-foundations', 'prompt-context-engineering'],
    teaches: [
      'อธิบายหลัก next-token prediction และข้อจำกัดของ "ไม่มี ground truth"',
      'เข้าใจ temperature, top-p, top-k ว่าควบคุมความสุ่มอย่างไร',
      'แยก hallucination กับความมั่นใจได้ (confidence ≠ correctness)',
      'รู้ว่าทำไม "การทำตามคำสั่ง" (instruction following) ถึงเป็นทักษะเฉพาะที่ต้องอบรมเพิ่ม'
    ],
    keywords: ['next token prediction', 'temperature', 'top-p', 'sampling', 'hallucination', 'context window', 'instruction following'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'โมเดลรู้เพียง "ยังไงต่อ"',
        paragraphs: [
          'LLM (decoder-only) ถูกฝึกด้วย next-token prediction: ให้ข้อความนำหน้า (prompt) แล้วทำให้ความน่าจะเป็นของ token ต่อไปที่ถูกต้องสูงที่สุด มันไม่ได้ถูกฝึกให้ "ตอบถูก" เชิงโลกความจริง แต่ให้ "ต่อให้เหมือนสไตล์ที่เห็นในข้อมูล" — ความเก่งที่เรารู้สึก คือผลพลอยได้ของการ learnt structure ของภาษา/ความรู้ในข้อความจำนวนมหาศาล',
          'เหตุผลนี้คือรากของทั้งสองด้าน: ด้านดี มันเขียน/สรุปได้เป็นธรรมชาติ ด้านเสี่ยง มัน "ต่อ" อย่างมั่นใจแม้ไม่มีข้อมูลจริง คือที่มาของ hallucination — ไม่ใช่ bug ที่แก้ได้ด้วยข้อมูลแป๊บเดียวนิดหน่อย แต่เป็นผลจาก objective เอง'
        ],
        callout: {
          label: 'KEY',
          text: 'ถามว่า "รู้ไหม" กับ "ตรวจได้ไหม" — โมเดลแค่ทำนายต่อ ไม่มี ground truth ในหัว จึงต้องมี source/verification ภายนอกเสมอสำหรับงานที่ผิดพลาดแพง'
        }
      },
      {
        heading: 'จากคะแนนสู่คำตอบ: sampling และ temperature',
        paragraphs: [
          'โมเดลปล่อย logit → softmax → ความน่าจะเป็นของทุก token ถ้าจะตอบแบบ "ถูกสุด" ใช้ greedy (เลือก token ที่น่าจะเป็นสูงสุด) แต่คำตอบจะซ้ำ/แข็งทื่อ ดังนั้นจึงสุ่ม (sampling) จาก distribution ด้วยอุณหภูมิ temperature: ต่ำ (0-0.3) แทบเป็น deterministic เหมาะงานสกัด/โค้ด, กลาง (0.7-1.0) เหมาะสร้างสรรค์, สูงเกิน (2+) เพี้ยน',
          'top-p (nucleus) หยุดสะสมความน่าจะเป็นจนถึง p แล้วสุ่มเฉพาะในกลุ่มนั้น; top-k จำกัดตัวเลือก k อันดับแรก ทั้งสามเป็น "ตัวก้าน" คนละมิติของการควบคุมการสุ่ม — ถ้าอยากให้ผล deterministic ให้ลด temperature และปิด sampling (อันเดียวที่รับประกันได้ใกล้เคียง)',
          'ข้อควรจำ: seed เดียวกันก็ยังมี randomness จากการรันแบบขนาน/FP เบี่ยง จึงใช้ seed เพื่อ reproducible งานวิจัย แต่ใน product ให้ตั้ง temperature + top-p ตามงาน ไม่ใช่พึ่ง seed'
        ],
        formula: {
          title: 'temperature เปลี่ยนรูปความน่าจะเป็น',
          plain: 'p(token) ∝ exp(logit / T)   (T ต่ำ → หัวแหลม deterministic, T สูง → แบน/สุ่ม)',
          note: 'T→0 เท่ากับ greedy (เลือกสูงสุดเสมอ) T→∞ เท่ากับสุ่มแบบ uniform'
        }
      },
      {
        heading: 'context window และ "ความยาวที่ใช้ได้จริง"',
        paragraphs: [
          'Context window คือจำนวน token สูงสุดที่ป้อนได้ในครั้งเดียว (input+output) ยิ่งโมเดลใหญ่ ยิ่งกว้าง (เช่น 32k-128k-1M) แต่ "ใช้ได้จริง" มักสั้นกว่า: โมเดลให้ความสนใจจุดกลาง/ต้นดี ให้ปลายความยาว precision ลด (attention sink จาก KV cache) และต้นทุนถ่วงแบบ O(n²)',
          'แนวทาง: เก็บเฉพาะบริบทที่เกี่ยวข้อง (retrieval ช่วยตัด), ใช้ summary/compression สำหรับเนื้อหาไกล ๆ และเทสต์จริงด้วย prompt ที่ต้องใช้บริบทไกล ก่อนอ้าง "เราใช้ 128k ได้"'
        ]
      },
      {
        heading: 'ทำไมบางโมเดล "ทำตามคำสั่ง" เก่ง บางตัวไม่',
        paragraphs: [
          'โมเดลที่ pretrain จบ (base model) เก่ง "ต่อให้เหมือน" แต่ไม่เก่ง "instruction following" (ทำตามคำขอ เช่น JSON, format, ไม่ตอบเอง) จนกว่าเราจะทำ post-training: instruction tuning (SFT กับชุดคำสั่ง/คำตอบคุณภาพ) ตามด้วย preference alignment (RLHF/DPO เปรียบเทียบคำตอบที่คนชอบ) — คือเหตุผลที่ ChatGPT-class โมเดล ต่างจาก base version เดิมมาก',
          'ผลเชิงปฏิบัติ: ใช้โมเดลให้ตรงเลเยอร์ที่ฝึก ฐานเอง -> ต่อ/workshop, instruct -> ใช้งานผลิตภัณฑ์ พร้อมเขียน prompt กับ "สไตล์คำตอบ" ที่ถูกอบรมมา และอย่าเทียบ model "ขนาดเดียวกัน" โดยไม่โน้ตถึงชุด data ลับของ SFT ที่ต่างกัน'
        ]
      }
    ]
  },
  {
    id: 't-prompt',
    number: 'T.11',
    slug: 'prompt-theory',
    phase: 'llm-engineering',
    title: 'Prompt engineering เชิงทฤษฎี: ออกแบบ interface กับโมเดล',
    en: 'Prompting as Interface Design',
    summary: 'Prompt ไม่ใช่เวทมนตร์แต่เป็น "สัญญาที่บอกโมเดลว่างานคืออะไร" — เข้าใจหลัก few-shot, chain-of-thought, role/context และวิธีออกแบบให้ทดสอบได้',
    level: 'กลาง',
    prereqLessons: ['how-llms-behave'],
    linkedModules: ['prompt-context-engineering'],
    teaches: [
      'แยกองค์ประกอบของ prompt (role, task, context, format, example, criteria) ได้',
      'อธิบายว่าทำไม few-shot กับ chain-of-thought ถึงเปลี่ยนผลลัพธ์ได้',
      'ออกแบบ prompt ให้เป็น spec ที่นำไป eval ได้ ไม่ใช่ข้อความหลวม ๆ',
      'รู้ข้อจำกัดของ "prompt engineering" เมื่อเทียบกับ tuning'
    ],
    keywords: ['prompt engineering', 'few-shot', 'chain-of-thought', 'system prompt', 'structured output', 'prompt eval'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'Prompt คือ สัญญา ไม่ใช่คาถา',
        paragraphs: [
          'Prompt บอกโมเดลไม่ได้ว่ามัน "ฉลาดขึ้น" แต่บอกว่าอยู่ในบริบทของงานอะไร ต้องการ output แบบไหน และมีเงื่อนไขใด — โมเดลจะเก่งขึ้นเมื่อ prompt ชี้เป้าไปที่ pattern ที่มันเคยเห็นระหว่างเทรน เช่น ให้ role ชัดเจน (persona) กับตัวอย่าง หนึ่งคู่ ช่วยลดความกำกวมได้มากกว่าคำอธิบายยาว ๆ',
          'มุมมองที่เป็นระบบคือ: prompt = สเปกของฟังก์ชัน {input → output} ที่มี (1) งานที่วัดได้, (2) รูปแบบผลลัพธ์ที่บังคับ, (3) เกณฑ์ความสำเร็จ และ (4) ตัวอย่าง ซึ่งแปลให้ทดสอบโดยอัตโนมัติได้ — เมื่อมองแบบนี้ "prompt ดี" จึงไม่ใช่เรื่องลีลาการเขียน แต่เป็นเรื่องความชัดเจนของสัญญา'
        ],
        code: {
          lang: 'text',
          content: 'คุณคือผู้ตรวจสัญญา\nงาน: สกัดคู่สัญญาเป็น JSON\nข้อจำกัด: ห้ามเดา; ถ้าไม่มีค่าให้ null; ใช้ ISO date\nรูปแบบผลลัพธ์: {"party": string|null, "value": number|null, "date": string|null}\nตัวอย่าง: "สัญญาระหว่าง A และ B มูลค่า 250,000 บาท ลงนาม 12 มี.ค. 25" → {"party":"A และ B","value":250000,"date":"2025-03-12"}\nเกณฑ์: ค่าทุกตัวต้องมีหลักฐานในข้อความต้นฉบับ'
        }
      },
      {
        heading: 'few-shot กับ chain-of-thought ทำงานอย่างไร',
        paragraphs: [
          'Few-shot (ให้ตัวอย่าง 2-5 คู่ input/output) ไม่ได้ "สอน" ความรู้ใหม่ แต่เป็นการ adjust รูปแบบและขอบเขตของงาน: ช่วยเรื่อง format, ระดับ detail, และการจัดการ edge case ในตัวอย่าง โดยเฉพาะงาน extraction/classification ที่ผลขึ้นกับรูปแบบตอบ ดีกว่าแค่บอก',
          'Chain-of-thought (ขอให้คิดเป็นขั้น) ทำให้โมเดลวางการคำนวณหลายขั้นเป็น "บันทึกคิด" แทนที่จะปล่อยให้เดาคำตอบเดียวตรง ๆ — ต้นทุนคือ token เพิ่มและ latency — และมีงานที่ CoT มีประโยชน์จริง (คณิต/การให้เหตุผลหลายขั้น) กับงานที่ zero-shot พอ (สรุป จำแนกตรงไปตรงมา) ต้องเทียบว่าคุ้มหรือไม่ไม่ใช่ใช้ตลอด'
        ],
        callout: {
          label: 'NOT A TRICK',
          text: 'Few-shot/CoT เปลี่ยนพฤติกรรมเก่งได้ แต่อย่าเอาไป "ใช้เป็นเคล็ดลับ" โดยไม่รู้กลไก — prompt ที่ดีต้องเข้าคู่กับ eval ที่วัดว่างานเปลี่ยนจริง'
        }
      },
      {
        heading: 'structured output และการให้สัญญาที่ตรวจได้',
        paragraphs: [
          'การสั่งให้ส่ง JSON แค่บอก "รูปแบบ" ไม่รับประกันว่าจะถูกต้อง/valid 100% เทคนิคที่ทำได้จริง: (1) ระบุ schema ชัด + example 1 คู่, (2) function/tool calling ของ provider บังคับโครงสร้างผ่าน API, (3) วงจร retry เมื่อ validate ผ่าน Pydantic แล้วไม่ผ่าน, (4) ตรวจจับและแยก "ยังไม่รู้คำตอบ" (null) ไม่ใช่ปล่อยให้โมเดลเดา',
          'เหตุผลที่ต้องบังคับโครงสร้างซ้ำ (ไม่พึ่ง "ขอเป็น JSON หน่อย" อย่างเดียว) คือ downstream (DB, UI, รอบ eval) ต้องการ schema ที่เป๊ะ — การออกแบบสัญญา output จึงเป็นส่วนหนึ่งของสถาปัตยกรรม ไม่ใช่เรื่องของ prompt เท่านั้น'
        ]
      },
      {
        heading: 'prompt ที่ทดสอบได้คือ prompt ที่ version ได้',
        paragraphs: [
          'ปฏิบัติที่ดีที่สุด: เก็บ prompt ลง repo เป็นไฟล์ (prompts/*.md หรือ module), ทำชุด test (golden set 30-50 เคส) และรัน eval ทุกครั้งที่แก้ prompt ก่อน merge — เพราะ prompt เปลี่ยนนิดเดียวอาจทำผล regression ทั้งชุด เมื่อเทียบผลก่อน/หลัง แล้วใช้ค่านั้นตัดสินแทนความรู้สึก',
          'สิ่งที่ทำให้ prompt เปราะ: การเปลี่ยน model/version หรือ temperature ของ production — prompt ที่ทำงานบนโมเดล A อาจล้มบน B ด้วยชุดข้อมูลเดียวกัน จึงต้องระบุ "prompt นี้ปรับกับโมเดลใด" กำกับไว้เสมอ'
        ]
      }
    ]
  },
  {
    id: 't-embeddings',
    number: 'T.12',
    slug: 'embeddings-and-search',
    phase: 'llm-engineering',
    title: 'Embedding และ semantic search: ระยะทางที่แปลความหมาย',
    en: 'Embeddings & Semantic Search',
    summary: 'เมื่อ "คำ" กลายเป็นเวกเตอร์ คุณจะค้นด้วยความหมายได้ — เรียนเรื่อง metric ระยะทาง, ANN (HNSW), hybrid search และการ rerank ที่ใช้ในระบบค้นจริง',
    level: 'กลาง',
    prereqLessons: ['language-as-vector'],
    linkedModules: ['embeddings-search', 'rag-systems'],
    teaches: [
      'แก้ความต่างของ cosine vs euclidean และเลือกให้ตรงงาน',
      'อธิบาย ANN/HNSW และ trade-off กับ brute-force',
      'ออกแบบ hybrid (BM25 + dense) และการ rerank',
      'ตั้งชุด "golden query" เพื่อวัดคุณภาพ retrieval อย่างเป็นธรรม'
    ],
    keywords: ['embedding', 'cosine similarity', 'ANN', 'HNSW', 'BM25', 'hybrid search', 'reranking', 'vector database'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'ระยะทางตัวไหนใช้ตอนไหน',
        paragraphs: [
          'Cosine similarity วัด "มุม" ระหว่างเวกเตอร์ ไม่สนใจขนาด ผู้ใช้ "ความหมาย" (embedding ปกติ normalize แล้ว cosine == dot product) Euclidean วัดระยะทางจริง รวมขนาดเข้าไปด้วย มักเหมาะ metadata/feature ที่ scale ตรง จุดที่เติมร่วมคือถ้า embed เป็น normalized หรือไม่ — เปลี่ยนผลทั้งหมด — ต้องดู docs ของ model นั้นเสมอ',
          'สำหรับ vector database ที่เลือก "distance metric" ต้องตั้ง constant กับวิธีที่ model ฝึก (เช่น cosine ให้ตั้ง metric=cosine กับ model ที่ normalize) เพื่อให้ index ตรงกับที่การค้นจริงต้องการ'
        ],
        formula: {
          title: 'Cosine similarity',
          plain: 'cos(θ) = (a·b) / (||a|| ||b||)',
          note: 'ค่า 1 = ทิศเดียวกัน (คล้าย), 0 = ตั้งฉาก (ไม่เกี่ยว), -1 = ตรงข้าม'
        }
      },
      {
        heading: 'ANN และ HNSW: ดึงใกล้ไม่ต้องไล่ทั้งหมด',
        paragraphs: [
          'ค้นหา exact ต้องไล่เทียบทุก vector (O(n)) ไม่ไหวเมื่อ n เป็นล้าน ANN (Approximate Nearest Neighbor) ยอมแลก "ความแม่นยำ" เล็กน้อยเพื่อความเร็ว HNSW สร้าง multi-layer graph: ชั้นบนเชื่อมไกล ๆ กระโดดใกล้เป้า แล้วไล่ลงชั้นละเอียด — recall สูง (90%+) ความเร็วสูง แต่ใช้หน่วยความจำเยอะ และ index ต้อง build หลังเพิ่ม data ใหม่',
          'พารามิเตอร์ที่ต้องรู้: efConstruction (build), efSearch (ตอนค้น — ยิ่งสูง recall/ช้า) และ M (กี่เพื่อนต่อโหนด) และความจริงว่า "มี index ใหม่ เพิ่มข้อมูลต้อง re-index หรือใช้ incremental" จึงต้องวาง pipeline จัดการการ sync เอกสารเก่า/ใหม่ — ถ้าเอกสารเปลี่ยนต้องลบ vector เดิมออกไม่ให้ค้าง'
        ]
      },
      {
        heading: 'BM25 และ hybrid search: รวมคำกับความหมาย',
        paragraphs: [
          'Dense retrieval (embedding) เก่งความหมาย (query ใช้คำอื่นแต่ความหมายตรง) แต่เสี่ยง "คำเฉพาะที่หายาก" ที่ embed กลบ (สัญลักษณ์, รหัสสินค้า, คำที่ tokenize กลายเป็นหน่วยต่างกัน) BM25 (keyword/lexical) เก่งการ match คำตรงและคำหายาก แต่ไม่เข้าใจความหมาย — hybrid รวมทั้งสอง (เช่น weighted sum / RRF) มักชนะทั้งคู่',
          'ท่ามาตรฐาน: ใช้ hybrid ควัก candidate 20-50 อัน แล้ว rerank ด้วยวิธีที่ดีกว่า (cross-encoder เปรียบเทียบ query×doc เต็มประโยค) เหลือ 5-8 อัน เข้า context — เสียเวลาน้อยแต่คุณภาพดีกว่าการใช้ embedding ดึงตรง ๆ อย่างเดียว'
        ]
      },
      {
        heading: 'วัดคุณภาพ retrieval ก่อนเชื่อตัวเลข',
        paragraphs: [
          'Retrieval metric หลักคือ recall@k (ใน k อันแรกมีของที่ถูกไหม) และ hit rate ที่ threshold — แต่ metric เปล่าไม่บอก "การใช้งานจบ" ถึงจะปรับ threshold เราก็ต้องรู้ว่า "อันที่ลูกค้าต้องการ" คืออะไร วิธีคือสร้าง golden set: query 30-50 ข้อจากผู้ใช้จริง + เอกสาร/ชิ้นส่วนที่ถูกต้องของแต่ละข้อ รวม query ที่ "ไม่มีคำตอบ" (เพื่อวัดว่าไม่คืนอะไรแทนการเดา)',
          'การสร้าง golden ตอนเริ่ม (ก่อน tuning embedding) ช่วยให้ตัดสินใจ "model เปลี่ยน / chunk เปลี่ยน" ด้วยหลักฐานจริง — ถ้าไม่มี golden คุณจะ tune ตามความ "รู้สึกว่าดีขึ้น" ซึ่งทำให้ผลไม่จริงจัง'
        ]
      }
    ]
  }
];
