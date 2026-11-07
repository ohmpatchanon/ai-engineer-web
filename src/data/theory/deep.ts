import type { Lesson } from './types';

export const deepLessons: Lesson[] = [
  {
    id: 't-nn',
    number: 'T.06',
    slug: 'neural-networks-inside',
    phase: 'deep-learning',
    title: 'โครงข่ายประสาทจากศูนย์: perceptron ถึงความยากของ backprop',
    en: 'How Neural Networks Work',
    summary: 'จาก perceptron ตัวเดียวถึงเครือข่ายลึก — ผ่าน activation, backward propagation, การเริ่ม weight และอุปสรรคที่ทำให้เทรนไม่ขึ้น',
    level: 'กลาง',
    prereqLessons: ['math-for-ai', 'how-models-learn'],
    linkedModules: ['deep-learning-foundations', 'pytorch'],
    teaches: [
      'สร้าง perceptron แล้วขยายไป multi-layer ได้',
      'อธิบาย backprop ในฐานะ chain rule ที่วิ่งย้อนกลับ',
      'รู้ว่า optimizer, weight init และ normalization แก้ปัญหาใด',
      'วินิจฉัยว่า "เทรนไม่ดี" เป็นปัญหาโครงสร้างหรือการตั้งค่า'
    ],
    keywords: ['perceptron', 'activation', 'backpropagation', 'optimizer', 'vanishing gradient', 'batch norm', 'weight initialization'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'จาก perceptron ตัวเดียวสู่ชั้นหลายชั้น',
        paragraphs: [
          'Perceptron รับเวกเตอร์ input, คูณ weight, รวมกับ bias แล้วผ่าน activation เพื่อตัดสินใจ (เช่น sigmoid) ปล่อยค่า 0-1 perceptron เบื้องต้นแก้ได้เฉพาะปัญหาที่แบ่งแยกด้วยเส้นตรง (linearly separable) เช่น AND แต่แพ้ XOR — เพราะ XOR ต้องใช้การพับพื้นที่มากกว่าหนึ่งครั้ง การแก้คือใส่ hidden layer: หลาย perceptron เรียงเป็นชั้น โดยชั้นแรกสร้าง "(แนวคิดย่อย) ของ feature" แล้วชั้นถัดไปรวมเป็นคำตอบ',
          'Deep learning คือการซ้อนชั้นแบบนี้หลายสิบ/ร้อยชั้น แต่ละชั้นไม่ได้ "คิดเอง" — มันเป็นฟังก์ชันที่ปรับได้ continuous ทำให้สามารถใช้ gradient ไล่หาค่าที่เหมาะได้ ซึ่งเป็นข้อได้เปรียบเด็ดขาดของ neural net เหนือวิธีที่ก้าวกระโดดแบบ discrete อย่าง decision tree'
        ],
        example: {
          title: 'ทำไมต้องมี hidden layer',
          body: 'AND แบ่งด้วยเส้นเดียวได้ (y = x1 AND x2) แต่ XOR (คำตอบจริงเมื่อต่างกัน) จุดทั้ง 4 วนกลับ แบ่งเส้นเดียวไม่ได้ — hidden layer ช่วย "บิดพื้นที่" ให้เข้าถึงคำตอบได้'
        }
      },
      {
        heading: 'activation: แหล่งของความไม่เป็นเส้นตรง',
        paragraphs: [
          'ถ้าไม่มี activation, การซ้อนชั้นก็แค่ linear รวมซ้ำ ๆ เหมือน layerเดียว activation เพิ่มความไม่เป็นเส้นตรง: ReLU (max(0,x)) เป็นค่าเริ่มต้นยอดนิยมเพราะ gradient ไหลดีและคำนวณเร็ว, sigmoid/softmax สำหรับชั้นสุดท้ายของ classification เมื่อต้องการความน่าจะเป็น, ชั้นสุดท้ายของ regression ใช้ linear (ไม่มี activation), และ sigmoid/tanh ในชั้นซ่อนไม่แนะนำแล้วเพราะทำให้ gradient อิ่มตัว — ชั้นซ่อนให้ใช้ ReLU/GELU',
          'ปัญหา vanishing gradient เกิดจาก activation ประเภทอิ่มตัว (sigmoid/tanh) คูณซ้ำในชั้นลึก: gradient ยิ่งลึกยิ่งหายจนชั้นแรก ๆ "ไม่เรียนรู้" ReLU แก้ได้มาก แต่มีลูกบาปของตัวเองคือ dead ReLU (ถ้า input น้ำหนักทำให้ output ติดลบตลอด neuron จะตายถาวร) — การเริ่ม weight และ learning rate ที่พอเหมาะจึงสำคัญเท่า ๆ กับ choice ของ activation'
        ]
      },
      {
        heading: 'backpropagation: chain rule ที่วิ่งย้อนกลับ',
        paragraphs: [
          'Backprop เป็นแค่วิธีคูณ gradient ผ่าน chain rule ที่ทิศทางย้อนกลับ: loss → อยากให้ output ขยับเท่าไร → อยากให้ hidden แต่ละค่าขยับเท่าไร (ตาม weight) → สุดท้ายอยากให้ weight แต่ละตัวขยับเท่าไร จุดสำคัญคือการคำนวณย้อนกลับ: gradient ของ hidden layer ขึ้นกับทั้ง weight และ gradient ของชั้นถัดไป จึง "วิ่งย้อน" ไปหาค่า weight ทุกตัว',
          'framework สมัยใหม่ (PyTorch/TF) คำนวณให้อัตโนมัติ แต่ต้องรู้ว่า "backward หลัง forward หนึ่งครั้ง" ให้ gradient เฉพาะ batch นั้น และ gradient ที่สะสมต้อง zero-grad ก่อนเทรนรอบใหม่ มิฉะนั้น เหมือนเดินขึ้นเขาด้วยความจำของก้าวก่อนหน้า (accumulation error) — หนึ่งใน bug ที่พบบ่อยที่สุดในโค้ดผู้เริ่มต้น'
        ],
        code: {
          lang: 'pytorch',
          content: 'for xb, yb in loader:\n    optimizer.zero_grad()   # สำคัญ: ล้าง gradient เดิม\n    loss = criterion(model(xb), yb)\n    loss.backward()         # คำนวณ gradient ทั้งวงจร\n    optimizer.step()        # ขยับ weight ตาม gradient'
        }
      },
      {
        heading: 'weight init, optimizer และ normalization: แก้ปัญหา "เทรนไม่ขึ้น"',
        paragraphs: [
          'การเริ่ม weight (init) มีผลต่อเนื่องมากกว่าที่คิด: ถ้า init ใหญ่เกิน/เล็กเกิน ชั้นลึกจะกระจายตัว (diverge) หรือ gradient หาย วิธีมาตรฐานคือ init แบบ Xavier/Glorot (สำหรับ sigmoid/tanh) และ Kaiming/He (สำหรับ ReLU) ที่ปรับสเกลตาม fan-in เพื่อให้ variance อยู่นิ่งข้ามชั้น',
          'Optimizer เหนือ SGD ธรรมดา: Adam ใช้ momentum + per-parameter learning rate ทำให้เทรนเร็วและทนต่อ hyperparameter ที่ไม่สมบูรณ์ แต่ในบางงาน (ที่ต้องการผลลัพธ์แหลม/ขอบเขตการตัดสินใจชัด) SGD + momentum + lr schedule ยังเอาชนะ Adam ได้ Batch normalization (หรือ layer norm) ลด sensitivity ต่อ init/lr อย่างมากโดยปรับให้ค่าในชั้นมี scale นิ่ง — ทำไมมันช่วย: งานวิจัยภายหลังพบว่าประโยชน์หลักไม่ใช่การลด internal covariate shift แต่คือการทำให้ loss landscape เรียบขึ้น พึ่ง init/lr น้อยลง และฝึกได้ด้วย learning rate สูงขึ้น พร้อมเป็น regularization เบา ๆ'
        ]
      },
      {
        heading: 'วินิจฉัยเทรนไม่ดีเป็นลำดับ',
        bullets: [
          'train loss ลดช้ามาก → ลอง lr สูงขึ้น, optimizer เปลี่ยน, init ใหม่',
          'train loss ไม่ลดหรือ NaN → lr เล็ก/ใหญ่เกิน, batch norm หาย, การแบ่ง class ผิด',
          'train ลด แต่ val ไม่ลด → overfit: dropout, weight decay, เพิ่ม data',
          'loss ลดช้าแล้ว "นิ่ง" → schedule lr ลด, ตรวจตัวเลข gradient ว่า dead หรือไม่',
          'เทียบ baseline ง่าย (โมเดล linear / ค่าเฉลี่ย) ก่อนโวยวายว่าสถาปัตยกรรมพัง'
        ],
        callout: {
          label: 'RULES OF THUMB',
          text: 'ถ้าเทรนไม่ขึ้น: (1) ตรวจโค้ด-ข้อมูล ถูกต้องสุด (2) ทำให้ example เดียว loss ได้ตามที่คาด (3) แล้วค่อยไล่ lr/optimizer อย่าเริ่มที่สถาปัตยกรรมใหม่'
        }
      }
    ]
  },
  {
    id: 't-cnn',
    number: 'T.07',
    slug: 'convolutional-networks',
    phase: 'deep-learning',
    title: 'Convolutional networks: ทำไมโครงสร้างท้องถิ่นถึงสำคัญ',
    en: 'Convolutional Neural Networks',
    summary: 'CNN ใช้ประโยชน์จาก "จุดใกล้กันมักเกี่ยวข้องกัน" ของภาพ — เช้าใจ convolution, pooling, receptive field และเหตุผลที่มันเทรนง่ายกว่า fully-connected เต็ม',
    level: 'กลาง',
    prereqLessons: ['neural-networks-inside'],
    linkedModules: ['deep-learning-foundations'],
    teaches: [
      'อธิบายสิ่งที่ convolution ตรวจหาตามตำแหน่ง (shift-invariant)',
      'คำนวณขนาด output หลัง conv/pooling ได้',
      'รู้ว่าทำไม CNN จึงใช้ parameter น้อยกว่า dense layer มาก',
      'เห็นข้อจำกัดเมื่อนำ CNN ไปใช้กับโครงสร้างที่ไม่ได้เป็นกริด'
    ],
    keywords: ['convolution', 'pooling', 'receptive field', 'stride', 'padding', 'feature map', 'CNN'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'การแปลเงื่อนไขท้องถิ่นของภาพ (locality)',
        paragraphs: [
          'ภาพมีโครงสร้างท้องถิ่น: ลายเส้น/ขอบในภาพหนึ่ง ๆ มักอยู่ใกล้กัน และ pattern ที่ตำแหน่งหนึ่งมีความหมายแบบเดียวกับที่อีกตำแหน่ง (เช่น edge แนวตั้ง) CNN ใช้หลักนี้โดยวนตัวกรอง (kernel) ขนาดเล็กเหนือภาพทุกตำแหน่ง แล้วบันทึก "จุดที่มีลายนี้" เป็น feature map — การขยับตัวกรองทำให้ผลไม่ขึ้นกับตำแหน่ง (translation equivariance) โดยใช้พารามิเตอร์ชุดเดียวซ้ำทุกตำแหน่ง',
          'เหตุผลที่ CPU/GPU รันเร็วคือ convolution เป็น local weighted sum — คำนวณแบบ vectorized ได้ และจำนวน weight = kernel ขนาดเล็ก × จำนวน channel × จำนวน filter ซึ่งน้อยกว่าชั้น dense (ที่เชื่อมทุก pixel กับทุก neuron) อย่างมหาศาล นี่คือเหตุผล CNN จึงเป็นไปได้ในภาพขนาดใหญ่'
        ],
        formula: {
          title: 'ขนาด output หลัง conv/pool',
          plain: 'out = ⌊(input − kernel + 2·padding)/stride⌋ + 1',
          note: 'ตัวอย่าง: ภาพ 32×32 + kernel 3, padding 1, stride 1 → ยังคง 32×32'
        }
      },
      {
        heading: 'การออกแบบชั้น CNN: conv, pooling, และลำดับชั้น',
        paragraphs: [
          'Stack ปกติคือ conv (จับรายละเอียดย่อย) → activation → pooling (ลดมิติ สงวน "มีหรือไม่" มากกว่าตำแหน่ง) → ซ้ำจน feature map เล็กลงเรื่อย ๆ แล้วเปลี่ยนเป็น vector เพื่อป้อน dense classifier ที่ท้าย ในช่วงหลังนิยม convolution stride=2 แทน pooling และชั้นต้นจับขอบ/มุม ชั้นกลางจับรูปทรง ส่วนชั้นลึกจับ object ระดับใหญ่ — แม้ไม่บังคับ แต่เป็นแนวโน้มที่เห็นเมื่อมอง activation',
          'Receptive field คือพื้นที่ภาพต้นทางที่ neuron หนึ่ง "เห็น" ถ้าอยากเชื่อมความสัมพันธ์ไกลในภาพ (เช่น ตัวอักษรสองตัวห่างกัน 50 px) ต้องเพิ่ม depth หรือใช้ dilation/attention ข้อจำกัดนี้เป็นแรงจูงใจให้ Transformer ถูกนำมาใช้กับภาพในภายหลัง (ViT)'
        ]
      },
      {
        heading: 'เมื่อใด CNN ถึง "ไม่ใช่คำตอบ"',
        bullets: [
          'ข้อมูลที่ต่างจากกริด (กราฟ, 3D point cloud, อนุกรมเวลาไม่สม่ำเสมอ) — induction bias นี้ไม่พอ',
          'ความต้องการความสัมพันธ์ช่วงไกล — CNN ต้อง depth เยอะ หรือเปลี่ยนเป็น attention',
          'ข้อมูลน้อยมาก และต้อง expert feature — CNN ยังต้องการ data มากพอ',
          'ต้องอธิบายการตัดสินใจได้ ใช้ Grad-CAM / LIME / concept bottleneck (ถ้าจำเป็น)'
        ]
      }
    ]
  },
  {
    id: 't-nlp',
    number: 'T.08',
    slug: 'language-as-vector',
    phase: 'deep-learning',
    title: 'ภาษาในโลกตัวเลข: tokenization และ word embeddings',
    en: 'From Language to Vectors',
    summary: 'คอมพิวเตอร์อ่านตัวเลขไม่ใช่อักษร — เรียนวิธีแยกข้อความเป็นหน่วย (token), แปลงคำ/หน่วยเป็นเวกเตอร์ และทำไมการได้ "ความหมาย" ถึงเป็นปัญหาทางสถิติที่ยาก',
    level: 'กลาง',
    prereqLessons: ['math-for-ai'],
    linkedModules: ['nlp-foundations', 'embeddings-search'],
    teaches: [
      'แยกขั้นตอนจากข้อความดิบถึงเวกเตอร์ได้',
      'อธิบายหลักของ distributional semantics ("word อยู่กับเพื่อนของมัน")',
      'เข้าใจความต่างระหว่าง sparse (bag-of-words) กับ dense (embedding)',
      'เข้าใจ subword tokenization (BPE) และเหตุผลที่ใช้กับ LLM'
    ],
    keywords: ['tokenization', 'subword', 'BPE', 'word2vec', 'embedding', 'distributional semantics', 'bag of words'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'จากข้อความสู่ตัวเลข: ลำดับขั้นตอนที่ต้องรู้',
        paragraphs: [
          'โมเดลภาษาไม่ได้อ่าน "คำ" — มันอ่านลำดับ id ของหน่วย (token) ขั้นตอนคือ: (1) normalize (lowercase, unify), (2) tokenization แยกเป็นหน่วย (คำ/ครึ่งคำ/อักขระ), (3) map หน่วยนั้นกับ vocab ไปเป็น id, (4) แปลง id เป็นเวกเตอร์ (embedding) แล้วเข้าโมเดล ระบบค้นคืนเอกสาร (retrieval) ส่วนใหญ่ใช้แค่การแยกคำง่าย ๆ แต่ LLM ใช้ subword tokenizer ที่โคตรละเอียด',
          'ความผิดพลาดบ่อยของ beginner: ใช้ vocab ที่ใหญ่/เล็กไป ทำ normalization ที่ลบสัญญาณสำคัญ (เช่น ตัวพิมพ์ใหญ่ที่มีความหมาย), หรือลืม OOV (คำนอก vocab) — ที่จริงต้องออกแบบ tokenizer ให้ cover บนข้อมูลจริง'
        ]
      },
      {
        heading: 'bag-of-words และข้อจำกัดที่ทำให้ต้องมี dense embedding',
        paragraphs: [
          'วิธี "ง่าย ๆ" คือให้แต่ละเอกสารเป็น vector นับความถี่คำ (bag-of-words) ค่าเป็น sparse และมิติเท่า vocab จุดอ่อน: ไม่เก็บลำดับ, ไม่เก็บความหมาย (คำพ้องไม่ได้ใกล้กัน), และ dimension สูงมาก (50000) จนการคำนวณ similarity แบบ dense ไม่ได้ใช้เอง',
          'การถอยเข้าสู่ความหมายต้องคำนวณค่าที่วัด "คำไหนเกิดร่วมกับคำไหนบ่อย" — หลักนี้เรียกว่า distributional hypothesis: คำที่มีบริบทคล้ายกันมีความหมายคล้ายกัน มันคือรากฐานของทุก embedding ที่ตามมา (word2vec, fastText, และ Transformer) — คุณสมบัติที่น่าสนใจคือเวกเตอร์ที่เก็บ "ความหมายเชิงเรขาคณิต" (เช่น king − man + woman ≈ queen)'
        ],
        callout: {
          label: 'KEY INSIGHT',
          text: 'Embedding ไม่ได้ "รู้ความหมาย" — มันจับรูปแบบการเกิดร่วม (co-occurrence) ในข้อมูลมหาศาลแล้วบีบเป็นตัวเลขที่ใช้หาความคล้ายเชิงทิศทางได้'
        }
      },
      {
        heading: 'subword tokenization (BPE): วิธีที่ LLM แก้ OOV',
        paragraphs: [
          'การแยกเป็น "คำ" ย่อมเจอคำใหม่เสมอ word2vec ที่ฝึกจากคำศัพท์จำกัดจะแพ้ให้กับคำนอกคำศัพท์ (OOV) แต่ Byte-Pair Encoding (BPE) แก้โดยเริ่มจากหน่วยอักขระ แล้วค่อย ๆ merge คู่ที่เกิดบ่อยที่สุดเป็นหน่วยกลาง (subword) — คำที่หายากถูกแบ่งเป็นหน่วยย่อยที่รู้จัก ทำให้ vocab มีขนาดจำกัด (เช่น 50k) แต่ครอบคลุมทุกคำโดยไม่มี OOV และหน่วยย่อยที่แชร์ความหมายระหว่างคำได้ (เช่น "un-", "-ed")',
          'ผลข้างที่ต้องรู้: token 1 ตัว ≠ 1 คำภาษาไทย (ไทยเป็น abugida, token ต่อคำมักหลายตัว), จำนวน token ต่อข้อความมีผลต่อต้นทุน (billing) และความยาว context — นี่คือเหตุผลที่ "context window 128k" ถูกนับเป็น token ไม่ใช่คำ'
        ]
      },
      {
        heading: 'vector ของประโยค/เอกสาร: pooling กับวิธีที่อิงหลักฐาน',
        paragraphs: [
          'สำหรับงาน retrieval/search (ไม่ใช่โมเดลภาษาแบบ LLM) มักต้องการ vector หนึ่งต่อข้อความ (sentence/document) วิธีธรรมดาคือเฉลี่ย embedding ของ token (mean-pooling) ซึ่งได้ผลพอใช้แต่ค่อนข้างหยาบ; วิธีที่ดีกว่าใช้โมเดลที่ train ด้วย contrastive objective (เช่น sentence-transformers, SimCSE) ที่ผลักเอกสารคล้ายให้ใกล้และต่างให้ไกล',
          'เมื่อเลือก embedding model ต้องวัดด้วยชุดคำถาม/เอกสารจริง (ความสัมพันธ์ความหมายของ domain) ไม่เชื่อคะแนน leaderboard ทั่วไป — เพราะสไตล์และสแลงใน domain ของคุณทำให้ระยะทางต่างกันซึ่งอันดับเปลี่ยน'
        ]
      }
    ]
  },
  {
    id: 't-backprop-deep',
    number: 'T.20',
    slug: 'backprop-and-gradient-flow',
    phase: 'deep-learning',
    title: 'Backprop เข้มข้น: gradient ไหลอย่างไรบนกราฟการคำนวณ',
    en: 'Backprop and Gradient Flow',
    summary: 'เจาะลึกตั้งแต่ chain rule จนถึง vanishing / exploding gradient กับวิธีแก้ที่ใช้จริง (init, normalization, residual)',
    level: 'สูง',
    prereqLessons: ['neural-networks-inside'],
    linkedModules: ['pytorch'],
    teaches: ['ไล่โล่ derivative ย้อนกลับบนกราฟได้', 'รู้ว่า gradient ขนาดเล็ก/ใหญ่ผิดปกติมาจากอะไร', 'เลือกมาตรการแก้ให้ตรงต้นเหตุ'],
    keywords: ['backprop', 'chain rule', 'vanishing gradient', 'exploding gradient', 'computational graph'],
    updated: 'น.ย. 2026',
    sections: [
      { heading: 'ภาพรวม', paragraphs: ['Backprop เป็นวิธีประยุกต์ chain rule บน computational graph แต่ละ node คำนวณค่า (forward) และ derivative ของตัวเองต่อ input แล้วตัวทิศย้อนกลับส่ง gradient กลับไปหา parameter ที่มีส่วน', 'gradient = derivative ของ node ต่อ input × upstream gradient', 'ถ้า derivative บาง node ใกล้ 0 หลายครั้งติดกัน gradient ที่ไปหา layer ลึกจะจางหาย (vanishing); ถ้า derivative บาง node ใหญ่เกิน คูณกันหลายครั้ง gradient จะระเบิด (exploding)'] },
      { heading: 'วิธีแก้ที่นิยม', bullets: ['weight init ที่สเกลตาม fan-in (Xavier/He) เพื่อให้ variance นิ่ง', 'Batch/LayerNorm เพื่อลดความเสี่ยงของการสั่น', 'residual connection ที่ลัดรอบอ้อมไปหนึ่งขั้น ทำให้ gradient วิ่งตรง', 'clip gradient เมื่อขนาดเกินขีดจำกัด'] }
    ]
  }
];

