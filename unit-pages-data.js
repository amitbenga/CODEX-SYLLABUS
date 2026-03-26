(function () {
  const unitMetaIndex = {
    "world-map": {
      id: "world-map",
      weekLabel: "שבוע 1",
      title: "מפת העולם של אפליקציה מודרנית",
      category: "יסודות",
      accent: "teal",
      summary: "להבין איך אפליקציית web אמיתית בנויה מקצה לקצה ומה האחריות של כל שכבה."
    },
    "http-api": {
      id: "http-api",
      weekLabel: "שבוע 2",
      title: "HTTP, API וזרימות מערכת",
      category: "יסודות",
      accent: "navy",
      summary: "להבין איך מידע זורם במערכת, מי מאמת, מה נשמר ואיך מטפלים בכשל."
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
    heroEyebrow: "יחידה 1 · גרסה משודרגת",
    title: "מפת העולם של אפליקציה מודרנית",
    subtitle:
      "הבסיס הארכיטקטוני של המסלול, עכשיו ברמה ניהולית: מפת רכיבים, public surfaces, observability, תרגילים, צ'קליסטים ותבניות עבודה עם סוכנים.",
    quickFacts: [
      { value: "9", label: "חלקי לימוד" },
      { value: "5", label: "ארטיפקטים" },
      { value: "4", label: "תבניות מוכנות" }
    ],
    parts: [
      {
        id: "summary",
        label: "תקציר מנהלים",
        navShort: "תקציר",
        kicker: "מבט ניהולי",
        title: "מה יחידה 1 כבר עושה טוב, ומה חייב להשתדרג כדי לנהל בנייה אמיתית",
        description:
          "היחידה כבר מניחה נכון את היסודות של מפת רכיבים וגבולות אמון. הגרסה הזאת מוסיפה את מה שחסר כדי לנהל מפתחים וסוכנים כמו tech lead.",
        blocks: [
          {
            type: "lead",
            eyebrow: "תקציר",
            title: "הקפיצה כאן היא ממפת רכיבים לחבילת ניהול מלאה",
            text: [
              "הגרסה הקודמת הסבירה מצוין את הבסיס: client לא אמין, סודות יושבים בשרת, DB ו-storage הם מחסנים שונים, API הוא חוזה, וסוכן AI הוא יועץ חיצוני.",
              "הגרסה המשודרגת מוסיפה שכבות ניהול: public surfaces, object-level authorization, observability, rollout ו-agent governance."
            ]
          },
          {
            type: "card-grid",
            title: "מה כבר חזק ביחידה המקורית",
            columns: 3,
            items: [
              {
                eyebrow: "Foundation",
                title: "מפת רכיבים ברורה",
                body: "Client, Server, DB, Storage, API ו-Agents כבר מחולקים נכון ולא מתערבבים."
              },
              {
                eyebrow: "Security instinct",
                title: "גבול אמון בריא",
                body: "המסר ש-client לא מקור סמכות ושסודות לא גולשים ל-frontend הוא בסיס נכון מאוד."
              },
              {
                eyebrow: "Judgment",
                title: "תרחיש שמריח סכנה",
                body: "דוגמת ה-PDF כבר מחברת בין ארכיטקטורה לאבטחה ומכריחה שיפוט, לא רק הגדרות."
              }
            ]
          },
          {
            type: "callout",
            tone: "quiet",
            title: "הפער המרכזי",
            text:
              "היחידה עדיין הייתה ברמת 'תיאור רכיבים'. כדי לנהל בנייה צריך גם להגדיר מותר/אסור לכל שכבה, public surfaces, observability, rollout וגבולות סוכן."
          },
          {
            type: "card-grid",
            title: "הארטיפקטים שתצא איתם מהשבוע",
            columns: 3,
            items: [
              {
                eyebrow: "Artifact",
                title: "דיאגרמת ארכיטקטורה",
                body: "עם גבולות אמון, אזורי רשת, נתונים ושירותי צד ג'."
              },
              {
                eyebrow: "Artifact",
                title: "כרטיס API",
                body: "פירוק מלא של flow אחד: contracts, auth, errors ו-observability."
              },
              {
                eyebrow: "Artifact",
                title: "Mini Threat Model",
                body: "חמישה איומים מרכזיים עם mitigations אמיתיים."
              },
              {
                eyebrow: "Artifact",
                title: "מפת משטחי נתונים",
                body: "DB, storage ו-vector DB עם הרשאות, PII ו-retention."
              },
              {
                eyebrow: "Artifact",
                title: "ספר פרומפטים",
                body: "4 תבניות שימושיות ל-Feature, Bug, PR ו-Security review."
              }
            ]
          }
        ]
      },
      {
        id: "restaurant",
        label: "אנלוגיית המסעדה",
        navShort: "מסעדה",
        kicker: "אנלוגיה שלא נשכחת",
        title: "אם אתה מבין את המסעדה, אתה מבין למה לא נותנים סמכות למקום הלא נכון",
        description:
          "המסעדה נשארת העוגן הפדגוגי של יחידה 1, אבל עכשיו היא מסבירה גם defense-in-depth ולא רק חלוקת תפקידים בסיסית.",
        blocks: [
          {
            type: "analogy-grid",
            title: "מיפוי השכבות דרך המסעדה",
            items: [
              {
                tag: "Frontend",
                title: "המלצר והתפריט",
                caption: "מה שהמשתמש רואה בדפדפן",
                body:
                  "הקליינט מציג מידע, אוסף קלט ולוחץ על כפתורים. הוא נועד ל-UX, לא להחליט מי רשאי למה.",
                risk:
                  "אם תיתן לו לחשב ציונים, לשמור סודות או להחליט על הרשאות, המשתמש ישכתב את הכללים."
              },
              {
                tag: "Backend",
                title: "מנהל המסעדה והשף",
                caption: "Anti-Gravity והלוגיקה העסקית",
                body:
                  "השרת בודק auth, authz, business rules, מדבר עם DB ו-storage ומנהל את הסוכנים וה-workers.",
                risk:
                  "שרת שלא מחזיק את הסמכות העסקית יוצר קיצורי דרך מסוכנים."
              },
              {
                tag: "Data",
                title: "המזווה, המקרר והמחסן",
                caption: "SQL, storage ו-vector DB",
                body:
                  "מסד הנתונים שומר עובדות, storage שומר קבצים, ו-vector DB שומר הקשר סמנטי ל-RAG ולזרימות AI.",
                risk:
                  "ערבוב בין המחסנים יוצר שכפול, חוסר עקביות וחשיפות לא מכוונות."
              },
              {
                tag: "API",
                title: "פתק ההזמנה",
                caption: "החוזה בין השכבות",
                body:
                  "ה-API הוא השפה הסטנדרטית בין ה-client לשרת. הוא לא רק מסלול רשת, אלא חוזה של קלט, פלט ושגיאות.",
                risk:
                  "API רופף בלי validation ובלי error contract מוביל ל-flows שלא ניתן לבקר."
              },
              {
                tag: "AI Agents",
                title: "היועצים החיצוניים",
                caption: "Claude, Codex וכלי AI",
                body:
                  "הסוכן עובד מאחורי השרת, עם context וכלים שהוגדרו לו. הוא לא מקור סמכות ואסור לו לרוץ פרוע על המערכת.",
                risk:
                  "בלי tool limits, output validation ו-boundaries, סוכן הופך לעוד משטח תקיפה."
              }
            ]
          },
          {
            type: "callout",
            tone: "info",
            title: "איפה האנלוגיה משתדרגת מקצועית",
            text:
              "המשפט 'האבטחה יושבת בשרת' טוב ללמידה ראשונה, אבל במערכת אמיתית אבטחה היא defense-in-depth: edge protections, app checks, data constraints ו-least privilege."
          },
          {
            type: "callout",
            tone: "quiet",
            title: "כלל אצבע לזיכרון",
            text:
              "המלצר לא מבשל, השף לא מגיש, והלקוח לא נכנס למחסן. ברגע שזה ברור, קל יותר לזהות פתרונות לא בריאים של סוכנים."
          }
        ]
      },
      {
        id: "gaps",
        label: "פערים מקצועיים",
        navShort: "פערים",
        kicker: "ממפת רכיבים לניהול בנייה",
        title: "מה חסר כדי לעבור מהבנה בסיסית ליכולת לנהל מפתחים וסוכנים",
        description:
          "כאן היחידה עוברת משפת 'מה זה frontend' לשפת 'איך מבקרים פתרון, איך מונעים חורים, ואיך מייצרים ארטיפקטים שאפשר לעבוד איתם'.",
        blocks: [
          {
            type: "lead",
            eyebrow: "הפער",
            title: "להבין מערכת זה לא מספיק. צריך גם לדעת להחזיק אותה",
            text: [
              "מפת רכיבים היא רק התחלה. מנהל בנייה צריך לדעת מה מותר ואסור לכל שכבה, מהם המשטחים הציבוריים, איך נראית observability, ואיך שולטים בפריסה ובסוכנים.",
              "הטבלה הזאת ממסגרת את הפערים שצריכים להפוך לרפלקס כבר מהשבוע הראשון."
            ]
          },
          {
            type: "table",
            title: "טבלת הפערים המרכזיים",
            columns: ["תחום", "מה יש כיום", "מה חסר כדי לנהל בנייה", "למה זה קריטי"],
            rows: [
              ["זהות, סשנים והרשאות", "יש הבנה שהשרת בודק login.", "הפרדה חדה בין authentication ל-authorization, כולל הרשאה ברמת אובייקט.", "הסיכונים האמיתיים הם לא 'אין login' אלא 'יש login אבל אין authz נכון'."],
              ["API כמשטח תקיפה", "API מוצג כגשר או פתק הזמנה.", "BOLA/IDOR, rate limiting, validation ושגיאות עקביות.", "סוכנים נוטים לממש endpoint שעובד ושוכח להגן על object ids."],
              ["ניהול סודות וקונפיג", "ברור שסודות לא יושבים ב-frontend.", "config vs secret, rotations, vault/env discipline ו-redaction.", "בפועל סוד דולף דרך repo, logs, workers או client misconfiguration."],
              ["תצפיתיות", "כמעט לא קיימת כמשמעת בסיס.", "request-id, structured logs, traces ו-audit events.", "בלי ראיות אי אפשר לנהל פרודקשן, רק לנחש."],
              ["פריסה ו-Ops", "מרומז שיש שרתים מרוחקים.", "dev/staging/prod, rollout, rollback, migrations ופיצ'ר-פלגים.", "זה ההבדל בין דמו למוצר שאפשר לשחרר בבטחה."],
              ["גבולות תשתית", "לא מפורט מי חשוף לאינטרנט.", "Edge, WAF, reverse proxy, workers, queue ו-cache.", "טעות תשתיתית יכולה לעקוף את כל אבטחת האפליקציה."],
              ["משילות סוכנים", "השרת מדבר עם Claude.", "Prompt injection, output validation, tool permissions ו-budgets.", "סוכן עם גישה חופשית מדי הופך בעצמו לבעיה ארכיטקטונית."]
            ]
          }
        ]
      },
      {
        id: "controls",
        label: "בקרות ושפה ניהולית",
        navShort: "בקרות",
        kicker: "המילון שאתה מנהל ממנו",
        title: "מושגים, מלכודות ותצפיתיות מינימלית שאתה חייב כבר בשבוע הראשון",
        description:
          "החלק הזה הופך את יחידה 1 לבסיס ניהולי: מילון מושגים עם שאלות ביקורת, מלכודות אבטחה שחייבות להפוך לרפלקס, ושכבת observability מינימלית.",
        blocks: [
          {
            type: "table",
            title: "מילון מושגים עם שאלת ניהול לכל אחד",
            columns: ["מושג", "הגדרה קצרה", "השאלה שאתה שואל סוכן או מפתח"],
            rows: [
              ["Trust Boundary", "איפה נתון או קוד עוברים מלא-אמין לאמין.", "איפה הקלט נחשב לא אמין, ואיפה מאמתים אותו בפועל?"],
              ["Authentication", "אימות זהות של המשתמש.", "איך המשתמש מוכיח שהוא מי שהוא?"],
              ["Authorization", "החלטת מותר/אסור לפעולה מסוימת.", "איפה בודקים הרשאה לאובייקט ספציפי ולא רק לתפקיד כללי?"],
              ["BOLA / IDOR", "גישה לא מורשית על ידי שינוי מזהה אובייקט.", "אם מחליפים projectId או submissionId, מה בדיוק עוצר גישה לנתון של אחר?"],
              ["Secrets Management", "אחסון, בקרה ורוטציה של סודות.", "איפה הסודות חיים, ואיך מוודאים שהם לא יגיעו ל-client או ל-git?"],
              ["Config vs Secret", "קונפיג משתנה בין סביבות; secret הוא רגיש.", "מה חייב להיות env var, מה צריך vault, ומה אסור להופיע בקוד?"],
              ["Observability", "לוגים, מדדים וטרייסים שמספרים מה קורה באמת.", "איך אני עוקב אחרי request עם correlation id אחד לאורך כל ה-flow?"],
              ["Prompt Injection", "קלט שמשפיע על המודל כאילו היה הוראה.", "איך מפרידים בין data של משתמש לבין הוראות מערכת?"],
              ["Insecure Output Handling", "שימוש בפלט מודל בלי ולידציה מספקת.", "איפה בודקים פלט מודל לפני שהוא נוגע ב-DB, ב-storage או בכלי רגיש?"],
              ["Deployment Strategy", "שיטת שחרור גרסה לפרודקשן.", "מה תוכנית ה-rollback ואיך מקטינים blast radius?"]
            ]
          },
          {
            type: "bullet-list",
            title: "מלכודות אבטחה שצריכות להפוך לרפלקס ניהולי",
            items: [
              "Broken Access Control: login לא שווה הרשאה נכונה לכל פעולה ואובייקט.",
              "BOLA/IDOR: שינוי id ב-URL או ב-body לא אמור לאפשר גישה לנתון של אחר.",
              "דליפת סודות דרך client, repo או logs: לא מספיק לומר 'זה בשרת' אם אין תהליך נכון.",
              "HTTPS/TLS הוא baseline לכל endpoint רגיש, לא nice to have.",
              "OAuth ו-SSO לא חוסכים תכנון; הם דורשים flow בטוח ומדויק.",
              "בעולם agentic יש גם prompt injection, excessive agency והפעלה לא מבוקרת של כלים."
            ]
          },
          {
            type: "card-grid",
            title: "שכבת תצפיתיות מינימלית שכדאי להכניס כבר עכשיו",
            columns: 3,
            items: [
              {
                eyebrow: "Observability",
                title: "Request / Correlation ID",
                body: "כל בקשה מקבלת מזהה שעובר ב-edge, בשרת, ב-worker וגם בקריאות לסוכן."
              },
              {
                eyebrow: "Observability",
                title: "Structured Logging",
                body: "לוגים בפורמט קבוע עם שדות שימושיים, כדי שאפשר יהיה לחפש, לסנן ולהוכיח."
              },
              {
                eyebrow: "Observability",
                title: "Traces בסיסיים",
                body: "לפחות spans בצד שרת כדי להבין זמן תגובה, זמן DB וזמני קריאות AI."
              }
            ]
          },
          {
            type: "card-grid",
            title: "עוד שלוש שכבות שחייבות להיכנס לראש כבר ביחידה 1",
            columns: 3,
            items: [
              {
                eyebrow: "Ops",
                title: "פריסה וסביבות",
                body: "dev, staging, prod, rollout, rollback, migrations ופיצ'ר-פלגים."
              },
              {
                eyebrow: "Infra",
                title: "גבולות תשתית",
                body: "מי חשוף מהאינטרנט, איפה יושב edge, ומה רץ ב-worker או בתור."
              },
              {
                eyebrow: "Agents",
                title: "משילות סוכנים",
                body: "אילו כלים מותר לסוכן להפעיל, איזה context הוא מקבל, ואיך מאמתים את הפלט שלו."
              }
            ]
          }
        ]
      },
      {
        id: "diagrams",
        label: "דיאגרמות",
        navShort: "דיאגרמות",
        kicker: "האיורים והזרימות",
        title: "ממרכיבים בדידים לאטלס ארכיטקטורות שאפשר באמת לעבוד איתו",
        description:
          "כאן הופכים את הרעיונות לאיורים ולחוזי זרימה. במקום לזכור רשימה של רכיבים, אתה רואה גבולות, משטחים ציבוריים, אזורי אחריות וחיי בקשה מקצה לקצה.",
        blocks: [
          {
            type: "zone-diagram",
            title: "דיאגרמת ארכיטקטורה: שישה אזורים שאתה צריך לראות על המסך",
            note:
              "המטרה כאן היא לראות trust boundaries ומשטחים ציבוריים במבט אחד. זאת כבר לא רק מפה של רכיבים, אלא מפה ניהולית של סיכונים, סמכויות וזרימות.",
            zones: [
              {
                label: "Client",
                items: ["User", "Browser / Frontend"]
              },
              {
                label: "Public Edge",
                items: ["CDN / Cache", "WAF / Rate Limit", "Reverse Proxy"]
              },
              {
                label: "App Zone",
                items: ["Backend API", "Auth / Session", "Queue", "Worker"]
              },
              {
                label: "Data Zone",
                items: ["SQL DB", "Object Storage", "Vector DB", "Cache"]
              },
              {
                label: "External Services",
                items: ["LLM Provider", "PDF Service", "Email / SMS"]
              },
              {
                label: "Observability",
                items: ["OTel SDK", "Collector", "Logs / Metrics / Traces"]
              }
            ]
          },
          {
            type: "code-block",
            eyebrow: "Mermaid Template",
            title: "קוד הדיאגרמה הארכיטקטונית",
            language: "mermaid",
            note:
              "קח את התבנית הזאת כבסיס, ואז החלף את השמות לשמות המודולים האמיתיים שלך. אם אתה לא יודע לאיזה אזור שייך רכיב מסוים, זאת כבר נורת אזהרה.",
            code: `graph LR
  subgraph C["Client (לא אמין)"]
    U[User] --> FE[Browser / Frontend]
  end

  subgraph E["Public Edge (משטח ציבורי)"]
    CDN[CDN/Cache] --> WAF[WAF / Rate Limit]
    WAF --> RP[Reverse Proxy / Load Balancer]
  end

  FE -->|HTTPS| CDN

  subgraph A["App Zone (שרתים/פונקציות)"]
    API[Backend API]
    AUTH[Auth / Session]
    WORKER[Background Worker]
    Q[Queue/Scheduler]
  end

  RP --> API
  API --> AUTH
  API --> Q
  Q --> WORKER

  subgraph D["Data Zone (נתונים)"]
    DB[(SQL DB)]
    ST[(Object Storage)]
    VDB[(Vector DB / Index)]
    CACHE[(Cache)]
  end

  API --> DB
  API --> ST
  API --> VDB
  API --> CACHE

  subgraph X["External Services (צד ג')"]
    LLM[LLM Provider]
    PDF[PDF Service]
    EMAIL[Email/SMS]
  end

  API --> LLM
  WORKER --> LLM
  WORKER --> PDF
  WORKER --> EMAIL

  subgraph O["Observability"]
    OTEL[OTel SDK/Instrumentation]
    COL[OTel Collector]
    OBS[Logs/Metrics/Traces Backend]
  end

  API --> OTEL --> COL --> OBS
  WORKER --> OTEL`
          },
          {
            type: "sequence",
            title: "Request lifecycle: החוזה הניהולי של endpoint אחד",
            items: [
              {
                step: "01",
                title: "Client request",
                description: "הבקשה מתחילה בלקוח לא אמין."
              },
              {
                step: "02",
                title: "Edge protections",
                description: "TLS termination ו-basic protections."
              },
              {
                step: "03",
                title: "Router / Controller",
                description: "השרת מכוון את הבקשה למסלול הנכון."
              },
              {
                step: "04",
                title: "Authentication",
                description: "אם אין זהות תקפה, אין מעבר הלאה."
              },
              {
                step: "05",
                title: "Authorization",
                description: "בודקים אם מותר לפעול על האובייקט הספציפי."
              },
              {
                step: "06",
                title: "Validation",
                description: "מנרמלים קלט ומחזירים 400 בטוח אם משהו שבור."
              },
              {
                step: "07",
                title: "Business logic",
                description: "כאן יושבים orchestration ו-rules."
              },
              {
                step: "08",
                title: "DB / Transaction",
                description: "אם יש כתיבה, היא נעשית עם constraints וגבולות."
              },
              {
                step: "09",
                title: "Need AI agent?",
                description: "אם כן, שולחים bounded context וכלים מוגבלים."
              },
              {
                step: "10",
                title: "Validate output",
                description: "לא סומכים עיוור על פלט מודל לפני שימוש אמיתי."
              },
              {
                step: "11",
                title: "Response + telemetry",
                description: "מחזירים תשובה עקבית עם logs, metrics ו-traces."
              }
            ]
          },
          {
            type: "code-block",
            eyebrow: "Mermaid Template",
            title: "קוד flowchart לחיי בקשה",
            language: "mermaid",
            note:
              "זאת תבנית מצוינת לכרטיס API. כל endpoint ציבורי חשוב אמור להיות מסוגל להיכנס למבנה הזה בלי אזורים אפורים.",
            code: `flowchart TD
  A[Client sends HTTPS request] --> B[Edge: TLS termination + basic protections]
  B --> C[Router/Controller]
  C --> D{Authentication}
  D -->|fail| E[401 / Redirect]
  D --> F{Authorization (object-level)}
  F -->|fail| G[403]
  F --> H[Input validation + normalization]
  H -->|fail| I[400 + safe error payload]
  H --> J[Business logic / orchestration]
  J --> K{Need DB write?}
  K -->|yes| L[Transaction / constraints]
  L --> M[Persist changes]
  K -->|no| N[Read-only query]
  M --> O{Need AI agent?}
  N --> O
  O -->|yes| P[Call agent with bounded context + tool limits]
  P --> Q[Validate / sanitize agent output]
  Q --> R[Persist result + audit event]
  O -->|no| S[Compose response]
  R --> S
  S --> T[Response + consistent errors]
  C --> U[Logs / metrics / traces with request-id]
  J --> U
  P --> U`
          }
        ]
      },
      {
        id: "exercises",
        label: "תרגילים וארטיפקטים",
        navShort: "תרגילים",
        kicker: "שבוע עבודה אמיתי",
        title: "היחידה הזאת צריכה לייצר ארטיפקטים, לא רק הרגשה שהבנת",
        description:
          "המטרה היא לצאת מהשבוע עם חבילה שאפשר לנהל מתוכה: דיאגרמות, כרטיס API, threat model, מפת משטחי נתונים ו-prompt איכותי לסוכן.",
        blocks: [
          {
            type: "card-grid",
            title: "תוצרי למידה מדידים לסוף השבוע",
            columns: 2,
            items: [
              {
                eyebrow: "Outcome",
                title: "דיאגרמת ארכיטקטורה מלאה",
                body: "כולל client, public edge, app zone, data zone, צד ג' ו-observability."
              },
              {
                eyebrow: "Outcome",
                title: "חוזה של זרימה אחת",
                body: "endpoint, schemas, auth, errors, logs ו-traces."
              },
              {
                eyebrow: "Outcome",
                title: "Mini Threat Model",
                body: "חמישה איומים אמיתיים עם הגנות ולא רק תחושת בטן."
              },
              {
                eyebrow: "Outcome",
                title: "מדיניות עבודה עם סוכן",
                body: "מה מותר לסוכן לראות, אילו כלים פתוחים לו ואיך בודקים את הפלט."
              }
            ]
          },
          {
            type: "table",
            title: "טבלת התרגילים של היחידה",
            columns: ["תרגיל", "מטרה", "Timebox", "תוצר צפוי", "איך בודקים הצלחה"],
            rows: [
              [
                "דיאגרמת ארכיטקטורה",
                "להפוך 'אני מבין' לשרטוט שאפשר לנהל מתוכו.",
                "60–90 דק'",
                "Mermaid + notes",
                "כל הרכיבים מסומנים, החצים נכונים ויש public surfaces."
              ],
              [
                "פירוק API flow",
                "לייצר חוזה מימוש אמיתי לפיצ'ר אחד.",
                "60–120 דק'",
                "API card עם schemas ושגיאות",
                "יש auth ברמת אובייקט, שגיאות עקביות ואין סודות בלקוח."
              ],
              [
                "Mini Threat Model",
                "למפות איומים לפני שהם הופכים לבאגי פרודקשן.",
                "45–75 דק'",
                "טבלת נכס/איום/וקטור/הגנה",
                "האיומים מחוברים לנכסים אמיתיים ולבקרות ברורות."
              ],
              [
                "מיפוי משטח נתונים",
                "להבין מי קורא וכותב לכל שכבת נתונים.",
                "60–90 דק'",
                "טבלת ישויות והרשאות",
                "PII, retention ו-least privilege מסומנים."
              ],
              [
                "Prompt לסוכן",
                "להפוך הבנה ניהולית לבריף ביצועי טוב.",
                "30–60 דק'",
                "Prompt מלא + Definition of Done",
                "הסוכן נדרש ל-analysis, security, tests ו-rollback."
              ]
            ]
          },
          {
            type: "card-grid",
            title: "פירוט תרגילים ורובריקה מהירה",
            columns: 2,
            items: [
              {
                eyebrow: "Exercise 1",
                title: "דיאגרמת ארכיטקטורה עם גבולות",
                body: "ממלאים את התבנית עם שמות המודולים שלך ומסמנים מה ציבורי, מה פנימי, איפה יש סודות ואיפה נשמר PII.",
                footnote: "Excellent: יש גם 'מה אסור לעשות' לכל שכבה."
              },
              {
                eyebrow: "Exercise 2",
                title: "פירוק זרימת API",
                body: "בוחרים פעולה אחת ומפרקים method, path, schemas, authn, authz, validation, observability ו-error modes.",
                footnote: "Strong: יש object-level auth והבחנה בין 401 / 403 / 400."
              },
              {
                eyebrow: "Exercise 3",
                title: "Mini Threat Model",
                body: "לכל איום יש נכס, וקטור, השפעה והגנה. לא כותבים 'האקר יפרוץ' אלא תרחיש ספציפי.",
                footnote: "Excellent: יש גם איום agentic כמו prompt injection."
              },
              {
                eyebrow: "Exercise 4",
                title: "מיפוי משטח נתונים",
                body: "ממפים SQL, storage ו-vector DB עם מי קורא, מי כותב, מה רגיש ומה מדיניות השמירה.",
                footnote: "Strong: מסומן PII, retention ומי רשאי לגשת."
              },
              {
                eyebrow: "Exercise 5",
                title: "Prompt לסוכן",
                body: "כותבים בריף שמכריח analysis לפני code, security checks, test plan ו-rollback notes.",
                footnote: "Excellent: יש גם הגנות LLM אם הפיצ'ר מערב מודל."
              }
            ]
          }
        ]
      },
      {
        id: "checklists",
        label: "צ'קליסטים",
        navShort: "צ'קליסטים",
        kicker: "מערכת ניהול",
        title: "הצ'קליסטים שהופכים את יחידה 1 לספר ניהול של צוות, לא רק יחידת לימוד",
        description:
          "כאן יחידה 1 מפסיקה להיות חומר קריאה ומתחילה להיות מערכת בדיקה. אלה הטבלאות שאתה משתמש בהן מול כל סוכן, מפתח ופיצ'ר חדש.",
        blocks: [
          {
            type: "table",
            title: "Onboarding checklist לסוכן או מפתח חדש",
            columns: ["נושא", "מה חייב להיות ברור ביום הראשון", "ארטיפקט"],
            rows: [
              ["מפת מערכת", "מי מדבר עם מי ומה public.", "דיאגרמת Unit 1"],
              ["כללי אמון", "client לא אמין, server source of truth ו-data boundaries.", "architecture-notes.md"],
              ["הרשאות", "איך נראים roles ומהי בדיקת authz ברמת אובייקט.", "authz-notes.md"],
              ["סודות", "איפה secrets מנוהלים ומה אסור להכניס לקוד או ללוגים.", "secrets.md"],
              ["תצפיתיות", "איך מוצאים request-id ואיפה רואים לוגים ו-traces.", "observability.md"],
              ["תהליך עבודה", "branching, PR template ו-Definition of Done.", "CONTRIBUTING.md"],
              ["גבולות סוכן", "אילו כלים מותר או אסור, ומה דורש human-in-the-loop.", "agent-governance.md"]
            ]
          },
          {
            type: "table",
            title: "Security checklist ל-public endpoints",
            columns: ["בדיקה", "למה זה חובה", "סימן שהכול תקין"],
            rows: [
              ["AuthN ברור", "בלי זה אין זהות אמינה.", "401 עקבי ואין fallback מוזר."],
              ["AuthZ אובייקט-לבל", "מונע BOLA / IDOR.", "אי אפשר לגשת ל-id של משתמש אחר."],
              ["HTTPS בלבד", "מגן על tokens, sessions ומפתחות בדרך.", "כל הגישה הרגישה עוברת ב-HTTPS."],
              ["ולידציה בשרת", "client לא אמין גם אם ה-UX טוב.", "יש schema checks ו-400 בטוח."],
              ["Rate limiting", "public endpoints ייסרקו ויותקפו.", "יש מדיניות, לוגים ו-alerts."],
              ["סודות לא נחשפים", "דליפה ב-client או בלוגים שוברת את כל ההגנות.", "secret נשמר ב-env או vault עם redaction."],
              ["שגיאות לא מדליפות מידע", "stack traces ו-SQL errors הם מודיעין לתוקף.", "הודעות כלליות + correlation id."],
              ["Audit events", "בלי trail אי אפשר לחקור פעולות רגישות.", "יש events כמו grade_updated או certificate_issued."]
            ]
          },
          {
            type: "table",
            title: "Production-readiness checklist לפיצ'ר",
            columns: ["תחום", "שאלה תפעולית", "תוצר נדרש"],
            rows: [
              ["קונפיג וסודות", "מה משתנה בין dev, staging ו-prod?", "env vars + secrets plan"],
              ["פריסה", "איך משחררים בבטחה ומה תוכנית ה-rollback?", "strategy + rollback notes"],
              ["DB changes", "יש מיגרציה והאם היא תואמת אחורה?", "migration plan"],
              ["Observability", "איך נדע אם משהו נשבר מיד אחרי שחרור?", "dashboard או queries ו-alert rules"],
              ["אבטחה", "אילו משטחים ציבוריים חדשים נפתחו?", "security review קצר"],
              ["בדיקות", "מה ה-golden path ומה ה-edge cases?", "test plan + manual checklist"],
              ["עלות וביצועים", "האם הקריאות ל-AI או storage עומדות בתקציב?", "budget + throttling"]
            ]
          }
        ]
      },
      {
        id: "templates",
        label: "תבניות עבודה",
        navShort: "תבניות",
        kicker: "ספר הפרומפטים",
        title: "הופכים את יחידה 1 לספר הפעלה מול סוכנים ומפתחים",
        description:
          "המטרה כאן היא לא לזכור איך מנסחים, אלא לעבוד עם תבניות קבועות. זה הקיצור שלך מבלגן לפרקטיקה ניהולית עקבית.",
        blocks: [
          {
            type: "table",
            title: "מתי משתמשים במה",
            columns: ["תבנית", "מתי משתמשים", "מה נכנס", "מה יוצא"],
            rows: [
              ["Feature Spec", "פיצ'ר חדש או שינוי מהותי", "מטרות, flows, data, risks", "design + plan + tasks"],
              ["Bug Investigation", "תקלה או רגרסיה", "סימפטומים, שחזור, ראיות", "root cause + fix + tests"],
              ["PR Review", "לפני merge", "diff, קונטקסט, checklist", "הערות, סיכונים, approve או block"],
              ["Security Review", "כל public surface או AI tool", "flow, assets, data, threats", "mitigations ו-must-fix list"]
            ]
          },
          {
            type: "code-block",
            eyebrow: "Template 1",
            title: "Feature Spec",
            language: "text",
            note:
              "זאת התבנית לפיצ'ר חדש. היא מכריחה אותך לחשוב על שכבות, אבטחה, AI, rollout ו-DoD עוד לפני שנכתבה שורת קוד אחת.",
            code: `[Feature Spec] <שם הפיצ'ר>

קונטקסט:
- מה המצב היום? מה הכאב?
- מי המשתמשים המושפעים?

מטרה:
- מה התוצאה המדידה שנרצה?

לא-מטרות:
- מה במפורש לא עושים עכשיו?

User Flows:
1) ...
2) ...

ארכיטקטורה ושכבות:
- Frontend:
- Backend:
- Data:
- External:
- Observability:

אבטחה:
- AuthN:
- AuthZ:
- Rate limiting:
- Secrets:

Agent / AI:
- למה צריך סוכן?
- איזה context הוא מקבל?
- אילו כלים מותר או אסור?
- איך מאמתים פלט?

Test Plan:
- Golden path:
- Edge cases:
- Security cases:

Rollout:
- Feature flag?
- Rollback plan:
- DB migration order:

Definition of Done:
- ...`
          },
          {
            type: "code-block",
            eyebrow: "Template 2",
            title: "Bug Investigation",
            language: "text",
            note:
              "הבריף הזה מכריח חקירה על בסיס ראיות. בלי request-id, network ו-DB snapshot אין חקירה, יש השערות.",
            code: `[Bug Investigation] <כותרת קצרה>

סימפטום:
- מה המשתמש רואה?

צעדי שחזור:
1) ...
2) ...

Expected / Actual:
- Expected:
- Actual:

היקף:
- מי מושפע? באיזו סביבה?

ראיות:
- Network:
- Logs:
- DB snapshot:
- שינויים אחרונים:

היפותזות:
1) ...
2) ...

Root Cause:
- מה בדיוק נשבר ולמה?

Fix Plan:
- שינוי מינימלי:
- בדיקה מונעת:
- סיכון לרגרסיה:

Observability:
- איזה לוג או מדד נוסיף?`
          },
          {
            type: "code-block",
            eyebrow: "Template 3",
            title: "PR Review",
            language: "text",
            note:
              "הרעיון כאן הוא לעבור מ'נראה טוב' לשיפוט מקצועי: scope, מיקום לוגיקה עסקית, סיכוני אבטחה, תצפיתיות ובדיקות.",
            code: `[PR Review] <קישור או תיאור ה-PR>

סיכום:
- מה ה-PR משנה?

בדיקות תוכן:
- האם השינוי ממוקד או רחב מדי?
- האם הלוגיקה העסקית יושבת בשרת?

אבטחה:
- האם יש authz ברמת אובייקט בכל מקום שיש id?
- האם נוספו סודות לקוד או ללוגים?
- האם נפתח public endpoint בלי rate limiting?

אמינות ותחזוקה:
- טיפול שגיאות עקבי?
- יש logs, metrics או traces סביב חלקים כבדים?
- יש טסטים או בדיקות ידניות מתועדות?

המלצה:
- APPROVE / REQUEST CHANGES / BLOCK
- 3 הסיכונים הכי גדולים:
- 3 פעולות תיקון הכי חשובות:`
          },
          {
            type: "code-block",
            eyebrow: "Template 4",
            title: "Security Review",
            language: "text",
            note:
              "זאת התבנית לכל public surface חדש או לכל פיצ'ר עם AI וכלים. היא שומרת את השיחה סביב assets, threats ו-mitigations.",
            code: `[Security Review] <שם הפיצ'ר או הזרימה>

תיאור הזרימה:
- מי המשתמש?
- אילו endpoints נפתחים או משתנים?
- אילו נתונים נשמרים או נשלפים?

Assets:
- ...

Top 5 threats:
1) ...

Mitigations:
- ...

API:
- BOLA / IDOR:
- Rate limiting:
- Error handling:

Storage:
- public או private?
- signed URLs?
- הרשאות קריאה וכתיבה?

Secrets:
- איפה נשמרים?
- איך עושים בקרה ורוטציה?

AI / Agents:
- Prompt injection:
- Output validation:
- Tool permissions:

Findings:
- Must-fix:
- Should-fix:
- Accepted risks:`
          }
        ]
      },
      {
        id: "quiz",
        label: "מבדק הבנה",
        navShort: "בוחן",
        kicker: "שיפוט במקום זיכרון",
        title: "האם הסוכן בנה פתרון קביל ליצירת תעודת PDF?",
        description:
          "המבדק הזה נשאר בכוונה, אבל עכשיו הוא מחובר לכל השכבות שהוספנו: access control, secrets, storage policy, signed URLs ו-observability.",
        blocks: [
          {
            type: "scenario-quiz",
            scenarioTitle: "תרחיש",
            prompt:
              "סוכן פיתוח מציע שה-frontend של התלמיד יפנה ישירות לשירות PDF, ישמור את הקובץ ב-storage, ואז יעדכן את מסד הנתונים שהתעודה נוצרה.",
            question:
              "מה מסוכן בפתרון הזה, ואיך היית מחזיר לסוכן בריף מתוקן שמכבד trust boundaries ו-public surfaces?",
            revealLabel: "לחשוף את הניתוח המלא",
            answerTitle: "למה הפתרון הזה נופל בביקורת ארכיטקטונית",
            answer: [
              "הדפדפן לא אמור להיות source of truth מול storage או DB, כי הוא סביבה לא אמינה.",
              "אם שירות ה-PDF מופעל ישירות מהלקוח, יש סיכון שהמפתח או הטוקן של השירות ייחשפו.",
              "אין כאן authz ברמת אובייקט: מי בודק שהתלמיד באמת זכאי לתעודה המסוימת הזאת?",
              "אין storage policy מסודרת, signed URL קצר-חיים או שליטה על public מול private.",
              "אין audit event, request-id או trace שיאפשרו לבדוק מי יצר תעודה ומתי."
            ],
            correctionTitle: "הבריף המתוקן לסוכן",
            correction:
              "ה-frontend שולח לשרת בקשת API קטנה בלבד. השרת מאמת שהמשתמש מחובר ושזכאי לתעודה, מפעיל worker או שירות PDF עם מפתח שנשמר רק בשרת, שומר את הקובץ ב-storage פרטי, מייצר signed URL קצר-חיים ומחזיר אותו ללקוח. בנוסף נרשמים audit event ולוגים עם request-id."
          }
        ]
      }
    ]
  };

  const authoredUnitPages = {
    "world-map": worldMapPage
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
              "המבנה קיים: ניווט, עיצוב, חלוקה לחלקים ועמוד ייעודי. כשנעלה את החומר של היחידה דרך הקוד, הוא יופיע כאן בצורה מלאה."
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
