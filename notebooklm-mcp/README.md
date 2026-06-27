# NotebookLM MCP Server

שרת MCP (Model Context Protocol) שמחבר את Google NotebookLM ל-Claude Desktop ול-Claude Code.
מבוסס על [alfredang/notebooklm-mcp](https://github.com/alfredang/notebooklm-mcp).

An MCP server that brings Google NotebookLM into Claude Desktop and Claude Code.

## יכולות / Features

- **מחקר**: רשימה ויצירה של notebooks
- **תוכן**: הוספת מקורות מ-URL, טקסט או קבצים
- **יצירה**: הפקת פודקאסטים, וידאו, מצגות, מפות חשיבה, אינפוגרפיקות, חידונים, כרטיסיות ודוחות
- **שיחה טבעית**: לשאול שאלות ישירות על המקורות שלך

## דרישות מקדימות / Prerequisites

מתקינים את מנהל החבילות `uv`:

```bash
# macOS / Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows (PowerShell)
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

בדיקה:

```bash
uv --version
```

## התקנה / Installation

מתוך התיקייה הזו (`notebooklm-mcp/`):

```bash
cd notebooklm-mcp
uv sync
```

הפקודה יוצרת סביבת `.venv` ומתקינה את `notebooklm-py` ואת `fastmcp`.

## שלב 1: התחברות ל-NotebookLM / Authenticate

NotebookLM משתמש באימות מבוסס דפדפן. צריך להתחבר פעם אחת כדי לשמור את ה-cookies:

```bash
uv run notebooklm login
```

נפתח חלון דפדפן — מתחברים לחשבון Google, ממתינים שהטרמינל יציג **"Success"** וסוגרים את הדפדפן.

בדיקת אימות:

```bash
uv run python -c "
from notebooklm import NotebookLMClient
import asyncio
async def test():
    client = await NotebookLMClient.from_storage()
    async with client:
        notebooks = await client.notebooks.list()
        print(f'Authenticated! Found {len(notebooks)} notebooks.')
asyncio.run(test())
"
```

## שלב 2: בדיקת השרת / Test the server

```bash
uv run python server.py
```

פלט צפוי:

```
Starting NotebookLM MCP server...
NotebookLM client initialized successfully
Starting MCP server 'NotebookLM' with transport 'stdio'
```

עוצרים עם `Ctrl+C`.

## שלב 3: חיבור ל-Claude Code / Add to Claude Code

```bash
claude mcp add notebooklm -- uv --directory <PROJECT_PATH>/notebooklm-mcp run python server.py
```

החליפו את `<PROJECT_PATH>` בנתיב המלא לפרויקט. בדיקה:

```bash
claude mcp list
```

## שלב 3 (חלופי): חיבור ל-Claude Desktop / Add to Claude Desktop

עורכים את `claude_desktop_config.json`:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "<UV_PATH>",
      "args": [
        "--directory",
        "<PROJECT_PATH>/notebooklm-mcp",
        "run",
        "python",
        "server.py"
      ]
    }
  }
}
```

מוצאים את `<UV_PATH>` עם `which uv` (macOS/Linux) או `where uv` (Windows), ומפעילים מחדש את Claude Desktop.

## כלים זמינים / Available Tools

| כלי / Tool | תיאור / Description |
|------|-------------|
| `list_notebooks` | רשימת כל ה-notebooks בחשבון |
| `create_notebook` | יצירת notebook חדש |
| `add_source_url` | הוספת מקור מ-URL |
| `add_source_text` | הוספת מקור טקסט גולמי |
| `ask_notebook` | שאלה על בסיס מקורות ה-notebook |
| `get_notebook_summary` | סיכום ותובנות מפתח |
| `generate_audio_overview` | הפקת פודקאסט קולי |
| `generate_video_overview` | הפקת סקירת וידאו |
| `generate_slide_deck` | הפקת מצגת שקופיות |
| `generate_mind_map` | הפקת מפת חשיבה אינטראקטיבית |
| `generate_infographic` | הפקת אינפוגרפיקה |
| `generate_quiz` | הפקת חידון |
| `generate_flashcards` | הפקת כרטיסיות לימוד |
| `generate_summary_report` | הפקת דוח תקציר (briefing doc) |
| `generate_data_table` | חילוץ נתונים לטבלה |

## דוגמאות שימוש / Usage Examples

לאחר ההגדרה, בשפה טבעית מול Claude:

- "תראה לי את כל ה-notebooks שלי ב-NotebookLM"
- "צור notebook חדש בשם 'מחקר'"
- "הוסף את ה-URL הזה ל-notebook: https://example.com/article"
- "הפק פודקאסט ל-notebook עם ID xyz123"
- "צור מצגת מתוך ה-notebook שלי"

## פתרון תקלות / Troubleshooting

- **"NotebookLM client not initialized"** — הריצו קודם `uv run notebooklm login` והפעילו מחדש.
- **"Command not found: uv"** — הוסיפו את `~/.local/bin` ל-`PATH`.
- **"Server disconnected" ב-Claude Desktop** — השתמשו בנתיב מלא ומוחלט ל-`uv` בקונפיג.

## עדכון / Updating

```bash
uv sync --upgrade
```

## רישיון / License

MIT License (כמו הריפו המקורי).
