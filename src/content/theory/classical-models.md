---
id: "t-classical"
number: "T.04"
slug: "classical-models"
phase: "core-ml"
title: "โมเดลคลาสสิก: linear ถึง ensambles และวิธีเลือก"
en: "Classical Models Explained"
summary: "ไม่ใช่ทุกปัญหาต้องใช้ deep learning — เข้าใจ linear regression, logistic regression, decision tree, random forest และ gradient boosting ว่าแต่ละตัวเก่งอะไรและพังตรงไหน"
level: "เริ่มต้น"
prereqLessons: ["how-models-learn", "honest-evaluation"]
linkedModules: ["classical-machine-learning"]
teaches: ["อธิบายหลักของแบบจำลองแต่ละตระกูลและ trade-off", "เลือก \"โมเดลแรก\" ที่ควรลองจากขนาดข้อมูลและความต้องการอธิบายผล", "เข้าใจความต่างระหว่าง tree-based กับ linear ในเรื่อง scale และ collinearity ของ feature", "รู้ว่าทำไม gradient boosting มักชนะที่นี่ แต่เสียค่า interpretability"]
keywords: ["linear regression", "logistic regression", "decision tree", "random forest", "gradient boosting", "XGBoost", "scikit-learn"]
updated: "พ.ย. 2026"
---
## ทำไมโมเดลคลาสสิกยังชนะในงาน tabular

ไม่ใช่ทุกปัญหาต้องใช้ deep learning — โมเดลคลาสสิกยังเป็นตัวเลือกหลักสำหรับข้อมูลตาราง (tabular) เพราะง่าย, อธิบายได้, ลงทุนน้อยและเทรนเร็ว เหมาะกับข้อมูลขนาดเล็กถึงขนาดกลางและงานที่ต้องตัดสินใจแบบอธิบายได้ ข้อเสียของ deep learning ในงานแบบนี้คือต้องการข้อมูลมากและอธิบายยากไม่คุ้มกว่าผลลัพธ์ที่ได้
งาน tabular คือข้อมูลที่อยู่ในตาราง เช่น ค่าใช้จ่ายของผู้ใช้, คะแนนความเสี่ยง, หรือยอดสั่งซื้อ โมเดลคลาสสิกถูกออกแบบมาให้เข้าใจระดับของคอลัมน์ชัดเจนและทำ feature engineering ได้ตรงประเด็น เช่น สร้าง feature "days_since_last_purchase" จะช่วยโมเดล linear ดูต้นในภาพรวมได้ง่ายยิ่งกว่า linear layer
อย่างไรก็ตาม ข้อจำกัดที่ต้องยอมรับคือ โมเดลคลาสสิกมองภาพรวมแบบสถิติ static จึงไม่เก่งในการเรียนรู้ตัวตนของแต่ละตัวอย่างที่เปลี่ยนแปลงไปตามเงื่อนไข (เช่น สินค้าคนเดียวกันในตลาดคนละเป้า) แบบเช่นการจดจำหลายครั้งที่ต่อเนื่องไหม ไม่เศร้า พวกมันเก่งที่สุดในโจทย์ที่ข้อมูลเรียบง่าย, ปริมาณเหมาะสม, และคำนวณง่าย อย่าเอาโจทย์ที่ต้องใช้โครงสร้างลำดับไปชนะโจทย์อื่น
trade-off ที่ต้องเข้าใจคือ โมเดลที่พื้นฐาน > bias ต่ำแต่เหนื่อยที่จะใช้ เช่น linear regression อ่านกฎ dimensionality สะสม ’aweted กับ boosting tree ที่ bias ต่ำแต่ต้องจูนยากและต้องทดลองซ้ำ ๆ ของ XgBoost, lightgbm, catboost โมเดลที่แม่นที่สุดใน lab อาจมีค่าอธิบายยาก เกินกว่าจะเปิด deployment ได้ในเชิงปฏิบัติและกฎระเบียบ งานที่ต้องอธิบายกับผู้ใช้ (เช่น สินเชื่อและสวัสดิการ) อาจยอมใช้ linear/tree เดี่ยวที่อธิบายได้ ดีกว่าไล่ค่าประสิทธิภาพสูงสุด
แนวทางปฏิบัติที่แนะนำคือ เริ่มด้วย baseline ที่ใช้โมเดลง่าย (linear/logistic หรือ tree เดี่ยว) แล้วค่อยเทียบกับ boosting/ensembles บน validation ทุกครั้ง หันมาใช้ deep learning สำหรับภาพ เสียง และข้อความ หรือข้อมูลที่มีความเป็นลำดับสูง สมมติฐานนี้ทำให้การเริ่มต้นและ debug ง่ายขึ้นโดยไม่เสียโจทย์

