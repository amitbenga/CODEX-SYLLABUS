(function () {
  const unitMetaIndex = {
    "world-map": {
      id: "world-map",
      weekLabel: "שבוע 1",
      title: "מפת העולם של אפליקציה מודרנית",
      category: "יסודות",
      accent: "teal",
      summary: "להבין את שכבות המערכת, גבולות האמון והמשטחים שמהם מנהלים מוצר web מודרני."
    },
    "http-api": {
      id: "http-api",
      weekLabel: "שבוע 2",
      title: "HTTP, API וזרימות מערכת",
      category: "יסודות",
      accent: "navy",
      summary: "להבין איך מידע זורם במערכת, מהו חוזה API טוב ואיך מטפלים בכשלים."
    },
    "data-modeling": {
      id: "data-modeling",
      weekLabel: "שבועות 3-4",
      title: "דאטה מודלינג וחשיבה רלציונית",
      category: "דאטה וארכיטקטורה",
      accent: "gold",
      summary: "לבנות מסד נתונים נכון, לזהות ישויות אמיתיות ולהבין constraints."
    },
    "business-logic": {
      id: "business-logic",
      weekLabel: "שבוע 5",
      title: "לוגיקה עסקית: איפה היא צריכה לשבת",
      category: "דומיין",
      accent: "teal",
      summary: "להבין מה שייך ל-UI, מה לשרת ומה ל-DB כדי לא לפזר rules."
    },
    "frontend-architecture": {
      id: "frontend-architecture",
      weekLabel: "שבוע 6",
      title: "Frontend architecture למנהל מוצר טכני",
      category: "פרונטאנד",
      accent: "purple",
      summary: "לזהות UI שנראה טוב אבל יתפוצץ בהמשך, ולפרק אותו נכון."
    },
    "backend-architecture": {
      id: "backend-architecture",
      weekLabel: "שבוע 7",
      title: "Backend architecture בלי להסתבך",
      category: "בקאנד",
      accent: "navy",
      summary: "להבין routes, services, validation ו-orchestration בריא."
    },
    security: {
      id: "security",
      weekLabel: "שבוע 8",
      title: "אבטחה פרקטית למי שבונה מוצרים",
      category: "אבטחה",
      accent: "rose",
      summary: "להפסיק להיות עיוור לסיכונים של auth, uploads, secrets והרשאות."
    },
    debugging: {
      id: "debugging",
      weekLabel: "שבוע 9",
      title: "דיבאגינג מקצועי",
      category: "אופרציה",
      accent: "orange",
      summary: "לאתר שכבת כשל בצורה שיטתית במקום לנחש."
    },
    "git-prs": {
      id: "git-prs",
      weekLabel: "שבוע 10",
      title: "Git, branches, PRs ו-review discipline",
      category: "Delivery",
      accent: "navy",
      summary: "לנהל delivery מסודר, review ממוקד ו-rollbacks ברורים."
    },
    testing: {
      id: "testing",
      weekLabel: "שבוע 11",
      title: "Testing בלי להיות דתי",
      category: "איכות",
      accent: "teal",
      summary: "להבין מה קריטי לבדוק, מה ידני ומה חייב אוטומציה."
    },
    performance: {
      id: "performance",
      weekLabel: "שבוע 12",
      title: "Performance, scale ותחזוקה",
      category: "סקייל",
      accent: "gold",
      summary: "לזהות מתי מערכת תתחיל להיחנק ולמה."
    },
    "agent-leadership": {
      id: "agent-leadership",
      weekLabel: "שבועות 13-14",
      title: "עבודה עם סוכנים כמו tech lead",
      category: "AI Delivery",
      accent: "purple",
      summary: "לנסח משימות נכון, לשלוט בסקופ ולזהות hallucination טכני."
    },
    "code-judgment": {
      id: "code-judgment",
      weekLabel: "שבוע 15",
      title: "קריאת קוד והערכת איכות",
      category: "Code Review",
      accent: "rose",
      summary: "לשפוט קוד שלא כתבת: readability, coupling, risk ותחזוקתיות."
    },
    capstone: {
      id: "capstone",
      weekLabel: "שבוע 16",
      title: "Capstone: הובלת פיצ'ר אמיתי מקצה לקצה",
      category: "Capstone",
      accent: "orange",
      summary: "להוביל פיצ'ר אמיתי כמו technical lead ולבנות תיק עבודת ניהול טכני."
    }
  };

  const genericPartBlueprints = [
    {
      id: "overview",
      label: "פתיח",
      navShort: "פתיח",
      kicker: "כניסה ליחידה",
      teaser: "התמונה הגדולה, למה היחידה חשובה ואיך היא מתחברת למערכת שלך."
    },
    {
      id: "concept-map",
      label: "מפת מושגים",
      navShort: "מושגים",
      kicker: "שפה משותפת",
      teaser: "המונחים והמבנים שאתה צריך לזהות בלי להתבלבל."
    },
    {
      id: "system-flow",
      label: "זרימה",
      navShort: "זרימה",
      kicker: "איך זה עובד",
      teaser: "התרגום של היחידה ל-flow ברור של שכבות, אחריות והחלטות."
    },
    {
      id: "deliverable",
      label: "תוצר",
      navShort: "תוצר",
      kicker: "מה תייצר",
      teaser: "מה יוצא מהיחידה הזאת בפועל ואיך תבדוק שהוא באמת טוב."
    },
    {
      id: "quiz",
      label: "בוחן",
      navShort: "בוחן",
      kicker: "בדיקת הבנה",
      teaser: "תרחיש מעשי שמכריח אותך לשפוט פתרון, לא רק לזכור הגדרות."
    }
  ];

  const worldMapPage = {
    id: "world-map",
    heroEyebrow: "יחידה 1 · מפת שליטה",
    title: "מפת העולם של אפליקציה מודרנית",
    subtitle:
      "יחידה שבונה שפה ניהולית למוצר web מודרני: שכבות מערכת, גבולות אמון, חוזי API, secrets, config, סביבות פריסה וממשילות סוכנים.",
    quickFacts: [
      { value: "11", label: "חלקי לימוד" },
      { value: "5", label: "ארטיפקטים" },
      { value: "4", label: "תבניות עבודה" }
    ],
    parts: [
      {
        id: "summary",
        label: "תקציר מנהלים",
        navShort: "תקציר",
        kicker: "מבט על",
        title: "מפת שליטה שמאפשרת להוביל פיתוח ולא רק להבין מושגים",
        description:
          "היחידה הזאת נועדה להפוך ארכיטקטורה לשפה ניהולית: להבין שכבות, לזהות משטחים, ולהוציא מהשבוע ארטיפקטים שאפשר לעבוד איתם.",
        blocks: [
          {
            type: "lead",
            eyebrow: "Executive Summary",
            title: "מערכת מודרנית היא רשת רכיבים עם אחריות מוגדרת",
            text: [
              "יחידה זו בונה מפת שליטה שמאפשרת להוביל פיתוח של מוצר web מודרני ברמה מקצועית: להבין את שכבות המערכת, לזהות גבולות אמון, להגדיר חוזי API, לתכנן ניהול סודות וקונפיג, לעבוד נכון עם סביבות פריסה ולהטמיע ממשילות סוכנים כך שלא יהפכו לנקודת תורפה.",
              "הגישה המרכזית היא שמערכת מודרנית אינה אוסף של מסכים וקוד, אלא רשת רכיבים עם אחריות מוגדרת. כל מקום שבו מידע עובר מרכיב אחד לאחר הוא גם מקום לטעות, לתקלה או לניצול.",
              "לכן היחידה מתמקדת בתוצרים שאפשר לנהל מתוכם: דיאגרמות, חוזים, מיפויי משטחים, בדיקות סיכון בסיסיות וצ'קליסטים אחידים."
            ]
          },
          {
            type: "card-grid",
            title: "חבילת הארטיפקטים של סוף השבוע",
            columns: 3,
            items: [
              {
                eyebrow: "Artifact",
                title: "דיאגרמת ארכיטקטורה",
                body: "רכיבים, חיבורים, משטחים ציבוריים וגבולות אמון."
              },
              {
                eyebrow: "Artifact",
                title: "כרטיס API",
                body: "endpoint, schemas, errors, AuthN/AuthZ ולוגים בסיסיים."
              },
              {
                eyebrow: "Artifact",
                title: "מיפוי משטחי נתונים",
                body: "SQL, Storage, Vector ו-Cache עם הרשאות ורגישות."
              },
              {
                eyebrow: "Artifact",
                title: "Mini Threat Model",
                body: "5 איומים מרכזיים עם mitigations מעשיים."
              },
              {
                eyebrow: "Artifact",
                title: "ספר תבניות עבודה",
                body: "Feature / Bug / PR / Security לעבודה עקבית עם סוכנים."
              }
            ]
          }
        ]
      },
      {
        id: "goals",
        label: "מטרות ותוצרים",
        navShort: "מטרות",
        kicker: "מה אמור לקרות עד סוף השבוע",
        title: "מטרות למידה תמציתיות ותוצרים מדידים",
        description:
          "היחידה בנויה כך שתוכל למדוד אם באמת הבנת: דרך דיאגרמות, כרטיסי API, מיפויי נתונים ופרומפט עבודה לסוכן.",
        blocks: [
          {
            type: "bullet-list",
            title: "מטרות למידה תמציתיות",
            items: [
              "לזהות את שכבות המערכת: Client, Edge, App, Data, External Services ו-Observability.",
              "להגדיר Trust Boundaries ולתרגם אותם לבקרות שימושיות כמו ולידציה, הרשאות ומדיניות גישה.",
              "להבחין בין AuthN לבין AuthZ ולהבין למה 'מחובר' לא אומר 'מורשה'.",
              "לתאר חוזה API מקצועי: סמנטיקת HTTP, schemas, קודי שגיאה, ולידציה ואירועי audit.",
              "להבחין בין secrets ל-config ולהבטיח שמפתחות לא דולפים לקוד, ללוגים או ללקוח.",
              "להבין סביבות פריסה, סדר פריסה ויכולת rollback בסיסית.",
              "להגדיר ממשילות סוכנים: גבולות פעולה, הרשאות כלים, אימות פלט ואישורים אנושיים."
            ]
          },
          {
            type: "card-grid",
            title: "תוצרים מדידים לסוף השבוע",
            columns: 2,
            items: [
              {
                eyebrow: "Deliverable",
                title: "דיאגרמת ארכיטקטורה",
                body: "Mermaid שמסמנת רכיבים, חיבורים, משטחים ציבוריים וגבולות אמון."
              },
              {
                eyebrow: "Deliverable",
                title: "כרטיס API",
                body: "endpoint(s), schemas, errors, AuthN/AuthZ, לוגים ומדדים מינימליים."
              },
              {
                eyebrow: "Deliverable",
                title: "מיפוי משטחי נתונים",
                body: "SQL DB, Storage, Vector ו-Cache + מי קורא/כותב + רגישות נתונים."
              },
              {
                eyebrow: "Deliverable",
                title: "Mini Threat Model",
                body: "5 איומים מרכזיים + mitigations מעשיים."
              },
              {
                eyebrow: "Deliverable",
                title: "פרומפט מובנה לסוכן",
                body: "analysis → plan → implementation → verification."
              }
            ]
          }
        ]
      },
      {
        id: "system-core",
        label: "Client / Edge / App",
        navShort: "שכבות 1",
        kicker: "שלוש השכבות הראשונות",
        title: "רכיבי המערכת והאחריות שלהם בצד הלקוח, בכניסה הציבורית ובאפליקציה עצמה",
        description:
          "החלק הזה מסדר את אזורי האחריות הראשיים של המערכת: מה לא אמין, מה נגיש מהאינטרנט, ואיפה באמת יושבת הלוגיקה העסקית.",
        blocks: [
          {
            type: "card-grid",
            title: "Client, Edge ו-App",
            columns: 3,
            items: [
              {
                eyebrow: "Client",
                title: "דפדפן / Frontend",
                body: "הגדרה: UI, איסוף קלט וקריאות ל-API. Pitfall: להסתמך על ולידציה בלקוח כאבטחה. Mitigation: ולידציה דטרמיניסטית בשרת; בלקוח ולידציה היא UX בלבד. שאלת ניהול: מה קורה אם אותה פעולה מופעלת בלי UI, עם request שונה, או עם id של ישות אחרת?"
              },
              {
                eyebrow: "Edge",
                title: "DNS / CDN / WAF / Reverse Proxy / LB",
                body: "הגדרה: שכבת הכניסה הציבורית עם TLS, ניתוב והגנות רוחביות. Pitfall: endpoint ניסיוני שנחשף בטעות לאינטרנט בלי הגנות. Mitigation: allowlist ל-routes ציבוריים, rate limiting לפי נתיב ומדיניות headers. שאלת ניהול: אילו endpoints נגישים מהאינטרנט ומה ההגנה הראשונה שפוגשת אותם?"
              },
              {
                eyebrow: "App",
                title: "Backend API + Workers / Jobs",
                body: "הגדרה: הלוגיקה העסקית, AuthN/AuthZ, orchestration, אינטגרציות וניהול סודות. Pitfall: route שמכיל הכל בפנים. Mitigation: handler → validation → authorization → service → data access. שאלת ניהול: איפה AuthZ מתבצע בפועל, והאם הוא משותף או מועתק ידנית?"
              }
            ]
          },
          {
            type: "callout",
            tone: "info",
            title: "אבחנה ניהולית חשובה",
            text:
              "אם אי אפשר להצביע בבירור מה האחריות של ה-Client, מה האחריות של ה-Edge ומה האחריות של ה-App, כמעט בטוח שיש לך חור באבטחה, בתחזוקה או בשניהם."
          }
        ]
      },
      {
        id: "data-surfaces",
        label: "Data ומשטחים",
        navShort: "שכבות 2",
        kicker: "נתונים, קבצים, שירותים ותצפיתיות",
        title: "Data, External Services ו-Observability: המשטחים שמכריעים אמינות, אבטחה ויכולת חקירה",
        description:
          "כאן נמצאים המשטחים שהכי קל לזלזל בהם והכי יקר לשלם עליהם אחר כך: DB, storage, vector DB, cache, שירותי צד ג' ותצפיתיות.",
        blocks: [
          {
            type: "card-grid",
            title: "משטחי הנתונים",
            columns: 2,
            items: [
              {
                eyebrow: "SQL DB",
                title: "נתונים מובנים וקשרים",
                body: "Pitfall: אין constraints ולכן נוצרים כפילויות ושחיתות נתונים; או שבדיקות הרשאה נשארות רק בלקוח. Mitigation: unique ו-foreign keys, soft delete כשצריך audit, אינדקסים והרשאות מינימליות. שאלת ניהול: אילו invariants חייבים להיות נכונים תמיד, ואיפה הם נאכפים?"
              },
              {
                eyebrow: "Object Storage",
                title: "קבצים גדולים ומדיה",
                body: "Pitfall: bucket ציבורי או path ציבורי שמאפשר קריאה או כתיבה ללא בקרה. Mitigation: ברירת מחדל private, signed URLs קצרי חיים והעלאה דרך שרת או signed upload עם מגבלות. שאלת ניהול: מי יכול לקרוא או להעלות קבצים, ומה משך החיים של URL לגישה?"
              },
              {
                eyebrow: "Vector DB",
                title: "חיפוש סמנטי ו-RAG",
                body: "Pitfall: ערבוב נתונים בין projects או tenants, או אינדוקס תוכן לא אמין שמזהם חיפוש. Mitigation: בידוד namespaces, מדיניות אינדוקס ותיוג תוכן. שאלת ניהול: האם שאילתה יכולה בטעות להחזיר תוכן של tenant אחר?"
              },
              {
                eyebrow: "Cache",
                title: "שכבת ביצועים",
                body: "Pitfall: cache key לא נכון שמחזיר נתונים של משתמש אחר. Mitigation: keys שכוללים tenant, user או role כשצריך, TTL מוגדר וניטור hit/miss. שאלת ניהול: האם ה-cache מודע להקשר הרשאות או שהוא עיוור לזהות המשתמש?"
              }
            ]
          },
          {
            type: "card-grid",
            title: "שירותי צד ג' ותצפיתיות",
            columns: 2,
            items: [
              {
                eyebrow: "External Services",
                title: "שירותי צד ג' הם גבול אמון חדש",
                body: "Pitfall: להשתמש בנתונים שמגיעים משירות חיצוני כהחלטה עסקית או הרשאתית בלי אימות. Mitigation: timeouts, retries רק לפעולות idempotent, ולידציה ו-fallback. שאלת ניהול: מה קורה לזרימה אם השירות נופל, מאט או מחזיר תשובה חריגה?"
              },
              {
                eyebrow: "Observability",
                title: "Logs / Metrics / Traces / Audit",
                body: "Pitfall: אין request-id ולכן אי אפשר לעקוב אחרי תקלה; או שלוגים מדליפים secrets. Mitigation: request-id, לוגים מובנים, redaction ואירועי audit. שאלת ניהול: האם אפשר לשחזר מי עשה מה ולחבר לבקשה ספציפית תוך דקות?"
              }
            ]
          }
        ]
      },
      {
        id: "trust-auth",
        label: "אמון והרשאות",
        navShort: "אמון",
        kicker: "מה לא אמין ומה מוכיחים",
        title: "Trust Boundaries, AuthN ו-AuthZ: איפה אתה מפסיק להניח ומתחיל לבדוק",
        description:
          "החלק הזה בונה את הרפלקס הניהולי החשוב ביותר: לזהות הנחות אמון, להפריד בין זיהוי להרשאה, ולבדוק הרשאה ברמת אובייקט.",
        blocks: [
          {
            type: "lead",
            eyebrow: "Trust Boundaries",
            title: "גבול אמון הוא נקודת מעבר שבה חייבת להיות הוכחה, לא אינטואיציה",
            text: [
              "גבולות אמון הם נקודות מעבר שבהן מידע או שליטה עוברים מרכיב לא אמין לרכיב אמין, ורק לאחר בדיקות מוגדרות. מקורות לא אמינים טיפוסיים הם משתמש, דפדפן, קבצים, שירותי צד ג' ופלט של LLM.",
              "הטעות הקלאסית היא הנחת אמון שקטה כמו 'ברור שהלקוח ישלח את ה-id הנכון'. Mitigation מעשי הוא לא להאמין לקלט, לבדוק כל id בשרת, לבצע סניטציה ולהפריד בין data ל-instructions מול סוכן."
            ]
          },
          {
            type: "card-grid",
            title: "AuthN מול AuthZ",
            columns: 2,
            items: [
              {
                eyebrow: "AuthN",
                title: "אימות זהות",
                body: "איך המערכת מזהה את המשתמש: סשן, token או SSO. שאלת ניהול: איך המשתמש מוכיח שהוא מי שהוא?"
              },
              {
                eyebrow: "AuthZ",
                title: "הרשאה לפעולה על משאב",
                body: "האם המשתמש רשאי לבצע פעולה על משאב מסוים, במיוחד ברמת אובייקט. שאלת ניהול: בכל endpoint עם id, איפה מתבצעת בדיקת בעלות או הרשאה?"
              },
              {
                eyebrow: "Pitfall",
                title: "יש login אבל אין הרשאה נכונה",
                body: "הכשל הנפוץ הוא BOLA / IDOR: המשתמש מזוהה, אבל יכול לפעול על resource של מישהו אחר."
              },
              {
                eyebrow: "Mitigation",
                title: "מנגנון אחיד לבדיקות הרשאה",
                body: "בדיקות ברמת משאב לכל endpoint שמקבל id, עם שימוש עקבי ב-401 ו-403 כדי להבדיל בין זהות לבין היתר."
              }
            ]
          }
        ]
      },
      {
        id: "api-contract",
        label: "חוזה API",
        navShort: "API",
        kicker: "interface שאפשר לממש ממנו",
        title: "חוזה API וסמנטיקת HTTP: איך כותבים interface מקצועי",
        description:
          "API טוב הוא לא רק path. הוא חוזה. אם הוא לא ברור, גם הלקוח, גם הבדיקות וגם הביקורת יהיו חלשים.",
        blocks: [
          {
            type: "lead",
            eyebrow: "API Contract",
            title: "חוזה מקצועי כולל קלט, פלט, שגיאות, idempotency ו-side effects",
            text: [
              "חוזה API הוא תיאור מחייב של interface: method + path, headers, schemas לקלט ולפלט, קודי סטטוס, שגיאות צפויות, idempotency ופירוט side effects.",
              "Pitfall נפוץ הוא שינוי API בשקט או שימוש בקודי שגיאה לא עקביים, מה שמפרק לקוחות ומקשה על דיבוג."
            ]
          },
          {
            type: "table",
            title: "מה חייב להופיע בכרטיס API",
            columns: ["רכיב", "מה מגדירים", "למה זה חשוב"],
            rows: [
              ["Method + Path", "למשל POST /api/submissions", "מבהיר מהי הפעולה ומה סמנטיקת ה-HTTP שלה."],
              ["Headers", "Auth, content-type, correlation id", "מייצב תקשורת, auth וחקירה."],
              ["Request schema", "שדות, סוגים ואילוצים", "מונע payloads עמומים ושבירים."],
              ["Response schema", "מבנה תשובה עקבי", "מאפשר לבנות לקוח בלי ניחושים."],
              ["Errors", "401 / 403 / 400 / 5xx", "מבדיל בין כשלי זהות, הרשאה, קלט וכשל שרת."],
              ["Idempotency", "מתי מותר retry ומה אסור", "מונע side effects כפולים."],
              ["Audit ו-logging", "אילו אירועים נרשמים", "מחבר את ה-flow לניהול ולחקירה."]
            ]
          },
          {
            type: "callout",
            tone: "quiet",
            title: "שאלת ניהול",
            text:
              "אם מפתח חדש צריך לממש קליינט ל-endpoint, האם החוזה מספיק כדי לעשות זאת בלי לשאול שאלות?"
          }
        ]
      },
      {
        id: "secrets-config",
        label: "Secrets וסביבות",
        navShort: "Secrets",
        kicker: "לא כל env var הוא אותו דבר",
        title: "Secrets מול Config, וסביבות פריסה שאפשר לשחרר ולגלגל אחורה מתוכן",
        description:
          "החלק הזה נועד למנוע דליפות מפתחות, בלבול בין סביבות והחלטות פריסה שנעשות בלי תוכנית rollback.",
        blocks: [
          {
            type: "card-grid",
            title: "מה מבדילים כבר ביחידה 1",
            columns: 3,
            items: [
              {
                eyebrow: "Secret",
                title: "מידע רגיש שמאפשר גישה",
                body: "מפתחות, credentials ו-signing keys. הם לא שייכים לקוד, ללקוח או ללוגים."
              },
              {
                eyebrow: "Config",
                title: "פרמטרים שמשתנים בין סביבות",
                body: "URLs, flags, timeouts ופרמטרים סביבתיים שאינם סודיים בהכרח."
              },
              {
                eyebrow: "Environments",
                title: "dev / staging / prod",
                body: "לכל סביבה צריך config ברור, גישה נפרדת, סדר פריסה ויכולת rollback בסיסית."
              }
            ]
          },
          {
            type: "bullet-list",
            title: "Pitfalls ומיתוגים מעשיים",
            items: [
              "Pitfall: secret שנכנס ל-repo, נשלח ללקוח או נכתב ללוג.",
              "Mitigation: secrets מחוץ לקוד, רוטציה בסיסית, redaction והרשאות מינימליות.",
              "Pitfall: אין הפרדה טובה בין dev, staging ו-prod ולכן קשה להבין מה נשבר איפה.",
              "Mitigation: config מוגדר לכל סביבה, סדר פריסה ברור ויכולת rollback מתועדת."
            ]
          },
          {
            type: "callout",
            tone: "info",
            title: "שאלת ניהול",
            text:
              "מה מונע ממפתח או מסוכן להדביק מפתח בקוד 'רק לצורך בדיקה', ומה תהליך ההחלפה אם דלף?"
          }
        ]
      },
      {
        id: "agent-governance",
        label: "ממשילות סוכנים",
        navShort: "סוכנים",
        kicker: "מהירות בלי איבוד שליטה",
        title: "Agent Governance: איך עובדים עם סוכן AI בלי להפוך אותו לנקודת תורפה",
        description:
          "סוכן צריך להאיץ עבודה, לא לעקוף גבולות אמון, הרשאות ובקרות. החלק הזה בונה את הכללים שמחזיקים את זה נכון.",
        blocks: [
          {
            type: "lead",
            eyebrow: "Agent Governance",
            title: "סוכן טוב הוא סוכן עם גבולות ברורים",
            text: [
              "ממשילות סוכנים היא סט כללים וטכניקות שמבטיחים שסוכן AI תורם למהירות ולאיכות בלי להרחיב סיכון.",
              "הסיכונים המרכזיים כאן הם Prompt Injection, Excessive Agency, Insecure Output Handling ו-Data Exfiltration."
            ]
          },
          {
            type: "bullet-list",
            title: "Mitigations מעשיים",
            items: [
              "Context minimization: לתת לסוכן רק נתונים הכרחיים.",
              "Allowlist לכלים ולפעולות, עם timeouts, quotas ותקרות כתיבה.",
              "אימות פלט בעזרת schema או allowlist, ואיסור על הרצה ישירה של SQL או קוד מפלט.",
              "Human-in-the-loop לפעולות מסוכנות כמו מחיקות, הרשאות, migrations ותשלומים.",
              "Audit תמציתי של מה שהסוכן ביקש ומה שבוצע בפועל."
            ]
          },
          {
            type: "callout",
            tone: "quiet",
            title: "שאלת ניהול",
            text:
              "אילו פעולות הסוכן מורשה לבצע אוטומטית, ואילו מחייבות אישור אנושי לפני שהן נוגעות במערכת אמיתית?"
          }
        ]
      },
      {
        id: "exercises",
        label: "תרגילים מעשיים",
        navShort: "תרגילים",
        kicker: "לצאת עם חבילת עבודה",
        title: "התרגילים של היחידה בונים ארטיפקטים שאפשר לנהל מתוכם",
        description:
          "המטרה היא לא רק להבין את החומר אלא להפיק תוצרים אמיתיים: דיאגרמה, כרטיס API, Threat Model, מיפוי נתונים ופרומפט לסוכן.",
        blocks: [
          {
            type: "table",
            title: "טבלת התרגילים",
            columns: ["תרגיל", "מטרה", "Timebox", "תוצר צפוי", "Rubric הערכה"],
            rows: [
              [
                "דיאגרמת ארכיטקטורה",
                "להפוך את המערכת למפה שניתן לנהל ממנה",
                "60–90 דק׳",
                "דיאגרמת Mermaid + רשימת public surfaces + trust boundaries",
                "Pass: רכיבים וחצים נכונים. Strong: גבולות אמון מסומנים. Excellent: מצוין מותר ואסור לכל שכבה."
              ],
              [
                "פירוק זרימת API",
                "ליצור חוזה מקצועי לזרימה אחת",
                "60–120 דק׳",
                "כרטיס API: endpoint, schema, errors, AuthN/AuthZ, logging",
                "Pass: חוזה מלא. Strong: הבחנה 401/403/400 + AuthZ object-level. Excellent: audit events + שיקולי abuse."
              ],
              [
                "מיני Threat Model",
                "לזהות סיכונים מוקדם ולחבר mitigations",
                "45–75 דק׳",
                "טבלת 5 איומים: asset → threat → vector → impact → mitigation",
                "Pass: איומים ריאליים. Strong: כולל BOLA ו-secrets. Excellent: כולל Prompt Injection או Excessive Agency."
              ],
              [
                "מיפוי משטח נתונים",
                "להבין DB / Storage / Vector כמשטחים שמחייבים מדיניות",
                "60–90 דק׳",
                "טבלת ישויות + הרשאות + רגישות + retention",
                "Pass: מיפוי מלא. Strong: PII ומי קורא/כותב מסומנים. Excellent: tenant isolation ו-signed URLs."
              ],
              [
                "משימת פרומפט לסוכן",
                "לבנות חוזה ניהולי לסוכן שמממש פיצ'ר",
                "30–60 דק׳",
                "פרומפט analysis → plan → diff קטן → tests → security",
                "Pass: מבנה ושדות ברורים. Strong: הגבלת כלים והרשאות. Excellent: אימות פלט + נקודות אישור אנושי."
              ]
            ]
          }
        ]
      },
      {
        id: "checklists",
        label: "צ'קליסטים",
        navShort: "צ'קליסטים",
        kicker: "שפה אחידה עם מפתחים וסוכנים",
        title: "צ'קליסטים ל-onboarding, endpoints ציבוריים ו-production readiness",
        description:
          "אלה הטבלאות שאתה יכול להחזיק מול כל פיצ'ר, סוכן או מפתח חדש בלי להמציא מחדש את שיחת הביקורת בכל פעם.",
        blocks: [
          {
            type: "table",
            title: "Onboarding לסוכן או מפתח חדש",
            columns: ["נושא", "מה צריך להיות ידוע", "Done when"],
            rows: [
              ["מפת מערכת", "רכיבים, חיבורים ומה ציבורי", "קיימת דיאגרמה + הסבר קצר"],
              ["גבולות אמון", "מה לא אמין ואיפה מאמתים", "קיימת רשימת trust boundaries"],
              ["AuthN/AuthZ", "איך מזדהים ואיך מאשרים פעולה", "מוגדרת מדיניות AuthZ object-level"],
              ["Secrets/Config", "איפה secrets מנוהלים ומה אסור", "אין secrets בקוד או בלקוח; יש תהליך שינוי"],
              ["Observability", "איפה לוגים ו-metrics ואיך חוקרים", "יש request-id + מסמך איך לחקור תקלה"],
              ["Agent Governance", "אילו כלים מותר או אסור ואילו approvals קיימים", "allowlist קיימת + נקודות אישור"]
            ]
          },
          {
            type: "table",
            title: "אבטחה ל-endpoints ציבוריים",
            columns: ["בדיקה", "למה זה חשוב", "Done when"],
            rows: [
              ["HTTPS בלבד", "הגנה על tokens ו-credentials", "אין HTTP בפועל; אין נקודות כניסה לא מוצפנות"],
              ["AuthN עקבי", "לזהות משתמש נכון", "כל endpoint דורש AuthN לפי המדיניות"],
              ["AuthZ object-level", "מניעת BOLA / IDOR", "כל id נבדק מול הרשאה או בעלות בשרת"],
              ["ולידציה בשרת", "client לא אמין", "schema validation + הודעות שגיאה בטוחות"],
              ["Rate limiting / abuse", "מניעת סריקה, DoS ועלויות", "קיימת מדיניות לפי route + לוגים"],
              ["שגיאות ללא דליפה", "מניעת חשיפת מידע פנימי", "אין stack trace ללקוח; יש correlation id"],
              ["Audit לפעולות רגישות", "חקירה ואכיפה", "אירועים רגישים נרשמים: מי, מה, מתי"]
            ]
          },
          {
            type: "table",
            title: "Production Readiness לפיצ'ר",
            columns: ["תחום", "שאלה", "Done when"],
            rows: [
              ["סביבות", "מה ההבדל בין dev, staging ו-prod?", "config מוגדר וברור לכל סביבה"],
              ["Secrets", "איך מנוהלים סודות ורוטציה?", "אין secrets בקוד או בלוגים; תהליך החלפה קיים"],
              ["DB / migrations", "האם יש שינוי סכימה ומה סדר הפריסה?", "migration plan קיים + שיקולי rollback"],
              ["Observability", "איך יזהו תקלות?", "logs ו-metrics בסיסיים + אירועי audit"],
              ["אבטחה", "מה משטח התקיפה החדש?", "Security review קצר הושלם"],
              ["AI / Agent", "מה גבולות הסוכן?", "allowlist + output validation + approvals"],
              ["בדיקות", "מה ה-golden path ומה ה-edge cases?", "test plan קצר כתוב ומבוצע"]
            ]
          }
        ]
      },
      {
        id: "templates",
        label: "תבניות עבודה",
        navShort: "תבניות",
        kicker: "חוזי עבודה קבועים",
        title: "Feature Spec, Bug Investigation, PR Review ו-Security Review",
        description:
          "במקום לנסח מחדש כל משימה או ביקורת, עובדים עם תבניות קבועות שמכריחות איכות, עקביות ופחות הפתעות.",
        blocks: [
          {
            type: "code-block",
            eyebrow: "Template 1",
            title: "Feature Spec",
            language: "text",
            code: `[Feature Spec] שם הפיצ'ר

Problem:
- מה הבעיה?

Goals (מדידים):
- ...

Non-goals:
- ...

User Flow:
- 1)
- 2)

API Contract:
- Endpoint(s):
- Request schema:
- Response schema:
- Errors (401/403/400/5xx):
- Idempotency/retries (אם נדרש):

Auth:
- AuthN:
- AuthZ object-level:

Data:
- טבלאות/אינדקסים:
- Storage paths:
- Vector namespaces (אם יש):

Observability:
- Logs (event names):
- Metrics (latency/errors/cost):
- Audit events:

Security:
- BOLA/IDOR prevention:
- Rate limiting:
- Secrets handling:

Agent (אם יש):
- Tool allowlist:
- Output validation:
- Human approvals:

Test Plan:
- Golden path:
- Edge cases:
- Security cases:

Rollout:
- Feature flag?
- Migration order:
- Rollback plan:

Definition of Done:
- ...`
          },
          {
            type: "callout",
            tone: "quiet",
            title: "דוגמה קצרה",
            text:
              "Goals: הפקת PDF תוך 10 שניות ב-p95. Security: הורדה דרך signed URL קצר חיים; אין כתיבה ל-public storage."
          },
          {
            type: "code-block",
            eyebrow: "Template 2",
            title: "Bug Investigation",
            language: "text",
            code: `[Bug Investigation] כותרת התקלה

Symptom:
- ...

Repro steps:
1)
2)

Expected vs Actual:
- Expected:
- Actual:

Scope:
- סביבה:
- מי מושפע:

Evidence:
- Network request/response:
- Logs (request-id):
- DB snapshot/query:
- Recent changes (PR/commit):

Hypotheses (לפי סבירות):
1)
2)

Root Cause:
- ...

Fix:
- שינוי מינימלי:
- בדיקה למניעת רגרסיה:
- סיכון:

Observability follow-up:
- איזו טלמטריה נוסיף?`
          },
          {
            type: "callout",
            tone: "quiet",
            title: "דוגמה קצרה",
            text:
              "Root Cause: חסר AuthZ object-level ב-PATCH על resourceId ולכן משתמש יכול לשנות ישות של tenant אחר."
          },
          {
            type: "code-block",
            eyebrow: "Template 3",
            title: "PR Review",
            language: "text",
            code: `[PR Review] קישור/כותרת PR

Summary:
- ...

Scope:
- ממוקד או רחב מדי?
- refactor לא קשור?

Security:
- AuthZ object-level בכל id?
- אין secrets בקוד/לוגים?
- endpoint ציבורי חדש? יש rate limiting?
- שגיאות ללא דליפה?

Quality:
- error handling עקבי?
- observability: logs/audit?
- בדיקות: מה נוסה?

Decision:
- APPROVE / REQUEST CHANGES / BLOCK
- Top risks:
- Required fixes:`
          },
          {
            type: "callout",
            tone: "quiet",
            title: "דוגמה קצרה",
            text:
              "Decision: REQUEST CHANGES — חסר בדיקת הרשאה למשאב; להוסיף audit event לפעולת שינוי."
          },
          {
            type: "code-block",
            eyebrow: "Template 4",
            title: "Security Review",
            language: "text",
            code: `[Security Review] שם הזרימה/פיצ'ר

Flow:
- Actors:
- Endpoints:
- Data touched (PII/files/grades):

Assets:
- 1)
- 2)

Top threats (5):
1) Threat:
   Vector:
   Impact:
   Mitigation:
...

Controls:
- AuthN:
- AuthZ object-level:
- Validation:
- Rate limiting:
- Error handling:
- Logging/audit:

Storage:
- public/private:
- signed URLs:
- upload constraints:

Secrets:
- storage/rotation/audit:

Agent (אם יש):
- prompt injection mitigations:
- tool allowlist:
- output validation:
- human approvals:

Findings:
- Must-fix:
- Should-fix:
- Accepted risks:`
          },
          {
            type: "callout",
            tone: "quiet",
            title: "דוגמה קצרה",
            text:
              "Threat: Prompt Injection דרך תוכן שהועלה בניסיון לגרום לסוכן לחשוף נתוני משתמשים. Mitigation: הפרדת הוראות ונתונים, allowlist לכלים, אימות פלט ואישור אנושי."
          }
        ]
      },
      {
        id: "diagrams",
        label: "תרשימים",
        navShort: "תרשימים",
        kicker: "Mermaid מוכן לעבודה",
        title: "תבניות Mermaid לארכיטקטורה ולמחזור חיי בקשה",
        description:
          "התרשימים כאן הם לא קישוט. אלה הארטיפקטים שמיישרים בין אנשים, קוד וסוכנים סביב אותה תמונה מערכתית.",
        blocks: [
          {
            type: "zone-diagram",
            title: "תבנית ארכיטקטורה ברמת אזורים",
            note:
              "זאת המפה העליונה של המערכת: מי חשוף לאינטרנט, איפה יושבת הלוגיקה, איפה נשמרים נתונים ואיפה נאספת טלמטריה.",
            zones: [
              { label: "Client", items: ["User", "Browser/Frontend"] },
              { label: "Edge", items: ["CDN/Cache", "WAF/Rate Limit", "Reverse Proxy/LB"] },
              { label: "App Zone", items: ["Backend API", "AuthN/AuthZ", "Queue", "Worker/Jobs"] },
              { label: "Data Zone", items: ["SQL DB", "Object Storage", "Vector DB", "Cache"] },
              { label: "External Services", items: ["LLM Provider", "PDF Service", "Email/SMS"] },
              { label: "Observability", items: ["OTel SDK", "Collector", "Telemetry Backend"] }
            ]
          },
          {
            type: "code-block",
            eyebrow: "Mermaid",
            title: "תבנית ארכיטקטורה",
            language: "mermaid",
            code: `graph LR
  subgraph C["Client (לא אמין)"]
    U[User] --> FE[Browser/Frontend]
  end

  subgraph E["Edge (משטח ציבורי)"]
    CDN[CDN/Cache] --> WAF[WAF/Rate Limit]
    WAF --> RP[Reverse Proxy/LB]
  end

  FE -->|HTTPS| CDN

  subgraph A["App Zone (לוגיקה)"]
    API[Backend API]
    AUTH[AuthN/AuthZ]
    Q[Queue/Scheduler]
    WORKER[Worker/Jobs]
  end

  RP --> API
  API --> AUTH
  API --> Q
  Q --> WORKER

  subgraph D["Data Zone (נתונים)"]
    DB[(SQL DB)]
    ST[(Object Storage)]
    VDB[(Vector DB)]
    CACHE[(Cache)]
  end

  API --> DB
  API --> ST
  API --> VDB
  API --> CACHE
  WORKER --> DB
  WORKER --> ST

  subgraph X["External Services"]
    LLM[LLM Provider]
    PDF[PDF Service]
    EMAIL[Email/SMS]
  end

  API --> LLM
  WORKER --> LLM
  WORKER --> PDF
  WORKER --> EMAIL

  subgraph O["Observability"]
    OTEL[OTel SDK]
    COL[OTel Collector]
    OBS[Telemetry Backend]
  end

  API --> OTEL --> COL --> OBS
  WORKER --> OTEL`
          },
          {
            type: "code-block",
            eyebrow: "Mermaid",
            title: "Flowchart למחזור חיי בקשה",
            language: "mermaid",
            code: `flowchart TD
  A[HTTPS request enters Edge] --> B[Edge protections: TLS + rate limit]
  B --> C[Router/Controller]
  C --> D{AuthN}
  D -->|fail| E[401]
  D --> F{AuthZ object-level}
  F -->|fail| G[403]
  F --> H[Validate & normalize input]
  H -->|fail| I[400 safe error]
  H --> J[Business logic]
  J --> K{DB write?}
  K -->|yes| L[Transaction/constraints]
  L --> M[Persist]
  K -->|no| N[Read/query]
  M --> O{Need Agent/LLM?}
  N --> O
  O -->|yes| P[Call agent with tool limits]
  P --> Q[Validate agent output]
  Q --> R[Persist + audit]
  O -->|no| S[Compose response]
  R --> S
  S --> T[Return response]
  C --> U[Logs/metrics/traces with request-id]
  J --> U
  P --> U`
          }
        ]
      },
      {
        id: "sources",
        label: "מקורות והנחות",
        navShort: "מקורות",
        kicker: "מה מניחים ומה כדאי לקרוא",
        title: "הנחות העבודה של היחידה והמקורות שכדאי להכיר",
        description:
          "החלק הזה שומר את היחידה מעשית: מה מניחים כרגע, ואילו מקורות מקצועיים טוב להחזיק בהישג יד כשצריך להעמיק.",
        blocks: [
          {
            type: "bullet-list",
            title: "הנחות עבודה",
            items: [
              "אין גישה להרצה מקומית בכתובת 127.0.0.1; התאמה מדויקת ליישום בפועל תיעשה באמצעות צילומי מסך, קטעי קוד או דיאגרמות שיועלו בהמשך.",
              "המסמך הנוכחי הוא יחידה עצמאית, מעשית ומוכנה לפרסום."
            ]
          },
          {
            type: "bullet-list",
            title: "מקורות מומלצים לפי עדיפות",
            items: [
              "RFC 9110 — HTTP Semantics",
              "RFC 6749 — OAuth 2.0 Authorization Framework",
              "RFC 6750 — Bearer Token Usage",
              "RFC 7636 — PKCE",
              "OWASP Top 10 (2021)",
              "OWASP API Security Top 10 (2023)",
              "OWASP Cheat Sheet Series: Authentication, Authorization, Secrets Management, REST Security, Logging",
              "OWASP Top 10 for Large Language Model Applications",
              "OWASP Cheat Sheets: LLM Prompt Injection Prevention, AI Agent Security",
              "OpenTelemetry Documentation",
              "The Twelve-Factor App"
            ]
          }
        ]
      }
    ]
  };

  const httpApiPage = {
    id: "http-api",
    heroEyebrow: "יחידה 2 · HTTP ו-API",
    title: "HTTP, API וזרימות מערכת",
    subtitle:
      "יחידה שהופכת בקשות ותשובות לשפה ניהולית: סמנטיקת HTTP, contracts, failure modes, rate limiting ו-agent-in-the-loop בטוח.",
    quickFacts: [
      { value: "12", label: "חלקי לימוד" },
      { value: "6", label: "תרחישי עבודה" },
      { value: "4", label: "תבניות מוכנות" }
    ],
    parts: [
      {
        id: "summary",
        label: "תקציר מנהלים",
        navShort: "תקציר",
        kicker: "מבט על",
        title: "מ'עבר לי מקומית' ליכולת לתכנן ולנהל זרימות מערכת",
        description:
          "היחידה הזאת נועדה להפוך אותך ממי שרואה request עובד למי שמסוגל לנהל API מקצועי: עמידות, אבטחה, דיבוג ושחרור בטוח.",
        blocks: [
          {
            type: "lead",
            eyebrow: "Executive Summary",
            title: "HTTP הוא חוזה התנהגות בינלאומי, לא רק תעלה שמעבירה JSON",
            text: [
              "יחידה זו הופכת אותך ממי שרואה בקשות עובדות למי שמסוגל לתכנן ולנהל זרימות מערכת בצורה מקצועית: להבין מה באמת קורה בין לקוח לשרת, לנסח חוזי API מדויקים, להקשיח נקודות כניסה ציבוריות, ולבנות התנהגות נכונה תחת כשלי רשת, timeouts, retries ודפוסי abuse.",
              "עקרון המפתח הוא שאם ה-API שלך לא עקבי בסמנטיקה, לא ברור על מה אפשר לסמוך, ואין משמעת של ולידציה, טיפול שגיאות ותצפיתיות, אתה מקבל מערכת שבירה שבה כל שינוי קטן מפיל משהו אחר.",
              "בסוף השבוע אמורים להיות לך ארטיפקטים ניהוליים: API Contract, תרשימי זרימה, טבלת שגיאות, failure modes, תסריט abuse, ותסריט agent-in-the-loop בטוח."
            ]
          },
          {
            type: "callout",
            tone: "quiet",
            title: "מדד ההצלחה של היחידה",
            text:
              "אתה לא נמדד לפי 'עבר לי מקומית', אלא לפי עמידות, אבטחה, יכולת דיבוג ושחרור בטוח של זרימות מערכת."
          }
        ]
      },
      {
        id: "goals",
        label: "מטרות ותוצרים",
        navShort: "מטרות",
        kicker: "מה צריך להישאר אצלך בסוף השבוע",
        title: "מטרות למידה תמציתיות ותוצרים מדידים לשבוע 2",
        description:
          "היחידה בנויה כך שבסוף השבוע תהיה לך חבילת artifacts סביב flow אחד אמיתי: contract, traces, failure modes, abuse וקריאת סוכן בטוחה.",
        blocks: [
          {
            type: "bullet-list",
            title: "מטרות למידה תמציתיות",
            items: [
              "להבין Request/Response לעומק: מה הלקוח עושה, מה השרת עושה, ומה קורה באמצע.",
              "לשלוט בסמנטיקת HTTP: methods, status codes, headers ותבניות קלט/פלט.",
              "להבין Idempotency ומהי מדיניות retry נכונה.",
              "לתכנן ולידציה והודעות שגיאה בצורה עקבית, בטוחה ומאפשרת דיבוג.",
              "לזהות failure modes נפוצים ולהפוך אותם לחלק מהתכנון.",
              "להטמיע הגנות API בסיסיות: rate limiting, abuse controls, token handling, BOLA, CSRF, CORS ו-injection.",
              "לשלב סוכן או LLM בצורה נשלטת: גבולות הרשאה, אימות פלט וחסימת פעולות מסוכנות."
            ]
          },
          {
            type: "card-grid",
            title: "תוצרים מדידים לסוף השבוע",
            columns: 2,
            items: [
              {
                eyebrow: "Deliverable",
                title: "API Contract",
                body: "לזרימה אחת: endpoints, schemas, statuses, idempotency, security ו-observability."
              },
              {
                eyebrow: "Deliverable",
                title: "Trace Pack",
                body: "request-id, לוגים רלוונטיים וראיות של request/response."
              },
              {
                eyebrow: "Deliverable",
                title: "תסריט כשל",
                body: "שחזור שגיאה, root cause, תיקון ובדיקה שמונעת רגרסיה."
              },
              {
                eyebrow: "Deliverable",
                title: "תסריט abuse",
                body: "Rate limit, תגובת 429 וניטור בסיסי."
              },
              {
                eyebrow: "Deliverable",
                title: "Agent-in-the-loop",
                body: "קריאת סוכן שמוגבלת, מאומתת ומתועדת."
              }
            ]
          }
        ]
      },
      {
        id: "request-response",
        label: "Request / Response",
        navShort: "מודל",
        kicker: "חוקי התנועה של המערכת",
        title: "מודל Request/Response ו-HTTP כחוקי תנועה",
        description:
          "הלקוח שולח בקשה, השרת מחזיר תשובה, והחוזה הזה חייב להיות מדויק גם כשיש לקוח עוין או משובש.",
        blocks: [
          {
            type: "lead",
            eyebrow: "HTTP Basics",
            title: "Request הוא בקשה, Response הוא חוזה תשובה, ו-headers הם metadata שמסבירים את כל השאר",
            text: [
              "HTTP אינו מנגנון קסם, אלא סט כללים לסמנטיקה של בקשות, תגובות ו-metadata. הלקוח שולח request, השרת מחזיר response, ובאמצע יש edge, routing, auth, validation, DB ותלויות חיצוניות.",
              "Pitfall נפוץ הוא לחשוב שהלקוח מכבד UI ולכן לא ישלח בקשות חריגות. Mitigation הוא להחשיב כל בקשה כלא אמינה, ולדרוש מהשרת AuthN, AuthZ, validation ותיעוד."
            ]
          },
          {
            type: "callout",
            tone: "info",
            title: "שאלת ניהול",
            text:
              "אילו בדיקות חייבות להיות בשרת כדי שהמערכת תהיה נכונה גם אם הלקוח עוין, שבור או מנסה לעקוף את ה-UI?"
          }
        ]
      },
      {
        id: "methods",
        label: "Methods",
        navShort: "Methods",
        kicker: "סמנטיקה של פעולה",
        title: "GET, POST, PUT, PATCH ו-DELETE: מה כל method אמור לומר על הפעולה",
        description:
          "ה-method שבחרת הוא לא רק מילה ב-route. הוא מבטיח התנהגות, side effects, וציפייה של כל מי שיגע במערכת אחריך.",
        blocks: [
          {
            type: "table",
            title: "Methods וסמנטיקת פעולה",
            columns: ["Method", "מה הוא מבטא", "Pitfall נפוץ", "Mitigation / שאלת ניהול"],
            rows: [
              [
                "GET",
                "קריאה בלבד; לא אמור לשנות מצב מערכת.",
                "GET שמבצע כתיבה, counters או side effects לא רצויים.",
                "בדוק שאין כתיבה נסתרת. האם יש משהו ב-GET שמשנה מצב?"
              ],
              [
                "POST",
                "יצירה או פעולה שאינה בהכרח idempotent.",
                "כפילות בגלל לחיצות חוזרות או retry.",
                "Idempotency-Key, unique constraint או בדיקת 'כבר קיים'. מה מונע פעולה כפולה?"
              ],
              [
                "PUT",
                "החלפה מלאה של ייצוג המשאב.",
                "שימוש ב-PUT בלי להבין מלא מול חלקי, מה שגורם למחיקת שדות.",
                "האם הלקוח שולח את כל הייצוג? מה קורה לשדות שלא נשלחו?"
              ],
              [
                "PATCH",
                "עדכון חלקי של משאב.",
                "PATCH חופשי שמאפשר לשנות שדות אסורים.",
                "Allowlist לשדות, DTO לפי role ושאלת ניהול: אילו שדות מותר לעדכן ולמי?"
              ],
              [
                "DELETE",
                "מחיקה או ביטול, לעיתים עם 204.",
                "מחיקה לפי user_id מה-body או מחיקה ללא אישור.",
                "שלוף user_id מה-token, בצע AuthZ ושקול soft delete כשצריך audit."
              ]
            ]
          }
        ]
      },
      {
        id: "status-codes",
        label: "Status Codes",
        navShort: "Statuses",
        kicker: "שפת הדיבוג של ה-API",
        title: "Status codes הם לא קוסמטיקה: הם שפת הדיבוג והאינטגרציה שלך",
        description:
          "סטטוסים נכונים חוסכים שעות של חקירה. סטטוסים שגויים שוברים כלים, מטשטשים אחריות ומייצרים clients פריכים.",
        blocks: [
          {
            type: "table",
            title: "מפת הסטטוסים המרכזיים",
            columns: ["קוד", "מתי משתמשים", "הערה ניהולית"],
            rows: [
              ["200 OK", "הצלחה כללית", "בחר אותו רק כשאין סטטוס ספציפי טוב יותר."],
              ["201 Created", "נוצר משאב חדש", "מצוין לפעולות יצירה שמחזירות משאב או מזהה."],
              ["202 Accepted", "התקבל לעיבוד אסינכרוני", "צרף job id או דרך מעקב."],
              ["204 No Content", "הצלחה בלי גוף תגובה", "טוב למחיקות ולעדכונים מסוימים."],
              ["400 Bad Request", "שגיאת ולידציה או פורמט", "הלקוח שלח בקשה לא תקינה."],
              ["401 Unauthorized", "אין זיהוי תקף", "טוקן חסר, פג או משתמש לא מחובר."],
              ["403 Forbidden", "מזוהה אך לא מורשה", "זהות קיימת, הרשאה אין."],
              ["404 Not Found", "משאב לא קיים או לא קיים עבורך", "בחר מדיניות עקבית לחשיפת קיום."],
              ["409 Conflict", "קונפליקט מצב או כפילות", "טוב ל-idempotency, כפילויות וגרסאות."],
              ["422 Unprocessable Entity", "פורמט תקין אך לא עומד בחוקים סמנטיים", "אופציונלי; חשוב לבחור קו עקבי."],
              ["429 Too Many Requests", "Rate limit או abuse", "רצוי לצרף Retry-After."],
              ["500 / 502 / 503 / 504", "כשלי שרת או תלות", "חשובים במיוחד למעקב תפעולי."]
            ]
          },
          {
            type: "callout",
            tone: "quiet",
            title: "Anti-pattern שחייב להיעלם",
            text:
              "להחזיר 200 עם הודעת שגיאה בתוך JSON כמו ok:false הורס דיבוג, כלי אינטגרציה ו-tracing. הסטטוס צריך לספר את האמת."
          }
        ]
      },
      {
        id: "headers-body",
        label: "Headers וגוף בקשה",
        navShort: "Headers",
        kicker: "המעטפה והתוכן",
        title: "Headers, JSON ו-FormData: מה באמת מגיע לשרת ואיך שומרים על זה בטוח",
        description:
          "Headers הם metadata קריטי, וגוף הבקשה הוא המקום שבו הכי קל להכניס טעויות, דליפות ועלויות.",
        blocks: [
          {
            type: "card-grid",
            title: "Headers שחייבים להבין",
            columns: 2,
            items: [
              {
                eyebrow: "Auth",
                title: "Authorization / Cookie",
                body: "זהות וסשן. השאלה הניהולית: האם קיימת מדיניות אחידה איך מזדהים ואיפה זה נבדק?"
              },
              {
                eyebrow: "Format",
                title: "Content-Type / Accept",
                body: "הפורמט שנשלח והפורמט שמצופה בחזרה. זה קובע parsing, validation ושגיאות."
              },
              {
                eyebrow: "Safety",
                title: "Idempotency-Key / Retry-After",
                body: "Headers שעוזרים למנוע כפילויות ולנהל retry נכון."
              },
              {
                eyebrow: "Tracing",
                title: "X-Request-Id / traceparent",
                body: "מזהים שעוזרים לעקוב אחרי זרימה בין מערכות ולוגים."
              }
            ]
          },
          {
            type: "bullet-list",
            title: "JSON מול FormData",
            items: [
              "JSON הוא ברירת המחדל לנתונים מובנים.",
              "FormData מיועד לקבצים ובינארי.",
              "Pitfall: העלאת קבצים בלי מגבלות גודל או סוג יוצרת DoS, עלויות וסיכוני תוכן.",
              "Mitigation: מגבלות גודל, סוגים מותרים, private storage ותיוג או סריקה לפי צורך."
            ]
          },
          {
            type: "callout",
            tone: "info",
            title: "שאלת ניהול",
            text:
              "האם קיימת מדיניות עקבית של מה מותר להדפיס ללוג, ואיפה עושים redaction ל-Headers רגישים כמו Authorization או Cookie?"
          }
        ]
      },
      {
        id: "lifecycle",
        label: "Lifecycle",
        navShort: "Lifecycle",
        kicker: "מה באמת קורה בבקשה",
        title: "Request / Response Lifecycle: הסדר הקבוע שמונע endpoints שבירים",
        description:
          "בקשה בריאה עוברת סדר של שלבים. ברגע שהסדר הזה לא ברור, קל לשכוח AuthZ, validation, telemetry או טיפול שגיאות נכון.",
        blocks: [
          {
            type: "sequence",
            title: "תשעת השלבים של בקשה בריאה",
            items: [
              { step: "1", title: "Edge", body: "TLS, routing בסיסי ו-rate limiting." },
              { step: "2", title: "Router / Controller", body: "התאמת route ו-method." },
              { step: "3", title: "AuthN", body: "מי אתה?" },
              { step: "4", title: "AuthZ", body: "האם מותר לך על המשאב הזה, ברמת אובייקט?" },
              { step: "5", title: "Validation", body: "האם הקלט עומד בסכמות ובחוקים?" },
              { step: "6", title: "Business Logic", body: "ביצוע הפעולה עצמה." },
              { step: "7", title: "DB / Storage / External", body: "התמדה, שליפה או קריאת חוץ." },
              { step: "8", title: "Error Handling", body: "מיפוי הכשל לסטטוס ול-payload בטוח." },
              { step: "9", title: "Observability", body: "request-id, logs, metrics ו-audit." }
            ]
          },
          {
            type: "callout",
            tone: "quiet",
            title: "שאלת ניהול",
            text:
              "האם מוגדר סדר קבוע של בדיקות בכל endpoint כך שאי אפשר לשכוח AuthZ, validation או observability?"
          }
        ]
      },
      {
        id: "resilience",
        label: "Resilience",
        navShort: "עמידות",
        kicker: "Idempotency, retries, timeouts ו-abuse",
        title: "כשלים, retries ו-rate limiting: להפוך failure modes לחלק מהתכנון",
        description:
          "החלק הזה עוסק במה שקורה כשדברים לא עובדים: כפילויות, timeouts, retries מסוכנים ו-abuse חיצוני.",
        blocks: [
          {
            type: "card-grid",
            title: "ארבעת המושגים שחייבים להחזיק יחד",
            columns: 2,
            items: [
              {
                eyebrow: "Idempotency",
                title: "אותה פעולה לא יוצרת תוצאה כפולה",
                body: "כל פעולה רגישה שמערבת יצירה, כסף או הרשמות חייבת מנגנון שמונע כפילויות."
              },
              {
                eyebrow: "Retries",
                title: "לנסות שוב רק כשזה בטוח",
                body: "Retry מותר רק כשיש idempotency או ודאות שלא תיווצר פעולה כפולה. השתמש ב-backoff, jitter ותקרת ניסיונות."
              },
              {
                eyebrow: "Timeouts",
                title: "לכל תלות יש גבול זמן",
                body: "בלי timeouts המערכת נערמת, נוצרים תורים והכל נתקע."
              },
              {
                eyebrow: "Rate limiting",
                title: "מגינים על endpoints ועלויות",
                body: "הגבלה לפי IP, user, token או route עם 429, Retry-After ולוגים."
              }
            ]
          },
          {
            type: "callout",
            tone: "info",
            title: "Pitfall קלאסי",
            text:
              "Retry אוטומטי על POST בלי idempotency יוצר כפילויות. עבור כל תלות חיצונית, כולל LLM, צריך להגדיר timeout ומדיניות retry מפורשת."
          }
        ]
      },
      {
        id: "security",
        label: "אבטחה ו-Agents",
        navShort: "אבטחה",
        kicker: "מוטמע בתוך התכנון",
        title: "כשלי אבטחה נפוצים והגנות מעשיות ל-API ול-Agent",
        description:
          "החלק הזה מחבר את ה-API לאבטחה: injection, BOLA, token handling, CSRF, CORS וסיכוני LLM/Agents.",
        blocks: [
          {
            type: "table",
            title: "סיכונים והגנות מעשיות",
            columns: ["תחום", "Pitfall נפוץ", "Mitigation מעשי"],
            rows: [
              [
                "Injection",
                "בניית שאילתות, פקודות או תבניות ממחרוזות קלט.",
                "פרמטריזציה, allowlists, escaping ו-validation קשיח."
              ],
              [
                "BOLA / IDOR",
                "שימוש ב-id מהלקוח בלי בדיקת בעלות או הרשאה.",
                "AuthZ object-level בכל endpoint שמקבל id."
              ],
              [
                "Token handling",
                "שמירת טוקן ב-localStorage, הדפסה ללוג או העברה בקוורי.",
                "מדיניות אחידה, TTL קצר ו-redaction בלוגים."
              ],
              [
                "CSRF",
                "POST או DELETE שמתקבל אוטומטית עם cookie בלי הגנה.",
                "SameSite, CSRF tokens ובדיקת Origin או Referer."
              ],
              [
                "CORS",
                "Wildcard רחב מדי או credentials עם *.",
                "Allowlist מדויק של origins, methods ו-headers."
              ],
              [
                "Prompt Injection",
                "תוכן משתמש מנסה לעקוף הוראות מערכת.",
                "הפרדת הוראות ונתונים, צמצום context ו-tool allowlist."
              ],
              [
                "Insecure Output Handling",
                "פלט LLM נוגע ישירות ב-DB, HTML או SQL.",
                "Schema validation, allowlist ואישור אנושי לפעולות מסוכנות."
              ],
              [
                "Excessive Agency",
                "לסוכן יש יותר מדי הרשאות או כתיבה חופשית.",
                "Gates, approvals, allowlist לכלים ו-audit."
              ]
            ]
          },
          {
            type: "callout",
            tone: "quiet",
            title: "שאלת ניהול",
            text:
              "האם הפלט של הסוכן יכול לגרום לפעולה בלתי הפיכה בלי בדיקה דטרמיניסטית לפני שהוא נוגע במערכת?"
          }
        ]
      },
      {
        id: "exercises",
        label: "תרגילים מעשיים",
        navShort: "תרגילים",
        kicker: "להפוך flow לחבילת artifacts",
        title: "תרגילים מעשיים לשבוע 2",
        description:
          "כל תרגיל כאן מייצר תוצר ניהולי סביב flow אמיתי: contract, traces, root cause, abuse policy, agent call ו-failure modes.",
        blocks: [
          {
            type: "table",
            title: "טבלת התרגילים",
            columns: ["תרגיל", "מטרה", "Timebox", "תוצר צפוי", "Rubric הערכה"],
            rows: [
              [
                "יצירת חוזה API מלא",
                "להפוך endpoint עובד לחוזה מנוהל",
                "60–120 דק׳",
                "מסמך API Contract לזרימה אחת",
                "Pass: method/path/schemas/statuses. Strong: AuthN/AuthZ + errors עקביים. Excellent: idempotency + risk notes + audit."
              ],
              [
                "Tracing של request/response",
                "לאסוף ראיות לדיבוג מקצה לקצה",
                "45–90 דק׳",
                "Trace Pack: request-id, headers, response ולוגים קשורים",
                "Pass: יש ראיות בסיסיות. Strong: ניתן לשחזר זרימה. Excellent: מזהה נקודת כשל ותלות איטית."
              ],
              [
                "שחזור שגיאה ו-Root Cause",
                "לתרגל דיבוג מקצועי",
                "60–120 דק׳",
                "מסמך Bug Investigation מלא + תיקון + בדיקה",
                "Pass: שחזור ברור. Strong: root cause מוכח. Excellent: בדיקה שמונעת חזרה + שיפור observability."
              ],
              [
                "תסריט Abuse + Rate Limit",
                "לבנות מדיניות הגנה מעשית",
                "45–90 דק׳",
                "תסריט + thresholds + תגובת 429 + לוג/מדד",
                "Pass: ספים מוגדרים. Strong: per-route/per-user. Excellent: לא פוגע בלגיטימי + ניטור."
              ],
              [
                "Agent-in-the-loop safe call",
                "לשלב סוכן בצורה נשלטת",
                "60–120 דק׳",
                "design קצר: מתי קוראים לסוכן, כלים מורשים, אימות פלט, gates",
                "Pass: שליטה בסיסית. Strong: output validation + tool allowlist. Excellent: audit + approval לפעולות רגישות."
              ],
              [
                "ניתוח Failure Modes לזרימה",
                "להקדים תקלות בתכנון",
                "30–60 דק׳",
                "טבלה: failure mode → סימפטום → תגובה → status → לוג",
                "Pass: 5 מצבים. Strong: כולל timeouts ו-duplicates. Excellent: כולל סוכן או תלות חיצונית."
              ]
            ]
          }
        ]
      },
      {
        id: "checklists",
        label: "צ'קליסטים",
        navShort: "צ'קליסטים",
        kicker: "איכות אחידה בכל PR",
        title: "API Design Review, אבטחה לנקודות ציבוריות ו-Production Readiness",
        description:
          "הצ'קליסטים כאן הופכים flow API לשיחת ביקורת מקצועית במקום לשיחה אינטואיטיבית או מקרית.",
        blocks: [
          {
            type: "table",
            title: "API Design Review",
            columns: ["בדיקה", "מה מחפשים", "Done when"],
            rows: [
              ["סמנטיקת Method", "האם method מתאים לפעולה", "אין POST למחיקה; אין GET עם כתיבה"],
              ["Status codes", "עקביות והבחנות נכונות", "401/403/400/409/429 מובחנים"],
              ["חוזה קלט/פלט", "schema ברור ודוגמאות", "אפשר לממש קליינט רק מהחוזה"],
              ["ולידציה", "מה בשרת ומה בלקוח", "שרת מכריע; הודעות שגיאה עקביות"],
              ["Idempotency", "פעולות רגישות מוגנות", "Idempotency-Key או constraints קיימים"],
              ["Pagination / filtering", "אם יש רשימות", "מדיניות ותיעוד עקביים"],
              ["Observability", "request-id, audit, לוגים", "מוגדרים אירועים ושדות חובה"]
            ]
          },
          {
            type: "table",
            title: "אבטחה לנקודות ציבוריות",
            columns: ["בדיקה", "למה", "Done when"],
            rows: [
              ["AuthN", "מי אתה", "אין endpoints רגישים ללא AuthN"],
              ["AuthZ object-level", "מניעת IDOR", "כל id נבדק מול הרשאה"],
              ["Token hygiene", "מניעת דליפה", "אין tokens בלוגים, ב-URLs או בלקוח שלא נחוץ"],
              ["CSRF", "מניעת בקשה זדונית", "SameSite, CSRF token או Origin checks"],
              ["CORS", "מניעת פתיחה מיותרת", "Allowlist origins ואין wildcard עם creds"],
              ["Injection", "מניעת הרצת קלט", "פרמטריזציה, allowlist ו-escaping לפי צורך"],
              ["Rate limiting", "מניעת abuse", "429 + thresholds + ניטור"],
              ["File uploads", "תוכן מסוכן או DoS", "מגבלות גודל, סוג ו-private storage"]
            ]
          },
          {
            type: "table",
            title: "Production Readiness לשינויי API",
            columns: ["תחום", "שאלה", "Done when"],
            rows: [
              ["תאימות לאחור", "האם שינוי שובר קליינטים?", "versioning או שדות אופציונליים מתוכננים"],
              ["Rollout / rollback", "איך משחררים בבטחה?", "תכנית חזרה קיימת"],
              ["DB / migrations", "שינוי סכימה נדרש?", "סדר פריסה מוגדר"],
              ["Observability", "איך נזהה תקלה מהר?", "מדדים, לוגים ו-alerts מינימליים"],
              ["Rate / cost", "האם יש סיכון עלויות?", "limits, quotas ו-timeouts למדידה"],
              ["אבטחה", "משטח תקיפה חדש?", "Security review קצר בוצע"],
              ["Agent governance", "האם סוכן מעורב?", "allowlist, validation ו-gates קיימים"]
            ]
          }
        ]
      },
      {
        id: "templates",
        label: "תבניות עבודה",
        navShort: "תבניות",
        kicker: "Contracts שאפשר להפעיל מחר בבוקר",
        title: "API Contract, Bug Investigation, PR Review ו-Security Review",
        description:
          "במקום לאלתר review סביב APIs, עובדים עם templates קבועים שמכריחים semantic correctness, security ו-observability.",
        blocks: [
          {
            type: "code-block",
            eyebrow: "Template 1",
            title: "API Contract",
            language: "text",
            code: `[API Contract] שם הזרימה

Purpose:
- מה ה-endpoint עושה ולמי?

Endpoint:
- Method:
- Path:

Auth:
- AuthN (איך מזדהים):
- AuthZ object-level (מה נבדק, על איזה משאב):

Request:
- Headers:
- Body schema (JSON/FormData):
- Constraints (required fields, max length, allowed values):
- Idempotency (אם נדרש):

Response:
- Success status + schema:
- Error statuses (400/401/403/404/409/422/429/5xx) + schema:
- Error envelope (שדות חובה: code, message, request_id):

Side Effects:
- מה נכתב ל-DB/Storage?
- אילו אירועי audit נרשמים?

Resilience:
- Timeouts:
- Retries (מתי, כמה, backoff):
- Fallback behavior:

Rate limiting:
- Key (IP/user/token):
- Threshold:
- 429 behavior:

Observability:
- Logs:
- Metrics:
- Audit events:`
          },
          {
            type: "callout",
            tone: "quiet",
            title: "דוגמה קצרה",
            text:
              "Method: POST, Path: /api/submissions. Idempotency: Idempotency-Key חובה; conflict מחזיר 409 אם כבר הוגש."
          },
          {
            type: "code-block",
            eyebrow: "Template 2",
            title: "Bug Investigation",
            language: "text",
            code: `[Bug Investigation] כותרת

Symptom:
- מה רואים?

Repro:
1)
2)

Expected vs Actual:
- Expected:
- Actual:

Evidence:
- Request/response (כולל status):
- request-id:
- Logs קשורים:
- DB snapshot/query:
- שינוי קוד אחרון (PR/commit):

Root Cause:
- מה בדיוק נשבר ולמה?

Fix:
- שינוי מינימלי:
- בדיקה למניעת רגרסיה:
- סיכון/השפעה:

Prevention:
- איזו טלמטריה או צ'קליסט נוסיף?`
          },
          {
            type: "callout",
            tone: "quiet",
            title: "דוגמה קצרה",
            text:
              "Root Cause: DELETE קיבל user_id מה-body ולא מה-token ולכן נוצר IDOR. Fix: user_id נשלף מה-token; AuthZ; 404 או 403 לפי מדיניות."
          },
          {
            type: "code-block",
            eyebrow: "Template 3",
            title: "PR Review לשינויי API",
            language: "text",
            code: `[PR Review - API] קישור/כותרת

Summary:
- מה השתנה ב-API?

Contract:
- האם עודכן API Contract?
- האם schemas תואמים?

HTTP Semantics:
- method נכון?
- status codes נכונים?

Security:
- AuthZ object-level בכל id?
- CSRF/CORS לפי מדיניות?
- tokens לא בלוגים/קוד?

Resilience:
- timeouts מוגדרים?
- retries בטוחים (idempotency)?

Breaking changes:
- האם זה שובר קליינטים?
- האם יש rollout plan?

Decision:
- APPROVE / REQUEST CHANGES / BLOCK
- Required fixes:
- Risks:`
          },
          {
            type: "callout",
            tone: "quiet",
            title: "דוגמה קצרה",
            text:
              "REQUEST CHANGES: נוסף POST למחיקה; לשנות ל-DELETE, להוסיף 204, ולהסיר user_id מה-body."
          },
          {
            type: "code-block",
            eyebrow: "Template 4",
            title: "Security Review ל-API",
            language: "text",
            code: `[Security Review - API] זרימה/Endpoint

Surface:
- Public? מי יכול להגיע?
- Endpoints:

Assets:
- איזה נתונים רגישים? (PII/קבצים/תשלומים)

Threats (Top 5):
1) Threat:
   Vector:
   Impact:
   Mitigation:
...

Controls:
- AuthN:
- AuthZ object-level:
- Validation:
- Injection mitigations:
- Rate limiting:
- Error handling (no leaks):

CSRF/CORS:
- CSRF strategy:
- CORS allowlist:

Agent/LLM (אם יש):
- tool allowlist:
- output validation:
- human approvals:
- audit:

Findings:
- Must-fix:
- Should-fix:
- Accepted risks:`
          }
        ]
      },
      {
        id: "diagrams-sources",
        label: "תרשימים ומקורות",
        navShort: "תרשימים",
        kicker: "Mermaid + references",
        title: "תרשימי Mermaid, הנחות עבודה ומקורות מומלצים",
        description:
          "החלק האחרון מרכז את שני התרשימים של היחידה, יחד עם הנחות העבודה והמקורות שמהם כדאי להעמיק כשצריך.",
        blocks: [
          {
            type: "code-block",
            eyebrow: "Mermaid",
            title: "Request lifecycle flowchart",
            language: "mermaid",
            code: `flowchart TD
  A[Client builds request] --> B[TLS + Edge protections]
  B --> C[Route match: method + path]
  C --> D{AuthN}
  D -->|fail| E[401]
  D --> F{AuthZ object-level}
  F -->|fail| G[403]
  F --> H[Validate & normalize input]
  H -->|fail| I[400/422 safe error]
  H --> J[Business logic]
  J --> K{Call external/agent?}
  K -->|yes| L[Timeout + safe retry policy]
  L --> M[Validate output / map errors]
  K -->|no| N[DB/Storage operations]
  M --> N
  N --> O[Compose response + status]
  O --> P[Logs/metrics/audit with request-id]
  P --> Q[Return response]`
          },
          {
            type: "code-block",
            eyebrow: "Mermaid",
            title: "Sequence diagram: Client → API → DB → Agent",
            language: "mermaid",
            code: `sequenceDiagram
  autonumber
  participant Client as Client (Browser/App)
  participant API as Backend API
  participant DB as Database
  participant Agent as Agent/LLM

  Client->>API: POST /api/submissions (JSON + Auth header)
  API->>API: AuthN + AuthZ object-level
  alt Not authenticated
    API-->>Client: 401
  end
  API->>API: Validate input schema
  alt Invalid input
    API-->>Client: 400/422
  end
  API->>DB: Check idempotency / existing submission
  alt Already exists
    API-->>Client: 409 Conflict
  end
  API->>Agent: Request evaluation (bounded context)
  alt Agent timeout / transient error
    Agent-->>API: timeout/5xx
    API->>API: Safe retry (if allowed) + backoff
  end
  Agent-->>API: Structured result (score + feedback)
  API->>API: Validate agent output schema
  API->>DB: Persist result + audit event
  DB-->>API: OK
  API-->>Client: 201 Created (JSON result)`
          },
          {
            type: "bullet-list",
            title: "הנחות עבודה",
            items: [
              "אין גישה להרצה מקומית בכתובת 127.0.0.1; התאמה מדויקת ליישום תיעשה באמצעות צילומי מסך, קטעי קוד או דוגמאות request/response שיועברו בהמשך.",
              "המסמך הנוכחי הוא גרסה עצמאית ומוכנה לפרסום של יחידה 2."
            ]
          },
          {
            type: "bullet-list",
            title: "מקורות מומלצים לפי עדיפות",
            items: [
              "RFC 9110 — HTTP Semantics",
              "RFC 6749 — OAuth 2.0 Authorization Framework",
              "RFC 6750 — Bearer Token Usage",
              "RFC 7636 — PKCE",
              "OWASP Top 10 (2021)",
              "OWASP API Security Top 10 (2023)",
              "OWASP Cheat Sheet Series: Authentication, Authorization, REST Security, Logging, Secrets Management, Injection Prevention",
              "OWASP Top 10 for Large Language Model Applications",
              "OWASP Cheat Sheets: LLM Prompt Injection Prevention, AI Agent Security",
              "OpenTelemetry Documentation",
              "The Twelve-Factor App"
            ]
          }
        ]
      }
    ]
  };

  const authoredUnitPages = {
    "world-map": worldMapPage,
    "http-api": httpApiPage
  };

  function buildUnitPageUrl(unitId, partId) {
    const params = new URLSearchParams();
    params.set("unit", unitId);

    if (partId) {
      params.set("page", partId);
    }

    return `./unit-page.html?${params.toString()}`;
  }

  function getUnitMeta(unitId) {
    return unitMetaIndex[unitId] || {
      id: unitId || "unit",
      weekLabel: "יחידה",
      title: "יחידה",
      category: "מסלול",
      accent: "teal",
      summary: "עמוד היחידה מוכן להעמקה דרך קוד."
    };
  }

  function buildGenericUnitPage(unitMeta) {
    return {
      id: unitMeta.id,
      heroEyebrow: `${unitMeta.weekLabel} · ${unitMeta.category}`,
      title: unitMeta.title,
      subtitle: unitMeta.summary,
      quickFacts: [
        { value: "5", label: "עמודי לימוד" },
        { value: "Code", label: "מוזן דרך קוד" },
        { value: "Soon", label: "Deep Dive מלא" }
      ],
      parts: genericPartBlueprints.map((part) => ({
        id: part.id,
        label: part.label,
        navShort: part.navShort,
        kicker: part.kicker,
        title: `${part.label} של ${unitMeta.title}`,
        description: `${part.teaser} כרגע העמוד הזה הוא מסגרת מוכנה ליחידה, ובשלב הבא נטמיע כאן את החומר המלא בדיוק באותה צורה.`,
        blocks: [
          {
            type: "callout",
            tone: "info",
            title: "העמוד כבר מוכן ליחידה הזאת",
            text:
              "המבנה קיים: ניווט, עיצוב, חלוקה לחלקים ועמוד ייעודי. כשהחומר של היחידה יוזן דרך הקוד, הוא יופיע כאן בצורה מלאה."
          },
          {
            type: "bullet-list",
            title: "מה ייכנס כאן",
            items: [
              "Deep dive מלא של המושגים המרכזיים ביחידה.",
              "איורים וזרימות מערכת רלוונטיים לנושא.",
              "בוחן תרחיש או checklist שמכריח שיפוט אמיתי.",
              "תוצר ברור ודרך למדוד אם הבנת."
            ]
          }
        ]
      }))
    };
  }

  function getUnitPage(unitId) {
    const unitMeta = getUnitMeta(unitId);
    const authoredPage = authoredUnitPages[unitId];

    if (!authoredPage) {
      return buildGenericUnitPage(unitMeta);
    }

    return {
      ...unitMeta,
      ...authoredPage,
      parts: authoredPage.parts.map((part) => ({
        ...part,
        unitId,
        url: buildUnitPageUrl(unitId, part.id)
      }))
    };
  }

  function getUnitParts(unitId) {
    const unitPage = getUnitPage(unitId);
    return (unitPage.parts || []).map((part, index) => ({
      ...part,
      index,
      unitId,
      url: part.url || buildUnitPageUrl(unitId, part.id)
    }));
  }

  function getAllUnitMeta() {
    return Object.values(unitMetaIndex);
  }

  window.unitPagesCatalog = {
    getUnitMeta,
    getUnitPage,
    getUnitParts,
    getAllUnitMeta,
    buildUnitPageUrl
  };
})();
