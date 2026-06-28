
const UNITS_DATA = [
  {
    id: 1, week: 1, phase: "יסודות",
    title: "להבין מערכות", titleEn: "System Thinking",
    description: "איך מערכת טכנית בנויה, מה ההבדל בין שכבות, ואיך לקרוא ארכיטקטורה מבלי להיות מפתח.",
    objectives: [
      "להבחין בין Frontend, Backend ו-Database",
      "לקרוא diagram בסיסי של מערכת",
      "לזהות נקודות כשל נפוצות ב-architecture",
      "לתאר data flow של פיצ'ר פשוט מקצה לקצה",
      "לזהות היכן לוגיקה עסקית שייכת — UI, שרת, או database",
      "לנתח מסך קיים לרכיבים, מקורות נתונים ומצבי כשל"
    ],
    learnContent: [
      {
        heading: "מה זה בכלל 'מערכת'?",
        body: "כל מוצר דיגיטלי הוא אוסף של שכבות שמדברות אחת עם השנייה. ה-Frontend הוא מה שהמשתמש רואה — דפדפן, אפליקציית מובייל, SPA. ה-Backend הוא השרת שמכיל את הלוגיקה העסקית ומתקשר עם שירותים חיצוניים. ה-Database שומר את הנתונים בצורה מתמשכת. ביניהם עוברים requests ו-responses דרך APIs. כ-product builder, המפה הזו היא 'עולם המוצר' שלך — לדעת מה רץ איפה זה תנאי בסיס לכל עבודה עם developers ו-AI agents."
      },
      {
        heading: "Data Flow: מה קורה כשלוחצים כפתור?",
        body: "המשתמש לוחץ 'שמור' → הדפדפן שולח HTTP request (שיטה, URL, headers, body ב-JSON) ל-Backend → ה-Backend מוודא הרשאות, מריץ לוגיקה עסקית, שולח query ל-Database → ה-Database מחזיר תוצאה → ה-Backend מחזיר HTTP response עם status code → הדפדפן מציג הודעת הצלחה. כל שלב הוא נקודת כשל פוטנציאלית. flow טוב מגדיר גם validation, edge cases, timeouts ו-error handling — לא רק 'הנתיב המאושר'."
      },
      {
        heading: "Business Logic: איפה שמים את הלוגיקה?",
        body: "אחת השאלות הכי חשובות ב-architecture: האם הלוגיקה שייכת ל-UI, לשרת, או ל-database? כלל אצבע: UI מטפל בהצגה ו-interaction; שרת מכיל את הכללים העסקיים (validations, permissions, calculations); database מכיל constraints שאי אפשר לעקוף (unique keys, foreign keys). כשמפתח — או AI agent — שם לוגיקה עסקית בצד הלקוח, שאל: 'מה קורה אם מישהו עוקף את ה-UI ישירות לשרת?' זה security risk."
      },
      {
        heading: "System Diagram: איך לקרוא מפת מערכת",
        body: "diagram טוב מראה: מה רץ בדפדפן, מה רץ בשרת, איפה הנתונים נשמרים, מה public לעומת private, ואיך components תלויים אחד בשני. כ-product builder, לא צריך לכתוב קוד — אבל כן צריך לשאול: 'מה יקרה אם ה-component הזה יפול?' ו'מי תלוי במי?' זה מה שמבדיל בין product builder שמבין מה הוא מבקש לבין כזה שרק מוסר requirements ומקווה לטוב."
      },
      {
        heading: "Failure Modes: מה שובר מערכות?",
        body: "מערכות נשברות בכמה דרכים נפוצות: Single Point of Failure — שירות אחד שנופל מוריד הכל; Cascading Failures — שרת איטי יוצר timeout בשרת הבא; N+1 Query Problem — קריאה ל-Database בלופ במקום שאילתה אחת; Race Conditions — שני processes מעדכנים אותו record בו-זמנית. כ-product builder, תפקידך לשאול 'מה יקרה אם...?' ולא לקבל 'זה עובד' כתשובה מלאה."
      }
    ],
    task: {
      title: "ממפים את ה-product שלך",
      description: "בחר אפליקציה אמיתית שאתה מכיר. צייר diagram מלא: מה רץ בדפדפן, מה רץ בשרת, איפה נתונים וקבצים נשמרים, מה public לעומת private, ואיך הרכיבים תלויים אחד בשני. בחר פיצ'ר אחד ופרט את ה-data flow שלו: מי מפעיל, מה נשלח, מי מוודא, מה נשמר, מה יכול להיכשל, ואיך מתקבלת השגיאה.",
      deliverable: "תמונה או קישור ל-diagram + תיאור טקסטואלי של data flow אחד",
      tips: [
        "אל תנסה להיות מדויק — המטרה היא להבין, לא לתעד עד הפרט האחרון",
        "שאל: מה קורה אם כל שכבה נכשלת? (database down, backend timeout, network error)",
        "זהה: מה הלוגיקה שרצה בצד הלקוח? האם זה הגיוני, או שהיא צריכה לרוץ בשרת?",
        "הכלים: Excalidraw, Miro, draw.io, Lucidchart — או נייר ועיפרון",
        "השווה את ה-diagram שלך עם teammate — ראה מה הם ראו שפספסת"
      ]
    },
    quiz: [
      { q: "משתמש לוחץ 'שמור' בטופס. מה קורה ראשון?", options: ["הנתונים נשמרים ב-Database", "הדפדפן שולח HTTP request ל-Backend", "ה-Backend שולח query ל-Database", "ה-Frontend מציג הודעת הצלחה"], correct: 1 },
      { q: "מפתח מציע לשים לוגיקת הרשאות בצד ה-Frontend. מה הבעיה?", options: ["Frontend לא תומך בזה", "משתמש זדוני יכול לעקוף את ה-UI ולגשת ישירות ל-API", "זה יאט את הטעינה", "אין בעיה, זה תקין"], correct: 1 },
      { q: "מה זה API?", options: ["שפת תכנות", "ממשק תקשורת בין שכבות המערכת", "כלי לעיצוב UI", "סוג של Database"], correct: 1 },
      { q: "מה זה Single Point of Failure?", options: ["bug נפוץ ב-Frontend", "רכיב שנפילתו מורידה את כל המערכת", "שגיאת syntax בקוד", "מצב שקורה רק ב-production"], correct: 1 },
      { q: "מה ההבדל בין Frontend ל-Backend?", options: ["Frontend מהיר יותר", "Frontend הוא מה שהמשתמש רואה, Backend הוא הלוגיקה בשרת", "Backend כתוב ב-JavaScript, Frontend ב-Python", "אין הבדל, זה אותו דבר"], correct: 1 }
    ]
  },
  {
    id: 2, week: 2, phase: "יסודות",
    title: "API כשפה", titleEn: "APIs & Contracts",
    description: "לקרוא ולהבין API docs, לדעת מה לבקש ממפתחים, ולהגדיר contracts ברורים.",
    objectives: [
      "לקרוא API documentation בסיסית",
      "להבין HTTP verbs: GET, POST, PUT, PATCH, DELETE",
      "להבין HTTP status codes ומה הם מסמנים",
      "להגדיר contract בין Frontend ל-Backend",
      "לזהות הבדל בין REST ל-GraphQL ומתי כל אחד מתאים",
      "לפרק flow של פיצ'ר לרשימת API calls"
    ],
    learnContent: [
      {
        heading: "HTTP Verbs — 5 פעלים שמספיקים",
        body: "GET = קח נתונים (idempotent — אפשר לקרוא כמה פעמים, אין side effects). POST = צור resource חדש (non-idempotent — שליחה כפולה יוצרת פריט כפול). PUT = החלף resource שלם. PATCH = עדכן שדות ספציפיים. DELETE = מחק. זה 95% מה-APIs שתיתקל בהן. כשמפתח אומר 'אני צריך endpoint', הוא מגדיר אחד מאלה. כ-product builder, השאלה תמיד: 'מה ה-verb הנכון ומה ה-contract?'"
      },
      {
        heading: "Status Codes — הקוד שמספר את הסיפור",
        body: "200 OK, 201 Created, 400 Bad Request, 401 Unauthorized (לא מחובר), 403 Forbidden (מחובר אבל אסור), 404 Not Found, 422 Validation Error, 500 Server Error. אלה לא arbitrary מספרים — הם protocol שכל client מבין. כ-product builder, כשמפתח אומר 'החזרתי 401' — שאל: 'האם ה-user מחובר?' כשיש 500 — זה bug בbackend שדורש תיקון מידי, לא error handling בFrontend."
      },
      {
        heading: "Contract: ההסכם הכי חשוב בצוות",
        body: "Contract הוא ההסכמה: 'ה-Frontend ישלח X, ה-Backend יחזיר Y'. כשה-contract ברור, Frontend ו-Backend יכולים לעבוד במקביל — Frontend עושה mock ו-Backend עושה implementation, ומתחברים בסוף. כשהוא עמום — bugs ואשמות הדדיות. Contract טוב מגדיר: fields מדויקים, types (string, number, boolean), אילו שדות required, ומה קורה ב-error cases. OpenAPI/Swagger הוא ה-industry standard לתיעוד זה."
      },
      {
        heading: "REST vs GraphQL — מתי אכפת לך?",
        body: "REST: כל resource מקבל URL משלו (/users, /users/123). יתרון: פשוט, cacheable, universal. חיסרון: over-fetching (קיבלת 50 שדות כשצריכת 3) ו-under-fetching (צריך 3 calls נפרדים). GraphQL: endpoint אחד (/graphql), queries + mutations שמגדירים בדיוק מה חוזר. יתרון: flexibility בFrontend, חסכון בbandwidth. חיסרון: מורכבות, caching קשה. כלל: REST לרוב, GraphQL כשיש performance bottleneck מוכח."
      },
      {
        heading: "Backends-for-Frontends ו-API Design Patterns",
        body: "Backend-for-Frontend (BFF) הוא API layer מיוחד שבנוי בשביל ה-frontend. במקום Frontend לקרוא ישירות ל-microservices מורכבים, ה-BFF מאגד ומפשט. מאפשר ל-frontend לקבל בדיוק מה שצריך בקריאה אחת תוך שמירה על separation of concerns. כ-product builder, הבן מתי הצוות מיישם BFF ולמה — זה משפיע על performance, על יכולת ה-frontend לעבוד עצמאית ועל security."
      }
    ],
    task: {
      title: "כותבים API Contract ו-Flow Breakdown",
      description: "בחר 3 פיצ'רים מהמוצר שלך. לכל פיצ'ר, כתוב contract: HTTP verb, URL, מה ה-request body, מה ה-response, ומה status codes אפשריים. לפיצ'ר אחד, פרט את ה-flow המלא: מי מפעיל, מה נשלח, מי מוודא, מה נשמר, מה יכול להיכשל, ואיך השגיאה חוזרת.",
      deliverable: "מסמך contract + flow breakdown (אפילו בטקסט רגיל או Markdown)",
      tips: [
        "הגדר גם error cases — מה קורה אם ה-user לא מחובר? (401) אם הנתונים לא תקינים? (400)",
        "תחשוב: מה ה-Frontend צריך כדי להציג את המסך הבא?",
        "השתמש ב-Claude כדי לייצר OpenAPI YAML מהcontract שכתבת — זה תרגיל מצוין",
        "הראה למפתח ושאל: 'האם זה מה שהיית מצפה?' — זה תרגיל תקשורת לא פחות מתכנוני"
      ]
    },
    quiz: [
      { q: "איזה HTTP verb משמש ליצירת resource חדש?", options: ["GET", "POST", "DELETE", "PATCH"], correct: 1 },
      { q: "ה-Backend החזיר status 401. מה זה אומר?", options: ["Resource לא קיים (404)", "שגיאת שרת פנימית", "המשתמש לא מאומת — צריך להתחבר", "הבקשה לא תקינה"], correct: 2 },
      { q: "מה זה API contract?", options: ["חוזה משפטי", "הסכמה על מה נשלח ומה חוזר בין שכבות", "תיעוד של bugs", "שפת תכנות"], correct: 1 },
      { q: "מה ההבדל העיקרי בין REST ל-GraphQL?", options: ["GraphQL מהיר יותר תמיד", "REST ישן יותר ולכן גרוע", "REST: URL לכל resource. GraphQL: שאילתה גמישה אחת", "אין הבדל"], correct: 2 },
      { q: "מה זה over-fetching ב-REST?", options: ["כשקוראים ל-API יותר מדי פעמים", "כשה-API מחזיר יותר נתונים ממה שה-client צריך", "כשה-client שולח יותר מדי parameters", "כש-API נפל מעומס"], correct: 1 }
    ]
  },
  {
    id: 3, week: 3, phase: "יסודות",
    title: "שכבת הנתונים", titleEn: "Data Layer",
    description: "Database לא פחד — איך נתונים מאורגנים, מה זה schema, ואיך לחשוב על data modeling.",
    objectives: [
      "להבין מבנה של relational database",
      "לקרוא schema בסיסי",
      "להבחין בין SQL ל-NoSQL ולדעת מתי כל אחד מתאים",
      "לחשוב על data modeling לפיצ'ר חדש",
      "להבין soft delete vs hard delete",
      "לזהות many-to-many relationships ולפתור אותן עם junction table"
    ],
    learnContent: [
      {
        heading: "Database הוא רק טבלה (בגדול)",
        body: "Relational database = קבוצה של טבלאות שמחוברות דרך keys. Users, Orders, Products — כל אחת טבלה עם rows ו-columns. הקשר ביניהן הוא foreign keys: order.user_id מצביע על users.id. SQL מאפשר JOINs — 'תן לי את כל ה-orders של user X עם פרטי המוצר'. כ-product builder, הבן שכל entity במוצר שלך (משתמש, מסמך, פרויקט, תגובה) הוא טבלה פוטנציאלית, ויחסים ביניהם הם foreign keys."
      },
      {
        heading: "Schema: מפת הנתונים של המוצר",
        body: "Schema מגדיר: אילו עמודות בכל טבלה, איזה type לכל עמודה (TEXT, INTEGER, BOOLEAN, TIMESTAMP), אילו שדות חובה (NOT NULL), ואיזה data לא יכול להיות כפול (UNIQUE). כשמוסיפים feature חדש, תמיד שאל: 'מה ה-schema impact?' למשל, הוספת 'תגיות' לתוכן מצריכה טבלת tags, טבלת content_tags (junction table), והחלטה: מה קורה כשמוחקים תוכן? cascade delete או soft delete?"
      },
      {
        heading: "SQL vs NoSQL — מתי לדאוג?",
        body: "SQL (PostgreSQL, MySQL): מבנה קשיח, ACID — Atomic, Consistent, Isolated, Durable. חזק ב-relationships, integrity ו-complex queries. הdefault הנכון לרוב ה-startups. NoSQL: MongoDB (documents), Redis (key-value, מצוין לcaching וsessions), Cassandra (columns, לwrite-heavy בscale), Neo4j (graphs). NoSQL מתאים לנתונים לא מובנים שמשתנים מהר, לscale אופקי אדיר, או לuse cases ספציפיים. כלל: התחל ב-SQL אם יש ספק."
      },
      {
        heading: "Data Lifecycle: Soft Delete vs Hard Delete",
        body: "Hard delete = DELETE FROM table WHERE id=X — הנתון נמחק לצמיתות. Soft delete = UPDATE table SET deleted_at=NOW() WHERE id=X — הנתון קיים בDB אבל מסומן כמחוק. Soft delete חשוב ל: audit trails, אפשרות undo, compliance (GDPR לעתים מחייב שמירת היסטוריה), ו-debugging. כ-product builder, לכל feature חדש שאל: 'מה קורה כשמשתמש מוחק? האם יכול לשחזר? האם יש compliance requirement?'"
      },
      {
        heading: "Data Modeling: לחשוב לפני לכתוב",
        body: "Schema-first approach: לפני כתיבת קוד, מגדירים entities, יחסים, constraints. שאלות לכל טבלה: מה ה-real entity? מה יחסיה האמיתיים? מה מידע אסור להיות כפול? מה ה-constraint החיוני? מה קורה כשrecord נמחק? עבור מוצרי AI — כל schema decision צריך לשאול: 'האם זה לוכד את ה-signal שנצטרך לשיפור המודל?' תיעוד interaction triples (context, action, outcome) הוא schema שמשרת גם product וגם training."
      }
    ],
    task: {
      title: "מגדירים schema ו-data model",
      description: "לפיצ'ר שבחרת — הגדר את ה-schema המלא. עבור כל טבלה: שם, columns, type לכל column, constraints (NOT NULL, UNIQUE, FOREIGN KEY). צייר ERD (Entity Relationship Diagram) שמראה את הטבלאות והיחסים. ספק תשובות ל: מה קורה כשמוחקים user? מה ה-soft vs hard delete policy?",
      deliverable: "ERD diagram + רשימת טבלאות עם columns ו-constraints",
      tips: [
        "התחל מה-entities — מה 'הדברים' במערכת? (User, Item, Order, Comment...)",
        "שאל: איזה queries תצטרך לרוץ? לדוגמה: 'כל ה-orders של user X' → צריך foreign key",
        "זהה כל many-to-many relationship — צריך junction table (לדוגמה: users ↔ projects)",
        "השתמש ב-dbdiagram.io לציור ERD בקוד פשוט",
        "שאל: אם AI agent יקרא את ה-schema הזה, יוכל להבין מה המוצר עושה?"
      ]
    },
    quiz: [
      { q: "מה זה schema?", options: ["שפת תכנות", "הגדרת מבנה הנתונים — טבלאות, עמודות וסוגים", "כלי לגיבוי", "סוג של API"], correct: 1 },
      { q: "מה ההבדל בין SQL ל-NoSQL?", options: ["SQL מהיר יותר תמיד", "SQL: מבנה קשיח עם ACID ו-relations. NoSQL: גמיש, eventual consistency", "NoSQL עולה יותר כסף", "SQL רק ל-big data"], correct: 1 },
      { q: "כשמוסיפים feature חדש, מה השאלה הראשונה לגבי data?", options: ["איך נראה ה-UI?", "מה הצבע של הכפתור?", "מה ה-schema impact — אילו טבלאות ו-columns נדרשים?", "כמה זה עולה?"], correct: 2 },
      { q: "מה זה soft delete?", options: ["מחיקה מהירה מה-DB", "סימון record כ-deleted ללא מחיקה פיזית — לaudit trail ו-undo", "מחיקה מה-cache בלבד", "backup לפני מחיקה"], correct: 1 },
      { q: "מה זה junction table?", options: ["טבלת backup", "טבלה שמממשת many-to-many relationship בין שתי entities", "index מיוחד", "view של Database"], correct: 1 }
    ]
  },
  {
    id: 4, week: 4, phase: "יסודות",
    title: "Auth ו-Security", titleEn: "Auth & Security",
    description: "לא להיבהל מ-security — להבין tokens, sessions ואיך מגנים על endpoints.",
    objectives: [
      "להבין את ההבדל בין authentication ל-authorization",
      "לדעת מה זה JWT ואיך הוא עובד",
      "לזהות security risks נפוצים (OWASP Top 10)",
      "לשאול את השאלות הנכונות על הרשאות",
      "להבין מה זה Row Level Security",
      "לבנות security checklist לפיצ'ר חדש"
    ],
    learnContent: [
      {
        heading: "Authentication vs Authorization",
        body: "Authentication = מי אתה? המשתמש מוכיח זהות: סיסמה, OAuth, SSO, MFA. Authorization = מה מותר לך? לאחר זיהוי, המערכת בודקת הרשאות. RBAC (Role-Based): Admin, User, Guest — כל role מקבל סט הרשאות. ABAC (Attribute-Based): הרשאות לפי attributes של ה-user ו-resource. כשמפתח אומר 'ה-user לא יכול לגשת לזה' — הוא מדבר על Authorization. הבלבול בין השניים גורם ל-security bugs נפוצים."
      },
      {
        heading: "JWT — Tokens ו-Sessions",
        body: "Session: סשן נשמר בשרת, client מחזיק session_id ב-cookie. JWT (JSON Web Token): stateless — השרת לא שומר כלום. JWT מורכב מ-3 חלקים: header.payload.signature. ה-payload מכיל claims (user_id, role, expiry). ה-signature מוודאת שהtoken לא זויף. Client שומר JWT ב-cookie httpOnly (מאובטח) ושולח ב-Authorization: Bearer header. יתרון: scalable. חיסרון: לא ניתן לבטל token לפני expiry — פתרון: blacklist קצרה או expiry קצר."
      },
      {
        heading: "OWASP Top 10 — הסיכונים שכל product builder חייב להכיר",
        body: "SQL Injection: input לא sanitized הולך ישירות ל-query — 'DROP TABLE users'. מניעה: parameterized queries. XSS (Cross-Site Scripting): קוד זדוני ב-input שנשמר ומוצג — גונב cookies. מניעה: output encoding. IDOR (Insecure Direct Object Reference): /api/documents/123 — משתמש משנה ל-124 וניגש למסמך של מישהו אחר. מניעה: authorization check לכל request. CSRF: site זדוני שולח request בשם המשתמש. מניעה: CSRF tokens."
      },
      {
        heading: "Secrets ו-Environment Variables",
        body: "אסור לשים API keys, passwords, database URLs בקוד — זה נשמר ב-git ולעולם לא נמחק. כל secret נשמר ב-environment variables ונגיש דרך process.env.SECRET_NAME. בproduction: secrets managers (AWS Secrets Manager, Vault, Doppler). כ-product builder, בכל code review — חפש hardcoded credentials. 'Slopsquatting': AI agents לפעמים מציעים packages לא קיימים — תוקפים רושמים את השמות הללו עם malware. סריקת dependencies היא חובה."
      },
      {
        heading: "Security Checklist לפיצ'ר חדש",
        body: "לכל feature חדש, עבור על: (1) האם כל endpoint מוגן ב-auth check? (2) האם יש validation לכל input? (3) האם public forms מוגנים מabuse? (4) האם קבצים מועלים דרך signed URLs עם size ו-type limits? (5) האם Database access מוגבל לrows שהmשתמש מורשה (Row Level Security)? (6) האם יש rate limiting על actions רגישים? (7) האם secrets ב-environment variables, לא בקוד? בניית checklist אישי הוא deliverable מרכזי של יחידה זו."
      }
    ],
    task: {
      title: "מיפוי הרשאות ו-Security Checklist",
      description: "מפה את מודל ההרשאות של המוצר שלך: מי יכול לעשות מה? צור טבלת roles x actions (Admin, User, Guest x צפייה, עריכה, מחיקה, ניהול). בנוסף, כתוב security checklist אישי לשימוש בכל feature חדש — לפחות 8 פריטים.",
      deliverable: "טבלת roles & permissions + security checklist",
      tips: [
        "חשוב על edge cases: מה קורה כש-user מנסה לגשת לנתוני user אחר? (IDOR)",
        "בדוק: האם יש action שמשתמש יכול לבצע ישירות ב-API ולא רק דרך ה-UI?",
        "שאל: מה הרמה הנמוכה ביותר של הרשאות שכל role צריך? (Principle of Least Privilege)",
        "סמן: אילו endpoints חשופים ל-public? האם הם צריכים rate limiting?",
        "הרץ את ה-checklist על פיצ'ר קיים ובדוק אם מצאת משהו שפספסת"
      ]
    },
    quiz: [
      { q: "מה ההבדל בין authentication ל-authorization?", options: ["אותו דבר", "Authentication = זיהוי מי אתה, Authorization = מה מותר לך", "Authorization = זיהוי, Authentication = הרשאה", "רק ל-enterprise"], correct: 1 },
      { q: "מה זה JWT?", options: ["שפת תכנות", "JSON Web Token — stateless token עם header.payload.signature לזיהוי", "כלי UI", "סוג database"], correct: 1 },
      { q: "מה זה IDOR?", options: ["שגיאת database", "גישה לא מורשית ל-resource של user אחר על ידי שינוי ID ב-URL", "סוג encryption", "authentication protocol"], correct: 1 },
      { q: "למה אסור לשים API key בקוד?", options: ["זה מאט את הbuild", "הקוד נשמר ב-git ו-key נחשף לכולם לצמיתות", "זה לא חוקי", "זה לא פועל ב-production"], correct: 1 },
      { q: "מה זה Row Level Security?", options: ["הצפנת rows ב-DB", "הגבלת גישה ל-DB לפי identity של המשתמש — user רואה רק rows שלו", "כלי לcompression", "סוג backup"], correct: 1 }
    ]
  },
  {
    id: 5, week: 5, phase: "בנייה",
    title: "Frontend Architecture", titleEn: "Frontend Arch",
    description: "איך מבנה ה-UI משפיע על מהירות, maintainability ו-developer experience.",
    objectives: [
      "להבין component-based architecture",
      "לדעת מה זה state management ואיזה סוגים קיימים",
      "לקרוא component tree ולנתח מסך לחלקיו",
      "לזהות מתי performance נפגע",
      "להבין Optimistic UI ומצבי loading/error/empty",
      "לזהות separation of display מ-logic"
    ],
    learnContent: [
      {
        heading: "Components — הלבנים של ה-UI",
        body: "כל UI מורכב מ-components — חלקים עצמאיים ורב-שימושיים. Atomic Design מגדיר היררכיה: Atoms (Button, Input) → Molecules (SearchBar = Input + Button) → Organisms (Header = Logo + Nav + Search) → Templates → Pages. כ-product builder, כשמבקש שינוי UI, שאל: 'האם זה component קיים שצריך שינוי, או component חדש?' שינוי ב-component שמשתמשים בו ב-20 מקומות — שאל: 'מה ה-impact בכל המקומות?'"
      },
      {
        heading: "State Management — ה-truth של ה-UI",
        body: "State הוא הנתונים שה-UI תלוי בהם. Local state: נתונים שcomponent אחד מחזיק (useState). Global state: נתונים שמספר components צריכים (Redux, Zustand). Server state: נתונים שמגיעים מה-server ו-cached (React Query, SWR). הבעיה הנפוצה: state מפוזר בחוסר סדר — component A משנה state שB תלוי בו בלי שB יודע. כ-product builder, שאל: 'מאיפה ה-component הזה מקבל את הנתונים שלו?'"
      },
      {
        heading: "Optimistic UI ומצבי Loading/Error/Empty",
        body: "Optimistic UI: ה-UI מתעדכן מיידית לפני שהשרת ענה, ואם השרת נכשל — חוזר אחורה. נותן תחושת מהירות (כמו WhatsApp). Loading state: skeleton או spinner. Empty state: אין נתונים — show onboarding ולא מסך ריק מבלבל. Error state: משהו נשבר — הצג error ידידותי עם retry. כ-product builder, תכנן את כל 4 המצבים בכל מסך — לא רק ה-happy path. זה מה שמבדיל מוצר מוקפד מ-MVP גולמי."
      },
      {
        heading: "Performance: מתי Frontend נהיה איטי?",
        body: "Re-renders מיותרים: component מ-render כשלא צריך. Bundle size: JavaScript שנשלח לדפדפן גדול מדי — Lighthouse score יורד, First Contentful Paint עולה. Code splitting ו-lazy loading: טוענים רק מה שצריך עכשיו. Memoization (useMemo, useCallback): מונע חישובים מחדש. כ-product builder, עקוב אחר Core Web Vitals (LCP, FID, CLS) ו-Lighthouse score — אלה משפיעים ישירות על SEO ועל UX."
      },
      {
        heading: "Separation of Display מ-Logic",
        body: "עקרון בסיסי: components שמציגים (presentational components) לא מכילים business logic. Logic (fetching, computation, validation) נמצא ב-custom hooks, utils, או service layer. תסמין שמשהו לא בסדר: component אחד עושה fetch, computation ו-display. כ-product builder, בדוק: אם מחליפים את ה-UI framework — כמה קוד ניתן לשמור? המטרה היא לזהות UI שנראה טוב אבל מסתיר לוגיקה שברירית שתתפוצץ בתוך חודש."
      }
    ],
    task: {
      title: "Component Audit ו-Screen Deconstruction",
      description: "בחר מסך אחד במוצר שלך ופרק אותו. ראשית, רשום את כל ה-components שאתה רואה (Navbar, Form, Button, Card, Modal...). לכל component: האם הוא חוזר במסכים אחרים? שנית, לאחד מה-components הראשיים, מפה: מה מקורות הנתונים, אילו user actions הוא מטפל בהם, אילו states יש לו (loading/error/empty/success), ואיזה failure states קיימים.",
      deliverable: "רשימת components + פירוט מלא ל-component אחד",
      tips: [
        "חפש כפילויות — component שחוזר 5 פעמים שווה reuse, ושינוי בו ישפיע בכולם",
        "זהה: האם יש component שנראה פשוט אבל מסתיר לוגיקה מורכבת? — זו red flag",
        "לכל מסך, שאל: מה ה-empty state? מה ה-error state? מה ה-loading state?",
        "בדוק: האם ה-components מדברים ישירות זה עם זה, או דרך shared state?"
      ]
    },
    quiz: [
      { q: "מה זה component-based architecture?", options: ["שיטת תמחור", "בניית UI מחלקים עצמאיים ורב-שימושיים", "סוג database", "framework למובייל"], correct: 1 },
      { q: "מה זה Optimistic UI?", options: ["UI שנמטב לperformance", "UI שמתעדכן מיידית לפני תשובת השרת, עם rollback אם נכשל", "UI פשוט ומינימליסטי", "UI שעובד בלי internet"], correct: 1 },
      { q: "מה ה-4 states שכל component צריך לטפל בהם?", options: ["Start, Middle, End, Done", "Loading, Error, Empty, Success", "Open, Close, Save, Delete", "Init, Run, Stop, Kill"], correct: 1 },
      { q: "מה גורם ל-Frontend להיות איטי?", options: ["יותר מ-3 צבעים", "bundle גדול, renders מיותרים ו-unoptimized images", "יותר מ-10 pages", "fonts לא נטענו"], correct: 1 },
      { q: "מה זה state management?", options: ["ניהול צוות", "ניהול נתוני UI שמשתנים עם הזמן ומשותפים בין components", "גיבוי נתונים", "ניהול שרתים"], correct: 1 }
    ]
  },
  {
    id: 6, week: 6, phase: "בנייה",
    title: "CI/CD ו-Infrastructure", titleEn: "DevOps Basics",
    description: "מה קורה בין 'commit' ל-production — pipelines, environments ו-deployment strategies.",
    objectives: [
      "להבין את שלבי ה-CI/CD pipeline",
      "לדעת ההבדל בין environments",
      "להבין deployment strategies: blue-green, canary, rolling",
      "לזהות bottlenecks ב-deployment process",
      "לשאול שאלות נכונות על infrastructure",
      "להבין feature flags ואיך הם משרתים גם product וגם engineering"
    ],
    learnContent: [
      {
        heading: "CI/CD — האוטומציה שמשחררת אותך",
        body: "CI = Continuous Integration: כל commit מריץ pipeline אוטומטי — lint (בדיקת סגנון קוד), build, unit tests, integration tests. CD = Continuous Deployment: אם כל השלבים עברו, הקוד נפרס אוטומטית. GitHub Actions, GitLab CI, CircleCI — הכלים הנפוצים. כ-product builder, CI/CD הוא ה-safety net שמאפשר לדחוף שינויים מהר בלי לפחד. Pipeline שלוקח 30 דקות הוא bottleneck — כל deploy cycle ארוך מכך מאט velocity."
      },
      {
        heading: "Environments: Local, Staging ו-Production",
        body: "Local: מחשב המפתח — מהיר לiterate, לא משפיע על אף אחד. Staging (QA/UAT): עתק של Production — כאן בודקים לפני שחרור. Production: מה שמשתמשים אמיתיים רואים. כלל: כמה שהenvironments דומים לProduction, כך פחות surprises. Docker containers מאפשרים environment parity — 'works on my machine' נפתר כי כולם מריצים אותו container. כ-product builder: תמיד תבדוק על staging לפני production."
      },
      {
        heading: "Deployment Strategies: Blue-Green, Canary ו-Rolling",
        body: "Blue-Green: שני environments זהים. Blue = production הנוכחי, Green = הגרסה החדשה. מריצים tests על Green ואז מחליפים traffic בבת אחת. Rollback = בלחיצה אחת. Canary: שולחים 1% מה-traffic לגרסה החדשה. אם metrics טובים — מגדילים ל-5%, 25%, 100%. Rolling: מחליפים servers בהדרגה. כ-product builder: דע מה ה-deployment strategy ומה ה-rollback plan לפני כל release."
      },
      {
        heading: "Feature Flags — לשחרר בבטחה",
        body: "Feature flag = code switch שמאפשר להפעיל/לכבות feature לפי user, percentage, country, או plan. מאפשר: לדחוף קוד לproduction לפני שהfeature מוכן (enabled רק לinternal team); A/B testing; gradual rollout. כלים: LaunchDarkly, Unleash, PostHog feature flags, GrowthBook. כ-product builder, feature flags הם כלי product לא פחות מengineering — הם מאפשרים לך לשלוט על מי רואה מה מתי, בלי deployment חדש."
      },
      {
        heading: "Git Workflow ו-Release Discipline",
        body: "PR Template: כל PR צריך לכלול — תיאור השינוי, test plan, ו-rollback notes. Branch strategy: feature branches מ-main, אל תדחוף ישירות ל-main. Atomic commits: כל commit הוא שינוי אחד ברור. Hotfix branch: לbug דחוף שנכנס ישירות לproduction. AI-specific staged rollout: Internal dogfooding (2 שבועות) → Design partners (4 שבועות) → Limited beta (4-6 שבועות) → GA. לכל שלב: gating criteria ברורים."
      }
    ],
    task: {
      title: "מיפוי Deployment Pipeline ו-Rollout Plan",
      description: "מפה את ה-deployment process הנוכחי שלך מ-commit ועד production. צייר diagram של ה-pipeline עם כל השלבים. לפיצ'ר ספציפי, כתוב rollout plan: איזה deployment strategy תבחר, מה ה-feature flag strategy, מה ה-rollback plan, ומה ה-definition of success.",
      deliverable: "Pipeline diagram + Rollout plan לפיצ'ר",
      tips: [
        "זהה: איפה ה-pipeline לוקח הכי הרבה זמן? — שם הbottleneck שצריך לשפר",
        "שאל: כמה זמן לוקח rollback לproduction הקודם? אם יותר מ-5 דקות — זו בעיה",
        "בדוק: כמה automated tests רצים לפני כל deploy? כמה? באיזה coverage?",
        "תכנן fire drill: מה תעשה אם production נפל 5 דקות אחרי deploy?"
      ]
    },
    quiz: [
      { q: "מה זה CI?", options: ["Corporate Interface", "Continuous Integration — lint, build ו-tests אוטומטיים בכל commit", "Customer Intelligence", "Code Inspector"], correct: 1 },
      { q: "מה ההבדל בין staging ל-production?", options: ["אותו דבר, שם שונה", "Staging = סביבת בדיקה, Production = מה שמשתמשים אמיתיים רואים", "Production זולה יותר", "Staging הוא לdesigners"], correct: 1 },
      { q: "מה היתרון של Canary deployment?", options: ["מהיר יותר", "מאפשר לשלוח גרסה חדשה ל-% קטן ממשתמשים לפני rollout מלא", "זול יותר", "קל יותר לפתח"], correct: 1 },
      { q: "מה זה feature flag?", options: ["דגל בממשק", "מנגנון להפעלה/כיבוי feature לחלק מהמשתמשים ללא deployment חדש", "כלי testing", "סוג CI"], correct: 1 },
      { q: "מה צריך להיות ב-PR template?", options: ["רק תיאור השינוי", "רק screenshots", "תיאור השינוי, test plan ו-rollback notes", "שם המפתח ותאריך"], correct: 2 }
    ]
  },
  {
    id: 7, week: 7, phase: "בנייה",
    title: "Observability", titleEn: "Monitoring & Logs",
    description: "לראות מה קורה ב-production: logs, metrics, alerts ואיך מזהים בעיות לפני שמשתמשים מרגישים.",
    objectives: [
      "להבין logs, metrics ו-traces — ההבדל ומתי כל אחד",
      "לדעת מה לנטר ואיך להגדיר alerts",
      "להגדיר SLOs עם מספרים ספציפיים",
      "לקרוא error ולדעת לאן לפנות",
      "להבין observability מיוחדת למוצרי AI",
      "לנהל incident response בצורה מסודרת"
    ],
    learnContent: [
      {
        heading: "שלוש עמודות ה-Observability",
        body: "Logs: רשומות טקסט של מה קרה — 'User 123 tried to access document 456, failed with 403 at 10:23:45'. Metrics: מספרים לאורך זמן — error rate, response time, requests per second. Traces: מעקב אחרי request יחיד בין מספר services — כמה זמן עבר בכל שכבה. כ-product builder, Observability הוא היכולת לענות על 'מה קורה עכשיו?' בלי לנחש. אם אתה לומד על בעיה ממשתמש לפני שמה-monitoring שלך — המערכת שלך לא observable."
      },
      {
        heading: "Structured Logging: מה ולמה",
        body: "Structured logs הם JSON, לא plaintext: {\"level\": \"error\", \"timestamp\": \"...\", \"user_id\": 123, \"action\": \"upload\", \"error\": \"file_too_large\"}. זה מאפשר לחפש ולsegment ב-Datadog, Splunk, CloudWatch. כ-product builder, שאל בכל feature: 'מה אנחנו logs כשה-actions החשובות קורות?' Log יותר מדי עדיף על log פחות מדי — logs זולים, downtime יקר. Structured logging עם כלי כמו Winston מאפשר integration קל עם כל observability stack."
      },
      {
        heading: "SLOs, SLAs ו-Error Budgets",
        body: "SLO (Service Level Objective): יעד פנימי — '99.9% uptime', 'p95 response time < 200ms'. SLA (Service Level Agreement): הסכם עם לקוח עם penalties. Error Budget: 100% פחות ה-SLO. אם SLO = 99.9%, error budget = 0.1% = כ-44 דקות downtime לחודש. כשה-error budget אזל — מפסיקים לdeploy features חדשים עד שמתקנים stability. זה tool ליישור Product ו-Engineering — לא כל sprint צריך features."
      },
      {
        heading: "AI-Specific Observability",
        body: "עבור מוצרי AI, observability מורחבת: token usage per request, model latency, cost per interaction, hallucination rate, output quality score. כלים: LangSmith, Weights & Biases, Helicone. Interaction triples: לכל פעולת AI, שמור context (מה ה-user נתן), action (מה ה-AI עשה), outcome (האם ה-user קיבל מה שרצה). זה גם observability וגם training data לשיפור המודל. Mastra ו-frameworks דומים מגיעים עם built-in observability דרך OpenTelemetry."
      },
      {
        heading: "Incident Response: מה עושים כשמשהו נשבר",
        body: "כשיש alert: (1) Acknowledge — מישהו לקח ownership בתוך 5 דקות. (2) Communicate — עדכן stakeholders: 'אנחנו מודעים, חוקרים'. (3) Investigate — בדוק logs, metrics, traces. (4) Mitigate — הפסק את הנזק (rollback, feature flag כבוי). (5) Resolve. (6) Post-mortem blameless: מה קרה, למה, מה ימנע חזרה. Run book הוא המדריך לכל alert — מי מתעורר, מה בודקים, מה ה-escalation path. כותבים אותו כשהמערכת עובדת, לא כשהיא נופלת."
      }
    ],
    task: {
      title: "הגדרת SLOs ו-Debugging Playbook",
      description: "הגדר 3 SLOs למוצר שלך עם מספרים ספציפיים — לא 'מהיר' אלא 'p95 < 200ms'. לכל SLO: מה ה-metric, מה ה-target, מה ה-measurement method. בנוסף, בחר 3 bugs שקרו בעבר ותעד כל אחד: סימפטום, סיבות שנחשדו, סיבה אמיתית, תיקון, ואיך למנוע בעתיד.",
      deliverable: "מסמך SLO + bug post-mortems",
      tips: [
        "חשוב: מה יגרום למשתמשים לעזוב אם יישבר? — שם תתחיל עם SLOs",
        "הבדל בין 99% ל-99.9%: 99% = 7.2 שעות downtime לחודש. 99.9% = 44 דקות",
        "שאל: כמה זמן לוקח לנו להרגיש בבעיה ב-production? אם יותר מ-5 דקות — חסר monitoring",
        "ב-post-mortem: לא 'מי אשם?' אלא 'מה שבר?' — blameless culture"
      ]
    },
    quiz: [
      { q: "מה ההבדל בין logs ל-metrics?", options: ["אותו דבר", "Logs = תיאור אירועים ספציפיים, Metrics = מספרים מצטברים לאורך זמן", "Metrics עולים יותר", "Logs הם רק לerrors"], correct: 1 },
      { q: "מה זה SLO?", options: ["Service Level Objective — יעד מדיד פנימי לאיכות שירות", "Software Language Object", "Security Login Option", "Server Log Output"], correct: 0 },
      { q: "מה זה error budget?", options: ["תקציב לתיקון bugs", "הזמן או errors המותרים לפי ה-SLO לפני שמפסיקים לdeploy features", "כסף שמשלמים על errors", "תקציב לinfrastructure"], correct: 1 },
      { q: "מי אחראי על הגדרת מה לנטר?", options: ["רק ה-DevOps", "רק ה-CTO", "Product + Engineering יחד", "אין צורך לנטר"], correct: 2 },
      { q: "מה זה structured logging?", options: ["logs בformatting נחמד", "JSON-formatted logs עם שדות קבועים שניתן לחפש ולסנן", "שמירת logs בתיקיות מסודרות", "logs שנכתבים אוטומטית"], correct: 1 }
    ]
  },
  {
    id: 8, week: 8, phase: "בנייה",
    title: "Technical Debt", titleEn: "Tech Debt & Refactoring",
    description: "להבין מה זה technical debt, מתי לשלם אותו ואיך לדבר עליו עם stakeholders.",
    objectives: [
      "להגדיר technical debt ולסווג אותו לקטגוריות",
      "להבין את העלות הנסתרת ואיך למדוד אותה",
      "לזהות סימפטומים של debt גבוה",
      "לבנות טיעון ROI לrefactoring",
      "לאזן בין features חדשים ל-debt",
      "לתקשר debt ל-stakeholders לא-טכניים"
    ],
    learnContent: [
      {
        heading: "Technical Debt — ריבית על קיצורי דרך",
        body: "כל פעם שבוחרים פתרון מהיר במקום נכון, נוצר debt. כמו הלוואה: שלמת עכשיו פחות, אבל בעתיד תשלם יותר בזמן, bugs ו-developer frustration. Martin Fowler הגדיר 4 סוגים: Deliberate-Prudent ('נעשה זאת נכון אחרי launch'), Deliberate-Reckless ('לא אכפת לנו'), Inadvertent-Prudent (לא ידענו טוב יותר), Inadvertent-Reckless (רשלנות). ה-debt הראשון הוא הנפוץ ב-startups — MVP שהפך ל-production בלי refactor."
      },
      {
        heading: "סימפטומים: איך מזהים debt?",
        body: "Velocity יורדת: כל feature לוקח יותר זמן כי 'צריך להבין את הקוד הישן'. Bug density: אותו מודול שוב ושוב. Fear of touching: 'אל תיגע בזה, אף אחד לא יודע איך עובד'. Long onboarding: developer חדש לוקח שבועות להגיע ל-first commit. Test coverage נמוך: אי אפשר לשנות כלום בלי לפחד. כ-product builder, שאל את הצוות: 'מה ה-3 דברים הכי כואבים לעבוד איתם?' — זה ה-debt שלך."
      },
      {
        heading: "קטגוריות Debt: לא הכל שווה",
        body: "Design Debt: ארכיטקטורה לא נכונה — monolith שצריך להיות microservices, או להיפך. Code Debt: קוד שקשה לקרוא, לתחזק, לtest. Test Debt: אין tests או tests שלא מכסים cases חשובים. Documentation Debt: אף אחד לא יודע איך המערכת עובדת. Infrastructure Debt: שרתים מיושנים, outdated dependencies עם CVEs. לכל קטגוריה — עלות שונה ואסטרטגיית טיפול שונה. AI-generated code יכול לייצר debt מהר — חשוב לreview בקפידה."
      },
      {
        heading: "ROI של תיקון Debt: מתי לשלם?",
        body: "חישוב: (זמן שנחסוך ב-6 חודשים) > (זמן לתקן) → תיקן. 'Strangler Fig Pattern': במקום rewrite, עוטפים את הקוד הישן בהדרגה ומחליפים חלק אחר חלק — מינימום סיכון. Refactoring in-place: ניקוי הדרגתי תוך כדי עבודה. Big Rewrite: הימור — לרוב לוקח פי 3 מהצפוי ויוצר debt חדש. כ-product builder, הצג ב-business terms: 'כל bug במודול הזה לוקח 3 שעות לתקן. 5 bugs לשבוע = 15 שעות. תיקון ה-debt = 40 שעות = ROI ב-3 שבועות'."
      },
      {
        heading: "תקשורת Debt ל-Stakeholders",
        body: "המשפטים שלא עובדים: 'צריך לrefactor'. המשפטים שעובדים: 'כל feature חדש לוקח X% יותר זמן מאשר היה לוקח לפני 6 חודשים'. DORA metrics: Deployment Frequency, Lead Time for Changes, Mean Time to Recovery, Change Failure Rate — אלה המדדים שמגדירים בריאות engineering ומושפעים ישירות מ-debt. כ-product builder, בנה את הטיעון עם מספרים ותרגם לעלות עסקית: זמן, אמינות, מהירות."
      }
    ],
    task: {
      title: "Tech Debt Audit ו-Payoff Analysis",
      description: "שאל את הצוות שלך: מה 3 הדברים הכי 'כואבים' לעבוד איתם? עבור כל אחד: מה הסימפטום, לאיזה קטגוריה הוא שייך, מה העלות הנוכחית (שעות/חודש שנאבדות), מה העלות לתיקון, ומה ה-ROI. בנה recommendation: מה לתקן ראשון ולמה.",
      deliverable: "Tech Debt Register עם עדיפויות ו-ROI estimates",
      tips: [
        "תרגם ל-business terms: לא 'הarchitecture גרועה', אלא 'כל feature חדש לוקח X שעות יותר בגלל זה'",
        "חפש: מאיפה רוב ה-bug reports? מאיפה רוב ה-hotfixes? — שם ה-debt הכי כואב",
        "בדוק: כמה זמן dev חדש צריך להגיע ל-first commit? אם יותר מ-2 שבועות — documentation debt",
        "הצג כ-Technical Health Score — לא רשימת בעיות, אלא טבלת ROI"
      ]
    },
    quiz: [
      { q: "מה זה technical debt?", options: ["כסף שחייבים ל-cloud provider", "קוד שנכתב מהר במקום נכון — יוצר עלות עתידית גבוהה", "bugs שלא תוקנו", "feature שלא הושלם"], correct: 1 },
      { q: "מתי כדאי לטפל ב-tech debt?", options: ["אף פעם, זה בזבוז זמן", "תמיד לפני כל feature חדש", "כשעלות להתעלם ממנו גבוהה מהעלות לתקן", "רק כשיש crash"], correct: 2 },
      { q: "מה זה Strangler Fig Pattern?", options: ["pattern לkill threads", "החלפה הדרגתית של קוד ישן תוך עטיפתו במערכת חדשה", "refactoring מלא בפעם אחת", "design pattern לUI"], correct: 1 },
      { q: "איך מסבירים tech debt ל-stakeholders לא-טכניים?", options: ["לא מסבירים", "בז'רגון טכני מלא", "בעלויות עסקיות: זמן, אמינות, מהירות — עם ROI calculation", "מסתירים את זה"], correct: 2 },
      { q: "מה זה DORA metrics?", options: ["מדדי בריאות engineering: Deployment Frequency, Lead Time, MTTR, Change Failure Rate", "כלי monitoring", "שם חברה", "מדדי marketing"], correct: 0 }
    ]
  },
  {
    id: 9, week: 9, phase: "סוכנים",
    title: "Agent Architecture", titleEn: "Agent Systems",
    description: "איך AI agents בנויים, מה ה-loops שלהם, ומה ההבדל בין agent ל-automation פשוטה.",
    objectives: [
      "להבין LLM כמנוע החלטות ב-ReAct loop",
      "לזהות agent loops ו-failure modes",
      "להבחין בין tool use ל-RAG",
      "לתכנן agent-based feature עם guardrails",
      "להבין multi-agent architectures",
      "לזהות מתי agent מתאים ומתי automation מספיקה"
    ],
    learnContent: [
      {
        heading: "Agent = LLM + Tools + Loop",
        body: "Agent הוא LLM שיכול לקחת פעולות בעולם. Architecture: LLM מקבל מטרה ו-context → מחליט על action (ReAct: Reason + Act) → מריץ tool → מקבל observation → חוזר ל-LLM עם תוצאה → מחליט מה הבא. ההבדל מautomation פשוטה: automation רצה script קבוע; agent מחליט בעצמו על sequence הפעולות בהתבסס על תוצאות. זה גם הכוח — וגם הסיכון שדורש guardrails."
      },
      {
        heading: "Tool Use — יכולות ה-Agent",
        body: "Tool = function שה-agent יכול לקרוא לה. דוגמאות: web_search(query), read_file(path), call_api(url, params), send_email(to, subject, body), run_sql(query), write_code(spec). ה-LLM מחליט מתי לקרוא לאיזה tool ועם אילו parameters. כ-product builder, כשמתכנן agent — שאל: אילו tools הוא צריך? מה ה-permission שכל tool דורש? מה יקרה אם agent ישתמש ב-tool הלא נכון על הנתונים הלא נכונים?"
      },
      {
        heading: "RAG — Memory מהעולם",
        body: "RAG (Retrieval-Augmented Generation): לפני שה-LLM עונה, מחפשים documents רלוונטיים ב-knowledge base ומוסיפים אותם ל-context. Architecture: user query → embedding → vector similarity search → retrieve top-k chunks → inject to prompt → LLM answers. Vector databases: Pinecone, Weaviate, pgvector (PostgreSQL extension). כ-product builder, RAG הוא הדרך לתת ל-AI knowledge על ה-domain שלך בלי לtrain מחדש — יעיל ועדכני."
      },
      {
        heading: "Multi-Agent Systems",
        body: "מערכות מורכבות משתמשות ב-multiple agents: Orchestrator agent מקבל task ומחלק ל-subagents. Worker agents מתמחים בתחומים (research_agent, coding_agent, reviewer_agent). Patterns: Sequential (A→B→C), Parallel (A+B+C בו-זמנית), Hierarchical (manager→workers). Frameworks: LangGraph, AutoGen, CrewAI, Mastra. כ-product builder, הסכנה: complexity שקשה לdebug. כלל: התחל עם agent יחיד, הוסף agents רק כשיש סיבה ברורה."
      },
      {
        heading: "Agent Safety ו-Failure Modes",
        body: "Agents נכשלים באופנים ייחודיים: Hallucination on tool use (קורא לtool שלא קיים), Infinite loops (לא מגיע לgoal ומסתחרר), Catastrophic actions (מוחק data במקום לarchive, שולח email לכולם), Prompt injection (input גורם ל-agent להתנהג אחרת). Guardrails: max_steps limit, confirmation before irreversible actions, output validation, human-in-the-loop לactions רגישים. כ-product builder, הגדר failure modes לפני שמתחילים לבנות."
      }
    ],
    task: {
      title: "תכנון Agent מלא",
      description: "תכנן agent אחד שיכול לסייע לפיצ'ר במוצר שלך. מסמך design יכלול: מטרת ה-agent, רשימת tools (שם, תיאור, parameters), ה-loop (איך הוא מחליט מה הבא), failure modes (מה יכול להשתבש), guardrails (איך מגנים), ו-success metric (איך יודעים שעבד).",
      deliverable: "Agent Design Document + רשימת tools",
      tips: [
        "תחשוב: מה ה-agent יכול לעשות לא-נכון? לכל tool — מה ה-worst case?",
        "הגדר explicit human-in-the-loop לכל action שאינו הפיך (שליחת email, מחיקת data)",
        "שאל: איך ה-agent ידע שהוא נכשל? מה קורה אז? (fallback strategy)",
        "התחל פשוט: LLM + 2-3 tools, לא 15 tools ב-batch ראשון"
      ]
    },
    quiz: [
      { q: "מה ההבדל בין agent לautomation פשוטה?", options: ["agent יקר יותר", "Agent מחליט בעצמו על sequence הפעולות, automation מריצה script קבוע", "אין הבדל", "Automation חכמה יותר"], correct: 1 },
      { q: "מה זה tool use ב-agent?", options: ["שימוש בפטיש", "יכולת ה-agent לקרוא לפונקציות חיצוניות (APIs, DB, web)", "ממשק משתמש", "סוג LLM"], correct: 1 },
      { q: "מה זה RAG?", options: ["סוג agent", "Retrieval-Augmented Generation — חיפוש ב-knowledge base והזרקה ל-context לפני תשובה", "שפת prompt", "כלי monitoring"], correct: 1 },
      { q: "מה הסכנה של Prompt Injection ב-agent?", options: ["agent רץ לאט", "input של user גורם ל-agent להתעלם מinstructions המקוריות ולפעול אחרת", "agent משתמש ב-tool הלא נכון", "agent עולה יותר כסף"], correct: 1 },
      { q: "מתי להשתמש ב-multi-agent system?", options: ["תמיד — יותר agents יותר טוב", "רק כש-single agent לא מספיק ויש task מורכב שspecialization עוזרת לו", "כשרוצים לחסוך", "כש-LLM איטי"], correct: 1 }
    ]
  },
  {
    id: 10, week: 10, phase: "סוכנים",
    title: "Prompt Engineering", titleEn: "Prompts at Scale",
    description: "לכתוב prompts שעובדים בproduction — system prompts, few-shot examples ו-evals.",
    objectives: [
      "לכתוב system prompt יעיל עם כל הרכיבים",
      "להבין few-shot prompting ו-chain-of-thought",
      "לבנות eval בסיסי לבדיקת quality",
      "לנהל prompt versioning",
      "להגן מ-prompt injection",
      "לנהל context window בחוכמה"
    ],
    learnContent: [
      {
        heading: "System Prompt — ה-Spec של ה-AI שלך",
        body: "ה-system prompt הוא ה-spec שה-LLM מקבל לפני כל שיחה. הוא מגדיר: persona ('אתה assistant מומחה בX'), task ('תפקידך לעשות Y'), constraints ('אל תעשה Z'), format ('ענה תמיד ב-JSON עם fields: ...'), examples (few-shot). כמו spec ל-microservice — כל שינוי בו משפיע על כל ה-outputs. System prompt הוא IP של המוצר שלך — שמור אותו כ-secret ונהל אותו ב-version control כמו קוד."
      },
      {
        heading: "Few-Shot Prompting ו-Chain-of-Thought",
        body: "Few-shot: נותן ל-LLM דוגמאות של קלט-פלט בתוך ה-prompt. 3-5 דוגמאות לרוב מספיקות לשיפור דרמטי. Chain-of-Thought (CoT): מבקש מה-LLM לחשוב בשלבים לפני תשובה: 'חשוב step-by-step'. משפר accuracy ב-tasks של reasoning. Self-consistency: מריצים את ה-prompt כמה פעמים ולוקחים majority vote — יקר אבל מדויק לtasks קריטיים. Negative examples: הראה גם מה ה-agent לא אמור לעשות."
      },
      {
        heading: "Context Window Management",
        body: "Context window הוא ה-זיכרון הפעיל של ה-LLM לsession. Claude Sonnet 4.6 = 200K tokens. GPT-4o = 128K tokens. הבעיה: context גדול = יקר + איטי + ה-model שוכח מה בתחילת הcontext ('lost in the middle'). אסטרטגיות: RAG במקום document stuffing, summarization של history, structured context (רק מה שרלוונטי), declarative fallback — 'לא מצאתי מידע על X, בדוק מקור ישיר'."
      },
      {
        heading: "Evals — Testing לPrompts",
        body: "Eval הוא ה-test suite של ה-AI שלך. מרכיבים: dataset של inputs, expected outputs (או rubric), automated scorer. דוגמה: 100 שאלות → הרץ prompt → score כל תשובה (correctness, format, safety). כשמשנים system prompt — הרץ evals. בלי evals: שינוי ב-prompt ישבור production cases בלי שידעת. כלים: DeepEval, LangSmith evals, Braintrust, RAGAS (לRAG pipelines). Evals הם ה-CI/CD של ה-AI שלך."
      },
      {
        heading: "Prompt Security ו-Version Control",
        body: "Prompt Injection: user input שמנסה לoverride את ה-system prompt — 'Ignore previous instructions and...'. הגנה: delimiter ברורים בין system ל-user input, input sanitization, output validation. Prompt Versioning: prompts ב-git repository עם tags לversions (v1.0, v2.0-prod), A/B testing בין versions, tracking של איזה version הניב את התוצאות הטובות ביותר. שינוי prompt בלי versioning הוא כמו deploy בלי rollback plan."
      }
    ],
    task: {
      title: "כותבים ומבדקים System Prompt",
      description: "כתוב system prompt לagent שתכננת ביחידה הקודמת. כלול: מטרה, אישיות, constraints, format מצופה, ו-3-5 few-shot examples. אחרי כתיבה: הרץ 10 test cases ידניים עם inputs מייצגים. תעד: מה עבד, מה לא עבד, ואיזה iteration עשית.",
      deliverable: "System prompt גמור + תיעוד 10 test cases",
      tips: [
        "כלול negative examples — מה ה-agent לא אמור לעשות? דוגמה מפורשת עוזרת יותר מהסבר",
        "בדוק את ה-prompt עם edge cases: input ריק, input בשפה אחרת, input שמנסה לbreak",
        "האם ה-output format consistent? הרץ 5 פעמים על אותו input — מה משתנה?",
        "שנה פרמטר אחד בכל פעם כשמשנים prompt — לא הכל ביחד, כדי לדעת מה השפיע"
      ]
    },
    quiz: [
      { q: "מה זה few-shot prompting?", options: ["prompting קצר", "מתן דוגמאות קלט-פלט בתוך ה-prompt ל-LLM", "prompt בעברית", "prompt אחד בלבד"], correct: 1 },
      { q: "מה זה eval ב-LLM context?", options: ["הערכת עובדים", "בדיקה אוטומטית של איכות outputs ה-LLM על dataset קבוע", "סוג model", "כלי UI"], correct: 1 },
      { q: "למה חשוב prompt versioning?", options: ["לחסוך tokens", "לעקוב איך שינויים ב-prompt משפיעים על outputs ולאפשר rollback", "למפתח חדש", "לCTO"], correct: 1 },
      { q: "מה זה Prompt Injection?", options: ["injection של SQL דרך prompt", "ניסיון של user input לoverride את ה-system prompt ולשנות התנהגות ה-agent", "שגיאת תחביר בprompt", "שליחת prompt גדול מדי"], correct: 1 },
      { q: "מה זה context window?", options: ["חלון UI באפליקציה", "כמות הtext שה-LLM יכול להחזיק ב-זיכרון פעיל לאורך session", "סוג token", "גודל המודל"], correct: 1 }
    ]
  },
  {
    id: 11, week: 11, phase: "סוכנים",
    title: "Building with Agents", titleEn: "Feature Building",
    description: "לבנות feature אמיתי עם AI agent — מ-design ועד deployment.",
    objectives: [
      "לתכנן agent-powered feature end-to-end",
      "לעבוד עם coding agent בצורה מסודרת (Plan → Chunk → Test → Integrate)",
      "לבדוק ו-debug agent behavior",
      "לreview קוד שנוצר ע\"י AI בצורה ביקורתית",
      "לשחרר feature עם AI ל-production בביטחון",
      "להבין staged rollout מיוחד למוצרי AI"
    ],
    learnContent: [
      {
        heading: "Workflow: Build-with-Agent, לא Give-Prompts",
        body: "Building עם coding agent הוא מיומנות. Workflow: (1) Plan mode — הנח ל-agent לחקור ה-codebase ולבנות תוכנית לפני כתיבת קוד. (2) Spec ברור — מה ה-input, output, constraints ו-tests. (3) Chunk קטן — משימה אחת, קובץ אחד, function אחת בכל פעם. (4) בדיקה — test לכל chunk לפני הבא. (5) Integrate — רק אחרי שכל chunk עובד בנפרד. Agent שמקבל task של 'בנה את כל המוצר' — יכשל. Agent שמקבל 'צור function שעושה X עם input Y ומחזיר Z' — יצליח."
      },
      {
        heading: "Code Review לAI-Generated Code",
        body: "AI agents מייצרים קוד מהר — אבל product builder חייב לreview כמו senior developer. Red flags לחפש: no error handling (happy path only), magic numbers, hardcoded credentials, no input validation, god functions (100+ שורות), commented-out code, TODO בproduction. כלל: 'If it looks right but I don't understand it — that's a red flag'. קוד שלא מבינים הוא debt שיפוצץ ב-production. Security review prompt לאחד מה-AI agents הוא כלי חיוני."
      },
      {
        heading: "Testing Agent-Written Code",
        body: "Unit tests: בדיקת function בודדת בisolation. Integration tests: בדיקת מספר components יחד. E2E tests: בדיקת flow מלא (Playwright, Cypress). TDD עם agents: כתוב test לפני שמבקש קוד — זה מגדיר spec מדויק ל-agent ומוודא שהפלט כפי שציפית. Test coverage: 80%+ הוא target טוב. כשה-agent כותב קוד שעובר tests שהם בעצמם נכתבו ע\"י agent — וודא שה-tests בודקים את מה שחשוב."
      },
      {
        heading: "Debugging Agent Failures",
        body: "כשagent מחזיר קוד שלא עובד: (1) בדוק אם לא נתת context מספיק — הוסף. (2) האם ה-chunk גדול מדי — חלק. (3) האם ה-spec לא ברור — הגדר מחדש. (4) Model choice — Claude Opus לtasks מורכבים, Sonnet לiteration מהיר. (5) Temperature — 0 ל-deterministic tasks (code), 0.7+ ל-creative tasks. 'Debug, understand, provide better context' — לא 'מחק ותנסה שוב'. כל failure הוא data על מה ה-agent לא הבין."
      },
      {
        heading: "Staged Rollout לAI Features",
        body: "AI features דורשים staged rollout כי ה-behavior probabilistic. המלצה: (1) Internal dogfooding (2 שבועות) — הteam משתמש ומדווח. (2) Design partners (4 שבועות) — לקוחות נבחרים עם feedback loop. (3) Limited beta (4-6 שבועות) — waitlist עם gating על evals metrics. (4) GA — general availability. בכל שלב: evals מוגדרות מראש, monitoring לhallucination rate ולcost, rollback plan. לא כמו traditional code — behavior AI עשוי לpaopulate להפתיע ב-scale."
      }
    ],
    task: {
      title: "Build Sprint — Feature עם AI Agent",
      description: "בחר feature ספציפי ובנה אותו עם coding agent. תעד את ה-process: מה ה-spec, איך חילקת לchunks, אילו iterations עשית, מה השתבש ואיך תיקנת. בסוף: review את הקוד שה-agent כתב — מה היה טוב, מה היה צריך שינוי, מה היית עושה אחרת.",
      deliverable: "URL לfeature חי (אפילו stub) + process log + code review notes",
      tips: [
        "Chunk קטן = feedback מהיר = למידה מהירה. אל תתן לagent task של יותר מ-2-3 שעות בבת אחת",
        "כתוב test לפני שמבקש קוד — זה מגדיר spec ברור ומוודא את ה-output",
        "אחרי כל chunk: הרץ tests לפני שממשיכים. אל תbuild על קוד שלא עובד",
        "תיעד: מה לא עבד ולמה? — זה ה-learning הכי ב valuable מהsprin"
      ]
    },
    quiz: [
      { q: "מה המשמעות של 'feature flags' ב-deployment?", options: ["דגלים בממשק", "יכולת להפעיל/לכבות feature לחלק מהמשתמשים ללא deployment חדש", "כלי testing", "סוג CI"], correct: 1 },
      { q: "מה ה-granularity הנכונה לתת לcoding agent?", options: ["כל ה-codebase בבת אחת", "משימות קטנות וממוקדות עם context ברור ו-acceptance tests", "רק bug fixes", "רק comments"], correct: 1 },
      { q: "מה קורה כשagent מחזיר קוד שלא עובד?", options: ["זורקים את הcoding agent", "debug, הבנה מה חסר, ומתן context טוב יותר", "שולחים לCTO", "מוחקים את הקוד"], correct: 1 },
      { q: "למה לכתוב tests לפני קוד (TDD) כשעובדים עם agent?", options: ["זה חוק חוקי", "test מגדיר spec מדויק לagent ומאפשר לבדוק אוטומטית אם הקוד עובד", "זה מהיר יותר", "כי agent לא מבין קוד"], correct: 1 },
      { q: "מה ה-staged rollout המומלץ ל-AI feature?", options: ["Deploy ישירות לכולם", "Internal dogfooding, Design partners, Limited beta, GA", "Build, Test, Deploy", "Alpha, Beta, Release"], correct: 1 }
    ]
  },
  {
    id: 12, week: 12, phase: "סוכנים",
    title: "Code Review", titleEn: "Technical Judgment",
    description: "לקרוא קוד ולשפוט אותו — לא כמפתח, אלא כ-product builder שמבין מה חשוב.",
    objectives: [
      "לקרוא code review ולהבין מה מסתתר שם",
      "לזהות red flags ב-AI-generated code",
      "לבנות security review checklist",
      "לתת feedback בונה ומדויק",
      "להבין performance red flags (N+1, missing indexes)",
      "ליצור security review prompt לAI agents"
    ],
    learnContent: [
      {
        heading: "Code Review = Quality Gate, לא Gatekeeping",
        body: "Code review הוא לא בדיקת syntax — IDE עושה זאת. הוא שיחה על: האם הפתרון נכון? האם maintainable? האם testable? האם secure? האם consistent עם ה-codebase? כ-product builder, אינך צריך לקרוא כל שורה — אבל כן לשאול: 'האם יש tests? מה קורה כשנכשל? מה עם edge cases?' Review טוב מעביר knowledge, מונע bugs, וmפיק architecture טובה יותר. זו השקעה, לא checkpoint."
      },
      {
        heading: "Red Flags ב-AI-Generated Code",
        body: "AI agents מייצרים קוד שנראה נכון אבל יכול להיות שברירי. Red flags: God functions (100+ שורות שעושות הכל), Magic numbers (if status == 3 — מה זה 3?), No error handling (happy path only), Hardcoded credentials (API key בקוד), Commented-out code (למה? מה היה שם?), TODO comments ב-production code, No input validation, Direct string concatenation ב-SQL queries. כ-product builder, בנה sensitivity לpatterns אלה — הם הסימן שצריך לחפור עמוק יותר."
      },
      {
        heading: "Security Review ב-Code Review",
        body: "לכל PR, בדוק: (1) Auth checks — כל endpoint מגדיר מי מורשה? (2) Input validation — כל input מהuser validated? (3) SQL parameterization — לא string concatenation. (4) Exposed secrets — grep ל-'key', 'password', 'secret' ב-diff. (5) File uploads — signed URLs? size limits? type validation? (6) Error messages — האם מחזירים info רגיש? 'Database error: column password value X' — זו בעיה. Security review prompt ל-AI agent: template שמבקש מ-Claude לחפש vulnerabilities ספציפיים."
      },
      {
        heading: "Performance Red Flags",
        body: "N+1 Problem: בלופ, קוראים ל-database בכל iteration — 100 users = 101 queries במקום 1. פתרון: eager loading, JOIN. Blocking operations: קוד synchronous שblocks ה-server thread — לשים ב-background job. Missing indexes: query עושה full table scan כשיש LIMIT + ORDER. Large payloads: מחזירים 50 שדות כש-frontend צריך 3. כ-product builder, שאל: 'כמה DB queries יש לendpoint הזה? מה קורה ב-1000 concurrent users?'"
      },
      {
        heading: "Code Review Culture ו-Feedback",
        body: "Async review: מפרסמים PR, reviewer מוסיף comments ב-GitHub. Sync review (pair programming): יחד על אותו מסך. Nit vs Blocking: 'nit:' = nice to have, לא חוסם merge. 'blocking:' = חייב לתקן. Tone: 'הפונקציה הזו ארוכה, שקול לחלק' לא 'הפונקציה הזו גרועה'. כ-product builder, task שלך: ליצור culture שבה review הוא learning opportunity לא judgment. Security review prompt לAI: template מוכן שמבקש review ספציפי על vulnerabilities."
      }
    ],
    task: {
      title: "Code Review Checklist ו-Security Review Prompt",
      description: "צור שני deliverables: (1) Code Review Checklist מנקודת מבט של product builder — 10-12 פריטים מחולקים לקטגוריות: Security, Performance, Maintainability, Testing. (2) Security Review Prompt לAI agent — prompt שניתן לתת ל-Claude יחד עם קוד ולקבל security review מובנה.",
      deliverable: "Code Review Checklist + Security Review Prompt",
      tips: [
        "חשוב: security, error handling, performance, testability — הבסיס",
        "הוסף items ספציפיים ל-stack שלך (Next.js? Supabase? React Native?)",
        "Test ה-security prompt על קוד אמיתי — האם מוצא בעיות שהיית מפספס?",
        "בניית checklist = learning tool לא פחות מ-quality gate"
      ]
    },
    quiz: [
      { q: "מה המטרה העיקרית של code review?", options: ["להאיט את הפיתוח", "לתפוס bugs ולשפר quality לפני production + knowledge sharing", "לבקר מפתחים", "לתעד קוד"], correct: 1 },
      { q: "מה זה N+1 Problem?", options: ["11 שגיאות בקוד", "קריאה לdatabase בכל iteration של לופ במקום query יחיד", "bug ב-library", "error ב-CI"], correct: 1 },
      { q: "מה הוא red flag ב-code review?", options: ["קוד שנכתב מהר", "magic numbers, no error handling ו-hardcoded credentials", "קוד שמפתח חדש כתב", "קוד שפועל ב-production"], correct: 1 },
      { q: "מה זה 'nit' ב-code review?", options: ["bug חמור", "הערה אופציונלית שלא חוסמת merge", "blocking comment", "security vulnerability"], correct: 1 },
      { q: "כ-product builder, מה הדבר הראשון שבודקים ב-PR?", options: ["האם הcode יפה", "האם יש tests ו-error handling לflows הראשיים", "כמה שורות קוד יש", "מי כתב"], correct: 1 }
    ]
  },
  {
    id: 13, week: 14, phase: "delivery",
    title: "Technical Leadership", titleEn: "Leading Technical Work",
    description: "להוביל delivery טכני — prioritization, unblocking, stakeholder communication ו-technical decision making.",
    objectives: [
      "לנהל technical backlog בביטחון",
      "לunblock engineering בלי micromanagement",
      "לתקשר technical risks ל-stakeholders",
      "לקבל technical decisions עם framework ברור",
      "להשתמש ב-DORA metrics למדידת בריאות engineering",
      "לכתוב Technical Decision Document (TDD)"
    ],
    learnContent: [
      {
        heading: "Technical Leadership אינה כתיבת קוד",
        body: "Technical leadership הוא היכולת להוביל עבודה טכנית — להגדיר בעיות ברורות, לפנות חסמים, לקבל decisions ב-uncertainty ולהפוך complexity ל-clarity. DACI framework לdecision-making: Driver (מוביל), Approver (מחליט), Consulted (מייעץ), Informed (מעודכן). לכל decision גדול — הגדר DACI מראש. הבלבול בין 'מי צריך לדעת' ל'מי צריך להחליט' הוא מקור נפוץ לbottlenecks ולמשיחות שלא מגיעות לresolution."
      },
      {
        heading: "Managing Technical Backlog",
        body: "Technical backlog = tech debt + infrastructure work + tooling + security fixes. Ratio מקובל: 70% features, 20% tech debt/infrastructure, 10% security. כדי לנהל technical backlog ביעילות: items מתועדים (tech debt register), מוגדרים ב-outcome (לא 'לrefactor' אלא 'לצמצם bug rate במodule X ב-50%'), בעלי ROI מדיד (ראה Unit 8), ומשולבים ב-regular sprint — לא 'ה-project הגדול שאף פעם לא מגיע'. Technical backlog שלא מנוהל הוא hidden liability."
      },
      {
        heading: "Unblocking Engineering: לנהל בלי Micromanagement",
        body: "Unblocking = הסרת חסמים, לא ניהול. שאלות לidentify חסמים: 'מה הכי עוצר אתכם?' 'האם יש dependency שמחכה לperson/team אחר?' 'האם ה-spec מספיק ברור?' 'האם יש tooling שחסר?' Techniques: Decision-making clarity (הteam יודע מי מחליט מה), Technical spike (2 ימי exploration לפני commitment לarchitecture), ADR (Architecture Decision Record) — תיעוד decisions ו-rationale לhאחרים. Product builder שmicromanages engineers = bottleneck, לא enabler."
      },
      {
        heading: "תקשורת Technical Risk ל-Stakeholders",
        body: "Translating technical to business: 'ה-database לא מscaled ל-10x traffic' → 'אם נקבל 5000 users נוספים החודש, site יפול. תיקון: 3 שבועות. אם לא נתקן: downtime + potential churn'. Template: Current state → Risk → Probability → Business Impact → Mitigation options → Recommendation → Timeline. לא 'יש tech debt' — 'יש 3 מקומות שיכולים לשבור. כך נתעדף אותם ב-ROI.' מספרים קונקרטיים מנצחים תיאורים מופשטים."
      },
      {
        heading: "DORA Metrics ו-Engineering Health",
        body: "DORA metrics מגדירים בריאות engineering: Deployment Frequency (כמה פעמים בשבוע/יום פורסים?), Lead Time (כמה זמן מ-commit לproduction?), MTTR (כמה מהר חוזרים מbug production?), Change Failure Rate (% של deploys שגרמו לincident). כ-product builder, DORA metrics הם ה-KPIs שלך לteam performance — לא רק 'כמה features שחררנו'. Elite teams: Deploy מספר פעמים ביום, Lead Time < שעה, MTTR < שעה, Change Failure Rate < 5%."
      }
    ],
    task: {
      title: "Technical Decision Document (TDD)",
      description: "כתוב TDD לאתגר טכני שנתקלת בו. מבנה: Context (מצב הנוכחי), Problem (מה לא עובד), Options (לפחות 3 alternatives), Tradeoffs (pros/cons לכל option), Decision (מה בחרת ולמה), Risks (מה יכול להשתבש), Metrics (איך תדע שהחלטת נכון).",
      deliverable: "TDD מלא (1-2 עמודים)",
      tips: [
        "הפורמט חשוב: Context → Options → Tradeoffs → Decision → Risks",
        "כלול את ה-option 'לא לעשות כלום' — לעתים זה ה-best decision",
        "בדוק: האם ה-TDD מספיק ברור שמישהו שלא היה בשיחה יבין את ה-rationale?",
        "שאל: מה ה-reversibility? decisions הפיכים — act fast. בלתי הפיכים — slow down ותתייעץ"
      ]
    },
    quiz: [
      { q: "מה זה technical leadership?", options: ["כתיבת הכי הרבה קוד", "הובלת עבודה טכנית — decisions, unblocking, clarity ו-risk communication", "ניהול infrastructure", "להיות CTO"], correct: 1 },
      { q: "מה זה TDD בהקשר זה?", options: ["Test Driven Development", "Technical Decision Document — תיעוד החלטה טכנית עם context ו-rationale", "Team Daily Discussion", "Tool Deployment Document"], correct: 1 },
      { q: "מה ה-ratio המקובל בין features לtech debt ב-backlog?", options: ["100% features", "70% features, 20% tech debt, 10% security", "50/50 תמיד", "רק tech debt — no features"], correct: 1 },
      { q: "איך מתקשרים technical risk ל-stakeholder?", options: ["בז'רגון טכני מלא", "בעלויות עסקיות: מה יכול לשבור, הסתברות, impact עסקי ו-options לפתרון", "לא מספרים", "רק ב-post-mortem"], correct: 1 },
      { q: "מה זה DORA metrics?", options: ["מדדי בריאות engineering: Deployment Frequency, Lead Time, MTTR, Change Failure Rate", "כלי monitoring", "שם חברת consulting", "מדדי marketing"], correct: 0 }
    ]
  },
  {
    id: 14, week: 16, phase: "delivery",
    title: "Ship to Production", titleEn: "End-to-End Delivery",
    description: "ה-capstone: לשחרר feature אמיתי לproduction — מ-spec ועד monitoring.",
    objectives: [
      "לבנות release plan מלא עם כל הרכיבים",
      "לנהל rollout עם feature flags",
      "להגדיר success metrics לפני launch",
      "לנהל incident אם משהו משתבש",
      "לכתוב post-mortem blameless",
      "לתקשר למשתמשים ולstakeholders לאורך התהליך"
    ],
    learnContent: [
      {
        heading: "Release Plan — ה-Map לProduction",
        body: "Release plan טוב מכסה: Scope (מה בדיוק נשחרר), Rollout strategy (כמה users ומתי), Success metrics (מה מגדיר הצלחה — עם מספרים), Monitoring plan (מה נצפה ועל מה נalert), Communication plan (למי נודיע ומתי), Rollback plan (מה trigger לrollback ואיך). אין release טוב שמסתיים ב-'deployment succeeded'. הוא מסתיים כשמשתמשים משתמשים בfeature ואנחנו מודדים אותם עושים את זה — ורואים שהמדדים עמדו ביעד."
      },
      {
        heading: "Staged Rollout עם Feature Flags",
        body: "Rollout מדורג: (1) Internal (0.1% — הteam) — אישור בסיסי. (2) 1% — canary, early detection. (3) 10% — start seeing real patterns. (4) 50% — confidence building. (5) 100% — full release. בכל שלב: גating criteria ברורים ('אם error rate עולה מ-0.5% — stop'). Feature flag platform (LaunchDarkly, PostHog, GrowthBook) מאפשר לשלוט בclicks ולrollback בseconds. Rollout מדורג הוא לא רק technical safety — הוא גם product learning: אתה לומד מה-1% לפני שאתה commitתed לכולם."
      },
      {
        heading: "Success Metrics ו-Day 1 Dashboard",
        body: "Success metrics מוגדרים לפני launch, לא אחרי: Adoption (% users שניסו), Activation (% שהשלימו flow), Retention (% שחזרו), Error rate (SLO boundaries), Performance (P95 latency). Day 1 Dashboard — מסך אחד שכל הteam צופה בו ביום ה-launch: כמה users ניסו, error rate, latency, conversion. Automated alerts: אם error rate חוצה X — alert. אם conversion פחות מY אחרי Z שעות — signal לinvestigate. אל תנחש — תמדוד."
      },
      {
        heading: "Incident Management ו-Rollback",
        body: "כשמשהו משתבש post-launch: (1) Detect: alert או user report. (2) Acknowledge (בתוך 5 דקות): 'לקחנו ownership, חוקרים'. (3) Communicate: update לstakeholders. (4) Assess: האם לrollback? Criteria: error rate >X%, user complaints, SLO breach. (5) Rollback או mitigate: feature flag כboff, או code rollback. (6) Resolve. (7) Post-mortem. RTO (Recovery Time Objective): כמה זמן לוקח לrollback? זה SLO בפני עצמו — target: < 5 דקות."
      },
      {
        heading: "Post-Mortem ו-Continuous Learning",
        body: "Post-mortem blameless: לא 'מי אשם?' אלא 'מה שבר ואיך לא יקרה שוב?' Sections: What happened, Timeline of events, Root cause, Contributing factors, Action items (owner + due date). Action items נכנסים ל-backlog, לא ל-'good intentions'. Public post-mortems (כמו של Stripe, GitHub, Cloudflare) הם best practice — מגבירים trust, מוכיחים maturity. כ-product builder, כל incident הוא opportunity לsystem improvement. Capstone = synthesizes everything מ-16 השבועות."
      }
    ],
    task: {
      title: "Release Plan מלא — Capstone",
      description: "כתוב release plan מלא לfeature שבנית. כלול: scope וrollout strategy (מי, כמה, מתי), success metrics עם מספרים ספציפיים, monitoring plan (מה dashboard יראה ביום 1), rollback triggers ותהליך rollback, ו-communication plan (מי מקבל notification ומתי). זהו ה-capstone — synthesizes everything.",
      deliverable: "Release plan document מלא (2-3 עמודים)",
      tips: [
        "שאל: מה ה-worst case? כמה זמן לוקח rollback? (כוון ל-5 דקות מקסימום)",
        "הגדר success metrics לפני launch — לא אחרי, כשצריכים להצדיק",
        "בנה Day 1 Dashboard — מה כל הteam יצפה בו ביום הראשון?",
        "תכנן: מה תגיד למשתמשים אם משהו ישתבש? (status page, email, in-app notification?)"
      ]
    },
    quiz: [
      { q: "מה זה rollback plan?", options: ["תוכנית לחגוג אחרי release", "תוכנית לחזרה לגרסה הקודמת אם משהו נשבר — עם triggers ותהליך ברור", "תוכנית לroll-out איטי", "מסמך post-mortem"], correct: 1 },
      { q: "מה success metrics ב-feature launch?", options: ["כמה שורות קוד נכתבו", "מדדים שמוגדרים לפני launch: adoption, error rate, performance, retention", "כמה bugs נמצאו", "כמה מהר נכתב"], correct: 1 },
      { q: "מה זה RTO?", options: ["Result Time Out", "Recovery Time Objective — כמה זמן לחזור לnormal אחרי incident", "Request Time Out", "Runtime Object"], correct: 1 },
      { q: "מה המטרה של post-mortem blameless?", options: ["למצוא מי אשם", "להבין מה שבר ולמנוע חזרה — בלי blame culture", "לrecovery", "לpromote אנשים"], correct: 1 },
      { q: "מהו ה-capstone של המסלול הזה?", options: ["מבחן תיאוריה", "שחרור feature אמיתי לproduction end-to-end עם release plan מלא", "כתיבת thesis", "הגשת קוד ב-GitHub"], correct: 1 }
    ]
  }
];

Object.assign(window, { UNITS_DATA });