## linear regression: หาเส้นตรงและอ่านค่าสัมประสิทธิ์

Linear regression หาเส้นตรง (ใน 1 มิติ) หรือ hyperplane (ในหลายมิติ) ที่ error รวมน้อยที่สุดในแง่กำลังสอง (least squares) โมเดลนี้อ่านง่าย: coefficient แต่ละตัวบอก "เมื่อ feature นั้นเพิ่ม 1 หน่วย ผลตอบเพิ่มเท่าไร ถ้าตัวอื่นคงที่" จุดอ่อนคือสมมุติความสัมพันธ์เชิงเส้น — ถ้าเป็นกราฟโค้ง ต้องแปลง feature (เช่น log, square) ก่อน
คำว่า collinearity (ความซ้ำของ feature) มีผลตรง ๆ ว่า ถ้า feature สองตัวคล้ายกันมาก (เช่น น้ำหนักกิโลกรัม กับ ปอนด์) coefficient จะสั่นและไม่น่าเชื่อถือ แม้ prediction ยังแม่น — อ่าน "ความสำคัญ" จาก coefficient ต้องตรวจ multicollinearity ก่อนว่ามี feature ที่คล้ายกันมากหรือไม่
ในโลกจริง ถ้า linear ดูง่ายเกินไปอาจเกิด underfitting ดังนั้นทางเลือกคือเพิ่ม feature ใหม่ตามเหตุผล (interaction, log, square) หรือลองโมเดลที่เหมาะกว่าแทนที่จะรีบเพิ่มความซับซ้อนหรือขยายขนาด linear แบบสุ่ม
เคล็ดลับเชิงปฏิบัติคือ อ่าน coefficient พร้อมช่วงความไม่แน่นอน (confidence interval) และดูค่าตามการแปลงของข้อมูลก่อน trust ค่าความสำคัญ เช่น การล้างค่าด้วย dummy variable / one-hot จะเปลี่ยน coefficient โดยไม่changing ความสามารถการทำนาย ดังนั้นการเปรียบเทียบ coefficient ข้ามเวอร์ชันต้องระวังเรื่องข้อมูลที่มีการให้รหัสเดียวกันหลบซ่อนอยู่
linear regression เหมาะเป็น baseline สำหรับทุกงาน เพราะง่าย เร็ว และเป็นการวัด floor ของโจทย์ที่ดีกว่าการไปจูนเงียบ ๆ ใด ๆ ให้ใครอายต่อหน้าผู้ตรวจสอบ (ผู้ใช้, ลูกค้า) โมเดลที่แม่นกว่าแต่ไม่รู้ว่าทำไมแม่น จึงเป็น narrative ที่ต้องระวัง เมื่อใดก็ตามที่โมเดลไม่ใช่โจทย์ deep learning มีแต่ tabular และต้องการการอธิบาย, linear regression พร้อม feature engineering ก็เป็นตัวเลือกหลักแล้ว
### สูตร: แบบจำลองเส้นตรงแบบ least squares

ŷ = w · x + b   |   MSE = (1/n) Σ (ŷ − y)²

> w คือ weight/ความชัน, b คือ bias/จุดตัด, ŷ คือค่าที่ทำนาย, y คือค่าจริง — ต้องการหา w, b ที่ทำให้ MSE น้อยที่สุด (เปรียบเหมือนโน้มเอียงโมเดลให้ตรงจุดเชิงวิเคราะห์ได้)

## logistic regression: baseline ของ classification ที่เข้าใจง่าย

