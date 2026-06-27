# notebooklm-mcp

MCP server for the official **Google Cloud NotebookLM Enterprise API**. It
exposes notebook-management tools (create / list / get / delete) that any MCP
client — Claude Code, Claude Desktop, Cursor, etc. — can call.

The NotebookLM Enterprise API is served by the Discovery Engine API
(`v1alpha`). See the
[official docs](https://cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks).

> **Heads up:** This uses the *enterprise* API, which requires a Google Cloud
> project with a Gemini Enterprise / Gemini Education Premium add-on and
> NotebookLM Enterprise enabled. There is no public API for personal
> `notebooklm.google.com` accounts.

## Tools

| Tool | Description |
|---|---|
| `notebooklm_create_notebook` | Create a notebook (`title`, optional `emoji`). |
| `notebooklm_list_notebooks` | List recently viewed notebooks (`pageSize`, `pageToken`). |
| `notebooklm_get_notebook` | Get one notebook by id or full resource name. |
| `notebooklm_delete_notebook` | Permanently delete a notebook. |

## Prerequisites

1. A Google Cloud project with **NotebookLM Enterprise** enabled and the
   Discovery Engine API turned on.
2. The caller (your user or a service account) must have an IAM role allowing
   NotebookLM/Discovery Engine access.
3. Authentication credentials — one of:
   - **Application Default Credentials** (recommended):
     ```bash
     gcloud auth application-default login
     ```
   - A **service account** key referenced by `GOOGLE_APPLICATION_CREDENTIALS`.
   - A **short-lived token** in `NOTEBOOKLM_ACCESS_TOKEN`
     (`gcloud auth print-access-token`).

## Configuration

Set via environment variables (see `.env.example`):

| Variable | Required | Default | Notes |
|---|---|---|---|
| `NOTEBOOKLM_PROJECT` / `GOOGLE_CLOUD_PROJECT` | yes | — | Project **number**. |
| `NOTEBOOKLM_LOCATION` | no | `global` | e.g. `global`, `us`, `eu`. |
| `NOTEBOOKLM_ACCESS_TOKEN` | no | — | Pre-minted OAuth token; otherwise ADC is used. |
| `NOTEBOOKLM_API_VERSION` | no | `v1alpha` | Discovery Engine API version. |

For non-`global` locations the client targets the regional endpoint
(`{location}-discoveryengine.googleapis.com`).

## Build & run

```bash
cd notebooklm-mcp
npm install
npm run build
NOTEBOOKLM_PROJECT=123456789012 npm start
```

The server speaks MCP over **stdio**.

## Use with Claude Code

```bash
claude mcp add notebooklm \
  --env NOTEBOOKLM_PROJECT=123456789012 \
  --env NOTEBOOKLM_LOCATION=global \
  -- node /absolute/path/to/notebooklm-mcp/dist/index.js
```

## Use with Claude Desktop / other clients

Add to the client's MCP config (e.g. `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "node",
      "args": ["/absolute/path/to/notebooklm-mcp/dist/index.js"],
      "env": {
        "NOTEBOOKLM_PROJECT": "123456789012",
        "NOTEBOOKLM_LOCATION": "global"
      }
    }
  }
}
```

## Notes & limitations

- Scope is **notebook management** only. Source management, querying/chat, and
  audio overviews are separate API surfaces and can be added as additional
  tools later.
- Listing uses the `notebooks:listRecentlyViewed` verb, since NotebookLM
  Enterprise scopes notebooks to the calling user.
- API errors are surfaced verbatim (HTTP status + Google error body) to make
  setup/permission issues easy to diagnose.
