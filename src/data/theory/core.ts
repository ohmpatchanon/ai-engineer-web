import type { Lesson } from './types';

export const coreLessons: Lesson[] = [
  {
    id: 't-learning',    number: 'T.02',
    slug: 'how-models-learn',
    phase: 'core-ml',
    title: 'โมเดลเรียนรู้อย่างไร: จาก loss สู่ gradient descent',
    en: 'How Models Actually Learn',
    summary: 'หัวใจของ ML คือการปรับพารามิเตอร์ให้ loss ต่ำลงซ้ำ ๆ ด้วย gradient descent — บทนี้พาไล่จากฟังก์ชันง่ายไปถึงที่มาของ overfitting',
    level: 'เริ่มต้น',
    prereqLessons: ['math-for-ai'],
    linkedModules: ['ml-foundations', 'classical-machine-learning'],
    teaches: [
      'อธิบาย forward pass, loss และ backprop ในฐานะวงจรเดียว',
      'แยก underfitting กับ overfitting และเลือกวิธีแก้ที่ตรงจุด',
      'อ่าน bias-variance trade-off จากกราฟ training/validation loss ได้',
      'รู้ว่าเมื่อไรควรใช้ regularization กับเทคนิคใด'
    ],
    keywords: ['loss', 'gradient descent', 'backprop', 'overfitting', 'bias-variance', 'regularization', 'convergence'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'โมเดลคือฟังก์ชันที่เราปรับจากข้อมูล',
        paragraphs: [
          'โมเดล ML ทุกแบบ สรุปแล้วคือฟังก์ชันคณิตศาสตร์แบบเดียวกัน: รับ input, คูณด้วย weight, ผ่าน activation แล้วปล่อย prediction สิ่งที่ training ทำคือเลือกค่าของ weight ทั้งหมดให้ prediction ตรงกับคำตอบจริงมากที่สุด ขั้นตอนเทรนคือวงจรสี่จังหวะ: forward (คำนวณคำตอบ), loss (วัดผิดแค่ไหน), backward (หา gradient = แต่ละ weight ควรขยับไปทิศไหน), update (ขยับ weight ตาม learning rate) แล้ววนซ้ำ',
          'การเทรน "ได้ผล" ไม่ได้แปลว่า loss ลดเป็น 0 — แปลว่าโมเดลสร้างกฎที่ generalize ไปยังข้อมูลใหม่ได้ นี่คือประเด็นที่แยกวิศวกร ML ที่ดีออกจากคนที่แค่ทำให้ loss ลงได้'
        ],
        formula: {
          title: 'วงจรการเทรนในหนึ่งบรรทัด',
          plain: 'θ ← θ − η · ∇loss(θ)   (θ = พารามิเตอร์, η = learning rate, ∇loss = gradient)',
          note: 'ปรับพารามิเตอร์ไปทิศทางตรงข้าม gradient ด้วยขนาดก้าว η — ซ้ำจน loss บรรจบ'
        }
      },
      {
        heading: 'loss ที่ไม่ใช่แค่ "ผิด/ถูก": softmax และ cross-entropy',
        paragraphs: [
          'งาน classification ไม่ได้ให้ "ถูก/ผิด" แต่ให้คะแนนความมั่นใจในทุกคลาส (logit) จากนั้น softmax เปลี่ยนคะแนนให้เป็นความน่าจะเป็นที่รวมกันได้ 1 เราวัดความผิดด้วย cross-entropy: ยิ่งความน่าจะเป็นของคำตอบจริงต่ำ ค่า loss ยิ่งสูงแบบไม่เป็นเส้นตรง — โมเดลจึงถูก "บังคับ" ให้มั่นใจมากขึ้นเรื่อย ๆ ไม่ใช่แค่พอเดาถูก',
          'จุดที่คนเริ่มต้นสับสน: classification ใช้ cross-entropy ไม่ใช่ MSE (mean squared error) เพราะ MSE กับ softmax เข้ากันไม่ดีในทาง gradient (loss อิ่มตัวเร็วเกิน) ในขณะที่ regression ใช้ MSE หรือ MAE เพราะต้องการวัดระยะทางจริงระหว่างค่าที่ทำนายกับค่าจริง'
        ],
        callout: {
          label: 'WHY NOT MSE?',
          text: 'ลองนึกว่าตอบ 0.7 แล้วคำตอบจริงคือ 1: MSE ลงโทษแบบกำลังสอง (0.09) แต่ cross-entropy ลงโทษแบบ log ที่แหลมกว่ามากเมื่อความมั่นใจต่ำในคลาสที่ถูก — จึงผลักโมเดลให้กล้าตัดสินใจได้ดีกว่าในงานจัดหมวดหมู่'
        }
      },
      {
        heading: 'overfitting เกิดจากอะไรกันแน่ และอ่านสัญญาณยังไง',
        paragraphs: [
          'Overfitting คือโมเดลจำได้เฉพาะข้อมูลฝึก (train) แต่ทำพลาดกับข้อมูลใหม่ เหตุผลลึกคือโมเดล "มีกำลังพอ" ที่จะจับ noise เป็นรูปแบบได้ ถ้า parameter เยอะเกินพอดีกับจำนวนข้อมูลจริง สัญญาณที่อ่านจากกราฟคือ gap: train loss ลดต่อ แต่ validation loss ลดลงถึงจุดหนึ่งแล้วกลับสูงขึ้น (หรือ ยกค้าง) จุดที่ validation น้อยที่สุดคือจุดที่ควรหยุด',
          'ทางแก้อย่าคิดว่า "ทุกทางใช้ได้หมด": ถ้า validate สูงแถม train สูง = underfitting แก้ด้วยโมเดลใหญ่/ข้อมูลดี/เทรนนานขึ้น แต่ถ้า validate สูงและ train ต่ำ = overfitting แก้ด้วย regularization, dropout, เพิ่มข้อมูลกลุ่ม (augmentation) หรือลดขนาดโมเดล การเลือกผิดทางจะเสียเวลาเป็นอาทิตย์'
        ],
        example: {
          title: 'แยกให้ออกก่อนจะแก้',
          body: 'validation loss = 0.9, train loss = 0.3 → จำมากเกิน แก้ด้วย regularization + data และลดความซับซ้อน แต่ถ้า validation = 0.9, train = 0.85 → เรียนไม่พอ แก้ด้วยโมเดลใหญ่และเทรนนาน ไม่ใช่ regularize'
        }
      },
      {
        heading: 'bias–variance trade-off: ทำไม "ซับซ้อนขึ้น" ถึงไม่ดีเสมอ',
        paragraphs: [
          'ความผิดพลาดของโมเดลแยกได้สองส่วน: bias (โมเดลง่ายเกิน จับรูปแบบไม่ได้ — underfit) กับ variance (โมเดลไวเกิน ตอบเปลี่ยนไปเพียงเพราะชุดข้อมูลเปลี่ยน — overfit) การเพิ่มความซับซ้อนลด bias แต่เพิ่ม variance จุดสมดุลคือจุดที่รวมทั้งสองแล้วน้อยที่สุด ซึ่งหาเจอด้วยการดู validation error ไม่ใช่ train error',
          'ผลเชิงปฏิบัติ: เมื่อเพิ่ม feature หรือขนาดโมเดล ทดสอบเสมอว่าจุดสมดุลอยู่ตรงไหน หลายโมเดล "ดีขึ้นใน train" เพียงเพราะ bias ลดไปจน variance พุ่งทับ — ตัวเลข train ที่ดูสวยจึงไม่ใช่หลักฐาน'
        ]
      },
      {
        heading: 'regularization: ลงโทษความซับซ้อนที่ไม่ได้ใช้',
        paragraphs: [
          'L1 (Lasso) ลงโทษด้วยผลรวมค่าสัมบูรณ์ของ weight ทำให้ weight จำนวนมาก "ถูกลดเป็นศูนย์" จริง ๆ — ใช้ตอนอยากให้ feature selection นี่คือคุณสมบัติที่ L2 ไม่มี L2 (Ridge) ลงโทษด้วยกำลังสอง ทำให้ weight เล็กลงแบบกระจาย ไม่เป็นศูนย์ ใช้ลดการฟิตเกินโดยรวม Dropout ซึ่งสุ่มปิด neuron ระหว่างเทรน เป็น Regularization อีกแบบที่บังคับให้โมเดลไม่พึ่ง neuron ตัวเดียว',
          'ความเข้าใจผิดพบบ่อยคือคิดว่า regularization ลด loss ตรง ๆ — ที่จริงมันทำให้ "validation" ดีขึ้นโดยยอมให้ train แย่ลงนิดหน่อย ถ้าเห็น train loss สูงขึ้นพร้อม regularize แปลว่ากลไกกำลังทำงาน ถ้าทั้งคู่แย่ลง แปลว่าแรงเกินไป'
        ]
      },
      {
        heading: 'ลำดับที่ควรเรียนและ debug',
        bullets: [
          'เริ่มจากโมเดลง่าย + loss ที่ถูกต้อง (cross-entropy/MSE ตามงาน) แล้วดู train loss ว่าลดไหมก่อน',
          'ต่อด้วยอ่าน validation loss + gap ว่า underfit หรือ overfit แล้วแก้ทิศทางเดียว',
          'แล้วค่อยแนะนำ regularization, optimizer อย่าง Adam, batch size และ learning rate scheduling',
          'บันทึกการทดลอง (เอา model, seed, hyperparameter, ผล) ทุกครั้ง ไม่งั้นตัดสินใจผิดจากความจำ'
        ],
        callout: {
          label: 'MINDSET',
          text: 'debug ML ไม่ใช้การเดาแบบสุ่ม แต่ใช้ลำดับ: ถูกต้องของข้อมูล → ถูกต้องของ loss → ลด train → ลด gap → ปรับให้เสถียร'
        }
      }
    ]
  },
  {
    id: 't-eval',
    number: 'T.03',
    slug: 'honest-evaluation',
    phase: 'core-ml',
    title: 'การวัดผลที่ซื่อสัตย์: ทำไมตัวเลขถึงโกหกได้',
    en: 'Honest Evaluation',
    summary: 'ถ้าวัดผิด ทุกอย่างที่ตามมาผิด — เรียนรู้การแบ่งข้อมูล, เลือก metric ให้ตรงกับต้นทุน และหลีกเลี่ยง leakage ที่ทำให้ตัวเลขสวยแต่ใช้จริงไม่ได้',
    level: 'เริ่มต้น',
    prereqLessons: ['how-models-learn'],
    linkedModules: ['evaluation-experimentation', 'features-and-leakage'],
    teaches: [
      'แยก train/validation/test อย่างถูกต้องและให้เหตุผลได้',
      'เลือก metric ตามต้นทุนของ false positive/negative ไม่ใช่ตามค่าที่สูงสุด',
      'รู้จักรูปแบบ leakage ที่พบบ่อยและตรวจเจอก่อน deploy',
      'ออกแบบการทดลองที่เปรียบเทียบ 2 โมเดลได้อย่างเป็นธรรม'
    ],
    keywords: ['train test split', 'cross-validation', 'precision recall', 'F1', 'ROC-AUC', 'data leakage', 'sample bias'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'สามชุดข้อมูลที่ห้ามปนกัน',
        paragraphs: [
          'ข้อมูลแบ่งออกเป็น 3 ส่วน: train ใช้ปรับพารามิเตอร์, validation ใช้ตัดสินใจปรับ hyperparameter (learning rate, ขนาดโมเดล) ระหว่างเทรน และ test ใช้ประเมินครั้งเดียวตอนจบเพื่อไม่ให้เกิด "การลอบเล่น" กับชุดประเมิน — เพราะถ้าเรากลับไปปรับโดยดู test ซ้ำแล้วซ้ำเล่า test ก็จะกลายเป็น train อีกชุด ตัวเลขสวยขึ้นแต่โลกจริงไม่เปลี่ยน',
          'กฎเหล็ก: ถ้าจะทดสอบหลาย ๆ แนวคิด ให้ใช้ validation ตัดสิน แล้วใช้ test แค่ครั้งเดียวสุดท้าย ถ้าจำเป็นต้องดู test ซ้ำ ต้องยอมรับว่าค่าที่รายงานไม่ใช่ค่าที่ตรงกับสภาพจริงอีกต่อไป'
        ],
        callout: {
          label: 'RULE',
          text: 'validation = ตัดสินใจระหว่างเทรน, test = วัดผลจริงครั้งเดียว ใช้ test ซ้ำ = โกงตัวเอง'
        }
      },
      {
        heading: 'metric ที่ตรงกับโจทย์ ไม่ใช่ metric ที่สวยที่สุด',
        paragraphs: [
          'ไม่มี metric ใดดีที่สุดแบบสากล — แต่ละตัวสะท้อนต้นทุนต่างกัน Precision=ในสิ่งที่ทายว่า positive มีจริงกี่ส่วน ใช้เมื่อ false positive แพง (เช่น เตือนภัยเท็จ) Recall=ในของจริงจับได้กี่ส่วน ใช้เมื่อ false negative แพง (เช่น คัดโรคพลาด) F1 คือค่าเฉลี่ยฮาร์มอนิกเพื่อสมดุลทั้งสอง — ดูดีทั้งคู่ แต่อย่าใช้ลืมว่ามันซ่อนต้นทุนที่ไม่เท่ากัน',
          'ตัวอย่างจริง: spam filter ที่ precision 99% แต่ recall 50% จะ "ไม่รบกวน" แต่ปล่อยสแปมเข้าอีเมลครึ่งหนึ่ง ขณะที่ระบบเตือนการฉ้อโกงที่ recall สูงแต่ precision ต่ำจะก่อภาระสอบสวนเท็จจำนวนมาก การเลือก metric จึงต้องกลับไปที่คำถามเดียว: ผิดแบบไหนแพงกว่า'
        ],
        formula: {
          title: 'Precision vs Recall',
          plain: 'Precision = TP/(TP+FP)   ·   Recall = TP/(TP+FN)',
          note: 'Precision ถาม "ที่บอกว่าใช่ ใช่จริงแค่ไหน" / Recall ถาม "ของใช่ทั้งหมด จับได้กี่ส่วน" — เลือกตามฝั่งที่แพงกว่า'
        }
      },
      {
        heading: 'ROC-AUC ใช้เมื่อไร และใช้ผิดเมื่อไร',
        paragraphs: [
          'ROC-AUC วัดความสามารถแยกสองคลาสของโมเดลในทุก threshold อย่างเดียว ค่า 0.5 = เดาสุ่ม 1.0 = แยกสมบูรณ์ เป็น metric ที่นิยมนึกถึง แต่มัน "ไม่บอก" ว่าที่ threshold ที่คุณจะใช้จริง (เช่น ป้ายว่า fraud เมื่อคะแนน > 0.7) ประสิทธิภาพจริงเป็นอย่างไร และข้อมูลไม่สมดุลมาก ๆ (เช่น fraud 0.1%) ROC-AUC อาจดูสูงโดยที่โมเดลใช้ไม่ได้เลย — เพราะ class ใหญ่ (ปกติ) ครอบงำการคำนวณ',
          'ทางเลือกที่เหมาะกับข้อมูลไม่สมดุลคือ PR-AUC และที่สำคัญที่สุดคือดูตัวเลขจริงที่ threshold ใช้งานจริง: precision, recall, และ confusion matrix ของ threshold นั้น เล็กน้อยแต่สำหรับการตัดสินใจ deployment มันเป็นข้อมูลที่ ROC-AUC ให้นึกภาพไม่ออก'
        ]
      },
      {
        heading: 'cross-validation: ใช้ข้อมูลทุกส่วนอย่างเป็นธรรม',
        paragraphs: [
          'k-fold cross-validation แบ่งข้อมูลเป็น k ส่วน วนใช้แต่ละส่วนเป็น validation โดยมีส่วนอื่นเป็น train แล้วเฉลี่ยผล — ลดผลกระทบของ "โชคดี/โชคร้าย" จากการแบ่งครั้งเดียว และใช้ข้อมูลเต็มที่เหมาะกับชุดข้อมูลขนาดกลาง',
          'ข้อควรระวังที่คนพลาด: ห้ามใช้ cross-validation เป็น "test ชุดใหม่" เพื่อหลอกตัวเองว่าไม่เคยดู test — ข้อมูล 20% ที่ split ออกมาต้องไม่ถูกแตะตอนพัฒนาเลย (holdout test) การใช้ k-fold ครบชุด 100% เพื่อเลือก hyperparameter แต่ละครั้ง เท่ากับดู test ไปแล้วโดยอ้อม'
        ]
      },
      {
        heading: 'data leakage: ตัวเลขสวยที่สุดคือตัวเลขที่หลอกที่สุด',
        paragraphs: [
          'Leakage คือข้อมูลจาก "อนาคต/คำตอบ" รั่วเข้าไปในการเทรน ทำให้โมเดลดูเก่งใน lab แต่พังในโลกจริง ตัวอย่างคลาสสิก: ลบ out-of-stock รายการออกจาก train เท่านั้นโดยไม่ลบจาก test, นำ target ไปใช้สร้าง feature, หรือใส่สถิติรวมทั้งชุด (เช่น mean ของคอลัมน์) ลงใน feature ที่คำนวณข้ามแถว — เฉลี่ยทั้ง train+test ก่อน split เป็นต้น',
          'รูปแบบที่พบใน RAG/LLM คือสอบถามด้วยชุดคำถามที่โมเดลเคยเห็นตอน pretrain หรือมีเนื้อหาต้นฉบับอยู่ในคำตอบ — ทดสอบต้องใช้วัสดุที่ "ไม่อยู่ในคลังความรู้ของโมเดล" จริง ๆ เลือกข้อมูลใหม่ (temporal) หรือคนเขียนใหม่จากเนื้อหาอื่น'
        ],
        example: {
          title: 'กรณีที่จับได้ยาก',
          body: 'โมเดลทำนายสัญญาเลิกจ้าง ฝึกบนข้อมูลปี 2020-2023 แล้ว split test แบบสุ่ม ทำให้คน 30% ใน test เกิดก่อน 2020 — โมเดล "รู้" ผลลัพธ์ของคนเหล่านี้จากการเทรนเพราะข้อมูลซ้อนกัน วิธีแก้: split ตามเวลา (คนเกิด/ข้อมูลหลังจุดตัดใช้ได้เท่านั้น) เสมอสำหรับข้อมูลอนุกรมเวลา'
        }
      },
      {
        heading: 'ลำดับการปฏิบัติที่ทำให้ตัวเลขเชื่อถือได้',
        bullets: [
          'split ก่อนทุกอย่าง: แยก test ออกทันทีหลังเก็บข้อมูล แล้ว lock ไว้',
          'มีการ split ตามเวลาหรือตามกลุ่มผู้ใช้ หากข้อมูลมี dimension เวลา/กลุ่ม',
          'ระหว่าง develop ใช้ train/validation เท่านั้น ห้ามดู test',
          'เลือก metric จากต้นทุนของธุรกิจก่อนเทรน ไม่ใช่หลังเห็นผล',
          'สุดท้าย รัน test หนึ่งครั้ง รายงานค่า พร้อม record seed ของการทดลอง'
        ]
      }
    ]
  },
  {
    id: 't-classical',
    number: 'T.04',
    slug: 'classical-models',
    phase: 'core-ml',
    title: 'โมเดลคลาสสิก: linear ถึง ensambles และวิธีเลือก',
    en: 'Classical Models Explained',
    summary: 'ไม่ใช่ทุกปัญหาต้องใช้ deep learning — เข้าใจ linear regression, logistic regression, decision tree, random forest และ gradient boosting ว่าแต่ละตัวเก่งอะไรและพังตรงไหน',
    level: 'เริ่มต้น',
    prereqLessons: ['how-models-learn', 'honest-evaluation'],
    linkedModules: ['classical-machine-learning'],
    teaches: [
      'อธิบายหลักของแบบจำลองแต่ละตระกูลและ trade-off',
      'เลือก "โมเดลแรก" ที่ควรลองจากขนาดข้อมูลและความต้องการอธิบายผล',
      'เข้าใจความต่างระหว่าง tree-based กับ linear ในเรื่อง scale และ collinearity ของ feature',
      'รู้ว่าทำไม gradient boosting มักชนะที่นี่ แต่เสียค่า interpretability'
    ],
    keywords: ['linear regression', 'logistic regression', 'decision tree', 'random forest', 'gradient boosting', 'XGBoost', 'scikit-learn'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'linear regression: ฟิตเส้นในข้อมูลตัวเลข',
        paragraphs: [
          'Linear regression หาเส้นตรง (ใน 1 มิติ) หรือ hyperplane (ในหลายมิติ) ที่ error รวมน้อยที่สุดในแง่กำลังสอง (least squares) โมเดลนี้อ่านง่าย: coefficient แต่ละตัวบอก "เมื่อ feature นั้นเพิ่ม 1 หน่วย ผลตอบเพิ่มเท่าไร ถ้าตัวอื่นคงที่" จุดอ่อนคือสมมุติความสัมพันธ์เชิงเส้น — ถ้าเป็นกราฟโค้ง ต้องแปลง feature (เช่น log, square) ก่อน',
          'เมื่อใช้จริง ระวัง collinearity: ถ้า feature สองตัวเหมือนกันสูง (เช่น น้ำหนักกิโลกรัม กับ ปอนด์) coefficient จะสั่นและไม่น่าเชื่อถือ แม้ prediction ยังแม่น — อ่าน "ความสำคัญ" จาก coefficient ต้องตรวจ multicollinearity ก่อน'
        ],
        formula: {
          title: 'แบบจำลองเส้นตรง',
          plain: 'ŷ = w·x + b   (w = weight/ความชัน, b = bias/จุดตัด)',
          note: 'ต้องการหา w, b ที่ทำให้ผลรวมของ (ŷ − y)² น้อยที่สุด'
        }
      },
      {
        heading: 'logistic regression: เส้นตรงกับความน่าจะเป็น',
        paragraphs: [
          'แม้ชื่อมี regression แต่ใช้จัดหมวดหมู่ (binary classification) มันคำนวณ logit แล้วผ่าน sigmoid เพื่อให้ได้ความน่าจะเป็นระหว่าง 0-1 จุดแข็งคือเรียบง่าย แก้ด้วย feature เพิ่มได้ และให้ค่าความมั่นใจดีพอเป็น baseline เสมอ หลายทีมใช้เป็น "โมเดลแรก" ก่อนเทรนอะไรหนัก ๆ เพื่อให้รู้ตัวเลขขั้นต่ำที่ต้องเอาชนะ',
          'คำเตือน: สมมุติความสัมพันธ์เป็นเส้นตรงใน log-odds ทุกครั้ง ถ้า feature แยกแบบไม่เป็นเส้นตรง (เช่น หนึ่ง cluster หมุน) logistic จะพ่ายให้ tree — อย่าแปลว่า "โมเดลไม่ดี" ทั้งที่จริงคือ "เครื่องมือไม่ตรงงาน"'
        ]
      },
      {
        heading: 'decision tree และข้อจำกัดเรื่องความเสถียร',
        paragraphs: [
          'Decision tree แยกข้อมูลด้วยคำถาม "feature ไหน ณ threshold ไหน แบ่งได้ดีที่สุด" ซ้ำลงไปเรื่อย ๆ จนถึงใบ (คำตอบ) ข้อดีคือไม่ต้องสมมุติรูปร่าง อ่านอธิบายคนได้ และจัดการกับทั้งตัวเลข/หมวดหมู่ แต่ข้อเสียสำคัญ: ต้นไม้อันเดียว unstable — ข้อมูลเปลี่ยนเล็กน้อย แต่โครงสร้างเปลี่ยนง่าย และง่ายต่อ overfit ถ้าไม่จำกัดความลึก',
          'วิธีบรรเทาคือควบคุม hyperparameter (max_depth, min_samples_leaf, pruning) และโดยเฉพาะใช้ ensemble เพื่อเฉลี่ยความไม่เสถียรของต้นไม้หลายต้น'
        ]
      },
      {
        heading: 'random forest: เฉลี่ยต้นไม้หลายต้น',
        paragraphs: [
          'Random forest สร้างต้นไม้หลายร้อยต้น โดยแต่ละต้นฝึกบนข้อมูลสุ่ม (bootstrap) และสุ่ม feature บางชุดต่อการแยก (random subspace) แล้วเฉลี่ยคำตอบ ทำให้ variance ลดลงอย่างมากเมื่อเทียบกับต้นไม้ต้นเดียว มันเป็นตัวเลือกแรกที่ "ทำงานได้ดีแทบทุกที่" สำหรับ data ที่มีขนาดปานกลาง และให้ feature importance ฟรี',
          'ข้อควรระวัง: feature importance จาก impurity มัก bias ต่อ feature ตัวเลขที่มีค่าหลายค่า ใช้ permutation importance หรือ SHAP เป็นตัวตรวจซ้ำเมื่อต้องใช้ decision เลือก feature จริง'
        ]
      },
      {
        heading: 'gradient boosting: เทรนต้นไม้ที่เหลือ',
        paragraphs: [
          'Gradient boosting (XGBoost, LightGBM, CatBoost) ฝึกต้นไม้ทีละต้นโดยให้ต้นใหม่ "จับจุดที่ยังผิด" ของชุดก่อนหน้า ผ่าน gradient ของ loss — เหมือน team ที่แต่ละคนเก่งคนละเรื่องแล้วรวมกัน ทำให้แม่นกว่า random forest ปกติทั้ง regression และ classification จึงเป็นผู้ชนะใน tabular data เหตุการณ์ทั่วไป',
          'ต้นทุนคือ interpretability และค่า tuning: ต้องจัดการ learning rate, max depth, subsample, จำนวนรอบ และเจอ overfit ได้ไว ด้วยเหตุนี้ในงานที่ต้องอธิบายกับผู้ตรวจสอบ (เช่น credit) อาจยอมใช้ linear/tree เดี่ยวที่อธิบายได้ สลับกับ boosting เพื่อ cross-check'
        ],
        callout: {
          label: 'CHOOSE FIRST',
          text: 'ข้อมูล tabular ปานกลาง → เริ่ม logistic/tree แล้วเที่ยบกับ LightGBM; ข้อมูลรูป/ข้อความ → ใช้ deep learning เสมอ; งานเรียลไทม์เล็ก → linear ก่อนเพราะเร็วกว่า debug ง่ายกว่า'
        }
      }
    ]
  },
  {
    id: 't-features',
    number: 'T.05',
    slug: 'feature-engineering-and-leakage',
    phase: 'core-ml',
    title: 'Feature engineering และต้นตอของ leakage',
    en: 'Features & Where Data Leaks',
    summary: 'คุณภาพโมเดลมักจบที่คุณภาพ feature มากกว่าตัวอัลกอริทึม — เรียนวิธีแปลงข้อมูล ทดสอบ feature และจับจุดที่ "อนาคต" รั่วเข้าสู่อดีต',
    level: 'กลาง',
    prereqLessons: ['classical-models', 'honest-evaluation'],
    linkedModules: ['features-and-leakage'],
    teaches: [
      'เลือก feature transform ที่ตรงกับประเภทของข้อมูลและรูปการกระจาย',
      'แยกการ transform ที่ต้อง fit เฉพาะ train ออกจากการคำนวณสด',
      'รู้จักต้นตอ leakage 5 แบบและทดสอบหาเจอได้',
      'ใช้ feature importance และ interaction เพื่อตรวจสอบว่าโมเดล "ใช้" อะไรเรียน'
    ],
    keywords: ['feature engineering', 'scaling', 'encoding', 'leakage', 'target encoding', 'feature importance'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'Feature เป็น "มุมมอง" ไม่ใช่คอลัมน์ดิบ',
        paragraphs: [
          'Feature คือข้อมูลที่ตั้งใจ "ตีความ" จากข้อมูลดิบเพื่อให้โมเดลเห็นความสัมพันธ์ที่ยังมองไม่เห็น ตัวอย่าง: วันที่ให้เป็น day-of-week, month, days_since_last_purchase, ไม่ใช่ timestamp ดิบ คอลัมน์ข้อความให้เป็น word count, จำนวนเครื่องหมาย, has_url คุณสมบัติของ feature ที่ดีคือ มีความหมายเชิงเหตุผลกับปัญหาและกระจายตัวไม่ถูกรุ่งหนึ่งค่าจนโมเดลใช้ไม่ได้',
          'ความผิดพลาดยอดนิยมคือ dumping ทุกคอลัมน์ดิบเข้าโมเดลแล้วปล่อยให้มัน "หาความหมายเอง" — โมเดล tree ทำได้บ้าง แต่โดยรวม data น้อย/ขยะเยอะจะทำให้ overfit ควรเริ่มด้วย feature น้อยที่กลั่นจากเหตุผล แล้วค่อยเพิ่มโดยวัดว่า validation ดีขึ้นจริงหรือไม่ (forward selection เชิง evidence)'
        ]
      },
      {
        heading: 'scaling, encoding และสิ่งที่ห้ามทำก่อน split',
        paragraphs: [
          'มาตรฐานของตัวเลข (StandardScaler, MinMaxScaler) จำเป็นสำหรับ model ที่อิงระยะทางหรือ gradient (linear, SVM, neural) แต่ tree ไม่สนใจ scale เดียวในแง่ performance (แค่สั่ง split) Encoding หมวดหมู่ต้องคิดรอบคอบ: label encoding เหมาะกับหมวดที่มีลำดับ (order), one-hot กับหมวดหมู่ไม่กี่ค่า, frequency/target encoding กับหมวดค่ามากแต่เสี่ยง overfit ต้อง cross-validated อย่างเคร่งครัด',
          'กฎที่คนใหม่บอกว่า "ใส่ไม่ได้" จริงคือ: ทุก transform ที่อ่านสถิติจากข้อมูล (mean, minmax, encode frequency, target encoding) ต้อง fit บน train เท่านั้น แล้ว apply ลง val/test แบบใช้ค่า train ห้าม fit ใหม่ทั้งชุดเด็ดขาด มิฉะนั้นค่าใน val/test "ถูกมองเห็น" ระหว่างพัฒนา — จุดนี้คือ leakage ที่แพร่ที่สุด'
        ],
        callout: {
          label: 'GOLDEN RULE',
          text: 'ทุกอย่างที่คำนวณจากข้อมูล (mean, min, encoding, imputation) ให้ fit เฉพาะ train และนำไป reuse กับ val/test — ห้ามอัปเดตสถิติจากชุดที่ "เป็นอนาคต"'
        }
      },
      {
        heading: 'leakage 5 รูปแบบที่พบบ่อยในโปรเจกต์จริง',
        bullets: [
          'Split หลัง imputation/encoding: สถิติเต็มชุดรั่วเข้า feature',
          'Feature อนาคตรีบ: เช่น "ยอดสั่งซื้อเดือน" ในข้อมูลพยากรณ์วันที่ผ่านมา',
          'Duplicate/near-duplicate แถวข้ามชุด: ข้อมูล 96% เหมือนใน train กับ test สูงเกินจริง',
          'Target-derived: สร้าง feature จากคอลัมน์เป้าหมายหรือ proxy ของมัน',
          'โมเดลเห็นกลุ่มทดสอบระหว่างเทรน: เช่น ข้อมูลคนเดียวไม่แยกเป็น user group'
        ]
      },
      {
        heading: 'ทดสอบว่า "กำลังรั่ว" ด้วยเทคนิคนี้',
        paragraphs: [
          'วิธีจับง่ายที่สุด: split ตามเวลา (หรือกลุ่ม) อย่างเคร่งครัด แล้วเช็คว่า validation ลดลงมากจาก split แบบสุ่มหรือไม่ — ถ้าลดฮวบ แสดงว่า split สุ่มกำลัง "ให้โชค" ด้วยการรั่ว ถัดมา ดู metadata ที่แปลก เช่น accuracy สูงเกิน 99% ในงานยาก ๆ บ่งชี้ว่า test ใกล้ train เกินไป ให้สุ่ม check ซ้ำว่าซ้ำกับ train จริงหรือไม่',
          'เครื่องมือช่วยคือการรันโปรเจกต์ใหม่ด้วย "unseen 100%" (ข้อมูลใหม่หลัง cutoff) แล้วเทียบ: ถ้าตัวเลขจริงต่ำกว่า lab มาก อย่าโทษ "โลกจริง" ก่อน — ให้กลับมาหา leakage ใน pipeline ก่อนเสมอ'
        ]
      }
    ]
  }
];
