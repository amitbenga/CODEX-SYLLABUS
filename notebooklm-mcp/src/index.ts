#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  NotebookLMClient,
  NotebookLMApiError,
  type Notebook,
} from "./notebooklm-client.js";

/**
 * MCP server exposing notebook-management tools backed by the official
 * Google Cloud NotebookLM Enterprise API.
 *
 * Configuration via environment variables:
 *   NOTEBOOKLM_PROJECT (or GOOGLE_CLOUD_PROJECT) - required, GCP project number
 *   NOTEBOOKLM_LOCATION  - optional, defaults to "global"
 *   NOTEBOOKLM_ACCESS_TOKEN - optional, a pre-minted OAuth token; otherwise ADC
 *   NOTEBOOKLM_API_VERSION - optional, defaults to "v1alpha"
 */

function loadConfig() {
  const project =
    process.env.NOTEBOOKLM_PROJECT ||
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT ||
    "";
  return {
    project,
    location: process.env.NOTEBOOKLM_LOCATION || "global",
    accessToken: process.env.NOTEBOOKLM_ACCESS_TOKEN || undefined,
    apiVersion: process.env.NOTEBOOKLM_API_VERSION || undefined,
  };
}

let clientInstance: NotebookLMClient | null = null;

function getClient(): NotebookLMClient {
  if (clientInstance) {
    return clientInstance;
  }
  const config = loadConfig();
  if (!config.project) {
    throw new Error(
      "Missing project. Set NOTEBOOKLM_PROJECT (or GOOGLE_CLOUD_PROJECT) to your " +
        "Google Cloud project number."
    );
  }
  clientInstance = new NotebookLMClient(config);
  return clientInstance;
}

/** Trim the verbose Notebook resource down to the useful fields for an LLM. */
function summarizeNotebook(notebook: Notebook) {
  const id =
    notebook.notebookId ||
    (notebook.name ? notebook.name.split("/").pop() : undefined);
  return {
    id,
    name: notebook.name,
    title: notebook.title,
    emoji: notebook.emoji,
    createTime: notebook.createTime,
    updateTime: notebook.updateTime,
  };
}

function jsonContent(payload: unknown) {
  return {
    content: [
      { type: "text" as const, text: JSON.stringify(payload, null, 2) },
    ],
  };
}

function errorContent(error: unknown) {
  if (error instanceof NotebookLMApiError) {
    return {
      isError: true as const,
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(
            { error: error.message, status: error.status, details: error.body },
            null,
            2
          ),
        },
      ],
    };
  }
  const message = error instanceof Error ? error.message : String(error);
  return {
    isError: true as const,
    content: [{ type: "text" as const, text: `Error: ${message}` }],
  };
}

async function main() {
  const server = new McpServer({
    name: "notebooklm-mcp",
    version: "0.1.0",
  });

  server.registerTool(
    "notebooklm_create_notebook",
    {
      title: "Create NotebookLM notebook",
      description:
        "Create a new notebook in NotebookLM Enterprise. Returns the new " +
        "notebook's id, resource name and title.",
      inputSchema: {
        title: z.string().min(1).describe("Title for the new notebook."),
        emoji: z
          .string()
          .optional()
          .describe("Optional emoji shown as the notebook icon."),
      },
    },
    async ({ title, emoji }) => {
      try {
        const notebook = await getClient().createNotebook({ title, emoji });
        return jsonContent(summarizeNotebook(notebook));
      } catch (error) {
        return errorContent(error);
      }
    }
  );

  server.registerTool(
    "notebooklm_list_notebooks",
    {
      title: "List NotebookLM notebooks",
      description:
        "List notebooks recently viewed by the authenticated user, with " +
        "optional pagination.",
      inputSchema: {
        pageSize: z
          .number()
          .int()
          .positive()
          .max(100)
          .optional()
          .describe("Maximum number of notebooks to return."),
        pageToken: z
          .string()
          .optional()
          .describe("Pagination token returned by a previous call."),
      },
    },
    async ({ pageSize, pageToken }) => {
      try {
        const result = await getClient().listNotebooks({ pageSize, pageToken });
        return jsonContent({
          notebooks: result.notebooks.map(summarizeNotebook),
          nextPageToken: result.nextPageToken,
        });
      } catch (error) {
        return errorContent(error);
      }
    }
  );

  server.registerTool(
    "notebooklm_get_notebook",
    {
      title: "Get NotebookLM notebook",
      description:
        "Fetch a single notebook by its id or full resource name.",
      inputSchema: {
        notebook: z
          .string()
          .min(1)
          .describe(
            "Notebook id, or full resource name (projects/.../notebooks/{id})."
          ),
      },
    },
    async ({ notebook }) => {
      try {
        const result = await getClient().getNotebook(notebook);
        return jsonContent(summarizeNotebook(result));
      } catch (error) {
        return errorContent(error);
      }
    }
  );

  server.registerTool(
    "notebooklm_delete_notebook",
    {
      title: "Delete NotebookLM notebook",
      description:
        "Permanently delete a notebook by its id or full resource name.",
      inputSchema: {
        notebook: z
          .string()
          .min(1)
          .describe(
            "Notebook id, or full resource name (projects/.../notebooks/{id})."
          ),
      },
    },
    async ({ notebook }) => {
      try {
        await getClient().deleteNotebook(notebook);
        return jsonContent({ deleted: true, notebook });
      } catch (error) {
        return errorContent(error);
      }
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Stderr is safe for logs; stdout is reserved for the MCP protocol.
  console.error("notebooklm-mcp server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error starting notebooklm-mcp:", error);
  process.exit(1);
});
