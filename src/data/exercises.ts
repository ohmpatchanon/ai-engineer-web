import type { QuizQuestion } from './types';

export interface Exercise {
  slug: string;
  title: string;
  en: string;
  kind: 'quiz' | 'prompt' | 'chunker' | 'worksheet' | 'canvas' | 'calculator' | 'blueprint';
  category: string;
  difficulty: 'เริ่มต้น' | 'กลาง' | 'สูง';
  time: string;
  summary: string;
  skills: string[];
  moduleSlug: string;
  questions?: QuizQuestion[];
}

export const exercises: Exercise[] = [
  {
    slug: 'python-drills',
    title: 'Python Drills',
    en: 'Python for AI · 8 drills',
    kind: 'quiz',
    category: 'Python',
    difficulty: 'เริ่มต้น',
    time: '15 นาที',
    summary: 'แบบฝึกหัดอ่านโค้ด หา bug และเลือกวิธีเขียนที่ปลอดภัยสำหรับงานข้อมูล',
    skills: ['typing', 'mutable default', 'comprehension', 'exception', 'pandas'],
    moduleSlug: 'python-for-ai',
    questions: [
      {
        question: 'ผลลัพธ์ของ [x * 2 for x in range(3)] คืออะไร?',
        options: ['[0, 2, 4]', '[2, 4, 6]', '[0, 1, 2]', '[1, 2, 3]'],
        answer: 0,
        explanation: 'range(3) ให้ 0, 1, 2 แล้วคูณสองเป็น 0, 2, 4'
      },
      {
        question: 'โค้ดนี้มีปัญหาใด?\n\ndef add(item, bucket=[]):\n    bucket.append(item)\n    return bucket',
        options: ['ใช้ list ไม่ได้', 'default list ถูกแชร์ระหว่างการเรียก', 'ต้องใช้ tuple', 'ไม่มี return type'],
        answer: 1,
        explanation: 'ค่า default ถูกสร้างครั้งเดียว จึงสะสมข้ามการเรียก ควรใช้ None แล้วสร้าง list ใหม่ข้างใน'
      },
      {
        question: 'ข้อใดอ่านไฟล์ขนาดใหญ่อย่างมีประสิทธิภาพที่สุด?',
        options: ['readlines() ทั้งไฟล์', 'open().read()', 'iterating file object ทีละบรรทัด', 'โหลดเป็น list ก่อน'],
        answer: 2,
        explanation: 'file object เป็น iterator ที่อ่านทีละบรรทัดและใช้หน่วยความจำน้อย'
      },
      {
        question: 'การ catch Exception กว้าง ๆ ใน pipeline ข้อมูลเสี่ยงต่ออะไร?',
        options: ['โค้ดช้าลง', 'กลบ bug และปล่อยข้อมูลเสียไหลต่อ', 'ทำให้ type hints หาย', 'ทำให้ไฟล์ใหญ่ขึ้น'],
        answer: 1,
        explanation: 'ควร catch เฉพาะ error ที่คาดไว้และจัดการอย่างชัดเจน การกลืนทุก error ทำให้ debug ยาก'
      },
      {
        question: 'หากต้องการตรวจว่า dict มี key "user_id" และค่าไม่เป็น None ควรเขียนอย่างไร?',
        options: ['if "user_id" in d:', 'if d.get("user_id"):', 'if "user_id" in d and d["user_id"] is not None:', 'if d.user_id:'],
        answer: 2,
        explanation: 'ต้องตรวจ key ก่อนถึงจะเข้าถึงค่า ไม่อย่างนั้น d["user_id"] จะ raise KeyError; d.get() เป็น truthy test ซึ่งจะตอบ False สำหรับค่าที่ falsy แต่ถูกต้อง เช่น 0 หรือ ""'
      },
      {
        question: 'เหตุใดจึงควรใช้ Pydantic ที่ขอบระบบ?',
        options: ['เพื่อให้โค้ดสั้นลง', 'เพื่อ validate และแปลงข้อมูลภายนอกก่อนใช้', 'เพื่อเพิ่มความเร็ว', 'เพื่อแทน test'],
        answer: 1,
        explanation: 'ข้อมูลจาก API/ไฟล์อาจผิดรูป การ validate ที่ขอบช่วยให้ error ชัดเจนและข้อมูลภายในเชื่อถือได้'
      },
      {
        question: 'ข้อใดเป็น pure function?',
        options: ['ฟังก์ชันที่เขียนไฟล์', 'ฟังก์ชันที่อ่าน environment variable', 'ฟังก์ชันที่รับตัวเลขและคืนผลบวกโดยไม่แก้ state ภายนอก', 'ฟังก์ชันที่เรียก API'],
        answer: 2,
        explanation: 'Pure function ให้ผลเหมือนเดิมสำหรับ input เดียวกันและไม่มี side effect'
      },
      {
        question: 'การ pin dependency ใน production ช่วยเรื่องใด?',
        options: ['ทำให้โค้ดเร็วขึ้น', 'ทำให้ build ซ้ำได้และลดความเสี่ยง dependency พัง', 'ลดจำนวน test', 'เพิ่ม GPU'],
        answer: 1,
        explanation: 'เวอร์ชันที่เปลี่ยนไปอาจทำให้พฤติกรรมเปลี่ยน การ lock เวอร์ชันช่วยให้ environment reproducible'
      }
    ]
  },
  {
    slug: 'sql-drills',
    title: 'SQL Drills',
    en: 'Analytics SQL · 7 queries',
    kind: 'quiz',
    category: 'Data',
    difficulty: 'กลาง',
    time: '20 นาที',
    summary: 'ฝึก JOIN, GROUP BY, window function และการอ่านผลลัพธ์ที่ไม่ตรงคาด',
    skills: ['JOIN', 'GROUP BY', 'window functions', 'CTE', 'data quality'],
    moduleSlug: 'sql-data-modeling',
    questions: [
      {
        question: 'ต้องการนับจำนวนคำสั่งซื้อต่อลูกค้า รวมลูกค้าที่ไม่มีคำสั่งซื้อ ควรใช้ JOIN แบบใด?',
        options: ['INNER JOIN', 'LEFT JOIN จาก customers', 'RIGHT JOIN จาก orders', 'CROSS JOIN'],
        answer: 1,
        explanation: 'LEFT JOIN จาก customers รักษาลูกค้าทุกคน และ COUNT(orders.id) จะได้ 0 สำหรับคนที่ไม่มีคำสั่งซื้อ'
      },
      {
        question: 'หาก join แล้วยอดขายรวมเพิ่มขึ้นผิดปกติ สาเหตุที่พบบ่อยที่สุดคือ?',
        options: ['WHERE ผิด', 'ตารางฝั่งขวามีหลายแถวต่อ key เดียว', 'ใช้ CTE', 'ไม่มี ORDER BY'],
        answer: 1,
        explanation: 'One-to-many join ทำให้แถวฝั่งซ้ายถูกทำซ้ำ ต้อง aggregate ก่อน join หรือตรวจ cardinality'
      },
      {
        question: 'ต้องการจัดอันดับยอดขายภายในแต่ละเดือน ควรใช้ฟังก์ชันใด?',
        options: ['SUM()', 'ROW_NUMBER() OVER (PARTITION BY month ORDER BY sales DESC)', 'COUNT(DISTINCT)', 'COALESCE()'],
        answer: 1,
        explanation: 'Window function พร้อม PARTITION BY ช่วยจัดอันดับภายในกลุ่มโดยไม่ยุบรายละเอียดแถว'
      },
      {
        question: 'WHERE กับ HAVING ต่างกันอย่างไร?',
        options: ['เหมือนกัน', 'WHERE กรองก่อน aggregate, HAVING กรองหลัง aggregate', 'HAVING ใช้กับ JOIN', 'WHERE ใช้กับ window function เท่านั้น'],
        answer: 1,
        explanation: 'WHERE ทำงานบนแถวก่อนจัดกลุ่ม ส่วน HAVING ใช้กรองผลของ GROUP BY'
      },
      {
        question: 'ค่า SUM(sales) เป็น NULL หมายความว่าอะไร?',
        options: ['มียอดขายเป็นศูนย์', 'ไม่มีแถวที่ตรงเงื่อนไข', 'ฐานข้อมูลเสีย', 'ต้องใช้ COUNT'],
        answer: 1,
        explanation: 'SUM ของเซตว่างเป็น NULL ไม่ใช่ 0 ควรใช้ COALESCE หากต้องการแสดงศูนย์'
      },
      {
        question: 'ข้อใดช่วยลดการอ่านข้อมูลทั้งตารางใน query ขนาดใหญ่?',
        options: ['ใช้ SELECT *', 'สร้าง index ที่เหมาะสมกับ filter/join', 'เพิ่ม DISTINCT', 'ใช้ ORDER BY ทุกคอลัมน์'],
        answer: 1,
        explanation: 'Index ที่ตรงกับเงื่อนไขช่วยให้ฐานข้อมูลหลีกเลี่ยง full table scan แต่ต้องดู selectivity ด้วย'
      },
      {
        question: 'ต้องการหา running total ของยอดขายตามวันที่ ควรใช้ window function ใด?',
        options: ['ROW_NUMBER()', 'SUM(sales) OVER (ORDER BY date)', 'RANK()', 'LAG(sales)'],
        answer: 1,
        explanation: 'SUM แบบ window พร้อม ORDER BY จะสะสมยอดตามลำดับวันที่ หมายเหตุ: ค่าเริ่มต้นของ frame คือ RANGE UNBOUNDED PRECEDING … CURRENT ROW (รวมแถวที่ ORDER BY ซ้ำกันทั้งหมด) ถ้าต้องการสะสมทีละแถวให้ระบุ ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW'
      }
    ]
  },
  {
    slug: 'ml-diagnosis',
    title: 'ML Diagnosis Clinic',
    en: 'Debug 6 real-world scenarios',
    kind: 'quiz',
    category: 'ML',
    difficulty: 'กลาง',
    time: '20 นาที',
    summary: 'วินิจฉัยว่าโมเดลมีปัญหา leakage, metric ผิด, overfit หรือ data pipeline ผิด',
    skills: ['evaluation', 'leakage', 'overfitting', 'metric selection'],
    moduleSlug: 'evaluation-experimentation',
    questions: [
      {
        question: 'โมเดลได้ AUC 0.99 บน validation แต่ 0.62 บน production สาเหตุที่น่าจะเป็นที่สุด?',
        options: ['โมเดลเล็กเกินไป', 'leakage หรือ distribution shift', 'ใช้ GPU ผิด', 'learning rate ต่ำ'],
        answer: 1,
        explanation: 'ช่องว่างใหญ่มากมักมาจาก leakage ตอนสร้าง validation หรือข้อมูล production ต่างจาก train อย่างมีนัยสำคัญ ต้องตรวจ feature และ time split'
      },
      {
        question: 'Dataset มี positive 2% แต่โมเดลทาย negative ทั้งหมดได้ accuracy 98% ควรสรุปอะไร?',
        options: ['โมเดลดีมาก', 'accuracy ไม่เหมาะ ต้องดู recall/precision/PR-AUC', 'ต้องเพิ่ม layer', 'ต้องลบ negative ออก'],
        answer: 1,
        explanation: 'Accuracy ถูกครอบงำด้วย majority class ต้องวัดความสามารถจับ positive และต้นทุน false negative'
      },
      {
        question: 'Train loss ลดต่อเนื่อง แต่ validation loss เริ่มเพิ่มขึ้น ควรทำอะไร?',
        options: ['เทรนต่อ', 'หยุดแต่เนิ่น ๆ หรือ regularization/ข้อมูลเพิ่ม', 'เพิ่ม learning rate', 'ลบ validation set'],
        answer: 1,
        explanation: 'นี่คือสัญญาณ overfitting ควรใช้ early stopping, regularization หรือเพิ่มข้อมูล'
      },
      {
        question: 'หลังเพิ่ม feature "จำนวนครั้งที่ติดต่อฝ่ายขาย" โมเดลทำนาย churn ได้แม่นขึ้นมาก ข้อควรสงสัยคือ?',
        options: ['feature นี้ไม่สำคัญ', 'อาจเป็น leakage เพราะการติดต่อเกิดหลังรู้ว่าจะ churn', 'ต้องลบ target', 'ต้องใช้ deep learning'],
        answer: 1,
        explanation: 'Feature ที่เกิดขึ้นหลังเหตุการณ์หรือได้รับผลจาก target อาจไม่พร้อมใช้ตอนทำนายจริง และทำให้ผลดูดีเกินจริง'
      },
      {
        question: 'Cross-validation ให้คะแนนแกว่งมากระหว่าง fold ควรทำอะไรก่อน?',
        options: ['สรุปว่าโมเดลไม่ดี', 'ตรวจขนาด fold, stratification และ leakage', 'เพิ่มจำนวน epoch', 'ลบ outlier ทั้งหมด'],
        answer: 1,
        explanation: 'ความแปรปรวนสูงอาจมาจาก fold เล็ก, class imbalance หรือข้อมูลรั่ว ควรตรวจการออกแบบ CV ก่อนสรุป'
      },
      {
        question: 'ระบบแนะนำสินค้าใช้ click-through rate เป็น metric เดียว อาจพลาดอะไร?',
        options: ['ความหลากหลายและผลกระทบระยะยาว', 'จำนวน user', 'ขนาดโมเดล', 'เวลา train'],
        answer: 0,
        explanation: 'การ optimize CTR อาจนำไปสู่ clickbait และลดความหลากหลาย ควรมี guardrail metric เช่น satisfaction และ retention'
      }
    ]
  },
  {
    slug: 'prompt-lab',
    title: 'Prompt Quality Lab',
    en: 'Analyze and improve a prompt',
    kind: 'prompt',
    category: 'LLM',
    difficulty: 'กลาง',
    time: '15 นาที',
    summary: 'ให้คะแนน prompt ตาม 8 องค์ประกอบ และดูคำแนะนำเพื่อยกระดับเป็น prompt ที่ทดสอบได้',
    skills: ['prompt engineering', 'structured output', 'evaluation criteria'],
    moduleSlug: 'prompt-context-engineering'
  },
  {
    slug: 'rag-chunker',
    title: 'RAG Chunking Lab',
    en: 'Visualize chunking strategies',
    kind: 'chunker',
    category: 'LLM',
    difficulty: 'กลาง',
    time: '15 นาที',
    summary: 'ทดลอง chunk size และ overlap กับข้อความจริง ดูว่าจะเกิดอะไรกับขอบเขตความหมาย',
    skills: ['chunking', 'retrieval', 'RAG design'],
    moduleSlug: 'rag-systems'
  },
  {
    slug: 'eval-worksheet',
    title: 'Eval Design Worksheet',
    en: 'Design a quality scorecard',
    kind: 'worksheet',
    category: 'Evaluation',
    difficulty: 'กลาง',
    time: '20 นาที',
    summary: 'ออกแบบชุดประเมินสำหรับ use case ของคุณ พร้อม failure taxonomy และเกณฑ์ปล่อย launch',
    skills: ['evaluation', 'rubric', 'metrics', 'risk'],
    moduleSlug: 'llm-evaluation'
  },
  {
    slug: 'system-canvas',
    title: 'AI System Design Canvas',
    en: 'From requirement to architecture',
    kind: 'canvas',
    category: 'System Design',
    difficulty: 'สูง',
    time: '30 นาที',
    summary: 'เติม canvas 9 ช่องเพื่อออกแบบระบบ AI ครบตั้งแต่ผู้ใช้ถึง monitoring แล้ว export เป็น brief',
    skills: ['system design', 'trade-off', 'architecture', 'cost'],
    moduleSlug: 'ai-system-design'
  },
  {
    slug: 'agent-blueprint',
    title: 'Agent Blueprint',
    en: 'Design a safe agent workflow',
    kind: 'blueprint',
    category: 'Agents',
    difficulty: 'สูง',
    time: '20 นาที',
    summary: 'เลือก workflow ให้เหมาะกับงาน กำหนด tools, guardrail และ evaluation สำหรับ agent',
    skills: ['agents', 'tool use', 'guardrails', 'observability'],
    moduleSlug: 'agents-tool-use'
  },
  {
    slug: 'token-budget',
    title: 'Token Cost Simulator',
    en: 'Estimate monthly AI spend',
    kind: 'calculator',
    category: 'Production',
    difficulty: 'เริ่มต้น',
    time: '10 นาที',
    summary: 'จำลองต้นทุนรายเดือนจากจำนวนผู้ใช้ ข้อความ และราคาต่อ 1M token พร้อม sensitivity',
    skills: ['cost', 'capacity planning', 'inference'],
    moduleSlug: 'inference-optimization'
  },
  {
    slug: 'debug-challenge',
    title: 'Debug Challenge',
    en: 'Find the failing line',
    kind: 'quiz',
    category: 'Engineering',
    difficulty: 'กลาง',
    time: '15 นาที',
    summary: 'โค้ดและระบบมี bug ที่พบได้จริง หาสาเหตุและเลือกแนวทางแก้ที่ถูกต้อง',
    skills: ['debugging', 'Python', 'data pipeline', 'testing'],
    moduleSlug: 'software-engineering',
    questions: [
      {
        question: 'Pipeline ให้ผลต่างจาก notebook ทุกครั้งที่รัน เพราะใช้ `pd.concat` แล้ว index ซ้ำ ควรแก้อย่างไร?',
        options: ['reset_index(drop=True)', 'ลบข้อมูล', 'ใช้ numpy', 'เพิ่ม sleep'],
        answer: 0,
        explanation: 'Index ซ้ำทำให้การอ้างอิงตำแหน่งและ join ผิดพลาด ควร reset index หลัง concat หรือใช้ ignore_index=True'
      },
      {
        question: 'API call ล้มเหลวเป็นครั้งคราวด้วย 429 ควรจัดการอย่างไร?',
        options: ['retry ทันทีไม่จำกัด', 'retry แบบ exponential backoff + jitter และเคารพ Retry-After', 'ไม่ต้องทำอะไร', 'เพิ่ม temperature'],
        answer: 1,
        explanation: '429 คือ rate limit การ retry ทันทีจะยิ่งแย่ลง ต้องเว้นช่วงและมีขีดจำกัด'
      },
      {
        question: 'LLM ส่ง JSON ที่ parse ไม่ได้ 1% ของเวลา วิธีที่เหมาะสมที่สุดคือ?',
        options: ['ปล่อยผ่าน', 'validate schema และ retry/repair พร้อม fallback', 'เพิ่ม max token สุ่ม', 'ลบ validation'],
        answer: 1,
        explanation: 'ต้องจัดการที่ขอบระบบด้วย schema validation และมีนโยบาย retry/fallback ที่ชัดเจน'
      },
      {
        question: 'Train loss เป็น NaN ตั้งแต่ step แรก สาเหตุที่น่าจะเป็น?',
        options: ['learning rate สูงเกิน, input มี NaN หรือ log(0)', 'GPU ใหม่เกิน', 'dataset ใหญ่เกิน', 'ใช้ batch มากเกิน'],
        answer: 0,
        explanation: 'NaN มักมาจากค่าตัวเลขผิด สูตร loss ไม่เสถียร หรือ learning rate สูงจน exploding'
      },
      {
        question: 'Docker container ทำงานในเครื่อง แต่พังบน production เพราะ import module ไม่ได้ ควรตรวจอะไรก่อน?',
        options: ['เพิ่ม RAM', 'ว่า dependency ถูกติดตั้งใน image และ path/PYTHONPATH ถูกต้อง', 'เปลี่ยน port', 'ปิด firewall'],
        answer: 1,
        explanation: 'ความต่างของ environment มักมาจาก dependency ไม่ครบหรือ path ต่าง ต้อง build image เดียวกันและตรวจ entrypoint'
      },
      {
        question: 'RAG ตอบผิดทั้งที่เอกสารที่ถูกอยู่ใน index สาเหตุที่เป็นไปได้ที่สุด?',
        options: ['โมเดลไม่เก่งภาษา', 'retrieval ไม่ดึงเอกสารนั้นมา หรือ chunk ขาดบริบท', 'ไม่มี GPU', 'prompt สั้นเกินไปเสมอ'],
        answer: 1,
        explanation: 'ถ้าเอกสารอยู่ใน index แต่ไม่ถูก retrieve หรือ chunk ไม่มีบริบทที่จำเป็น ปัญหาอยู่ที่ retrieval/chunking'
      }
    ]
  }
];

export const exerciseBySlug = Object.fromEntries(exercises.map((e) => [e.slug, e]));
