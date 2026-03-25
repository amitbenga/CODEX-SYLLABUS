# Builder Course Dashboard

מערכת סטטית וקלה להפעלה להצגת הסילבוס של מסלול `Technical Product Builder` בצורה אינטראקטיבית.

## מה יש בפנים

- תצוגת סילבוס צבעונית בעברית
- ניווט בין 14 יחידות ופריסת 16 השבועות
- סימון יחידות כהושלמו
- מרחב אישי לשלבים, תוצרים והערות
- שמירה מקומית בדפדפן דרך `localStorage`
- ייבוא וייצוא של שלבים כקובץ `JSON`

## איך מפעילים

פשוט פותחים את הקובץ `index.html` בדפדפן.

## קבצים עיקריים

- `index.html` - מבנה המסך
- `styles.css` - עיצוב ו-RTL
- `app.js` - נתוני הסילבוס, אינטראקציות, שמירה מקומית וייבוא/ייצוא

## מצב אינטגרציה

הפרויקט הנוכחי הוא **סטטי** ומבוסס על:

- `index.html`
- `styles.css`
- `app.js`

הוא **לא** כולל כרגע:

- React
- shadcn/ui
- Tailwind CSS
- TypeScript

לכן גרסת ה-TSX של הקומפוננטה נשמרה לעתיד תחת `components/ui`, אבל היא לא נטענת מתוך האתר הנוכחי עד שנעבור לסטאק React אמיתי.

## נתיבי ברירת מחדל

- נתיב הסגנונות הנוכחי בפרויקט הזה: `styles.css`
- נתיב הקומפוננטות העתידי שהכנתי: `components/ui`

למה חשוב `components/ui`:

- זה הנתיב המקובל של `shadcn/ui`
- הוא שומר את כל ה-UI primitives במקום עקבי אחד
- הוא מאפשר imports יציבים כמו `@/components/ui/animated-shader-hero`
- הוא מונע מצב שבו קומפוננטות עיצוב מתפזרות אקראית בפרויקט

## איך להפעיל את גרסת React בעתיד

אם תרצה להעביר את המערכת ל-React + shadcn + Tailwind + TypeScript, זה הסטאפ המומלץ:

```bash
npx create-next-app@latest tpb-course --typescript --tailwind --app
cd tpb-course
npx shadcn@latest init
npm install lucide-react
```

אחר כך:

1. העתק את `components/ui/animated-shader-hero.tsx`
2. השאר את קבצי ה-UI תחת `components/ui`
3. השתמש ב-`app/globals.css` כנתיב הסגנונות הראשי ב-Next.js

אם זה יהיה פרויקט Vite במקום Next.js:

- קובץ הסגנונות הראשי יהיה בדרך כלל `src/index.css`
- עדיין מומלץ לשמור את הקומפוננטה תחת `src/components/ui` או `components/ui`

## קבצי React שהוספתי

- `components/ui/animated-shader-hero.tsx`
- `components/ui/demo.tsx`

הם משתמשים באותו כיוון עיצובי של ה-shader hero, אבל עם התוכן של הסילבוס שלך.
