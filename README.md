# CODEX-SYLLABUS

Dashboard אינטראקטיבי למסלול `Technical Product Builder` – אפליקציית למידה מבוססת עמודי יחידה נפרדים, עם hero מלא-מסך, מעקב התקדמות, ואינטגרציה ל-21ST Agents.

## ארכיטקטורת הממשק

### עמוד הבית (`index.html`)
Hero מלא-מסך עם אנימציית shader (מטאורים) כרקע. כל התוכן מרוכז ומוצג על מסך אחד:

- **כותרת** – Secular One, 2 שורות, מרוכז
- **פס סטטיסטיקות** – 16 שבועות / 14 יחידות / X הושלמו (חי מה-localStorage)
- **כפתור "המשך ללמוד"** – מנתב אוטומטית ליחידה הבאה הלא-מושלמת
- **"איך ללמוד כל שבוע"** – רשת שלבי הלמידה השבועית

כל הסקציות הנוספות (סילבוס, ציר זמן, Build Log) קיימות ב-DOM אך מוסתרות – נגישות דרך ה-AI drawer או פיתוח עתידי.

### עמוד יחידה (`unit-page.html`)
עמוד עצמאי לכל יחידה, עם ניווט בין 8 חלקי תוכן:

| חלק | תוכן |
|-----|------|
| Overview | סקירה כללית |
| Goals | מטרות השבוע |
| Topics | נושאים מרכזיים |
| Deliverable | תוצר שבועי |
| Exercise | תרגיל מרכזי |
| Understanding Test | מבחן הבנה |
| Management Lens | זווית ניהולית |
| Red Flags | דגלים אדומים |

**כפתור "סיימתי את היחידה"** – מסמן השלמה ב-localStorage ומעביר אוטומטית ליחידה הבאה.

## מבנה הקבצים

```
index.html          – Hero + מבנה אפליקציה
styles.css          – שכבת עיצוב מלאה (4,200+ שורות)
app.js              – נתוני הסילבוס, רנדרינג, state management
unit-page.html      – תבנית עמוד יחידה
unit-page.css       – עיצוב עמוד יחידה
unit-page.js        – לוגיקת עמוד יחידה + מנגנון השלמה
unit-pages-data.js  – קטלוג תוכן כל היחידות (85KB)
server.js           – שרת סטטי מקומי + proxy ל-21ST API
wrangler.jsonc      – הגדרות Cloudflare Workers (static assets)
components/ui/      – קומפוננטות React עתידיות
```

## שמירת נתונים (localStorage)

| מפתח | תוכן |
|------|------|
| `builder-course-unit-progress-v1` | אילו יחידות הושלמו `{ unitId: true }` |
| `builder-course-selected-unit-v1` | יחידה נבחרת נוכחית |
| `builder-course-stages-v1` | Build Log אישי |
| `builder-course-selected-lesson-v1` | עמוד למידה פעיל |

## הרצה מקומית

פתיחה ישירה בדפדפן:
```bash
open index.html
```

או דרך השרת המקומי (נדרש לאינטגרציית 21ST):
```bash
node server.js 4173
# http://127.0.0.1:4173
```

## פריסה ל-Cloudflare

הפרויקט מוגדר כ-static assets דרך `wrangler.jsonc`:
```bash
npx wrangler versions upload
```

Cloudflare מגיש את כל קבצי ה-HTML/CSS/JS ישירות ללא build step.

## אינטגרציית 21ST Agents

כפתור AI (פינת המסך) פותח drawer עם טופס שליחה ל-21ST Agents API. המפתח (`AN_API_KEY`) נשמר בשרת המקומי בלבד – הדפדפן שולח רק את ה-slug והפרומפט.

הגדרה מקומית: צור `.env.local` עם:
```
AN_API_KEY=your_key_here
```

## טכנולוגיה

**נוכחית:**
- HTML5 + CSS3 + Vanilla JS (ללא build step)
- Cloudflare Workers (static assets)
- localStorage לכל ה-state

**לא בשימוש (מוכן לעתיד):**
- React / Next.js – `components/ui/` מוכן
- TypeScript, Tailwind CSS, shadcn/ui
