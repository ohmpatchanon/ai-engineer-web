import type { Module } from '../types';

export const productionModules: Module[] = [
  {
    id: 'agents',
    number: '20',
    slug: 'agents-tool-use',
    phase: 'production',
    title: 'Agents และ Tool Use',
    en: 'Agents & Tool Use',
    summary: 'ออกแบบระบบที่ LLM เรียกเครื่องมือ วางแผน และทำงานหลายขั้นได้ โดยไม่สูญเสียการควบคุม',
    why: 'Agent ที่ดีไม่ใช่โมเดลที่ autonomous ที่สุด แต่เป็นระบบที่กำหนดขอบเขตเครื่องมือ ชัดเจน มี state, guardrail และประเมินผลได้ ทีมส่วนใหญ่ได้ผลดีกว่าจาก workflow ที่ควบคุมได้',
    mentalModel: 'เริ่มจาก workflow ที่มีขั้นตอนชัดเจนก่อน ถ้าต้องการการตัดสินใจแบบพลวัตจริง ๆ ค่อยเพิ่ม autonomyทีละนิด',
    duration: '2 สัปดาห์',
    level: 'สูง',
    tracks: ['llm', 'product', 'mlops'],
    outcomes: [
      'แยก workflow ออกจาก agent และเลือกได้เหมาะสม',
      'ออกแบบ tool schema ที่ปลอดภัยและตรวจสอบผลลัพธ์ได้',
      'จัดการ memory, state, retry และ error recovery',
      'สร้าง evaluation สำหรับงานหลายขั้นและ trace การตัดสินใจได้'
    ],
    topics: [
      { title: 'Workflow vs agent', detail: 'chain, router, orchestrator-worker และ autonomous loop พร้อมข้อดีด้านความคาดเดาได้ vs ความยืดหยุ่น' },
      { title: 'Tool calling', detail: 'schema, คำอธิบายเครื่องมือ, input validation, authorization และการไม่เปิดเครื่องมืออันตรายโดยไม่มีการยืนยัน' },
      { title: 'Planning และ state', detail: 'ReAct, plan-and-execute, scratchpad, checkpoint และการรักษา state ให้ตรวจสอบย้อนหลังได้' },
      { title: 'Memory', detail: 'ระยะสั้น memory ใน context, persistent memory ในฐานข้อมูล และความเสี่ยงจากข้อมูลเก่าหรือเป็นพิษ' },
      { title: 'Multi-agent', detail: 'เมื่อไรควรแยก agent, การสื่อสาร, ความซ้ำซ้อน, ต้นทุน และปัญหา error compounding' },
      { title: 'Agent evaluation', detail: 'task success, steps, tool-call accuracy, cost, latency, trace review และการทดสอบกับ environment จำลอง' }
    ],
    lab: 'สร้าง agent ช่วยค้นและสรุปเอกสารภายใน โดยมี tool 3 ตัว, permission check, trace log และ eval 10 งาน',
    deliverable: 'Agent demo + trace viewer + failure analysis',
    checkpoint: [
      'อธิบายได้ว่าเมื่อไร workflow ดีกว่า agent',
      'ออกแบบ tool ที่ idempotent ได้',
      'บอกวิธีป้องกัน agent วนซ้ำไม่จบได้'
    ],
    mistakes: [
      'ให้ agent เข้าถึง tool ที่ทำลายข้อมูลได้โดยไม่มีการยืนยัน',
      'ไม่มี step limit หรือ budget ทำให้ค่าใช้จ่ายบาน',
      'ประเมินเฉพาะคำตอบสุดท้ายโดยไม่ดู tool trace'
    ],
    resources: [
      { title: 'Anthropic: Building Effective Agents', url: 'https://www.anthropic.com/research/building-effective-agents', kind: 'article' },
      { title: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/', kind: 'docs' },
      { title: 'OpenAI Agents Guide', url: 'https://platform.openai.com/docs/guides/agents', kind: 'docs' }
    ],
    keywords: ['agent', 'tool calling', 'MCP', 'planning', 'memory', 'trace'],
    quiz: [
      {
        question: 'ข้อใดเป็นเหตุผลที่ดีที่สุดในการเลือก workflow แทน agent?',
        options: ['ดูทันสมัยกว่า', 'ต้องการความคาดเดาได้และ debug ง่าย', 'ใช้ token น้อยกว่าเสมอ', 'ไม่ต้องมี evaluation'],
        answer: 1,
        explanation: 'Workflow ที่กำหนดขั้นตอนชัดเจนมักคาดเดาและตรวจสอบได้ง่ายกว่า agent แบบเปิดกว้าง'
      },
      {
        question: 'มาตรการใดสำคัญที่สุดสำหรับ tool ที่แก้ไขข้อมูล',
        options: ['เพิ่ม temperature', 'ตรวจสิทธิ์และยืนยันก่อนทำ', 'ซ่อนผลลัพธ์', 'เรียกซ้ำหลายครั้ง'],
        answer: 1,
        explanation: 'เครื่องมือที่เปลี่ยนแปลงข้อมูลต้องมี authorization และ human confirmation ตามความเสี่ยง รวมถึง audit log'
      },
      {
        question: 'วิธีกัน agent วนซ้ำไม่จบคืออะไร?',
        options: ['เพิ่มโมเดลใหญ่', 'กำหนด step limit budget และเงื่อนไขหยุด', 'เพิ่ม tool', 'ลบ trace'],
        answer: 1,
        explanation: 'การจำกัด steps/tokens/time และการตรวจ loop ทำให้ agent หยุดเมื่อไม่ก้าวหน้า'
      }
    ]
  },
  {
    id: 'multimodal',
    number: '21',
    slug: 'multimodal-ai',
    phase: 'production',
    title: 'Multimodal AI',
    en: 'Multimodal AI',
    summary: 'ให้ AI เข้าใจภาพ เสียง เอกสาร และวิดีโอ พร้อมรู้ข้อจำกัดของแต่ละ modality',
    why: 'งานจริงจำนวนมากไม่ได้มีแค่ข้อความ: ใบเสร็จ สกรีนช็อต เอกสารสแกน เสียงประชุม และวิดีโอ ระบบ multimodal ที่ดีต้องจัดการคุณภาพ input, alignment และ evaluation แยกตาม modality',
    mentalModel: 'ทุก modality ถูกแปลงเป็น representation ที่โมเดลเปรียบเทียบได้ แต่การแปลงนั้นสูญเสียข้อมูลเสมอ',
    duration: '1–2 สัปดาห์',
    level: 'สูง',
    tracks: ['llm', 'product'],
    outcomes: [
      'เลือก pipeline สำหรับ OCR, document AI, vision และ speech ได้',
      'ออกแบบ multimodal prompt ที่อ้างอิงตำแหน่งภาพได้',
      'เข้าใจ embedding ข้าม modality และข้อจำกัด',
      'วัดผลแยกตามประเภทเอกสาร/ภาพ/เสียงได้'
    ],
    topics: [
      { title: 'Vision-language models', detail: 'image encoder, projector, visual instruction tuning และการตอบคำถามเกี่ยวกับภาพ' },
      { title: 'Document AI', detail: 'OCR, layout analysis, table extraction และการรักษา reading order สำหรับ PDF ที่ซับซ้อน' },
      { title: 'Speech', detail: 'ASR, diarization, timestamp, TTS และข้อผิดพลาดจากสำเนียง/เสียงรบกวน' },
      { title: 'Multimodal RAG', detail: 'embed ภาพ/ตารางแยก, caption-based retrieval และการอ้างอิงหน้า/ตำแหน่ง' },
      { title: 'Generation และ editing', detail: 'diffusion models, image editing, safety filters และการระบุว่าเนื้อหาสร้างโดย AI' },
      { title: 'Evaluation', detail: 'WER สำหรับเสียง, exact match สำหรับฟิลด์เอกสาร, human preference สำหรับภาพ และการทดสอบ robustness' }
    ],
    lab: 'สร้าง pipeline สกัดข้อมูลจากใบเสร็จ 20 ใบด้วย multimodal model + validation แล้ววัด field accuracy',
    deliverable: 'Demo + per-field accuracy + ตัวอย่าง failure ที่มีภาพประกอบ',
    checkpoint: [
      'อธิบายได้ว่าทำไม OCR ยังจำเป็นแม้มี multimodal LLM',
      'ออกแบบ evaluation สำหรับตารางได้',
      'บอกความเสี่ยงของภาพความละเอียดต่ำได้'
    ],
    mistakes: [
      'ส่ง PDF ทั้งไฟล์เป็นภาพเดียวแล้วหวังผลแม่น',
      'ไม่แยกตัวเลขที่ OCR ผิดออกจาก reasoning ที่ผิด',
      'ละเลย consent และ PII ในภาพ/เสียง'
    ],
    resources: [
      { title: 'Hugging Face Multimodal Course', url: 'https://huggingface.co/learn/computer-vision-course', kind: 'course' },
      { title: 'OpenAI Vision Guide', url: 'https://platform.openai.com/docs/guides/vision', kind: 'docs' },
      { title: 'Whisper Documentation', url: 'https://github.com/openai/whisper', kind: 'tool' }
    ],
    keywords: ['multimodal', 'OCR', 'vision', 'speech', 'document AI'],
    quiz: [
      {
        question: 'เหตุใดจึงควรแยกวัด OCR error กับ reasoning error?',
        options: ['เพื่อให้เร็วขึ้น', 'เพื่อรู้ว่าควรแก้ ingestion หรือโมเดล', 'เพื่อลดต้นทุน', 'ไม่จำเป็น'],
        answer: 1,
        explanation: 'ถ้าข้อความถูกสกัดผิด การแก้ prompt ไม่ช่วย ต้องแยก root cause เพื่อเลือกวิธีแก้ที่ตรงจุด'
      },
      {
        question: 'ข้อใดสำคัญที่สุดเมื่อประมวลผลเอกสารหลายหน้า?',
        options: ['สุ่มหน้า', 'รักษาลำดับหน้าและโครงสร้าง', 'ย่อทุกหน้าเป็นข้อความเดียว', 'ลบตาราง'],
        answer: 1,
        explanation: 'การรักษา reading order และโครงสร้างช่วยให้ retrieval และ citation ทำงานถูกต้อง'
      },
      {
        question: 'ทำไม OCR ยังจำเป็นแม้มี multimodal LLM?',
        options: ['ไม่จำเป็น', 'ภาพความละเอียดต่ำหรือตารางซับซ้อนอาจต้อง OCR แบบเฉพาะและตรวจ field แยก', 'LLM ไม่เคยดึงภาพ', 'OCR เร็วกว่าเสมอ'],
        answer: 1,
        explanation: 'OCR pipeline พร้อม layout analysis ช่วยสกัดตัวเลขและตารางได้แม่นยำและวัด WER/field accuracy แยกได้'
      }
    ]
  },
  {
    id: 'inference',
    number: '22',
    slug: 'inference-optimization',
    phase: 'production',
    title: 'Inference และต้นทุน',
    en: 'Inference Optimization',
    summary: 'ทำให้ AI เร็วขึ้น ถูกลง และรับ load ได้ โดยไม่แลกคุณภาพเกินจำเป็น',
    why: 'ระบบ AI ที่ตอบช้า 3 เท่าหรือมีต้นทุนต่อผู้ใช้สูงจนขาดทุน ไม่ใช่ระบบที่ประสบความสำเร็จ การเข้าใจ latency, throughput และ caching ทำให้ออกแบบผลิตภัณฑ์ที่ยั่งยืนได้',
    mentalModel: 'ทุก millisecond และทุก token มีต้นทุน การ optimize ที่ดีเริ่มจากวัด ไม่ใช่จากเปลี่ยน model',
    duration: '1–2 สัปดาห์',
    level: 'สูง',
    tracks: ['mlops', 'llm', 'product'],
    outcomes: [
      'วัดและแยก TTFT, TPOT, p50/p95 latency ได้',
      'เลือก quantization, batching และ caching ได้เหมาะสม',
      'ประเมินต้นทุนต่อ request และ per-user ได้',
      'ออกแบบ routing และ fallback ตาม SLA ได้'
    ],
    topics: [
      { title: 'Latency metrics', detail: 'time to first token, tokens per second, p50/p95/p99 และการแยก network, queue, prefill, decode' },
      { title: 'Batching และ concurrency', detail: 'static vs continuous batching, GPU utilization, queueing และผลต่อ tail latency' },
      { title: 'Quantization', detail: 'INT8/INT4, GPTQ, AWQ, quality trade-off และการทดสอบบนงานจริงหลัง quantize' },
      { title: 'Caching', detail: 'prompt caching, semantic cache, exact cache และความเสี่ยงจากการตอบข้อมูลเก่า/ผิดผู้ใช้' },
      { title: 'Model routing', detail: 'โมเดลเล็กระดับแรก, escalate เมื่อจำเป็น, cascade และการวัดคุณภาพปลายทาง' },
      { title: 'Capacity planning', detail: 'ประมาณ token ต่อวินาที, concurrent users, GPU memory, autoscaling และต้นทุนแฝง' }
    ],
    lab: 'วัด latency/ต้นทุนของ endpoint 2 แบบ แล้วทดลอง batching/caching พร้อมรายงาน p95 และคุณภาพ',
    deliverable: 'Benchmark report + cost model + recommendation',
    checkpoint: [
      'อธิบายความต่างของ TTFT กับ total latency ได้',
      'บอกความเสี่ยงของ semantic cache ได้',
      'คำนวณต้นทุนต่อ 1,000 request ได้'
    ],
    mistakes: [
      'ดูแค่ average latency โดยไม่ดู p95',
      'quantize แล้วไม่ทดสอบคุณภาพ',
      'cache คำตอบโดยไม่แยกผู้ใช้หรือสิทธิ์'
    ],
    resources: [
      { title: 'NVIDIA: LLM Inference Optimization', url: 'https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/', kind: 'article' },
      { title: 'vLLM Documentation', url: 'https://docs.vllm.ai/', kind: 'docs' },
      { title: 'Hugging Face: Quantization', url: 'https://huggingface.co/docs/transformers/main/en/quantization/overview', kind: 'docs' }
    ],
    keywords: ['latency', 'TTFT', 'quantization', 'batching', 'caching', 'cost'],
    quiz: [
      {
        question: 'TTFT หมายถึงอะไร?',
        options: ['เวลาทั้งหมดที่ใช้', 'เวลาตั้งแต่ส่ง request ถึงได้รับ token แรก', 'จำนวน token ต่อวินาที', 'เวลาที่ใช้เทรน'],
        answer: 1,
        explanation: 'Time to first token สำคัญต่อ perceived latency เพราะผู้ใช้เริ่มเห็นคำตอบเมื่อ token แรกมาถึง'
      },
      {
        question: 'Semantic cache มีความเสี่ยงใดมากที่สุด?',
        options: ['ใช้หน่วยความจำมาก', 'คืนคำตอบของบริบทหรือผู้ใช้อื่น', 'ทำให้โมเดลเก่งขึ้น', 'เพิ่ม context window'],
        answer: 1,
        explanation: 'คำถามที่คล้ายกันเชิงความหมายอาจต้องการคำตอบต่างกันตามสิทธิ์ ข้อมูลส่วนตัว หรือเวลา'
      },
      {
        question: 'Continuous batching ช่วยเรื่องอะไร?',
        options: ['ลดคุณภาพคำตอบ', 'ปรับ batch ตาม request ที่เข้ามาเพื่อใช้ GPU ให้เต็มและลดคอย', 'ลบ caching', 'เพิ่ม license'],
        answer: 1,
        explanation: 'Continuous batching รวม request ที่กำลัง decode ไว้ด้วยกันแบบพลวัต ช่วย throughput และ tail latency'
      }
    ]
  },
  {
    id: 'mlops',
    number: '23',
    slug: 'mlops-deployment',
    phase: 'production',
    title: 'MLOps และ Deployment',
    en: 'MLOps & Deployment',
    summary: 'พาโมเดลและ LLM app ออกจาก notebook สู่ environment จริงอย่าง reproducible และย้อนกลับได้',
    why: 'การ deploy ไม่ใช่จุดจบ แต่เป็นจุดเริ่มของปัญหาใหม่: version, environment, traffic, rollback และ reproducibility ระบบที่ดีทำให้ iteration เร็วขึ้นไม่ใช่น่ากลัวขึ้น',
    mentalModel: 'ทุก artifact ต้องมีเวอร์ชัน ทุก deployment ต้องย้อนกลับได้ และทุก environment ต้องสร้างใหม่ได้จากโค้ด',
    duration: '2–3 สัปดาห์',
    level: 'สูง',
    tracks: ['mlops', 'llm', 'ml'],
    outcomes: [
      'Containerize บริการ AI และตั้ง CI/CD ได้',
      'ออกแบบ model registry และ artifact versioning ได้',
      'เลือก serving pattern ตาม latency/traffic ได้',
      'ทำ canary/rollback และจัดการ secret อย่างปลอดภัย'
    ],
    topics: [
      { title: 'Docker และ environment', detail: 'multi-stage build, image size, CUDA compatibility, non-root user และการ pin dependency' },
      { title: 'CI/CD', detail: 'test, build, scan, push image, deploy staging, smoke test, promote production และ rollback' },
      { title: 'Model registry', detail: 'model version, dataset version, metrics, approval stage และ lineage จาก experiment ถึง production' },
      { title: 'Serving patterns', detail: 'real-time API, batch inference, async queue, streaming และ serverless GPU trade-off' },
      { title: 'Kubernetes และ autoscaling', detail: 'pod, resource limit, readiness/liveness, HPA และ GPU scheduling เบื้องต้น' },
      { title: 'Release safety', detail: 'canary, blue-green, feature flag, shadow traffic และการตรวจ metric ก่อนขยายผล' }
    ],
    lab: 'Deploy LLM API ด้วย Docker + CI ไปยัง staging มี health check, version endpoint และ rollback plan',
    deliverable: 'Repo + Dockerfile + CI workflow + deployment runbook',
    checkpoint: [
      'อธิบายได้ว่าทำไมต้อง pin image digest',
      'บอกความต่างของ liveness กับ readiness probe',
      'ออกแบบ rollback plan ได้',
    ],
    mistakes: [
      'deploy จาก notebook ที่ไม่มี dependency lock',
      'ให้ container รันด้วย root',
      'ไม่มี staging แล้วทดลองบน production'
    ],
    resources: [
      { title: 'Docker Get Started', url: 'https://docs.docker.com/get-started/', kind: 'docs' },
      { title: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/', kind: 'docs' },
      { title: 'Google: MLOps Principles', url: 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning', kind: 'guide' }
    ],
    keywords: ['Docker', 'CI/CD', 'model registry', 'Kubernetes', 'rollback'],
    quiz: [
      {
        question: 'Readiness probe ใช้เพื่ออะไร?',
        options: ['รีสตาร์ท container ที่ตาย', 'บอกว่า pod พร้อมรับ traffic หรือยัง', 'เพิ่ม GPU', 'ลบ log'],
        answer: 1,
        explanation: 'Readiness probe ควบคุมว่าจะส่ง traffic ไปยัง pod หรือไม่ ส่วน liveness probe ตรวจว่าควร restart หรือไม่'
      },
      {
        question: 'Canary deployment คืออะไร?',
        options: ['ลบเวอร์ชันเก่าทันที', 'ปล่อย traffic ส่วนเล็กไปเวอร์ชันใหม่ก่อนขยาย', 'รันทุกเวอร์ชันพร้อมกัน', 'ปิด monitoring'],
        answer: 1,
        explanation: 'Canary ช่วยจำกัดผลกระทบหากเวอร์ชันใหม่มีปัญหา และให้ข้อมูลจริงก่อน rollout เต็มรูปแบบ'
      },
      {
        question: 'ทำไมต้อง pin image digest แทนแค่ tag?',
        options: ['เพื่อให้ช้า', 'tag เปลี่ยนได้ digest ชี้เนื้อหาเฉพาะและทำซ้ำได้', 'ไม่จำเป็น', 'ลดการสแกน'],
        answer: 1,
        explanation: 'Image tag เช่น latest อาจชี้ image คนละตัว การ pin digest ทำให้รู้ว่า deploy ตัวเดียวกับที่ test ผ่าน'
      }
    ]
  },
  {
    id: 'monitoring',
    number: '24',
    slug: 'monitoring-reliability',
    phase: 'production',
    title: 'Monitoring และ Reliability',
    en: 'Monitoring & Reliability',
    summary: 'รู้ว่าระบบกำลังทำงานดีหรือไม่ ก่อนที่ผู้ใช้จะบอกคุณ พร้อมรับมือ drift, incident และต้นทุนที่พุ่ง',
    why: 'AI เก่งขึ้นได้และแย่ลงได้โดยไม่มีการ deploy: ข้อมูลเปลี่ยน ผู้ใช้เปลี่ยน หรือผู้ให้บริการโมเดลเปลี่ยน การ monitoring ที่ดีจับสัญญาณเหล่านี้ก่อนกลายเป็นวิกฤต',
    mentalModel: 'ถ้ามองไม่เห็น ก็ป้องกันไม่ได้: log, metric และ trace คือสามเสาหลักของระบบ AI ที่ดูแลได้',
    duration: '1–2 สัปดาห์',
    level: 'สูง',
    tracks: ['mlops', 'llm'],
    outcomes: [
      'ออกแบบ metric สำหรับ service และคุณภาพโมเดลได้',
      'ตรวจจับ data drift และ quality degradation ได้',
      'สร้าง trace และ dashboard สำหรับ LLM pipeline ได้',
      'เขียน runbook และจัดการ incident ได้'
    ],
    topics: [
      { title: 'Three pillars', detail: 'logs, metrics และ traces พร้อม correlation ID ที่โยง request ข้าม service' },
      { title: 'Service SLOs', detail: 'availability, latency, error rate, saturation และ error budget ที่สะท้อนประสบการณ์ผู้ใช้' },
      { title: 'Data และ model drift', detail: 'covariate shift, concept drift, label delay และการ monitoring input distribution' },
      { title: 'LLM observability', detail: 'prompt/response sampling, token usage, tool trace, retrieval hits และ feedback loop' },
      { title: 'Incident response', detail: 'severity, on-call, mitigation, communication, postmortem ที่ไม่กล่าวโทษ และ action item' },
      { title: 'Cost monitoring', detail: 'ต้นทุนต่อ request/ผู้ใช้, budget alert, anomaly detection และการเชื่อม cost กับคุณค่า' }
    ],
    lab: 'เพิ่ม tracing และ dashboard ให้ RAG app: วัด latency, token cost, retrieval miss และสร้าง alert 3 รายการ',
    deliverable: 'Dashboard + alert rules + incident runbook',
    checkpoint: [
      'แยก symptom กับ root cause ใน incident ได้',
      'ออกแบบ metric ที่จับ quality degradation ได้',
      'บอกความเสี่ยงของการ log prompt ทั้งหมดได้'
    ],
    mistakes: [
      'monitor แค่ uptime แต่ไม่ monitor คุณภาพคำตอบ',
      'log PII โดยไม่ redact',
      'ตั้ง alert ทุก metric จนทีม ignore ทั้งหมด'
    ],
    resources: [
      { title: 'Google SRE Book', url: 'https://sre.google/sre-book/table-of-contents/', kind: 'book' },
      { title: 'OpenTelemetry Documentation', url: 'https://opentelemetry.io/docs/', kind: 'docs' },
      { title: 'Evidently AI: ML Monitoring', url: 'https://www.evidentlyai.com/ml-monitoring', kind: 'guide' }
    ],
    keywords: ['observability', 'drift', 'SLO', 'tracing', 'incident', 'cost'],
    quiz: [
      {
        question: 'Concept drift คืออะไร?',
        options: ['ข้อมูล input เปลี่ยนชั่วคราว', 'ความสัมพันธ์ระหว่าง input กับ target เปลี่ยน', 'เซิร์ฟเวอร์ล่ม', 'model ใหญ่ขึ้น'],
        answer: 1,
        explanation: 'Concept drift คือ mapping จาก input ไป target เปลี่ยน ทำให้โมเดลที่เคยถูกต้องเริ่มผิดแม้ input ดูปกติ'
      },
      {
        question: 'ข้อใดช่วยให้ debug request ที่กระจายหลาย service ได้ดีที่สุด?',
        options: ['เพิ่ม log ทุกบรรทัด', 'ใช้ correlation ID และ distributed trace', 'ปิด metric', 'ใช้ print'],
        answer: 1,
        explanation: 'Correlation ID และ trace ทำให้เห็นเส้นทางของ request เดียวข้าม service และหาจุดที่ช้า/ผิดได้'
      },
      {
        question: 'ทำไมต้อง monitor คุณภาพคำตอบ ไม่ใช่แค่อุปเสท?',
        options: ['เพื่อความบันเทิง', 'เพราะ drift ของข้อมูลหรือโมเดลทำให้คุณภาพแย่ลงโดย service ยังขึ้นอยู่', 'ไม่จำเป็น', 'เพื่อลด log'],
        answer: 1,
        explanation: 'LLM app แย่ลงได้จาก data drift หรือ provider update โดยไม่มี deploy อะไร ต้องวัด quality metric และ sampled human review'
      }
    ]
  }
];