แม้ชื่อมี regression แต่ใช้จัดหมวดหมู่ (binary classification) มันคำนวณ logit แล้วผ่าน sigmoid เพื่อให้ได้ความน่าจะเป็นระหว่าง 0-1 จุดแข็งคือเรียบง่าย แก้ด้วย feature เพิ่มได้ และให้ค่าความมั่นใจดีพอเป็น baseline เสมอ หลายทีมใช้เป็น "โมเดลแรก" ก่อนเทรนอะไรหนัก ๆ เพื่อให้รู้ตัวเลขขั้นต่ำที่ต้องเอาชนะ เหมือนเครื่องชั่งขั้นต้นก่อนจริงจังกับโมเดลใหญ่
logistic regression มี decision boundary เป็นเส้นตรง (ในมิติของ feature) ดังนั้นมันอธิบายได้ง่ายว่าเมื่อไรจะทาย positive หรือ negative: ดูแค่สัญลักษณ์ของ linear combination ที่นอกหัวโมเดล และปรับสมการให้ชัด ลักษณะนี้คือข้อได้เปรียบเมื่อต้องอธิบายกับทีมงานที่ไม่เทคนิค ว่าทำไมโมเดลตัดสินแบบนั้น
คำเตือนสำคัญ: logistic regression สมมุติความสัมพันธ์เป็นเส้นตรงใน log-odds ทุกครั้ง ถ้า feature แยกแบบไม่เป็นเส้นตรง (เช่น หนึ่ง cluster หมุนหรือเป็นวง) logistic จะพ่ายให้ tree มี remedy ที่สำคัญคืออย่าแปลว่า "โมเดลไม่ดี" ทั้งที่จริงคือ "เครื่องมือไม่ตรงงาน" ให้เพิ่ม feature, interaction, หรือลอง tree ก่อนตัดสินใจเปลี่ยนโมเดล
trade-off ที่พบเจอบ่อยคือ logistic regression ต้องการข้อมูลที่ scale/center ดีและทนทานกว่า tree มาก ถ้า feature แหล่งเกลคอลัมน์โป๊ entering ไม่เหมือนกัน gradient จะสอนได้ช้า การเตรียมข้อมูลสำหรับ logistic จึงเป็นสิ่งสำคัญไม่น้อยกว่าเรื่อง feature engineering เลย
เมื่อเป็นโมเดล multi-class มักใช้ softmax regression ซึ่งเป็นอีกชื่อของ logistic regression ที่ขยายหลายคลาส โมเดลความน่าจะเป็นเหล่านี้จะอัปเดตพร้อมกันทุกคลาสมาเส้นขนานและไม่เป็นส่วนที่ส่งข้อความคล้ายข้า�vuxเสียเวลา
ให้ยึด logistic regression เป็น sanity check ของงาน classification เสมอ: ถ้าโมเดลหนัก ๆ ไม่ดีกว่า logistic พอสมควร แสดงว่าโมเดลยังไม่น่าจ้าง (ใช้อ่อนระดายน่าใช้ — ถ้าแพ้ logistic ให้สงสัยโมเดลซับซ้อนในจอกระที่เก็บ) ให้เปลี่ยนวิธีแก้ด่วนกว่าจะจูนต่อ
![Left panel: one straight line w dot x plus b cannot separate XOR. Right panel: two axis-aligned tree splits x1 and x2 separate the same points exactly](/diagrams/linear-vs-tree.svg)

*Linear boundary vs tree splits — จุดเดียวกัน: เส้นตรงเส้นเดียวแยก XOR ไม่ได้ ส่วนต้นไม้ใช้คำถามตามแกนซ้ำกันได้*

## decision tree: ถามคำถามตามกิ่งที่แตกดีที่สุด

