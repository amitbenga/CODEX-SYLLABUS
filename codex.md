# דוח בדיקת רלוונטיות ומצב תוכן הקורס

תאריך בדיקה: 3 ביוני 2026  
מסלול: `Technical Product Builder` / `AI-Native Full-Stack Product Lead`

## תקציר מנהלים

הקורס עדיין רלוונטי מאוד מבחינת כיוון, שפה ויעדים. המבנה של המסלול נכון ל-2026: הבנת שכבות מערכת, API, דאטה, לוגיקה עסקית, אבטחה, דיבאגינג, Git/PRs, בדיקות, ביצועים ועבודה עם סוכנים הם בדיוק הסט שצריך למי שרוצה להוביל בניית מוצר טכני בלי להפוך בהכרח למהנדס פול-טיים.

הבעיה המרכזית אינה שהתוכן התיישן, אלא שהוא עדיין לא מלא. יש סילבוס רחב ומגובש לכל 17 השבועות, וארבע יחידות כתובות כעמודי עומק מלאים: שבוע 1, שבוע 2, שבועות 3-4 ושבוע 7. שאר היחידות קיימות ברמת outline ב-`app.js`, אבל ב-`unit-pages-data.js` הן מקבלות שלד גנרי בלבד.

עדכון אחרי החלטות מוצר: עמוד הבית חזר להיות Hero מינימלי עם "המשך ללמוד" ו-dropdown סילבוס. 21ST הוגדר מחדש ככלי עזר לעיצוב לפי טמפלייטים, לא כחלק מתוכן הסוכנים של הקורס. הקייס המתגלגל לקורס הוא מערכת ניהול לידים, פגישות וידע למטפלים, סביב לקוחה נטורופתית ורפלקסולוגית.

הפער העיקרי שנותר הוא תוכני: השלמת 11 יחידות העומק, ובדיקה הדרגתית של רלוונטיות כל יחידה לפני כתיבה מלאה.

## מה נבדק

- `README.md` - תיאור מוצר, הרצה, פריסה ואינטגרציית 21ST.
- `index.html` ו-`app.js` - טקסטים של עמוד הבית, סילבוס, תוצרים, קצב למידה, Build Log ו-21ST Design drawer.
- `unit-page.html`, `unit-page.js` ו-`unit-pages-data.js` - דפי היחידה, תוכן היחידות, ניווט והשלמת יחידות.
- `server.js` - טקסטים והתנהגות בסיסית של proxy ל-21ST Design Lab, שכעת כבוי מה-UI הצף.
- `wrangler.jsonc`, `magic-design-plan.txt`, `components/ui/*` - טקסטי תשתית ותכנון.
- מקורות עדכניים חיצוניים: OpenAI Developers, OpenAI Codex, Supabase Docs, Model Context Protocol Docs, OWASP Cheat Sheets, 21st Help/Community/Magic Chat/MCP ו-Cloudflare Workers Docs.

## מסקנת רלוונטיות

### עדיין חזק ורלוונטי

- מפת שכבות מערכת, trust boundaries, secrets, config, סביבות ו-observability.
- HTTP/API, validation, status codes, idempotency, retries, timeouts ו-rate limiting.
- דאטה מודלינג, constraints, soft delete, auditability ו-derived data.
- business invariants ומיקום נכון של לוגיקה עסקית.
- frontend/backend architecture ברמת Product Lead.
- security review פרקטי: auth, uploads, signed URLs, least privilege, injection ו-abuse prevention.
- debugging מבוסס ראיות ולא השערות.
- Git/PR discipline, rollback, test plan ו-known risks.
- testing פרגמטי ולא דתי.
- performance, scale, cost ו-maintenance.
- עבודה עם סוכנים כיכולת ניהולית, לא רק כיכולת prompt.

### דורש עדכון ל-2026

- יחידת הסוכנים צריכה לעבור מ"טיפים לעבודה עם סוכן" לפרק מרכזי על ניהול סביבת סוכנים מודרנית: Codex App/CLI/IDE/Web, worktrees, subagents, skills, permissions, approvals, MCP, shell/apply-patch/computer-use, traces/evals ו-human gates.
- יחידות API וסוכנים צריכות להזכיר במפורש את Responses API, Agents SDK, tool calling, hosted tools, MCP, structured outputs, streaming semantic events ו-stateful runs.
- יחידת security צריכה להרחיב prompt injection, tool over-permission, data exfiltration דרך context, output validation, sandbox boundaries ו-human approval לפני פעולות בלתי הפיכות.
- יחידת testing צריכה להוסיף evals/workflow tests לסוכנים, לא רק בדיקות תוכנה קלאסיות.
- יחידת observability/debugging צריכה להדגיש traces, run state, tool call logs ו-cost/latency signals.

