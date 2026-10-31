import type { Guide } from './types';

export const guides: Guide[] = [
  {
    slug: 'start-ai-engineering',
    title: 'เริ่มเรียน AI Engineering โดยไม่หลงทาง',
    dek: 'แผน 6 สัปดาห์แรกสำหรับคนที่อยากสร้างระบบ AI จริง ไม่ใช่แค่ดูคอร์สจนจบ',
    category: 'เริ่มต้น',
    readTime: '8 นาที',
    updated: 'ต.ค. 2026',
    tags: ['roadmap', 'beginner', 'study plan'],
    sections: [
      {
        heading: 'ก่อนเลือกคอร์ส ให้เลือกปัญหาก่อน',
        paragraphs: [
          'คนส่วนใหญ่เริ่มจาก “เรียนอะไรดี” แล้วจบด้วยการสะสมคอร์สที่ไม่ได้เชื่อมกัน สิ่งที่ได้ผลกว่าคือเลือกปัญหาหนึ่งปัญหาที่คุณสนใจจริง เช่น ช่วยตอบคำถามจากเอกสารในที่ทำงาน หรือทำนายยอดขาย แล้วใช้ปัญหานั้นเป็นเข็มทิศในการเลือกทักษะ',
          'AI Engineer ไม่จำเป็นต้องรู้ทุกอย่างก่อนเริ่มสร้าง ต้องรู้พอที่จะสร้างระบบเล็กที่วัดผลได้ แล้วค่อยเติมช่องว่างจากปัญหาจริง'
        ],
        callout: {
          label: 'เกณฑ์ตัดสิน',
          text: 'ถ้าเรียนอะไรแล้วยังไม่สามารถนำไปทำชิ้นงานได้ภายใน 2 สัปดาห์ ให้ลดขอบเขตลงหรือเปลี่ยนวิธีเรียน'
        }
      },
      {
        heading: 'สัปดาห์ที่ 1–2: ภาษาและข้อมูล',
        bullets: [
          'เขียน Python ด้วย type hints, จัดการ environment และ test พื้นฐาน',
          'ใช้ pandas อ่านข้อมูลจริง หา missing, duplicate และ outlier',
          'เขียน SQL join + group by เพื่อตอบคำถามธุรกิจ 5 ข้อ',
          'สร้าง repo แรกที่มี README และ commit อย่างมีความหมาย'
        ],
        paragraphs: ['อย่าเพิ่งเริ่ม deep learning ถ้ายังไม่สามารถนำข้อมูลเข้าออกได้อย่างมั่นใจ เพราะงาน AI กว่า 60–70% อยู่ที่การจัดการข้อมูล']
      },
      {
        heading: 'สัปดาห์ที่ 3–4: ML ที่วัดผลได้',
        paragraphs: [
          'เรียน supervised learning, train/validation/test และ metric ที่ตรงกับปัญหา จากนั้นสร้าง baseline ง่าย ๆ เช่น logistic regression หรือ rule-based แล้วค่อยเปรียบเทียบ',
          'เป้าหมายไม่ใช่โมเดลแม่นที่สุด แต่คือการอธิบายได้ว่าโมเดลดีขึ้นจริงไหม มี bias อะไร และจะพังเมื่อไร'
        ],
        steps: [
          { title: 'เลือก dataset', body: 'ใช้ข้อมูลที่มีคำถามชัดเจนและมีขนาดพอประมาณ เช่น churn, ราคา, classification ข้อความ' },
          { title: 'สร้าง baseline', body: 'เริ่มจาก majority class หรือ heuristic แล้วบันทึก metric' },
          { title: 'เปรียบเทียบ 2 โมเดล', body: 'ใช้ pipeline เดียวกันและ cross-validation เดียวกัน' },
          { title: 'เขียน error analysis', body: 'สุ่มดูตัวอย่างที่ผิด 20 รายการและจัดกลุ่มสาเหตุ' }
        ]
      },
      {
        heading: 'สัปดาห์ที่ 5–6: LLM และระบบแรก',
        paragraphs: [
          'เริ่มจาก API call ง่าย ๆ ที่มี structured output และ evaluation 10 เคส ก่อนเพิ่ม RAG หรือ agent',
          'สร้างแอปเล็กที่แก้ปัญหาเฉพาะทาง พร้อมบันทึก prompt เวอร์ชัน, ต้นทุน, latency และ failure cases'
        ],
        bullets: [
          'ทำความเข้าใจ token, context และข้อจำกัดของโมเดล',
          'เขียน prompt ที่มี output schema และ validation',
          'สร้าง eval set 20 เคสก่อนปรับ prompt',
          'เพิ่ม citation หรือ guardrail ตามความเสี่ยงของงาน'
        ]
      },
      {
        heading: 'สิ่งที่ควร “ไม่” ทำใน 6 สัปดาห์แรก',
        bullets: [
          'ไม่ต้องเรียน proof คณิตศาสตร์ทั้งหมด',
          'ไม่ต้องเทรน LLM จากศูนย์',
          'ไม่ต้องสะสม certificate หลายใบ',
          'ไม่ต้องสร้าง multi-agent framework ที่ซับซ้อน',
          'ไม่ต้องรอให้พร้อมก่อน publish โปรเจกต์'
        ],
        callout: {
          label: 'หลักคิด',
          text: 'หนึ่งโปรเจกต์ที่วัดผลได้และอธิบายได้ ล้ำค่ากว่าสิบคอร์สที่ยังไม่จบ'
        }
      }
    ]
  },
  {
    slug: 'choose-course',
    title: 'เลือกคอร์ส AI อย่างไรไม่ให้จม',
    dek: 'กรอบตัดสินคอร์สจากผลลัพธ์ ไม่ใช่จำนวนชั่วโมงหรือชื่อผู้สอน',
    category: 'การเรียนรู้',
    readTime: '6 นาที',
    updated: 'ต.ค. 2026',
    tags: ['course', 'learning', 'budget'],
    sections: [
      {
        heading: 'เริ่มจาก outcome ที่ต้องการ',
        paragraphs: [
          'ก่อนซื้อคอร์ส ให้เขียนว่าหลังจบคอร์สคุณจะทำอะไรได้และหลักฐานอะไรที่จะพิสูจน์สิ่งนั้น ตัวอย่าง outcome ที่ดี: “สร้าง RAG ที่มี citation และ eval set 20 เคสได้” ไม่ใช่ “เข้าใจ RAG”'
        ],
        bullets: [
          'คอร์สมีโปรเจกต์ที่ต้องตัดสินใจเองหรือเป็นแค่ copy code',
          'มีแบบฝึกหัดที่ตรวจคำตอบหรือได้ feedback หรือไม่',
          'เนื้อหาอัปเดตล่าสุดเมื่อไร โดยเฉพาะ LLM',
          'มีส่วน evaluation, deployment และ failure case หรือสอนแค่ happy path'
        ]
      },
      {
        heading: 'Checksheet 8 ข้อก่อนจ่ายเงิน',
        steps: [
          { title: 'ดู syllabus ละเอียด', body: 'มีหัวข้อที่คุณยังไม่รู้จริงหรือไม่ หรือเป็นเนื้อหาที่หาได้ฟรีทั้งหมด' },
          { title: 'ดูตัวอย่างบทเรียน', body: 'คุณภาพการสอนและความลึกของ explanation เป็นอย่างไร' },
          { title: 'ตรวจวันอัปเดต', body: 'เนื้อหา LLM ที่เก่ากว่า 12–18 เดือนอาจล้าสมัยในหลายส่วน' },
          { title: 'ดูว่ามี lab ที่ต้อง debug', body: 'การเรียนรู้เกิดตอนแก้ โจทย์ ไม่ใช่ตอนดูโค้ดที่ถูกแล้ว' },
          { title: 'ตรวจ prerequisit', body: 'ถ้าต้องรู้ล่วงหน้าสูงแต่คอร์สไม่อธิบาย อาจทำให้เสียเวลา' },
          { title: 'ดู community', body: 'มีที่ถามคำถามและวิจารณ์งานหรือไม่' },
          { title: 'เทียบกับฟรี', body: 'เอกสารทางการและ open course อาจเพียงพอสำหรับหัวข้อนั้น' },
          { title: 'ตั้งเวลาจบ', body: 'กำหนด deadline และโปรเจกต์ส่งท้ายก่อนซื้อ' }
        ]
      },
      {
        heading: 'หลัก 70/20/10',
        paragraphs: [
          'ใช้เวลา 70% ในการสร้างและ debug โปรเจกต์เอง, 20% เรียนจากคอร์ส/หนังสือ และ 10% อ่าน paper หรือติดตามข่าว เมื่อสัดส่วนกลับกัน คุณจะรู้สึกว่าเรียนเยอะแต่ทำไม่เป็น'
        ],
        callout: {
          label: 'สัญญาณอันตราย',
          text: 'คอร์สที่ให้ดูวิดีโอ 20 ชั่วโมงแต่ไม่มี assignment ที่ต้องออกแบบวิธีแก้เอง มักให้ความรู้สึกก้าวหน้าแต่ทักษะน้อย'
        }
      }
    ]
  },
  {
    slug: 'math-without-pain',
    title: 'เรียนคณิตสำหรับ ML แบบไม่ต้องจบปริญญา',
    dek: 'เส้นทางคณิตศาสตร์แบบใช้จริง 2 สัปดาห์ พร้อมหัวข้อที่ข้ามได้อย่างปลอดภัย',
    category: 'พื้นฐาน',
    readTime: '7 นาที',
    updated: 'ต.ค. 2026',
    tags: ['math', 'linear algebra', 'statistics'],
    sections: [
      {
        heading: 'สิ่งที่ต้องรู้จริง',
        bullets: [
          'เวกเตอร์ เมทริกซ์ dot product และการคูณเมทริกซ์',
          'อนุพันธ์และ chain rule ในระดับที่อ่าน gradient ได้',
          'probability: conditional, independence, Bayes',
          'statistics: mean, variance, sampling, confidence interval'
        ],
        paragraphs: ['เป้าหมายคือ “อ่านและใช้” ไม่ใช่พิสูจน์ theorem ทุกบท คุณต้องตอบได้ว่าสมการกำลังบอกอะไรเกี่ยวกับข้อมูลหรือโมเดล']
      },
      {
        heading: 'แผน 14 วัน',
        steps: [
          { title: 'วันที่ 1–3', body: 'ดู 3Blue1Brown linear algebra แล้วเขียน NumPy ทบทวนเวกเตอร์/เมทริกซ์' },
          { title: 'วันที่ 4–6', body: 'เรียน derivative และ chain rule พร้อมคำนวณ gradient ของ linear regression ด้วยมือ' },
          { title: 'วันที่ 7–9', body: 'probability, Bayes และ confusion matrix จากตัวอย่างจริง' },
          { title: 'วันที่ 10–12', body: 'implement gradient descent ด้วย NumPy และ plot loss' },
          { title: 'วันที่ 13–14', body: 'อ่านบทความ ML 1 ชิ้นและเขียนอธิบายทุกสมการด้วยภาษาตัวเอง' }
        ]
      },
      {
        heading: 'หัวข้อที่เลื่อนได้',
        paragraphs: [
          'การพิสูจน์ spectral theorem, measure theory, advanced convex optimization และ derivation ของ backprop ระดับลึก สามารถเลื่อนได้จนกว่าจะเจอปัญหาจริงที่ต้องใช้',
          'อย่างไรก็ตาม อย่าข้าม intuition ของ gradient, overfitting และ probability เพราะสามสิ่งนี้โผล่ในงานทุกวัน'
        ],
        callout: {
          label: 'ทดสอบความเข้าใจ',
          text: 'อธิบายให้เพื่อนที่ไม่ได้เรียน ML ฟังได้ภายใน 2 นาทีว่า gradient descent หาค่าที่ดีขึ้นได้อย่างไร โดยไม่ใช้ศัพท์เกินจำเป็น'
        }
      }
    ]
  },
  {
    slug: 'portfolio-that-gets-hired',
    title: 'สร้าง Portfolio AI ที่ทำให้ recruiter หยุดดู',
    dek: '3 โปรเจกต์ที่ครอบคลุมความสามารถต่างกัน พร้อมโครงสร้าง case study ที่ทีมเทคนิคอ่านแล้วอยากสัมภาษณ์',
    category: 'อาชีพ',
    readTime: '9 นาที',
    updated: 'ต.ค. 2026',
    tags: ['portfolio', 'career', 'github'],
    sections: [
      {
        heading: 'เลือก 3 โปรเจกต์ ไม่ใช่ 10',
        paragraphs: [
          'Portfolio ที่ดีไม่ใช่จำนวนโปรเจกต์ แต่เป็นการพิสูจน์ความสามารถคนละมิติ เลือกให้ครอบคลุม: (1) งานข้อมูล/ML ที่วัดผลชัด (2) ระบบ LLM end-to-end และ (3) โปรเจกต์ที่แสดง product sense หรือ deployment',
          'ถ้ามีประสบการณ์งานจริง ให้ใช้โปรเจกต์งานจริงที่ปิดข้อมูลลูกค้าและอธิบายวิธีวัดผลได้ ไม่ต้องสร้าง Todo app เพิ่ม'
        ]
      },
      {
        heading: 'โครงสร้าง case study 6 ส่วน',
        steps: [
          { title: '1. ปัญหาและผู้ใช้', body: 'ใครเจ็บอะไร วัดความสำเร็จอย่างไร และทำไมปัญหานี้ควรแก้' },
          { title: '2. ข้อจำกัด', body: 'ข้อมูล เวลา งบ latency privacy และสิ่งที่เลือกไม่ทำ' },
          { title: '3. วิธีแก้และเหตุผล', body: 'architecture, model choice, baseline และ trade-off' },
          { title: '4. การวัดผล', body: 'ชุดทดสอบ metric ตัวเลขก่อน/หลัง และ failure cases' },
          { title: '5. ผลลัพธ์', body: 'ตัวเลขที่ซื่อสัตย์ พร้อมบริบทและข้อจำกัด' },
          { title: '6. บทเรียน', body: 'สิ่งที่จะทำต่างออกไปและความรู้ใหม่ที่ได้' }
        ]
      },
      {
        heading: 'README ที่ดีมีอะไร',
        bullets: [
          'ประโยคแรกบอกว่ามันแก้อะไรและผลลัพธ์คืออะไร',
          'ภาพ architecture หรือ screenshot ที่เห็นคุณค่าใน 10 วินาที',
          'วิธีรันพร้อม sample data และ environment',
          'การวัดผลและข้อจำกัดที่ซื่อสัตย์',
          'ลิงก์ demo (ถ้ามี) และข้อมูลติดต่อ',
          'ไม่ต้องมี badge เยอะถ้าไม่ช่วยให้เข้าใจ'
        ],
        callout: {
          label: 'กฎ 90 วินาที',
          text: 'คนอ่านควรเข้าใจว่าโปรเจกต์ทำอะไร ทำไมน่าสนใจ และคุณทำอะไรในนั้นได้ภายใน 90 วินาทีแรก'
        }
      },
      {
        heading: 'สิ่งที่ควรหลีกเลี่ยง',
        bullets: [
          'โปรเจกต์ tutorial ที่เปลี่ยนแค่ dataset',
          'ตัวเลขที่อ้างลอย ๆ ไม่มีวิธีวัด',
          'repo ที่รันไม่ได้หรือไม่มี README',
          'การซ่อนข้อจำกัดจนดูเหมือนโฆษณา',
          'ใส่ทุก library ที่ใช้เพื่อให้ดูแน่น'
        ]
      }
    ]
  },
  {
    slug: 'resume-ai-engineer',
    title: 'เขียน Resume AI Engineer ให้ผ่านทั้ง recruiter และทีมเทคนิค',
    dek: 'สูตรเขียน bullet ที่มี impact, keyword ที่ถูกต้อง และข้อผิดพลาดที่ทำให้ resume ถูกคัดออก',
    category: 'อาชีพ',
    readTime: '7 นาที',
    updated: 'ต.ค. 2026',
    tags: ['resume', 'job search', 'career'],
    sections: [
      {
        heading: 'โครงสร้าง 1 หน้า',
        bullets: [
          'Header: ชื่อ, ตำแหน่งเป้าหมาย, อีเมล, GitHub, LinkedIn, portfolio',
          'Summary 2 บรรทัด: ความเชี่ยวชาญและหลักฐาน',
          'Experience: ผลลัพธ์ที่วัดได้ 3–4 bullet ต่อตำแหน่ง',
          'Projects: 2–3 ชิ้นที่เกี่ยวข้อง พร้อมลิงก์',
          'Skills: แยกหมวดและไม่ใส่ทุกอย่างที่เคยแตะ',
          'Education: สั้น ถ้าไม่ใช่จุดแข็ง'
        ]
      },
      {
        heading: 'เขียน bullet แบบ XYZ',
        paragraphs: [
          'ใช้รูปแบบ “ทำ X ด้วย Y ส่งผลให้ Z” โดย Z ควรเป็นตัวเลขหรือผลลัพธ์ที่ตรวจสอบได้ หลีกเลี่ยงคำว่า responsible for หรือ helped with'
        ],
        bullets: [
          'แย่: “พัฒนาแชทบอทด้วย LangChain”',
          'ดี: “สร้าง RAG assistant สำหรับเอกสาร HR 300 หน้า ลดเวลาค้นหาคำตอบจาก 8 นาทีเหลือ 45 วินาที โดยมี citation coverage 92% จาก eval 40 เคส”',
          'แย่: “ใช้ Python และ SQL”',
          'ดี: “ปรับ pipeline ขายรายวันด้วย SQL window function ลดเวลาประมวลผลจาก 2 ชั่วโมงเหลือ 12 นาที”'
        ]
      },
      {
        heading: 'Keyword และการปรับตาม JD',
        paragraphs: [
          'อ่าน job description แล้วไฮไลต์คำที่ปรากฏซ้ำ: RAG, evals, Python, SQL, Kubernetes, MLOps, A/B testing จากนั้นใส่เฉพาะคำที่คุณมีหลักฐานจริงและวางไว้ในบริบทที่อ่านเป็นธรรมชาติ',
          'ถ้าสมัครหลายสาย ให้ทำ resume 2–3 เวอร์ชัน เช่น LLM Engineer, ML Engineer และ AI Product Engineer โดยไม่ต้องโกห้'
        ],
        callout: {
          label: 'ตรวจ 30 วินาที',
          text: 'ให้เพื่อนที่ไม่ใช่สาย AI อ่าน 30 วินาที แล้วถามว่า “คนนี้เก่งอะไรและเคยทำอะไรที่วัดผลได้” ถ้าตอบไม่ได้ ให้แก้ส่วนบนก่อน'
        }
      },
      {
        heading: 'ข้อผิดพลาดที่พบบ่อย',
        bullets: [
          'ใส่ skill ทุกอย่างจนไม่รู้ว่าถนัดอะไร',
          'ใช้ตัวเลขที่แต่งขึ้นหรือตรวจสอบไม่ได้',
          'เขียนชื่อบริษัทผิดหรือลิงก์เสีย',
          'resume ยาว 3 หน้าโดยไม่มีเหตุผล',
          'ไม่มีลิงก์ GitHub หรือ portfolio',
          'ใช้ template สีสันจนอ่านยาก'
        ]
      }
    ]
  },
  {
    slug: 'interview-playbook',
    title: 'Interview Playbook สำหรับสาย AI',
    dek: 'เตรียมสัมภาษณ์ 4 ด่าน: coding, ML fundamentals, system design และ behavioral อย่างเป็นระบบ',
    category: 'อาชีพ',
    readTime: '10 นาที',
    updated: 'ต.ค. 2026',
    tags: ['interview', 'coding', 'behavioral'],
    sections: [
      {
        heading: 'ภาพรวม 4 ด่าน',
        bullets: [
          'Coding: Python, data manipulation, SQL และ algorithmic thinking',
          'ML fundamentals: bias-variance, metric, leakage, optimization',
          'AI system design: requirement → architecture → trade-off → eval',
          'Behavioral: การทำงานร่วมทีม, conflict, failure และการเรียนรู้'
        ]
      },
      {
        heading: 'Coding ที่เจอบ่อย',
        paragraphs: [
          'ส่วนใหญ่ไม่ใช่ LeetCode ระดับยาก แต่เป็นการเขียน Python ที่สะอาดกับข้อมูลจริง เช่น group by, merge, sliding window, parse log และ debug โค้ดที่มี bug'
        ],
        bullets: [
          'ฝึก pandas merge/groupby/reshape และอธิบาย index',
          'ฝึก SQL window function และ CTE',
          'ฝึกเขียนฟังก์ชันที่มี type hints และ test',
          'อธิบาย time/space complexity แบบพอดี ไม่ต้องแสดงความฉลาดเกิน'
        ]
      },
      {
        heading: 'ตอบคำถาม ML ให้เป็นโครง',
        steps: [
          { title: 'Clarify', body: 'ถามประเภทปัญหา ข้อมูล และ metric ก่อนตอบ' },
          { title: 'Baseline', body: 'เสนอวิธีง่ายที่สุดที่ควรลองก่อน' },
          { title: 'Trade-off', body: 'เปรียบเทียบอย่างน้อย 2 ทางเลือก' },
          { title: 'Evaluation', body: 'บอกวิธีวัดและความเสี่ยง leakage' },
          { title: 'Production', body: 'พูดถึง latency, monitoring และ data drift' }
        ]
      },
      {
        heading: 'System design 90 วินาทีแรก',
        paragraphs: [
          'เริ่มด้วยการทวน requirement และสมมติฐาน: ผู้ใช้จำนวนเท่าไร, traffic, latency, ข้อมูลอ่อนไหวแค่ไหน, งบประมาณ, คุณภาพขั้นต่ำ จากนั้นวาดกล่องหลักก่อนลงรายละเอียด',
          'เมื่อ interviewer ถาม follow-up ให้ตอบเป็น trade-off ไม่ใช่คำตอบเดียวที่ถูก'
        ],
        callout: {
          label: 'คำถามวิเศษ',
          text: '“ถ้างบเพิ่มเป็นสองเท่า คุณจะเปลี่ยนอะไร และถ้าลดครึ่งหนึ่งจะตัดอะไรก่อน?” คำถามนี้เผยว่าคุณเข้าใจ trade-off จริง'
        }
      },
      {
        heading: 'Behavioral ด้วย STAR',
        paragraphs: [
          'เตรียม 6–8 เรื่องจริงที่ครอบคลุมความขัดแย้ง ความล้มเหลว การนำ initiative การเรียนรู้เร็ว และการทำงานข้ามทีม เขียน Situation, Task, Action, Result โดย Result ต้องมีตัวเลขหรือผลที่ชัด',
          'อย่าเล่าเรื่องที่ฟังดูดีแต่ไม่มีบทบาทของคุณชัดเจน และอย่าโทษคนอื่นในเรื่องล้มเหลว'
        ]
      }
    ]
  },
  {
    slug: 'ml-system-design-interview',
    title: 'AI System Design Interview: กรอบตอบใน 45 นาที',
    dek: 'Template ที่ใช้ได้กับ RAG, recommendation, fraud detection และ agent platform',
    category: 'อาชีพ',
    readTime: '8 นาที',
    updated: 'ต.ค. 2026',
    tags: ['system design', 'interview', 'architecture'],
    sections: [
      {
        heading: 'นาทีที่ 0–5: Requirements',
        bullets: [
          'ผู้ใช้และ use case หลัก',
          'ปริมาณ: requests/day, peak QPS, จำนวนเอกสาร',
          'Latency และ availability ที่ต้องการ',
          'ข้อจำกัดข้อมูล: PII, retention, residency',
          'Success metric และ guardrail metric'
        ],
        paragraphs: ['เขียนสมมติฐานบนกระดานเพื่อให้ interviewer แก้ได้ ถ้าไม่รู้ให้ประมาณและบอกว่าเป็น assumption']
      },
      {
        heading: 'นาทีที่ 5–15: High-level diagram',
        paragraphs: [
          'วาดจาก client → API/gateway → orchestration → retrieval/model → storage/observability แล้วค่อยลงรายละเอียดแต่ละส่วน อธิบาย data flow ทั้ง ingestion และ serving',
          'สำหรับ RAG ต้องมี offline indexing pipeline และ online query pipeline แยกกัน'
        ]
      },
      {
        heading: 'นาทีที่ 15–30: Deep dive',
        bullets: [
          'เลือก 2 จุดที่สำคัญที่สุด เช่น retrieval quality และ cost/latency',
          'อธิบาย schema, chunking, index, cache และ fallback',
          'พูดถึง permission filter ก่อน retrieval',
          'อธิบาย evaluation offline และ online',
          'ระบุ failure mode และวิธี detect'
        ]
      },
      {
        heading: 'นาทีที่ 30–40: Scale และ trade-off',
        paragraphs: [
          'ถ้า traffic เพิ่ม 10 เท่า อะไรจะพังก่อน? โดยมากคือ queue, provider rate limit และต้นทุน จากนั้นเสนอ batching, caching, model routing หรือ asynchronous processing',
          'ปิดด้วยการสรุป 3 decisions หลักที่คุณเลือกและเหตุผล'
        ],
        callout: {
          label: 'อย่าทำ',
          text: 'อย่าเริ่มจาก “ใช้ Pinecone + LangChain + GPT” ก่อนรู้ requirement และอย่าพยายามใส่ทุก component ที่รู้จัก'
        }
      }
    ]
  },
  {
    slug: 'read-papers',
    title: 'อ่าน Paper AI อย่างไรให้ได้จริง',
    dek: 'วิธีอ่าน 3 รอบ การจด note และการเลือก paper ที่คุ้มเวลาสำหรับ engineer',
    category: 'การเรียนรู้',
    readTime: '6 นาที',
    updated: 'ต.ค. 2026',
    tags: ['paper', 'research', 'learning'],
    sections: [
      {
        heading: 'อ่าน 3 รอบ',
        steps: [
          { title: 'รอบ 1: 5 นาที', body: 'อ่าน title, abstract, figure, conclusion แล้วตอบว่าปัญหาคืออะไรและผลหลักคืออะไร' },
          { title: 'รอบ 2: 20 นาที', body: 'อ่าน introduction, method, experiment setup และตารางผล หาจุดที่ผู้เขียนเปรียบเทียบกับ baseline' },
          { title: 'รอบ 3: 1–2 ชั่วโมง', body: 'เจาะ math, implementation detail และข้อจำกัด ถ้าจะ reproduce ให้ทำ checklist' }
        ]
      },
      {
        heading: 'คำถาม 6 ข้อที่ต้องตอบได้',
        bullets: [
          'paper พยายามแก้ปัญหาอะไร',
          'วิธีเดิมมีข้อจำกัดอะไร',
          'idea หลักคืออะไรในหนึ่งประโยค',
          'หลักฐานคืออะไรและ baseline ยุติธรรมไหม',
          'ข้อจำกัดหรือ assumption ที่สำคัญคืออะไร',
          'นำไปใช้กับงานฉันได้เมื่อไร'
        ]
      },
      {
        heading: 'เลือก paper ให้คุ้ม',
        paragraphs: [
          'สำหรับ engineer ไม่จำเป็นต้องอ่าน paper ทุกชิ้นใน arXiv ให้เลือกจากปัญหาที่กำลังแก้: paper survey, เอกสารของโมเดลที่ใช้, และ paper ที่มี implementation น่าเชื่อถือ',
          'อ่าน abstract ของ 10 paper แล้วเลือก 1–2 ที่เกี่ยวกับงานจริง ดีกว่าอ่าน 5 paper แบบผ่าน ๆ'
        ],
        callout: {
          label: 'เครื่องมือ',
          text: 'ใช้ Semantic Scholar, Papers with Code และ Connected Papers เพื่อดู citation และ implementation ประกอบ'
        }
      }
    ]
  },
  {
    slug: 'debug-ml-pipeline',
    title: 'Debug ML Pipeline: Checklist เมื่อโมเดลไม่ทำงาน',
    dek: 'ลำดับการตรวจตั้งแต่ข้อมูล ถึง production ที่ช่วยประหยัดเวลา debugging เป็นวัน',
    category: 'วิศวกรรม',
    readTime: '8 นาที',
    updated: 'ต.ค. 2026',
    tags: ['debugging', 'pipeline', 'mlops'],
    sections: [
      {
        heading: 'เริ่มจากขอบข้อมูล',
        paragraphs: [
          'ก่อนสงสัยโมเดล ให้ตรวจว่าข้อมูลที่เข้าโมเดลเหมือนกับตอน train หรือไม่ ปัญหาส่วนใหญ่เกิดจาก schema เปลี่ยน, unit เปลี่ยน, timezone, missing encoding หรือ feature ถูกเรียงผิด'
        ],
        bullets: [
          ' เทียบ schema และ dtype ระหว่าง train/serving',
          'ตรวจ null rate และ cardinality',
          'ดูตัวอย่าง 20 แถวที่ผ่าน pipeline จริง',
          'ยืนยันลำดับคอลัมน์และ preprocessing ทุกขั้น'
        ]
      },
      {
        heading: 'ตรวจ training loop',
        bullets: [
          'overfit batch เดียวได้หรือไม่',
          'loss ลงแต่ metric แย่หรือไม่',
          'gradient เป็น NaN/zero หรือไม่',
          'มี dropout ใน eval mode หรือไม่',
          'learning rate และ scheduler ถูกต้องหรือไม่'
        ],
        paragraphs: ['ถ้า overfit batch เดียวไม่ได้ มักเป็น bug ที่ data, loss, label หรือ optimizer ไม่ใช่ปัญหา hyperparameter']
      },
      {
        heading: 'ตรวจ evaluation',
        bullets: [
          'train/test ปนกันหรือไม่',
          'metric direction ถูกหรือไม่',
          'threshold ตรงกับที่ใช้จริงหรือไม่',
          'class imbalance ทำให้ accuracy หลอกหรือไม่',
          'time-series split ถูกต้องหรือไม่'
        ]
      },
      {
        heading: 'ตรวจ production',
        bullets: [
          'เวอร์ชันโมเดลที่ให้บริการตรงกับที่ทดสอบหรือไม่',
          'feature store ส่งค่าล่าช้าหรือไม่',
          'cache คืนผลของ request เก่าหรือไม่',
          'traffic distribution ต่างจาก offline แค่ไหน',
          'error ถูกกลืนใน fallback หรือไม่'
        ],
        callout: {
          label: 'บันทึก',
          text: 'ทุกครั้งที่ debug ให้เขียนสมมติฐาน → หลักฐาน → ข้อสรุป วิธีนี้จะสร้าง playbook ของคุณเอง'
        }
      }
    ]
  },
  {
    slug: 'prompt-engineering-that-ships',
    title: 'Prompt Engineering ที่วัดผลได้',
    dek: 'จาก prompt ใน playground สู่ prompt ที่มี spec, test และ version control',
    category: 'LLM',
    readTime: '8 นาที',
    updated: 'ต.ค. 2026',
    tags: ['prompt', 'evaluation', 'structured output'],
    sections: [
      {
        heading: 'Prompt คือ specification',
        paragraphs: [
          'prompt ที่ดีต้องบอกงาน, ข้อมูลนำเข้า, ข้อจำกัด, รูปแบบผลลัพธ์ และเกณฑ์สำเร็จ ถ้าคนอื่นอ่านแล้วทำตามได้ถูก นั่นคือ spec ที่ดี',
          'แยกส่วนที่คงที่ (system/developer instruction) ออกจากส่วนที่เปลี่ยนตาม request และข้อมูลที่ retrieve มา เพื่อให้ cache และทดสอบได้'
        ]
      },
      {
        heading: 'Template ที่ควรมี',
        bullets: [
          'บทบาทและขอบเขต: ทำอะไรและไม่ทำอะไร',
          'ข้อมูล: context พร้อมแหล่งที่มา',
          'งาน: คำสั่งที่วัดผลได้',
          'ข้อจำกัด: ความยาว ภาษา น้ำเสียง และสิ่งที่ห้าม',
          'รูปแบบ: JSON schema หรือโครงคำตอบ',
          'เกณฑ์สำเร็จ: ตรวจอะไรได้บ้าง',
          'ตัวอย่าง: 1–3 เคสที่ครอบคลุม edge case'
        ]
      },
      {
        heading: 'ทดสอบก่อนปรับ',
        steps: [
          { title: 'สร้าง eval set', body: '20–50 เคสจาก use case จริง รวมเคสยากและเคสที่เคยพลาด' },
          { title: 'กำหนด metric', body: 'schema validity, exact match, rubric score, latency และ cost' },
          { title: 'เปลี่ยนทีละตัวแปร', body: 'อย่าเปลี่ยน prompt, model และ temperature พร้อมกัน' },
          { title: 'บันทึกผล', body: 'เก็บ version, วันที่, โมเดล และผลลัพธ์เพื่อเทียบ regression' }
        ]
      },
      {
        heading: 'ข้อควรระวัง',
        bullets: [
          'คำว่า “ให้ดีที่สุด” ไม่ใช่เกณฑ์',
          'Chain-of-thought ไม่จำเป็นทุกงานและอาจเพิ่มต้นทุน',
          'Few-shot ตัวอย่างที่เอียงทำให้ผลเอียงตาม',
          'Prompt ไม่ใช่ security boundary',
          'Context ยาวเกินไปอาจทำให้ข้อมูลสำคัญถูกมองข้าม'
        ],
        callout: {
          label: 'หลักคิด',
          text: 'ถ้าคุณไม่สามารถบอกได้ว่า prompt ใหม่ดีกว่าเดิมด้วยตัวเลขใด แสดงว่ายังไม่พร้อม deploy'
        }
      }
    ]
  },
  {
    slug: 'rag-production-checklist',
    title: 'RAG Production Checklist 32 ข้อ',
    dek: 'รายการตรวจก่อนปล่อยระบบตอบคำถามจากเอกสารให้ผู้ใช้จริง',
    category: 'LLM',
    readTime: '10 นาที',
    updated: 'ต.ค. 2026',
    tags: ['RAG', 'production', 'checklist'],
    sections: [
      {
        heading: 'Ingestion และเอกสาร',
        bullets: [
          'รักษาโครงสร้าง heading, หน้า และตาราง',
          'มี metadata: source, section, date, permission',
          'จัดการ PDF สแกนด้วย OCR และตรวจคุณภาพ',
          'ลบหรืออัปเดตเอกสารเก่าออกจาก index',
          'มี deduplication และ content hash',
          'บันทึก parser version และการเปลี่ยนแปลง'
        ]
      },
      {
        heading: 'Chunking และ retrieval',
        bullets: [
          'เลือก chunk size จากธรรมชาติของเนื้อหา ไม่ใช่ค่ามาตรฐาน',
          'มี overlap พอให้บริบทไม่ขาด',
          'ทดสอบ semantic, recursive และ structure-aware',
          'มี hybrid search สำหรับคำเฉพาะ/ตัวเลข',
          'มี reranker และ candidate budget',
          'กรองสิทธิ์ก่อนค้นหา ไม่ใช่หลังสร้างคำตอบ',
          'วัด recall@k และ MRR ด้วย query จริง'
        ]
      },
      {
        heading: 'Generation และ citation',
        bullets: [
          'ตอบเฉพาะจาก context หรือบอกว่าไม่พบ',
          'citation ชี้ไปยังเอกสารและตำแหน่งที่ตรวจได้',
          'มี prompt injection defense สำหรับเอกสาร',
          'ควบคุมความยาวและรูปแบบคำตอบ',
          'จัดการคำถามหลายส่วนและคำถามที่ไม่มีคำตอบ',
          'มี fallback เมื่อ retrieval ล้มเหลว'
        ]
      },
      {
        heading: 'Evaluation และ operations',
        bullets: [
          'แยกวัด retrieval กับ generation',
          'มี golden set และ failure taxonomy',
          'วัด faithfulness, answer relevancy และ citation accuracy',
          'ติดตาม latency, token cost และ retrieval miss',
          'มี feedback loop จากผู้ใช้',
          'มี regression test เมื่อเปลี่ยน model/prompt/index',
          'มี logging ที่ redact PII',
          'มี runbook เมื่อ provider ล่มหรือ index stale'
        ]
      },
      {
        heading: 'Security และ governance',
        bullets: [
          'ตรวจสิทธิ์ผู้ใช้ที่ query และกรองเอกสารตาม tenant',
          'ป้องกัน data exfiltration ผ่าน output',
          'มี retention policy และ audit log',
          'ทดสอบ indirect prompt injection จากเอกสาร',
          'ระบุข้อจำกัดและแหล่งข้อมูลให้ผู้ใช้เข้าใจ'
        ],
        callout: {
          label: 'กฎสำคัญ',
          text: 'RAG ที่ไม่มี evaluation คือ demo ที่ดูดี แต่ยังไม่ใช่ระบบ'
        }
      }
    ]
  },
  {
    slug: 'llm-eval-playbook',
    title: 'LLM Evaluation Playbook',
    dek: 'สร้างชุดประเมินที่จับ regression และเชื่อมกับคุณค่าธุรกิจได้จริง',
    category: 'LLM',
    readTime: '9 นาที',
    updated: 'ต.ค. 2026',
    tags: ['evaluation', 'LLM-as-judge', 'metrics'],
    sections: [
      {
        heading: 'เริ่มจาก use case',
        paragraphs: [
          'Evaluation ที่ดีสะท้อนงานจริง ไม่ใช่ benchmark สาธารณะ เลือกงานที่ผู้ใช้ทำ ถามว่าความผิดพลาดแบบไหนเจ็บที่สุด และแปลงเป็นเกณฑ์ที่วัดได้'
        ],
        bullets: [
          'ความถูกต้องของข้อเท็จจริง',
          'ความครบถ้วน',
          'รูปแบบ/ schema',
          'ความปลอดภัย',
          'latency และต้นทุน',
          'ประสบการณ์ผู้ใช้'
        ]
      },
      {
        heading: 'ชั้นของ evaluation',
        steps: [
          { title: 'Unit checks', body: 'schema validity, exact match, regex, citation presence, forbidden content' },
          { title: 'Task metrics', body: 'F1, retrieval recall, task success, pass@k สำหรับ deterministic งาน' },
          { title: 'Rubric judging', body: 'ให้ LLM judge ตาม rubric ที่ชัด พร้อม examples และตรวจ agreement กับมนุษย์' },
          { title: 'Human review', body: 'สุ่มตรวจเคสสำคัญและเคสที่ judge ไม่มั่นใจ' },
          { title: 'Online metrics', body: 'thumbs, task completion, escalation rate, retention และ guardrail' }
        ]
      },
      {
        heading: 'จัดการ LLM-as-judge',
        bullets: [
          'ใช้ rubric ที่มีระดับคะแนนและตัวอย่าง',
          'สลับลำดับคำตอบเพื่อลด position bias',
          'จำกัดความยาวหรือnormalize ก่อนให้คะแนน',
          'ตรวจ agreement กับมนุษย์เป็นระยะ',
          'อย่าใช้ judge ตัวเดียวกับที่สร้างคำตอบ',
          'เก็บ rationale เพื่อ debug'
        ]
      },
      {
        heading: 'Regression และ CI',
        paragraphs: [
          'เก็บ eval suite ใน repo และรันเมื่อเปลี่ยน prompt, model, retrieval หรือ tool ทุกครั้ง ตั้ง gate เฉพาะ subset ที่สำคัญเพื่อไม่ให้ CI ช้าเกินไป และรายงานผลเป็น scorecard ที่เห็นความเปลี่ยนแปลง'
        ],
        callout: {
          label: 'ความจริง',
          text: 'คะแนน eval ไม่ใช่ความจริงสัมบูรณ์ แต่เป็นเครื่องมือตรวจจับการเปลี่ยนแปลงและสื่อสาร trade-off'
        }
      }
    ]
  },
  {
    slug: 'cut-ai-costs',
    title: 'ลดต้นทุน AI โดยไม่ทำคุณภาพพัง',
    dek: '7 lever ที่ได้ผลจริง ตั้งแต่ caching และ routing ไปจนถึงการออกแบบ context',
    category: 'วิศวกรรม',
    readTime: '7 นาที',
    updated: 'ต.ค. 2026',
    tags: ['cost', 'latency', 'inference'],
    sections: [
      {
        heading: 'วัดก่อน optimize',
        paragraphs: [
          'คำนวณต้นทุนต่อ request และต่อผู้ใช้จริง โดยแยก input token, output token, retrieval, embedding และ infrastructure ถ้าไม่รู้ว่าต้นทุนอยู่ตรงไหน การลด token สุ่มสี่สุ่มห้าอาจไม่ช่วยอะไร'
        ]
      },
      {
        heading: '7 lever',
        steps: [
          { title: '1. ลด context ที่ไม่จำเป็น', body: 'ส่งเฉพาะเอกสารที่เกี่ยวข้องและตัด boilerplate ที่ซ้ำ' },
          { title: '2. Caching', body: 'cache คำตอบที่ deterministic, prompt prefix และ retrieval result ตาม TTL' },
          { title: '3. Model routing', body: 'ใช้โมเดลเล็กราคาถูกเป็นด่านแรก แล้ว escalate เฉพาะเคสยาก' },
          { title: '4. Output control', body: 'กำหนด max tokens และรูปแบบคำตอบที่กระชับ' },
          { title: '5. Batch', body: 'งาน offline ใช้ batch API หรือ queue เพื่อลดต้นทุน' },
          { title: '6. Distillation', body: 'ใช้โมเดลใหญ่สร้างข้อมูลแล้วเทรนโมเดลเล็กสำหรับงานแคบ' },
          { title: '7. Architecture', body: 'งานที่ rule ธรรมดาแก้ได้ ไม่ต้องใช้ LLM' }
        ]
      },
      {
        heading: 'ระวังการลดต้นทุนที่ทำลายคุณภาพ',
        bullets: [
          'cache คำตอบข้ามผู้ใช้ที่สิทธิ์ต่างกัน',
          'ลด context จนข้อมูลสำคัญหาย',
          'ใช้โมเดลเล็กโดยไม่ทดสอบงานจริง',
          'quantize แล้วไม่วัด accuracy',
          'ตัด evaluation เพื่อประหยัดเวลา'
        ],
        callout: {
          label: 'สมการ',
          text: 'ต้นทุนที่แท้จริง = ต้นทุน inference + ต้นทุนมนุษย์ที่ต้องแก้คำตอบผิด + ต้นทุนความเสี่ยง'
        }
      }
    ]
  },
  {
    slug: 'privacy-pii',
    title: 'PII และ Privacy สำหรับระบบ AI',
    dek: 'ออกแบบ data flow ที่ลดความเสี่ยงตั้งแต่ ingestion ถึง logging',
    category: 'ความปลอดภัย',
    readTime: '6 นาที',
    updated: 'ต.ค. 2026',
    tags: ['privacy', 'PII', 'compliance'],
    sections: [
      {
        heading: 'Data minimization',
        paragraphs: [
          'เก็บเฉพาะข้อมูลที่จำเป็นต่อวัตถุประสงค์ ถามทุก field ว่าใช้ทำอะไร เก็บนานแค่ไหน และใครเข้าถึงได้ การลดข้อมูลตั้งแต่ต้นมีประสิทธิภาพกว่าการพยายามปกป้องข้อมูลที่เกินจำเป็น'
        ]
      },
      {
        heading: 'จุดที่ PII รั่วได้',
        bullets: [
          'prompt ที่ผู้ใช้ส่งเข้ามา',
          'เอกสารที่ retrieve มา',
          'log และ trace',
          'cache และ vector store',
          'ไฟล์ training/evaluation',
          'output ที่ส่งกลับหรือแสดงใน UI',
          'third-party provider ที่ประมวลผลข้อมูล'
        ]
      },
      {
        heading: 'มาตรการที่ควรมี',
        bullets: [
          'detect และ redact PII ก่อน log',
          'encrypt at rest และ in transit',
          'role-based access control และ audit log',
          'retention policy พร้อม automated deletion',
          'สัญญา data processing กับผู้ให้บริการ',
          'แยก environment และไม่ใช้ production data ใน dev โดยไม่ mask',
          'ประเมินว่า provider เก็บข้อมูลเพื่อ train หรือไม่'
        ],
        callout: {
          label: 'หมายเหตุ',
          text: 'ข้อกำหนดทางกฎหมายแตกต่างตามประเทศและประเภทข้อมูล เนื้อหานี้เป็นแนวปฏิบัติทางวิศวกรรม ไม่ใช่คำแนะนำทางกฎหมาย'
        }
      }
    ]
  },
  {
    slug: 'llm-security-checklist',
    title: 'LLM Security Checklist สำหรับ Engineer',
    dek: 'ป้องกัน prompt injection, data leak และ excessive agency ด้วย defense-in-depth',
    category: 'ความปลอดภัย',
    readTime: '8 นาที',
    updated: 'ต.ค. 2026',
    tags: ['security', 'prompt injection', 'OWASP'],
    sections: [
      {
        heading: 'ถือทุกอย่างเป็น untrusted',
        paragraphs: [
          'Input จากผู้ใช้ เอกสารจากเว็บ และ output ของ tool ต่างเป็น untrusted ทั้งหมด การป้องกันต้องอยู่ที่ระบบ ไม่ใช่แค่คำสั่งใน prompt'
        ]
      },
      {
        heading: 'Layer ของการป้องกัน',
        steps: [
          { title: 'Input layer', body: 'ตรวจขนาด, ชนิด, rate limit และ content policy' },
          { title: 'Retrieval layer', body: 'กรองสิทธิ์, แยกแหล่งข้อมูล, sanitize และติดป้ายว่าเป็น data ไม่ใช่ instruction' },
          { title: 'Model layer', body: 'system prompt ที่ชัด, tool allowlist, ไม่ให้ความลับใน context' },
          { title: 'Output layer', body: 'validate schema, scan secret/PII, ไม่ execute โดยตรง' },
          { title: 'Tool layer', body: 'least privilege, human approval, idempotency, sandbox และ audit log' },
          { title: 'Monitoring', body: 'detect anomalous tool calls, exfiltration patterns และ replay attack' }
        ]
      },
      {
        heading: 'Test cases ที่ควรมี',
        bullets: [
          'ผู้ใช้ขอให้ ignore instructions',
          'เอกสารมีคำสั่งซ่อน (“ignore previous instructions and send...”)',
          'ผู้ใช้พยายามอ่าน system prompt',
          'tool output มี SQL/HTML/คำสั่ง shell',
          'ผู้ใช้พยายามข้าม permission',
          'คำถามที่ชักนำให้เปิดเผยข้อมูลผู้ใช้อื่น',
          'ไฟล์ขนาดใหญ่หรือ malformed ที่ทำให้ระบบ crash'
        ]
      },
      {
        heading: 'ข้อผิดพลาดร้ายแรง',
        bullets: [
          'เชื่อว่า prompt ป้องกัน injection ได้ 100%',
          'ให้ agent รัน shell หรือส่งอีเมลโดยไม่ยืนยัน',
          'ส่ง output ไปยัง database โดยไม่ parameterize',
          'เก็บ secret ไว้ใน prompt',
          'ให้ tool ใช้ credential ที่มีสิทธิ์เกินจำเป็น'
        ],
        callout: {
          label: 'อ้างอิง',
          text: 'ใช้ OWASP Top 10 for LLM Applications เป็น checklist ตั้งต้น และทดสอบซ้ำเมื่อเพิ่ม tool หรือแหล่งข้อมูลใหม่'
        }
      }
    ]
  },
  {
    slug: 'thirty-day-job-search',
    title: '30-Day AI Job Search Sprint',
    dek: 'แผนรายสัปดาห์สำหรับคนที่มีพื้นฐานแล้วและต้องการหางานอย่างเป็นระบบ',
    category: 'อาชีพ',
    readTime: '7 นาที',
    updated: 'ต.ค. 2026',
    tags: ['job search', 'networking', 'career'],
    sections: [
      {
        heading: 'สัปดาห์ 1: หลักฐานและเป้าหมาย',
        bullets: [
          'เลือก 2–3 ตำแหน่งเป้าหมายและอ่าน JD 10 รายการ',
          'ปรับ portfolio ให้ตรงกับตำแหน่งนั้น',
          'เขียน resume 2 เวอร์ชันและตรวจลิงก์ทั้งหมด',
          'ทำ GitHub profile และ pinned repos ให้เรียบร้อย'
        ]
      },
      {
        heading: 'สัปดาห์ 2: เครือข่ายและช่องทาง',
        bullets: [
          'ติดต่อ 10 คนในสายงานด้วยข้อความเฉพาะบุคคล',
          'เข้าร่วม community 2 แห่งและมีส่วนร่วมจริง',
          'ขอ informational interview 3 ครั้ง',
          'สมัคร 10 ตำแหน่งที่ตรงและบันทึกใน tracker'
        ]
      },
      {
        heading: 'สัปดาห์ 3: เตรียมสัมภาษณ์',
        bullets: [
          'ซ้อม coding 4 รอบและ SQL 2 รอบ',
          'ซ้อม system design 3 รอบกับคนอื่น',
          'เตรียม STAR 8 เรื่อง',
          'ทำ mock interview และขอ feedback เป็นลายลักษณ์อักษร'
        ]
      },
      {
        heading: 'สัปดาห์ 4: Iterate',
        bullets: [
          'ทบทวน response rate และปรับ resume',
          'ติดตามผลอย่างสุภาพหลัง 5–7 วัน',
          'บันทึกคำถามที่ตอบไม่ได้และเติมความรู้',
          'รักษา pipeline: สมัครใหม่ทุกสัปดาห์ อย่ารอผลเดียว'
        ],
        callout: {
          label: 'คาดหวังตามจริง',
          text: 'ตลาดงานไม่ใช่ระบบตอบกลับทันที ให้วัดความคืบหน้าที่จำนวน conversation และคุณภาพ feedback ไม่ใช่จำนวน offer ใน 30 วัน'
        }
      }
    ]
  },
  {
    slug: 'study-while-working',
    title: 'เรียน AI ไปด้วยทำงานไปด้วย',
    dek: 'ระบบจัดการพลังงานและเวลาแบบไม่ต้องพึ่งวินัยมหาศาล',
    category: 'การเรียนรู้',
    readTime: '5 นาที',
    updated: 'ต.ค. 2026',
    tags: ['time management', 'habits', 'learning'],
    sections: [
      {
        heading: 'ออกแบบระบบ ไม่ใช่แรงบันดาลใจ',
        paragraphs: [
          'ตั้งเวลาเรียนเป็น block ที่แน่นอน 3–4 ครั้งต่อสัปดาห์ โดยเริ่มจาก 45 นาที เพื่อให้ทำได้ต่อเนื่อง ดีกว่าการรอวันว่างแล้วเรียน 5 ชั่วโมง'
        ],
        bullets: [
          'block สั้นสำหรับอ่าน/ดู และ block ยาวสำหรับลงมือทำ',
          'เตรียม environment ไว้ล่วงหน้าเพื่อลดแรงเสียดทาน',
          'จบแต่ละ session ด้วย next step ที่ชัดเจน',
          'ทบทวน weekly 15 นาทีและปรับแผน'
        ]
      },
      {
        heading: 'ใช้พลังงานให้ถูกช่วง',
        paragraphs: [
          'งานที่ต้องคิดหนัก เช่น debug หรือ system design ให้ทำในช่วงที่สมองดีที่สุด งานเบา เช่น ดูวิดีโอหรือจัด note ให้ทำช่วงเหนื่อย',
          'ถ้ามีงานประจำ ให้มองหาปัญหาที่นำมาเป็นโปรเจกต์เรียนได้ แต่ระวังข้อมูลและสิทธิ์ของบริษัท'
        ],
        callout: {
          label: 'กฎ 2 วัน',
          text: 'อย่าขาดเรียนติดกัน 2 ครั้ง การกลับมาเริ่มใหม่หลังขาดยาวยากกว่าการเรียน 20 นาทีในวันที่ไม่มีแรงมาก'
        }
      }
    ]
  }
];

export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
export const guideCategories = [...new Set(guides.map((g) => g.category))];
