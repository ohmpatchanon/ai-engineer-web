import type { Module } from '../types';

export const llmModules: Module[] = [
  {
    id: 'llm-foundations',
    number: '14',
    slug: 'llm-foundations',
    phase: 'llm-engineering',
    title: 'เข้าใจ LLM อย่างวิศวกร',
    en: 'LLM Foundations',
    summary: 'LLM ทำงานอย่างไร ถูกฝึกอย่างไร และข้อจำกัดใดที่การ prompt ไม่สามารถแก้ได้',
    why: 'ถ้าคุณรู้ว่าโมเดลทำนาย token, ถูก align ด้วยข้อมูล และมี context window จำกัด คุณจะไม่ออกแบบระบบที่ฝากความถูกต้องทั้งหมดไว้กับการ prompt แต่จะสร้าง guardrail และ retrieval ที่เหมาะสม',
    mentalModel: 'LLM เป็น probability engine ที่เก่งเรื่องภาษา แต่ไม่ใช่ฐานข้อมูลและไม่มีความจริงติดตัวมา',
    duration: '1–2 สัปดาห์',
    level: 'กลาง',
    tracks: ['llm', 'product', 'ml'],
    outcomes: [
      'อธิบาย pretraining, SFT และ preference alignment ได้',
      'เข้าใจ token, context window, sampling และ inference cost',
      'แยกงานที่ LLM เหมาะกับไม่เหมาะได้',
      'เลือก open-weight vs closed model ตามข้อจำกัดจริง'
    ],
    topics: [
      { title: 'Pretraining', detail: 'next-token prediction จากข้อมูลขนาดใหญ่, scaling laws และการเกิด capability ที่คาดเดายาก' },
      { title: 'Post-training', detail: 'supervised fine-tuning, instruction tuning, RLHF และ DPO เพื่อทำให้โมเดลมีพฤติกรรมตามที่ต้องการ' },
      { title: 'Token และ context', detail: 'การนับ token, context window, system/user/assistant message และผลต่อต้นทุน/คุณภาพ' },
      { title: 'Inference parameters', detail: 'temperature, top-p, max tokens, stop sequences และ seed พร้อมผลต่อความเสถียร' },
      { title: 'ความสามารถและข้อจำกัด', detail: 'hallucination, knowledge cutoff, reasoning หลายขั้น, arithmetic, ความลำเอียง และการไม่รู้ว่าตัวเองไม่รู้' },
      { title: 'Open vs closed models', detail: 'license, data residency, latency, cost, customization และภาระในการ host เปรียบเทียบกัน' }
    ],
    lab: 'สร้าง benchmark ส่วนตัว 20 prompt เปรียบเทียบ 2 โมเดลในด้านความถูกต้อง รูปแบบ และต้นทุนต่อคำตอบ',
    deliverable: 'ตารางเปรียบเทียบโมเดลพร้อมเกณฑ์ตัดสินและตัวอย่าง output',
    checkpoint: [
      'อธิบายได้ว่า SFT ต่างจาก RLHF อย่างไร',
      'บอกได้ว่าทำไม temperature 0 ยังไม่รับประกันคำตอบซ้ำเดิมทุกครั้ง',
      'แยกงานที่ควรใช้ retrieval แทนการ fine-tune ได้'
    ],
    mistakes: [
      'คิดว่า context window ใหญ่เท่ากับจำทุกอย่างได้แม่น',
      'ใช้ LLM เป็นแหล่งความจริงโดยไม่มีแหล่งอ้างอิง',
      'เลือกโมเดลจาก benchmark สาธารณะโดยไม่ทดสอบงานตัวเอง'
    ],
    resources: [
      { title: 'Anthropic: Introduction to LLMs', url: 'https://docs.anthropic.com/en/docs/intro-to-claude', kind: 'docs' },
      { title: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', kind: 'cookbook' },
      { title: 'Hugging Face LLM Course', url: 'https://huggingface.co/learn/llm-course', kind: 'course' }
    ],
    keywords: ['LLM', 'pretraining', 'RLHF', 'DPO', 'context window', 'inference'],
    quiz: [
      {
        question: 'Hallucination หมายถึงอะไร?',
        options: ['โมเดลตอบช้า', 'โมเดลสร้างข้อมูลที่ดูน่าเชื่อถือแต่ไม่จริง', 'โมเดลปฏิเสธทุกคำถาม', 'โมเดลใช้ token เกิน'],
        answer: 1,
        explanation: 'LLM ทำนาย token ที่น่าจะต่อเนื่อง ไม่ได้ตรวจสอบข้อเท็จจริง จึงอาจสร้างคำตอบที่ผิดอย่างมั่นใจ'
      },
      {
        question: 'งานใดเหมาะกับ RAG มากกว่าการ fine-tune?',
        options: ['ปรับสไตล์การพูด', 'ตอบคำถามจากเอกสารที่เปลี่ยนบ่อย', 'สอนรูปแบบ JSON ใหม่', 'ลดขนาดโมเดล'],
        answer: 1,
        explanation: 'RAG เหมาะเมื่อความรู้เปลี่ยนบ่อยและต้องอ้างอิงแหล่งข้อมูล เพราะอัปเดต index ได้โดยไม่ต้องเทรนโมเดลใหม่'
      }
    ]
  },
  {
    id: 'prompting',
    number: '15',
    slug: 'prompt-context-engineering',
    phase: 'llm-engineering',
    title: 'Prompt & Context Engineering',
    en: 'Prompt & Context Engineering',
    summary: 'ออกแบบ context ที่ทำให้โมเดลทำงานได้แม่นและสม่ำเสมอ ไม่ใช่แค่เขียนคำสั่งยาว ๆ',
    why: 'Prompt ที่ดีคือ spec ที่ทดสอบได้ ระบุบทบาท ข้อมูล ข้อจำกัด รูปแบบผลลัพธ์ และเกณฑ์สำเร็จอย่างชัดเจน ช่วยลดความแปรปรวนและทำให้ระบบดูแลต่อได้',
    mentalModel: 'Context คือพื้นที่ทำงานทั้งหมดของโมเดล ไม่ใช่แค่ประโยคคำสั่ง: ข้อมูลอะไรอยู่ในนั้นและลำดับอย่างไรมีผลทั้งสิ้น',
    duration: '1–2 สัปดาห์',
    level: 'กลาง',
    tracks: ['llm', 'product', 'ml'],
    outcomes: [
      'เขียน prompt ที่มี role, task, context, constraints และ output schema ชัดเจน',
      'ใช้ few-shot และ structured output อย่างมีประสิทธิภาพ',
      'จัดการ context window และเลือกข้อมูลที่จะส่งเข้าโมเดล',
      'สร้างชุดทดสอบ prompt และวัดผลการเปลี่ยนแปลงได้'
    ],
    topics: [
      { title: 'Anatomy of a prompt', detail: 'role, objective, context, constraints, examples, output format และ success criteria พร้อมลำดับที่อ่านง่าย' },
      { title: 'Instruction hierarchy', detail: 'system, developer, user และ tool message ว่าใครมีสิทธิ์เหนือกว่า และเหตุใดไม่ควรฝาก security ไว้กับ prompt' },
      { title: 'Few-shot และ examples', detail: 'เลือกตัวอย่างที่ครอบคลุม edge case, หลีกเลี่ยงความลำเอียงจากตัวอย่าง และรักษารูปแบบ output' },
      { title: 'Structured outputs', detail: 'JSON schema, function calling, grammar-constrained decoding และการ validate ผลลัพธ์ก่อนใช้' },
      { title: 'Context management', detail: 'summarization, retrieval, trimming, priority และการวางข้อมูลสำคัญไว้ต้น/ท้าย context' },
      { title: 'Prompt evaluation', detail: 'golden set, rubric, pairwise comparison และการทดสอบ regression เมื่อเปลี่ยน prompt หรือโมเดล' }
    ],
    lab: 'เขียน prompt 3 เวอร์ชันสำหรับสกัดข้อมูลใบเสร็จ แล้วทดสอบกับ 15 เคสวัด exact-match และ schema validity',
    deliverable: 'Prompt spec + test set + ตารางผลลัพธ์ก่อน/หลังปรับ',
    checkpoint: [
      'แยกคำสั่งที่ขัดแย้งกันใน prompt ได้',
      'ออกแบบ output schema ที่ validate ได้',
      'บอกได้ว่าทำไม “ตอบให้ดี” ไม่ใช่เกณฑ์ที่วัดได้'
    ],
    mistakes: [
      'เขียน prompt ยาวโดยไม่มีตัวอย่างหรือเกณฑ์สำเร็จ',
      'ใช้ chain-of-thought กับทุกงานจนเปลือง token',
      'ทดสอบเฉพาะเคสง่ายและสรุปว่าใช้งานได้'
    ],
    resources: [
      { title: 'Anthropic Prompt Engineering Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview', kind: 'guide' },
      { title: 'OpenAI Prompt Engineering', url: 'https://platform.openai.com/docs/guides/prompt-engineering', kind: 'guide' },
      { title: 'Prompting Guide', url: 'https://www.promptingguide.ai/', kind: 'guide' }
    ],
    keywords: ['prompt engineering', 'structured output', 'few-shot', 'context', 'evaluation'],
    quiz: [
      {
        question: 'ข้อใดทำให้ prompt วัดผลได้มากที่สุด?',
        options: ['ใช้คำว่า “สุดยอด”', 'ระบุ format และเกณฑ์สำเร็จชัดเจน', 'เขียนยาวขึ้นเสมอ', 'ใช้ตัวพิมพ์ใหญ่'],
        answer: 1,
        explanation: 'เกณฑ์ที่ชัดเจนและ output format ที่ตรวจสอบได้ทำให้เปรียบเทียบผลและทำ regression test ได้'
      },
      {
        question: 'Structured output ที่ดีควรทำอะไรเพิ่ม?',
        options: ['ไม่ต้องตรวจ', 'validate ด้วย schema ก่อนใช้งาน', 'แปลงเป็นภาพ', 'สุ่มค่า'],
        answer: 1,
        explanation: 'แม้บังคับ schema โมเดลอาจสร้างค่าที่ผิดเชิงตรรกะ จึงต้อง validate และจัดการ error ที่ขอบระบบ'
      }
    ]
  },
  {
    id: 'embeddings',
    number: '16',
    slug: 'embeddings-search',
    phase: 'llm-engineering',
    title: 'Embeddings และ Semantic Search',
    en: 'Embeddings & Vector Search',
    summary: 'แปลงข้อความเป็นเวกเตอร์ ค้นหาความหมาย และเข้าใจว่าเมื่อไร semantic search ยังไม่พอ',
    why: 'RAG และ recommendation จำนวนมากพึ่ง embedding แต่ embedding ที่เลือกผิดหรือ chunk ที่แย่จะทำให้ทั้งระบบตอบผิด การวัด retrieval quality คือจุดที่แยก prototype กับระบบจริง',
    mentalModel: 'Embedding คือแผนที่ความหมาย: สิ่งที่ใกล้กันในปริภูมิควรเกี่ยวข้องกัน แต่แผนที่ยังมี distortion และ bias',
    duration: '1–2 สัปดาห์',
    level: 'กลาง',
    tracks: ['llm', 'ml', 'product'],
    outcomes: [
      'เลือก embedding model ตามภาษา โดเมน และ budget ได้',
      'เข้าใจ cosine similarity, normalization และมิติของเวกเตอร์',
      'ใช้งาน vector index เช่น HNSW และเข้าใจ trade-off',
      'วัด retrieval quality ด้วย recall@k และ MRR ได้'
    ],
    topics: [
      { title: 'Embedding models', detail: 'bi-encoder, multilingual model, dimension, max tokens และข้อจำกัดด้านภาษาไทย/โดเมนเฉพาะ' },
      { title: 'Similarity', detail: 'cosine, dot product, Euclidean และผลของการ normalize ต่อการจัดอันดับ' },
      { title: 'ANN และ vector index', detail: 'HNSW, IVF, quantization, recall vs latency และการเลือก index ตามขนาดข้อมูล' },
      { title: 'Hybrid search', detail: 'รวม BM25 keyword กับ dense retrieval เพื่อจับชื่อเฉพาะ ตัวเลข และคำที่ embedding พลาด' },
      { title: 'Reranking', detail: 'cross-encoder reranker, latency budget และการลด candidate set ก่อนส่งให้ LLM' },
      { title: 'Retrieval evaluation', detail: 'recall@k, precision@k, MRR, nDCG และการสร้าง query-document relevance set' }
    ],
    lab: 'สร้าง semantic search 50 เอกสาร เปรียบเทียบ dense vs BM25 vs hybrid ด้วย query 20 ข้อ และรายงาน recall@3',
    deliverable: 'Notebook + ตารางเปรียบเทียบ retrieval พร้อมตัวอย่างที่แต่ละวิธีชนะ',
    checkpoint: [
      'อธิบายได้ว่าทำไมต้อง normalize embedding ก่อนใช้ cosine',
      'บอกได้ว่า hybrid search แก้ปัญหาอะไร',
      'อธิบาย trade-off ของ HNSW ได้'
    ],
    mistakes: [
      'ใช้ embedding model ที่ไม่ได้รองรับภาษาไทยแล้วสรุปว่าค้นหาไม่ดี',
      'ประเมิน retrieval ด้วยตาเพียงไม่กี่ตัวอย่าง',
      'embed เอกสารทั้งเล่มยาวเกิน context ของ model'
    ],
    resources: [
      { title: 'Hugging Face: MTEB Leaderboard', url: 'https://huggingface.co/spaces/mteb/leaderboard', kind: 'tool' },
      { title: 'Pinecone: Vector Search Learning Center', url: 'https://www.pinecone.io/learn/', kind: 'guide' },
      { title: 'Sentence Transformers Documentation', url: 'https://www.sbert.net/', kind: 'docs' }
    ],
    keywords: ['embedding', 'cosine similarity', 'HNSW', 'hybrid search', 'recall@k'],
    quiz: [
      {
        question: 'Hybrid search รวมข้อดีของสิ่งใด?',
        options: ['Dense semantic และ keyword lexical', 'Image และ audio', 'Training และ inference', 'SQL และ NoSQL'],
        answer: 0,
        explanation: 'Dense retrieval จับความหมาย ส่วน keyword search จับคำเฉพาะและตัวเลข การรวมกันจึงครอบคลุมกว่า'
      },
      {
        question: 'Recall@k วัดอะไร?',
        options: ['ความเร็วในการค้น', 'สัดส่วนเอกสารที่เกี่ยวข้องซึ่งถูกดึงมาใน top k', 'ขนาดของ index', 'จำนวน token ที่ใช้'],
        answer: 1,
        explanation: 'Recall@k คือสัดส่วน relevant documents ที่ปรากฏในผลลัพธ์ k อันดับแรก เหมาะวัดว่าข้อมูลที่จำเป็นถูกดึงมาครบหรือไม่'
      }
    ]
  },
  {
    id: 'rag',
    number: '17',
    slug: 'rag-systems',
    phase: 'llm-engineering',
    title: 'RAG Systems ที่ใช้งานได้จริง',
    en: 'Retrieval-Augmented Generation',
    summary: 'สร้างระบบตอบคำถามจากเอกสารองค์กร พร้อม citation, guardrail และการวัดคุณภาพครบวงจร',
    why: 'RAG เป็น pattern ที่ถูกใช้มากที่สุดในการนำ LLM ไปใช้งานองค์กร แต่ pipeline ที่ดูง่ายกลับพังได้ทุกจุด ตั้งแต่ parsing, chunking, retrieval ไปจนถึงการอ้างอิง',
    mentalModel: 'RAG คือการส่ง “หลักฐานที่เกี่ยวข้อง” ให้โมเดลก่อนตอบ หากหลักฐานผิดหรือไม่ครบ คำตอบที่ดีที่สุดก็ยังผิด',
    duration: '2–3 สัปดาห์',
    level: 'สูง',
    tracks: ['llm', 'product', 'mlops'],
    outcomes: [
      'ออกแบบ ingestion pipeline ที่รักษาโครงสร้างเอกสารได้',
      'เลือก chunking และ metadata ให้เหมาะกับคำถาม',
      'สร้าง retrieval + reranking + generation พร้อม citation',
      'วัดผลแยก retrieval และ generation เพื่อหา root cause'
    ],
    topics: [
      { title: 'Ingestion และ parsing', detail: 'PDF, HTML, DOCX, ตาราง, OCR และการรักษา heading/หน้า/ลำดับเพื่อใช้อ้างอิง' },
      { title: 'Chunking', detail: 'fixed-size, recursive, semantic และ structure-aware chunking พร้อม overlap และผลต่อ retrieval' },
      { title: 'Metadata และ filters', detail: 'source, section, date, permission และการ filter ก่อนค้นหาเพื่อความถูกต้องและ security' },
      { title: 'Query understanding', detail: 'query rewriting, multi-query, HyDE และการแยกคำถามหลายส่วนออกเป็น sub-question' },
      { title: 'Retrieve → rerank → generate', detail: 'candidate recall, cross-encoder reranking, context packing และ citation ที่ตรวจสอบย้อนกลับได้' },
      { title: 'RAG evaluation', detail: 'context recall/precision, faithfulness, answer relevancy และการแยกวัดว่า retrieval หรือ generation คือปัญหา' }
    ],
    lab: 'สร้าง RAG จากเอกสาร 40 หน้า มี citation, filter ตาม section และ eval set 25 คำถาม พร้อมรายงาน failure cases',
    deliverable: 'RAG app + evaluation report + architecture diagram',
    checkpoint: [
      'อธิบายได้ว่า chunk ใหญ่/เล็กเกินไปเกิดอะไรขึ้น',
      'แยก retrieval failure กับ generation failure ได้',
      'ออกแบบ citation ที่ผู้ใช้ตรวจสอบได้'
    ],
    mistakes: [
      'โยน PDF ทั้งไฟล์เข้า vector store โดยไม่ดูโครงสร้าง',
      'เพิ่มเอกสารเยอะขึ้นเมื่อคำตอบผิดโดยไม่รู้ root cause',
      'ไม่มีชุดคำถามประเมิน ทำให้ปรับอะไรก็ไม่รู้ว่าดีขึ้นไหม'
    ],
    resources: [
      { title: 'Anthropic: Contextual Retrieval', url: 'https://www.anthropic.com/news/contextual-retrieval', kind: 'article' },
      { title: 'LlamaIndex RAG Guides', url: 'https://docs.llamaindex.ai/en/stable/optimizing/production_rag/', kind: 'docs' },
      { title: 'LangChain RAG Tutorial', url: 'https://python.langchain.com/docs/tutorials/rag/', kind: 'tutorial' }
    ],
    keywords: ['RAG', 'chunking', 'retrieval', 'reranking', 'citation', 'faithfulness'],
    quiz: [
      {
        question: 'หากคำตอบ RAG ผิดเพราะไม่พบเอกสารที่เกี่ยวข้อง ควรแก้ที่ใดก่อน?',
        options: ['เพิ่ม temperature', 'ปรับ retrieval/chunking', 'เปลี่ยนชื่อโมเดล', 'ลด max token'],
        answer: 1,
        explanation: 'ถ้า context ที่ส่งให้โมเดลไม่มีข้อมูลที่ถูกต้อง ปัญหาอยู่ที่ retrieval หรือ chunking ไม่ใช่ generation'
      },
      {
        question: 'Faithfulness ใน RAG วัดอะไร?',
        options: ['ความเร็ว', 'คำตอบสอดคล้องกับ context ที่ให้หรือไม่', 'จำนวนเอกสาร', 'ขนาด embedding'],
        answer: 1,
        explanation: 'Faithfulness ตรวจว่าคำตอบมีหลักฐานรองรับจาก context จริง ไม่ได้แต่งข้อมูลนอกเหนือหลักฐาน'
      }
    ]
  },
  {
    id: 'fine-tuning',
    number: '18',
    slug: 'fine-tuning',
    phase: 'llm-engineering',
    title: 'Fine-tuning และการปรับโมเดล',
    en: 'Fine-tuning & Adaptation',
    summary: 'เมื่อ prompt กับ RAG ไม่พอ เรียนรู้วิธีปรับโมเดลอย่างมีวินัย โดยไม่เผางบและไม่ทำโมเดลพัง',
    why: 'Fine-tuning ไม่ใช่ทางลัดสำหรับทุกปัญหา แต่มีประโยชน์เมื่อต้องปรับรูปแบบ พฤติกรรม หรือโดเมนเฉพาะ การสร้าง dataset และการวัดผลคือส่วนที่ยากที่สุด ไม่ใช่การรัน training script',
    mentalModel: 'Fine-tuning เปลี่ยน “นิสัย” ของโมเดล ไม่ใช่อัปเดตฐานความรู้ที่เปลี่ยนทุกวัน',
    duration: '2 สัปดาห์',
    level: 'สูง',
    tracks: ['llm', 'ml'],
    outcomes: [
      'ตัดสินใจได้ว่าเมื่อไรควรใช้ prompting, RAG หรือ fine-tuning',
      'สร้าง dataset สำหรับ instruction tuning ที่มีคุณภาพ',
      'ใช้ LoRA/QLoRA บนโมเดล open-weight ได้',
      'ตรวจ catastrophic forgetting และเปรียบเทียบกับ baseline ได้'
    ],
    topics: [
      { title: 'เมื่อไรควร fine-tune', detail: 'งานที่ต้องปรับสไตล์/รูปแบบ/พฤติกรรมซ้ำ ๆ หรือลดต้นทุน prompt เมื่อ RAG และ prompt engineering ถึงเพดานแล้ว' },
      { title: 'Dataset construction', detail: 'คุณภาพมากกว่าปริมาณ, diversity, hard negatives, chat template และการป้องกันข้อมูลส่วนบุคคล' },
      { title: 'Full fine-tuning vs PEFT', detail: 'LoRA, QLoRA, rank, alpha, target modules และ trade-off ระหว่างคุณภาพกับหน่วยความจำ' },
      { title: 'Training', detail: 'learning rate, epochs, packing, gradient accumulation, evaluation ระหว่างเทรน และ early stopping' },
      { title: 'Catastrophic forgetting', detail: 'โมเดลเก่งงานใหม่แต่ความสามารถเดิมลดลง วิธีตรวจด้วย benchmark เดิมและผสมข้อมูลทั่วไป' },
      { title: 'Distillation และ adaptation', detail: 'ใช้โมเดลใหญ่สร้างข้อมูลให้โมเดลเล็ก, preference optimization และการประเมินผลหลังปรับ' }
    ],
    lab: 'fine-tune โมเดลเล็กด้วย LoRA สำหรับจัดหมวดหมู่ข้อความไทย เปรียบเทียบกับ few-shot baseline บน test set เดียวกัน',
    deliverable: 'Training notebook + dataset card + evaluation เทียบ baseline',
    checkpoint: [
      'อธิบายได้ว่า LoRA ประหยัดหน่วยความจำอย่างไร',
      'บอกความเสี่ยงของการ train บนข้อมูลซ้ำหรือเอียงได้',
      'ออกแบบ test set ที่ไม่ปนกับ training ได้'
    ],
    mistakes: [
      'fine-tune เพื่อเพิ่มความรู้ที่เปลี่ยนบ่อย',
      'วัดผลเฉพาะงานใหม่จนไม่เห็นความสามารถเดิมที่หายไป',
      'ใช้ข้อมูลไม่มีสิทธิ์หรือมี PII โดยไม่ตรวจ'
    ],
    resources: [
      { title: 'Hugging Face PEFT', url: 'https://huggingface.co/docs/peft/', kind: 'docs' },
      { title: 'LoRA paper', url: 'https://arxiv.org/abs/2106.09685', kind: 'paper' },
      { title: 'Unsloth Fine-tuning Guides', url: 'https://docs.unsloth.ai/', kind: 'docs' }
    ],
    keywords: ['fine-tuning', 'LoRA', 'QLoRA', 'PEFT', 'distillation'],
    quiz: [
      {
        question: 'LoRA ช่วยลดอะไรเป็นหลัก?',
        options: ['จำนวน token', 'จำนวนพารามิเตอร์ที่ต้องอัปเดตระหว่างเทรน', 'ความยาว context', 'เวลา inference'],
        answer: 1,
        explanation: 'LoRA แช่แข็งโมเดลฐานและเพิ่ม low-rank adapter ทำให้เทรนเฉพาะพารามิเตอร์จำนวนน้อยลง'
      },
      {
        question: 'งานใดไม่เหมาะกับการ fine-tune เป็นทางแรก?',
        options: ['ปรับโทนการตอบ', 'บังคับ JSON schema', 'ตอบข้อมูลที่อัปเดตทุกวัน', 'จัดหมวดหมู่เฉพาะโดเมน'],
        answer: 2,
        explanation: 'ความรู้ที่เปลี่ยนบ่อยควรอยู่ใน RAG หรือฐานข้อมูล เพื่ออัปเดตได้ทันทีโดยไม่ต้องเทรนใหม่'
      }
    ]
  },
  {
    id: 'llm-eval',
    number: '19',
    slug: 'llm-evaluation',
    phase: 'llm-engineering',
    title: 'Evaluation สำหรับ LLM',
    en: 'LLM Evaluation',
    summary: 'วัดคุณภาพระบบที่ไม่มีคำตอบตายตัว ด้วยชุดทดสอบ rubric และ LLM-as-judge ที่รู้ข้อจำกัด',
    why: 'ทีม LLM ที่ไม่มี evaluation จะวนอยู่กับการเดา การมี eval set ที่ดีทำให้เห็น regression ทันทีเมื่อเปลี่ยน prompt, model หรือ retrieval และตัดสินใจได้ด้วยหลักฐาน',
    mentalModel: 'Evaluation คือผลิตภัณฑ์อีกชิ้นหนึ่ง: ต้องออกแบบ ดูแล และ version control เหมือนโค้ด',
    duration: '2 สัปดาห์',
    level: 'สูง',
    tracks: ['llm', 'product', 'mlops'],
    outcomes: [
      'ออกแบบ evaluation set จาก use case จริงได้',
      'เลือก metric อัตโนมัติและ human review ได้เหมาะสม',
      'ใช้ LLM-as-judge พร้อมตรวจ bias และ calibration',
      'สร้าง regression suite สำหรับ prompt/model/retrieval'
    ],
    topics: [
      { title: 'Evaluation taxonomy', detail: 'capability eval, task eval, safety eval และ online metric แยกวัตถุประสงค์ให้ชัด' },
      { title: 'Golden set design', detail: 'sampling จากผู้ใช้จริง, edge cases, adversarial cases, stratification และการรักษา test set ไม่ให้รั่ว' },
      { title: 'Metrics', detail: 'exact match, F1, semantic similarity, rubric score, pass@k และการวัด latency/ต้นทุนร่วมด้วย' },
      { title: 'LLM-as-judge', detail: 'position bias, verbosity bias, self-preference, การให้ rubric ชัดเจน และการตรวจ agreement กับมนุษย์' },
      { title: 'Human evaluation', detail: 'คำถาม rating ที่ไม่กำกวม, inter-annotator agreement, calibration และการสุ่มตรวจ' },
      { title: 'Regression และ monitoring', detail: 'versioned eval suite, CI gate, canary, user feedback และการติดตาม degradation หลัง deploy' }
    ],
    lab: 'สร้าง eval suite 30 เคสสำหรับผู้ช่วยตอบคำถาม มีทั้ง deterministic checks และ rubric judge พร้อมรายงาน failure taxonomy',
    deliverable: 'Eval harness + scorecard + ตัวอย่าง regression ที่จับได้',
    checkpoint: [
      'อธิบาย bias ของ LLM judge ได้อย่างน้อย 2 ข้อ',
      'แยก metric อัตโนมัติกับ human judgment ได้',
      'ออกแบบ CI gate ที่ไม่ทำให้ทีมช้าจนเกินไปได้'
    ],
    mistakes: [
      'ใช้คำถามเดียวกับที่ใช้พัฒนาเป็น test set',
      'เชื่อคะแนน LLM judge โดยไม่ตรวจกับมนุษย์',
      'วัดเฉพาะ accuracy แต่ไม่วัด latency และต้นทุน'
    ],
    resources: [
      { title: 'OpenAI Evals', url: 'https://github.com/openai/evals', kind: 'tool' },
      { title: 'Anthropic: Evaluating AI Systems', url: 'https://docs.anthropic.com/en/docs/test-and-evaluate', kind: 'docs' },
      { title: 'Inspect AI Evaluation Framework', url: 'https://inspect.aisi.org.uk/', kind: 'tool' }
    ],
    keywords: ['evaluation', 'LLM-as-judge', 'golden set', 'regression', 'rubric'],
    quiz: [
      {
        question: 'เหตุใด LLM-as-judge อาจมี bias ต่อคำตอบยาว?',
        options: ['โมเดลอ่านไม่ได้', 'โมเดลมักให้คะแนนคำตอบที่ดูละเอียดกว่าแม้ไม่ถูกต้อง', 'คำตอบยาวมี token น้อย', 'ไม่มี bias'],
        answer: 1,
        explanation: 'งานวิจัยพบว่า judge อาจให้น้ำหนักกับความยาวหรือรายละเอียดที่ดูน่าเชื่อถือ ต้องควบคุม rubric และทดสอบ bias'
      },
      {
        question: 'Golden set ที่ดีควรมีอะไร?',
        options: ['เฉพาะเคสง่าย', 'เคสจริงหลากหลายรวม edge case', 'คำถามที่โมเดลตอบถูกแล้วเท่านั้น', 'เฉพาะภาษาอังกฤษ'],
        answer: 1,
        explanation: 'ชุดประเมินต้องสะท้อนการใช้งานจริงและครอบคลุม edge case เพื่อตรวจจับจุดที่ระบบล้มเหลว'
      }
    ]
  }
];