## מצב השלמה לפי אזור

| אזור | מצב | מסקנה |
|---|---:|---|
| חזון הקורס והסילבוס | מלא ברמת outline | הכיוון ברור, עקבי ומקצועי. |
| עמוד בית וחוויית למידה | בסיס תקין | Hero מינימלי עם CTA להמשך ו-dropdown סילבוס; הדאשבורד המלא נשמר בקוד אך מוסתר. |
| דפי יחידה מלאים | 4 מתוך 15 | שבוע 1, שבוע 2, שבועות 3-4 ושבוע 7 מלאים. שאר היחידות הן skeleton. |
| תוצרים, תרגילים וצ'קליסטים | מלאים לשבועות 1-2, שבועות 3-4 ושבוע 7 | צריך להרחיב לשאר היחידות. |
| מנגנון השלמה והמשך | בסיס תקין | IDs אוחדו לפי `app.js`; נשמרו aliases ל-URLs ישנים ב-`unit-pages-data.js`. |
| 21ST Design Lab | POC עיצובי | מיועד להשראה מטמפלייטים וכיווני עיצוב, לא לניהול סוכן קורס או סוכן קוד. |
| פריסה ל-Cloudflare | בסיס תקין | README עודכן להבדיל בין `wrangler deploy` לפריסה ראשונה לבין `wrangler versions upload`. |
| קומפוננטות React עתידיות | לא משולבות | קיימות כטיוטה, לא חלק מהאפליקציה הנוכחית. |

## מצב היחידות

| יחידה | מצב נוכחי | מה צריך לעשות |
|---|---|---|
| שבוע 1 - מפת העולם של אפליקציה מודרנית | מלא | להשאיר. כדאי להוסיף references עדכניים ל-Codex, Responses API, MCP ו-Agent governance. |
| שבוע 2 - HTTP, API וזרימות מערכת | מלא | להשאיר. כדאי לעדכן דוגמאות סביב Responses API, streaming events, tool calls ו-agent-in-the-loop. |
| שבועות 3-4 - מודלינג נתונים, זיכרון וקטורי ו-State בעולם של סוכנים | מלא | יחידת עומק חדשה: SQL כמקור אמת, Supabase/serverless, RAG/וקטורים, agent state, MCP, Structured Outputs ואבטחת שכבת הדאטה. |
| שבוע 5 - לוגיקה עסקית | outline בלבד | להוסיף invariants, transactions, concurrency/race conditions, state machines ודוגמאות של rule placement. |
| שבוע 6 - Frontend architecture | outline בלבד | להוסיף קומפוננטות, server state, forms, accessibility, loading/error/empty states, optimistic UI ודוגמאות review. |
| שבוע 7 - 21ST, טמפלייטים ושבירת עיצוב AI גנרי | מלא | יחידה חדשה: רפרנסים, components/screens/themes, Magic Chat/MCP, תרגילים וקייס המטפלים. |
| שבוע 8 - Backend architecture | outline בלבד | להוסיף routes/controllers/services, repositories, queues/jobs, webhooks, validation, logging וטעויות נפוצות. |
| שבוע 9 - אבטחה פרקטית | outline בלבד | להוסיף OWASP API/LLM, uploads, signed URLs, secrets, least privilege, prompt injection, MCP/tool permissions. |
| שבוע 10 - דיבאגינג מקצועי | outline בלבד | להוסיף playbooks של חקירה, network/logs/traces, DB inspection, root cause report ותבנית postmortem. |
| שבוע 11 - Git, branches, PRs | outline בלבד | להוסיף PR templates, review rubric, rollback plan, release notes ודוגמאות PR טוב/מסוכן. |
| שבוע 12 - Testing | outline בלבד | להוסיף test matrix, contract tests, E2E, manual QA, agent evals, regression checklist ודוגמאות לפי סיכון. |
| שבוע 13 - Performance | outline בלבד | להוסיף query cost, pagination, caching, rendering, bundle/image handling, cost monitoring ו-scale review. |
| שבועות 14-15 - עבודה עם סוכנים | outline בלבד | להפוך ליחידת דגל עדכנית: Codex, Agents SDK, Responses API, subagents, skills, MCP, approvals, evals. |
| שבוע 16 - קריאת קוד והערכת איכות | outline בלבד | להוסיף דוגמאות קוד, severity rubric, maintainability checklist, hidden coupling ו-test gaps. |
| שבוע 17 - Capstone | outline בלבד | לבנות brief מלא, rubric, milestones, demo checklist, rollout/rollback, portfolio artifact ותהליך review. |

