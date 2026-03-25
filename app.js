const syllabusData = {
  programTitle: "מסלול Technical Product Builder",
  roleTitle: "AI-Native Full-Stack Product Lead",
  durationWeeks: 16,
  coreGoal:
    "להוביל בנייה של מערכות בצורה מקצועית, ביקורתית ואחראית, עם מספיק עומק טכני כדי להבין ארכיטקטורה, לשפוט קוד, לנהל delivery ולהכווין סוכנים בלי ללכת לאיבוד בעומק מיותר.",
  pillars: [
    {
      title: "מושגים ומבנים",
      description: "להבין את מפת המערכת, השכבות, המונחים והאחריות של כל חלק."
    },
    {
      title: "ארכיטקטורה וזרימות",
      description: "לפרק user flows, להגדיר interfaces ולזהות איפה כל rule צריך לשבת."
    },
    {
      title: "קריאת קוד וריוויו",
      description: "לזהות קוד טוב, קוד מסוכן, hidden coupling וחורים בתכנון."
    },
    {
      title: "ניהול עבודה עם סוכנים",
      description: "לנסח scope, לבקש analysis נכון, ולדרוש diff קטן, בדיקות ותכנית rollback."
    },
    {
      title: "פרודקשן, אבטחה ותחזוקה",
      description: "לדעת לזהות סיכונים אמיתיים לפני שהם הופכים לבאגים או חורי אבטחה."
    }
  ],
  outcomes: [
    "לאפיין אפליקציה בצורה מקצועית ולא רק לכתוב prompt כללי.",
    "להבין אילו שכבות יש במערכת ומה האחריות של כל שכבה.",
    "להנחות סוכן או מפתח איך לממש פיצ'ר בלי להשאיר חורים.",
    "לקרוא PR ולהבין אם הוא טוב, מסוכן, חלקי או עקום.",
    "להוביל שינוי לפרודקשן עם פחות הפתעות."
  ],
  weeklyRhythm: [
    {
      title: "הבנה מושגית",
      description: "ללמוד את המונחים, השפה והמבנה של הנושא השבועי."
    },
    {
      title: "פירוק המערכת שלך",
      description: "להחיל את המושגים על אפליקציה אמיתית שאתה בונה ולא על דוגמאות גנריות."
    },
    {
      title: "קריאת קוד",
      description: "לפתוח קוד קיים ולפרש מה הוא עושה, איפה האחריות שלו ומה חסר."
    },
    {
      title: "ביקורת",
      description: "לכתוב מה מסוכן, מה שביר, איפה יש חוסר ולמה הפתרון הנוכחי לא מספיק."
    },
    {
      title: "ניסוח לסוכן",
      description: "להפוך את ההבנה ל-spec או prompt שיכול להניע עבודה מדויקת."
    },
    {
      title: "תיעוד קצר",
      description: "לסכם מה למדת, מה אתה יודע לזהות ומה עדיין דורש חיזוק."
    }
  ],
  learningAssets: [
    {
      title: "מילון מושגים חי",
      description: "לכל מושג: הגדרה פשוטה, למה זה חשוב, דוגמה מהמוצר שלך ו-anti-pattern נפוץ."
    },
    {
      title: "אטלס ארכיטקטורות",
      description: "אוסף דיאגרמות פשוטות של flows אמיתיים: auth, uploads, approvals, assignment."
    },
    {
      title: "ספר פרומפטים לסוכנים",
      description: "תבניות קבועות ל-feature spec, bug investigation, security review, refactor ו-PR review."
    },
    {
      title: "צ'קליסטים",
      description: "Checklist לריוויו, security, production readiness, DB changes ו-kickoff לפיצ'ר."
    },
    {
      title: "Postmortems",
      description: "מסמכי למידה מהבאגים והפספוסים שכבר קרו כדי לשפר judgment בהמשך."
    }
  ],
  avoidNow: [
    "LeetCode ואלגוריתמים לראיונות.",
    "עומק אקדמי בקומפיילרים או patterns מופשטים מדי.",
    "Microservices, Kubernetes ו-distributed systems כבדים.",
    "התאהבות אובססיבית בשפה אחת במקום להבין מערכות."
  ],
  successLevels: [
    {
      level: "רמה 1",
      title: "להסביר מערכת קיימת",
      description: "לפרט בבירור מה רץ איפה, מי תלוי במי ואיפה נשמר המידע."
    },
    {
      level: "רמה 2",
      title: "לנסח פיצ'ר נכון",
      description: "להפוך צורך עסקי ל-flow, business rules, API ו-test plan שמישהו באמת יכול לממש."
    },
    {
      level: "רמה 3",
      title: "לזהות פתרון עקום",
      description: "להבין מתי משהו עובד נקודתית אבל בנוי רע, מסוכן או לא תחזיק לאורך זמן."
    },
    {
      level: "רמה 4",
      title: "לעשות ריוויו רציני",
      description: "למצוא סיכונים אמיתיים ב-PR, לא רק להגיב על styling או naming."
    },
    {
      level: "רמה 5",
      title: "להוביל לפרודקשן",
      description: "להוציא שינוי מבוקר עם פחות הפתעות, פחות regressions ויותר שליטה."
    }
  ],
  units: [
    {
      id: "world-map",
      weekLabel: "שבוע 1",
      weekStart: 1,
      weekEnd: 1,
      title: "מפת העולם של אפליקציה מודרנית",
      category: "יסודות",
      accent: "teal",
      summary:
        "להבין איך אפליקציית web אמיתית בנויה מקצה לקצה ומה האחריות של כל שכבה.",
      goals: [
        "להבחין בין client, server, database ו-storage.",
        "להבין מה ציבורי, מה פרטי ואיפה עובר הגבול בין שכבות.",
        "לראות dependencies אמיתיים בין auth, services, deployment ו-environment variables."
      ],
      topics: [
        "Client vs Server",
        "Frontend vs Backend",
        "Database vs Storage",
        "API",
        "Authentication vs Authorization",
        "State",
        "Deployment",
        "Environment variables",
        "Third-party services"
      ],
      deliverable:
        "דיאגרמה מלאה של אחת האפליקציות שלך: מה רץ בדפדפן, מה בשרת, איפה נשמר data, איפה נשמרים קבצים ומה פרטי מול ציבורי.",
      exercise:
        "בחר אפליקציה אחת וכתוב לכל שכבה מה האחריות שלה, מה היא יודעת ומה אסור לה לדעת.",
      understandingTest:
        "אם סוכן אומר 'אני אעשה את זה בקליינט', אתה צריך לדעת מתי זה סביר ומתי זה חור אבטחה.",
      managementLens:
        "כשאתה נותן משימה, דרוש במפורש מיפוי שכבות ו-trust boundaries לפני implementation.",
      redFlags: [
        "לוגיקה רגישה ב-client בלבד",
        "env vars דולפים ל-frontend",
        "בלבול בין DB, storage ו-cache"
      ]
    },
    {
      id: "http-api",
      weekLabel: "שבוע 2",
      weekStart: 2,
      weekEnd: 2,
      title: "HTTP, API וזרימות מערכת",
      category: "יסודות",
      accent: "navy",
      summary:
        "להבין איך מידע זורם בין חלקי המערכת, ואיך request אחד הופך ל-user flow אמיתי.",
      goals: [
        "לפרק כל flow לצעדים ברורים: יוזם, payload, validation, persistence ותגובה.",
        "להבין מה ההבדל בין לעבוד לבין לעבוד נכון עם errors, retries ו-timeouts.",
        "לזהות מתי flow לא idempotent ועלול ליצור כפילויות או מצב שבור."
      ],
      topics: [
        "Request / Response",
        "GET / POST / PATCH / DELETE",
        "Headers",
        "JSON",
        "FormData",
        "Status codes",
        "Validation",
        "Idempotency",
        "Error handling",
        "Retries",
        "Timeouts"
      ],
      deliverable:
        "פירוק של 3 flows מהמערכת שלך: יצירת שחקן, שיוך לפרויקט והעלאת קובץ. לכל flow: מי יוזם, מה נשלח, מי מאמת, מה נשמר ואיך מחזירים שגיאה.",
      exercise:
        "כתוב טבלה אחת לכל flow עם שלב, owner, data, validations ו-failure mode.",
      understandingTest:
        "לדעת להסביר למה 'זה עובד' לא מספיק בלי validation, error handling ו-edge cases.",
      managementLens:
        "בקש מהסוכן sequence ברור של request lifecycle לפני שהוא נוגע בקוד.",
      redFlags: [
        "payload לא מאומת",
        "status codes אקראיים",
        "חוסר טיפול בכשלי רשת או retries כפולים"
      ]
    },
    {
      id: "data-modeling",
      weekLabel: "שבועות 3-4",
      weekStart: 3,
      weekEnd: 4,
      title: "דאטה מודלינג וחשיבה רלציונית",
      category: "דאטה וארכיטקטורה",
      accent: "gold",
      summary:
        "הלב של מוצרי data-heavy: להבין ישויות, יחסים, constraints ומה לא משכפלים.",
      goals: [
        "לזהות את הישות האמיתית ואת היחסים בינהן.",
        "להחליט איפה constraint שייך ואיפה derived data צריך לגור.",
        "להבין מה קורה במחיקה, בשחזור וב-auditability."
      ],
      topics: [
        "Tables",
        "Rows",
        "Primary key",
        "Foreign key",
        "Unique constraints",
        "Junction tables",
        "One-to-many",
        "Many-to-many",
        "Nullable vs required",
        "Derived data",
        "Normalization בסיסי",
        "Soft delete vs hard delete",
        "Auditability"
      ],
      deliverable:
        "סקירה מלאה של טבלאות המוצר: actors, projects, project_actors, folders, submissions, approvals ו-media references עם constraints וקשרי מחיקה.",
      exercise:
        "עבור כל טבלה ענה: מה הישות? מה היחסים? מה אסור לשכפל? איזה constraint הכרחי? מה יקרה במחיקה?",
      understandingTest:
        "לזהות מיד מתי מישהו דוחף שדה לטבלה הלא נכונה כי זה נוח זמנית.",
      managementLens:
        "דרוש מכל שינוי DB נימוק לישות, constraints, migration impact ו-rollback plan.",
      redFlags: [
        "status גלובלי כשצריך להיות פר-פרויקט",
        "כפילויות data 'לנוחות'",
        "מחיקות שמשמידות יותר ממה שהתכוונת"
      ]
    },
    {
      id: "business-logic",
      weekLabel: "שבוע 5",
      weekStart: 5,
      weekEnd: 5,
      title: "לוגיקה עסקית: איפה היא צריכה לשבת",
      category: "דאטה וארכיטקטורה",
      accent: "coral",
      summary:
        "להבדיל בין UI rules, domain rules ו-invariants, ולמקם כל כלל בשכבה הנכונה.",
      goals: [
        "להגדיר business invariants שחייבים להישמר בכל מצב.",
        "להבין מה צריך validation ב-UI, מה בשרת ומה ב-DB.",
        "לזהות race conditions בסיסיים ותלותים שבירות."
      ],
      topics: [
        "Business rules",
        "UI rules vs domain rules",
        "Validation at multiple layers",
        "Invariants",
        "Derived counters",
        "Permissions",
        "Race conditions בסיסיות",
        "Transactions ברמת רעיון"
      ],
      deliverable:
        "מסמך business invariants לכל מוצר שאתה בונה, עם חוקים שלא נשברים גם אם ה-UI משתנה.",
      exercise:
        "קח 5 חוקים עסקיים מהמוצר וכתוב איפה כל אחד נאכף ומה קורה אם מזיזים אותו לשכבה לא נכונה.",
      understandingTest:
        "לדעת להסביר למה סטטוס של שחקן הוא פר-פרויקט ולא שדה גלובלי.",
      managementLens:
        "בקש מהסוכן לנסח invariants לפני קוד, ואז לבדוק שכל שינוי שומר עליהם.",
      redFlags: [
        "rule עסקי שיושב רק ב-frontend",
        "transactions חסרות סביב פעולה מרובת צעדים",
        "permission check שמפוזר ולא עקבי"
      ]
    },
    {
      id: "frontend-architecture",
      weekLabel: "שבוע 6",
      weekStart: 6,
      weekEnd: 6,
      title: "Frontend architecture למנהל מוצר טכני",
      category: "ממשק וחוויית מוצר",
      accent: "coral",
      summary:
        "לא להיות מומחה פרונט, אלא להבין איך UI נשבר, איפה state מתבלגן ואיך בונים מסכים שאפשר לתחזק.",
      goals: [
        "לפרק מסך לקומפוננטות, data sources ו-user actions.",
        "להבין מהו local state לעומת server state.",
        "לחשוב מראש על loading, empty ו-error states ולא רק על happy path."
      ],
      topics: [
        "Components",
        "Props",
        "Local state",
        "Server state",
        "Forms",
        "Controlled inputs",
        "Optimistic UI",
        "Loading / empty / error states",
        "Tables and lists",
        "Modal flows",
        "Search / filter / pagination",
        "Re-rendering בסיסי",
        "Separation between display and logic"
      ],
      deliverable:
        "פירוק מסך קיים לרשימת קומפוננטות, מקורות נתונים, פעולות משתמש ו-failure states.",
      exercise:
        "בחר מסך אחד שמרגיש בסדר היום וכתוב אילו אזורים בו הכי צפויים להתפוצץ בעוד חודש.",
      understandingTest:
        "לדעת לזהות UI שנראה תקין אבל הלוגיקה שלו מבולגנת ושבירה.",
      managementLens:
        "כשאתה נותן משימה ל-UI, דרוש רשימת states מלאה ולא רק mock יפה.",
      redFlags: [
        "server state שמנוהל מקומית בלי סיבה",
        "חוסר טיפול ב-empty / loading / error",
        "לוגיקה עסקית עמוקה בתוך קומפוננטת תצוגה"
      ]
    },
    {
      id: "backend-architecture",
      weekLabel: "שבוע 7",
      weekStart: 7,
      weekEnd: 7,
      title: "Backend architecture בלי להסתבך",
      category: "מערכת ושרת",
      accent: "navy",
      summary:
        "להבין route, validation, service layer, orchestration ו-persistence בלי להפוך את השרת לספגטי.",
      goals: [
        "להפריד request handling, validation, business logic ו-data access.",
        "לזהות endpoints שמערבבים auth, persistence ו-formatting באותו מקום.",
        "להבין מתי צריך background job, webhook או logging מסודר."
      ],
      topics: [
        "Route / handler",
        "Controller",
        "Service layer",
        "Repository / data access",
        "Input validation",
        "Auth checks",
        "File upload flows",
        "Background jobs ברמת רעיון",
        "Webhooks",
        "Rate limiting",
        "Logging"
      ],
      deliverable:
        "פירוק endpoint אמיתי לשכבות: request layer, validation, business logic, persistence ו-response formatting.",
      exercise:
        "בחר endpoint אחד וכתוב מה צריך לצאת ממנו כדי שלא יהיה route עם 200 שורות.",
      understandingTest:
        "לדעת להגיד לסוכן: אל תשים הכל בתוך ה-route, תפריד service ו-validation.",
      managementLens:
        "בקש PR קטן שמחלץ שכבה אחת בכל פעם במקום rewrite גורף.",
      redFlags: [
        "auth check חסר או מאוחר מדי",
        "logic עבה בתוך handler",
        "data access לא עקבי בין endpoints"
      ]
    },
    {
      id: "security",
      weekLabel: "שבוע 8",
      weekStart: 8,
      weekEnd: 8,
      title: "אבטחה פרקטית למי שבונה מוצרים",
      category: "איכות ופרודקשן",
      accent: "brick",
      summary:
        "לא להפוך לחוקר אבטחה, אבל כן לדעת לזהות סיכונים לפני שהם יוצאים לפרודקשן.",
      goals: [
        "להבין public vs private surfaces ו-trust boundaries.",
        "לזהות סיכונים ב-upload flows, signed URLs, secrets ו-RLS.",
        "לחשוב על least privilege ו-abuse prevention כחלק מהתכנון."
      ],
      topics: [
        "Public vs private surfaces",
        "Secrets",
        "Env vars",
        "RLS / permissions",
        "File upload risks",
        "Signed URLs",
        "Injection basics",
        "XSS basics",
        "CSRF ברמת עיקרון",
        "Trust boundaries",
        "Least privilege",
        "Input sanitization",
        "Abuse prevention"
      ],
      deliverable:
        "Security review checklist אישי לכל פיצ'ר חדש, כולל public form, write paths, storage, approvals ו-upload strategy.",
      exercise:
        "קח flow ציבורי אחד וכתוב איפה ניתן לכתוב ל-DB, מי יכול לגשת, ואיזה guardrails חסרים.",
      understandingTest:
        "להבין מתי טופס ציבורי הוא פיצ'ר לגיטימי ומתי הוא חור אבטחה.",
      managementLens:
        "לפני merge, דרוש threat model קצר: מי התוקף, מה המשטח, מה הנזק ומה ההגנות.",
      redFlags: [
        "כתיבה ל-DB בלי auth או gate",
        "storage ציבורי עם נתונים רגישים",
        "trust בנתוני client ללא אימות שרת"
      ]
    },
    {
      id: "debugging",
      weekLabel: "שבוע 9",
      weekStart: 9,
      weekEnd: 9,
      title: "דיבאגינג מקצועי",
      category: "איכות ופרודקשן",
      accent: "teal",
      summary:
        "לעבור מ'למה זה לא עובד' ל'איך מזהים שכבת כשל ו-root cause אמיתי'.",
      goals: [
        "לייצר דרך חקירה מסודרת: reproduce, narrow scope, inspect, verify.",
        "להבדיל בין symptom ל-root cause.",
        "לדרוש הוכחות מסוכנים ולא להסתפק בהשערות."
      ],
      topics: [
        "Reproduce",
        "Narrow scope",
        "Logs",
        "Network tab",
        "Request payload inspection",
        "Response inspection",
        "Console errors",
        "DB inspection",
        "Storage inspection",
        "Binary search debugging",
        "Root cause vs symptom",
        "Regression thinking"
      ],
      deliverable:
        "Postmortem קצר ל-3 באגים אמיתיים: symptom, suspected causes, actual root cause, fix ו-prevention.",
      exercise:
        "קח באג אחד ותכתוב רשימת השערות מסודרת עם הוכחה לכל השערה שנפסלה או אושרה.",
      understandingTest:
        "להפסיק לקבל תשובות כמו 'probably cache issue' בלי הוכחה.",
      managementLens:
        "בקש מסוכן root cause report לפני patch: reproduce steps, evidence, fix, prevention.",
      redFlags: [
        "תיקון בלי reproduce",
        "השערות לא מאומתות",
        "fix סימפטומטי בלי prevention"
      ]
    },
    {
      id: "git-pr",
      weekLabel: "שבוע 10",
      weekStart: 10,
      weekEnd: 10,
      title: "Git, branches, PRs ו-review discipline",
      category: "Delivery והובלה",
      accent: "navy",
      summary:
        "לנהל delivery מסודר ולא ערימת שינויים כאוטית שקשה לבדוק, להבין או להחזיר אחורה.",
      goals: [
        "לבנות משמעת של scope קטן, commits אטומיים ו-PR ברור.",
        "להבין rollback, merge conflicts ו-hotfix vs feature branch.",
        "לנסח review comments שמדברים על סיכון והתנהגות, לא רק על טעם."
      ],
      topics: [
        "Branch strategy",
        "Atomic commits",
        "Pull requests",
        "Review comments",
        "Rollback",
        "Merge conflicts",
        "Release discipline",
        "Hotfix vs feature branch",
        "Changelog mindset"
      ],
      deliverable:
        "Template קבוע ל-PR עם context, problem, scope, files changed, risks, test plan ו-rollback notes.",
      exercise:
        "קח PR קודם שלך וכתוב אילו חלקים ממנו היו רחבים מדי, מסוכנים מדי או לא בדיקים.",
      understandingTest:
        "לזהות PR שנראה 'מרשים' אבל בפועל מסוכן כי הוא רחב, לא בדיק או מלא side effects.",
      managementLens:
        "בקש מסוכן תמיד summary קצר, test plan ו-known risks במקום להסתפק ב'implemented successfully'.",
      redFlags: [
        "PR ענק בלי חלוקה ליחידות בדיקה",
        "אין test plan או rollback",
        "scope creep שמתחבא בתוך קובץ לא קשור"
      ]
    },
    {
      id: "testing",
      weekLabel: "שבוע 11",
      weekStart: 11,
      weekEnd: 11,
      title: "Testing בלי להיות דתי",
      category: "איכות ופרודקשן",
      accent: "gold",
      summary:
        "להבין מה חייבים לבדוק, מה ידני מספיק, ואיפה אוטומציה באמת מייצרת ביטחון.",
      goals: [
        "להבחין בין unit, integration, E2E ו-manual QA.",
        "לזהות golden paths, edge cases והאזורים הכי שבירים במערכת.",
        "לתרגם architecture ל-test matrix פרקטי."
      ],
      topics: [
        "Unit tests",
        "Integration tests",
        "E2E tests",
        "Manual QA",
        "Golden paths",
        "Edge cases",
        "Regression test lists",
        "Testable architecture"
      ],
      deliverable:
        "Test matrix לפיצ'רים הקריטיים במוצר: מה חייב אוטומציה, מה אפשר ידני ומה הכי מסוכן לפספס.",
      exercise:
        "בחר פיצ'ר אחד וכתוב 5 בדיקות שהכי שווה להשקיע בהן במקום לירות לכל הכיוונים.",
      understandingTest:
        "להבין מה קריטי לבדוק ומה הוא רק רעש בדיקות.",
      managementLens:
        "בקש test plan שמופרד ל-happy path, edge cases ו-regression risks.",
      redFlags: [
        "בדיקות שמכסות פרטים לא חשובים",
        "אין כיסוי ל-flow עסקי קריטי",
        "manual QA בלבד לאזור שביר מאוד"
      ]
    },
    {
      id: "performance",
      weekLabel: "שבוע 12",
      weekStart: 12,
      weekEnd: 12,
      title: "Performance, scale ותחזוקה",
      category: "איכות ופרודקשן",
      accent: "olive",
      summary:
        "להבין למה מערכת סוחבת עם 20 רשומות ונחנקת ב-5,000, ואיך לתכנן לזה מראש.",
      goals: [
        "לחשוב על query cost, N+1, pagination ו-filtering.",
        "לזהות expensive renders, bundle bloat ו-image handling גרוע.",
        "להבין cost של storage, cleanup jobs ו-caching בסיסי."
      ],
      topics: [
        "Query cost",
        "N+1",
        "Pagination",
        "Filtering",
        "Caching basics",
        "Image handling",
        "Lazy loading",
        "Bundle size ברמת רעיון",
        "Expensive renders",
        "Storage cost",
        "Cleanup jobs"
      ],
      deliverable:
        "רשימת bottlenecks אפשריים במוצר שלך עם הצעת guardrails לפני scale.",
      exercise:
        "בחר מסך או query אחד וכתוב למה הוא עלול להיות בעייתי ב-scale ומה האותות המוקדמים.",
      understandingTest:
        "להסביר למה משהו עובד עם 20 שחקנים אבל לא עם 5,000.",
      managementLens:
        "בקש מכל שינוי שמשפיע על data-heavy flows הערכה של cost, scale risks ו-pagination strategy.",
      redFlags: [
        "queries לא מוגבלות",
        "loading של כל הרשומות בלי pagination",
        "רינדורים יקרים בכל keystroke"
      ]
    },
    {
      id: "agent-work",
      weekLabel: "שבועות 13-14",
      weekStart: 13,
      weekEnd: 14,
      title: "עבודה עם סוכנים כמו Tech Lead",
      category: "עבודה עם סוכנים",
      accent: "teal",
      summary:
        "לב המסלול: איך לפרק scope, איך למנוע overreach ואיך להוביל agents לתוצאה מבוקרת.",
      goals: [
        "לנסח משימות ברמת פירוק מתאימה לפי סוג הסוכן והסיכון במשימה.",
        "לדרוש analysis לפני implementation, root cause לפני patch ו-diff קטן לפני merge.",
        "לזהות hallucinations, overconfidence ו-'sounds good' שאין מאחוריהם substance."
      ],
      topics: [
        "איך לנסח משימות לסוכן",
        "איך לחלק scope",
        "איך למנוע overreach",
        "איך לבקש analysis לפני implementation",
        "איך לדרוש diff קטן ומבוקר",
        "איך לבקש root cause, not patch",
        "איך לדרוש test plan",
        "איך לדרוש rollback plan",
        "איך לזהות hallucination טכנית",
        "איך לא ליפול ל-'sounds good'"
      ],
      deliverable:
        "ספר תבניות לסוכן: feature spec, bug investigation, security review, refactor, PR review ו-production readiness.",
      exercise:
        "אותה משימה בדיוק: לכתוב גרסה לסוכן ג'וניור, מיד וסניור, ולהתאים scope, פיקוח ו-checkpoints.",
      understandingTest:
        "לדעת להבדיל בין תשובה שנשמעת חכמה לבין עבודה טכנית שאפשר לסמוך עליה.",
      managementLens:
        "בכל משימה: context קצר, definition of done, constraints, tests, risks ו-what not to touch.",
      redFlags: [
        "rewrite מיותר כי הבקשה לא תחמה scope",
        "implementation בלי design pass",
        "תשובה בטוחה מדי בלי evidence"
      ]
    },
    {
      id: "code-review",
      weekLabel: "שבוע 15",
      weekStart: 15,
      weekEnd: 15,
      title: "קריאת קוד והערכת איכות",
      category: "Delivery והובלה",
      accent: "navy",
      summary:
        "לדעת לשפוט קוד גם אם לא כתבת אותו: structure, naming, coupling, safety ותחזוקתיות.",
      goals: [
        "לפתח checklist עקבי לריוויו ולא להסתמך על תחושת בטן בלבד.",
        "להבחין בין over-engineering, under-engineering וקוד שפשוט לא עומד ב-domain.",
        "לזהות שינויים מינימליים מול שינויים רחבים שמסתירים סיכונים."
      ],
      topics: [
        "Readability",
        "Naming",
        "Separation of concerns",
        "Repetition",
        "Hidden coupling",
        "Unsafe assumptions",
        "Error handling",
        "Dead code",
        "Over-engineering",
        "Under-engineering"
      ],
      deliverable:
        "Checklist קבוע לריוויו: structure, naming, dependencies, business rules, security ותחזוקתיות.",
      exercise:
        "פתח קובץ קיים במערכת שלך וכתוב review note אחד על readability, אחד על risk ואחד על maintenance.",
      understandingTest:
        "להצביע אם קוד הוא טוב, מסוכן, חלקי או עקום גם בלי שכתבת אותו.",
      managementLens:
        "בקש מסוכן review findings עם severity, impact ו-test gaps, לא סיכום כללי.",
      redFlags: [
        "hidden coupling בין שכבות",
        "assumptions שלא נבדקות",
        "dead code שמטשטש intent"
      ]
    },
    {
      id: "capstone",
      weekLabel: "שבוע 16",
      weekStart: 16,
      weekEnd: 16,
      title: "Capstone: הובלת פיצ'ר אמיתי מקצה לקצה",
      category: "Capstone",
      accent: "coral",
      summary:
        "לסגור את המסלול עם feature אמיתי שאתה מוביל כמו technical lead ולא רק כמישהו שמדביק prompts.",
      goals: [
        "לתרגם problem statement ל-user flow, business rules, data model impact ו-API design.",
        "להכין UI states, edge cases, security considerations ו-test plan מסודר.",
        "לייצר rollout plan, PR review checklist ותיק עבודת ניהול טכני."
      ],
      topics: [
        "Problem statement",
        "User flow",
        "Business rules",
        "Data model impact",
        "API design",
        "UI states",
        "Edge cases",
        "Security considerations",
        "Test plan",
        "Rollout plan",
        "PR review checklist"
      ],
      deliverable:
        "תיק עבודת technical lead לפיצ'ר אמיתי: מהבעיה העסקית עד rollout plan ו-review checklist.",
      exercise:
        "בחר פיצ'ר אמיתי מאחת האפליקציות שלך, וכתוב עבורו מסמך אחד שמוביל את כל התהליך מקצה לקצה.",
      understandingTest:
        "להוביל פיצ'ר אמיתי לפרודקשן בצורה מבוקרת, מדויקת ורב-שכבתית.",
      managementLens:
        "השלב שבו אתה מפסיק לחשוב כמו 'prompt operator' ומתחיל לעבוד כמו builder-operator.",
      redFlags: [
        "חוסר alignment בין layers",
        "אין rollout / rollback plan",
        "business rules חסרים במסמך ההובלה"
      ]
    }
  ]
};

