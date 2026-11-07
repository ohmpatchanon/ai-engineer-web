import type { Module } from '../types';

export const impactModules: Module[] = [
  {
    id: 'system-design',
    number: '25',
    slug: 'ai-system-design',
    phase: 'impact',
    title: 'AI System Design',
    en: 'AI System Design',
    summary: 'ประกอบชิ้นส่วนทั้งหมดเป็นระบบเดียวที่ตอบโจทย์ มี trade-off ชัดเจน และ defend ได้ในสัมภาษณ์',
    why: 'AI Engineer ระดับกลางขึ้นไปไม่ได้ถูกวัดที่การเขียนโมเดล แต่ที่การออกแบบระบบที่รองรับผู้ใช้จริง ตั้งแต่ data flow, retrieval, model choice ไปจนถึง evaluation และ cost',
    mentalModel: 'เริ่มจาก requirement และข้อจำกัด แล้วค่อยเลือก technology ห้ามเริ่มจาก “ฉันอยากใช้ vector database”',
    duration: '1–2 สัปดาห์',
    level: 'สูง',
    tracks: ['llm', 'ml', 'mlops', 'product'],
    outcomes: [
      'ตั้ง requirement และ success metric ก่อนออกแบบได้',
      'ออกแบบ end-to-end AI system พร้อม trade-off ได้',
      'ระบุ failure mode, fallback และ security risk ได้',
      'สื่อสาร architecture ให้ทีมและ interviewer เข้าใจได้'
    ],
    topics: [
      { title: 'Requirements first', detail: 'ผู้ใช้คือใคร, งานคืออะไร, latency/คุณภาพ/ต้นทุนที่ยอมรับได้ และข้อจำกัดด้านกฎหมาย/ข้อมูล' },
      { title: 'High-level architecture', detail: 'client, API, orchestration, retrieval, model provider, storage, queue และ observability' },
      { title: 'Data flow และ state', detail: 'ingestion, indexing, cache, session state, feedback loop และ data retention' },
      { title: 'Trade-off analysis', detail: 'quality vs latency vs cost, build vs buy, batch vs real-time, open vs closed model' },
      { title: 'Failure modes', detail: 'provider outage, rate limit, stale index, prompt injection, retrieval miss และ graceful degradation' },
      { title: 'Design communication', detail: 'วาด diagram, ระบุ assumption, อธิบาย trade-off และตอบ follow-up อย่างเป็นระบบ' }
    ],
    lab: 'ออกแบบระบบผู้ช่วยตอบคำถาม HR สำหรับพนักงาน 5,000 คน พร้อม diagram, eval plan, cost model และ failure matrix',
    deliverable: 'Design doc 2 หน้า + architecture diagram + 10 คำถาม follow-up ที่ต้องตอบได้',
    checkpoint: [
      'เริ่มจาก requirement ไม่ใช่ technology ได้',
      'ระบุ fallback เมื่อ LLM provider ล่มได้',
      'ประมาณต้นทุนและ latency คร่าว ๆ ได้',
    ],
    mistakes: [
      'ใส่ทุก technology ที่รู้จักโดยไม่ผูกกับ requirement',
      'ไม่พูดถึง evaluation และ monitoring',
      'ออกแบบโดยไม่คำนึงถึง permission ของข้อมูล'
    ],
    resources: [
      { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', kind: 'repo' },
      { title: 'Machine Learning System Design Interview', url: 'https://www.educative.io/courses/machine-learning-system-design-interview', kind: 'course' },
      { title: 'Anthropic: Architectures for Agents', url: 'https://www.anthropic.com/research/building-effective-agents', kind: 'article' }
    ],
    keywords: ['system design', 'architecture', 'trade-off', 'scalability', 'failure mode'],
    quiz: [
      {
        question: 'ขั้นตอนแรกของการออกแบบ AI system ควรเป็นอะไร?',
        options: ['เลือก vector database', 'กำหนด requirement และ success metric', 'เลือกโมเดลใหญ่ที่สุด', 'ตั้ง Kubernetes'],
        answer: 1,
        explanation: 'Requirement และ metric กำหนดทุกอย่างตั้งแต่ architecture ไปจนถึง model และ budget'
      },
      {
        question: 'Graceful degradation หมายถึงอะไร?',
        options: ['ระบบหยุดทำงานทันที', 'ลดความสามารถบางอย่างเพื่อรักษาบริการหลัก', 'เพิ่มโมเดลอีกตัว', 'ลบข้อมูล'],
        answer: 1,
        explanation: 'เมื่อ dependency ตัวหนึ่งล่ม ระบบควรถอยไปใช้ fallback ที่ยังให้บริการได้บางส่วนแทนการล่มทั้งหมด'
      },
      {
        question: 'Trade-off ที่ต้องระบุตอนออกแบบระบบคืออะไร?',
        options: ['แค่ชื่อ technology', 'quality vs latency vs cost พร้อม build vs buy', 'จำนวนบรรทัดโค้ด', 'สีของ diagram'],
        answer: 1,
        explanation: 'การตัดสินใจทางสถาปัตยกรรมต้องระบุต้นทุนที่แลก เช่น คุณภาพ คำตอบต้นทุน latency ครบ'
      }
    ]
  },
  {
    id: 'security',
    number: '26',
    slug: 'ai-security-privacy',
    phase: 'impact',
    title: 'AI Security และ Privacy',
    en: 'AI Security & Privacy',
    summary: 'ปกป้องระบบ AI จาก prompt injection, data leak และ misuse พร้อมออกแบบ privacy ตั้งแต่ต้น',
    why: 'เมื่อ LLM เข้าถึงข้อมูลและเครื่องมือ มันกลายเป็น attack surface ใหม่ ทั้งผู้ใช้ที่พยายาม jailbreak เอกสารที่มีคำสั่งซ่อน และ tool ที่ถูก abuse ความปลอดภัยจึงเป็นหน้าที่ของ engineer ไม่ใช่แค่ทีม security',
    mentalModel: 'ถือว่าทุก input จากภายนอกเป็น untrusted และทุก output ของโมเดลเป็น untrusted เช่นกัน',
    duration: '1–2 สัปดาห์',
    level: 'สูง',
    tracks: ['llm', 'mlops', 'product'],
    outcomes: [
      'ระบุ threat model ของ LLM app ได้',
      'ป้องกัน direct/indirect prompt injection ได้หลายชั้น',
      'ออกแบบ data minimization, redaction และ access control',
      'รู้มาตรฐานและข้อควรระวังด้านกฎหมายเบื้องต้น'
    ],
    topics: [
      { title: 'Threat modeling', detail: 'ระบุ asset, actor, entry point, trust boundary และผลกระทบก่อนเลือก control' },
      { title: 'Prompt injection', detail: 'direct, indirect ผ่านเอกสาร/เว็บ/tool output และข้อจำกัดของการแก้ด้วย prompt เดียว' },
      { title: 'Data exfiltration', detail: 'การรั่วผ่าน output, markdown image, tool call, log และการแยกข้อมูลตาม tenant/user' },
      { title: 'Insecure output handling', detail: 'ไม่ execute HTML/JS/SQL/command จากโมเดลโดยตรง และ validate/sanitize ทุก boundary' },
      { title: 'Privacy', detail: 'data minimization, PII detection, retention, encryption, consent และ data residency' },
      { title: 'Governance', detail: 'OWASP LLM Top 10, NIST AI RMF, EU AI Act เบื้องต้น และการทำ model/dataset card' }
    ],
    lab: 'ทำ threat model สำหรับ RAG ที่มี tool อ่านอีเมล แล้วออกแบบ guardrail 5 ชั้นพร้อมทดสอบ 10 attack case',
    deliverable: 'Threat model + test cases + mitigation matrix',
    checkpoint: [
      'อธิบาย indirect prompt injection ได้',
      'บอกได้ว่าทำไม prompt “ห้ามทำตามคำสั่งในเอกสาร” ไม่พอ',
      'ออกแบบ least privilege สำหรับ tool ได้'
    ],
    mistakes: [
      'คิดว่า system prompt ป้องกัน injection ได้ทั้งหมด',
      'ส่ง output ของโมเดลเข้า shell/SQL โดยตรง',
      'เก็บ prompt ที่มี PII ไว้ตลอดไปเพื่อ debug'
    ],
    resources: [
      { title: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', kind: 'guide' },
      { title: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework', kind: 'framework' },
      { title: 'Anthropic: Prompt Injection Defenses', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/mitigate-jailbreaks', kind: 'docs' }
    ],
    keywords: ['prompt injection', 'privacy', 'OWASP', 'least privilege', 'PII'],
    quiz: [
      {
        question: 'Indirect prompt injection มาจากไหน?',
        options: ['ผู้ใช้พิมพ์คำสั่งโดยตรง', 'เนื้อหาที่โมเดลอ่าน เช่น เอกสารหรือเว็บ', 'ข้อผิดพลาดของ GPU', 'การตั้ง temperature'],
        answer: 1,
        explanation: 'เนื้อหาภายนอกที่ถูกนำเข้า context อาจมีคำสั่งซ่อนอยู่และหลอกโมเดลให้ทำสิ่งที่ไม่ควร'
      },
      {
        question: 'การป้องกันที่สำคัญที่สุดสำหรับ tool ที่เข้าถึงข้อมูลคือ?',
        options: ['เพิ่ม temperature', 'least privilege และ authorization ที่ server', 'ซ่อน tool จาก prompt', 'ใช้โมเดลใหญ่ขึ้น'],
        answer: 1,
        explanation: 'สิทธิ์ต้องถูกบังคับที่ระบบ ไม่ใช่พึ่งโมเดล การให้ tool เข้าถึงเท่าที่จำเป็นลดผลกระทบหากถูกหลอก'
      },
      {
        question: 'Indirect prompt injection ต่างจาก direct อย่างไร?',
        options: ['ไม่มีความต่าง', 'indirect มาจากเนื้อหาที่โมเดลอ่าน (เอกสาร/เว็บ/tool output) ไม่ใช่จากผู้ใช้โดยตรง', 'direct รุนแรงกว่าเสมอ', 'ป้องกันง่ายเท่ากัน'],
        answer: 1,
        explanation: 'เนื้อหาภายนอกที่ถูกโหลดเข้า context อาจมีคำสั่งซ่อนอยู่ จึงต้องถือว่า input ที่โมเดลอ่านเป็น untrusted'
      }
    ]
  },
  {
    id: 'responsible',
    number: '27',
    slug: 'responsible-ai-product',
    phase: 'impact',
    title: 'Responsible AI และ Product Sense',
    en: 'Responsible AI & Product Sense',
    summary: 'สร้าง AI ที่มีประโยชน์จริง ยุติธรรม โปร่งใส และออกแบบ UX ที่ทำให้ผู้ใช้ไว้ใจได้อย่างเหมาะสม',
    why: 'เทคโนโลยีที่ดีแต่แก้ผิดปัญหาหรือทำร้ายกลุ่มคนบางกลุ่มก็ไม่ใช่ความสำเร็จ AI Engineer ต้องร่วมตั้งคำถามว่าใครได้ประโยชน์ ใครเสี่ยง และจะวัดคุณค่าที่แท้จริงอย่างไร',
    mentalModel: 'ความ trustworthy ไม่ใช่คุณสมบัติของโมเดล แต่เป็นผลลัพธ์ของการออกแบบระบบ คน และกระบวนการร่วมกัน',
    duration: '1–2 สัปดาห์',
    level: 'สูง',
    tracks: ['product', 'llm', 'ml'],
    outcomes: [
      'ประเมิน bias และผลกระทบต่อกลุ่มผู้ใช้ได้',
      'ออกแบบ UX สำหรับความไม่แน่นอนและ human oversight',
      'ตั้ง product metric ที่ไม่ใช่แค่ engagement',
      'เขียน model card และ communication ที่โปร่งใส'
    ],
    topics: [
      { title: 'Problem framing', detail: 'ตรวจว่าปัญหาควรแก้ด้วย AI ไหม ใครเป็นผู้ได้/เสีย และมีทางเลือกที่ไม่ใช้ AI หรือไม่' },
      { title: 'Fairness', detail: 'group fairness, disparate impact, proxy variable และการวัดผลแยกกลุ่มโดยไม่ลดทอน privacy' },
      { title: 'Transparency', detail: 'อธิบายข้อจำกัด, แหล่งข้อมูล, confidence และเหตุผลของการตัดสินใจในระดับที่ผู้ใช้เข้าใจ' },
      { title: 'UX สำหรับ AI', detail: 'uncertainty, citations, edit/undo, feedback, human-in-the-loop และการไม่ทำให้ผู้ใช้เข้าใจผิดว่า AI ถูกเสมอ' },
      { title: 'Product metrics', detail: 'task success, time-to-value, retention ที่มีคุณภาพ, trust และ guardrail metric ไม่ใช่แค่ clicks' },
      { title: 'Governance', detail: 'model card, data card, audit trail, approval process และการติดตามผลหลัง launch' }
    ],
    lab: 'ทำ product review ของฟีเจอร์ AI ที่มีอยู่: ระบุ stakeholder, harm, metric, guardrail และข้อเสนอปรับปรุง',
    deliverable: 'Responsible AI review 1 หน้า + ก่อน/หลังปรับ UX',
    checkpoint: [
      'ระบุ stakeholder ที่อาจเสียประโยชน์ได้',
      'ออกแบบ guardrail metric ได้',
      'อธิบายข้อจำกัดของโมเดลให้ผู้ใช้ทั่วไปเข้าใจได้'
    ],
    mistakes: [
      'วัดแค่ engagement โดยไม่ดูคุณภาพงาน',
      'ถือว่า fairness เป็นเรื่องของทีม legal',
      'เพิ่ม AI โดยไม่มีทางให้ผู้ใช้ปฏิเสธหรือแก้ไข'
    ],
    resources: [
      { title: 'Microsoft Responsible AI Standard', url: 'https://www.microsoft.com/en-us/ai/responsible-ai', kind: 'framework' },
      { title: 'Google People + AI Guidebook', url: 'https://pair.withgoogle.com/guidebook/', kind: 'guide' },
      { title: 'Hugging Face Model Cards Guide', url: 'https://huggingface.co/docs/hub/model-cards', kind: 'docs' }
    ],
    keywords: ['responsible AI', 'fairness', 'transparency', 'UX', 'governance'],
    quiz: [
      {
        question: 'Guardrail metric คืออะไร?',
        options: ['metric ที่ทำให้ระบบเร็ว', 'metric ที่ต้องไม่แย่ลงแม้ metric หลักดีขึ้น', 'metric สำหรับ training', 'metric ที่ลบได้'],
        answer: 1,
        explanation: 'Guardrail metric ป้องกันการ optimize มากเกินไปจนทำลายด้านอื่น เช่น ความปลอดภัยหรือความพึงพอใจระยะยาว'
      },
      {
        question: 'Human-in-the-loop เหมาะที่สุดในกรณีใด?',
        options: ['ทุกงานไม่มีข้อยกเว้น', 'การตัดสินใจที่มีผลกระทบสูงและไม่แน่นอน', 'งานที่ตอบเร็วมาก', 'เมื่อไม่มีผู้ใช้'],
        answer: 1,
        explanation: 'การให้มนุษย์ตรวจในจุดที่มีความเสี่ยงสูงช่วยลด harm แต่ต้องออกแบบให้ไม่กลายเป็นการ rubber-stamp'
      },
      {
        question: 'Model card ควรระบุอะไรเป็นขั้นต่ำ?',
        options: ['ชื่อคนสร้าง', 'ขอบเขตการใช้งาน ข้อจำกัด metric และข้อมูลที่ทราบ/ไม่ทราบ', 'จำนวนบรรทัด', 'ราคา'],
        answer: 1,
        explanation: 'Model card คือเอกสารความโปร่งใสว่าออกแบบมาใช้ในอะไร ใช้ไม่ได้ในอะไร และวัดผลอย่างไร'
      }
    ]
  },
  {
    id: 'career',
    number: '28',
    slug: 'portfolio-career',
    phase: 'impact',
    title: 'Portfolio และเส้นทางอาชีพ',
    en: 'Portfolio & Career',
    summary: 'แปลงความรู้เป็นหลักฐานที่ recruiter และทีมเทคนิคเห็นคุณค่า พร้อมแผนหางานที่เป็นระบบ',
    why: 'ตลาดงาน AI แข่งขันและเต็มไปด้วยคนที่พูดว่าใช้ GPT ได้ สิ่งที่ทำให้คุณแตกต่างคือหลักฐานว่าคุณสร้างระบบ วัดผล และตัดสินใจทางวิศวกรรมได้จริง',
    mentalModel: 'Portfolio ไม่ใช่ gallery ของโปรเจกต์ แต่เป็นชุดข้อโต้แย้งว่าคุณแก้ปัญหาประเภทนี้ได้',
    duration: '1 สัปดาห์',
    level: 'เริ่มต้น',
    tracks: ['llm', 'ml', 'product', 'mlops'],
    outcomes: [
      'เลือกและออกแบบ 3 โปรเจกต์ที่สื่อความสามารถต่างกัน',
      'เขียน case study ที่มีปัญหา วิธีการ ตัวเลข และบทเรียน',
      'เตรียม resume และคำตอบสัมภาษณ์แบบ STAR',
      'วางแผนสมัครงานและการสร้าง network อย่างเป็นระบบ'
    ],
    topics: [
      { title: 'Portfolio strategy', detail: 'เลือก 3 ชิ้น: depth, breadth และ product impact พร้อมหลีกเลี่ยงโปรเจกต์ tutorial ที่ไม่มี decision ของคุณ' },
      { title: 'Case study writing', detail: 'problem → constraints → approach → evaluation → trade-off → lesson โดยมีตัวเลขและภาพประกอบ' },
      { title: 'GitHub และ README', detail: 'โครงสร้าง repo, demo ที่รันได้, sample data, architecture diagram และข้อจำกัดที่ซื่อสัตย์' },
      { title: 'Resume และ LinkedIn', detail: 'เขียน impact แบบวัดผล, keyword ที่ถูกต้อง, ความยาว 1–2 หน้า และการปรับตาม JD' },
      { title: 'Interview prep', detail: 'coding, ML fundamentals, AI system design, take-home และ behavioral ด้วย STAR' },
      { title: 'Job search system', detail: 'target list, referral, application tracker, weekly review และการรับมือ rejection' }
    ],
    lab: 'เขียน case study 1 ชิ้นจากโปรเจกต์ที่มีอยู่ พร้อมตัวเลขผลลัพธ์ และทำ mock interview 3 รอบ',
    deliverable: 'Portfolio page + resume + interview answer bank',
    checkpoint: [
      'เล่าโปรเจกต์ใน 90 วินาทีได้',
      'อธิบาย trade-off ที่ตัวเองเลือกได้',
      'บอกตัวเลขผลลัพธ์และวิธีวัดได้'
    ],
    mistakes: [
      'ใส่โปรเจกต์ tutorial โดยไม่อธิบายการตัดสินใจของตัวเอง',
      'เขียนว่า “ใช้ GPT-4 ทำแชทบอท” โดยไม่มีปัญหาและผลลัพธ์',
      'สมัครงานแบบ mass apply โดยไม่ปรับ resume'
    ],
    resources: [
      { title: 'GitHub: Build a Portfolio', url: 'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile', kind: 'docs' },
      { title: 'Tech Interview Handbook', url: 'https://www.techinterviewhandbook.org/', kind: 'guide' },
      { title: 'Chip Huyen: AI Engineering', url: 'https://huyenchip.com/ml-interviews-book/', kind: 'book' }
    ],
    keywords: ['portfolio', 'resume', 'interview', 'career', 'case study'],
    quiz: [
      {
        question: 'Case study ที่ดีที่สุดควรมีอะไร?',
        options: ['เฉพาะ screenshot', 'ปัญหา ข้อจำกัด วิธีวัดผล และ trade-off', 'รายชื่อ library', 'โค้ดทั้งหมด'],
        answer: 1,
        explanation: 'ผู้จ้างต้องการเห็นกระบวนการคิดและการตัดสินใจ ไม่ใช่แค่ผลลัพธ์หน้าจอ'
      },
      {
        question: 'เหตุใด mass apply จึงมักไม่ได้ผล?',
        options: ['ใช้เวลาน้อยเกินไป', 'ขาดการปรับให้ตรงกับ role และไม่มี referral/หลักฐานที่เกี่ยวข้อง', 'บริษัทไม่รับสมัครออนไลน์', 'resume ยาวเกินไปเสมอ'],
        answer: 1,
        explanation: 'การสมัครแบบเฉพาะเจาะจงและมี network เพิ่มโอกาสได้มากกว่าการส่ง resume เดียวกันไปทุกที่'
      },
      {
        question: 'Portfolio ที่สื่อว่าแก้ปัญหาจริงได้ควรมีอะไร?',
        options: ['แคปจออย่างเดียว', 'ปัญหา ข้อจำกัด วิธีตัดสินใจ ตัวเลขผลลัพธ์ และบทเรียน', 'รายชื่อ library อย่างเดียว', 'โค้ดทั้งหมดโดยไม่สรุป'],
        answer: 1,
        explanation: 'หลักฐานที่เห็น value คือกระบวนการคิดและการตัดสินใจพร้อมตัวเลข ไม่ใช่โปรเจกต์ tutorial ที่ไม่มี decision ของผู้สร้าง'
      }
    ]
  }
];
