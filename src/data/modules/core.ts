import type { Module } from '../types';

export const coreModules: Module[] = [
  {
    id: 'ml-foundations',
    number: '06',
    slug: 'ml-foundations',
    phase: 'core-ml',
    title: 'รากฐาน Machine Learning',
    en: 'Machine Learning Foundations',
    summary: 'เข้าใจปัญหาให้ถูกก่อนเลือก algorithm: ข้อมูลแบบไหน เป้าหมายคืออะไร และความผิดพลาดแบบใดแพงที่สุด',
    why: 'หลายโปรเจกต์ AI ล้มเหลวเพราะแก้ผิดปัญหา ไม่ใช่เพราะโมเดลไม่เก่ง การตั้งคำถามให้ชัดและสร้าง baseline ที่ซื่อสัตย์ช่วยประหยัดเวลาได้มากกว่าการไล่ตามโมเดลใหม่',
    mentalModel: 'ML คือการหาฟังก์ชันที่ generalize จากตัวอย่าง เราไม่ได้ต้องการโมเดลที่จำ train set ได้ แต่ต้องการโมเดลที่ตัดสินใจได้บนข้อมูลใหม่',
    duration: '1–2 สัปดาห์',
    level: 'เริ่มต้น',
    tracks: ['ml', 'llm', 'product'],
    outcomes: [
      'แยกปัญหา supervised, unsupervised และ reinforcement learning ได้',
      'ตั้ง baseline ที่เรียบง่ายและวัดคุณค่าของ ML ได้',
      'อธิบาย bias–variance trade-off และ overfitting ได้',
      'เลือก loss function ให้สอดคล้องกับเป้าหมายธุรกิจได้'
    ],
    topics: [
      { title: 'ปัญหาแบบไหนใช้ ML', detail: 'งานที่กฎชัดเจนควรเขียน rule ธรรมดา ใช้ ML เมื่อ pattern ซับซ้อน ข้อมูลพอ และมีทางวัดผลลัพธ์ โดยเริ่มจากคำถาม “ตัดสินใจอะไร” ไม่ใช่ “ใช้โมเดลอะไร”' },
      { title: 'Supervised learning', detail: 'classification vs regression, label quality, imbalanced data และต้นทุนของ false positive/false negative' },
      { title: 'Unsupervised learning', detail: 'clustering, dimensionality reduction และ anomaly detection พร้อมข้อควรระวังว่าผลลัพธ์ไม่มี “คำตอบถูก” เสมอ' },
      { title: 'Train / validation / test', detail: 'แยกชุดข้อมูลตามวัตถุประสงค์, nested cross-validation และการล็อก test set ไม่ให้ถูกใช้ปรับโมเดลซ้ำ ๆ' },
      { title: 'Bias–variance และ overfitting', detail: 'อ่าน learning curve, สัญญาณ overfit/underfit และใช้ regularization, ข้อมูลเพิ่ม หรือลดความซับซ้อนได้ถูกทาง' },
      { title: 'Loss และเป้าหมายธุรกิจ', detail: 'MSE, MAE, cross-entropy, hinge loss และการเลือก metric ที่สะท้อนต้นทุนจริง เช่น การพลาดลูกค้าความเสี่ยงสูง' }
    ],
    lab: 'ตั้งสมมติฐานจาก dataset ลูกค้า churn: สร้าง baseline ด้วย rule ง่าย ๆ, train logistic regression และเปรียบเทียบกับ majority-class baseline',
    deliverable: 'Experiment note 1 หน้าที่ระบุปัญหา, metric, baseline, ผลลัพธ์ และข้อจำกัด',
    checkpoint: [
      'อธิบายได้ว่าทำไม accuracy ไม่เหมาะกับข้อมูล imbalance',
      'แยก validation กับ test set ได้',
      'บอกได้ว่าเมื่อไรควรเลือก simple model มากกว่า'
    ],
    mistakes: [
      'เริ่มจาก deep learning โดยไม่มี baseline',
      'ปรับ metric จนดูดีแต่ไม่ตรงกับเป้าหมายธุรกิจ',
      'ใช้ test set ในการเลือก hyperparameter หลายรอบ'
    ],
    resources: [
      { title: 'Google Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', kind: 'course' },
      { title: 'An Introduction to Statistical Learning', url: 'https://www.statlearning.com/', kind: 'book' },
      { title: 'scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', kind: 'docs' }
    ],
    keywords: ['supervised', 'overfitting', 'baseline', 'generalization', 'loss'],
    quiz: [
      {
        question: 'เหตุใดจึงต้องมี baseline?',
        options: ['เพื่อให้โมเดลเร็วขึ้น', 'เพื่อวัดว่า ML สร้างคุณค่าเหนือวิธีง่าย ๆ จริงหรือไม่', 'เพื่อลดจำนวน feature', 'เพื่อให้ test set ใหญ่ขึ้น'],
        answer: 1,
        explanation: 'Baseline ทำให้เราเข้าใจคุณค่าที่แท้จริงของโมเดลซับซ้อน และป้องกันการฉลองผลลัพธ์ที่แย่กว่าวิธีง่าย ๆ'
      },
      {
        question: 'สัญญาณใดบ่งชี้ overfitting?',
        options: ['train error สูงและ validation error สูง', 'train error ต่ำแต่ validation error สูง', 'ทั้งสองต่ำเท่ากัน', 'โมเดลเทรนช้า'],
        answer: 1,
        explanation: 'Overfitting คือโมเดลจำข้อมูล train ได้ดี แต่ไม่ generalize ไปยังข้อมูลใหม่ จึงเห็นช่องว่างระหว่าง error สองชุด'
      }
    ]
  },
  {
    id: 'classical-ml',
    number: '07',
    slug: 'classical-machine-learning',
    phase: 'core-ml',
    title: 'Classical ML ที่ยังใช้จริง',
    en: 'Classical Machine Learning',
    summary: 'Logistic regression, tree ensembles และ clustering ยังเป็นเครื่องมือที่เร็ว แม่นยำ และอธิบายได้ในงานจริงจำนวนมาก',
    why: 'ไม่ใช่ทุกปัญหาต้องใช้ LLM โมเดลtabular ราคาถูกกว่า เร็วกว่า และ debug ง่ายกว่ามาก การเลือกใช้ tool ให้เหมาะสมคือทักษะของ engineer จริง',
    mentalModel: 'เริ่มจากโมเดลที่อธิบายได้และถูกที่สุด ถ้าข้อมูลพิสูจน์ว่าต้องใช้โมเดลใหญ่ขึ้นค่อยเพิ่ม',
    duration: '2 สัปดาห์',
    level: 'กลาง',
    tracks: ['ml', 'product'],
    outcomes: [
      'สร้าง pipeline ด้วย scikit-learn ตั้งแต่ preprocessing ถึง prediction ได้',
      'เปรียบเทียบ logistic regression, random forest และ gradient boosting ได้',
      'ใช้ clustering และ PCA เพื่อสำรวจข้อมูลได้',
      'ตีความ feature importance อย่างระวังและอธิบายข้อจำกัดได้'
    ],
    topics: [
      { title: 'Linear และ logistic regression', detail: 'coefficient, odds, regularization L1/L2 และเหตุใดจึงเป็น baseline ที่แข็งแรงสำหรับข้อมูล tabular' },
      { title: 'Tree-based models', detail: 'decision tree, random forest และ gradient boosting (XGBoost/LightGBM) พร้อมแนวคิด bagging vs boosting' },
      { title: 'k-NN และ SVM', detail: 'distance metric, curse of dimensionality, margin และ kernel trick ในระดับ intuition' },
      { title: 'Clustering', detail: 'k-means, DBSCAN, hierarchical clustering และการเลือกจำนวน cluster อย่างมีเหตุผล' },
      { title: 'Dimensionality reduction', detail: 'PCA, t-SNE และ UMAP ใช้เพื่อสำรวจ/visualize ไม่ใช่เพื่ออ้าง causal structure' },
      { title: 'Pipelines และ model selection', detail: 'ColumnTransformer, Pipeline, GridSearchCV และการป้องกัน leakage ใน preprocessing' }
    ],
    lab: 'เปรียบเทียบ 3 โมเดลบน dataset tabular ด้วย pipeline เดียวกัน วัดผลด้วย cross-validation และสรุปว่าเลือกตัวไหนเพราะอะไร',
    deliverable: 'Notebook เปรียบเทียบโมเดล + ตาราง metric + เหตุผลการเลือกที่อ้างอิงต้นทุนธุรกิจ',
    checkpoint: [
      'อธิบาย regularization ลด overfitting ได้อย่างไร',
      'บอกข้อจำกัดของ feature importance จาก tree model ได้',
      'แยก clustering ออกจาก classification ได้'
    ],
    mistakes: [
      'fit scaler กับข้อมูลทั้งชุดก่อน cross-validation',
      'ตีความ feature importance ว่าเป็น causality',
      'เลือกโมเดลจาก accuracy อย่างเดียว'
    ],
    resources: [
      { title: 'scikit-learn: Supervised Learning', url: 'https://scikit-learn.org/stable/supervised_learning.html', kind: 'docs' },
      { title: 'XGBoost Documentation', url: 'https://xgboost.readthedocs.io/', kind: 'docs' },
      { title: 'StatQuest: Machine Learning', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF', kind: 'video' }
    ],
    keywords: ['logistic regression', 'random forest', 'XGBoost', 'clustering', 'PCA'],
    quiz: [
      {
        question: 'ข้อใดเป็นข้อดีหลักของ gradient boosting บนข้อมูล tabular?',
        options: ['ต้องการข้อมูลน้อยมาก', 'จับความสัมพันธ์ที่ไม่เป็นเส้นตรงได้ดี', 'ไม่ต้อง tune อะไร', 'ตีความ causality ได้'],
        answer: 1,
        explanation: 'Gradient boosting สร้างต้นไม้หลายต้นเพื่อแก้ข้อผิดพลาดสะสม และมักให้ผลดีกับความสัมพันธ์ซับซ้อนในข้อมูล tabular'
      },
      {
        question: 'PCA เหมาะกับข้อใดมากที่สุด?',
        options: ['พิสูจน์สาเหตุของโรค', 'ลดมิติเพื่อ visualization/compression', 'เพิ่ม label', 'แทนที่ test set'],
        answer: 1,
        explanation: 'PCA สร้างองค์ประกอบที่อธิบายความแปรปรวนได้มากที่สุด เหมาะกับการลดมิติ แต่ไม่ให้ความหมายเชิงสาเหตุ'
      }
    ]
  },
  {
    id: 'evaluation',
    number: '08',
    slug: 'evaluation-experimentation',
    phase: 'core-ml',
    title: 'Evaluation และการทดลอง',
    en: 'Evaluation & Experimentation',
    summary: 'ตัวเลขที่ดีแต่หลอกเราได้ ถ้าออกแบบการวัดผิด เรียนวิธีวัดโมเดลและผลกระทบจริงอย่างเป็นวิทยาศาสตร์',
    why: 'AI Engineer ที่ดีไม่ใช่คนที่เทรนโมเดลได้ แต่เป็นคนที่บอกได้ว่าโมเดลดีขึ้นจริงหรือไม่ มีหลักฐานอะไร และจะรู้ได้อย่างไรถ้ามันแย่ลงหลัง deploy',
    mentalModel: 'ทุก metric คือคำถามที่เราเลือกถาม ระวังการตอบคำถามแคบ ๆ แล้วคิดว่ารู้ทั้งระบบ',
    duration: '2 สัปดาห์',
    level: 'กลาง',
    tracks: ['ml', 'llm', 'product', 'mlops'],
    outcomes: [
      'เลือก metric จากต้นทุนความผิดพลาดได้',
      'อ่าน confusion matrix, ROC-AUC และ PR-AUC ได้อย่างถูกบริบท',
      'ออกแบบ cross-validation และ A/B test เบื้องต้นได้',
      'ตรวจ calibration และ statistical uncertainty ของผลลัพธ์ได้'
    ],
    topics: [
      { title: 'Confusion matrix', detail: 'precision, recall, F1, specificity และการเลือก threshold ตามต้นทุนจริง ไม่ใช่ค่า 0.5 โดยอัตโนมัติ' },
      { title: 'ROC vs PR curve', detail: 'ROC-AUC เหมาะเมื่อ class balance ใกล้เคียง ส่วน PR-AUC ให้ภาพชัดกว่าเมื่อ positive class หายาก' },
      { title: 'Calibration', detail: 'ความต่างระหว่าง “ranking เก่ง” กับ “probability เชื่อถือได้” และการใช้ reliability diagram กับ Brier score' },
      { title: 'Cross-validation', detail: 'k-fold, stratified, group และ time-series split พร้อมหลีกเลี่ยง leakage จาก preprocessing' },
      { title: 'A/B testing', detail: 'randomization, sample size, practical significance, novelty effect และการไม่หยุดทดลองเพราะผลดูดีเร็วเกินไป' },
      { title: 'ความไม่แน่นอน', detail: 'confidence interval, bootstrap และการรายงานผลที่ไม่เกินจริงเมื่อsampleเล็ก' }
    ],
    lab: 'ใช้ชุดข้อมูล imbalanced สร้างโมเดลหนึ่งตัว แล้วเปรียบเทียบ metric ที่ threshold ต่างกัน พร้อมคำนวณต้นทุนรวมของแต่ละ threshold',
    deliverable: 'Evaluation report ที่ระบุ metric, threshold, confusion matrix, calibration และข้อจำกัด',
    checkpoint: [
      'อธิบายได้ว่าเมื่อไร recall สำคัญกว่า precision',
      'เลือกใช้ PR-AUC แทน ROC-AUC ได้ถูกสถานการณ์',
      'บอกได้ว่าทำไม p-value ต่ำไม่เท่ากับผลมีคุณค่าทางธุรกิจ'
    ],
    mistakes: [
      'รายงาน accuracy บนข้อมูล imbalance',
      'เปลี่ยน metric หลังเห็นผลเพื่อให้ดูดี',
      'ถือว่า offline metric ดีเท่ากับผู้ใช้พอใจ'
    ],
    resources: [
      { title: 'scikit-learn: Metrics and scoring', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html', kind: 'docs' },
      { title: 'Google: Rules of Machine Learning', url: 'https://developers.google.com/machine-learning/guides/rules-of-ml', kind: 'guide' },
      { title: 'Trustworthy Online Controlled Experiments', url: 'https://experimentguide.com/', kind: 'book' }
    ],
    keywords: ['precision', 'recall', 'PR-AUC', 'calibration', 'A/B test'],
    quiz: [
      {
        question: 'ในระบบตรวจจับ fraud ที่พลาดเคสจริงมีต้นทุนสูง ควรให้น้ำหนัก metric ใด?',
        options: ['Precision', 'Recall', 'Specificity', 'Accuracy'],
        answer: 1,
        explanation: 'Recall วัดสัดส่วน fraud ที่จับได้ หากพลาดแล้วเสียหายมาก ต้องลด false negative โดยยอมรับ false positive ที่เพิ่มขึ้นได้'
      },
      {
        question: 'PR-AUC มีประโยชน์กว่า ROC-AUC ในกรณีใด?',
        options: ['class balance เท่ากัน', 'positive class หายากมาก', 'ข้อมูลเป็น time series', 'ไม่มี label'],
        answer: 1,
        explanation: 'เมื่อ positive class หายาก ROC-AUC อาจดูดีแม้โมเดลจับ positive ได้ไม่ดี PR-AUC จึงสะท้อนประสิทธิภาพได้ตรงกว่า'
      }
    ]
  },
  {
    id: 'features',
    number: '09',
    slug: 'features-and-leakage',
    phase: 'core-ml',
    title: 'Feature Engineering และ Leakage',
    en: 'Features & Data Leakage',
    summary: 'คุณภาพ feature กำหนดเพดานของโมเดล และ leakage คือศัตรูที่ทำให้ผลทดลองสวยเกินจริง',
    why: 'โมเดลส่วนใหญ่ในงานจริงได้ผลจาก feature ที่ออกแบบดี ไม่ใช่ architecture ที่ใหม่กว่า การเข้าใจว่า feature ใดมีอยู่ในเวลาที่จะใช้จริงคือหัวใจของระบบที่เชื่อถือได้',
    mentalModel: 'ถามทุก feature ว่า “ ณ เวลาที่ต้องทำนาย เรารู้ค่านี้จริงหรือยัง?” ถ้าคำตอบคือไม่ แสดงว่า leakage',
    duration: '1–2 สัปดาห์',
    level: 'กลาง',
    tracks: ['ml', 'llm'],
    outcomes: [
      'ออกแบบ numeric, categorical, text และ time feature ได้',
      'จัดการ categorical encoding โดยหลีกเลี่ยง leakage',
      'ตรวจจุดที่ข้อมูลอนาคตหรือ target รั่วเข้า training ได้',
      'สร้าง feature pipeline ที่ใช้ซ้ำได้ทั้ง train และ serving'
    ],
    topics: [
      { title: 'Numeric features', detail: 'scaling, log transform, binning, missing indicator และการรักษาความหมายของ outlier' },
      { title: 'Categorical encoding', detail: 'one-hot, ordinal, target encoding และความเสี่ยง leakage จาก target encoding ภายใน cross-validation' },
      { title: 'Time-based features', detail: 'lag, rolling window, recency, seasonality และการสร้าง ณ จุดเวลา (point-in-time) ให้ตรงกับ inference' },
      { title: 'Text features', detail: 'TF-IDF, n-gram และการใช้ embeddings แทน sparse feature พร้อม trade-off ด้านต้นทุนและความสามารถในการอธิบาย' },
      { title: 'Leakage taxonomy', detail: 'target leakage, temporal leakage, group leakage, duplication และ preprocessing leakage พร้อมวิธีตรวจ' },
      { title: 'Feature pipeline', detail: 'แยก transform ที่ fit ได้ออกจาก transform ที่ deterministic, บันทึก artifact และให้ train/serving ใช้สัญญาเดียวกัน' }
    ],
    lab: 'ตรวจ dataset ที่มีคอลัมน์น่าสงสัย 3 คอลัมน์ หา leakage, แก้ pipeline และเปรียบเทียบผลก่อน/หลังแก้',
    deliverable: 'Leakage audit + pipeline ที่ fit เฉพาะ train fold',
    checkpoint: [
      'อธิบาย target encoding leakage ได้',
      'ออกแบบ point-in-time feature ได้',
      'บอกได้ว่าทำไม feature สูงสุดใน importance อาจเป็นสัญญาณ leakage'
    ],
    mistakes: [
      'ใช้ค่าเฉลี่ย target ทั้ง dataset ในการ encode',
      'สร้าง rolling feature ด้วยข้อมูลอนาคต',
      'ใช้ user_id เป็น feature ทั้งที่เป้าหมายคือ generalize ไปยังผู้ใช้ใหม่'
    ],
    resources: [
      { title: 'Feature Engineering for Machine Learning (course)', url: 'https://www.coursera.org/specializations/feature-engineering', kind: 'course' },
      { title: 'Kaggle: Feature Engineering', url: 'https://www.kaggle.com/learn/feature-engineering', kind: 'course' },
      { title: 'scikit-learn: Preprocessing', url: 'https://scikit-learn.org/stable/modules/preprocessing.html', kind: 'docs' }
    ],
    keywords: ['feature engineering', 'leakage', 'encoding', 'time features'],
    quiz: [
      {
        question: 'การคำนวณ target encoding จากทั้ง dataset ก่อน cross-validation ทำให้เกิดอะไร?',
        options: ['โมเดลช้าลง', 'leakage จาก target เข้า training', 'ข้อมูลหาย', 'class imbalance ลดลง'],
        answer: 1,
        explanation: 'ค่า encoded มีข้อมูล target ของ validation/test ปนอยู่ ทำให้โมเดลเห็นคำตอบล่วงหน้าและประเมินสูงเกินจริง'
      },
      {
        question: 'ข้อใดคือ temporal leakage?',
        options: ['ใช้ยอดขายเดือนหน้าทำนายเดือนนี้', 'ใช้สีเป็น feature', 'แบ่งข้อมูลไม่เท่ากัน', 'ลบ outlier'],
        answer: 0,
        explanation: 'การใช้ข้อมูลจากอนาคตในขณะที่ ณ เวลาทำนายยังไม่รู้ค่า คือการรั่วของเวลาและทำให้ผลประเมินไม่น่าเชื่อถือ'
      }
    ]
  }
];