const weekPlan = [
  { week: 1, unitId: "world-map", focus: "מפת שכבות ומערכות" },
  { week: 2, unitId: "http-api", focus: "זרימות, API ו-errors" },
  { week: 3, unitId: "data-modeling", focus: "ישויות, יחסים ו-constraints" },
  { week: 4, unitId: "data-modeling", focus: "מחיקות, auditability ו-derived data" },
  { week: 5, unitId: "business-logic", focus: "Business invariants" },
  { week: 6, unitId: "frontend-architecture", focus: "State, screens ו-failure modes" },
  { week: 7, unitId: "backend-architecture", focus: "Services, handlers ו-data access" },
  { week: 8, unitId: "security", focus: "Trust boundaries ואבטחה" },
  { week: 9, unitId: "debugging", focus: "Root cause ו-regression thinking" },
  { week: 10, unitId: "git-pr", focus: "PR discipline ו-rollbacks" },
  { week: 11, unitId: "testing", focus: "Test matrix פרקטי" },
  { week: 12, unitId: "performance", focus: "Scale, cost ו-maintenance" },
  { week: 13, unitId: "agent-work", focus: "Scope נכון לסוכן" },
  { week: 14, unitId: "agent-work", focus: "תבניות עבודה ו-hallucinations" },
  { week: 15, unitId: "code-review", focus: "Code judgment וריוויו" },
  { week: 16, unitId: "capstone", focus: "Capstone והובלת פיצ'ר" }
];

