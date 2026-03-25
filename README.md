# CODEX-SYLLABUS

Dashboard אינטראקטיבי למסלול `Technical Product Builder`, עם עמוד נחיתה ויזואלי, סילבוס של 16 שבועות, ניווט בין יחידות, מרחב שלבים אישי, ותשתית לעמודי למידה לכל חלק בכל שבוע.

## מה יש בפרויקט

- עמוד נחיתה אינטראקטיבי עם hero אנימטיבי
- ניווט בין 14 יחידות ופריסת 16 שבועות
- תצוגת יחידה מפורטת עם progressive disclosure
- אזור `Build Log` אישי עם שמירה ב-`localStorage`
- `Learning Pages` לכל חלק ביחידה, מוכן להזנת חומרי לימוד אמיתיים
- חיבור מקומי ל-`21ST Agents API`

## טכנולוגיה נוכחית

הפרויקט כרגע הוא סטטי ומבוסס על:

- `index.html`
- `styles.css`
- `app.js`
- `server.js`

הוא עדיין לא מבוסס על:

- React
- shadcn/ui
- Tailwind CSS
- TypeScript

לכן קיימות גם קומפוננטות עתידיות תחת `components/ui`, אבל האתר החי כרגע רץ על HTML/CSS/JS רגיל.

## קבצים עיקריים

- `index.html` - מבנה העמוד
- `styles.css` - כל שכבת העיצוב
- `app.js` - נתונים, רנדרינג, אינטראקציות, שמירה מקומית ותשתית עמודי הלמידה
- `server.js` - שרת סטטי מקומי עם proxy ל-21ST
- `components/ui/animated-shader-hero.tsx` - גרסת React עתידית ל-hero
- `components/ui/demo.tsx` - דמו שימוש לקומפוננטת ה-React

## הרצה מקומית

אפשר פשוט לפתוח את `index.html` בדפדפן, או להריץ את השרת המקומי:

```bash
node server.js 4173
```

ואז לפתוח:

`http://127.0.0.1:4173`

## תשתית עמודי הלמידה

לכל יחידה יש עכשיו עמודי תוכן נפרדים עבור:

- פתיח שבועי
- מטרות
- נושאים
- תוצר
- תרגיל מרכזי
- מבחן הבנה
- זווית ניהולית
- דגלים אדומים

בהמשך אפשר להזין לכל אחד מהם:

- טקסט לימודי מלא
- קישורים ומשאבים
- דוגמאות
- תרגילים

## מעבר עתידי ל-React

אם תרצה להעביר את הפרויקט ל-React + Tailwind + shadcn/ui, הסטאפ המומלץ הוא:

```bash
npx create-next-app@latest tpb-course --typescript --tailwind --app
cd tpb-course
npx shadcn@latest init
npm install lucide-react
```

ואז להעביר את הקומפוננטות ל-`components/ui`.