## תיקוני יסוד שבוצעו

### 1. מזהי היחידות אוחדו

הקנון שנבחר הוא ה-ID שכבר הופיע ב-`app.js`:

- `git-pr`
- `agent-work`
- `code-review`

`unit-pages-data.js` ו-`unit-page.js` עודכנו בהתאם. כדי לא לשבור URLs ישנים, `unit-pages-data.js` שומר aliases:

- `git-prs`
- `agent-leadership`
- `code-judgment`

השפעה: קישורי "המשך ללמוד", שמירת התקדמות ומעבר ליחידה הבאה מיושרים עכשיו לאותו סדר יחידות.

### 2. README עודכן למבנה האמיתי

ה-README כבר לא מתאר 8 חלקים קבועים לכל יחידה. הוא מבחין בין:

- יחידות עומק מלאות, שיכולות לכלול מבנה עשיר ומותאם.
- יחידות בשלד, שמקבלות 5 חלקי בסיס גנריים.

הוא גם כולל עכשיו הוראות נכונות יותר ל-21ST ול-Cloudflare.

### 3. עמוד הבית הוחזר ל-Hero מינימלי

ב-`index.html` סקציות הדאשבורד `overview`, `navigator`, `lesson-studio`, `timeline`, `toolkit`, `stages` נשארות זמינות לפיתוח עתידי אבל מוסתרות. ה-Hero כולל עכשיו:

- CTA להמשך היחידה הבאה.
- Dropdown סילבוס דינמי שנבנה מתוך `syllabusData`.
- סטטוס לכל יחידה: יחידת עומק, שלד להשלמה או הושלמה.
- הצגת הקייס המתגלגל של מערכת ניהול לידים, פגישות וידע למטפלים.

### 4. 21ST הוגדר מחדש ככלי עיצוב

החיבור ל-21ST אינו חלק מתוכן הסוכנים בקורס. הוא נועד לעזור לסוכן הקוד לקבל כיוון עיצובי מתוך טמפלייטים וסגנונות שקיימים ב-21ST.

המשמעות לתוכן הקורס: לא לבנות יחידת סוכנים סביב 21ST. במקום זה נוצרה יחידת שבוע 7 שמלמדת איך להשתמש ב-21st כ-library של components, screens, themes, Magic Chat ו-Magic MCP כדי לשבור UI גנרי.

הכפתור הצף של 21ST בוטל ב-UI באמצעות `hidden`. ה-drawer והשרת נשארים בקוד כמעבדה צדדית אם נרצה להחזיר אותה בעתיד.

### 5. קייס מתגלגל נקבע

הקייס המתגלגל הוא מערכת עבור מטפלת נטורופתית ורפלקסולוגית:

- ניהול לידים ופניות.
- ניהול פגישות ותהליך טיפול.
- ניהול ידע מקצועי אישי.
- הכנה להוספת דאטה, תובנות ואוטומציות בהמשך.

זה צריך להפוך לעוגן הדוגמאות ביחידות 3-17, כדי שהתרגילים יהיו פחות גנריים.

### 6. Cloudflare deployment תועד מחדש

ה-README מציין:

- `npx wrangler deploy` לפריסה ראשונה.
- `npx wrangler versions upload` להעלאת גרסה ללא העברת traffic מיידית.
- `wrangler versions deploy` או dashboard כדי להפעיל version שהועלתה.

## הערות ניסוח

