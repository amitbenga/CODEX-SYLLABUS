# CODEX-SYLLABUS

שער למידה אינטראקטיבי למסלול `Technical Product Builder` / `AI-Native Full-Stack Product Lead`.

הפרויקט הוא סביבת למידה מקומית לקורס בן 17 שבועות ו-15 יחידות: Hero מינימלי עם המשך למידה ו-dropdown סילבוס, עמודי יחידה נפרדים, מעקב התקדמות ב-`localStorage`, Build Log אישי שמור לעבודה עתידית, וחיבור ניסיוני ל-21ST עבור השראה מטמפלייטים עיצוביים.

הקייס המתגלגל של הקורס הוא מערכת ניהול לידים, פגישות וידע למטפלים, בדגש על לקוחה שהיא נטורופתית ורפלקסולוגית. כל יחידה אמורה בסוף להתחבר לאותה מערכת: איסוף לידים, תיאום פגישות, תיעוד ידע מקצועי, ובהמשך הוספת דאטה ותובנות.

## מצב התוכן

| אזור | מצב |
|---|---|
| סילבוס מלא | קיים ב-`app.js` לכל 15 היחידות |
| יחידות עומק מלאות | שבוע 1, שבוע 2, שבועות 3-4 ושבוע 7 |
| יחידות בשלד | שבועות 5-6 ושבועות 8-17 |
| דוח רלוונטיות ותוכנית עבודה | `codex.md` |

יחידות שלא נכתבו עדיין מקבלות עמוד גנרי דרך `unit-pages-data.js`, כדי שהניווט, ההתקדמות והמבנה יעבדו לפני השלמת כל התוכן.

## ארכיטקטורת הממשק

### עמוד הבית (`index.html`)

עמוד הבית כרגע מכוון לחוויית כניסה מינימלית:

- Hero מלא-מסך עם כותרת, תקציר והתקדמות.
- כפתור "המשך ללמוד" שמוביל ליחידה הבאה שלא הושלמה.
- Dropdown סילבוס שמציג את כל היחידות, הסבר קצר לכל יחידה, והאם היא יחידת עומק או שלד להשלמה.
- 21ST Design Lab ככלי עזר להשראה מטמפלייטים.

סקציות הדאשבורד המלאות עדיין קיימות ב-DOM לפיתוח עתידי, אבל הן מוסתרות כדי שהבית לא יעמיס לפני שהתוכן המלא מוכן.

### עמוד יחידה (`unit-page.html`)

עמוד עצמאי לכל יחידה. יחידות מלאות יכולות להכיל Deep Dive ארוך ומותאם נושא; יחידות בשלד מקבלות 5 חלקים בסיסיים:

| חלק | תפקיד |
|---|---|
| פתיח | תמונת מצב ולמה היחידה חשובה |
| מפת מושגים | שפה משותפת ומונחים |
| זרימה | איך הנושא מתורגם לשכבות ו-flows |
| תוצר | מה צריך להפיק מהיחידה |
| בוחן | בדיקת הבנה תרחישית |

כפתור "סיימתי את היחידה" מסמן התקדמות ב-`localStorage` ומעביר ליחידה הבאה לפי סדר הקורס.

## מבנה הקבצים

```text
index.html          - Hero מינימלי, dropdown סילבוס וסקציות dashboard מוסתרות
styles.css          - עיצוב עמוד הבית
app.js              - סילבוס, רנדרינג, state management ו-21ST Design Lab
unit-page.html      - תבנית עמוד יחידה
unit-page.css       - עיצוב עמוד יחידה
unit-page.js        - לוגיקת עמוד יחידה ומנגנון השלמה
unit-pages-data.js  - קטלוג עמודי היחידה והתוכן המלא לשבועות 1-2, שבועות 3-4 ושבוע 7
server.js           - שרת סטטי מקומי ו-proxy ניסיוני ל-21ST API
wrangler.jsonc      - הגדרות Cloudflare Workers Static Assets
components/ui/      - קומפוננטות React עתידיות, לא מחוברות כרגע לאפליקציה
codex.md            - דוח מחקר, מצב תוכן ותוכנית שיפוץ יסודות
```

## שמירת נתונים

| מפתח `localStorage` | תוכן |
|---|---|
| `builder-course-unit-progress-v1` | אילו יחידות הושלמו `{ unitId: true }` |
| `builder-course-selected-unit-v1` | יחידה נבחרת נוכחית |
| `builder-course-stages-v1` | Build Log אישי |
| `builder-course-selected-lesson-v1` | עמוד למידה פעיל |
| `builder-course-design-lab-session-v1` | `sandboxId`, `threadId` ו-session של 21ST Design Lab |

## הרצה מקומית

פתיחה ישירה בדפדפן:

```bash
open index.html
```

או דרך השרת המקומי, נדרש ל-21ST Design Lab:

```bash
node server.js 4173
# http://127.0.0.1:4173
```

## 21ST Design Lab

החיבור ל-21ST אינו חלק מתוכן הסוכנים של הקורס. הוא כלי עזר עיצובי: המטרה היא לשלוח בריף ל-21ST כדי לקבל השראה מכיווני עיצוב וטמפלייטים, ואז להשתמש בזה כדי לכוון את סוכן הקוד לעיצוב טוב יותר.

ה-21ST Design drawer שולח הודעות ל-21ST דרך `server.js`, כדי שהדפדפן לא יחזיק API key. השרת תומך ב:

- בדיקת חיבור דרך `/api/an/status`.
- יצירת sandbox חדש אם עוד אין `sandboxId`.
- המשך שיחה קיימת דרך `sandboxId` ו-`threadId` שנשמרים ב-`localStorage`.
- קריאת SSE מ-`https://relay.an.dev/v1/chat/:slug` והחזרת טקסט, metadata ו-session לדפדפן.

הגדרה מקומית:

```bash
# אחת משתי הצורות נתמכת
AN_API_KEY=your_21st_key_here
API_KEY_21ST=your_21st_key_here

# אופציונלי
AN_AGENT_SLUG=your-design-slug
```

## פריסה ל-Cloudflare

הפרויקט מוגדר כ-Cloudflare Workers Static Assets דרך `wrangler.jsonc`.

פריסה ראשונה:

```bash
npx wrangler deploy
```

העלאת גרסה ללא העברה מיידית של traffic:

```bash
npx wrangler versions upload
```

לאחר `versions upload`, יש לפרוס את הגרסה דרך Cloudflare dashboard או `wrangler versions deploy`.

## טכנולוגיה

נוכחית:

- HTML5 + CSS3 + Vanilla JS, ללא build step.
- Node.js static server לפיתוח מקומי ול-proxy ניסיוני של 21ST.
- Cloudflare Workers Static Assets לפריסה.
- `localStorage` לכל state המשתמש.

מוכן לעתיד אך לא מחובר כרגע:

- React / Next.js דרך `components/ui/`.
- TypeScript, Tailwind CSS, shadcn/ui.