Decision tree แยกข้อมูลด้วยคำถาม "feature ไหน ณ threshold ไหน แบ่งได้ดีที่สุด" ซ้ำลงไปเรื่อย ๆ จนถึงใบ (คำตอบ) ข้อดีคือไม่ต้องสมมุติรูปร่าง, อ่านอธิบายคนได้, และจัดการกับตัวเลข/หมวดหมู่ ได้ทั้งสองฝั่งและเข้าใจได้เลย
การวัดสสารเอาข้อมูลตาม feature+ threshold นี้ต้องสับสนัญลักษณ์มาถามเช่น feature ไหน ณ threshold ไหนแบ่งข้อมูลที่คละคลั่งที่สุดให้บริสุทธิ์ที่สุด " impurity" (ความไม่บริสุทธิ์) เช่น กลุ่มผสม spaghetti-class ระหว่าง Cheri: 1 แต่ลองจัดหลายแบบ กลุ่มบริสุทธิ์กว่า ชุดข้อมูลจะแยกมากขึ้น ถ้า impurity ลดลงเรื่อย ๆ โมเดลจะเรียนรู้การแบ่งที่อธิบายได้ (feature สำคัญ) จริง
ข้อเสียสำคัญคือ ต้นไม้อันเดียว unstable (ไม่เสถียร): ข้อมูลเปลี่ยนเล็กน้อย แต่โครงสร้างเปลี่ยนง่าย และง่ายต่อ overfit ถ้าไม่จำกัดความลึก ลองทำ tree หลาย ๆ ชุดคำตอบหาหยาบ ๆ อิสระในข้อมูลหลายตัวอย่างเพื่อทดสอบความเสถียร โมเดลที่ไม้เมื่อใส่ข้อมูลใหม่แม้แต่ห้าติมเปอร์เซ็นต์แล้วคำตอบแรงเปลี่ยน ก็คือโหมด unstable
วิธีบรรเทาคือควบคุม hyperparameter (max_depth, min_samples_leaf, pruning) และใช้ ensemble (เช่น random forest, gradient boosting) เพื่อเฉลี่ยความไม่เสถียรของต้นไม้หลายต้น พารามิเตอร์เหล่านี้จึงมีบทสำคัญในการป้องกันการ overfit ของต้นไม้เดี่ยว ๆ
ในงานจริงต้นไม้เดี่ยวมักให้ baseline ที่ใกล้เคียงกับ boosting มาก ไม่ได้เหนือกว่าในเคสที่ต้องอธิบายผลและต้องการ decision tree หลายชั้นพร้อมกัน งานที่ต้องการความโปร่งใสและการอธิบายต้องเอาความเรียบง่ายของ tree มาตรฐานที่พยายามลดความลึกให้ความจริงก่อน จากนั้นค่อยสรุปผลต่อข้อมูลจาก ensemble
```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

X, y = load_iris(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2, random_state=42)

# ลึก 3 ชั้น: อ่านง่าย เหมาะงานที่ต้องการอธิบาย, แต่ระวัง underfit
tree = DecisionTreeClassifier(max_depth=3, min_samples_leaf=10, random_state=42)
tree.fit(Xtr, ytr)
print('train', tree.score(Xtr, ytr), 'test', tree.score(Xte, yte))
```

## random forest: เฉลี่ยต้นไม้หลายต้นให้เสถียร