- הטון העברי טוב: יש שפה ניהולית ברורה, הרבה "לזהות", "לדרוש", "לפרק", "לשפוט", וזה מתאים לקהל של Product Builder טכני.
- כדאי לאחד כתיבה של `Tech Lead` / `tech lead`, `agents` / `סוכנים`, `frontend` / `Frontend`, כדי שהקורס ירגיש אחיד.
- כדאי להוסיף לכל יחידה "מקורות מומלצים" ו-"דוגמאות חיות" במקום להשאיר את המקורות רק ביחידות 1-2.
- כדאי להיזהר מהמונח `prompt operator`; הוא טוב כרעיון, אבל ב-2026 עדיף למצב את המעבר כ-"מנהל סביבת סוכנים" או "Agentic Product Lead", כי העבודה כבר לא רק prompt אלא orchestration, permissions, state, tools, evals ו-review.

## סדר עבודה מומלץ

### עדיפות 0 - יסודות הבאים

1. לעדכן כל יחידה סביב הקייס של מערכת המטפלים לפני כתיבת Deep Dive.
2. להשתמש ביחידת 21ST כגשר בין Frontend Architecture לבין Backend Architecture.
3. לבנות את יחידות 5-6 סביב אותו מודל דאטה: business invariants, state machines, forms, server state ו-failure states.

### עדיפות 1 - השלמת תכני קורס

1. לכתוב יחידות 5-6: לוגיקה עסקית ו-frontend. אלה ישלימו את בסיס החשיבה המערכתית אחרי יחידת הדאטה.
2. לכתוב יחידות 9 ו-14-15 יחד: אבטחה ועבודה עם סוכנים. אלה החלקים שהכי דורשים עדכניות ל-2026.
3. לכתוב יחידות 11-13 ו-16: PRs, testing, performance ו-code review. אלה יהפכו את המסלול למסלול delivery אמיתי.
4. לסיים עם Capstone מלא שמחבר הכל לתיק עבודת technical lead.

### עדיפות 2 - שיפור מוצר הלמידה

1. להוסיף rubric לכל תוצר.
2. להוסיף "דוגמה טובה / דוגמה חלשה" לכל תבנית.
3. להוסיף checklists להורדה או העתקה.
4. להוסיף תרחישי בוחן שמכריחים שיפוט ולא רק זכירה.
5. להוסיף instructor notes או facilitator guide אם הקורס מועבר בלייב.

## מקורות עדכניים שנבדקו

- OpenAI Models: https://developers.openai.com/api/docs/models
- OpenAI Responses API migration guide: https://developers.openai.com/api/docs/guides/migrate-to-responses
- OpenAI Tools guide: https://developers.openai.com/api/docs/guides/tools
- OpenAI Agents SDK: https://developers.openai.com/api/docs/guides/agents
- OpenAI Codex docs: https://developers.openai.com/codex
- OpenAI Embeddings guide: https://developers.openai.com/api/docs/guides/embeddings
- OpenAI Structured Outputs guide: https://developers.openai.com/api/docs/guides/structured-outputs
- Supabase Postgres connection strings: https://supabase.com/docs/guides/database/connecting-to-postgres
- Supabase Vector columns: https://supabase.com/docs/guides/ai/vector-columns
- Supabase Storage signed uploads: https://supabase.com/docs/reference/javascript/storage-from-uploadtosignedurl
- Model Context Protocol docs: https://modelcontextprotocol.io/docs/getting-started/intro
- OWASP SQL Injection Prevention Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
- OWASP LLM Prompt Injection Prevention Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html
- 21st Welcome Docs: https://help.21st.dev/
- 21st Magic Chat Overview: https://help.21st.dev/magic-chat
- 21st Magic Chat Quick Start: https://help.21st.dev/magic-chat/quick-start
- 21st Magic MCP: https://21st.dev/mcp
- Lovable 21st.dev Integration: https://docs.lovable.dev/tips-tricks/21stdev
- Cloudflare Workers Versions & Deployments: https://developers.cloudflare.com/workers/configuration/versions-and-deployments/

## שורה תחתונה

הקורס בכיוון מצוין ומרגיש נכון לשוק של 2026. אין צורך לזרוק את המבנה או לשנות את הקונספט. תיקוני היסוד הראשונים כבר בוצעו; עכשיו העבודה המרכזית היא לעבור יחידה-יחידה, לבדוק רלוונטיות מול הקייס של מערכת המטפלים, ואז להשלים Deep Dive מלא.
