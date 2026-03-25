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
    heroEyebrow: "יחידה 1 · Deep Dive",
    title: "מפת העולם השלמה של האפליקציה שלך",
    subtitle:
      "הבסיס הארכיטקטוני של המסלול: להבין מי מדבר עם מי, איפה נשמרים דברים, ולמה ה-client לעולם לא מנהל את העסק לבד.",
    quickFacts: [
      { value: "5", label: "שכבות ליבה" },
      { value: "1", label: "אנלוגיית מסעדה" },
      { value: "1", label: "בוחן תרחיש" }
    ],
    parts: [
      {
        id: "overview",
        label: "פתיח",
        navShort: "פתיח",
        kicker: "למה זה חשוב",
        title: "הבסיס שיקבע איך תוביל כל פיצ'ר וכל סוכן",
        description:
          "יחידה 1 נועדה לבנות לך תמונת עולם יציבה. אם המפה הזאת ברורה, הרבה טעויות ארכיטקטורה יפסיקו להיראות סבירות.",
        blocks: [
          {
            type: "lead",
            eyebrow: "מטרת העל",
            title: "להבין איך המערכת שלך עובדת מתחת למכסה המנוע",
            text: [
              "המטרה שלך כאן היא לא להיות מפתח backend מומחה, אלא להבין את מבנה הכוחות במערכת: מי מציג, מי מאשר, מי שומר, ומי לא אמור לדעת דברים רגישים בכלל.",
              "במילים אחרות, זאת היחידה שתלמד אותך לזהות אם פתרון 'עובד' במקרה, או אם הוא באמת בנוי נכון."
            ]
          },
          {
            type: "bullet-list",
            title: "בסוף היחידה הזאת אתה אמור לדעת",
            items: [
              "להבחין בין frontend, backend, database, storage ו-agents בלי לערבב ביניהם.",
              "להבין למה השרת הוא הגבול שבו יושבים security, permissions והלוגיקה העסקית.",
              "לזהות מתי פתרון של סוכן דוחף סמכות למקום הלא נכון רק כי זה נוח למימוש.",
              "להסביר flow אמיתי במוצר שלך בשפה פשוטה ומדויקת."
            ]
          },
          {
            type: "callout",
            tone: "warm",
            title: "המסר הניהולי",
            text:
              "אתה לא לומד כאן 'עוד קצת קוד'. אתה לומד איך להחזיק מפה מנטלית שתאפשר לך להנחות מפתחים וסוכנים בלי ליפול על שטויות יקרות."
          }
        ]
      },
      {
        id: "restaurant",
        label: "אנלוגיית המסעדה",
        navShort: "המסעדה",
        kicker: "אנלוגיה שלא תשכח",
        title: "אם אתה מבין את המסעדה, אתה מבין את המערכת",
        description:
          "הדרך הכי טובה לזכור ארכיטקטורה היא לא דרך הגדרות מופשטות, אלא דרך תפקידים ברורים. כל שכבה במסעדה עושה עבודה אחת, ולא חוטפת עבודה של שכבה אחרת.",
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
                  "הקליינט מציג מידע, מקבל אינפוטים ולוחץ על כפתורים. הוא יכול לרשום הזמנה, אבל הוא לא מבשל, לא קובע מחירים ולא מאשר הרשאות.",
                risk:
                  "אם תיתן ל-client לחשב ציון, לאכוף הרשאות או להשתמש בסוד API, המשתמש יכול לשנות את הכללים בעצמו."
              },
              {
                tag: "Backend",
                title: "מנהל המסעדה והשף",
                caption: "Anti-Gravity והלוגיקה העסקית",
                body:
                  "השרת מקבל את הבקשה, בודק אם היא חוקית, מפעיל את החוקים העסקיים ורק אז פונה ל-DB, ל-storage או לסוכן חיצוני.",
                risk:
                  "אם השרת לא משמש כשומר הסף, כל המערכת הופכת לאוסף קיצורי דרך לא מאובטחים."
              },
              {
                tag: "Data",
                title: "המזווה, המקרר והמחסן",
                caption: "SQL, storage ו-vector DB",
                body:
                  "מסד הנתונים שומר עובדות מסודרות, storage שומר קבצים גדולים, ו-vector DB שומר משמעות כדי שאפשר יהיה לשלוף הקשר ל-AI.",
                risk:
                  "אם מערבבים ביניהם, מתחילים לשכפל מידע, לאבד עקביות או לחשוף קבצים במקום הלא נכון."
              },
              {
                tag: "API",
                title: "פתק ההזמנה",
                caption: "השפה הסטנדרטית בין שכבות",
                body:
                  "ה-API הוא הדרך שבה המלצר מעביר מטלה למטבח בפורמט ברור. בלי פתק מסודר אין שפה משותפת בין ה-client לשרת.",
                risk:
                  "API רופף בלי ולידציה ובלי חוזה ברור גורם לבאגים שקשה להבין איפה הם התחילו."
              },
              {
                tag: "AI Agents",
                title: "היועצים החיצוניים",
                caption: "Claude, Codex וסוכני מומחה",
                body:
                  "הסוכן לא יושב במקום השרת אלא מאחורי השרת. הוא מקבל הקשר, מבצע ניתוח ומחזיר תוצאה, אבל השרת מחליט אם מותר ואיך שומרים.",
                risk:
                  "אם הסוכן מדבר ישירות עם העולם בלי תיווך, אתה מאבד שליטה על auth, audit ו-data flow."
              }
            ]
          },
          {
            type: "callout",
            tone: "quiet",
            title: "כלל אצבע לזיכרון",
            text:
              "המלצר לא מבשל, השף לא מגיש, והלקוח לא נכנס למחסן. ברגע שאתה זוכר את זה, קל יותר לזהות איפה פתרון של סוכן מפר את הגבולות."
          }
        ]
      },
      {
        id: "system-map",
        label: "מפת המערכת",
        navShort: "מפה",
        kicker: "האיור הארכיטקטוני",
        title: "ככה החלקים באמת מתחברים במוצר שלך",
        description:
          "המערכת שאתה בונה היא שרשרת אחריות. לכל חוליה יש אחריות, גבול אמון וכלי עבודה משלה.",
        blocks: [
          {
            type: "stack-map",
            title: "מפת שכבות",
            layers: [
              {
                name: "תלמיד / משתמש",
                note: "מקליד, לוחץ, צורך תוכן ומקבל פידבק.",
                chips: ["Input", "UI actions", "Expectations"]
              },
              {
                name: "Frontend בדפדפן",
                note: "מציג UI, אוסף קלט ושולח בקשות לשרת.",
                chips: ["React / HTML", "State", "Forms"]
              },
              {
                name: "Backend / Anti-Gravity",
                note: "מאמת זהות והרשאות, מפעיל business rules ומתווך לכל שירות אחר.",
                chips: ["Auth", "Validation", "Business logic"]
              },
              {
                name: "DB + Storage + Vector DB",
                note: "אחסון עובדות, קבצים והקשר סמנטי לזרימות AI.",
                chips: ["SQL", "Files", "Retrieval"]
              },
              {
                name: "Agents / APIs חיצוניים",
                note: "סוכנים ושירותים חיצוניים שמבצעים מומחיות ספציפית דרך השרת.",
                chips: ["Claude", "Codex", "PDF / AI tools"]
              }
            ]
          },
          {
            type: "tool-grid",
            title: "הכלים שלך בתוך התמונה",
            items: [
              {
                title: "VS Code",
                body:
                  "הקוקפיט שלך. כאן אתה קורא קוד, בודק דיפים, משווה שכבות ומנסח הנחיות מדויקות."
              },
              {
                title: "Anti-Gravity",
                body:
                  "שכבת השרת בפועל. כאן שומרים סודות, עושים auth, מריצים לוגיקה עסקית ומדברים עם שירותים חיצוניים."
              },
              {
                title: "Claude / Codex",
                body:
                  "הסוכנים שלך. הם לא הארכיטקטורה עצמה, אלא כוח עבודה שמקבל בריף, הקשר ומגבלות ממך."
              }
            ]
          }
        ]
      },
      {
        id: "system-flow",
        label: "זרימת הגשת מטלה",
        navShort: "זרימה",
        kicker: "מה קורה בפועל",
        title: "תרחיש מלא: תלמיד מגיש מטלת קוד",
        description:
          "הדרך הכי טובה להבין ארכיטקטורה היא ללכת אחרי בקשה אחת מההתחלה ועד הסוף ולראות איפה כל שכבה נכנסת לעבודה.",
        blocks: [
          {
            type: "sequence",
            title: "שש תחנות בזרימה אחת",
            items: [
              {
                step: "01",
                title: "האינטראקציה",
                body: "התלמיד כותב תשובה ולוחץ על כפתור הגשה."
              },
              {
                step: "02",
                title: "פתק ההזמנה",
                body: "ה-frontend שולח POST לשרת עם payload ברור של התשובה."
              },
              {
                step: "03",
                title: "אבטחה ולוגיקה",
                body: "השרת בודק auth, הרשאות, והאם יש כבר הגשה קודמת."
              },
              {
                step: "04",
                title: "פנייה לסוכן",
                body: "השרת שולח לסוכן את הפרומפט הסודי ואת קוד התלמיד לבדיקה."
              },
              {
                step: "05",
                title: "שמירה",
                body: "הציון והמשוב נשמרים ב-DB בצורה מבוקרת."
              },
              {
                step: "06",
                title: "חזרה למשתמש",
                body: "השרת מחזיר תוצאה, והקליינט רק מציג אותה יפה."
              }
            ]
          },
          {
            type: "callout",
            tone: "info",
            title: "שורת מחץ לזכור",
            text:
              "הקליינט מציג. השרת מחליט. ה-DB זוכר. הסוכן מייעץ. ברגע שהתפקידים האלה מתערבבים, המערכת מתחילה להירקב."
          }
        ]
      },
      {
        id: "quiz",
        label: "מבדק הבנה",
        navShort: "בוחן",
        kicker: "תרחיש לשיפוט",
        title: "האם הסוכן בנה פתרון קביל ליצירת תעודת PDF?",
        description:
          "זה הרגע שבו אתה מפסיק לשאול 'האם זה עובד?' ומתחיל לשאול 'האם זה בטוח, נכון ותחזוקתי?'.",
        blocks: [
          {
            type: "scenario-quiz",
            scenarioTitle: "תרחיש",
            prompt:
              "סוכן פיתוח בנה פיצ'ר שבו ה-frontend של התלמיד פונה ישירות לשירות יצירת PDF, שומר את הקובץ ב-storage ציבורי ואז מעדכן את מסד הנתונים שהתעודה נוצרה.",
            question:
              "האם זה קביל? אילו בעיות ארכיטקטורה וסיכונים יש כאן, ואיך היית מנסח לסוכן את התיקון?",
            revealLabel: "לחשוף את הניתוח המלא",
            answerTitle: "למה הפתרון הזה בעייתי",
            answer: [
              "הדפדפן לא אמור לדבר ישירות עם storage ו-DB כאילו הוא מקור סמכות. זה פותח דלת לזיוף תעודות, שינוי ציונים או מחיקה.",
              "המפתח הסודי של שירות ה-PDF עלול לזלוג ל-client ולהיחשף דרך DevTools.",
              "אין שכבת שרת שבודקת אם התלמיד באמת סיים את הקורס ומותר לו לקבל תעודה.",
              "אין מסלול audit מסודר שמאפשר להבין מי יצר מה ומתי."
            ],
            correctionTitle: "הבריף המתוקן לסוכן",
            correction:
              "ה-frontend רק שולח בקשת API קטנה לשרת. השרת מאמת שהתלמיד זכאי, פונה לשירות ה-PDF עם הסוד שיושב רק בשרת, שומר את הקובץ ב-storage מאובטח ומחזיר למשתמש קישור מאובטח להורדה."
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
        description: `${part.teaser} כרגע העמוד הזה הוא מסגרת מוכנה ליחידה, ובשלב הבא נטמיע כאן את החומר המלא ממש כמו ביחידה 1.`,
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
