import type { Lesson } from './types';

export const impactLessons: Lesson[] = [
  {
    id: 't-responsible',
    number: 'T.18',
    slug: 'responsible-ai',
    phase: 'impact',
    title: 'Responsible AI: bias, ความเป็นส่วนตัว และการวาง guardrail',
    en: 'Responsible AI in Practice',
    summary: 'การทำ AI ที่ "ไม่ผิด" ไม่ใช่แค่นโยบายบริษัท — คืองานทางวิศวกรรมว่าจะวัด bias, ปกป้องข้อมูล และวางตัวกันความเสี่ยงก่อนฟีเจอร์ออกถึงผู้ใช้ได้อย่างไร',
    level: 'สูง',
    prereqLessons: ['honest-evaluation'],
    linkedModules: ['ai-security-privacy', 'responsible-ai-product'],
    teaches: [
      'อธิบาย bias ว่ามาจากข้อมูล/อัลกอริทึม/การใช้งาน และวัดได้อย่างไร',
      'รู้หลัก privacy: consent, minimization, statistical disclosure',
      'วาง red-teaming และ human-in-the-loop ให้เหมาะกับความเสี่ยง',
      'สร้าง accountability: model card + decision log'
    ],
    keywords: ['bias', 'fairness', 'privacy', 'PII', 'red teaming', 'guardrail', 'model card', 'safety'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'bias ไม่ได้ "อยู่ในอัลกอริทึม" ล้วน ๆ',
        paragraphs: [
          'อคติ (bias) เกิดได้ 3 จุด: ข้อมูล (ข้อมูลฝึกสะท้อนความเหลื่อมล้ำเดิม เช่น ตัวอย่างผู้หญิงในงานสายเทคนิคน้อย), อัลกอริทึม (optimize บาง metric จนเอียงไปกลุ่มใดกลุ่มหนึ่ง), และการใช้งาน (ผลลัพธ์ถูกใช้กับกลุ่มที่ไม่ได้ตั้งใจ) — ความสำคัญคือ "bias" แปลว่าผลลัพธ์ไม่ยุติธรรม Launch ตาม metadata เช่น การกระจายผลตามกลุ่ม เป็นมาตรฐาน',
          'การวัด fairness ไม่มี "คำตอบเดียวถูก": ใช้ group parity (ผลเท่ากันทุกกลุ่ม) แต่บางงาน (เช่น คัดกรองความเสี่ยง) กลุ่มต่างกันย่อมได้ผลต่างกันตามความจริง — จึงต้องเลือก metric fairness ให้กับ โดเมนและค่าใช้จ่าย และเปิดเป็น "การตัดสินใจ" ที่บันทึกไว้ ไม่ใช่ตัวเลขที่แค่ dash'
        ],
        example: {
          title: 'ตัวอย่างที่จับต้องได้',
          body: 'โมเดลกรอง resume ที่แม่นรวม 92% แตะ แม่น 88% ในผู้หญิง 96% ในผู้ชาย — รวมเลขเก่ง แต่ความเหลื่อมล้ำนี้คือ "harm" ที่ต้องเปิดซักถาม และถ้าเกิดจากข้อมูล (resume ตัวอย่างผู้หญิงน้อย) ก็แก้ที่ data มากกว่าตัวโมเดล'
        }
      },
      {
        heading: 'privacy: หลักที่ทำให้ "ไม่หล่น" ตามกฎ',
        paragraphs: [
          'หลักการ: (1) data minimization — เก็บเฉพาะที่จำเป็น, (2) consent & transparency — บอกว่าข้อมูลถูกใช้ทำอะไร, (3) anonymization/pseudonymization — ลดการย้อนกลับบุคคล (แต่ระวัง: "ลบชื่อ" ไม่พอ ถ้า feature หลายตัวรวมกันระบุตัวได้ — re-identification), (4) access control — จำกัดการเห็นตามสิทธิ์',
          'ระบบที่เรียก LLM กับข้อมูลผู้ใช้ต้องไม่ส่งข้อมูลอ่อนไหวออกไปโดยไม่จำเป็น: อาจต้อง self-host โมเดลหรือใช้ tier ที่สัญญาไม่เก็บข้อมูล และห้าม log PII (ดูบทก่อนหน้านี้ว่า log อะไรได้) — วิธีตรวจ: ทำ red team ขั้น "ทดสอบหาข้อมูลรั่ว" ก่อน launch'
        ]
      },
      {
        heading: 'red teaming และการวาง human-in-the-loop',
        paragraphs: [
          'Red team = จงใจโจมตีระบบเพื่อหา failure (prompt injection, ส่งผ่านข้อมูลภายใน, bypass guardrail) ก่อนผู้ไม่ประสงค์ดีทำจริง ควรทำกับทั้ง prompt, tool และข้อมูล — รวมถึงทดสอบ "อยู่ในกรอบงาน" ว่า prompt ที่ malicious แทรกมาจากรากถูกกันหรือยัง — และนำผลมาเป็นชุด regression eval',
          'ระดับ human review ขึ้นกับความเสี่ยง: งาน harmless (สรุป) → sample 20-100% ตามงบ; งาน sensitive (การเงิน/สุขภาพ/การตัดสินใจบุคคล) → ทุกเคสก่อน "action" และจุดที่ต้องอนุมัติ (high-impact tool) ต้อง human approval — human-in-the-loop คือสถาปัตยกรรม (วงจรใน workflow) ไม่ใช่การ "ดูได้ในแชท"'
        ]
      },
      {
        heading: 'accountability: ขอให้ "อธิบายได้" ไม่ใช่แค่ "แม่น"',
        paragraphs: [
          'สิ่งที่ทำให้ระบบ "รับผิดชอบได้" คือบันทึกการตัดสินใจ: model card (จุดประสงค์/ขอบเขต/ข้อมูล/ข้อจำกัด/ผล fairness), decision log (เหตุผลของ model/prompt ที่เลือก ใครตัดสิน เมื่อไร), version control ของทุกสิ่ง (code, data, prompt, model), และ runbook ของความล้มเหลว — เมื่อมีผู้เสียหายหรือหน่วยงานถาม คุณต้องตอบได้ว่า "ทำไมถึงตอบแบบนี้"',
          'มุมมองเชิงผลิตภัณฑ์: อย่าเปิดฟีเจอร์ AI ทั่วทุกที่พร้อมกัน เริ่มยัง ฟีเจอร์/กลุ่ม/ความเสี่ยงต่ำ (canary ด้านเสี่ยง เช่น พื้นที่ไม่มี harm หนัก) แล้วค่อยขยายเมื่อ measure ผ่าน — guardrail metric และเกณฑ์หยุด (stop condition) ต้องนิยามก่อน launch ไม่ใช่หลัง'
        ],
        callout: {
          label: 'ACCOUNTABLE',
          text: 'ถ้าอธิบาย "ทำไมเป็นแบบนี้ / ถ้าพังควรทำยังไง / ใครรับผิดชอบ" ไม่ได้ แสดงว่ายังไม่พร้อมปล่อย ไม่ว่า accuracy จะกี่เปอร์เซ็นต์'
        }
      }
    ]
  },
  {
    id: 't-product-metrics',
    number: 'T.19',
    slug: 'ai-product-metrics',
    phase: 'impact',
    title: 'AI product: เปลี่ยนความสามารถเป็นคุณค่าทางธุรกิจที่วัดได้',
    en: 'Metrics for AI Products',
    summary: 'เทคนิคเก่งยังไม่พอ ถ้าไม่มี "ตัวเลขที่ผู้ใช้/บริษัทสนใจ" — เข้าใจการตั้ง north-star, การเชื่อมโมเดล metric กับ metric ธุรกิจ และการทำ experiments กับ AI',
    level: 'กลาง',
    prereqLessons: ['honest-evaluation', 'observability-and-drift'],
    linkedModules: ['ai-system-design', 'responsible-ai-product'],
    teaches: [
      'แยก model metric กับ business metric และเชื่อมทั้งสอง',
      'ตั้ง north-star + leading/lagging สำหรับฟีเจอร์ AI',
      'ออกแบบ experiment (A/B/canary) ที่ AI-specific อย่างถูกต้อง',
      'นำเสนอ ROI: ต้นทุน/คุณภาพ/เวลา trade-off แก่ stakeholders'
    ],
    keywords: ['product', 'north star', 'business metric', 'ROI', 'A/B test', 'experimentation', 'cost quality'],
    updated: 'ต.ค. 2026',
    sections: [
      {
        heading: 'model metric ≠ business metric',
        paragraphs: [
          'โมเดล "แม่น 95%" อาจไม่เปลี่ยนยอดขายเลย ถ้า metric ผิดจากที่ธุรกิจต้องการ ขั้นตอนคือ: ตั้ง north-star (ผลที่ผู้ใช้/ธุรกิจเห็นจริง เช่น "ลูกค้าตอบเสร็จเร็วขึ้น X นาที") แล้วแปลงลงเป็น model metric (เช่น correctness, completeness ของ draft) — ให้ model metric ทำหน้าที่ "proxy" ของ business value ที่ตรวจด้วย funnel ของ product',
          'ตัวอย่าง: ผู้ช่วยสรุปอีเมล — model metric: BLEU/faithfulness; business metric: เวลาที่ผู้ใช้เปิดอีเมลต่อวัน, จำนวนอีเมลที่ตอบจบ; north-star: "ชั่วโมงที่ประหยัดได้ต่อคน/สัปดาห์" โมเดลเก่งแต่คนใช้น้อย = metric model ดี แต่ product metric แย่ — อย่าสับสน'
        ],
        callout: {
          label: 'CONNECT IT',
          text: 'ทุก model metric ควรตอบได้ว่า "แล้วธุรกิจ/ผู้ใช้ได้อะไร" — ถ้าตอบไม่ได้ เปลี่ยน metric ใหม่ก่อน invest ต่อ'
        }
      },
      {
        heading: 'ตั้ง metrics แบบ leading/lagging และ guardrail',
        paragraphs: [
          'ติดทั้ง leading (ก่อนผลสุดท้าย: engagement ระหว่างใช้, latency, ต้นทุนต่อ request, error rate, citation rate) และ lagging (ผลท้าย: retention, task completion, การประหยัดเวลา/เงิน) — leading เป็น "พยากรณ์" ที่ต้องเตือนก่อน lagging เปลี่ยน และกำหนด guardrail metric (เช่น satisfaction/resign ไม่ตก) เพื่อไม่ให้ optimize ตัวเดียวจน hurt อีกด้าน',
          'AI-specific ที่ต้องเพิ่ม: ต้นทุนต่อ session (token/การเรียก), time-to-value (วินาทีแรกที่ได้ประโยชน์), escalation/human-review rate — เพราะฟีเจอร์ AI "ฟรี" ทาง UX แต่อัดต้นทุนและความรับผิดชอบที่ต้องเฝ้าติดตามเป็นประจำ'
        ]
      },
      {
        heading: 'experiment กับ AI: เล็กกว่าที่คิด',
        bullets: [
          'AI output ไม่ deterministic (temperature) → ตั้ง seed/fixed sampling ให้กลุ่ม experiment เทียบได้',
          'context/ระบบเปลี่ยนบ่อย (model update, prompt เปลี่ยน) → fix version สำหรับทั้ง experiment',
          'ผู้ใช้เรียนรู้จาก AI (ใช้ค่อย ๆ เปลี่ยน) → อย่าวัด "วันแรก" อย่างเดียว ให้ดู impact ระยะ 2-4 สัปดาห์',
          'snowball/network effect บางงานผลกระจาย → watch guardrail + sample ทั้งระบบ',
          'small sample + ข้อมูลไม่ปกติ → เลือก metric ที่ robust (median/p95) และใช้ experiment เข้มงวด'
        ]
      },
      {
        heading: 'นำเสนอให้ stakeholders ฟังเป็น ROI',
        paragraphs: [
          'แทนที่จะโชว์ "accuracy ขึ้น 2%" ให้เล่าเป็น: "ช่วยเวลาคน 5 นาที/วัน เฉลี่ย → ต่อเดือน x ชม./ทีม 100 คน เท่ากับ ~y ตำแหน่ง-ชั่วโมง" — พร้อมต้นทุนรวม (token/GPU/annotation) แล้วให้ trade-off ที่เป็นรูปธรรม เช่น "เพิ่ม accuracy อีก 3 จุดต้องใช้ annotation อีก 300h → คุ้มหรือไม่"',
          'ใช้ภาพ 3 ทาง: ต้นทุน / คุณภาพ / เวลา-to-market คุณเลือกปรับอันไหน — ทำให้การตัดสินใจเป็น "ธุรกิจ" ไม่ใช่ "เทค" และให้ตัวเลือกระหว่าง "คุณภาพ / ต้นทุน / เวลา" ไว้ล่วงหน้า เพราะความเชื่อใจมาจากการเห็นตัวเลขจริง ณ ช่วงเวลา (snapshot) ที่ย้อนกลับไปดูได้'
        ]
      }
    ]
  }
];