Random forest สร้างต้นไม้หลายร้อยต้น โดยแต่ละต้นฝึกบนข้อมูลสุ่ม (bootstrap) และสุ่ม feature บางชุดต่อการแยก (random subspace) แล้วเฉลี่ยคำตอบ ทำให้ variance ลดลงอย่างมากเมื่อเทียบกับต้นไม้ต้นเดียว มันเป็นตัวเลือกแรกที่ "ทำงานได้ดีแทบทุกที่" สำหรับ data ที่มีขนาดปานกลาง และให้ feature importance ฟรี
ทำไม random forest ถึงลด variance ได้ดีนัก เพราะต้นไม้แต่ละต้นมี bias ใกล้กัน แต่มาสะกระเจ้าเมื่อการสุ่ม feature ต่างกัน ตอนรวมคำตอบจึงชับกัน: ข้อมูลที่ไม่ชัดเจนพลาดคนละข้างทำให้ภาพรวมแม่นขึ้นโดยไม่ต้องพึ่งต้นไม้ต้นเดียวเป็นพิเศษ การผสมครั้งนี้ทำให้โมเดล robust ต่อข้อมูลที่เปลี่ยนหรือรอยรั่วทางบางจุดใน ensemble นี้
ข้อควรระวัง: feature importance จาก impurity มัก bias ต่อ feature ตัวเลขที่มีค่าหลายค่า ใช้ permutation importance หรือ SHAP เป็นตัวตรวจซ้ำเมื่อต้องใช้ decision เลือก feature จริง
random forest เป็นเครื่องแรกที่ลองเมื่อต้องการ over-specific สุดขอบคุณเบา: ถ้า boosting ต้องการจูนแบบรอบคอบแต่ random forest ให้ตัวเลขที่ดีมากเป็นการเริ่มต้นที่ดีแล้ว งานหลายครั้งอาจทำนายได้แม่นพอเทียบกับ boosting และมีค่าศึกษาในการเดินในทางอื่นโดยไม่ทดลองใหม่ครบทุกจุดการขอความเสถียรและ interpretable ในโมเดลนั้นก็สำคัญเพราะ fairness ในเชิงexplainability ดีกว่าของ boosting และ retrieval ส่งงานจริงได้
Random Forest เสียค่าใช้จ่ายเมื่อต้นไม้เต็มที่เติบโตเป็นพันต้นและกำหนดจำนวนต้นไม้ไม่มีเกลียดของ feature เหล่านี้อาจมากและ aggravate ความไม่เสถียรของโมเดลนั้นในทาง regression หมายถึงการลด variance ภาพรวม แต่ variance ก็อาจไม่ตายและแตกละเอียดเกินไป
Random Forest เป็นเครื่องแรกที่ลองเมื่อต้องการ over-specific สุดขอบคุณเบา: ถ้า boosting ต้องการจูนแบบรอบคอบแต่ random forest ให้ตัวเลขที่ดีมากเป็นการเริ่มต้นที่ดีแล้ว งานหลายครั้งอาจทำนายได้แม่นพอเทียบกับ boosting และมีค่าศึกษาในการเดินในทางอื่นโดยไม่ทดลองใหม่ครบทุกจุดการขอความเสถียรและ interpretable ในโมเดลนั้นก็สำคัญเพราะ fairness ในเชิงexplainability ดีกว่าของ boosting และ retrieval ส่งงานจริงได้

## gradient boosting: เทรนต้นไม้ที่เหลือตามลำดับ

Gradient boosting (XGBoost, LightGBM, CatBoost) ฝึกต้นไม้ทีละต้นโดยให้ต้นใหม่ "จับจุดที่ยังผิด" ของชุดก่อนหน้า ผ่าน gradient ของ loss — เหมือน team ที่แต่ละคนเก่งคนละเรื่องแล้วรวมกัน ทำให้แม่นกว่า random forest ปกติทั้ง regression และ classification จึงเป็นผู้ชนะใน tabular data เหตุการณ์ทั่วไป
ทำไม boosting จึงดีกว่าทั่วไปสำหรับ tabular มากคือ มันสามารถอ้างเนื้อหาได้แม่นแบบขั้นตอนผ่านกระบวนการเรียนรู้ที่เหมือนคน: ต้นไม้แรกคือตัวคาดการณ์หลัก ต้นไม้ถัดไปจะคาดการณ์ว่ามีอะไรผิดเป็นและยังแก้ไขส่วนที่เหลือได้สมบูรณ์ลดเป็นการวางสารแบบต่อเนื่องที่ยิ่งและ แผงวงจรจากความเก่งของโมเดลที่เหลือจึงรับการตรวจสอบ ในโลกจริง boosting คือตัวเลือกแรกของ classic ML และยังเป็นผู้เล่นที่ธรรมดาเท่ากับ neural network ในงาน tabular ทั่วไป
ต้นทุนคือ interpretability และค่า tuning: ต้องจัดการ learning rate, max depth, subsample, จำนวนรอบ และเจอ overfit ได้ไว ด้วยเหตุนี้ในงานที่ต้องอธิบายกับผู้ตรวจสอบ (เช่น credit) อาจยอมใช้ linear/tree เดี่ยวที่อธิบายได้ ดีกว่าไล่ค่าประสิทธิภาพสูงสุด
การเรียนรู้ของ XGBoost มีกลไกให้ลด loss เป็น stepwise และหยุดเมื่อ validation ดีที่สุดแล้ว ควรใช้ early stopping สำหรับปรับได้ไว แต่การตั้ง boosting ที่เหมาะสมได้รวดเร็วอาจใช้ค่าตั้งต้น เช่น lr 0.05, max_depth 6, จำนวนต้นไม้ 200 ซึ่งสำหรับงานขนาดกลาง ๆ พอฟังแล้ว พารามิเตอร์ต่าง ๆ จะต้องวัดผลด้วย validation ทุกครั้ง
trade-off ใหญ่ของ boosting มีหลายด้านกับโมเดล deep learning: สำหรับข้อมูล tabular ที่ปกติมีคอลัมน์ข้อมูลหลายสิบถึงพัน จำนวนตัวอย่างหลายพันถึงล้าน boosting ชนะเน็ต neural แม้ข้อมูลน้อยกว่าหลายเท่ามาก นั่นก็เพราะงาน tabular ต้องเรียนรู้สเต็ปแบบหยุดแสดงที่ให้ตัวเลขสำคัญที่สุดสำหรับ data แบบไม่มี location knowledge และโมเดล neural network อิง distance/relation ไม่เหมือนกับข้อมูล tabular ตรง ๆ
```python
from sklearn.ensemble import HistGradientBoostingClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

X, y = load_iris(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2, random_state=42)

gb = HistGradientBoostingClassifier(learning_rate=0.05, max_depth=4, random_state=42)
gb.fit(Xtr, ytr)
print('train', gb.score(Xtr, ytr), 'test', gb.score(Xte, yte))  # เทียบกับ tree เดี่ยว
```