const learningPageBlueprints = [
  {
    key: "overview",
    label: "פתיח שבועי",
    description: "התמונה הגדולה והקונטקסט של השבוע",
    source: "summary",
    scaffoldType: "text"
  },
  {
    key: "goals",
    label: "מטרות",
    description: "מה בדיוק צריך להבין ולזהות",
    source: "goals",
    scaffoldType: "list"
  },
  {
    key: "topics",
    label: "נושאים",
    description: "מושגים, כותרות ותחנות למידה",
    source: "topics",
    scaffoldType: "list"
  },
  {
    key: "deliverable",
    label: "תוצר",
    description: "מה אתה אמור לייצר בסוף השבוע",
    source: "deliverable",
    scaffoldType: "text"
  },
  {
    key: "exercise",
    label: "תרגיל מרכזי",
    description: "איך מתאמנים בפועל על החומר",
    source: "exercise",
    scaffoldType: "text"
  },
  {
    key: "understanding-test",
    label: "מבחן הבנה",
    description: "איך בודקים שהבנת ולא רק קראת",
    source: "understandingTest",
    scaffoldType: "text"
  },
  {
    key: "management-lens",
    label: "זווית ניהולית",
    description: "איך לנהל סוכן או מפתח סביב היחידה",
    source: "managementLens",
    scaffoldType: "text"
  },
  {
    key: "red-flags",
    label: "דגלים אדומים",
    description: "מה לזהות מוקדם כדי לא ליפול בהמשך",
    source: "redFlags",
    scaffoldType: "list"
  }
];

const stageStatusMeta = {
  planned: { label: "בתכנון", className: "status-planned" },
  active: { label: "בתהליך", className: "status-active" },
  review: { label: "ממתין לריוויו", className: "status-review" },
  done: { label: "הושלם", className: "status-done" }
};

const stageTypeMeta = {
  checkpoint: { label: "Checkpoint", className: "type-checkpoint" },
  deliverable: { label: "תוצר", className: "type-deliverable" },
  session: { label: "מפגש", className: "type-session" },
  note: { label: "הערה", className: "type-note" }
};

const STORAGE_KEYS = {
  selectedUnitId: "builder-course-selected-unit-v1",
  unitProgress: "builder-course-unit-progress-v1",
  stages: "builder-course-stages-v1",
  designLabSlug: "builder-course-design-lab-slug-v1",
  designLabSession: "builder-course-design-lab-session-v1",
  selectedLessonId: "builder-course-selected-lesson-v1",
  themePreset: "builder-course-theme-preset-v1",
  openSectionId: "builder-course-open-section-v1"
};

const sectionLinks = [
  { id: "design-lab", label: "מעבדה" },
  { id: "overview", label: "תמונה" },
  { id: "navigator", label: "יחידות" },
  { id: "lesson-studio", label: "לומדים" },
  { id: "timeline", label: "שבועות" },
  { id: "toolkit", label: "כלים" },
  { id: "stages", label: "שלבים" }
];

const themePresets = [
  {
    id: "notion",
    label: "Notion",
    note: "רגוע, editorial ונקי"
  },
  {
    id: "cursor",
    label: "Cursor",
    note: "חד, techy וקצת יותר luminous"
  },
  {
    id: "minimal",
    label: "Minimal",
    note: "שקט, אוורירי ופחות דקורטיבי"
  }
];

const savedDesignLabSession = loadStorage(STORAGE_KEYS.designLabSession, {});

const state = {
  activeCategory: "all",
  searchTerm: "",
  selectedUnitId: loadStorage(STORAGE_KEYS.selectedUnitId, syllabusData.units[0].id),
  unitProgress: loadStorage(STORAGE_KEYS.unitProgress, {}),
  stages: normalizeStageCollection(loadStorage(STORAGE_KEYS.stages, [])),
  selectedLessonId: loadStorage(STORAGE_KEYS.selectedLessonId, ""),
  editingStageId: null,
  openSectionId: "",
  themePreset: loadStorage(STORAGE_KEYS.themePreset, "cursor"),
  designLab: {
    slug: loadStorage(STORAGE_KEYS.designLabSlug, ""),
    sandboxId: String(savedDesignLabSession.sandboxId || ""),
    threadId: String(savedDesignLabSession.threadId || ""),
    sessionId: String(savedDesignLabSession.sessionId || ""),
    configured: false,
    isLoading: false,
    statusMessage: "בודק חיבור ל־21ST...",
    response: "",
    usage: null
  }
};

const elements = {};
let destroyHeroShader = null;

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  hydrateHero();
  populateStageSelects();
  renderSectionNav();
  setupSectionPanels();
  bindEvents();
  renderAll();
  initHeroShader();
  hydrateDesignLab();
  syncScrollUi();
});

