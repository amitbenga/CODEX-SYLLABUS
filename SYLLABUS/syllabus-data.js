// Real syllabus data — ported from CODEX-SYLLABUS/app.js
const SYLLABUS = {
  programTitle: "Technical Product Builder",
  roleTitle: "AI-Native Full-Stack Product Lead",
  durationWeeks: 17,
  runningCase: {
    title: "מערכת ניהול לידים, פגישות וידע למטפלים",
    description: "קייס מתגלגל עבור מטפלת נטורופתית ורפלקסולוגית: קליטת לידים, תיאום פגישות, תיעוד ידע מקצועי והכנה להוספת דאטה בהמשך."
  },
  coreGoal: "להוביל בנייה של מערכות בצורה מקצועית, ביקורתית ואחראית, עם מספיק עומק טכני כדי להבין ארכיטקטורה, לשפוט קוד, לנהל delivery ולהכווין סוכנים בלי ללכת לאיבוד בעומק מיותר.",
  outcomes: [
    "לאפיין אפליקציה בצורה מקצועית ולא רק לכתוב prompt כללי.",
    "להבין אילו שכבות יש במערכת ומה האחריות של כל שכבה.",
    "להנחות סוכן או מפתח איך לממש פיצ'ר בלי להשאיר חורים.",
    "לקרוא PR ולהבין אם הוא טוב, מסוכן, חלקי או עקום.",
    "להוביל שינוי לפרודקשן עם פחות הפתעות."
  ],
  successLevels: [
    { level: 1, title: "להסביר מערכת קיימת", description: "לפרט בבירור מה רץ איפה, מי תלוי במי ואיפה נשמר המידע." },
    { level: 2, title: "לנסח פיצ'ר נכון", description: "להפוך צורך עסקי ל-flow, business rules, API ו-test plan שמישהו באמת יכול לממש." },
    { level: 3, title: "לזהות פתרון עקום", description: "להבין מתי משהו עובד נקודתית אבל בנוי רע, מסוכן או לא יחזיק לאורך זמן." },
    { level: 4, title: "לעשות ריוויו רציני", description: "למצוא סיכונים אמיתיים ב-PR, לא רק להגיב על styling או naming." },
    { level: 5, title: "להוביל לפרודקשן", description: "להוציא שינוי מבוקר עם פחות הפתעות, פחות regressions ויותר שליטה." }
  ],
  units: [
    {
      id: "world-map", num: 1, weekLabel: "שבוע 1", weekStart: 1, weekEnd: 1,
      title: "מפת העולם של אפליקציה מודרנית",
      category: "יסודות",
      summary: "להבין איך אפליקציית web אמיתית בנויה מקצה לקצה ומה האחריות של כל שכבה.",
      goals: [
        "להבחין בין client, server, database ו-storage.",
        "להבין מה ציבורי, מה פרטי ואיפה עובר הגבול בין שכבות.",
        "לראות dependencies אמיתיים בין auth, services, deployment ו-environment variables."
      ],
      topics: ["Client vs Server", "Frontend vs Backend", "Database vs Storage", "API", "Authentication vs Authorization", "State", "Deployment", "Environment variables", "Third-party services"],
      deliverable: "דיאגרמה מלאה של אחת האפליקציות שלך: מה רץ בדפדפן, מה בשרת, איפה נשמר data, איפה נשמרים קבצים ומה פרטי מול ציבורי.",
      exercise: "בחר אפליקציה אחת וכתוב לכל שכבה מה האחריות שלה, מה היא יודעת ומה אסור לה לדעת.",
      understandingTest: "אם סוכן אומר 'אני אעשה את זה בקליינט', אתה צריך לדעת מתי זה סביר ומתי זה חור אבטחה.",
      managementLens: "כשאתה נותן משימה, דרוש במפורש מיפוי שכבות ו-trust boundaries לפני implementation.",
      redFlags: ["לוגיקה רגישה ב-client בלבד", "env vars דולפים ל-frontend", "בלבול בין DB, storage ו-cache"]
    },
    {
      id: "http-api", num: 2, weekLabel: "שבוע 2", weekStart: 2, weekEnd: 2,
      title: "HTTP, API וזרימות מערכת",
      category: "יסודות",
      summary: "להבין איך מידע זורם בין חלקי המערכת, ואיך request אחד הופך ל-user flow אמיתי.",
      goals: [
        "לפרק כל flow לצעדים ברורים: יוזם, payload, validation, persistence ותגובה.",
        "להבין מה ההבדל בין לעבוד לבין לעבוד נכון עם errors, retries ו-timeouts.",
        "לזהות מתי flow לא idempotent ועלול ליצור כפילויות או מצב שבור."
      ],
      topics: ["Request / Response", "GET / POST / PATCH / DELETE", "Headers", "JSON", "FormData", "Status codes", "Validation", "Idempotency", "Error handling", "Retries", "Timeouts"],
      deliverable: "פירוק של 3 flows מהמערכת שלך: יצירת שחקן, שיוך לפרויקט והעלאת קובץ. לכל flow: מי יוזם, מה נשלח, מי מאמת, מה נשמר ואיך מחזירים שגיאה.",
      exercise: "כתוב טבלה אחת לכל flow עם שלב, owner, data, validations ו-failure mode.",
      understandingTest: "לדעת להסביר למה 'זה עובד' לא מספיק בלי validation, error handling ו-edge cases.",
      managementLens: "בקש מהסוכן sequence ברור של request lifecycle לפני שהוא נוגע בקוד.",
      redFlags: ["payload לא מאומת", "status codes אקראיים", "חוסר טיפול בכשלי רשת או retries כפולים"]
    },
    {
      id: "data-modeling", num: 3, weekLabel: "שבועות 3–4", weekStart: 3, weekEnd: 4,
      title: "מודלינג נתונים, זיכרון וקטורי ו-State בעולם של סוכנים",
      category: "דאטה, זיכרון וסוכנים",
      summary: "לתכנן שכבת נתונים שמחזיקה אמת רלציונית, זיכרון סמנטי ו-state של סוכנים בלי לתת לקוד אוטומטי לשבור את המערכת.",
      goals: [
        "לזהות אילו נתונים שייכים ל-SQL, אילו לקבצים/Storage, אילו לווקטורים ואילו ל-agent state.",
        "לתכנן סכמות, constraints ו-RLS למערכת המטפלים כך שסוכנים לא יעקפו את חוקי הדומיין.",
        "להבין איך RAG, embeddings ו-Structured Outputs מחברים סוכן הסתברותי למערכת דטרמיניסטית."
      ],
      topics: ["Relational source of truth", "Entities, constraints and junction tables", "Supabase, RLS and serverless connection pressure", "Object Storage and signed URLs", "Vector embeddings, chunking and retrieval", "RAG for therapist knowledge", "Agent state, runs, tool calls and audit trail", "MCP as a controlled tool boundary", "Structured Outputs and Zod validation", "SQL injection, prompt injection and slopsquatting"],
      deliverable: "Data architecture pack למערכת המטפלים: ERD ראשוני, טבלת RAG chunks, מודל agent_runs/tool_calls, כללי RLS, ו-checklist הגנה לפני שסוכן כותב ל-DB.",
      exercise: "תכנן פיצ'ר שבו מטפלת מעלה סיכום טיפול וקבצים, וסוכן מציע follow-up: איפה נשמרת האמת, איפה נשמר הקובץ, מה נכנס לווקטורים, ואיזו ולידציה נדרשת לפני כתיבה.",
      understandingTest: "לדעת לזהות מתי סוכן מציע פתרון שנראה עובד אבל מערבב SQL, קבצים, וקטורים ו-state בצורה שתשבור פרודקשן.",
      managementLens: "בכל שינוי דאטה דרוש מהסוכן: מקור אמת, הרשאות, constraints, migration impact, rollback, ולידציה וראיות בדיקה.",
      redFlags: ["קבצים כבדים בתוך JSON או עמודת DB במקום Storage", "סוכן שכותב ישירות ל-DB בלי Structured Output וולידציה", "RAG בלי metadata, הרשאות, מקור ואסטרטגיית מחיקה"]
    },
    {
      id: "business-logic", num: 4, weekLabel: "שבוע 5", weekStart: 5, weekEnd: 5,
      title: "לוגיקה עסקית: איפה היא צריכה לשבת",
      category: "דאטה וארכיטקטורה",
      summary: "להבדיל בין UI rules, domain rules ו-invariants, ולמקם כל כלל בשכבה הנכונה.",
      goals: [
        "להגדיר business invariants שחייבים להישמר בכל מצב.",
        "להבין מה צריך validation ב-UI, מה בשרת ומה ב-DB.",
        "לזהות race conditions בסיסיים ותלותים שבירות."
      ],
      topics: ["Business rules", "UI rules vs domain rules", "Validation at multiple layers", "Invariants", "Derived counters", "Permissions", "Race conditions בסיסיות", "Transactions ברמת רעיון"],
      deliverable: "מסמך business invariants לכל מוצר שאתה בונה, עם חוקים שלא נשברים גם אם ה-UI משתנה.",
      exercise: "קח 5 חוקים עסקיים מהמוצר וכתוב איפה כל אחד נאכף ומה קורה אם מזיזים אותו לשכבה לא נכונה.",
      understandingTest: "לדעת להסביר למה סטטוס של שחקן הוא פר-פרויקט ולא שדה גלובלי.",
      managementLens: "בקש מהסוכן לנסח invariants לפני קוד, ואז לבדוק שכל שינוי שומר עליהם.",
      redFlags: ["rule עסקי שיושב רק ב-frontend", "transactions חסרות סביב פעולה מרובת צעדים", "permission check שמפוזר ולא עקבי"]
    },
    {
      id: "frontend-architecture", num: 5, weekLabel: "שבוע 6", weekStart: 6, weekEnd: 6,
      title: "Frontend architecture למנהל מוצר טכני",
      category: "ממשק וחוויית מוצר",
      summary: "לא להיות מומחה פרונט, אלא להבין איך UI נשבר, איפה state מתבלגן ואיך בונים מסכים שאפשר לתחזק.",
      goals: [
        "לפרק מסך לקומפוננטות, data sources ו-user actions.",
        "להבין מהו local state לעומת server state.",
        "לחשוב מראש על loading, empty ו-error states ולא רק על happy path."
      ],
      topics: ["Components", "Props", "Local state", "Server state", "Forms", "Controlled inputs", "Optimistic UI", "Loading / empty / error states", "Tables and lists", "Modal flows", "Search / filter / pagination", "Re-rendering בסיסי", "Separation between display and logic"],
      deliverable: "פירוק מסך קיים לרשימת קומפוננטות, מקורות נתונים, פעולות משתמש ו-failure states.",
      exercise: "בחר מסך אחד שמרגיש בסדר היום וכתוב אילו אזורים בו הכי צפויים להתפוצץ בעוד חודש.",
      understandingTest: "לדעת לזהות UI שנראה תקין אבל הלוגיקה שלו מבולגנת ושבירה.",
      managementLens: "כשאתה נותן משימה ל-UI, דרוש רשימת states מלאה ולא רק mock יפה.",
      redFlags: ["server state שמנוהל מקומית בלי סיבה", "חוסר טיפול ב-empty / loading / error", "לוגיקה עסקית עמוקה בתוך קומפוננטת תצוגה"]
    },
    {
      id: "design-templates-21st", num: 6, weekLabel: "שבוע 7", weekStart: 7, weekEnd: 7,
      title: "21ST, טמפלייטים ושבירת עיצוב AI גנרי",
      category: "ממשק וחוויית מוצר",
      summary: "להשתמש בספריות UI וטמפלייטים כמו 21st כדי לכוון סוכן קוד לעיצוב ספציפי, עשיר ומתאים למוצר במקום לקבל UI גנרי.",
      goals: [
        "להבין למה סוכני AI מייצרים עיצוב גנרי כשאין להם רפרנס, היררכיה ומגבלות עיצוב.",
        "לדעת לחפש ב-21st קומפוננטות, screens ו-themes לפי תפקיד מוצרי ולא לפי מראה בלבד.",
        "לתרגם רפרנס עיצובי ל-spec שאפשר לתת לסוכן קוד: layout, tokens, states, components ו-constraints."
      ],
      topics: ["Generic AI design patterns", "21st Community components", "Screens and themes as design references", "Magic Chat and Magic MCP as UI exploration tools", "Reference decomposition", "Design tokens", "Component anatomy", "Responsive states", "Accessibility and content fit", "Prompting a coding agent with visual constraints"],
      deliverable: "Design reference pack למערכת המטפלים: 3 רפרנסים מ-21st, פירוק layout/tokens/states, ופרומפט עבודה לסוכן שמייצר מסך לידים או פגישות לא גנרי.",
      exercise: "בחר מסך אחד במערכת המטפלים, למשל lead intake או פגישות קרובות, מצא 3 רפרנסים ב-21st, וכתוב מה לקחת מכל אחד ומה אסור להעתיק.",
      understandingTest: "לדעת להסביר למה 'תעשה dashboard יפה' כמעט תמיד ייצר UI גנרי, ואיך רפרנס מפורק נכון משנה את התוצאה.",
      managementLens: "לפני משימת UI לסוכן, דרוש reference pack: מטרת המסך, רפרנסים, tokens, states, מגבלות נגישות ודברים שלא לשנות.",
      redFlags: ["העתקה עיוורת של hero/gradient שאינה מתאימה למוצר תפעולי", "בחירת קומפוננטה לפי וואו ויזואלי במקום workflow", "פרומפט UI בלי states, responsive behavior או תוכן אמיתי"]
    },
    {
      id: "backend-architecture", num: 7, weekLabel: "שבוע 8", weekStart: 8, weekEnd: 8,
      title: "Backend architecture בלי להסתבך",
      category: "מערכת ושרת",
      summary: "להבין route, validation, service layer, orchestration ו-persistence בלי להפוך את השרת לספגטי.",
      goals: [
        "להפריד request handling, validation, business logic ו-data access.",
        "לזהות endpoints שמערבבים auth, persistence ו-formatting באותו מקום.",
        "להבין מתי צריך background job, webhook או logging מסודר."
      ],
      topics: ["Route / handler", "Controller", "Service layer", "Repository / data access", "Input validation", "Auth checks", "File upload flows", "Background jobs ברמת רעיון", "Webhooks", "Rate limiting", "Logging"],
      deliverable: "פירוק endpoint אמיתי לשכבות: request layer, validation, business logic, persistence ו-response formatting.",
      exercise: "בחר endpoint אחד וכתוב מה צריך לצאת ממנו כדי שלא יהיה route עם 200 שורות.",
      understandingTest: "לדעת להגיד לסוכן: אל תשים הכל בתוך ה-route, תפריד service ו-validation.",
      managementLens: "בקש PR קטן שמחלץ שכבה אחת בכל פעם במקום rewrite גורף.",
      redFlags: ["auth check חסר או מאוחר מדי", "logic עבה בתוך handler", "data access לא עקבי בין endpoints"]
    },
    {
      id: "security", num: 8, weekLabel: "שבוע 9", weekStart: 9, weekEnd: 9,
      title: "אבטחה פרקטית למי שבונה מוצרים",
      category: "איכות ופרודקשן",
      summary: "לא להפוך לחוקר אבטחה, אבל כן לדעת לזהות סיכונים לפני שהם יוצאים לפרודקשן.",
      goals: [
        "להבין public vs private surfaces ו-trust boundaries.",
        "לזהות סיכונים ב-upload flows, signed URLs, secrets ו-RLS.",
        "לחשוב על least privilege ו-abuse prevention כחלק מהתכנון."
      ],
      topics: ["Public vs private surfaces", "Secrets", "Env vars", "RLS / permissions", "File upload risks", "Signed URLs", "Injection basics", "XSS basics", "CSRF ברמת עיקרון", "Trust boundaries", "Least privilege", "Input sanitization", "Abuse prevention"],
      deliverable: "Security review checklist אישי לכל פיצ'ר חדש, כולל public form, write paths, storage, approvals ו-upload strategy.",
      exercise: "קח flow ציבורי אחד וכתוב איפה ניתן לכתוב ל-DB, מי יכול לגשת, ואיזה guardrails חסרים.",
      understandingTest: "להבין מתי טופס ציבורי הוא פיצ'ר לגיטימי ומתי הוא חור אבטחה.",
      managementLens: "לפני merge, דרוש threat model קצר: מי התוקף, מה המשטח, מה הנזק ומה ההגנות.",
      redFlags: ["כתיבה ל-DB בלי auth או gate", "storage ציבורי עם נתונים רגישים", "trust בנתוני client ללא אימות שרת"]
    },
    {
      id: "debugging", num: 9, weekLabel: "שבוע 10", weekStart: 10, weekEnd: 10,
      title: "דיבאגינג מקצועי",
      category: "איכות ופרודקשן",
      summary: "לעבור מ'למה זה לא עובד' ל'איך מזהים שכבת כשל ו-root cause אמיתי'.",
      goals: [
        "לייצר דרך חקירה מסודרת: reproduce, narrow scope, inspect, verify.",
        "להבדיל בין symptom ל-root cause.",
        "לדרוש הוכחות מסוכנים ולא להסתפק בהשערות."
      ],
      topics: ["Reproduce", "Narrow scope", "Logs", "Network tab", "Request payload inspection", "Response inspection", "Console errors", "DB inspection", "Storage inspection", "Binary search debugging", "Root cause vs symptom", "Regression thinking"],
      deliverable: "Postmortem קצר ל-3 באגים אמיתיים: symptom, suspected causes, actual root cause, fix ו-prevention.",
      exercise: "קח באג אחד ותכתוב רשימת השערות מסודרת עם הוכחה לכל השערה שנפסלה או אושרה.",
      understandingTest: "להפסיק לקבל תשובות כמו 'probably cache issue' בלי הוכחה.",
      managementLens: "בקש מסוכן root cause report לפני patch: reproduce steps, evidence, fix, prevention.",
      redFlags: ["תיקון בלי reproduce", "השערות לא מאומתות", "fix סימפטומטי בלי prevention"]
    },
    {
      id: "git-pr", num: 10, weekLabel: "שבוע 11", weekStart: 11, weekEnd: 11,
      title: "Git, branches, PRs ו-review discipline",
      category: "Delivery והובלה",
      summary: "לנהל delivery מסודר ולא ערימת שינויים כאוטית שקשה לבדוק, להבין או להחזיר אחורה.",
      goals: [
        "לבנות משמעת של scope קטן, commits אטומיים ו-PR ברור.",
        "להבין rollback, merge conflicts ו-hotfix vs feature branch.",
        "לנסח review comments שמדברים על סיכון והתנהגות, לא רק על טעם."
      ],
      topics: ["Branch strategy", "Atomic commits", "Pull requests", "Review comments", "Rollback", "Merge conflicts", "Release discipline", "Hotfix vs feature branch", "Changelog mindset"],
      deliverable: "Template קבוע ל-PR עם context, problem, scope, files changed, risks, test plan ו-rollback notes.",
      exercise: "קח PR קודם שלך וכתוב אילו חלקים ממנו היו רחבים מדי, מסוכנים מדי או לא בדיקים.",
      understandingTest: "לזהות PR שנראה 'מרשים' אבל בפועל מסוכן כי הוא רחב, לא בדיק או מלא side effects.",
      managementLens: "בקש מסוכן תמיד summary קצר, test plan ו-known risks במקום להסתפק ב'implemented successfully'.",
      redFlags: ["PR ענק בלי חלוקה ליחידות בדיקה", "אין test plan או rollback", "scope creep שמתחבא בתוך קובץ לא קשור"]
    },
    {
      id: "testing", num: 11, weekLabel: "שבוע 12", weekStart: 12, weekEnd: 12,
      title: "Testing בלי להיות דתי",
      category: "איכות ופרודקשן",
      summary: "להבין מה חייבים לבדוק, מה ידני מספיק, ואיפה אוטומציה באמת מייצרת ביטחון.",
      goals: [
        "להבחין בין unit, integration, E2E ו-manual QA.",
        "לזהות golden paths, edge cases והאזורים הכי שבירים במערכת.",
        "לתרגם architecture ל-test matrix פרקטי."
      ],
      topics: ["Unit tests", "Integration tests", "E2E tests", "Manual QA", "Golden paths", "Edge cases", "Regression test lists", "Testable architecture"],
      deliverable: "Test matrix לפיצ'רים הקריטיים במוצר: מה חייב אוטומציה, מה אפשר ידני ומה הכי מסוכן לפספס.",
      exercise: "בחר פיצ'ר אחד וכתוב 5 בדיקות שהכי שווה להשקיע בהן במקום לירות לכל הכיוונים.",
      understandingTest: "להבין מה קריטי לבדוק ומה הוא רק רעש בדיקות.",
      managementLens: "בקש test plan שמופרד ל-happy path, edge cases ו-regression risks.",
      redFlags: ["בדיקות שמכסות פרטים לא חשובים", "אין כיסוי ל-flow עסקי קריטי", "manual QA בלבד לאזור שביר מאוד"]
    },
    {
      id: "performance", num: 12, weekLabel: "שבוע 13", weekStart: 13, weekEnd: 13,
      title: "Performance, scale ותחזוקה",
      category: "איכות ופרודקשן",
      summary: "להבין למה מערכת סוחבת עם 20 רשומות ונחנקת ב-5,000, ואיך לתכנן לזה מראש.",
      goals: [
        "לחשוב על query cost, N+1, pagination ו-filtering.",
        "לזהות expensive renders, bundle bloat ו-image handling גרוע.",
        "להבין cost של storage, cleanup jobs ו-caching בסיסי."
      ],
      topics: ["Query cost", "N+1", "Pagination", "Filtering", "Caching basics", "Image handling", "Lazy loading", "Bundle size ברמת רעיון", "Expensive renders", "Storage cost", "Cleanup jobs"],
      deliverable: "רשימת bottlenecks אפשריים במוצר שלך עם הצעת guardrails לפני scale.",
      exercise: "בחר מסך או query אחד וכתוב למה הוא עלול להיות בעייתי ב-scale ומה האותות המוקדמים.",
      understandingTest: "להסביר למה משהו עובד עם 20 שחקנים אבל לא עם 5,000.",
      managementLens: "בקש מכל שינוי שמשפיע על data-heavy flows הערכה של cost, scale risks ו-pagination strategy.",
      redFlags: ["queries לא מוגבלות", "loading של כל הרשומות בלי pagination", "רינדורים יקרים בכל keystroke"]
    },
    {
      id: "agent-work", num: 13, weekLabel: "שבועות 14–15", weekStart: 14, weekEnd: 15,
      title: "עבודה עם סוכנים כמו Tech Lead",
      category: "עבודה עם סוכנים",
      summary: "לב המסלול: איך לפרק scope, איך למנוע overreach ואיך להוביל agents לתוצאה מבוקרת.",
      goals: [
        "לנסח משימות ברמת פירוק מתאימה לפי סוג הסוכן והסיכון במשימה.",
        "לדרוש analysis לפני implementation, root cause לפני patch ו-diff קטן לפני merge.",
        "לזהות hallucinations, overconfidence ו-'sounds good' שאין מאחוריהם substance."
      ],
      topics: ["Codex App / CLI / IDE / Web", "Permissions, approvals ו-sandbox boundaries", "MCP, skills, tools ו-subagents", "ניסוח משימות וחלוקת scope", "מניעת overreach ו-tool over-permission", "Analysis לפני implementation", "Diff קטן, test plan ו-rollback plan", "Root cause, not patch", "Traces, evals ו-run evidence", "זיהוי hallucination טכני ו-'sounds good'"],
      deliverable: "ספר תבניות לסוכן: feature spec, bug investigation, security review, refactor, PR review, tool permissions, eval plan ו-production readiness.",
      exercise: "אותה משימה בדיוק: לכתוב גרסה לסוכן ג'וניור, מיד וסניור, ולהתאים scope, פיקוח ו-checkpoints.",
      understandingTest: "לדעת להבדיל בין תשובה שנשמעת חכמה לבין עבודה טכנית שאפשר לסמוך עליה.",
      managementLens: "בכל משימה: context קצר, definition of done, constraints, permissions, allowed tools, tests, risks ו-what not to touch.",
      redFlags: ["rewrite מיותר כי הבקשה לא תחמה scope", "implementation בלי design pass", "תשובה בטוחה מדי בלי evidence"]
    },
    {
      id: "code-review", num: 14, weekLabel: "שבוע 16", weekStart: 16, weekEnd: 16,
      title: "קריאת קוד והערכת איכות",
      category: "Delivery והובלה",
      summary: "לדעת לשפוט קוד גם אם לא כתבת אותו: structure, naming, coupling, safety ותחזוקתיות.",
      goals: [
        "לפתח checklist עקבי לריוויו ולא להסתמך על תחושת בטן בלבד.",
        "להבחין בין over-engineering, under-engineering וקוד שפשוט לא עומד ב-domain.",
        "לזהות שינויים מינימליים מול שינויים רחבים שמסתירים סיכונים."
      ],
      topics: ["Readability", "Naming", "Separation of concerns", "Repetition", "Hidden coupling", "Unsafe assumptions", "Error handling", "Dead code", "Over-engineering", "Under-engineering"],
      deliverable: "Checklist קבוע לריוויו: structure, naming, dependencies, business rules, security ותחזוקתיות.",
      exercise: "פתח קובץ קיים במערכת שלך וכתוב review note אחד על readability, אחד על risk ואחד על maintenance.",
      understandingTest: "להצביע אם קוד הוא טוב, מסוכן, חלקי או עקום גם בלי שכתבת אותו.",
      managementLens: "בקש מסוכן review findings עם severity, impact ו-test gaps, לא סיכום כללי.",
      redFlags: ["hidden coupling בין שכבות", "assumptions שלא נבדקות", "dead code שמטשטש intent"]
    },
    {
      id: "capstone", num: 15, weekLabel: "שבוע 17", weekStart: 17, weekEnd: 17,
      title: "Capstone: הובלת פיצ'ר אמיתי מקצה לקצה",
      category: "Capstone",
      summary: "לסגור את המסלול עם feature אמיתי שאתה מוביל כמו technical lead ולא רק כמישהו שמדביק prompts.",
      goals: [
        "לתרגם problem statement ל-user flow, business rules, data model impact ו-API design.",
        "להכין UI states, edge cases, security considerations ו-test plan מסודר.",
        "לייצר rollout plan, PR review checklist ותיק עבודת ניהול טכני."
      ],
      topics: ["Problem statement", "User flow", "Business rules", "Data model impact", "API design", "UI states", "Edge cases", "Security considerations", "Test plan", "Rollout plan", "PR review checklist"],
      deliverable: "תיק עבודת technical lead לפיצ'ר אמיתי: מהבעיה העסקית עד rollout plan ו-review checklist.",
      exercise: "בחר פיצ'ר אמיתי מאחת האפליקציות שלך, וכתוב עבורו מסמך אחד שמוביל את כל התהליך מקצה לקצה.",
      understandingTest: "להוביל פיצ'ר אמיתי לפרודקשן בצורה מבוקרת, מדויקת ורב-שכבתית.",
      managementLens: "השלב שבו אתה מפסיק לחשוב כמו מתפעל פרומפטים ומתחיל לעבוד כמו builder-operator.",
      redFlags: ["חוסר alignment בין layers", "אין rollout / rollback plan", "business rules חסרים במסמך ההובלה"]
    }
  ],
  weekPlan: [
    { week: 1, unitId: "world-map", focus: "מפת שכבות ומערכות" },
    { week: 2, unitId: "http-api", focus: "זרימות, API ו-errors" },
    { week: 3, unitId: "data-modeling", focus: "SQL, entities, constraints ו-RLS" },
    { week: 4, unitId: "data-modeling", focus: "Vector memory, RAG ו-agent state" },
    { week: 5, unitId: "business-logic", focus: "Business invariants" },
    { week: 6, unitId: "frontend-architecture", focus: "State, screens ו-failure modes" },
    { week: 7, unitId: "design-templates-21st", focus: "21st, רפרנסים ושבירת UI גנרי" },
    { week: 8, unitId: "backend-architecture", focus: "Services, handlers ו-data access" },
    { week: 9, unitId: "security", focus: "Trust boundaries ואבטחה" },
    { week: 10, unitId: "debugging", focus: "Root cause ו-regression thinking" },
    { week: 11, unitId: "git-pr", focus: "PR discipline ו-rollbacks" },
    { week: 12, unitId: "testing", focus: "Test matrix פרקטי" },
    { week: 13, unitId: "performance", focus: "Scale, cost ו-maintenance" },
    { week: 14, unitId: "agent-work", focus: "Scope נכון לסוכן" },
    { week: 15, unitId: "agent-work", focus: "תבניות עבודה ו-hallucinations" },
    { week: 16, unitId: "code-review", focus: "Code judgment וריוויו" },
    { week: 17, unitId: "capstone", focus: "Capstone והובלת פיצ'ר" }
  ]
};

Object.assign(window, { SYLLABUS });