## วิธีเลือกและเทียบโมเดลในงานจริง

ข้อมูล tabular ปานกลาง → เริ่ม logistic/tree แล้วเทียบกับ LightGBM; ข้อมูลรูป/ข้อความ → ใช้ deep learning เสมอ; งานเรียลไทม์เล็ก → linear ก่อนเพราะเร็วกว่า debug ง่ายกว่า และงานต้องคำตอบเป็นความน่าจะเป็น → logistic หรือ tree ที่อธิบายได้
กฎการเลือกโมเดลที่แนะนำ: (1) ตั้ง linear/logistic เป็น baseline, (2) เทียบกับ gradient boosting เพื่อดูว่าโมเดลทบทวงชนะขาดตอนที่งานนั้นต้องการ, (3) ลอง neural network เฉพาะงานที่เป็น sequential/image/text, (4) វាស់ความเหมาะสมของ interpretability ต้นทุนและความซับซ้อนทุกครั้งก่อน deploy
trade-off ที่ต้องตัดสินใจคือ performance กับ interpretability มักเผชิญกัน — boosting มักให้และทำนายแม่นกว่า แต่ใช้วิธีอ่านหมายยากกว่าและต้องเทียบกับโมเดลที่จูนโอกาสได้ไม่เอ่ยถึง ดังที่ทีมปฏิบัติจริงเงียบๆกับด้าน operative ไว้แล้ว โมเดลจะต้องทำสองร่าง (sponsored) หลายทีมใช้โมเดลสองตัว: โมเดลหนักทำงานจริง, โมเดลอธิบายเปรียบเทียบ cross-check ประกอบ
แนวทาง deployment ที่สมดุลคือ mixture ตอนตัดสินใจเรื่องสำคัญ: ใช้ boosting ทำ prediction หลัก แต่ใช้ linear/tree แสดงเหตุผลทันที และใช้ชุดข้อมูลของทีมที่ทบทวนอุปกรณ์ให้ความเป็นมิตรต่อทางแก้ปรับ
ความระวังที่ต้องจำคือ โมเดลคลาสสิกไม่ใช่เวทมนตร์เมื่อทำทุกอย่างเหมือน deep learning: งานที่มีโครงสร้าง075รูปขอสถาบันต้องเป็น sequence model ที่ดีกว่า การดัดปรุง feature engineering อาจชนะโมเดลจูนได้ ต้องดูโจทย์ธรรมชาติของข้อมูลก่อนแล้วไปเปรียบเทียบตามที่กล่าวไป
> [!CHOOSE FIRST]
> ข้อมูล tabular ปานกลาง → เริ่ม logistic/tree แล้วเทียบกับ LightGBM; ข้อมูลรูป/ข้อความ → ใช้ deep learning เสมอ; งานเรียลไทม์เล็ก → linear ก่อนเพราะเร็วกว่า debug ง่ายกว่า
