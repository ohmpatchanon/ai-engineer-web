export interface Resource {
  title: string;
  url: string;
  category: string;
  description: string;
  free: boolean;
  level: string;
  tags: string[];
}

export const resourceCategories = ['คอร์สเรียน', 'เอกสารทางการ', 'หนังสือ/บทความ', 'แบบฝึกหัด/ข้อมูล', 'เครื่องมือ', 'ชุมชน/หางาน'];

export const resources: Resource[] = [
  { title: 'Google Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', category: 'คอร์สเรียน', description: 'พื้นฐาน ML พร้อม interactive exercises เหมาะเริ่มต้นและทบทวน concept หลัก', free: true, level: 'เริ่มต้น', tags: ['ML', 'Google'] },
  { title: 'fast.ai: Practical Deep Learning for Coders', url: 'https://course.fast.ai/', category: 'คอร์สเรียน', description: 'เรียน deep learning แบบลงมือทำ เน้นสร้างโมเดลจริงตั้งแต่บทแรก', free: true, level: 'กลาง', tags: ['deep learning', 'PyTorch'] },
  { title: 'Hugging Face LLM Course', url: 'https://huggingface.co/learn/llm-course', category: 'คอร์สเรียน', description: 'Transformers, tokenizers, fine-tuning และการใช้งาน ecosystem ของ Hugging Face', free: true, level: 'กลาง', tags: ['LLM', 'Transformers'] },
  { title: 'Hugging Face Agents Course', url: 'https://huggingface.co/learn/agents-course', category: 'คอร์สเรียน', description: 'หลักการ agent, tool use และการสร้าง agent ด้วย ecosystem ที่ทันสมัย', free: true, level: 'กลาง', tags: ['agents', 'tools'] },
  { title: 'Andrej Karpathy: Neural Networks Zero to Hero', url: 'https://karpathy.ai/zero-to-hero.html', category: 'คอร์สเรียน', description: 'สร้าง neural network และ GPT จากศูนย์ด้วยความเข้าใจระดับลึก', free: true, level: 'กลาง–สูง', tags: ['deep learning', 'GPT'] },
  { title: 'Stanford CS229: Machine Learning', url: 'https://cs229.stanford.edu/', category: 'คอร์สเรียน', description: 'คอร์ส ML ระดับมหาวิทยาลัยที่ครอบคลุมทฤษฎีและการใช้งาน', free: true, level: 'สูง', tags: ['ML', 'theory'] },
  { title: 'Stanford CS224N: NLP with Deep Learning', url: 'https://web.stanford.edu/class/cs224n/', category: 'คอร์สเรียน', description: 'NLP สมัยใหม่ ตั้งแต่ word vectors ถึง Transformer และ LLM', free: true, level: 'สูง', tags: ['NLP', 'deep learning'] },
  { title: 'Full Stack Deep Learning', url: 'https://fullstackdeeplearning.com/course/', category: 'คอร์สเรียน', description: 'ภาพรวมการนำ ML ไป production ตั้งแต่ data ถึง deployment และ monitoring', free: true, level: 'กลาง', tags: ['MLOps', 'production'] },
  { title: 'Made With ML', url: 'https://madewithml.com/', category: 'คอร์สเรียน', description: 'หลักสูตร ML engineering ที่เน้นการสร้างระบบจริงและ best practices', free: true, level: 'กลาง', tags: ['MLOps', 'engineering'] },
  { title: 'DeepLearning.AI Short Courses', url: 'https://www.deeplearning.ai/short-courses/', category: 'คอร์สเรียน', description: 'คอร์สสั้นหลายหัวข้อด้าน LLM, RAG, agents และ evaluation จากผู้ปฏิบัติงาน', free: true, level: 'กลาง', tags: ['LLM', 'short courses'] },
  { title: 'MIT 6.S191: Introduction to Deep Learning', url: 'https://introtodeeplearning.com/', category: 'คอร์สเรียน', description: 'บทนำ deep learning ที่กระชับ พร้อม lecture และ lab', free: true, level: 'เริ่มต้น–กลาง', tags: ['deep learning'] },
  { title: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/', category: 'เอกสารทางการ', description: 'ตัวอย่างโค้ดสำหรับ structured output, RAG, evaluation, agents และ อื่น ๆ', free: true, level: 'กลาง', tags: ['OpenAI', 'recipes'] },
  { title: 'Anthropic Docs', url: 'https://docs.anthropic.com/', category: 'เอกสารทางการ', description: 'คู่มือ prompt engineering, tool use, evaluation และ best practices สำหรับ Claude', free: true, level: 'กลาง', tags: ['Anthropic', 'prompting'] },
  { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', category: 'เอกสารทางการ', description: 'บทเรียนทางการตั้งแต่ tensor ถึง training loop และ production', free: true, level: 'เริ่มต้น–สูง', tags: ['PyTorch'] },
  { title: 'scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', category: 'เอกสารทางการ', description: 'คู่มือครบสำหรับ classical ML, preprocessing, pipeline และ evaluation', free: true, level: 'เริ่มต้น–กลาง', tags: ['scikit-learn', 'ML'] },
  { title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/', category: 'เอกสารทางการ', description: 'สร้าง API ด้วย Python พร้อม type validation และ async support', free: true, level: 'เริ่มต้น–กลาง', tags: ['API', 'Python'] },
  { title: 'LangChain Documentation', url: 'https://python.langchain.com/', category: 'เอกสารทางการ', description: 'เครื่องมือสำหรับ LLM app, RAG และ agents ควรเข้าใจพื้นฐานก่อนใช้ framework', free: true, level: 'กลาง', tags: ['LLM', 'framework'] },
  { title: 'LlamaIndex Documentation', url: 'https://docs.llamaindex.ai/', category: 'เอกสารทางการ', description: 'framework สำหรับ data ingestion, indexing และ RAG พร้อม production guides', free: true, level: 'กลาง', tags: ['RAG', 'framework'] },
  { title: 'vLLM Documentation', url: 'https://docs.vllm.ai/', category: 'เอกสารทางการ', description: 'serving engine สำหรับ LLM ที่เน้น throughput ด้วย PagedAttention', free: true, level: 'สูง', tags: ['inference', 'serving'] },
  { title: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/', category: 'เอกสารทางการ', description: 'experiment tracking, model registry และ deployment สำหรับ ML lifecycle', free: true, level: 'กลาง', tags: ['MLOps', 'registry'] },
  { title: 'Evidently AI Documentation', url: 'https://docs.evidentlyai.com/', category: 'เอกสารทางการ', description: 'เครื่องมือ open-source สำหรับ data drift และ model monitoring', free: true, level: 'กลาง', tags: ['monitoring', 'drift'] },
  { title: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', category: 'เอกสารทางการ', description: 'รายการความเสี่ยงหลักของ LLM app พร้อมแนวทางป้องกันที่ใช้ได้จริง', free: true, level: 'กลาง', tags: ['security', 'OWASP'] },
  { title: 'Docker Documentation', url: 'https://docs.docker.com/', category: 'เอกสารทางการ', description: 'พื้นฐาน container, image, compose และ best practices สำหรับ deploy', free: true, level: 'เริ่มต้น–กลาง', tags: ['Docker', 'DevOps'] },
  { title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/home/', category: 'เอกสารทางการ', description: 'เอกสารทางการสำหรับ orchestration, scaling และ operating workloads', free: true, level: 'สูง', tags: ['Kubernetes', 'infra'] },
  { title: 'Mathematics for Machine Learning', url: 'https://mml-book.github.io/', category: 'หนังสือ/บทความ', description: 'หนังสือฟรีที่เชื่อม linear algebra, calculus, probability กับ ML อย่างเข้าใจง่าย', free: true, level: 'กลาง', tags: ['math', 'book'] },
  { title: 'An Introduction to Statistical Learning', url: 'https://www.statlearning.com/', category: 'หนังสือ/บทความ', description: 'ตำรา ML ที่อ่านง่าย พร้อมตัวอย่าง R/Python และแบบฝึกหัด', free: true, level: 'เริ่มต้น–กลาง', tags: ['ML', 'statistics'] },
  { title: 'Speech and Language Processing', url: 'https://web.stanford.edu/~jurafsky/slp3/', category: 'หนังสือ/บทความ', description: 'ตำรา NLP ฉบับออนไลน์ที่ครอบคลุมตั้งแต่ภาษาศาสตร์ถึง LLM', free: true, level: 'กลาง–สูง', tags: ['NLP', 'book'] },
  { title: 'Dive into Deep Learning', url: 'https://d2l.ai/', category: 'หนังสือ/บทความ', description: 'หนังสือ deep learning แบบ interactive พร้อมโค้ด PyTorch/MXNet/TensorFlow', free: true, level: 'กลาง', tags: ['deep learning', 'book'] },
  { title: 'The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', category: 'หนังสือ/บทความ', description: 'อธิบาย Transformer ด้วยภาพ เข้าใจง่าย เหมาะก่อนอ่าน paper', free: true, level: 'เริ่มต้น–กลาง', tags: ['Transformer', 'visual'] },
  { title: 'Anthropic: Building Effective Agents', url: 'https://www.anthropic.com/research/building-effective-agents', category: 'หนังสือ/บทความ', description: 'บทความที่แยก workflow กับ agent และให้ pattern ที่นำไปใช้ได้จริง', free: true, level: 'กลาง', tags: ['agents', 'architecture'] },
  { title: 'Google Rules of Machine Learning', url: 'https://developers.google.com/machine-learning/guides/rules-of-ml', category: 'หนังสือ/บทความ', description: 'บทเรียนจากงาน production ที่ช่วยหลีกเลี่ยงกับดัก ML ทั่วไป', free: true, level: 'กลาง', tags: ['ML', 'production'] },
  { title: 'Chip Huyen: Machine Learning Interviews Book', url: 'https://huyenchip.com/ml-interviews-book/', category: 'หนังสือ/บทความ', description: 'แนวทางเตรียมสัมภาษณ์ ML อย่างละเอียดพร้อมคำถามตัวอย่าง', free: true, level: 'กลาง', tags: ['interview', 'career'] },
  { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', category: 'แบบฝึกหัด/ข้อมูล', description: 'คอร์สสั้นพร้อม notebook สำหรับ Python, pandas, ML และ feature engineering', free: true, level: 'เริ่มต้น', tags: ['practice', 'Kaggle'] },
  { title: 'Kaggle Competitions', url: 'https://www.kaggle.com/competitions', category: 'แบบฝึกหัด/ข้อมูล', description: 'แข่งขันบนโจทย์จริง ดู solution และเรียนรู้จาก leaderboard', free: true, level: 'กลาง–สูง', tags: ['practice', 'datasets'] },
  { title: 'Hugging Face Datasets', url: 'https://huggingface.co/datasets', category: 'แบบฝึกหัด/ข้อมูล', description: 'คลัง dataset หลายภาษาและหลายโดเมนสำหรับทดลองโมเดล', free: true, level: 'เริ่มต้น–สูง', tags: ['datasets'] },
  { title: 'UCI Machine Learning Repository', url: 'https://archive.ics.uci.edu/', category: 'แบบฝึกหัด/ข้อมูล', description: 'dataset คลาสสิกสำหรับฝึก ML และเปรียบเทียบผล', free: true, level: 'เริ่มต้น', tags: ['datasets'] },
  { title: 'PyThaiNLP', url: 'https://pythainlp.org/', category: 'แบบฝึกหัด/ข้อมูล', description: 'ไลบรารีประมวลผลภาษาธรรมชาติภาษาไทย พร้อม tokenizer และ utilities', free: true, level: 'เริ่มต้น–กลาง', tags: ['Thai NLP', 'tools'] },
  { title: 'Papers with Code', url: 'https://paperswithcode.com/', category: 'แบบฝึกหัด/ข้อมูล', description: 'เชื่อม paper กับโค้ดและ benchmark ช่วยเลือกวิธีที่ควรศึกษา', free: true, level: 'กลาง–สูง', tags: ['papers', 'research'] },
  { title: 'arXiv cs.LG', url: 'https://arxiv.org/list/cs.LG/recent', category: 'แบบฝึกหัด/ข้อมูล', description: 'paper ใหม่ด้าน machine learning ใช้ติดตามแนวโน้มอย่างมีวิจารณญาณ', free: true, level: 'สูง', tags: ['papers'] },
  { title: 'Google Colab', url: 'https://colab.research.google.com/', category: 'เครื่องมือ', description: 'Notebook บน cloud พร้อม GPU สำหรับทดลองโมเดลและแชร์งาน', free: true, level: 'เริ่มต้น', tags: ['notebook', 'GPU'] },
  { title: 'Weights & Biases', url: 'https://wandb.ai/', category: 'เครื่องมือ', description: 'Experiment tracking และ dashboard สำหรับ ML พร้อม free tier', free: true, level: 'กลาง', tags: ['experiment tracking'] },
  { title: 'OpenTelemetry', url: 'https://opentelemetry.io/', category: 'เครื่องมือ', description: 'มาตรฐาน open-source สำหรับ traces, metrics และ logs', free: true, level: 'สูง', tags: ['observability'] },
  { title: 'Inspect AI', url: 'https://inspect.aisi.org.uk/', category: 'เครื่องมือ', description: 'framework สำหรับประเมิน LLM จาก UK AI Safety Institute', free: true, level: 'สูง', tags: ['evaluation', 'safety'] },
  { title: 'Prompting Guide', url: 'https://www.promptingguide.ai/', category: 'เครื่องมือ', description: 'รวมเทคนิค prompting และงานวิจัยที่เกี่ยวข้อง เหมาะเป็นจุดเริ่มต้นสำรวจ', free: true, level: 'กลาง', tags: ['prompting'] },
  { title: 'r/MachineLearning', url: 'https://www.reddit.com/r/MachineLearning/', category: 'ชุมชน/หางาน', description: 'ชุมชน discuss paper, project และข่าวสาร ML ใช้อย่างมีวิจารณญาณ', free: true, level: 'กลาง', tags: ['community'] },
  { title: 'Hugging Face Forums', url: 'https://discuss.huggingface.co/', category: 'ชุมชน/หางาน', description: 'ถามตอบเกี่ยวกับ transformers, datasets และการใช้งานโมเดล', free: true, level: 'เริ่มต้น–สูง', tags: ['community'] },
  { title: 'MLOps Community', url: 'https://mlops.community/', category: 'ชุมชน/หางาน', description: 'ชุมชนและ podcast สำหรับคนทำงานด้าน MLOps และ platform', free: true, level: 'กลาง', tags: ['community', 'MLOps'] },
  { title: 'AI Jobs', url: 'https://aijobs.net/', category: 'ชุมชน/หางาน', description: 'รวมตำแหน่งงาน AI/ML จากหลายบริษัท เหมาะสำรวจตลาดและ JD', free: true, level: 'เริ่มต้น–สูง', tags: ['jobs'] },
  { title: 'Wellfound', url: 'https://wellfound.com/', category: 'ชุมชน/หางาน', description: 'ตลาดงาน startup ที่มีตำแหน่ง AI/ML และ product engineering จำนวนมาก', free: true, level: 'เริ่มต้น–สูง', tags: ['jobs', 'startup'] }
];

export const resourcesCount = resources.length;