function cacheElements() {
  elements.goalStatement = document.querySelector("#goalStatement");
  elements.outcomesList = document.querySelector("#outcomesList");
  elements.sectionNav = document.querySelector("#sectionNav");
  elements.scrollProgress = document.querySelector("#scrollProgress");
  elements.heroProofGrid = document.querySelector("#heroProofGrid");
  elements.heroNextActions = document.querySelector("#heroNextActions");
  elements.heroShaderCanvas = document.querySelector("#heroShaderCanvas");
  elements.themePresetChips = document.querySelector("#themePresetChips");
  elements.heroUnitPreviewList = document.querySelector("#heroUnitPreviewList");
  elements.heroFocusCard = document.querySelector("#heroFocusCard");
  elements.heroRoadmap = document.querySelector("#heroRoadmap");
  elements.statsGrid = document.querySelector("#statsGrid");
  elements.pillarsGrid = document.querySelector("#pillarsGrid");
  elements.filterChips = document.querySelector("#filterChips");
  elements.unitSearch = document.querySelector("#unitSearch");
  elements.visibleCount = document.querySelector("#visibleCount");
  elements.unitsList = document.querySelector("#unitsList");
  elements.unitDetail = document.querySelector("#unitDetail");
  elements.lessonPageList = document.querySelector("#lessonPageList");
  elements.lessonEditor = document.querySelector("#lessonEditor");
  elements.lessonStudioMeta = document.querySelector("#lessonStudioMeta");
  elements.timelineGrid = document.querySelector("#timelineGrid");
  elements.weeklyRhythm = document.querySelector("#weeklyRhythm");
  elements.learningAssets = document.querySelector("#learningAssets");
  elements.avoidList = document.querySelector("#avoidList");
  elements.successLevels = document.querySelector("#successLevels");
  elements.stageForm = document.querySelector("#stageForm");
  elements.formTitle = document.querySelector("#formTitle");
  elements.formHint = document.querySelector("#formHint");
  elements.stageTitle = document.querySelector("#stageTitle");
  elements.stageWeek = document.querySelector("#stageWeek");
  elements.stageStatus = document.querySelector("#stageStatus");
  elements.stageType = document.querySelector("#stageType");
  elements.stageUnit = document.querySelector("#stageUnit");
  elements.stageNotes = document.querySelector("#stageNotes");
  elements.cancelEdit = document.querySelector("#cancelEdit");
  elements.prefillFromUnit = document.querySelector("#prefillFromUnit");
  elements.stageSummary = document.querySelector("#stageSummary");
  elements.stagesList = document.querySelector("#stagesList");
  elements.exportStages = document.querySelector("#exportStages");
  elements.importStages = document.querySelector("#importStages");
  elements.stageImportInput = document.querySelector("#stageImportInput");
  elements.anForm = document.querySelector("#anForm");
  elements.anSlug = document.querySelector("#anSlug");
  elements.anPrompt = document.querySelector("#anPrompt");
  elements.anStatus = document.querySelector("#anStatus");
  elements.anSubmit = document.querySelector("#anSubmit");
  elements.anReset = document.querySelector("#anReset");
  elements.anSessionMeta = document.querySelector("#anSessionMeta");
  elements.anResponse = document.querySelector("#anResponse");
}

function bindEvents() {
  if (elements.themePresetChips) {
    elements.themePresetChips.addEventListener("click", (event) => {
      const target = event.target.closest("[data-theme-preset]");
      if (!target) {
        return;
      }

      setThemePreset(target.dataset.themePreset);
    });
  }

  elements.sectionNav.addEventListener("click", (event) => {
    const target = event.target.closest("[data-section-id]");
    if (!target) {
      return;
    }

    event.preventDefault();
    openSectionPanel(target.dataset.sectionId, true);
  });

  elements.heroNextActions.addEventListener("click", (event) => {
    const target = event.target.closest("[data-open-section]");
    if (!target) {
      return;
    }

    openSectionPanel(target.dataset.openSection, true);
  });

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-section-toggle]");
    if (!toggle) {
      return;
    }

    const sectionId = toggle.dataset.sectionToggle;
    if (!sectionId) {
      return;
    }

    toggleSectionPanel(sectionId);
  });

  elements.unitSearch.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    renderUnits();
  });

  elements.filterChips.addEventListener("click", (event) => {
    const target = event.target.closest("[data-category]");
    if (!target) {
      return;
    }

    state.activeCategory = target.dataset.category;
    renderFilterChips();
    renderUnits();
  });

  elements.unitsList.addEventListener("click", (event) => {
    const target = event.target.closest("[data-unit-id]");
    if (!target) {
      return;
    }

    selectUnit(target.dataset.unitId);
  });

  elements.unitDetail.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) {
      return;
    }

    const unit = getSelectedUnit();
    if (!unit) {
      return;
    }

    const { action } = actionTarget.dataset;

    if (action === "toggle-complete") {
      toggleUnitComplete(unit.id);
      return;
    }

    if (action === "prefill-stage") {
      prefillStageFormFromUnit(unit);
      return;
    }

    if (action === "expand-all") {
      setUnitAccordionState(true);
      return;
    }

    if (action === "collapse-all") {
      setUnitAccordionState(false);
      return;
    }

    if (action === "open-lesson") {
      openLesson(actionTarget.dataset.lessonId, true);
    }
  });

  elements.lessonPageList.addEventListener("click", (event) => {
    const target = event.target.closest("[data-lesson-id]");
    if (!target) {
      return;
    }

    openLesson(target.dataset.lessonId);
  });

  elements.timelineGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-unit-id]");
    if (!target) {
      return;
    }

    selectUnit(target.dataset.unitId);
    openSectionPanel("navigator", true);
  });

  elements.heroUnitPreviewList.addEventListener("click", (event) => {
    const target = event.target.closest("[data-unit-id]");
    if (!target) {
      return;
    }

    selectUnit(target.dataset.unitId);
    openSectionPanel("navigator", true);
  });

  elements.heroRoadmap.addEventListener("click", (event) => {
    const target = event.target.closest("[data-unit-id]");
    if (!target) {
      return;
    }

    selectUnit(target.dataset.unitId);
    openSectionPanel("navigator", true);
  });

  elements.heroFocusCard.addEventListener("click", (event) => {
    const target = event.target.closest("[data-unit-id]");
    if (!target) {
      return;
    }

    selectUnit(target.dataset.unitId);
    openSectionPanel("navigator", true);
  });

  elements.stageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveStageFromForm();
  });

  elements.cancelEdit.addEventListener("click", resetStageForm);
  elements.prefillFromUnit.addEventListener("click", () => {
    const unit = getSelectedUnit();
    if (unit) {
      prefillStageFormFromUnit(unit);
    }
  });

  elements.stagesList.addEventListener("click", (event) => {
    const target = event.target.closest("[data-stage-action]");
    if (!target) {
      return;
    }

    const stageId = target.dataset.stageId;
    const action = target.dataset.stageAction;

    if (action === "edit") {
      editStage(stageId);
      return;
    }

    if (action === "toggle-done") {
      toggleStageDone(stageId);
      return;
    }

    if (action === "delete") {
      deleteStage(stageId);
    }
  });

  elements.exportStages.addEventListener("click", exportStagesToJson);
  elements.importStages.addEventListener("click", () => elements.stageImportInput.click());
  elements.stageImportInput.addEventListener("change", importStagesFromJson);

  elements.anForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitDesignLabPrompt();
  });

  elements.anReset.addEventListener("click", resetDesignLabSession);

  window.addEventListener("scroll", syncScrollUi, { passive: true });
  window.addEventListener("resize", syncScrollUi);
}

function hydrateHero() {
  if (elements.goalStatement) {
    elements.goalStatement.textContent = syllabusData.coreGoal;
  }

  if (elements.outcomesList) {
    elements.outcomesList.innerHTML = syllabusData.outcomes
      .map((outcome) => `<li>${escapeHtml(outcome)}</li>`)
      .join("");
  }
}

function populateStageSelects() {
  elements.stageWeek.innerHTML =
    `<option value="">בחר שבוע</option>` +
    weekPlan
      .map((item) => `<option value="${item.week}">שבוע ${item.week} · ${escapeHtml(item.focus)}</option>`)
      .join("");

  elements.stageUnit.innerHTML =
    `<option value="">ללא קישור ליחידה</option>` +
    syllabusData.units
      .map((unit) => `<option value="${unit.id}">${escapeHtml(unit.weekLabel)} · ${escapeHtml(unit.title)}</option>`)
      .join("");
}

function renderAll() {
  renderThemePresets();
  renderHeroNextActions();
  renderHeroProof();
  renderHeroShowcase();
  renderStats();
  renderPillars();
  renderFilterChips();
  renderUnits();
  renderSelectedUnit();
  renderLessonStudio();
  renderTimeline();
  renderWeeklyRhythm();
  renderLearningAssets();
  renderAvoidList();
  renderSuccessLevels();
  renderStageSummary();
  renderStages();
  renderDesignLabSessionMeta();
  renderDesignLabResponse();
  applySectionPanelState();
  syncScrollUi();
}

function renderThemePresets() {
  if (!elements.themePresetChips) {
    state.themePreset = "cursor";
    document.body.dataset.theme = "cursor";
    return;
  }

  elements.themePresetChips.innerHTML = themePresets
    .map((preset) => {
      const isActive = preset.id === state.themePreset;
      return `
        <button
          type="button"
          class="theme-chip ${isActive ? "active" : ""}"
          data-theme-preset="${preset.id}"
        >
          <strong>${escapeHtml(preset.label)}</strong>
          <span>${escapeHtml(preset.note)}</span>
        </button>
      `;
    })
    .join("");

  document.body.dataset.theme = state.themePreset;
}

function renderHeroNextActions() {
  const nextUnit = syllabusData.units.find((unit) => !state.unitProgress[unit.id]) || getSelectedUnit();
  const completedUnits = Object.values(state.unitProgress).filter(Boolean).length;

  const actions = [
    {
      sectionId: "navigator",
      label: "השלב הבא",
      note: shortenLabel(nextUnit.title, 22),
      meta: nextUnit.weekLabel
    },
    {
      sectionId: "timeline",
      label: "מפת השבועות",
      note: `${completedUnits}/${syllabusData.units.length} הושלמו`,
      meta: `${syllabusData.durationWeeks} שבועות`
    },
    {
      sectionId: "stages",
      label: "הלוג האישי",
      note: state.stages.length ? `${state.stages.length} שלבים שמורים` : "עוד אין שלבים",
      meta: "Build log"
    },
    {
      sectionId: "design-lab",
      label: "השראה מ-21ST",
      note: state.designLab.configured ? "החיבור מוכן" : "ממתין למפתח",
      meta: "Inspiration"
    }
  ];

  elements.heroNextActions.innerHTML = actions
    .map(
      (action) => `
        <button type="button" class="next-action-card" data-open-section="${action.sectionId}">
          <span class="next-action-meta">${escapeHtml(action.meta)}</span>
          <strong>${escapeHtml(action.label)}</strong>
          <span class="next-action-note">${escapeHtml(action.note)}</span>
        </button>
      `
    )
    .join("");
}

function renderSectionNav() {
  elements.sectionNav.innerHTML = sectionLinks
    .map(
      (section) => `
        <a href="#${section.id}" class="nav-chip" data-section-id="${section.id}">
          ${escapeHtml(section.label)}
        </a>
      `
    )
    .join("");
}

function setupSectionPanels() {
  sectionLinks.forEach((sectionConfig) => {
    const section = document.getElementById(sectionConfig.id);
    const heading = section?.querySelector(".section-heading");

    if (!section || !heading || section.querySelector(".section-content")) {
      return;
    }

    section.classList.add("section-collapsible");

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "section-toggle";
    toggle.dataset.sectionToggle = sectionConfig.id;
    toggle.textContent = "פתח";
    heading.append(toggle);

    const content = document.createElement("div");
    content.className = "section-content";

    while (heading.nextSibling) {
      content.append(heading.nextSibling);
    }

    section.append(content);
  });
}

