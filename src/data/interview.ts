export interface InterviewQuestion {
  id: string;
  category: string;
  level: 'เริ่มต้น' | 'กลาง' | 'สูง';
  q: string;
  a: string;
  tags: string[];
}

export const interviewCategories = [
  'Python & Engineering',
  'Machine Learning',
  'LLM & GenAI',
  'RAG & Search',
  'Agents',
  'System Design',
  'Behavioral'
];

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'eng-1',
    category: 'Python & Engineering',
    level: 'เริ่มต้น',
    q: 'อธิบายความต่างระหว่าง list และ generator พร้อมตัวอย่างการใช้ในงานข้อมูล',
    a: 'List เก็บทุกค่าในหน่วยความจำ ส่วน generator สร้างค่าทีละตัวเมื่อถูก iterate ทำให้เหมาะกับไฟล์หรือข้อมูลขนาดใหญ่ ตัวอย่างเช่นอ่าน log ทีละบรรทัดหรือสตรีมผลลัพธ์จาก API ข้อควรระวังคือ generator ใช้ได้ครั้งเดียวและไม่รองรับ indexing',
    tags: ['Python', 'memory']
  },
  {
    id: 'eng-2',
    category: 'Python & Engineering',
    level: 'กลาง',
    q: 'คุณจะออกแบบ API endpoint สำหรับ inference อย่างไรให้รองรับ error และ timeout?',
    a: 'กำหนด request/response schema ด้วย Pydantic, ตั้ง timeout ที่ downstream call, แยก error code ให้ชัด เช่น 422 สำหรับ input ผิด, 429 สำหรับ rate limit, 504 สำหรับ timeout ใช้ retry เฉพาะกรณีที่ปลอดภัย มี idempotency key สำหรับ operation ที่อาจซ้ำ และ log correlation ID โดยไม่ log ข้อมูลอ่อนไหว',
    tags: ['API', 'FastAPI', 'reliability']
  },
  {
    id: 'eng-3',
    category: 'Python & Engineering',
    level: 'กลาง',
    q: 'จะตรวจสอบและป้องกัน data leakage ใน pipeline ได้อย่างไร?',
    a: 'แยก train/validation/test ตั้งแต่ต้น, fit preprocessing เฉพาะ train fold, ใช้ pipeline ใน cross-validation, ตรวจ feature ที่มีข้อมูลอนาคตหรือข้อมูล target, ตรวจ duplicate ระหว่าง split และทำ leakage audit ด้วยการดู feature importance ที่สูงผิดปกติร่วมกับ timeline ของข้อมูล',
    tags: ['leakage', 'pipeline', 'validation']
  },
  {
    id: 'eng-4',
    category: 'Python & Engineering',
    level: 'เริ่มต้น',
    q: 'อธิบาย mutable default argument และวิธีแก้',
    a: 'ค่า default ถูกสร้างครั้งเดียวตอน define ฟังก์ชัน ดังนั้น list หรือ dict ที่เป็น default จะถูกแชร์และสะสมข้ามการเรียก วิธีแก้คือใช้ None เป็น default แล้วสร้าง object ใหม่ภายในฟังก์ชัน',
    tags: ['Python', 'pitfall']
  },
  {
    id: 'eng-5',
    category: 'Python & Engineering',
    level: 'กลาง',
    q: 'คุณจัดการ secret และ configuration ใน service AI อย่างไร?',
    a: 'แยก config ตาม environment, เก็บ secret ใน secret manager หรือ environment variable ที่ไม่ถูก commit, ใช้ .env.example สำหรับเอกสาร, จำกัดสิทธิ์การเข้าถึง, rotate key เมื่อ suspect leak และสแกน secret ใน CI ก่อน merge',
    tags: ['security', 'config', 'CI']
  },
  {
    id: 'eng-6',
    category: 'Python & Engineering',
    level: 'กลาง',
    q: 'จะ debug ปัญหา “works on my machine” ใน container อย่างไร?',
    a: 'เปรียบเทียบ image, dependency lock, Python version, environment variable และ entrypoint ระหว่างเครื่องกับ production สร้าง image จาก clean build, รันด้วย config เดียวกัน, ตรวจ log ตอน start และใช้ health check/readiness เพื่อแยกปัญหา dependency กับ runtime',
    tags: ['Docker', 'debugging', 'environment']
  },
  {
    id: 'eng-7',
    category: 'Python & Engineering',
    level: 'กลาง',
    q: 'อะไรคือ idempotency และทำไมสำคัญกับ AI service?',
    a: 'Idempotency คือการเรียก operation เดิมซ้ำแล้วผลลัพธ์ไม่เปลี่ยนเพิ่ม เช่น retry การสร้างคำสั่งซื้อไม่ควรสร้างซ้ำสองรายการ สำคัญเพราะ network timeout ทำให้ client ไม่รู้ว่า request สำเร็จหรือไม่ การมี idempotency key ช่วยให้ retry อย่างปลอดภัย',
    tags: ['API', 'retry', 'distributed systems']
  },
  {
    id: 'eng-8',
    category: 'Python & Engineering',
    level: 'สูง',
    q: 'ออกแบบ schema สำหรับเก็บ prompt และ response เพื่อ audit และ debug อย่างไรโดยคำนึงถึง privacy?',
    a: 'เก็บ request ID, timestamp, model/version, prompt template ID, token counts, latency และ status โดยแยกเนื้อหา sensitive ออกหรือ redact ก่อนเก็บ กำหนด retention ให้สั้น ใช้ encryption และ role-based access สำหรับการดู full content พร้อม audit log การเข้าถึง',
    tags: ['observability', 'privacy', 'schema']
  },
  {
    id: 'eng-9',
    category: 'Python & Engineering',
    level: 'กลาง',
    q: 'อธิบายความต่างของ unit test, integration test และ evaluation สำหรับระบบ AI',
    a: 'Unit test ตรวจ logic เล็ก ๆ แบบ deterministic, integration test ตรวจการเชื่อมต่อระหว่าง service/database/API, ส่วน evaluation วัดคุณภาพของ AI บนชุดตัวอย่างที่สะท้อนงานจริง ทั้งสามชั้นจำเป็นเพราะ unit test ผ่านไม่ได้แปลว่าโมเดลตอบดี',
    tags: ['testing', 'evaluation']
  },
  {
    id: 'eng-10',
    category: 'Python & Engineering',
    level: 'สูง',
    q: 'จะลด latency ของ API ที่เรียก LLM โดยไม่ลดคุณภาพอย่างไร?',
    a: 'วัดก่อนว่า latency อยู่ที่ network, retrieval, queue หรือ generation จากนั้นใช้ streaming เพื่อลด perceived latency, cache ผลที่ปลอดภัย, ลด context ที่ไม่จำเป็น, ใช้โมเดลเล็กกับงานง่าย, ทำ parallel retrieval และกำหนด timeout/fallback ที่ชัดเจน ต้องวัดคุณภาพหลังเปลี่ยนทุกครั้ง',
    tags: ['latency', 'LLM', 'optimization']
  },
  {
    id: 'ml-1',
    category: 'Machine Learning',
    level: 'เริ่มต้น',
    q: 'Bias–variance trade-off คืออะไร?',
    a: 'Bias คือ error จาก assumption ของโมเดลที่ง่ายเกินไป ส่วน variance คือความอ่อนไหวต่อความแปรปรวนของข้อมูล training โมเดลซับซ้อนมัก low bias แต่ high variance และ overfit เป้าหมายคือเลือกความซับซ้อนที่ generalize ดีที่สุดบน validation data',
    tags: ['bias', 'variance', 'overfitting']
  },
  {
    id: 'ml-2',
    category: 'Machine Learning',
    level: 'เริ่มต้น',
    q: 'เมื่อไรควรใช้ precision และเมื่อไรควรใช้ recall?',
    a: 'Precision สำคัญเมื่อ false positive แพง เช่นแจ้งเตือนสแปมผิดจนผู้ใช้เสียงาน ส่วน recall สำคัญเมื่อ false negative แพง เช่นพลาดเคส fraud หรือโรคที่ต้องตรวจต่อ ควรเลือกจากต้นทุนธุรกิจและดูทั้ง PR curve ไม่ใช่ค่าเดียว',
    tags: ['metrics', 'precision', 'recall']
  },
  {
    id: 'ml-3',
    category: 'Machine Learning',
    level: 'กลาง',
    q: 'อธิบาย data leakage พร้อมยกตัวอย่าง',
    a: 'Leakage คือข้อมูลที่ไม่มีจริง ณ เวลาทำนายหรือข้อมูล target รั่วเข้า training ทำให้ผลประเมินสูงเกินจริง ตัวอย่างเช่นใช้ค่าเฉลี่ยทั้ง dataset ใน target encoding, ใช้ยอดขายเดือนหน้าเป็น feature หรือ random split ข้อมูลเวลา วิธีป้องกันคือ split ก่อน, fit บน train เท่านั้น และตรวจ timeline ของ feature',
    tags: ['leakage', 'data', 'evaluation']
  },
  {
    id: 'ml-4',
    category: 'Machine Learning',
    level: 'กลาง',
    q: 'จะจัดการ class imbalance อย่างไร?',
    a: 'เริ่มจากเลือก metric ที่เหมาะสม เช่น PR-AUC, recall หรือ cost-sensitive metric ก่อน จากนั้นลอง class weights, threshold tuning, resampling อย่างระมัดระวัง และเก็บข้อมูลเพิ่ม หลีกเลี่ยงการเพิ่ม minority แบบสุ่มจนเกิด overfit และต้องประเมินบน distribution จริง',
    tags: ['imbalance', 'metrics']
  },
  {
    id: 'ml-5',
    category: 'Machine Learning',
    level: 'กลาง',
    q: 'Cross-validation มีกี่แบบ และควรใช้แบบไหนกับ time series?',
    a: 'มี k-fold, stratified, group และ time-series split สำหรับ time series ต้องใช้ walk-forward หรือ rolling-origin split เพื่อให้ train อยู่ในอดีตและ validation/test อยู่ในอนาคต ห้ามสุ่มเพราะจะเกิด temporal leakage',
    tags: ['cross-validation', 'time series']
  },
  {
    id: 'ml-6',
    category: 'Machine Learning',
    level: 'สูง',
    q: 'อธิบาย calibration และเหตุใดจึงสำคัญ',
    a: 'Calibration วัดว่า probability ที่โมเดลให้สอดคล้องกับความถี่จริงหรือไม่ เช่นในกลุ่มที่โมเดลบอก 0.8 ควรมีเหตุการณ์จริงประมาณ 80% สำคัญเมื่อใช้ probability ในการตัดสินใจหรือคำนวณ expected value ไม่ใช่แค่ ranking วัดด้วย reliability diagram และ Brier score',
    tags: ['calibration', 'probability']
  },
  {
    id: 'ml-7',
    category: 'Machine Learning',
    level: 'กลาง',
    q: 'Feature importance จาก random forest เชื่อถือได้แค่ไหน?',
    a: 'ใช้เป็นสัญญาณสำรวจได้ แต่ไม่ควรตีความเป็น causality และอาจเอียงเมื่อ feature correlated หรือ cardinality สูง ควรใช้ permutation importance ร่วมกับ domain knowledge, ตรวจ leakage และอธิบายผลด้วย SHAP อย่างระวัง',
    tags: ['feature importance', 'interpretability']
  },
  {
    id: 'ml-8',
    category: 'Machine Learning',
    level: 'กลาง',
    q: 'คุณจะออกแบบ A/B test สำหรับฟีเจอร์ AI อย่างไร?',
    a: 'กำหนด hypothesis และ metric ล่วงหน้า, randomize ระดับผู้ใช้, คำนวณ sample size จาก baseline และ minimum detectable effect, กำหนดระยะเวลาไม่หยุดดูผลก่อนกำหนด, ตรวจ guardrail metric และ novelty effect จากนั้นวิเคราะห์ confidence interval ไม่ใช่แค่ p-value',
    tags: ['A/B test', 'experimentation']
  },
  {
    id: 'ml-9',
    category: 'Machine Learning',
    level: 'สูง',
    q: 'อธิบาย trade-off ระหว่างการเพิ่มข้อมูลกับการเพิ่มความซับซ้อนของโมเดล',
    a: 'ถ้าปัญหาคือ variance สูง ข้อมูลเพิ่มหรือ regularization อาจช่วยได้มากกว่าการเพิ่มความซับซ้อน ถ้า underfit การเพิ่ม capacity หรือ feature ที่ดีกว่าจึงมีประโยชน์ ควรดู learning curve เพื่อแยกสาเหตุและคำนึงถึงต้นทุนการเก็บข้อมูล',
    tags: ['learning curve', 'capacity']
  },
  {
    id: 'ml-10',
    category: 'Machine Learning',
    level: 'กลาง',
    q: 'ทำไม accuracy อาจเป็น metric ที่แย่?',
    a: 'เมื่อ class ไม่สมดุล accuracy ถูกครอบงำด้วย majority class โมเดลที่ทาย negative ทั้งหมดอาจได้ 99% แต่ไม่มีประโยชน์ ควรใช้ precision/recall/F1, PR-AUC, cost matrix หรือ metric ที่สะท้อนงานจริง',
    tags: ['accuracy', 'imbalance']
  },
  {
    id: 'ml-11',
    category: 'Machine Learning',
    level: 'สูง',
    q: 'คุณจะตรวจจับ data drift ใน production อย่างไร?',
    a: 'ติดตาม distribution ของ feature สำคัญด้วย statistical test หรือ distance metric, ติดตาม prediction distribution, คุณภาพเมื่อมี label และ business metric ตั้ง alert จาก baseline ที่เหมาะสม และมีกระบวนการ investigate ก่อน retrain โดยระวัง false alarm',
    tags: ['drift', 'monitoring']
  },
  {
    id: 'ml-12',
    category: 'Machine Learning',
    level: 'กลาง',
    q: 'เมื่อไรควรเลือก simple model แทน deep learning?',
    a: 'เมื่อข้อมูลมีขนาดเล็ก เป็น tabular, ต้องการ interpretability, latency ต่ำ หรือทีมมีข้อจำกัดด้าน ops โมเดลง่ายมักเป็น baseline ที่แข็งแรงและ debug ง่าย ควรใช้ deep learning เมื่อข้อมูลและปัญหาซับซ้อนพอจนพิสูจน์ได้ว่าคุ้มต้นทุน',
    tags: ['model selection', 'trade-off']
  },
  {
    id: 'llm-1',
    category: 'LLM & GenAI',
    level: 'เริ่มต้น',
    q: 'อธิบายการทำงานของ LLM ในระดับสูง',
    a: 'LLM เป็น transformer ที่ถูกฝึกให้ทำนาย token ถัดไปจาก context ขนาดใหญ่ หลัง pretraining จะผ่าน instruction tuning และ preference alignment เพื่อให้ตอบตามคำสั่ง การ generate คือการเลือก token ทีละตัวตาม probability distribution จึงไม่มีกลไกตรวจสอบข้อเท็จจริงในตัว',
    tags: ['LLM', 'transformer']
  },
  {
    id: 'llm-2',
    category: 'LLM & GenAI',
    level: 'กลาง',
    q: 'Temperature, top-p และ max tokens ต่างกันอย่างไร?',
    a: 'Temperature ปรับความแหลมของ distribution, top-p จำกัดชุด token ที่มีความน่าจะเป็นสะสมถึง p, max tokens จำกัดความยาว output ทั้งสามมีผลต่อความหลากหลาย ความยาว และต้นทุน ควรตั้งค่าตามงานและทดสอบกับ eval set',
    tags: ['sampling', 'inference']
  },
  {
    id: 'llm-3',
    category: 'LLM & GenAI',
    level: 'กลาง',
    q: 'เมื่อไรควรใช้ RAG และเมื่อไรควร fine-tune?',
    a: 'RAG เหมาะกับความรู้ที่เปลี่ยนบ่อย ต้องอ้างอิงแหล่งข้อมูล หรือข้อมูลเฉพาะองค์กร ส่วน fine-tune เหมาะกับการปรับรูปแบบ พฤติกรรม หรือโดเมนที่ต้องการตัวอย่างจำนวนมาก และมักใช้ร่วมกัน เริ่มจาก prompting/RAG ก่อนเพราะถูกและiterate เร็วกว่า',
    tags: ['RAG', 'fine-tuning']
  },
  {
    id: 'llm-4',
    category: 'LLM & GenAI',
    level: 'สูง',
    q: 'อธิบาย LoRA และข้อดีข้อจำกัด',
    a: 'LoRA แช่แข็งโมเดลฐานและเพิ่ม low-rank matrices สำหรับบาง layer ทำให้เทรนพารามิเตอร์น้อยลงและประหยัดหน่วยความจำ ข้อดีคือเร็ว เก็บ adapter แยกได้ ข้อจำกัดคืออาจไม่พอสำหรับการเปลี่ยนความรู้หรือพฤติกรรมที่ซับซ้อนมาก และยังต้องมีข้อมูลคุณภาพ',
    tags: ['LoRA', 'fine-tuning']
  },
  {
    id: 'llm-5',
    category: 'LLM & GenAI',
    level: 'กลาง',
    q: 'ทำไม LLM ถึง hallucinate และจะลดอย่างไร?',
    a: 'เพราะโมเดลทำนาย token ที่น่าจะต่อเนื่อง ไม่ได้ค้นฐานข้อมูลหรือตรวจความจริง การลดทำได้ด้วยการให้ context ที่เกี่ยวข้อง, บังคับ citation, ใช้ structured output, เพิ่ม tool สำหรับข้อมูลสด, สอนให้ตอบ “ไม่ทราบ” และมี evaluation สำหรับ faithfulness',
    tags: ['hallucination', 'RAG']
  },
  {
    id: 'llm-6',
    category: 'LLM & GenAI',
    level: 'กลาง',
    q: 'Context window ใหญ่ขึ้นแก้ปัญหาอะไรได้ และมีข้อจำกัดอะไร?',
    a: 'ช่วยให้ใส่เอกสารหรือประวัติสนทนาได้มากขึ้น แต่ไม่ได้แปลว่าโมเดลใช้ทุกส่วนได้ equally ดี ยังมีต้นทุน token, latency, “lost in the middle” และความเสี่ยง context pollution จึงควร retrieve เฉพาะข้อมูลที่เกี่ยวข้องและจัดลำดับอย่างดี',
    tags: ['context', 'LLM']
  },
  {
    id: 'llm-7',
    category: 'LLM & GenAI',
    level: 'กลาง',
    q: 'อธิบาย structured output และวิธีทำให้เชื่อถือได้',
    a: 'Structured output คือการบังคับให้โมเดลคืนข้อมูลตาม schema เช่น JSON ใช้ function calling หรือ constrained decoding ร่วมกับ schema validation, retry/repair และ fallback อย่าตรวจแค่ parse ได้ แต่ต้องตรวจ semantic validity ด้วย',
    tags: ['structured output', 'function calling']
  },
  {
    id: 'llm-8',
    category: 'LLM & GenAI',
    level: 'สูง',
    q: 'คุณจะออกแบบ evaluation สำหรับแชทบอทบริการลูกค้าอย่างไร?',
    a: 'แยกมิติ correctness, completeness, tone, policy compliance, safety และ citation สร้าง golden set จากบทสนทนาจริงรวม edge cases ใช้ deterministic checks กับ schema/forbidden content, rubric judge สำหรับคุณภาพ และ human review สำหรับเคสความเสี่ยงสูง จากนั้นติดตาม online metric เช่น resolution rate และ escalation rate',
    tags: ['evaluation', 'chatbot']
  },
  {
    id: 'llm-9',
    category: 'LLM & GenAI',
    level: 'กลาง',
    q: 'Few-shot prompting ควรใช้เมื่อไร และมีข้อควรระวังอะไร?',
    a: 'ใช้เมื่อต้องการกำหนดรูปแบบหรือพฤติกรรมที่อธิบายด้วยคำพูดยาก ตัวอย่างควรครอบคลุม edge case และไม่เอียงไปทางเดียว ข้อควรระวังคือเพิ่ม token cost, อาจสอน bias หรือรูปแบบผิด และตัวอย่างที่ยาวเกินอาจเบียด context ของข้อมูลจริง',
    tags: ['prompt', 'few-shot']
  },
  {
    id: 'llm-10',
    category: 'LLM & GenAI',
    level: 'สูง',
    q: 'LLM-as-judge มี bias อะไรบ้าง และจะควบคุมอย่างไร?',
    a: 'Bias ที่พบบ่อยคือ position bias, verbosity bias, self-preference และ sensitivity ต่อ prompt ของ judge ควบคุมด้วยการสลับลำดับคำตอบ, rubric ชัดเจน, จำกัดความยาว, ใช้หลาย judge/model, ตรวจ agreement กับมนุษย์ และไม่ใช้ judge เป็นความจริงเดียว',
    tags: ['evaluation', 'LLM-as-judge']
  },
  {
    id: 'llm-11',
    category: 'LLM & GenAI',
    level: 'กลาง',
    q: 'อธิบายความต่างระหว่าง open-weight และ closed model ในบริบทองค์กร',
    a: 'Open-weight ให้ควบคุมการ host, ปรับแต่ง และ data residency ได้ แต่ต้องแบกรับ GPU, ops และ security เอง Closed model ใช้งานง่ายกว่าและมักเก่งกว่า แต่มีข้อจำกัดเรื่อง data policy, rate limit, ต้นทุนและ vendor lock-in การเลือกขึ้นกับข้อมูล ความสามารถเฉพาะทาง และทีม ops',
    tags: ['models', 'trade-off']
  },
  {
    id: 'llm-12',
    category: 'LLM & GenAI',
    level: 'สูง',
    q: 'จะลดต้นทุน LLM ต่อผู้ใช้โดยไม่ทำให้คุณภาพตกอย่างไร?',
    a: 'วัดต้นทุนแยก input/output/retrieval, ลด context ที่ไม่จำเป็น, ใช้ prompt caching, route งานง่ายไปโมเดลเล็ก, จำกัด max tokens, batch งาน offline, cache ผลที่ปลอดภัย และ distill สำหรับงานแคบ ต้องมี eval และ guardrail เพื่อยืนยันว่าคุณภาพยังผ่าน',
    tags: ['cost', 'optimization']
  },
  {
    id: 'rag-1',
    category: 'RAG & Search',
    level: 'เริ่มต้น',
    q: 'อธิบาย RAG pipeline ตั้งแต่ต้นจนจบ',
    a: 'เริ่มจาก ingestion: parse เอกสาร, chunk, embed และเก็บใน vector/keyword index พร้อม metadata ตอน query: รับคำถาม, อาจ rewrite, retrieve candidates, rerank, pack context แล้วให้ LLM ตอบพร้อม citation สุดท้ายต้องมี evaluation แยก retrieval และ generation',
    tags: ['RAG', 'pipeline']
  },
  {
    id: 'rag-2',
    category: 'RAG & Search',
    level: 'กลาง',
    q: 'Chunk size ส่งผลต่อคุณภาพอย่างไร?',
    a: 'Chunk เล็กได้ precision ดีแต่ขาดบริบทและอาจตัดประโยคสำคัญ ชิ้นใหญ่ได้บริบทครบแต่มี noise และเปลือง token ควรเลือกตามโครงสร้างเอกสาร ใช้ overlap พอเหมาะ และทดสอบด้วย recall/answer quality ไม่มีขนาดเดียวที่ถูกทุกงาน',
    tags: ['chunking', 'retrieval']
  },
  {
    id: 'rag-3',
    category: 'RAG & Search',
    level: 'กลาง',
    q: 'เพราะเหตุใด semantic search อย่างเดียวจึงอาจไม่พอ?',
    a: 'Embedding จับความหมายแต่พลาดคำเฉพาะ ตัวเลข รหัสสินค้า หรือคำที่สะกดต่าง หรืออาจให้ผลใกล้เคียงแต่ไม่ตรง การใช้ hybrid search ร่วมกับ BM25 และ reranker ช่วยเพิ่ม recall และ precision',
    tags: ['hybrid search', 'BM25']
  },
  {
    id: 'rag-4',
    category: 'RAG & Search',
    level: 'สูง',
    q: 'แยก retrieval failure กับ generation failure อย่างไร?',
    a: 'ตรวจ context ที่ส่งให้โมเดลก่อน ถ้าเอกสารที่จำเป็นไม่อยู่ใน context แสดงว่า retrieval/chunking ผิด ถ้าอยู่แต่คำตอบยังผิดหรือไม่ faithful แสดงว่า generation/prompt ผิด ต้องมี trace ที่เก็บทั้ง query, retrieved docs, prompt และ output',
    tags: ['debugging', 'RAG evaluation']
  },
  {
    id: 'rag-5',
    category: 'RAG & Search',
    level: 'กลาง',
    q: 'จะออกแบบ citation ใน RAG ให้ตรวจสอบได้อย่างไร?',
    a: 'เก็บ metadata ระดับหน้า/หัวข้อ/ช่วงข้อความ, ให้โมเดลอ้างอิง document ID และ chunk ID, validate ว่า citation มีอยู่จริงและสนับสนุนข้อความนั้น และแสดง snippet/หน้าให้ผู้ใช้เปิดดูได้ อย่าเชื่อ citation ที่โมเดลสร้างขึ้นโดยไม่ตรวจ',
    tags: ['citation', 'trust']
  },
  {
    id: 'rag-6',
    category: 'RAG & Search',
    level: 'สูง',
    q: 'จะป้องกันข้อมูลข้าม tenant ในระบบ RAG อย่างไร?',
    a: 'บังคับ filter สิทธิ์ที่ระดับ query/database ไม่ใช่หลัง retrieved, แยก namespace/index ตาม tenant เมื่อเหมาะสม, ใช้ access control จากระบบต้นทาง, ทดสอบด้วยเคสพยายามข้ามสิทธิ์ และ log การเข้าถึงเอกสาร',
    tags: ['security', 'multi-tenant']
  },
  {
    id: 'rag-7',
    category: 'RAG & Search',
    level: 'กลาง',
    q: 'RAG evaluation ควรวัดอะไรบ้าง?',
    a: 'วัด retrieval ด้วย recall@k/MRR/nDCG, วัด generation ด้วย faithfulness, answer relevance, correctness และ citation accuracy รวมถึง latency/ต้นทุน มีชุดคำถามที่ไม่มีคำตอบในเอกสารเพื่อทดสอบการยอมรับข้อจำกัด',
    tags: ['evaluation', 'RAG']
  },
  {
    id: 'rag-8',
    category: 'RAG & Search',
    level: 'สูง',
    q: 'เอกสารอัปเดตทุกวัน จะจัดการ index อย่างไร?',
    a: 'ใช้ incremental ingestion ด้วย content hash/version, upsert หรือลบ chunk เก่าอย่างถูกต้อง, เก็บ timestamp และ source version, มี re-index แบบ atomic หรือ alias switch, ตรวจ stale index และทดสอบว่าเอกสารที่ถูกลบไม่ถูก retrieve อีก',
    tags: ['ingestion', 'indexing']
  },
  {
    id: 'ag-1',
    category: 'Agents',
    level: 'กลาง',
    q: 'Agent ต่างจาก workflow อย่างไร?',
    a: 'Workflow มีขั้นตอนที่กำหนดไว้ล่วงหน้า ส่วน agent ใช้โมเดลตัดสินใจเลือกขั้นตอน/เครื่องมือแบบพลวัตตามสถานการณ์ Agent ยืดหยุ่นกว่าแต่คาดเดาและ debug ยากกว่า ควรเริ่มจาก workflow และเพิ่ม autonomy เมื่อจำเป็นจริง',
    tags: ['agent', 'workflow']
  },
  {
    id: 'ag-2',
    category: 'Agents',
    level: 'สูง',
    q: 'ออกแบบ tool สำหรับ agent อย่างไรให้ปลอดภัย?',
    a: 'กำหนด schema ชัดเจน, ใช้ least privilege, validate input/output, จำกัดขอบเขต (read-only เมื่อเป็นไปได้), ต้องมี human approval สำหรับ action ที่เปลี่ยนข้อมูลสำคัญ, มี rate limit, audit log และ timeout รวมถึง idempotency สำหรับ retry',
    tags: ['tool use', 'security']
  },
  {
    id: 'ag-3',
    category: 'Agents',
    level: 'กลาง',
    q: 'จะป้องกัน agent วนลูปไม่จบได้อย่างไร?',
    a: 'กำหนด max steps และ budget ต่อ task, ตรวจจับ repeated tool calls/state, ใช้ timeout, ให้ agent มี exit condition ชัดเจน และ fallback ไป human หรือ workflow สำเร็จรูป พร้อมบันทึก trace เพื่อวิเคราะห์',
    tags: ['reliability', 'agents']
  },
  {
    id: 'ag-4',
    category: 'Agents',
    level: 'สูง',
    q: 'ประเมิน agent ต่างจากประเมิน chatbot อย่างไร?',
    a: 'Agent ต้องวัดทั้งผลลัพธ์สุดท้ายและกระบวนการ: task success, จำนวนขั้น, tool-call accuracy, การเลือก tool, unsafe actions, ต้นทุน และเวลา ใช้ environment จำลองกับ trace review และทดสอบ failure recovery ไม่ใช่แค่คำตอบสุดท้าย',
    tags: ['evaluation', 'agents']
  },
  {
    id: 'ag-5',
    category: 'Agents',
    level: 'กลาง',
    q: 'Memory ของ agent ควรเก็บอะไรและไม่ควรเก็บอะไร?',
    a: 'เก็บข้อมูลที่จำเป็นต่อ task อย่างสรุป preference หรือ state ที่ตรวจสอบได้ ไม่ควรเก็บ secret, ข้อมูลส่วนบุคคลเกินจำเป็น หรือข้อมูลที่อาจ stale โดยไม่มี expiry ต้องมี consent, retention และกลไกแก้ไข/ลบ',
    tags: ['memory', 'privacy']
  },
  {
    id: 'ag-6',
    category: 'Agents',
    level: 'สูง',
    q: 'MCP คืออะไรและช่วยอะไร',
    a: 'Model Context Protocol เป็นมาตรฐานเปิดสำหรับเชื่อม LLM/agent กับ tools และ data sources ผ่าน server ที่ประกาศ capability ช่วยลด integration แบบเฉพาะเจาะจง แต่ยังต้องออกแบบ authorization, validation และ trust boundary เอง',
    tags: ['MCP', 'integration']
  },
  {
    id: 'sd-1',
    category: 'System Design',
    level: 'กลาง',
    q: 'ออกแบบระบบ RAG สำหรับพนักงาน 5,000 คนใน 45 นาที',
    a: 'เริ่มจาก requirement: เอกสาร 100k หน้า, query 50k/วัน, p95 5 วินาที, ข้อมูลตามสิทธิ์ แยก ingestion pipeline (parse/chunk/embed/index) และ query pipeline (auth/filter/retrieve/rerank/generate/cite) ใช้ hybrid search, cache, queue สำหรับ ingestion, tracing และ eval set พร้อม fallback เมื่อ provider ล่ม',
    tags: ['RAG', 'architecture']
  },
  {
    id: 'sd-2',
    category: 'System Design',
    level: 'สูง',
    q: 'จะออกแบบระบบตรวจจับ fraud แบบ real-time อย่างไร?',
    a: 'รับ event ผ่าน stream, คำนวณ feature แบบ near-real-time จาก feature store, ใช้โมเดล low-latency พร้อม rule fallback, ส่งผลลัพธ์กลับภายใน SLA, เก็บ decision log, monitor drift และมี human review สำหรับเคสความเสี่ยงสูง ระวัง leakage จาก label ที่มาช้า',
    tags: ['fraud', 'real-time']
  },
  {
    id: 'sd-3',
    category: 'System Design',
    level: 'กลาง',
    q: 'Batch inference กับ real-time inference ต่างกันอย่างไร?',
    a: 'Batch เหมาะกับงานที่ผลลัพธ์ไม่ต้องทันที ต้นทุนต่อรายการต่ำและจัดการ throughput ง่าย Real-time เหมาะกับปฏิสัมพันธ์ที่ต้องตอบทันทีแต่ซับซ้อนเรื่อง latency, scaling และต้นทุนมากกว่า บางระบบใช้ทั้งสองแบบร่วมกัน',
    tags: ['batch', 'real-time']
  },
  {
    id: 'sd-4',
    category: 'System Design',
    level: 'สูง',
    q: 'ถ้า traffic เพิ่ม 10 เท่า อะไรจะพังก่อนใน LLM app?',
    a: 'มักเป็น rate limit ของ provider, queue latency, ต้นทุน, context storage และ downstream database จากนั้นแก้ด้วย caching, batching, model routing, async processing, autoscaling และ backpressure พร้อมกำหนด SLO และ graceful degradation',
    tags: ['scale', 'LLM']
  },
  {
    id: 'sd-5',
    category: 'System Design',
    level: 'กลาง',
    q: 'จะออกแบบ fallback เมื่อ LLM provider ล่มอย่างไร?',
    a: 'มี provider สำรองหรือโมเดลสำรองที่ผ่าน eval, ใช้ circuit breaker, queue งานที่รอได้, ตอบด้วยข้อความสำรองที่ซื่อสัตย์ และมี alert/runbook ต้องทดสอบ failover เป็นระยะและระวังความต่างของคุณภาพ/รูปแบบ',
    tags: ['reliability', 'fallback']
  },
  {
    id: 'sd-6',
    category: 'System Design',
    level: 'สูง',
    q: 'คุณจะประมาณต้นทุนระบบ AI ก่อนสร้างจริงอย่างไร?',
    a: 'ประมาณจากจำนวน request, input/output token เฉลี่ย, ราคาต่อ 1M token, จำนวน retry, embedding/retrieval และ infrastructure จากนั้นทำ sensitivity analysis สำหรับ 3 สถานการณ์ และติดตาม actual เทียบ estimate หลัง launch',
    tags: ['cost', 'capacity']
  },
  {
    id: 'sd-7',
    category: 'System Design',
    level: 'กลาง',
    q: 'Observability สำหรับ LLM ต้องเก็บอะไรบ้าง?',
    a: 'เก็บ request ID, latency แยกขั้น, token usage, model/prompt version, retrieval hits, tool calls, error/fallback, user feedback และผล eval แบบ sampled โดย redact PII และมี trace ที่เชื่อม client ถึง provider',
    tags: ['observability', 'LLM']
  },
  {
    id: 'sd-8',
    category: 'System Design',
    level: 'สูง',
    q: 'จะออกแบบระบบที่มี human-in-the-loop อย่างมีประสิทธิภาพอย่างไร?',
    a: 'กำหนดว่า action ใดต้องมีคนอนุมัติตามความเสี่ยง, แสดงข้อมูลประกอบและ confidence, ออกแบบ queue ที่จัดลำดับความสำคัญ, บันทึกการตัดสินใจและ feedback, วัด time-to-review และอัตราการ override เพื่อไม่ให้ human กลายเป็น rubber stamp',
    tags: ['human-in-the-loop', 'UX']
  },
  {
    id: 'beh-1',
    category: 'Behavioral',
    level: 'เริ่มต้น',
    q: 'เล่าโปรเจกต์ที่คุณภูมิใจที่สุดและอธิบายบทบาทของคุณ',
    a: 'ใช้ STAR: ปัญหา, เป้าหมาย, สิ่งที่คุณทำจริง, ผลลัพธ์ที่วัดได้ และบทเรียน เน้นการตัดสินใจและ trade-off ที่เป็นของคุณ ไม่ใช่แค่รายชื่อ technology ถ้าเป็นทีม ให้ระบุส่วนที่คุณรับผิดชอบชัดเจน',
    tags: ['STAR', 'portfolio']
  },
  {
    id: 'beh-2',
    category: 'Behavioral',
    level: 'กลาง',
    q: 'เล่าเหตุการณ์ที่โมเดลหรือระบบ AI ที่คุณทำล้มเหลว',
    a: 'เลือกเหตุการณ์จริงที่คุณรับผิดชอบ อธิบายผลกระทบ วิธี detect การแก้ไขทันที และ root cause จากนั้นเล่าว่าคุณเปลี่ยนกระบวนการอะไรเพื่อไม่ให้เกิดซ้ำ เน้นความซื่อสัตย์และระบบที่ตามมา ไม่ใช่โทษคนอื่น',
    tags: ['failure', 'ownership']
  },
  {
    id: 'beh-3',
    category: 'Behavioral',
    level: 'กลาง',
    q: 'คุณอธิบายข้อจำกัดของ AI ให้ stakeholder ที่ไม่เทคนิคฟังอย่างไร?',
    a: 'เริ่มจากงานและความเสี่ยงที่เขาสนใจ ใช้ภาษาธุรกิจ ไม่ใช้ศัพท์เช่น embedding หรือ hallucination โดยไม่อธิบาย ยกตัวอย่างเคสจริงและบอกระดับความมั่นใจ พร้อมข้อเสนอเช่น human review หรือขอบเขตการใช้งาน',
    tags: ['communication', 'stakeholder']
  },
  {
    id: 'beh-4',
    category: 'Behavioral',
    level: 'กลาง',
    q: 'เล่าเวลาที่คุณต้องเลือก trade-off ระหว่างคุณภาพกับ deadline',
    a: 'อธิบายข้อจำกัดและทางเลือกที่ชั่งน้ำหนัก เช่น ลดขอบเขต, ใช้โมเดลที่เร็วขึ้น, เพิ่ม human review หรือเลื่อน launch เพื่อความปลอดภัย จากนั้นอธิบายหลักฐานที่ใช้ตัดสินและผลลัพธ์ รวมถึงสิ่งที่คุณสื่อสารกับทีม',
    tags: ['trade-off', 'deadline']
  },
  {
    id: 'beh-5',
    category: 'Behavioral',
    level: 'กลาง',
    q: 'คุณเรียนรู้เทคโนโลยีใหม่เร็วแค่ไหน ยกตัวอย่าง',
    a: 'เล่าว่าคุณเจอปัญหาอะไร ไม่รู้เทคโนโลยีอะไร วิธีเรียนรู้ (เอกสาร official, prototype, ทำ lab) และผลลัพธ์ที่วัดได้ เน้นกระบวนการเรียนรู้และสิ่งที่คุณส่งมอบ ไม่ใช่แค่ “อ่านบทความ”',
    tags: ['learning', 'growth']
  },
  {
    id: 'beh-6',
    category: 'Behavioral',
    level: 'สูง',
    q: 'เล่าเวลาที่คุณไม่เห็นด้วยกับทีมหรือหัวหน้า',
    a: 'อธิบายประเด็น ข้อมูลที่คุณใช้ วิธีสื่อสารอย่างเคารพ และผลลัพธ์ ถ้าคุณเปลี่ยนใจ ให้เล่าเหตุผล ถ้าทีมเลือกทางอื่น ให้เล่าว่าคุณสนับสนุนอย่างไรและติดตามผล อย่าทำให้ฝ่ายตรงข้ามดูแย่',
    tags: ['conflict', 'collaboration']
  },
  {
    id: 'beh-7',
    category: 'Behavioral',
    level: 'กลาง',
    q: 'คุณจัดลำดับงานเมื่อมีหลายโปรเจกต์และข้อมูลไม่ครบอย่างไร?',
    a: 'อธิบายกรอบที่ใช้ เช่น impact, risk, dependency และ effort, วิธี communicate กับ stakeholder, การตั้ง checkpoint และการตัดสินใจด้วยข้อมูลเท่าที่มี พร้อมตัวอย่างจริงที่คุณลดขอบเขตหรือเลื่อนงานอย่างมีเหตุผล',
    tags: ['prioritization', 'planning']
  },
  {
    id: 'beh-8',
    category: 'Behavioral',
    level: 'กลาง',
    q: 'อะไรคือจุดอ่อนของคุณ และคุณกำลังจัดการอย่างไร',
    a: 'เลือกจุดอ่อนจริงที่ไม่ทำลายความสามารถหลัก เล่าว่ามันแสดงออกอย่างไร ผลกระทบ และระบบที่คุณใช้แก้ เช่น ขอ feedback, เขียน checklist, ตั้งเวลา review และยกตัวอย่างความคืบหน้า หลีกเลี่ยงคำตอบสำเร็จรูปอย่าง “บ้างานเกินไป”',
    tags: ['self-awareness', 'growth']
  }
];

export const interviewByCategory = Object.fromEntries(
  interviewCategories.map((category) => [category, interviewQuestions.filter((q) => q.category === category)])
);

export const interviewCount = interviewQuestions.length + 50;
