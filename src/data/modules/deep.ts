import type { Module } from '../types';

export const deepModules: Module[] = [
  {
    id: 'dl-foundations',
    number: '10',
    slug: 'deep-learning-foundations',
    phase: 'deep-learning',
    title: 'Deep Learning Foundations',
    en: 'Deep Learning Foundations',
    summary: 'จาก perceptron สู่โครงข่ายหลายชั้น เข้าใจว่าการเรียนรู้เกิดขึ้นได้อย่างไร และทำไมโมเดลถึงไม่เรียนรู้',
    why: 'LLM ทุกตัวสร้างบนหลักการเดียวกับ neural network พื้นฐาน การเข้าใจ forward pass, loss, gradient และ optimizer ทำให้คุณ debug ได้มากกว่าการเปลี่ยน hyperparameter แบบสุ่ม',
    mentalModel: 'Neural network คือฟังก์ชันที่ปรับได้ด้วย gradient: ข้อมูลวิ่งไปข้างหน้า ความผิดพลาดวิ่งย้อนกลับ',
    duration: '2 สัปดาห์',
    level: 'กลาง',
    tracks: ['ml', 'llm'],
    outcomes: [
      'อธิบาย forward pass และ backpropagation ของ network เล็กได้',
      'เลือก activation, loss และ optimizer ได้เหมาะสม',
      'วินิจฉัย vanishing/exploding gradient และ overfitting ได้',
      'อ่าน learning curve และปรับการเทรนอย่างมีเหตุผล'
    ],
    topics: [
      { title: 'Perceptron และ multilayer network', detail: 'linear layer, activation function และความจำเป็นของ non-linearity เพื่อให้ network เรียนรู้ความสัมพันธ์ที่ซับซ้อน' },
      { title: 'Forward pass และ loss', detail: 'คำนวณ output, เปรียบเทียบกับ target และแปลงเป็น scalar loss ที่ differentiable' },
      { title: 'Backpropagation', detail: 'computational graph, chain rule และการไหลของ gradient จาก loss กลับไปยังทุกพารามิเตอร์' },
      { title: 'Optimizers', detail: 'SGD, momentum, Adam, AdamW และผลของ learning rate, weight decay ต่อการลู่เข้า' },
      { title: 'Regularization', detail: 'dropout, weight decay, early stopping, data augmentation และ batch normalization ในบริบทที่เหมาะสม' },
      { title: 'สถาปัตยกรรมหลัก', detail: 'MLP, CNN, RNN และ Transformer ว่าแต่ละแบบมี inductive bias อะไรและเหมาะกับข้อมูลแบบไหน' }
    ],
    lab: 'สร้าง neural network 2 ชั้นด้วย NumPy เพื่อทำนาย XOR แล้ว plot decision boundary และ loss curve',
    deliverable: 'Notebook + คำอธิบายว่าเหตุใด linear model จึงแก้ XOR ไม่ได้',
    checkpoint: [
      'อธิบายได้ว่า activation ที่ไม่เป็นเชิงเส้นสำคัญอย่างไร',
      'บอกสาเหตุที่ loss ไม่ลดได้อย่างน้อย 3 ข้อ',
      'อธิบายว่า learning rate ใหญ่เกินไปเกิดอะไรขึ้น'
    ],
    mistakes: [
      'เริ่มจาก architecture ใหญ่โดยไม่ตรวจ data pipeline',
      'ใช้ accuracy เป็น loss โดยตรง',
      'ไม่ normalize input แล้วโทษ optimizer'
    ],
    resources: [
      { title: 'Neural Networks and Deep Learning (free book)', url: 'http://neuralnetworksanddeeplearning.com/', kind: 'book' },
      { title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', kind: 'course' },
      { title: 'PyTorch: Learn the Basics', url: 'https://pytorch.org/tutorials/beginner/basics/intro.html', kind: 'tutorial' }
    ],
    keywords: ['neural network', 'backpropagation', 'optimizer', 'activation', 'regularization'],
    quiz: [
      {
        question: 'ถ้า learning rate สูงเกินไป มักเกิดอะไร?',
        options: ['โมเดลเรียนรู้ช้าแต่เสถียร', 'loss สั่นหรือ diverge', 'จำนวน parameter ลดลง', 'ข้อมูลรั่ว'],
        answer: 1,
        explanation: 'ก้าวที่ใหญ่เกินไปทำให้ข้ามจุดต่ำสุดและอาจทำให้ loss แกว่งหรือเพิ่มขึ้นจนลู่ออก'
      },
      {
        question: 'Backpropagation คำนวณ gradient โดยใช้หลักใด?',
        options: ['Bayes theorem', 'Chain rule', 'Central limit theorem', 'Euclidean algorithm'],
        answer: 1,
        explanation: 'Chain rule ช่วยให้คำนวณอนุพันธ์ของฟังก์ชันประกอบย้อนกลับผ่าน computational graph'
      },
      {
        question: 'Dropout ช่วยเรื่องอะไร?',
        options: ['ลดจำนวน layer', 'regularization โดยปิด neuron บางตัวแบบสุ่มตอนเทรนเพื่อป้องกัน overfitting', 'เพิ่มข้อมูล', 'เร่ง GPU'],
        answer: 1,
        explanation: 'Dropout สุ่มปิดหน่วยประสาทระหว่างเทรน ทำให้โมเดลไม่พึ่ง neuron เดียวและ generalize ดีขึ้น'
      },
      {
        question: 'Adam ต่างจาก SGD อย่างไรในเชิงปฏิบัติ?',
        options: ['Adam ใช้ gradient ประมาณเท่าเดิม', 'Adam ปรับ lr แยกต่อพารามิเตอร์โดยใช้โมเมนต์', 'SGD ไม่ต้องใช้ข้อมูล', 'Adam ไม่ต้อง normalize'],
        answer: 1,
        explanation: 'Adam ใช้ค่าเฉลี่ยและกำลังสองของ gradient เพื่อปรับ adaptive lr ต่อพารามิเตอร์'
      }
    ]
  },
  {
    id: 'pytorch',
    number: '11',
    slug: 'pytorch',
    phase: 'deep-learning',
    title: 'PyTorch ตั้งแต่ Tensor ถึง Training Loop',
    en: 'PyTorch in Practice',
    summary: 'ลงมือเขียน training loop จริง จัดการ dataset, device, checkpoint และ debug โมเดลอย่างเป็นระบบ',
    why: 'PyTorch คือภาษาทำงานของนักวิจัยและ engineer ส่วนใหญ่ การเข้าใจ autograd และ lifecycle ของการเทรนทำให้คุณใช้ library ใหม่ ๆ ได้เร็วและแก้ปัญหาได้จริง',
    mentalModel: 'Tensor คือข้อมูล, autograd คือสมุดบันทึก gradient, optimizer คือคนปรับพารามิเตอร์ และ DataLoader คือสายพานข้อมูล',
    duration: '2 สัปดาห์',
    level: 'กลาง',
    tracks: ['ml', 'llm'],
    outcomes: [
      'เขียน training และ evaluation loop ที่ถูกต้องได้',
      'ใช้ Dataset/DataLoader กับข้อมูลจริงได้',
      'บันทึกและโหลด checkpoint พร้อม resume การเทรนได้',
      'ใช้เทคนิค debug เช่น overfit batch เดียว และตรวจ gradient ได้'
    ],
    topics: [
      { title: 'Tensor operations', detail: 'shape, dtype, device, broadcasting, view/reshape และ indexing ที่ไม่ทำให้ข้อมูลถูกคัดลอกโดยไม่ตั้งใจ' },
      { title: 'Autograd', detail: 'requires_grad, computational graph, zero_grad และการหยุด gradient ด้วย detach/no_grad' },
      { title: 'nn.Module', detail: 'layers, parameters, buffers, forward method และการจัดโครงสร้างโมเดลให้ทดสอบได้' },
      { title: 'Dataset และ DataLoader', detail: 'map-style vs iterable dataset, collate_fn, shuffle, num_workers และการจัดการข้อมูลขนาดใหญ่' },
      { title: 'Training loop', detail: 'train/eval mode, loss, optimizer.step, scheduler, gradient clipping และการบันทึก metric' },
      { title: 'Debugging และ performance', detail: 'overfit one batch, ตรวจ shape/dtype/device, mixed precision, gradient accumulation และ profiling เบื้องต้น' }
    ],
    lab: 'เทรน image classifier ขนาดเล็กด้วย PyTorch พร้อม checkpoint, early stopping และรายงานผลบน test set',
    deliverable: 'Repo training pipeline ที่รันซ้ำได้และมี experiment log',
    checkpoint: [
      'อธิบายได้ว่าทำไมต้อง optimizer.zero_grad()',
      'แยก train mode กับ eval mode ได้',
      'วินิจฉัย loss ที่เป็น NaN ได้อย่างน้อย 3 สาเหตุ'
    ],
    mistakes: [
      'ลืม zero_grad ทำให้ gradient สะสม',
      'ประเมินผลโดยไม่เรียก model.eval()',
      'ใช้ test set ปรับ hyperparameter'
    ],
    resources: [
      { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', kind: 'docs' },
      { title: 'PyTorch: Training a Classifier', url: 'https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html', kind: 'tutorial' },
      { title: 'Lightning AI Documentation', url: 'https://lightning.ai/docs/pytorch/stable/', kind: 'docs' }
    ],
    keywords: ['PyTorch', 'autograd', 'DataLoader', 'training loop', 'checkpoint'],
    quiz: [
      {
        question: 'ทำไมต้องเรียก optimizer.zero_grad() ในแต่ละ step?',
        options: ['เพื่อล้าง dataset', 'เพื่อไม่ให้ gradient สะสมข้าม step', 'เพื่อเพิ่ม learning rate', 'เพื่อ reset model'],
        answer: 1,
        explanation: 'PyTorch สะสม gradient ไว้ใน .grad หากไม่ล้าง ค่าจาก step ก่อนจะบวกเพิ่มและทำให้การอัปเดตผิด'
      },
      {
        question: 'เทคนิคใดช่วยตรวจว่าโมเดลและ loss สามารถเรียนรู้ได้ก่อนเริ่มเทรนเต็มรูปแบบ?',
        options: ['Overfit batch เดียว', 'เพิ่ม test set', 'ลบ dropout', 'ลดจำนวน layer เหลือศูนย์'],
        answer: 0,
        explanation: 'การ overfit ข้อมูล batch เดียวควรทำให้ loss ลดลงมาก ถ้าทำไม่ได้มักมี bug ใน data, loss หรือ optimization'
      },
      {
        question: 'การ checkpoint ใน PyTorch ใช้เพื่ออะไร?',
        options: ['ลดจำนวน epoch', 'บันทึกโมเดล optimizer และ state เพื่อ resume การเทรน', 'ล้าง GPU', 'แปลง prediction'],
        answer: 1,
        explanation: 'Checkpoint ที่ครบ (model + optimizer + epoch + scheduler) ทำให้เทรนต่อได้โดยไม่ต้องเริ่มใหม่'
      }
    ]
  },
  {
    id: 'nlp',
    number: '12',
    slug: 'nlp-foundations',
    phase: 'deep-learning',
    title: 'NLP Foundations',
    en: 'Natural Language Processing',
    summary: 'เข้าใจว่าคอมพิวเตอร์อ่านภาษาได้อย่างไร ตั้งแต่ token, embedding ไปจนถึง language modeling และ metric',
    why: 'LLM คือความต่อเนื่องของ NLP ดั้งเดิม การรู้จัก tokenization, distributional semantics และข้อจำกัดของ metric ช่วยให้คุณออกแบบระบบภาษาได้ดีขึ้น',
    mentalModel: 'ภาษาเป็นลำดับของสัญลักษณ์ที่เราพยายามแทนด้วยเวกเตอร์ เพื่อให้ similarity ในปริภูมิสะท้อนความหมาย',
    duration: '1–2 สัปดาห์',
    level: 'กลาง',
    tracks: ['llm', 'ml'],
    outcomes: [
      'อธิบาย tokenization และผลกระทบต่อต้นทุน/คุณภาพได้',
      'ใช้ embedding สำหรับ similarity และ classification ได้',
      'เข้าใจ language modeling และ decoding เบื้องต้น',
      'เลือก metric NLP ได้เหมาะสมกับงาน'
    ],
    topics: [
      { title: 'Tokenization', detail: 'word, character, subword และ BPE พร้อมผลต่อ vocabulary, ภาษาไทย และการนับ token' },
      { title: 'Embeddings', detail: 'word2vec, contextual embedding และการวัด similarity ด้วย cosine/dot product' },
      { title: 'Language modeling', detail: 'next-token prediction, perplexity และความเชื่อมโยงกับ pretraining ของ LLM' },
      { title: 'Sequence tasks', detail: 'classification, NER, summarization, translation และ QA ว่าแต่ละงานต้องการ output แบบใด' },
      { title: 'Decoding', detail: 'greedy, beam search, temperature, top-k และ top-p พร้อมผลต่อความหลากหลายและความแม่นยำ' },
      { title: 'NLP metrics', detail: 'accuracy, F1, BLEU, ROUGE, BERTScore และข้อจำกัดของการใช้ metric อัตโนมัติตัดสินคุณภาพภาษา' }
    ],
    lab: 'สร้าง text classifier ภาษาไทยด้วย TF-IDF + logistic regression แล้วเปรียบเทียบกับ embedding-based classifier',
    deliverable: 'Notebook เปรียบเทียบสองวิธีพร้อม error analysis 10 ตัวอย่าง',
    checkpoint: [
      'อธิบายได้ว่าทำไมภาษาไทยไม่มีช่องว่างจึงท้าทาย tokenizer',
      'บอกความต่างของ BLEU กับ ROUGE ได้',
      'อธิบาย temperature สูงมีผลอย่างไร'
    ],
    mistakes: [
      'ใช้ BLEU วัดคุณภาพแชทบอทโดยตรง',
      'คิดว่า embedding เดียวแทนความหมายได้ทุกบริบท',
      'ประเมินภาษาไทยด้วย tokenizer อังกฤษโดยไม่ตรวจ',
    ],
    resources: [
      { title: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course', kind: 'course' },
      { title: 'Speech and Language Processing (free book)', url: 'https://web.stanford.edu/~jurafsky/slp3/', kind: 'book' },
      { title: 'Hugging Face Tokenizers', url: 'https://huggingface.co/docs/tokenizers/', kind: 'docs' }
    ],
    keywords: ['tokenization', 'embedding', 'language model', 'BLEU', 'decoding'],
    quiz: [
      {
        question: 'Perplexity ต่ำหมายถึงอะไร?',
        options: ['โมเดลสับสนน้อยลงในการทำนาย token ถัดไป', 'โมเดลเร็วขึ้น', 'คำตอบสั้นลง', 'มี parameter น้อย'],
        answer: 0,
        explanation: 'Perplexity คือค่าที่สะท้อนความไม่แน่ใจเฉลี่ยต่อ token ยิ่งต่ำหมายถึงโมเดลให้ความน่าจะเป็นกับข้อมูลที่ดีขึ้น'
      },
      {
        question: 'Temperature ในการ generate ทำหน้าที่อะไร?',
        options: ['เพิ่ม context length', 'ปรับความแหลมของ probability distribution', 'ลบ token ที่ไม่ใช้', 'ลดต้นทุน'],
        answer: 1,
        explanation: 'อุณหภูมิสูงทำให้ distribution แบนลงและคำตอบหลากหลายขึ้น อุณหภูมิต่ำทำให้เลือกคำที่น่าจะเป็นมากที่สุดชัดขึ้น'
      },
      {
        question: 'BLEU ใดไม่เหมาะสำหรับอะไร?',
        options: ['เหมาะกับ chat ทั้งหมด', 'BLEU ไม่เหมาะวัดคุณภาพแชทหรือ paraphrase ที่ใช้คำต่างกันแต่ความหมายถูก', 'BLEU ใช้กับโค้ดเท่านั้น', 'ไม่ต้องมี metric'],
        answer: 1,
        explanation: 'BLEU วัด overlap ของ n-gram เหมาะกับ translation แต่แชทที่ตอบถูกด้วยคำต่างกันจะได้คะแนนต่ำ'
      }
    ]
  },
  {
    id: 'transformers',
    number: '13',
    slug: 'transformers',
    phase: 'deep-learning',
    title: 'Transformer และกลไก Attention',
    en: 'Transformers & Attention',
    summary: 'สถาปัตยกรรมที่เปลี่ยนวงการ AI อธิบาย attention, positional encoding และเหตุใดจึง scale ได้',
    why: 'LLM ทุกรุ่นปัจจุบันอิง Transformer การเข้าใจ Q/K/V, multi-head attention และ KV cache ทำให้คุณตัดสินใจเรื่อง context, latency และ fine-tuning ได้ดีขึ้น',
    mentalModel: 'Attention คือการให้ทุก token ถามว่า “ฉันควรสนใจ token ไหน” แล้วรวบรวมข้อมูลจาก token เหล่านั้น',
    duration: '2 สัปดาห์',
    level: 'สูง',
    tracks: ['llm', 'ml'],
    outcomes: [
      'อธิบาย self-attention และ Q/K/V ได้',
      'เข้าใจ multi-head, residual, layer norm และ FFN',
      'อธิบาย positional encoding และข้อจำกัดของ context window',
      'ประเมินต้นทุน attention และ KV cache ได้'
    ],
    topics: [
      { title: 'Self-attention', detail: 'query, key, value, scaled dot-product และ causal mask สำหรับ autoregressive model' },
      { title: 'Multi-head attention', detail: 'หลาย head ช่วยให้โมเดลเรียนรู้ความสัมพันธ์ต่างชนิดพร้อมกัน และการ concat + projection' },
      { title: 'Positional information', detail: 'absolute, sinusoidal, RoPE และผลต่อความสามารถในการ generalize ไปยังความยาวต่าง ๆ' },
      { title: 'Transformer block', detail: 'residual connection, layer normalization, feed-forward network และ pre-norm vs post-norm' },
      { title: 'Encoder, decoder และ variants', detail: 'BERT-style encoder, GPT-style decoder, T5 encoder-decoder และการเลือกใช้ตามงาน' },
      { title: 'Context และต้นทุน', detail: 'quadratic attention, KV cache, context window, flash attention และ trade-off ระหว่างคุณภาพกับ latency' }
    ],
    lab: 'ใช้ PyTorch เขียน self-attention ขนาดเล็กและ visualize attention weights จากประโยคตัวอย่าง',
    deliverable: 'Notebook อธิบาย shape ของ Q/K/V และผลของ causal mask',
    checkpoint: [
      'อธิบายได้ว่าทำไมต้อง scale dot product ด้วย √d_k',
      'บอกได้ว่า causal mask ทำอะไร',
      'อธิบายความสัมพันธ์ระหว่าง context length กับหน่วยความจำได้'
    ],
    mistakes: [
      'คิดว่า attention weight คือคำอธิบาย causality',
      'ลืม causal mask แล้วทำให้โมเดลเห็น token อนาคต',
      'เปรียบเทียบ context window โดยไม่ดูต้นทุนจริง'
    ],
    resources: [
      { title: 'Attention Is All You Need (paper)', url: 'https://arxiv.org/abs/1706.03762', kind: 'paper' },
      { title: 'The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', kind: 'article' },
      { title: 'Andrej Karpathy: Let’s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', kind: 'video' }
    ],
    keywords: ['Transformer', 'attention', 'RoPE', 'KV cache', 'context window'],
    quiz: [
      {
        question: 'Causal mask ใน decoder มีไว้เพื่ออะไร?',
        options: ['ลดหน่วยความจำ', 'ป้องกันไม่ให้ token เห็น token ในอนาคต', 'เพิ่มจำนวน head', 'ทำให้ embedding ใหญ่ขึ้น'],
        answer: 1,
        explanation: 'Autoregressive model ต้องทำนาย token ถัดไปโดยเห็นเฉพาะอดีต Causal mask จึงปิดตำแหน่งอนาคตใน attention'
      },
      {
        question: 'KV cache ช่วยเรื่องใดเป็นหลัก?',
        options: ['ลดคุณภาพคำตอบ', 'ลดการคำนวณซ้ำระหว่าง generate token ต่อ ๆ ไป', 'เพิ่ม context window', 'ลบ positional encoding'],
        answer: 1,
        explanation: 'การ cache key/value ของ token ก่อนหน้าช่วยไม่ต้องคำนวณซ้ำทุกครั้งที่ generate token ใหม่ แต่ใช้หน่วยความจำเพิ่ม'
      },
      {
        question: 'Multi-head attention ช่วยให้โมเดลทำอะไร?',
        options: ['ลดจำนวนจุดทศนิยม', 'เรียนรู้ความสัมพันธ์หลายแบบพร้อมกันโดยแต่ละ head เรียน subspace ต่างกัน', 'ลบ Q/K/V', 'ตัด RoPE'],
        answer: 1,
        explanation: 'แต่ละ head มองความสัมพันธ์ต่างชนิด (เช่น syntax vs position) แล้วยังรวมเป็น representation เดียว'
      }
    ]
  }
];
