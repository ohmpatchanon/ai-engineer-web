import type { Module } from '../types';

export const foundationModules: Module[] = [
  {
    id: 'python',
    number: '01',
    slug: 'python-for-ai',
    phase: 'foundations',
    title: 'Python สำหรับงาน AI',
    en: 'Python for AI Engineering',
    summary: 'ภาษาเดียวที่คุณจะใช้ทุกวัน ตั้งแต่ดึงข้อมูล คุยกับ API ไปจนถึงเขียน service ที่คนอื่นดูแลต่อได้',
    why: 'AI Engineer ไม่ได้เขียน Python แบบใน tutorial แต่ต้องเขียนโค้ดที่อ่านง่าย มี type, มี test และรับมือข้อมูลพังได้ ถ้าฐานภาษาดี การเรียน ML และ LLM จะเร็วขึ้นหลายเท่า',
    mentalModel: 'เขียนโค้ดให้เหมือนเครื่องมือช่าง: ชิ้นเล็ก ชัดเจน ตรวจสอบได้ และประกอบกันได้',
    duration: '1–2 สัปดาห์',
    level: 'เริ่มต้น',
    tracks: ['llm', 'ml', 'product', 'mlops'],
    outcomes: [
      'ใช้ type hints, dataclass และ Pydantic เพื่อกำหนดสัญญาของข้อมูลได้',
      'จัดการ virtual environment และ dependencies อย่าง reproducibility',
      'เขียนฟังก์ชันที่มี test และแยก side effect ออกจาก business logic',
      'เรียก HTTP API พร้อม retry, timeout และการจัดการ error ได้'
    ],
    topics: [
      { title: 'โครงสร้างภาษาและ type system', detail: 'ทำความคุ้นเคยกับ list/dict/set, slicing, comprehensions, unpacking และ type hints โดยเฉพาะ Optional, Union, Literal และ Generic ซึ่งจะเจอบ่อยในโค้ด AI' },
      { title: 'ฟังก์ชัน, โมดูล และ packaging', detail: 'แยกโค้ดเป็น package, ใช้ __init__.py, จัดการ import และสร้าง CLI ด้วย argparse หรือ Typer เพื่อให้ pipeline เรียกใช้ซ้ำได้' },
      { title: 'NumPy และ Pandas', detail: 'เข้าใจ vectorization, broadcasting, index alignment และ dtype ที่เป็นต้นเหตุของ bug เงียบ ๆ ในงานข้อมูล' },
      { title: 'I/O, API และ async', detail: 'อ่าน/เขียน JSON, CSV, Parquet, เรียก REST API และใช้ asyncio หรือ concurrency อย่างจำกัดขอบเขต เพื่อเรียก LLM หลายครั้งโดยไม่ชน rate limit' },
      { title: 'Error handling และ validation', detail: 'แยก expected error กับ bug, ใช้ Pydantic validate ข้อมูลจากภายนอก และออกแบบ retry แบบ exponential backoff พร้อม jitter' },
      { title: 'Testing และ project hygiene', detail: 'เขียน pytest, ใช้ fixtures, mock external API และตั้งโครงสร้าง src/ tests/ พร้อม README, .env.example และ Makefile' }
    ],
    lab: 'สร้าง CLI `ingest.py` ที่รับ URL หรือไฟล์ JSON, validate ด้วย Pydantic, บันทึกเป็น Parquet และมี test อย่างน้อย 3 เคส',
    deliverable: 'Repo `data-ingest-cli` พร้อม README, type hints, test ผ่าน และตัวอย่างการใช้งาน',
    checkpoint: [
      'อธิบายได้ว่า mutable default argument ทำให้เกิด bug อย่างไร',
      'เขียน generator ที่อ่านไฟล์ใหญ่ทีละบรรทัดได้',
      'แยก pure function ออกจากฟังก์ชันที่มี network I/O ได้'
    ],
    mistakes: [
      'ใช้ notebook เป็นที่เก็บ logic จนไม่สามารถ test หรือ deploy ได้',
      'จับ Exception กว้าง ๆ แล้วปล่อยให้ข้อมูลเสียไหลต่อไปเงียบ ๆ',
      'ไม่ pin dependency ทำให้โปรเจกต์พังเมื่อกลับมาเปิดอีกครั้ง'
    ],
    resources: [
      { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', kind: 'docs' },
      { title: 'Real Python: Python Type Checking', url: 'https://realpython.com/python-type-checking/', kind: 'guide' },
      { title: 'Pydantic Documentation', url: 'https://docs.pydantic.dev/latest/', kind: 'docs' }
    ],
    keywords: ['Python', 'typing', 'pytest', 'Pydantic', 'NumPy', 'Pandas'],
    quiz: [
      {
        question: 'เหตุใดจึงไม่ควรใช้ mutable object เป็นค่า default ของ argument?',
        options: ['ทำให้ type hints ผิด', 'ค่า default ถูกแชร์ระหว่างการเรียกฟังก์ชัน', 'Python ไม่รองรับ', 'ทำให้ช้ากว่าเดิมมาก'],
        answer: 1,
        explanation: 'ค่า default ถูกสร้างครั้งเดียวตอน define ฟังก์ชัน จึงถูกแชร์และอาจถูกแก้ไขสะสมระหว่างการเรียกแต่ละครั้ง'
      },
      {
        question: 'ข้อใดเหมาะสมที่สุดสำหรับข้อมูลที่มาจาก API ภายนอก?',
        options: ['ใช้ dict ต่อได้ทันที', 'ตรวจ schema ด้วย Pydantic ก่อนใช้', 'แปลงเป็น string ก่อน', 'ลบ field ที่ไม่รู้จักทั้งหมด'],
        answer: 1,
        explanation: 'Validation ที่ขอบระบบช่วยให้ error เกิดขึ้นชัดเจนและป้องกันข้อมูลผิดรูปร่างไหลลึกเข้าไปในระบบ'
      }
    ]
  },
  {
    id: 'math',
    number: '02',
    slug: 'math-for-ml',
    phase: 'foundations',
    title: 'คณิตศาสตร์ที่ต้องใช้จริง',
    en: 'Math for Machine Learning',
    summary: 'เรียนเท่าที่ใช้ ไม่ใช่ท่องสูตรทั้งเล่ม แต่ต้องเข้าใจว่าเวกเตอร์ gradient และความน่าจะเป็นกำลังบอกอะไร',
    why: 'คณิตศาสตร์คือภาษาที่ทำให้คุณ debug โมเดลได้ ไม่ใช่แค่รันโค้ดตาม tutorial เมื่อ loss ไม่ลดหรือ embedding ทำงานแปลก คุณจะรู้ว่าควรมองตรงไหน',
    mentalModel: 'Linear algebra คือการหมุน/ยืดพื้นที่, calculus คือการถามว่า “ถ้าขยับนิดหนึ่ง ผลจะเปลี่ยนเท่าไร”, probability คือการยอมรับความไม่แน่นอน',
    duration: '1–2 สัปดาห์',
    level: 'เริ่มต้น',
    tracks: ['ml', 'llm', 'mlops'],
    outcomes: [
      'คำนวณ dot product, matrix multiplication และ cosine similarity ด้วยมือและ NumPy ได้',
      'อธิบาย gradient descent และผลของ learning rate ได้',
      'แยก conditional probability, independence และ Bayes rule ได้',
      'อ่าน metric ทางสถิติ เช่น mean, variance, confidence interval อย่างระวัง'
    ],
    topics: [
      { title: 'เวกเตอร์ เมทริกซ์ และมิติ', detail: 'dot product, norm, transpose, matrix multiplication และการอ่าน shape ให้ถูก เพราะ shape mismatch คือ bug อันดับต้น ๆ ของ deep learning' },
      { title: 'Cosine similarity และระยะทาง', detail: 'ความต่างระหว่าง Euclidean distance กับ cosine similarity และเหตุใด embedding search จึงมักใช้ cosine หรือ dot product หลัง normalize' },
      { title: 'Derivative, gradient และ chain rule', detail: 'อ่าน gradient ว่าเป็นทิศทางที่ทำให้ loss เพิ่มเร็วที่สุด และเข้าใจว่าทำไม backpropagation คือ chain rule บน computational graph' },
      { title: 'Optimization', detail: 'gradient descent, learning rate, momentum และข้อจำกัดของ local minima ในพื้นที่มิติสูง โดยเน้น intuition มากกว่าการพิสูจน์' },
      { title: 'Probability และ Bayes', detail: 'conditional probability, independence, Bayes theorem, prior/likelihood/posterior และนำไปใช้กับ confusion matrix กับ uncertainty' },
      { title: 'Statistics ที่ต้องระวัง', detail: 'mean vs median, variance, sampling bias, confidence interval และ multiple comparisons ซึ่งเป็นสาเหตุให้ผลทดลองดูดีเกินจริง' }
    ],
    lab: 'ใช้ NumPy implement linear regression ด้วย gradient descent เอง แล้วเทียบผลกับ scikit-learn พร้อมกราฟ loss',
    deliverable: 'Notebook อธิบาย gradient descent ทีละขั้นพร้อมกราฟและข้อสรุปเรื่อง learning rate',
    checkpoint: [
      'อธิบายได้ว่า dot product วัดอะไร',
      'คำนวณ gradient ของ MSE อย่างง่ายได้',
      'อธิบายได้ว่าทำไม accuracy 100% บนชุดทดสอบเล็กไม่น่าเชื่อถือ'
    ],
    mistakes: [
      'เรียน proof ยาก ๆ ก่อนเข้าใจการใช้งานจริง',
      'จำสูตรแต่ไม่รู้ว่าแต่ละตัวแปรแทนอะไร',
      'คิดว่า correlation บอก causality'
    ],
    resources: [
      { title: 'Mathematics for Machine Learning (free book)', url: 'https://mml-book.github.io/', kind: 'book' },
      { title: '3Blue1Brown: Essence of Linear Algebra', url: 'https://www.3blue1brown.com/topics/linear-algebra', kind: 'video' },
      { title: 'StatQuest: Statistics Fundamentals', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9', kind: 'video' }
    ],
    keywords: ['linear algebra', 'gradient', 'probability', 'statistics', 'optimization'],
    quiz: [
      {
        question: 'Backpropagation คำนวณอะไร?',
        options: ['ค่าน้ำหนักใหม่โดยตรง', 'gradient ของ loss เทียบกับพารามิเตอร์แต่ละตัว', 'จำนวน layer ที่เหมาะสม', 'ค่า loss ต่ำสุดเสมอ'],
        answer: 1,
        explanation: 'Backprop ใช้ chain rule เพื่อหา gradient ของ loss เมื่อเทียบกับพารามิเตอร์ เพื่อให้ optimizer ปรับค่าได้'
      },
      {
        question: 'ตัวชี้วัดใดไวต่อ outliers มากที่สุด?',
        options: ['Median', 'Mode', 'Mean', 'Interquartile range'],
        answer: 2,
        explanation: 'ค่าเฉลี่ยใช้ทุกค่าหารด้วยจำนวนข้อมูล จึงถูกค่าสุดโต่งดึงได้ง่าย'
      }
    ]
  },
  {
    id: 'data',
    number: '03',
    slug: 'data-wrangling',
    phase: 'foundations',
    title: 'จัดการข้อมูลอย่างมืออาชีพ',
    en: 'Data Wrangling',
    summary: 'ข้อมูลจริงสกปรก ไม่ครบ และเปลี่ยนรูปร่างตลอดเวลา ทักษะทำความสะอาดข้อมูลคือทักษะที่ใช้บ่อยที่สุดในงาน',
    why: 'โมเดลดีแค่ไหนก็ไม่ช่วยอะไรถ้าข้อมูลผิด งาน AI ส่วนใหญ่คือการทำความเข้าใจ data contract, แก้คุณภาพข้อมูล และพิสูจน์ว่าข้อมูลที่ใช้สะท้อนโลกจริง',
    mentalModel: 'ข้อมูลทุกชุดมี “สัญญา” กับคุณ: ความหมาย หน่วย ช่วงเวลา และข้อจำกัด ถ้าสัญญาถูกทำลาย ให้หยุดก่อน',
    duration: '1–2 สัปดาห์',
    level: 'เริ่มต้น',
    tracks: ['ml', 'llm', 'product', 'mlops'],
    outcomes: [
      'ตรวจ profiling และ quality issue ของ dataset ได้อย่างเป็นระบบ',
      'ทำ cleaning, joins, groupby และ time-window aggregation ด้วย pandas ได้',
      'บันทึกข้อมูลเป็น Parquet และออกแบบ schema ที่สื่อความหมาย',
      'ตรวจ data leakage ก่อนนำไป train ได้'
    ],
    topics: [
      { title: 'Data profiling', detail: 'ตรวจ missingness, cardinality, distribution, duplicate และค่าที่ผิดช่วง ก่อนตัดสินใจแก้ ควรรู้ว่าข้อมูล “ควร” เป็นอย่างไร' },
      { title: 'Cleaning และ schema', detail: 'จัดการ null, ชนิดข้อมูล, หน่วย, timezone และ categorical encoding อย่างชัดเจน พร้อมบันทึกการเปลี่ยนแปลง' },
      { title: 'Joins และ groupby', detail: 'เข้าใจ one-to-many, many-to-many, duplicate จาก join และการ aggregate ตาม entity/เวลา เพื่อไม่ให้เกิดตัวเลขพอง' },
      { title: 'Time series พื้นฐาน', detail: 'resampling, rolling window, lag feature และการแบ่ง train/test ตามเวลาเพื่อไม่ให้เห็นอนาคต' },
      { title: 'Parquet และ data lake', detail: 'ข้อดีของ columnar format, partition, compression และการจัดการ schema evolution ในงานจริง' },
      { title: 'Data leakage', detail: 'leakage จาก target, จากเวลา, จาก preprocessing ก่อน split และจาก duplicate ระหว่าง train/test' }
    ],
    lab: 'ใช้ชุดข้อมูล e-commerce สมมติ: หา data quality issues, สร้างตารางยอดขายรายสัปดาห์ และเขียน data dictionary',
    deliverable: 'Notebook + `clean.py` ที่ reproduce ผลได้ และ data dictionary 1 หน้า',
    checkpoint: [
      'อธิบายได้ว่า missing value แบบ MCAR/MAR/MNAR ต่างกันอย่างไร',
      'ตรวจได้ว่า join ทำให้แถวเพิ่มผิดปกติหรือไม่',
      'บอกได้ว่าทำไม random split อาจ leak ในข้อมูลเวลา'
    ],
    mistakes: [
      'เติม missing value ด้วย 0 โดยไม่ดูความหมาย',
      'ทำ preprocessing ทั้ง dataset ก่อน split',
      'เชื่อว่า duplicate คือ error ทั้งหมดโดยไม่ตรวจ business logic'
    ],
    resources: [
      { title: 'Pandas User Guide', url: 'https://pandas.pydata.org/docs/user_guide/', kind: 'docs' },
      { title: 'Great Expectations Documentation', url: 'https://docs.greatexpectations.io/', kind: 'docs' },
      { title: 'Pandas: Time Series / Date Functionality', url: 'https://pandas.pydata.org/docs/user_guide/timeseries.html', kind: 'docs' }
    ],
    keywords: ['pandas', 'data quality', 'Parquet', 'leakage', 'EDA'],
    quiz: [
      {
        question: 'การ split ข้อมูล time series แบบสุ่มอาจทำให้เกิดอะไร?',
        options: ['โมเดลเทรนช้า', 'ข้อมูลอนาคตรั่วเข้า train', 'หน่วยความจำเพิ่ม', 'label หาย'],
        answer: 1,
        explanation: 'การสุ่มอาจทำให้แถวในอดีตและอนาคตปะปนกัน ทำให้โมเดลเห็นอนาคตระหว่างเทรนและประเมินสูงเกินจริง'
      },
      {
        question: 'ขั้นตอนใดควรทำ “หลัง” split ข้อมูล?',
        options: ['อ่านไฟล์', 'คำนวณค่า mean สำหรับ imputation', 'ตั้งชื่อคอลัมน์', 'บันทึกเป็น Parquet'],
        answer: 1,
        explanation: 'ค่า statistic ที่ใช้ preprocessing ต้องเรียนรู้จาก train set เท่านั้น ไม่เช่นนั้นข้อมูล test จะรั่วเข้าไป'
      }
    ]
  },
  {
    id: 'sql',
    number: '04',
    slug: 'sql-data-modeling',
    phase: 'foundations',
    title: 'SQL และการออกแบบข้อมูล',
    en: 'SQL & Data Modeling',
    summary: 'ภาษาที่ทำให้คุณเข้าถึงข้อมูลจริงของบริษัทได้ ตั้งแต่ query ง่าย ๆ ถึง window function ที่ใช้สร้าง feature',
    why: 'ในงานจริง ข้อมูลไม่ได้อยู่ใน CSV ที่พร้อมใช้ แต่อยู่ใน data warehouse ที่ต้อง query, join และตรวจคุณภาพเอง SQL ที่ดีช่วยให้คุณตอบคำถามธุรกิจได้เร็วและลดงาน data engineer',
    mentalModel: 'SQL คือการอธิบาย “ชุดผลลัพธ์ที่ต้องการ” ไม่ใช่ลำดับการทำงาน จึงต้องคิดเป็นตารางและความสัมพันธ์',
    duration: '1–2 สัปดาห์',
    level: 'เริ่มต้น',
    tracks: ['ml', 'mlops', 'llm'],
    outcomes: [
      'เขียน SELECT, JOIN, GROUP BY, HAVING และ CTE เพื่อตอบคำถามธุรกิจได้',
      'ใช้ window function สำหรับ ranking, running total และ cohort analysis',
      'อ่าน query plan เบื้องต้นและรู้ว่า index ช่วยอะไร',
      'ออกแบบตาราง normalized และ analytics table ได้เหมาะสมกับงาน'
    ],
    topics: [
      { title: 'Relational model', detail: 'primary key, foreign key, cardinality และ normalization ระดับที่เพียงพอต่อการออกแบบ schema ที่ไม่ซ้ำซ้อน' },
      { title: 'Joins อย่างเข้าใจ', detail: 'INNER, LEFT, FULL และ cross join พร้อมกับดักจาก multiple matches ที่ทำให้ยอดรวมเกินจริง' },
      { title: 'Aggregation และ CTE', detail: 'GROUP BY, HAVING, subquery และ CTE เพื่อแบ่งปัญหาซับซ้อนเป็นขั้นตอนที่อ่านออก' },
      { title: 'Window functions', detail: 'ROW_NUMBER, RANK, LAG, LEAD, SUM OVER และpartition/order ที่ใช้สร้าง feature และ cohort table' },
      { title: 'Index และ query plan', detail: 'อ่าน EXPLAIN, เข้าใจ scan vs index lookup และรู้ว่า selectivity ส่งผลต่อประสิทธิภาพอย่างไร' },
      { title: 'Analytics modeling', detail: 'star schema, fact/dimension, incremental table และการออกแบบตารางให้ทีม ML ใช้ซ้ำได้' }
    ],
    lab: 'จาก schema คำสั่งซื้อ เขียน query 5 ข้อ: ยอดขายรายเดือน, ลูกค้าใหม่, cohort retention, top product ต่อหมวด และหาลูกค้าที่ซื้อซ้ำภายใน 30 วัน',
    deliverable: 'ไฟล์ `.sql` พร้อม comment อธิบาย logic และผลลัพธ์ที่ตรวจสอบแล้ว',
    checkpoint: [
      'อธิบายความต่างของ WHERE กับ HAVING ได้',
      'เขียน query หา second highest salary ต่อ department ได้',
      'บอกได้ว่า LEFT JOIN กับ filter ใน WHERE ทำให้ผลเปลี่ยนอย่างไร'
    ],
    mistakes: [
      'ใช้ SELECT * ใน production query',
      'ลืมตรวจ duplicate หลัง join แล้วสรุปยอดผิด',
      'ใช้ DISTINCT เพื่อกลบปัญหา join โดยไม่เข้าใจสาเหตุ'
    ],
    resources: [
      { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', kind: 'tutorial' },
      { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', kind: 'tutorial' },
      { title: 'Use The Index, Luke!', url: 'https://use-the-index-luke.com/', kind: 'book' }
    ],
    keywords: ['SQL', 'JOIN', 'window function', 'data modeling', 'query plan'],
    quiz: [
      {
        question: 'ต้องการเก็บทุกแถวจากตาราง orders แม้ไม่มีลูกค้าที่ตรงกัน ควรใช้ join ใด?',
        options: ['INNER JOIN', 'LEFT JOIN จาก orders', 'RIGHT JOIN จาก customers', 'CROSS JOIN'],
        answer: 1,
        explanation: 'LEFT JOIN จาก orders จะรักษาทุกแถวของ orders และเติม NULL เมื่อไม่พบลูกค้าที่ตรงกัน'
      },
      {
        question: 'Window function ต่างจาก GROUP BY อย่างไร?',
        options: ['ใช้ได้กับตัวเลขเท่านั้น', 'ไม่ลดจำนวนแถวผลลัพธ์', 'เร็วกว่าเสมอ', 'ใช้แทน JOIN ได้'],
        answer: 1,
        explanation: 'Window function คำนวณข้ามกลุ่มแต่ยังคงรายละเอียดของแต่ละแถวไว้ ในขณะที่ GROUP BY ยุบแถวเป็นกลุ่ม'
      }
    ]
  },
  {
    id: 'software',
    number: '05',
    slug: 'software-engineering',
    phase: 'foundations',
    title: 'วิศวกรรมซอฟต์แวร์สำหรับ AI',
    en: 'Software Engineering for AI',
    summary: 'AI ที่ดีต้องเป็นซอฟต์แวร์ที่ดี: version control, test, config, logging และ API ที่ออกแบบอย่างรับผิดชอบ',
    why: 'ระบบ AI พังไม่แพ้ระบบทั่วไป แต่ debug ยากกว่า ถ้าคุณไม่มีtest ไม่มี log ที่ดี และไม่รู้ว่าโค้ดเวอร์ชันไหนทำงานอยู่ คุณจะเสียเวลาเป็นวันกับปัญหาที่ควรใช้เวลาไม่กี่นาที',
    mentalModel: 'ทุก experiment ต้อง reproduce ได้; ทุก service ต้องสังเกตได้; ทุก secret ต้องไม่อยู่ใน Git',
    duration: '1–2 สัปดาห์',
    level: 'เริ่มต้น',
    tracks: ['llm', 'ml', 'product', 'mlops'],
    outcomes: [
      'ใช้ Git branch, rebase และ pull request ได้อย่างมั่นใจ',
      'ออกแบบ API ด้วย FastAPI พร้อม validation และ error contract',
      'จัดการ config, secret และ environment variable อย่างปลอดภัย',
      'เขียน structured logging และ test ที่มีประโยชน์จริง'
    ],
    topics: [
      { title: 'Git workflow', detail: 'branch, commit ที่มีความหมาย, merge vs rebase, conflict resolution และการเขียน PR description ที่ reviewer เข้าใจ' },
      { title: 'Testing pyramid', detail: 'unit test สำหรับ logic, integration test สำหรับขอบระบบ และ smoke test ก่อน deploy โดยไม่พยายาม test ทุกอย่างเท่ากัน' },
      { title: 'API design', detail: 'REST endpoint, request/response schema, status code, idempotency และ error message ที่ช่วยให้ client แก้ปัญหาได้' },
      { title: 'Config และ secrets', detail: '12-factor config, .env, secret manager และการแยก dev/staging/prod อย่างชัดเจน' },
      { title: 'Logging และ observability', detail: 'structured log, correlation ID, log level และการไม่ log ข้อมูลส่วนบุคคลหรือ prompt ที่มี sensitive data' },
      { title: 'Code review และ documentation', detail: 'เขียน README ที่รันได้จริง, architecture note, ADR และ review checklist สำหรับงาน AI ที่มีความไม่แน่นอนสูง' }
    ],
    lab: 'แปลง notebook ทำนายราคาบ้านเป็น FastAPI service พร้อม validation, test, Dockerfile และ README ที่คนใหม่รันตามได้ภายใน 10 นาที',
    deliverable: 'Repo service พร้อม CI test และ API documentation',
    checkpoint: [
      'อธิบายได้ว่า merge กับ rebase ต่างกันเมื่อไรควรใช้',
      'บอกได้ว่า secret หลุดเข้า Git แล้วต้องทำอะไร',
      'ออกแบบ error response ที่ไม่เปิดเผย internals ได้'
    ],
    mistakes: [
      'commit ทุกอย่างเป็น “update” ทำให้ย้อนประวัติไม่ได้',
      'เก็บ API key ไว้ใน notebook แล้ว push ขึ้น GitHub',
      'test เฉพาะ happy path'
    ],
    resources: [
      { title: 'Pro Git (free book)', url: 'https://git-scm.com/book/en/v2', kind: 'book' },
      { title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/', kind: 'docs' },
      { title: 'The Twelve-Factor App', url: 'https://12factor.net/', kind: 'guide' }
    ],
    keywords: ['Git', 'FastAPI', 'testing', 'logging', 'secrets'],
    quiz: [
      {
        question: 'ถ้า API key ถูก commit ขึ้น Git แล้ว วิธีที่ถูกต้องที่สุดคือ?',
        options: ['ลบ commit ล่าสุด', 'revoke key แล้วออก key ใหม่ จากนั้นล้างประวัติ', 'เปลี่ยนชื่อไฟล์', 'เพิ่ม .gitignore'],
        answer: 1,
        explanation: 'เมื่อ secret ถูกเผยแพร่แล้วต้องถือว่าหลุดและ revoke ทันที การลบประวัติอย่างเดียวไม่เพียงพอ'
      },
      {
        question: 'Unit test เหมาะกับสิ่งใดที่สุด?',
        options: ['ตรวจว่า third-party API ทำงาน', 'ตรวจ logic ที่แยกออกมาได้', 'วัดคุณภาพคำตอบ LLM', 'ทดสอบ network latency'],
        answer: 1,
        explanation: 'Unit test ควรเร็วและแยก dependency ภายนอกออก เพื่อบอกว่า logic ภายในถูกต้องหรือไม่'
      }
    ]
  }
];
