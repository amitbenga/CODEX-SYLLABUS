
const UNITS_DATA = [
  {
    id: 1, week: 1, phase: "יסודות",
    title: "להבין מערכות", titleEn: "System Thinking",
    description: "איך מערכת טכנית בנויה, מה ההבדל בין שכבות, ואיך לקרוא ארכיטקטורה מבלי להיות מפתח.",
    objectives: [
      "להבחין בין Frontend, Backend ו-Database",
      "לקרוא diagram בסיסי של מערכת",
      "לזהות נקודות כשל נפוצות ב-architecture",
      "לתאר data flow של פיצ'ר פשוט"
    ],
    learnContent: [
      { heading: "מה זה בכלל 'מערכת'?", body: "כל מוצר דיגיטלי הוא אוסף של שכבות שמדברות אחת עם השנייה. ה-Frontend הוא מה שהמשתמש רואה — דפדפן, מובייל. ה-Backend הוא השרת שמעבד לוגיקה. ה-Database שומר את הנתונים. בין כל שכבה — API." },
      { heading: "Data Flow: מה קורה כשלוחצים כפתור?", body: "המשתמש לוחץ → הדפדפן שולח HTTP request ל-Backend → הbackend מריץ לוגיקה → שולח query ל-Database → מחזיר תשובה → הדפדפן מציג. כל שלב הוא נקודת כשל פוטנציאלית." },
      { heading: "ארכיטקטורה — לא רק של מפתחים", body: "כ-product builder, תפקידך לשאול: 'מה קורה אם ה-Database נפל?' או 'כמה זמן לוקח ה-request הזה?' אלו לא שאלות טכניות — הן שאלות של ownership." }
    ],
    task: {
      title: "ממפים את ה-product שלך",
      description: "בחר פיצ'ר אחד במוצר שאתה מכיר (או מדמיין). צייר diagram פשוט של ה-data flow שלו — מה נשלח, מה מתעבד, מה נשמר. השתמש בכל כלי שנוח לך (Excalidraw, נייר, Miro).",
      deliverable: "תמונה או קישור ל-diagram",
      tips: ["אל תנסה להיות מדויק — המטרה היא להבין, לא לתעד", "שאל: מה קורה אם כל שכבה נכשלת?"]
    },
    quiz: [
      { q: "משתמש לוחץ 'שמור' בטופס. מה קורה ראשון?", options: ["הנתונים נשמרים ב-Database", "הדפדפן שולח request ל-Backend", "ה-Backend שולח query ל-Database", "ה-Frontend מציג הודעת הצלחה"], correct: 1 },
      { q: "מה ההבדל בין Frontend ל-Backend?", options: ["Frontend מהיר יותר", "Frontend הוא מה שהמשתמש רואה, Backend הוא הלוגיקה בשרת", "Backend כתוב בJavaScript, Frontend ב-Python", "אין הבדל, זה אותו דבר"], correct: 1 },
      { q: "מה זה API?", options: ["שפת תכנות", "ממשק תקשורת בין שכבות המערכת", "כלי לעיצוב UI", "סוג של Database"], correct: 1 }
    ]
  },
  {
    id: 2, week: 2, phase: "יסודות",
    title: "API כשפה", titleEn: "APIs & Contracts",
    description: "לקרוא ולהבין API docs, לדעת מה לבקש ממפתחים, ולהגדיר contracts ברורים.",
    objectives: [
      "לקרוא API documentation בסיסית",
      "להבין HTTP verbs: GET, POST, PUT, DELETE",
      "להגדיר contract בין Frontend ל-Backend",
      "לזהות הבדל בין API טובה לגרועה"
    ],
    learnContent: [
      { heading: "HTTP Verbs — 4 פעלים שמספיקים", body: "GET = קח נתונים. POST = צור משהו חדש. PUT/PATCH = עדכן. DELETE = מחק. זה 90% מה-APIs שתיתקל בהן. כשמפתח אומר 'אני צריך endpoint', הוא מגדיר אחד מאלה." },
      { heading: "Contract: ההסכם הכי חשוב בצוות", body: "Contract הוא ההסכמה: 'ה-Frontend ישלח X, ה-Backend יחזיר Y'. כשה-contract ברור, Frontend ו-Backend יכולים לעבוד במקביל. כשהוא עמום — bugs ואשמות הדדיות." },
      { heading: "REST vs GraphQL — מתי אכפת לך?", body: "REST: כל resource מקבל URL משלו. GraphQL: שאילתה אחת שמחזירה בדיוק מה שביקשת. כ-PM, זה משפיע על performance ו-flexibility. אבל בפועל — תפקידך להבין מה צוותך בוחר ולמה." }
    ],
    task: {
      title: "כותבים API Contract",
      description: "בחר פיצ'ר אחד (לדוגמה: 'הוספת item לרשימה'). כתוב contract פשוט: מה ה-Frontend שולח, מה ה-Backend מחזיר, ומה קורה כשיש שגיאה.",
      deliverable: "מסמך contract קצר (אפילו בטקסט רגיל)",
      tips: ["הגדר גם error cases — מה קורה אם ה-user לא מחובר?", "תחשוב: מה ה-Frontend צריך כדי להציג את המסך הבא?"]
    },
    quiz: [
      { q: "איזה HTTP verb משמש ליצירת resource חדש?", options: ["GET", "POST", "DELETE", "PATCH"], correct: 1 },
      { q: "מה זה API contract?", options: ["חוזה משפטי", "הסכמה על מה נשלח ומה חוזר בין שכבות", "תיעוד של bugs", "שפת תכנות"], correct: 1 },
      { q: "מה ההבדל העיקרי בין REST ל-GraphQL?", options: ["GraphQL מהיר יותר תמיד", "REST ישן יותר ולכן גרוע", "REST: URL לכל resource. GraphQL: שאילתה גמישה אחת", "אין הבדל"], correct: 2 }
    ]
  },
  {
    id: 3, week: 3, phase: "יסודות",
    title: "שכבת הנתונים", titleEn: "Data Layer",
    description: "Database לא פחד — איך נתונים מאורגנים, מה זה schema, ואיך לחשוב על data modeling.",
    objectives: [
      "להבין מבנה של relational database",
      "לקרוא schema בסיסי",
      "להבחין בין SQL ל-NoSQL",
      "לחשוב על data modeling לפיצ'ר חדש"
    ],
    learnContent: [
      { heading: "Database הוא רק טבלה (בגדול)", body: "Relational database = קבוצה של טבלאות שמחוברות. Users, Orders, Products — כל אחת טבלה. הקשר ביניהן הוא foreign keys. SQL הוא השפה שמאפשרת לשאול: 'תן לי את כל הorders של user X'." },
      { heading: "Schema: מפת הנתונים", body: "Schema מגדיר: אילו עמודות יש בכל טבלה, איזה סוג נתון בכל עמודה, ואילו שדות חובה. כ-product builder, כשאתה מוסיף פיצ'ר — תמיד שאל: 'איפה זה נשמר? מה ה-schema צריך?'" },
      { heading: "SQL vs NoSQL — מתי לדאוג?", body: "SQL (Postgres, MySQL): מבנה קשיח, חזק ב-relationships ו-integrity. NoSQL (MongoDB, Firestore): גמיש, טוב לנתונים לא מובנים. בפועל: רוב startup-ים מתחילים ב-Postgres." }
    ],
    task: {
      title: "מגדירים schema",
      description: "לפיצ'ר שבחרת בשבוע 1 — הגדר את ה-schema הנדרש. אילו טבלאות? אילו עמודות? מה הקשרים ביניהן?",
      deliverable: "טבלה/diagram של schema",
      tips: ["התחל מה-entities — מה 'הדברים' במערכת?", "שאל: איזה queries תצטרך לרוץ?"]
    },
    quiz: [
      { q: "מה זה schema?", options: ["שפת תכנות", "הגדרת מבנה הנתונים — טבלאות, עמודות וסוגים", "כלי לגיבוי", "סוג של API"], correct: 1 },
      { q: "מה ההבדל בין SQL ל-NoSQL?", options: ["SQL מהיר יותר תמיד", "SQL: מבנה קשיח עם relations. NoSQL: גמיש וללא schemas קשיחים", "NoSQL עולה יותר כסף", "SQL רק ל-big data"], correct: 1 },
      { q: "כשמוסיפים פיצ'ר חדש, מה השאלה הראשונה שצריך לשאול לגבי data?", options: ["איך נראה ה-UI?", "מה הצבע של הכפתור?", "איפה הנתונים נשמרים ומה המבנה שלהם?", "כמה זה עולה?"], correct: 2 }
    ]
  },
  {
    id: 4, week: 4, phase: "יסודות",
    title: "Auth ו-Security", titleEn: "Auth & Security",
    description: "לא להיבהל מ-security — להבין tokens, sessions ואיך מגנים על endpoints.",
    objectives: ["להבין את ההבדל בין authentication ל-authorization", "לדעת מה זה JWT", "לזהות security risks נפוצים", "לשאול את השאלות הנכונות על הרשאות"],
    learnContent: [{ heading: "Authentication vs Authorization", body: "Authentication = מי אתה? Authorization = מה מותר לך? כניסה עם סיסמה = authentication. 'רק admins יכולים למחוק' = authorization." }],
    task: { title: "מיפוי הרשאות", description: "מפה את מודל ההרשאות של המוצר שלך: מי יכול לעשות מה?", deliverable: "טבלת roles & permissions", tips: ["חשוב על edge cases: מה קורה כש-user מנסה לגשת לנתוני user אחר?"] },
    quiz: [
      { q: "מה ההבדל בין authentication ל-authorization?", options: ["אותו דבר", "Authentication = זיהוי, Authorization = הרשאה", "Authorization = זיהוי, Authentication = הרשאה", "רק ל-enterprise"], correct: 1 },
      { q: "מה זה JWT?", options: ["שפת תכנות", "JSON Web Token — טוקן לזיהוי משתמש", "כלי UI", "סוג database"], correct: 1 },
      { q: "איזה security risk הוא הנפוץ ביותר?", options: ["SQL Injection", "עיצוב גרוע", "מהירות איטית", "עלות שרת גבוהה"], correct: 0 }
    ]
  },
  {
    id: 5, week: 5, phase: "בנייה",
    title: "Frontend Architecture", titleEn: "Frontend Arch",
    description: "איך מבנה ה-UI משפיע על מהירות, maintainability ו-developer experience.",
    objectives: ["להבין component-based architecture", "לדעת מה זה state management", "לקרוא component tree", "לזהות מתי performance נפגע"],
    learnContent: [{ heading: "Components — הלבנים של ה-UI", body: "כל UI מורכב מ-components — חלקים עצמאיים שמתחברים. Button, Form, Card. כ-PM, כשאתה מבקש שינוי UI, שאל: 'האם זה component קיים שצריך שינוי, או component חדש?'" }],
    task: { title: "Component audit", description: "פרק מסך אחד במוצר שלך ל-components. כמה יש? איזה חוזר?", deliverable: "רשימת components עם הסבר קצר", tips: ["חפש כפילויות — component שחוזר 5 פעמים שווה reuse"] },
    quiz: [
      { q: "מה זה component-based architecture?", options: ["שיטת תמחור", "בניית UI מחלקים עצמאיים ורב-שימושיים", "סוג database", "framework לmobile"], correct: 1 },
      { q: "מה זה state management?", options: ["ניהול צוות", "ניהול נתוני UI שמשתנים עם הזמן", "גיבוי נתונים", "ניהול שרתים"], correct: 1 },
      { q: "מתי performance של Frontend נפגעת?", options: ["כשיש יותר מ-3 צבעים", "כשיש renders מיותרים ו-bundle גדול מדי", "כשיש יותר מ-10 pages", "כשה-font לא נטען"], correct: 1 }
    ]
  },
  {
    id: 6, week: 6, phase: "בנייה",
    title: "CI/CD ו-Infrastructure", titleEn: "DevOps Basics",
    description: "מה קורה בין 'commit' ל-production — pipelines, environments ו-deployment.",
    objectives: ["להבין את שלבי ה-CI/CD pipeline", "לדעת ההבדל בין environments", "לזהות bottlenecks ב-deployment process", "לשאול שאלות נכונות על infrastructure"],
    learnContent: [{ heading: "CI/CD — האוטומציה שמשחררת אותך", body: "CI = Continuous Integration: כל commit מריץ tests אוטומטית. CD = Continuous Deployment: אם tests עברו, הקוד נפרס אוטומטית. זה מה שמאפשר לשחרר features מהר ובביטחון." }],
    task: { title: "מיפוי deployment pipeline", description: "מפה את ה-deployment process הנוכחי: מה קורה מ-commit ועד production?", deliverable: "diagram של pipeline", tips: ["זהה: איפה זה לוקח הכי הרבה זמן? איפה הכי הרבה bugs נתפסים?"] },
    quiz: [
      { q: "מה זה CI?", options: ["Corporate Interface", "Continuous Integration — אינטגרציה ובדיקות אוטומטיות בכל commit", "Customer Intelligence", "Code Inspector"], correct: 1 },
      { q: "מה ההבדל בין staging ל-production?", options: ["אותו דבר, שם שונה", "Staging = סביבת בדיקה, Production = מה שמשתמשים אמיתיים רואים", "Production זולה יותר", "Staging הוא לdesigners"], correct: 1 },
      { q: "למה צריך automated tests ב-CI?", options: ["לא באמת צריך", "כדי לתפוס bugs לפני שמגיעים לproduction", "זה חוק חוקי", "כי Google עשו את זה"], correct: 1 }
    ]
  },
  {
    id: 7, week: 7, phase: "בנייה",
    title: "Observability", titleEn: "Monitoring & Logs",
    description: "לראות מה קורה ב-production: logs, metrics, alerts ואיך מזהים בעיות לפני שמשתמשים מרגישים.",
    objectives: ["להבין logs, metrics ו-traces", "לדעת מה לנטר", "להגדיר alerting strategy", "לקרוא error ולדעת לאן לפנות"],
    learnContent: [{ heading: "אתה לא יכול לנהל מה שאתה לא רואה", body: "Observability = היכולת להבין מה קורה בתוך המערכת. Logs מספרים מה קרה. Metrics מראים מספרים (response time, error rate). Traces עוקבים אחרי request בין שכבות." }],
    task: { title: "הגדרת SLOs", description: "הגדר 3 SLOs (Service Level Objectives) למוצר שלך. לדוגמה: 99.9% uptime, <200ms response time.", deliverable: "מסמך SLO קצר", tips: ["חשוב: מה יגרום למשתמשים לעזוב אם יישבר?"] },
    quiz: [
      { q: "מה ההבדל בין logs ל-metrics?", options: ["אותו דבר", "Logs = תיאור אירועים, Metrics = נתונים מספריים לאורך זמן", "Metrics עולים יותר", "Logs הם רק לerrors"], correct: 1 },
      { q: "מה זה SLO?", options: ["Service Level Objective — יעד מדיד לאיכות שירות", "Software Language Object", "Security Login Option", "Server Log Output"], correct: 0 },
      { q: "מי אחראי על הגדרת מה לנטר?", options: ["רק ה-DevOps", "רק ה-CTO", "Product + Engineering יחד", "אין צורך לנטר"], correct: 2 }
    ]
  },
  {
    id: 8, week: 8, phase: "בנייה",
    title: "Technical Debt", titleEn: "Tech Debt & Refactoring",
    description: "להבין מה זה technical debt, מתי לשלם אותו ואיך לדבר עליו עם stakeholders.",
    objectives: ["להגדיר technical debt ולסווג אותו", "להבין את העלות הנסתרת", "לבנות טיעון לrefactoring", "לאזן בין features חדשים ל-debt"],
    learnContent: [{ heading: "Technical Debt — ריבית על קיצורי דרך", body: "כל פעם שמפתחים בוחרים פתרון מהיר במקום נכון, נוצר debt. כמו הלוואה — שלמת עכשיו פחות, אבל בעתיד תשלם יותר (בzמן, bugs ו-developer frustration)." }],
    task: { title: "Tech debt audit", description: "שאל את הצוות שלך: מה 3 הדברים הכי 'כואבים' לעבוד איתם? זה ה-tech debt שלך.", deliverable: "רשימה + הערכת עלות גסה לכל אחד", tips: ["תרגם ל-business terms: 'כל bug במודול הזה לוקח 3 פעמים יותר זמן לתקן'"] },
    quiz: [
      { q: "מה זה technical debt?", options: ["כסף שחייבים לcloudprovider", "קוד שנכתב מהר במקום נכון, יוצר עלות עתידית", "bugs שלא תוקנו", "feature שלא הושלם"], correct: 1 },
      { q: "מתי כדאי לטפל ב-tech debt?", options: ["אף פעם, זה בזבוז זמן", "תמיד לפני כל feature חדש", "כשהעלות של להתעלם ממנו גבוהה מהעלות לתקן", "רק כשיש crash"], correct: 2 },
      { q: "איך מסבירים tech debt לstakeholders לא-טכניים?", options: ["לא מסבירים", "בז'רגון טכני מלא", "בעלויות עסקיות: זמן, אמינות, מהירות", "מסתירים את זה"], correct: 2 }
    ]
  },
  {
    id: 9, week: 9, phase: "סוכנים",
    title: "Agent Architecture", titleEn: "Agent Systems",
    description: "איך AI agents בנויים, מה ה-loops שלהם, ומה ההבדל בין agent ל-automation פשוטה.",
    objectives: ["להבין LLM כמנוע החלטות", "לזהות agent loops", "להבחין בין tool use ל-RAG", "לתכנן agent-based feature"],
    learnContent: [{ heading: "Agent = LLM + Tools + Loop", body: "Agent הוא LLM שיכול לקחת פעולות. הוא מקבל מטרה, מחליט על כלי (tool), מריץ אותו, מקבל תוצאה, ומחליט מה הבא. זה loop שחוזר עד שהמטרה הושגה — או עד שנכשל." }],
    task: { title: "תכנון agent", description: "תכנן agent אחד שיכול לסייע לפיצ'ר במוצר שלך. מה ה-tools שלו? מה ה-goal? מה ה-failure modes?", deliverable: "מסמך design של agent", tips: ["תחשוב: מה ה-agent יכול לעשות לא-נכון? איך מגנים על זה?"] },
    quiz: [
      { q: "מה ההבדל בין agent לautomation פשוטה?", options: ["agent יקר יותר", "Agent מחליט בעצמו על sequence הפעולות, automation מריצה script קבוע", "אין הבדל", "Automation חכמה יותר"], correct: 1 },
      { q: "מה זה tool use ב-agent?", options: ["שימוש בפטיש", "יכולת ה-agent לקרוא לפונקציות חיצוניות (APIs, DB, web)", "ממשק משתמש", "סוג LLM"], correct: 1 },
      { q: "מה זה RAG?", options: ["סוג agent", "Retrieval-Augmented Generation — חיפוש במידע חיצוני לפני תשובה", "שפת prompt", "כלי monitoring"], correct: 1 }
    ]
  },
  {
    id: 10, week: 10, phase: "סוכנים",
    title: "Prompt Engineering", titleEn: "Prompts at Scale",
    description: "לכתוב prompts שעובדים בproduction — system prompts, few-shot examples ו-evals.",
    objectives: ["לכתוב system prompt יעיל", "להבין few-shot prompting", "לבנות eval בסיסי", "לנהל prompt versioning"],
    learnContent: [{ heading: "System Prompt = ה-spec של ה-AI שלך", body: "ה-system prompt הוא ההנחיות שה-LLM מקבל לפני כל שיחה. הוא מגדיר אישיות, constraints, format ו-examples. כמו spec לmicroservice — כל שינוי בו משפיע על כל ה-outputs." }],
    task: { title: "כותבים system prompt", description: "כתוב system prompt לagent שתכננת ביחידה הקודמת. כלול: מטרה, constraints, format, דוגמת קלט-פלט.", deliverable: "System prompt מלא", tips: ["תכלול negative examples — מה ה-agent לא אמור לעשות?"] },
    quiz: [
      { q: "מה זה few-shot prompting?", options: ["prompting קצר", "מתן דוגמאות קלט-פלט בתוך ה-prompt", "prompt בעברית", "prompt אחד בלבד"], correct: 1 },
      { q: "מה זה eval ב-LLM context?", options: ["הערכת עובדים", "בדיקה אוטומטית של איכות outputs ה-LLM", "סוג model", "כלי UI"], correct: 1 },
      { q: "למה חשוב prompt versioning?", options: ["לא חשוב", "כדי לעקוב איך שינויים ב-prompt משפיעים על outputs", "כדי לחסוך tokens", "כדי לספר לCTO"], correct: 1 }
    ]
  },
  {
    id: 11, week: 11, phase: "סוכנים",
    title: "Building with Agents", titleEn: "Feature Building",
    description: "לבנות feature אמיתי עם AI agent — מ-design ועד deployment.",
    objectives: ["לתכנן agent-powered feature end-to-end", "לבנות עם coding agent", "לבדוק ו-debug agent behavior", "לשחרר ל-production בביטחון"],
    learnContent: [{ heading: "מה ה-workflow של building עם agent?", body: "1. הגדר מטרה ברורה. 2. כתוב spec. 3. הנחה את ה-coding agent בצ'אנקים קטנים. 4. בדוק כל צ'אנק. 5. Integrate ו-test. 6. Deploy בflags. זה iterative — לא waterfall." }],
    task: { title: "Build sprint", description: "בנה גרסה ראשונה של ה-agent feature שתכננת. לא חייב להיות מושלם — המטרה היא iteration ראשון ב-production.", deliverable: "URL ל-feature חי (אפילו stub)", tips: ["Chunk קטן = feedback מהיר = למידה מהירה"] },
    quiz: [
      { q: "מה המשמעות של 'feature flags' ב-deployment?", options: ["דגלים בממשק", "יכולת להפעיל/לכבות feature לחלק מהמשתמשים", "כלי testing", "סוג CI"], correct: 1 },
      { q: "מה הgranularity הנכונה לתת לcoding agent?", options: ["כל ה-codebase בבת אחת", "משימות קטנות וממוקדות עם context ברור", "רק bug fixes", "רק comments"], correct: 1 },
      { q: "מה קורה כשagent מחזיר קוד שלא עובד?", options: ["זורקים את הcoding agent", "debug, הבנה מה השתבש, ומתן context טוב יותר", "שולחים ל-CTO", "מוחקים את הקוד"], correct: 1 }
    ]
  },
  {
    id: 12, week: 12, phase: "סוכנים",
    title: "Code Review", titleEn: "Technical Judgment",
    description: "לקרוא קוד ולשפוט אותו — לא כמפתח, אלא כ-product builder שמבין מה חשוב.",
    objectives: ["לקרוא code review ולהבין מה מסתתר שם", "לשאול שאלות נכונות על quality", "לזהות red flags", "לתת feedback בונה"],
    learnContent: [{ heading: "Code Review = Quality Gate", body: "Code review הוא לא בדיקת syntax — הוא שיחה על איך הקוד עובד, האם הוא maintainable ו-testable. כ-product builder, אתה לא צריך לקרוא כל שורה — אבל כן לשאול: 'האם זה test? מה מתרחש כשנכשל?'" }],
    task: { title: "Code review checklist", description: "צור checklist אישי לcode review מנקודת המבט של PM/product builder. מה תבדוק? מה תשאל?", deliverable: "Checklist מלא (8-12 פריטים)", tips: ["חשוב: security, error handling, performance, testability"] },
    quiz: [
      { q: "מה המטרה העיקרית של code review?", options: ["להאיט את הפיתוח", "לתפוס bugs ולשפר quality לפני שמגיעים לproduction", "לבקר מפתחים", "לתעד קוד"], correct: 1 },
      { q: "כ-PM, מה אתה מחפש ב-code review?", options: ["syntax errors בלבד", "error handling, security, testability, ו-clarity", "רק performance", "שה-code נראה יפה"], correct: 1 },
      { q: "מה זה red flag בcode?", options: ["קוד בצבע אדום", "דפוס שמרמז על בעיה: magic numbers, no error handling, ו-god functions", "קוד שנכתב מהר", "קוד שמפתח חדש כתב"], correct: 1 }
    ]
  },
  {
    id: 13, week: 14, phase: "delivery",
    title: "Technical Leadership", titleEn: "Leading Technical Work",
    description: "להוביל delivery טכני — prioritization, unblocking, stakeholder communication ו-technical decision making.",
    objectives: ["לנהל technical backlog בביטחון", "לunblock engineering בלי micromanagement", "לתקשר technical risks ל-stakeholders", "לקבל technical decisions"],
    learnContent: [{ heading: "Technical Leadership ≠ כתיבת קוד", body: "Technical leadership הוא ה-ability להוביל עבודה טכנית — להגדיר בעיות ברורות, לפנות חסמים, לקבל decisions ב-uncertainty ולהפוך complexity ל-clarity לכל הצוותים." }],
    task: { title: "Decision document", description: "כתוב Technical Decision Document (TDD) לאתגר טכני שנתקלת בו. מה האפשרויות? מה ה-tradeoffs? מה ההחלטה ולמה?", deliverable: "TDD מלא", tips: ["הפורמט חשוב: context → options → tradeoffs → decision → risks"] },
    quiz: [
      { q: "מה זה technical leadership?", options: ["כתיבת הכי הרבה קוד", "הובלת עבודה טכנית — decisions, unblocking, clarity", "ניהול infrastructure", "להיות CTO"], correct: 1 },
      { q: "מה זה TDD?", options: ["Test Driven Development", "Technical Decision Document — תיעוד החלטה טכנית עם context ו-rationale", "Team Daily Discussion", "Tool Deployment Document"], correct: 1 },
      { q: "איך מתקשרים technical risk ל-stakeholder לא-טכני?", options: ["בז'רגון טכני מלא", "בעלויות עסקיות: מה יכול להישבר, מה ההסתברות, מה ה-impact", "לא מספרים", "רק ב-post-mortem"], correct: 1 }
    ]
  },
  {
    id: 14, week: 16, phase: "delivery",
    title: "Ship to Production", titleEn: "End-to-End Delivery",
    description: "ה-capstone: לשחרר feature אמיתי לproduction — מ-spec ועד monitoring.",
    objectives: ["לבנות release plan מלא", "לנהל rollout עם feature flags", "להגדיר success metrics", "לנהל incident אם משהו משתבש"],
    learnContent: [{ heading: "Shipping הוא skill, לא מקרה", body: "Shipping לproduction בביטחון דורש: spec ברור, tests מקיפים, monitoring מוגדר, rollout מדורג, ו-rollback plan. לא perfect code — אלא confidence שאתה יודע מה קורה אחרי שתלחץ deploy." }],
    task: { title: "Release plan מלא", description: "כתוב release plan מלא לfeature שבנית. כלול: rollout strategy, success metrics, monitoring plan, rollback plan.", deliverable: "Release plan document", tips: ["שאל: מה ה-worst case? כמה זמן לוקח לhttps rollback?"] },
    quiz: [
      { q: "מה זה rollback plan?", options: ["תוכנית לחגוג אחרי release", "תוכנית לחזרה לגרסה הקודמה אם משהו נשבר", "תוכנית לroll-out איטי", "מסמך post-mortem"], correct: 1 },
      { q: "מה success metrics ב-feature launch?", options: ["כמה שורות קוד נכתבו", "מדדים עסקיים שמגדירים הצלחה: adoption, retention, performance", "כמה bugs נמצאו", "כמה מהר נכתב"], correct: 1 },
      { q: "מהו ה-capstone של המסלול הזה?", options: ["מבחן תיאוריה", "שחרור feature אמיתי לproduction end-to-end", "כתיבת thesis", "הגשת קוד ב-GitHub"], correct: 1 }
    ]
  }
];

Object.assign(window, { UNITS_DATA });