function applySectionPanelState() {
  sectionLinks.forEach((sectionConfig) => {
    const section = document.getElementById(sectionConfig.id);
    const content = section?.querySelector(".section-content");
    const toggle = section?.querySelector(".section-toggle");
    const isOpen = sectionConfig.id === state.openSectionId;

    if (!section || !content || !toggle) {
      return;
    }

    section.classList.toggle("is-open", isOpen);
    content.hidden = !isOpen;
    toggle.textContent = isOpen ? "סגור" : "פתח";
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function toggleSectionPanel(sectionId) {
  const nextOpenSectionId = state.openSectionId === sectionId ? "" : sectionId;
  state.openSectionId = nextOpenSectionId;
  saveStorage(STORAGE_KEYS.openSectionId, nextOpenSectionId);
  applySectionPanelState();
  syncScrollUi();
}

function openSectionPanel(sectionId, shouldScroll = false) {
  state.openSectionId = sectionId;
  saveStorage(STORAGE_KEYS.openSectionId, sectionId);
  applySectionPanelState();
  syncScrollUi();

  if (shouldScroll) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function renderHeroProof() {
  const completedUnits = Object.values(state.unitProgress).filter(Boolean).length;
  const proofItems = [
    { value: syllabusData.durationWeeks, label: "שבועות" },
    { value: syllabusData.units.length, label: "יחידות" },
    { value: completedUnits, label: "הושלמו" }
  ];

  elements.heroProofGrid.innerHTML = proofItems
    .map(
      (item) => `
        <article class="proof-card">
          <strong class="proof-value">${escapeHtml(String(item.value))}</strong>
          <span class="proof-label">${escapeHtml(item.label)}</span>
        </article>
      `
    )
    .join("");
}

function renderHeroShowcase() {
  const selectedUnit = getSelectedUnit();
  const spotlightUnits = [
    selectedUnit,
    ...syllabusData.units.filter((unit) => unit.id !== selectedUnit.id).slice(0, 2)
  ];
  const isCompleted = Boolean(state.unitProgress[selectedUnit.id]);

  elements.heroUnitPreviewList.innerHTML = spotlightUnits
    .map((unit) => {
      const isSelected = unit.id === selectedUnit.id;

      return `
        <button
          type="button"
          class="hero-mini-unit accent-${unit.accent} ${isSelected ? "active" : ""}"
          data-unit-id="${unit.id}"
        >
          <span class="hero-mini-unit-week">${escapeHtml(unit.weekLabel)}</span>
          <strong>${escapeHtml(shortenLabel(unit.title, 24))}</strong>
        </button>
      `;
    })
    .join("");

  elements.heroFocusCard.innerHTML = `
    <button type="button" class="hero-focus-entry accent-${selectedUnit.accent}" data-unit-id="${selectedUnit.id}">
      <div class="hero-focus-head">
        <span class="hero-focus-week">${escapeHtml(selectedUnit.weekLabel)}</span>
        <span class="hero-focus-status ${isCompleted ? "is-done" : ""}">
          ${isCompleted ? "הושלם" : "פתוח עכשיו"}
        </span>
      </div>
      <strong class="hero-focus-title">${escapeHtml(shortenLabel(selectedUnit.title, 38))}</strong>
      <p class="hero-focus-summary">${escapeHtml(shortenLabel(selectedUnit.summary, 112))}</p>
      <div class="detail-meta">
        <span class="meta-pill">${escapeHtml(selectedUnit.category)}</span>
        <span class="meta-pill">${selectedUnit.topics.length} נושאים</span>
        <span class="meta-pill">${selectedUnit.weekStart === selectedUnit.weekEnd ? "שבוע אחד" : "שני שבועות"}</span>
      </div>
    </button>
  `;

  elements.heroRoadmap.innerHTML = weekPlan
    .slice(0, 6)
    .map((item) => {
      const unit = syllabusData.units.find((entry) => entry.id === item.unitId);
      const isSelected = item.unitId === selectedUnit.id;
      const isCompleted = Boolean(state.unitProgress[item.unitId]);

      return `
        <button
          type="button"
          class="hero-roadmap-node ${isSelected ? "active" : ""} ${isCompleted ? "completed" : ""}"
          data-unit-id="${item.unitId}"
          title="${escapeHtml(unit ? unit.title : item.focus)}"
        >
          <span class="hero-roadmap-week">${item.week}</span>
          <strong>${escapeHtml(shortenLabel(item.focus, 18))}</strong>
        </button>
      `;
    })
    .join("");
}

function renderStats() {
  const completedUnits = Object.values(state.unitProgress).filter(Boolean).length;
  const doneStages = state.stages.filter((stage) => stage.status === "done").length;
  const stats = [
    { label: "יחידות במסלול", value: syllabusData.units.length },
    { label: "שבועות במסלול", value: syllabusData.durationWeeks },
    { label: "יחידות שסומנו כהושלמו", value: completedUnits },
    { label: "שלבים אישיים שסומנו הושלמו", value: doneStages }
  ];

  elements.statsGrid.innerHTML = stats
    .map(
      (item) => `
        <article class="stat-card">
          <span class="stat-label">${escapeHtml(item.label)}</span>
          <strong class="stat-value">${escapeHtml(String(item.value))}</strong>
        </article>
      `
    )
    .join("");
}

function renderPillars() {
  elements.pillarsGrid.innerHTML = syllabusData.pillars
    .map(
      (pillar) => `
        <article class="pillar-card">
          <strong>${escapeHtml(pillar.title)}</strong>
          <p>${escapeHtml(pillar.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderFilterChips() {
  const categories = ["all", ...new Set(syllabusData.units.map((unit) => unit.category))];

  elements.filterChips.innerHTML = categories
    .map((category) => {
      const label = category === "all" ? "הכל" : category;
      const isActive = category === state.activeCategory;
      return `
        <button
          type="button"
          class="chip ${isActive ? "active" : ""}"
          data-category="${escapeHtml(category)}"
        >
          ${escapeHtml(label)}
        </button>
      `;
    })
    .join("");
}

function renderUnits() {
  const filteredUnits = getFilteredUnits();
  elements.visibleCount.textContent = `${filteredUnits.length} יחידות`;

  if (!filteredUnits.length) {
    elements.unitsList.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>לא נמצאו יחידות</h3>
          <p>נסה מונח אחר או נקה את הסינון כדי לראות את כל המסלול.</p>
        </div>
      </div>
    `;
    return;
  }

  elements.unitsList.innerHTML = filteredUnits
    .map((unit) => {
      const isSelected = unit.id === state.selectedUnitId;
      const isCompleted = Boolean(state.unitProgress[unit.id]);
      return `
        <button
          type="button"
          class="unit-card accent-${unit.accent} ${isSelected ? "selected" : ""} ${isCompleted ? "completed" : ""}"
          data-unit-id="${unit.id}"
        >
          <div class="unit-card-head">
            <div>
              <span class="meta-pill">${escapeHtml(unit.weekLabel)}</span>
              <h4>${escapeHtml(unit.title)}</h4>
            </div>
            <span class="status-pill ${isCompleted ? "status-done" : "status-planned"}">
              ${isCompleted ? "הושלמה" : "פתוחה"}
            </span>
          </div>
          <div class="unit-meta">
            <span class="meta-pill">${escapeHtml(unit.category)}</span>
            <span class="meta-pill">${unit.topics.length} נושאים</span>
            <span class="meta-pill">${unit.weekStart === unit.weekEnd ? `שבוע ${unit.weekStart}` : `שבועות ${unit.weekStart}-${unit.weekEnd}`}</span>
          </div>
          <span class="unit-hint">לחץ כדי לחשוף מטרות, תוצר ודגלים אדומים</span>
        </button>
      `;
    })
    .join("");
}

function renderSelectedUnit() {
  const unit = getSelectedUnit();

  if (!unit) {
    elements.unitDetail.innerHTML = `
      <div class="detail-empty">
        <div>
          <h3>בחר יחידה</h3>
          <p>הפרטים של היחידה יוצגו כאן.</p>
        </div>
      </div>
    `;
    return;
  }

  const isCompleted = Boolean(state.unitProgress[unit.id]);

  elements.unitDetail.innerHTML = `
    <div class="detail-header">
      <div>
        <span class="eyebrow">${escapeHtml(unit.weekLabel)}</span>
        <h2>${escapeHtml(unit.title)}</h2>
        <p class="detail-summary">${escapeHtml(unit.summary)}</p>
        <div class="detail-meta">
          <span class="meta-pill">${escapeHtml(unit.category)}</span>
          <span class="meta-pill">${unit.topics.length} נושאים מרכזיים</span>
          <span class="status-pill ${isCompleted ? "status-done" : "status-active"}">
            ${isCompleted ? "סומנה כהושלמה" : "עדיין בעבודה"}
          </span>
        </div>
      </div>
    </div>

    <div class="detail-glance">
      <div class="glance-card">
        <span class="panel-label">במבט מהיר</span>
        <p>יחידה ${escapeHtml(unit.weekLabel)} עם ${unit.topics.length} נושאים ודגש על ${escapeHtml(unit.category)}.</p>
      </div>
      <div class="glance-card">
        <span class="panel-label">איך להשתמש בזה</span>
        <p>פתח רק את הסעיף שאתה צריך עכשיו. לא חייבים לקרוא הכול בבת אחת.</p>
      </div>
    </div>

    <div class="detail-actions">
      <button type="button" class="button button-primary" data-action="toggle-complete">
        ${isCompleted ? "בטל סימון השלמה" : "סמן יחידה כהושלמה"}
      </button>
      <button type="button" class="button button-secondary" data-action="prefill-stage">
        שלח את היחידה לטופס השלבים
      </button>
      <button type="button" class="button button-ghost" data-action="expand-all">
        פתח הכל
      </button>
      <button type="button" class="button button-ghost" data-action="collapse-all">
        סגור הכל
      </button>
    </div>

    ${renderLearningLaunchpad(unit)}

    <div class="detail-stack">
      ${renderDisclosureCard("מה המטרות כאן", renderList(unit.goals, "bullet-list"))}
      ${renderDisclosureCard(`אילו נושאים נלמדים (${unit.topics.length})`, renderList(unit.topics, "bullet-list"))}
      ${renderDisclosureCard("מה התוצר השבועי", `<p>${escapeHtml(unit.deliverable)}</p>`, true)}
      ${renderDisclosureCard("מה התרגיל המרכזי", `<p>${escapeHtml(unit.exercise)}</p>`)}
      ${renderDisclosureCard("איך תבדוק שהבנת", `<p>${escapeHtml(unit.understandingTest)}</p>`, true)}
      ${renderDisclosureCard("מה הזווית הניהולית מול סוכן", `<p>${escapeHtml(unit.managementLens)}</p>`)}
      ${renderDisclosureCard("דגלים אדומים שכדאי לזהות", renderList(unit.redFlags, "bullet-list"))}
    </div>
  `;
}

function renderLearningLaunchpad(unit) {
  const pages = getLearningPagesForUnit(unit);
  const selectedPage = getSelectedLearningPage();
  const pageUrl = buildUnitPageUrl(unit.id, selectedPage?.pageId || "");

  return `
    <section class="learning-launchpad">
      <div class="learning-launchpad-head">
        <div class="panel-title-row">
          <h3>עמודי הלמידה של היחידה</h3>
          <span class="count-pill">${pages.length} חלקים</span>
        </div>
        <a class="micro-link" href="${escapeAttribute(buildUnitPageUrl(unit.id))}">לעמוד היחידה המלא</a>
      </div>

      <article class="unit-page-open accent-${unit.accent}">
        <div class="unit-page-open-copy">
          <span class="panel-label">מה נפתח עכשיו</span>
          <strong>${escapeHtml(selectedPage?.title || unit.title)}</strong>
          <p>${escapeHtml(selectedPage?.description || unit.summary)}</p>
        </div>
        <div class="unit-page-open-actions">
          <a class="button button-primary" href="${escapeAttribute(pageUrl)}">לפתוח עמוד לימוד</a>
          <button type="button" class="button button-secondary" data-action="open-lesson" data-lesson-id="${escapeAttribute(selectedPage?.id || pages[0]?.id || "")}">
            לראות preview כאן
          </button>
        </div>
      </article>

      <div class="lesson-link-row">
        ${pages
          .map((page) => {
            const isActive = selectedPage?.id === page.id;
            return `
              <button
                type="button"
                class="lesson-link-chip ${isActive ? "active" : ""}"
                data-action="open-lesson"
                data-lesson-id="${page.id}"
              >
                <span>${escapeHtml(page.navShort || page.label)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderLessonStudio() {
  const unit = getSelectedUnit();
  const pages = getLearningPagesForUnit(unit);
  const selectedPage = getSelectedLearningPage();

  elements.lessonStudioMeta.textContent = `${pages.length} חלקים`;
  elements.lessonPageList.innerHTML = pages
    .map((page) => {
      const isActive = selectedPage?.id === page.id;

      return `
        <button
          type="button"
          class="lesson-page-button ${isActive ? "active" : ""}"
          data-lesson-id="${page.id}"
        >
          <span class="lesson-page-label">${escapeHtml(page.kicker || page.label)}</span>
          <strong>${escapeHtml(page.label)}</strong>
          <span class="lesson-page-status">${escapeHtml(shortenLabel(page.description, 78))}</span>
        </button>
      `;
    })
    .join("");

  if (!selectedPage) {
    elements.lessonEditor.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>בחר חלק מהיחידה</h3>
          <p>כאן תראה preview נקי של החלק שבחרת ולינק לעמוד הלימוד המלא.</p>
        </div>
      </div>
    `;
    return;
  }

  const previewHighlights = getLearningPageHighlights(selectedPage);
  const previewVisual = renderLearningPageVisual(selectedPage);

  elements.lessonEditor.innerHTML = `
    <div class="lesson-preview-shell">
      <div class="detail-header">
        <div>
          <span class="eyebrow">${escapeHtml(unit.weekLabel)} · ${escapeHtml(selectedPage.label)}</span>
          <h2>${escapeHtml(selectedPage.title || selectedPage.label)}</h2>
          <p class="detail-summary">${escapeHtml(selectedPage.description)}</p>
          <div class="detail-meta">
            <span class="meta-pill">${escapeHtml(unit.title)}</span>
            <span class="meta-pill">${escapeHtml(unit.category)}</span>
            <span class="meta-pill">${selectedPage.blocks.length} בלוקים</span>
          </div>
        </div>
      </div>

      <div class="lesson-preview-grid">
        <div class="lesson-preview-card">
          <div class="panel-title-row">
            <h3>מה מחכה בפנים</h3>
            <span class="summary-hint">עמוד לימוד אמיתי, לא סיכום דחוס</span>
          </div>
          <p class="lesson-preview-summary">${escapeHtml(selectedPage.description)}</p>
          <div class="lesson-preview-highlights">
            ${previewHighlights
              .map((item) => `<span class="lesson-highlight-chip">${escapeHtml(item)}</span>`)
              .join("")}
          </div>
          <div class="lesson-editor-actions">
            <a class="button button-primary" href="${escapeAttribute(selectedPage.url)}">לפתוח את החלק הזה</a>
            <a class="button button-secondary" href="${escapeAttribute(buildUnitPageUrl(unit.id))}">לפתוח את כל היחידה</a>
          </div>
        </div>

        <aside class="lesson-preview-visual">
          ${previewVisual}
        </aside>
      </div>
    </div>
  `;
}

function getLearningPagesForUnit(unit) {
  const catalog = getUnitPagesCatalog();
  if (catalog) {
    return catalog.getUnitParts(unit.id).map((page) => ({
      id: `${unit.id}::${page.id}`,
      pageId: page.id,
      unitId: unit.id,
      label: page.label,
      navShort: page.navShort || page.label,
      title: page.title || page.label,
      description: page.description || "",
      kicker: page.kicker || "",
      blocks: Array.isArray(page.blocks) ? page.blocks : [],
      url: page.url || buildUnitPageUrl(unit.id, page.id)
    }));
  }

  return learningPageBlueprints.map((page) => ({
    id: `${unit.id}::${page.key}`,
    pageId: page.key,
    unitId: unit.id,
    key: page.key,
    label: page.label,
    navShort: page.label,
    title: page.label,
    description: page.description,
    kicker: unit.weekLabel,
    blocks: [],
    url: buildUnitPageUrl(unit.id, page.key)
  }));
}

function getSelectedLearningPage() {
  const unit = getSelectedUnit();
  const pages = getLearningPagesForUnit(unit);
  const selectedPage = pages.find((page) => page.id === state.selectedLessonId);

  if (selectedPage) {
    return selectedPage;
  }

  const fallbackPage = pages[0] || null;
  if (fallbackPage && state.selectedLessonId !== fallbackPage.id) {
    state.selectedLessonId = fallbackPage.id;
    saveStorage(STORAGE_KEYS.selectedLessonId, state.selectedLessonId);
  }

  return fallbackPage;
}

function openLesson(lessonId, shouldScroll = false) {
  if (!lessonId) {
    return;
  }

  state.selectedLessonId = lessonId;
  saveStorage(STORAGE_KEYS.selectedLessonId, lessonId);
  renderSelectedUnit();
  renderLessonStudio();

  if (shouldScroll) {
    openSectionPanel("lesson-studio", true);
  }
}

function getUnitPagesCatalog() {
  if (
    window.unitPagesCatalog &&
    typeof window.unitPagesCatalog.getUnitParts === "function" &&
    typeof window.unitPagesCatalog.buildUnitPageUrl === "function"
  ) {
    return window.unitPagesCatalog;
  }

  return null;
}

function buildUnitPageUrl(unitId, pageId = "") {
  const catalog = getUnitPagesCatalog();
  if (catalog) {
    return catalog.buildUnitPageUrl(unitId, pageId);
  }

  const params = new URLSearchParams();
  params.set("unit", unitId);
  if (pageId) {
    params.set("page", pageId);
  }
  return `./unit-page.html?${params.toString()}`;
}

function getLearningPageHighlights(page) {
  const highlights = [];

  page.blocks.forEach((block) => {
    if (block.type === "bullet-list") {
      highlights.push(...(block.items || []).slice(0, 2));
      return;
    }

    if (block.type === "analogy-grid") {
      highlights.push(...(block.items || []).slice(0, 2).map((item) => item.title));
      return;
    }

    if (block.type === "stack-map") {
      highlights.push(...(block.layers || []).slice(0, 2).map((layer) => layer.name));
      return;
    }

    if (block.type === "tool-grid") {
      highlights.push(...(block.items || []).slice(0, 2).map((item) => item.title));
      return;
    }

    if (block.type === "sequence") {
      highlights.push(`${(block.items || []).length} תחנות ב-flow אחד`);
      return;
    }

    if (block.type === "scenario-quiz") {
      highlights.push("תרחיש עם תשובה מוסתרת");
    }
  });

  const compactHighlights = highlights.filter(Boolean).slice(0, 4);
  return compactHighlights.length ? compactHighlights : [page.kicker || "עמוד לימוד ייעודי"];
}

function renderLearningPageVisual(page) {
  const analogyBlock = page.blocks.find((block) => block.type === "analogy-grid");
  if (analogyBlock) {
    return `
      <div class="lesson-visual-stack">
        ${(analogyBlock.items || [])
          .slice(0, 3)
          .map(
            (item) => `
              <article class="lesson-visual-card">
                <span class="lesson-visual-pill">${escapeHtml(item.tag || "")}</span>
                <strong>${escapeHtml(item.title || "")}</strong>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  const stackBlock = page.blocks.find((block) => block.type === "stack-map");
  if (stackBlock) {
    return `
      <div class="lesson-visual-stack">
        ${(stackBlock.layers || [])
          .slice(0, 4)
          .map(
            (layer) => `
              <article class="lesson-visual-card lesson-visual-card-layer">
                <strong>${escapeHtml(layer.name || "")}</strong>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  const sequenceBlock = page.blocks.find((block) => block.type === "sequence");
  if (sequenceBlock) {
    return `
      <div class="lesson-preview-steps">
        ${(sequenceBlock.items || [])
          .slice(0, 4)
          .map(
            (item) => `
              <div class="lesson-step-chip">
                <span>${escapeHtml(item.step || "")}</span>
                <strong>${escapeHtml(item.title || "")}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  const quizBlock = page.blocks.find((block) => block.type === "scenario-quiz");
  if (quizBlock) {
    return `
      <div class="lesson-visual-stack">
        <article class="lesson-visual-card">
          <span class="lesson-visual-pill">Scenario</span>
          <strong>שיפוט ארכיטקטורה</strong>
          <p>${escapeHtml(shortenLabel(quizBlock.question || "", 84))}</p>
        </article>
      </div>
    `;
  }

  return `
    <div class="lesson-visual-stack">
      <article class="lesson-visual-card">
        <span class="lesson-visual-pill">Unit Page</span>
        <strong>${escapeHtml(page.label)}</strong>
        <p>${escapeHtml(shortenLabel(page.description || "", 96))}</p>
      </article>
    </div>
  `;
}

function renderTimeline() {
  elements.timelineGrid.innerHTML = weekPlan
    .map((item) => {
      const unit = syllabusData.units.find((entry) => entry.id === item.unitId);
      const isCompleted = Boolean(state.unitProgress[item.unitId]);
      if (!unit) {
        return "";
      }

      return `
        <button
          type="button"
          class="timeline-card accent-${unit.accent} ${isCompleted ? "completed" : ""}"
          data-unit-id="${unit.id}"
        >
          <span class="timeline-week">שבוע ${item.week}</span>
          <div class="timeline-card-head">
            <div>
              <h3>${escapeHtml(unit.title)}</h3>
              <p class="detail-summary">${escapeHtml(item.focus)}</p>
            </div>
          </div>
          <div class="timeline-meta">
            <span class="meta-pill">${escapeHtml(unit.category)}</span>
            <span class="status-pill ${isCompleted ? "status-done" : "status-planned"}">
              ${isCompleted ? "הושלם" : "בהמשך"}
            </span>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderWeeklyRhythm() {
  elements.weeklyRhythm.innerHTML = syllabusData.weeklyRhythm
    .map(
      (item, index) => `
        ${renderDisclosureCard(
          `${index + 1}. ${escapeHtml(item.title)}`,
          `<p>${escapeHtml(item.description)}</p>`,
          index === 0,
          "compact"
        )}
      `
    )
    .join("");
}

function renderLearningAssets() {
  elements.learningAssets.innerHTML = syllabusData.learningAssets
    .map(
      (asset) => `
        ${renderDisclosureCard(
          escapeHtml(asset.title),
          `<p>${escapeHtml(asset.description)}</p>`,
          false,
          "compact"
        )}
      `
    )
    .join("");
}

function renderAvoidList() {
  elements.avoidList.innerHTML = syllabusData.avoidNow
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderSuccessLevels() {
  elements.successLevels.innerHTML = syllabusData.successLevels
    .map(
      (item) => `
        ${renderDisclosureCard(
          `${escapeHtml(item.level)} · ${escapeHtml(item.title)}`,
          `<p>${escapeHtml(item.description)}</p>`,
          false,
          "compact"
        )}
      `
    )
    .join("");
}

function renderStageSummary() {
  const summary = {
    total: state.stages.length,
    planned: state.stages.filter((stage) => stage.status === "planned").length,
    active: state.stages.filter((stage) => stage.status === "active").length,
    review: state.stages.filter((stage) => stage.status === "review").length,
    done: state.stages.filter((stage) => stage.status === "done").length
  };

  elements.stageSummary.innerHTML = `
    <span class="summary-chip">סה"כ ${summary.total}</span>
    <span class="summary-chip">בתכנון ${summary.planned}</span>
    <span class="summary-chip">בתהליך ${summary.active}</span>
    <span class="summary-chip">לריוויו ${summary.review}</span>
    <span class="summary-chip">הושלמו ${summary.done}</span>
  `;
}

function renderStages() {
  if (!state.stages.length) {
    elements.stagesList.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>עדיין אין שלבים שמורים</h3>
          <p>השתמש בטופס כדי לשמור שלב ראשון, או משוך יחידה קיימת לטופס בלחיצה אחת.</p>
        </div>
      </div>
    `;
    return;
  }

  const sortedStages = [...state.stages].sort((first, second) =>
    second.updatedAt.localeCompare(first.updatedAt)
  );

  elements.stagesList.innerHTML = sortedStages
    .map((stage) => {
      const unit = syllabusData.units.find((entry) => entry.id === stage.unitId);
      const statusMeta = stageStatusMeta[stage.status] || stageStatusMeta.planned;
      const typeMeta = stageTypeMeta[stage.type] || stageTypeMeta.note;
      const notes = stage.notes ? escapeHtml(stage.notes).replace(/\n/g, "<br>") : "אין פירוט עדיין.";

      return `
        <article class="stage-card">
          <div class="stage-card-head">
            <div>
              <h3>${escapeHtml(stage.title)}</h3>
              <div class="stage-meta">
                <span class="status-pill ${statusMeta.className}">${escapeHtml(statusMeta.label)}</span>
                <span class="type-pill ${typeMeta.className}">${escapeHtml(typeMeta.label)}</span>
                ${stage.week ? `<span class="meta-pill">שבוע ${stage.week}</span>` : ""}
                ${unit ? `<span class="meta-pill">${escapeHtml(unit.title)}</span>` : ""}
              </div>
            </div>
            <span class="panel-label">${formatDate(stage.updatedAt)}</span>
          </div>
          ${
            stage.notes
              ? renderDisclosureCard("פירוט השלב", `<p>${notes}</p>`, false, "inline")
              : '<p class="inline-note">אין פירוט עדיין.</p>'
          }
          <div class="stage-actions">
            <button type="button" class="mini-button" data-stage-action="edit" data-stage-id="${stage.id}">
              עריכה
            </button>
            <button type="button" class="mini-button" data-stage-action="toggle-done" data-stage-id="${stage.id}">
              ${stage.status === "done" ? "החזר לפעיל" : "סמן כהושלם"}
            </button>
            <button type="button" class="mini-button" data-stage-action="delete" data-stage-id="${stage.id}">
              מחק
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

async function hydrateDesignLab() {
  if (state.designLab.slug) {
    elements.anSlug.value = state.designLab.slug;
  }

  elements.anPrompt.value =
    elements.anPrompt.value ||
    "הצע 3 כיווני redesign לעמוד הנחיתה של הסילבוס בעברית RTL, עם hero editorial, proof strip, בנטו עדין ו-progressive disclosure.";

  try {
    const response = await fetch("/api/an/status");
    const result = await response.json();

    state.designLab.configured = Boolean(result.configured);
    if (!state.designLab.slug && result.defaultSlug) {
      state.designLab.slug = String(result.defaultSlug);
      elements.anSlug.value = state.designLab.slug;
      saveStorage(STORAGE_KEYS.designLabSlug, state.designLab.slug);
    }

    state.designLab.statusMessage = result.configured
      ? "השרת מחובר ל־21ST. חסר רק agent slug פעיל."
      : "השרת המקומי עדיין לא קיבל AN_API_KEY.";
  } catch (error) {
    state.designLab.configured = false;
    state.designLab.statusMessage = "לא הצלחתי לבדוק את חיבור ה־21ST מהשרת.";
  }

  renderHeroNextActions();
  renderDesignLabSessionMeta();
  renderDesignLabResponse();
}

async function submitDesignLabPrompt() {
  const slug = elements.anSlug.value.trim();
  const message = elements.anPrompt.value.trim();

  state.designLab.slug = slug;
  saveStorage(STORAGE_KEYS.designLabSlug, slug);

  if (!slug) {
    state.designLab.statusMessage = "צריך להזין agent slug כדי לדבר עם 21ST.";
    renderHeroNextActions();
    renderDesignLabSessionMeta();
    return;
  }

  if (!message) {
    state.designLab.statusMessage = "צריך לכתוב פרומפט לפני השליחה.";
    renderHeroNextActions();
    renderDesignLabSessionMeta();
    return;
  }

  state.designLab.isLoading = true;
  state.designLab.statusMessage = "שולח ל־21ST...";
  renderHeroNextActions();
  renderDesignLabSessionMeta();
  renderDesignLabResponse();

  try {
    const response = await fetch("/api/an/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        slug,
        message,
        sandboxId: state.designLab.sandboxId,
        threadId: state.designLab.threadId
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "הקריאה ל־21ST נכשלה.");
    }

    state.designLab.response = String(result.text || "").trim();
    state.designLab.sandboxId = String(result.sandboxId || state.designLab.sandboxId || "");
    state.designLab.threadId = String(result.threadId || state.designLab.threadId || "");
    state.designLab.sessionId = String(result.sessionId || state.designLab.sessionId || "");
    state.designLab.usage = result.usage || null;
    state.designLab.statusMessage = "התקבלה תשובה מהסוכן.";

    saveStorage(STORAGE_KEYS.designLabSession, {
      sandboxId: state.designLab.sandboxId,
      threadId: state.designLab.threadId,
      sessionId: state.designLab.sessionId
    });
  } catch (error) {
    state.designLab.statusMessage =
      error instanceof Error ? error.message : "משהו השתבש בזמן הקריאה ל־21ST.";
  } finally {
    state.designLab.isLoading = false;
    renderHeroNextActions();
    renderDesignLabSessionMeta();
    renderDesignLabResponse();
  }
}

function resetDesignLabSession() {
  state.designLab.sandboxId = "";
  state.designLab.threadId = "";
  state.designLab.sessionId = "";
  state.designLab.response = "";
  state.designLab.usage = null;
  state.designLab.statusMessage = state.designLab.configured
    ? "ה־session אופס. אפשר להתחיל שיחה חדשה."
    : "ה־session אופס, אבל השרת עדיין לא מחובר ל־21ST.";

  localStorage.removeItem(STORAGE_KEYS.designLabSession);
  renderHeroNextActions();
  renderDesignLabSessionMeta();
  renderDesignLabResponse();
}

function renderDesignLabSessionMeta() {
  elements.anStatus.textContent = state.designLab.statusMessage;

  const chips = [];

  if (state.designLab.slug) {
    chips.push(`<span class="summary-chip">slug: ${escapeHtml(state.designLab.slug)}</span>`);
  }

  if (state.designLab.sandboxId) {
    chips.push(`<span class="summary-chip">sandbox פעיל</span>`);
  }

  if (state.designLab.threadId) {
    chips.push(`<span class="summary-chip">thread פעיל</span>`);
  }

  if (state.designLab.usage?.totalCostUsd != null) {
    chips.push(
      `<span class="summary-chip">עלות ${escapeHtml(Number(state.designLab.usage.totalCostUsd).toFixed(4))}$</span>`
    );
  }

  elements.anSessionMeta.innerHTML = chips.join("");
  elements.anSubmit.disabled = state.designLab.isLoading;
}

function renderDesignLabResponse() {
  if (state.designLab.isLoading) {
    elements.anResponse.innerHTML = `
      <div class="lab-response-shell loading">
        <div class="lab-spinner" aria-hidden="true"></div>
        <p>מחכה לתשובת 21ST...</p>
      </div>
    `;
    return;
  }

  if (!state.designLab.response) {
    elements.anResponse.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>עדיין אין תגובה</h3>
          <p>הזן slug, כתוב בריף קצר ושלח. התשובה תופיע כאן.</p>
        </div>
      </div>
    `;
    return;
  }

  elements.anResponse.innerHTML = `
    <article class="lab-response-shell">
      <div class="chat-bubble chat-bubble-agent">
        <span class="chat-role">21ST Agent</span>
        <pre class="lab-response-text">${escapeHtml(state.designLab.response)}</pre>
      </div>
    </article>
  `;
}

function setThemePreset(presetId) {
  if (!themePresets.find((preset) => preset.id === presetId)) {
    return;
  }

  state.themePreset = presetId;
  saveStorage(STORAGE_KEYS.themePreset, presetId);
  renderThemePresets();
}

function syncScrollUi() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0;
  elements.scrollProgress.style.width = `${progress * 100}%`;

  const activeOffset = window.scrollY + 180;
  let activeSectionId = state.openSectionId || sectionLinks[0].id;

  if (!state.openSectionId) {
    sectionLinks.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node && node.offsetTop <= activeOffset) {
        activeSectionId = section.id;
      }
    });
  }

  elements.sectionNav.querySelectorAll("[data-section-id]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.sectionId === activeSectionId);
  });
}

function saveStageFromForm() {
  const title = elements.stageTitle.value.trim();
  const notes = elements.stageNotes.value.trim();

  if (!title) {
    elements.stageTitle.focus();
    return;
  }

  const existingStage = state.stages.find((stage) => stage.id === state.editingStageId);
  const unitId = elements.stageUnit.value || "";
  const weekValue = elements.stageWeek.value ? Number(elements.stageWeek.value) : null;
  const derivedWeek = weekValue || getWeekFromUnit(unitId);

  const nextStage = normalizeStage({
    id: existingStage?.id || createId(),
    title,
    notes,
    unitId,
    week: derivedWeek,
    status: elements.stageStatus.value,
    type: elements.stageType.value,
    createdAt: existingStage?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  if (state.editingStageId) {
    state.stages = state.stages.map((stage) => (stage.id === nextStage.id ? nextStage : stage));
  } else {
    state.stages.unshift(nextStage);
  }

  persistStages();
  resetStageForm();
  renderHeroProof();
  renderStats();
  renderStageSummary();
  renderStages();
}

function editStage(stageId) {
  const stage = state.stages.find((item) => item.id === stageId);
  if (!stage) {
    return;
  }

  state.editingStageId = stage.id;
  elements.formTitle.textContent = "עריכת שלב";
  elements.formHint.textContent = "השינויים יישמרו במקום הערך הקיים.";
  elements.cancelEdit.classList.remove("hidden");
  elements.stageTitle.value = stage.title;
  elements.stageNotes.value = stage.notes;
  elements.stageStatus.value = stage.status;
  elements.stageType.value = stage.type;
  elements.stageUnit.value = stage.unitId || "";
  elements.stageWeek.value = stage.week ? String(stage.week) : "";
  elements.stageTitle.focus();
  openSectionPanel("stages", true);
}

function toggleStageDone(stageId) {
  state.stages = state.stages.map((stage) => {
    if (stage.id !== stageId) {
      return stage;
    }

    return {
      ...stage,
      status: stage.status === "done" ? "active" : "done",
      updatedAt: new Date().toISOString()
    };
  });

  persistStages();
  renderHeroProof();
  renderStats();
  renderStageSummary();
  renderStages();
}

function deleteStage(stageId) {
  const didConfirm = window.confirm("למחוק את השלב הזה?");
  if (!didConfirm) {
    return;
  }

  state.stages = state.stages.filter((stage) => stage.id !== stageId);
  persistStages();

  if (state.editingStageId === stageId) {
    resetStageForm();
  }

  renderHeroProof();
  renderStats();
  renderStageSummary();
  renderStages();
}

function prefillStageFormFromUnit(unit) {
  elements.stageTitle.value = `${unit.title} · תוצר עבודה`;
  elements.stageWeek.value = String(unit.weekStart);
  elements.stageStatus.value = "planned";
  elements.stageType.value = "deliverable";
  elements.stageUnit.value = unit.id;
  elements.stageNotes.value = `תוצר מרכזי: ${unit.deliverable}\n\nמבחן הבנה: ${unit.understandingTest}`;
  elements.stageTitle.focus();
  openSectionPanel("stages", true);
}

function resetStageForm() {
  state.editingStageId = null;
  elements.formTitle.textContent = "שלב חדש";
  elements.formHint.textContent = "שמור שלבים לפי שבוע, יחידה או תוצר.";
  elements.cancelEdit.classList.add("hidden");
  elements.stageForm.reset();
}

function exportStagesToJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    programTitle: syllabusData.programTitle,
    stageCount: state.stages.length,
    stages: state.stages
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "builder-course-stages.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importStagesFromJson(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const incoming = Array.isArray(parsed) ? parsed : parsed?.stages;
      if (!Array.isArray(incoming)) {
        throw new Error("Invalid stage payload");
      }

      const normalized = normalizeStageCollection(incoming);
      const merged = new Map(state.stages.map((stage) => [stage.id, stage]));
      normalized.forEach((stage) => merged.set(stage.id, stage));
      state.stages = Array.from(merged.values());
      persistStages();
      renderHeroProof();
      renderStats();
      renderStageSummary();
      renderStages();
    } catch (error) {
      window.alert("הקובץ לא בפורמט JSON תקין שמתאים לשלבים.");
    } finally {
      event.target.value = "";
    }
  };

  reader.readAsText(file, "utf-8");
}

function toggleUnitComplete(unitId) {
  state.unitProgress = {
    ...state.unitProgress,
    [unitId]: !state.unitProgress[unitId]
  };

  saveStorage(STORAGE_KEYS.unitProgress, state.unitProgress);
  renderHeroProof();
  renderHeroShowcase();
  renderStats();
  renderUnits();
  renderSelectedUnit();
  renderTimeline();
}

function selectUnit(unitId) {
  state.selectedUnitId = unitId;
  saveStorage(STORAGE_KEYS.selectedUnitId, unitId);
  renderHeroShowcase();
  renderUnits();
  renderSelectedUnit();
  renderLessonStudio();
}

function getFilteredUnits() {
  return syllabusData.units.filter((unit) => {
    const matchesCategory =
      state.activeCategory === "all" || unit.category === state.activeCategory;

    if (!matchesCategory) {
      return false;
    }

    if (!state.searchTerm) {
      return true;
    }

    const haystack = [
      unit.title,
      unit.category,
      unit.summary,
      unit.weekLabel,
      ...unit.topics,
      ...unit.goals,
      ...unit.redFlags
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(state.searchTerm);
  });
}

function getSelectedUnit() {
  return syllabusData.units.find((unit) => unit.id === state.selectedUnitId) || syllabusData.units[0];
}

function getWeekFromUnit(unitId) {
  const unit = syllabusData.units.find((item) => item.id === unitId);
  return unit ? unit.weekStart : null;
}

function setUnitAccordionState(isOpen) {
  elements.unitDetail
    .querySelectorAll("details[data-accordion='unit']")
    .forEach((accordion) => {
      accordion.open = isOpen;
    });
}

function persistStages() {
  saveStorage(STORAGE_KEYS.stages, state.stages);
}

function normalizeStageCollection(stages) {
  if (!Array.isArray(stages)) {
    return [];
  }

  return stages
    .map(normalizeStage)
    .filter(Boolean);
}

function normalizeStage(stage) {
  if (!stage || typeof stage !== "object") {
    return null;
  }

  const title = String(stage.title || "").trim();
  if (!title) {
    return null;
  }

  const status = stageStatusMeta[stage.status] ? stage.status : "planned";
  const type = stageTypeMeta[stage.type] ? stage.type : "note";
  const week = stage.week ? Number(stage.week) : getWeekFromUnit(stage.unitId || "");

  return {
    id: String(stage.id || createId()),
    title,
    notes: String(stage.notes || "").trim(),
    unitId: stage.unitId ? String(stage.unitId) : "",
    week: Number.isFinite(week) ? week : null,
    status,
    type,
    createdAt: String(stage.createdAt || new Date().toISOString()),
    updatedAt: String(stage.updatedAt || new Date().toISOString())
  };
}

function renderList(items, className) {
  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderDisclosureCard(title, bodyHtml, isOpen = false, variant = "unit") {
  const openAttribute = isOpen ? " open" : "";
  return `
    <details class="disclosure-card disclosure-card-${variant}" data-accordion="unit"${openAttribute}>
      <summary class="disclosure-summary">
        <span>${title}</span>
        <span class="summary-tail">
          <span class="summary-hint">פתח</span>
          <span class="accordion-icon" aria-hidden="true"></span>
        </span>
      </summary>
      <div class="disclosure-body">
        ${bodyHtml}
      </div>
    </details>
  `;
}

function initHeroShader() {
  if (!elements.heroShaderCanvas) {
    return;
  }

  if (typeof destroyHeroShader === "function") {
    destroyHeroShader();
  }

  destroyHeroShader = mountHeroShader(elements.heroShaderCanvas);
}

function mountHeroShader(canvas) {
  const host = canvas.closest(".hero");
  if (!host) {
    return null;
  }

  const prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  class WebGLRenderer {
    constructor(targetCanvas, scale) {
      this.canvas = targetCanvas;
      this.scale = scale;
      this.gl = targetCanvas.getContext("webgl2", {
        antialias: true,
        alpha: false,
        powerPreference: "high-performance"
      });
      this.program = null;
      this.vertexShader = null;
      this.fragmentShader = null;
      this.buffer = null;
      this.uniforms = {};
      this.mouseMove = [0, 0];
      this.mouseCoords = [0, 0];
      this.pointerCoords = [0, 0];
      this.pointerCount = 0;
      this.vertexSource = `#version 300 es
precision highp float;
in vec4 position;
void main() {
  gl_Position = position;
}`;
      this.vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
    }

    compile(type, source) {
      const shader = this.gl.createShader(type);
      if (!shader) {
        throw new Error("Failed to create shader.");
      }

      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);

      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        const error = this.gl.getShaderInfoLog(shader);
        this.gl.deleteShader(shader);
        throw new Error(error || "Shader compilation failed.");
      }

      return shader;
    }

    setup(fragmentSource) {
      this.vertexShader = this.compile(this.gl.VERTEX_SHADER, this.vertexSource);
      this.fragmentShader = this.compile(this.gl.FRAGMENT_SHADER, fragmentSource);
      this.program = this.gl.createProgram();

      if (!this.program) {
        throw new Error("Failed to create program.");
      }

      this.gl.attachShader(this.program, this.vertexShader);
      this.gl.attachShader(this.program, this.fragmentShader);
      this.gl.linkProgram(this.program);

      if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
        throw new Error(this.gl.getProgramInfoLog(this.program) || "Program link failed.");
      }

      this.buffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertices), this.gl.STATIC_DRAW);

      const position = this.gl.getAttribLocation(this.program, "position");
      this.gl.enableVertexAttribArray(position);
      this.gl.vertexAttribPointer(position, 2, this.gl.FLOAT, false, 0, 0);

      this.uniforms = {
        resolution: this.gl.getUniformLocation(this.program, "resolution"),
        time: this.gl.getUniformLocation(this.program, "time"),
        move: this.gl.getUniformLocation(this.program, "move"),
        touch: this.gl.getUniformLocation(this.program, "touch"),
        pointerCount: this.gl.getUniformLocation(this.program, "pointerCount"),
        pointers: this.gl.getUniformLocation(this.program, "pointers")
      };
    }

    updateScale(scale) {
      this.scale = scale;
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    updatePointerState(pointerHandler) {
      this.mouseCoords = pointerHandler.first;
      this.pointerCoords = pointerHandler.coords;
      this.mouseMove = pointerHandler.move;
      this.pointerCount = pointerHandler.count;
    }

    render(now = 0) {
      if (!this.program || !this.buffer) {
        return;
      }

      this.gl.clearColor(0, 0, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      this.gl.useProgram(this.program);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);

      if (this.uniforms.resolution) {
        this.gl.uniform2f(this.uniforms.resolution, this.canvas.width, this.canvas.height);
      }
      if (this.uniforms.time) {
        this.gl.uniform1f(this.uniforms.time, now * 1e-3);
      }
      if (this.uniforms.move) {
        this.gl.uniform2f(this.uniforms.move, this.mouseMove[0], this.mouseMove[1]);
      }
      if (this.uniforms.touch) {
        this.gl.uniform2f(this.uniforms.touch, this.mouseCoords[0], this.mouseCoords[1]);
      }
      if (this.uniforms.pointerCount) {
        this.gl.uniform1i(this.uniforms.pointerCount, this.pointerCount);
      }
      if (this.uniforms.pointers) {
        this.gl.uniform2fv(this.uniforms.pointers, this.pointerCoords);
      }

      this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
    }

    destroy() {
      if (this.buffer) {
        this.gl.deleteBuffer(this.buffer);
        this.buffer = null;
      }

      if (this.program) {
        this.gl.deleteProgram(this.program);
        this.program = null;
      }

      if (this.vertexShader) {
        this.gl.deleteShader(this.vertexShader);
        this.vertexShader = null;
      }

      if (this.fragmentShader) {
        this.gl.deleteShader(this.fragmentShader);
        this.fragmentShader = null;
      }
    }
  }

  class PointerHandler {
    constructor(targetElement, targetCanvas, scale, onChange) {
      this.target = targetElement;
      this.canvas = targetCanvas;
      this.scale = scale;
      this.onChange = onChange;
      this.active = false;
      this.pointers = new Map();
      this.lastCoords = [0, 0];
      this.moves = [0, 0];
      this.unsubscribers = [];

      this.bind();
    }

    bind() {
      this.onPointerDown = (event) => {
        this.active = true;
        this.pointers.set(event.pointerId, this.mapCoords(event.clientX, event.clientY));
        this.lastCoords = this.mapCoords(event.clientX, event.clientY);
        this.onChange();
      };

      this.onPointerMove = (event) => {
        if (!this.active) {
          return;
        }

        this.lastCoords = this.mapCoords(event.clientX, event.clientY);
        this.pointers.set(event.pointerId, this.lastCoords);
        this.moves = [this.moves[0] + event.movementX, this.moves[1] + event.movementY];
        this.onChange();
      };

      this.onPointerUp = (event) => {
        this.pointers.delete(event.pointerId);
        this.active = this.pointers.size > 0;
        if (!this.active) {
          this.moves = [0, 0];
        }
        this.onChange();
      };

      ["pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel"].forEach((type) => {
        const handler =
          type === "pointerdown"
            ? this.onPointerDown
            : type === "pointermove"
              ? this.onPointerMove
              : this.onPointerUp;

        this.target.addEventListener(type, handler, { passive: true });
        this.unsubscribers.push(() => this.target.removeEventListener(type, handler));
      });
    }

    mapCoords(clientX, clientY) {
      const rect = this.canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      return [x * this.scale, (rect.height - y) * this.scale];
    }

    updateScale(scale) {
      this.scale = scale;
    }

    destroy() {
      this.unsubscribers.forEach((unsubscribe) => unsubscribe());
      this.unsubscribers = [];
    }

    get count() {
      return this.pointers.size;
    }

    get move() {
      return this.moves;
    }

    get coords() {
      return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0];
    }

    get first() {
      return this.pointers.values().next().value || this.lastCoords;
    }
  }

  let frameId = 0;
  let resizeObserver = null;
  let renderer = null;
  let pointerHandler = null;

  try {
    renderer = new WebGLRenderer(canvas, 1);
    if (!renderer.gl) {
      return null;
    }
    renderer.setup(HERO_SHADER_SOURCE);
  } catch (error) {
    console.warn("Hero shader disabled:", error);
    return null;
  }

  const renderNow = (time = performance.now()) => {
    if (!renderer || !pointerHandler) {
      return;
    }

    renderer.updatePointerState(pointerHandler);
    renderer.render(time);
  };

  const resize = () => {
    const rect = host.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 1.5));
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    renderer.updateScale(dpr);
    if (pointerHandler) {
      pointerHandler.updateScale(dpr);
    }
    renderNow();
  };

  pointerHandler = new PointerHandler(host, canvas, 1, () => {
    if (prefersReducedMotion) {
      renderNow();
    }
  });

  const animate = (time) => {
    renderNow(time);
    frameId = window.requestAnimationFrame(animate);
  };

  resize();

  if (!prefersReducedMotion) {
    frameId = window.requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
  }

  return () => {
    window.removeEventListener("resize", resize);
    if (frameId) {
      window.cancelAnimationFrame(frameId);
    }
    resizeObserver?.disconnect();
    pointerHandler?.destroy();
    renderer?.destroy();
  };
}

function loadStorage(key, fallback) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Storage write failed", error);
  }
}

function createId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `stage-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatDate(isoString) {
  try {
    return new Intl.DateTimeFormat("he-IL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(new Date(isoString));
  } catch (error) {
    return isoString;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function shortenLabel(value, maxLength = 32) {
  const text = String(value || "").trim();
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trim()}…`;
}

const HERO_SHADER_SOURCE = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = rnd(i);
  float b = rnd(i + vec2(1.0, 0.0));
  float c = rnd(i + vec2(0.0, 1.0));
  float d = rnd(i + 1.0);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float t = 0.0;
  float a = 1.0;
  mat2 m = mat2(1.0, -0.5, 0.2, 1.2);
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= 2.0 * m;
    a *= 0.5;
  }
  return t;
}

float clouds(vec2 p) {
  float d = 1.0;
  float t = 0.0;
  for (float i = 0.0; i < 3.0; i++) {
    float a = d * fbm(i * 10.0 + p.x * 0.2 + 0.2 * (1.0 + i) * p.y + d + i * i + p);
    t = mix(t, d, a);
    d = a;
    p *= 2.0 / (i + 1.0);
  }
  return t;
}

void main(void) {
  vec2 uv = (FC - 0.5 * R) / MN;
  vec2 st = uv * vec2(2.0, 1.0);
  vec3 col = vec3(0.0);
  float bg = clouds(vec2(st.x + T * 0.5, -st.y));
  uv *= 1.0 - 0.3 * (sin(T * 0.2) * 0.5 + 0.5);

  for (float i = 1.0; i < 12.0; i++) {
    uv += 0.1 * cos(i * vec2(0.1 + 0.01 * i, 0.8) + i * i + T * 0.5 + 0.1 * uv.x);
    vec2 p = uv;
    float d = length(p);
    col += 0.00125 / d * (cos(sin(i) * vec3(1.0, 2.0, 3.0)) + 1.0);
    float b = noise(i + p + bg * 1.731);
    col += 0.002 * b / length(max(p, vec2(b * p.x * 0.02, p.y)));
    col = mix(col, vec3(bg * 0.25, bg * 0.137, bg * 0.05), d);
  }

  O = vec4(col, 1.0);
}`;
