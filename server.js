const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const host = "127.0.0.1";
const port = Number(process.env.PORT || process.argv[2] || 4173);
const rootDir = __dirname;
const relayOrigin = "https://relay.an.dev";

loadLocalEnvFile(path.join(rootDir, ".env.local"));

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = http.createServer(async (request, response) => {
  try {
    const currentUrl = new URL(request.url || "/", `http://${request.headers.host || `${host}:${port}`}`);

    if (request.method === "GET" && currentUrl.pathname === "/api/an/status") {
      sendJson(response, 200, {
        configured: Boolean(getAnApiKey()),
        defaultSlug: process.env.AN_AGENT_SLUG || ""
      });
      return;
    }

    if (request.method === "POST" && currentUrl.pathname === "/api/an/chat") {
      await handleAnChat(request, response);
      return;
    }

    serveStaticAsset(currentUrl.pathname, response);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error";
    sendJson(response, 500, { error: message });
  }
});

server.listen(port, host, () => {
  console.log(`Builder Course Dashboard running at http://${host}:${port}`);
});

function serveStaticAsset(urlPath, response) {
  const resolvedPath = urlPath === "/" ? "/index.html" : urlPath || "/index.html";
  const safePath = path.normalize(decodeURIComponent(resolvedPath)).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(rootDir, safePath);

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    response.end(data);
  });
}

async function handleAnChat(request, response) {
  const apiKey = getAnApiKey();

  if (!apiKey) {
    sendJson(response, 500, {
      error: "AN_API_KEY or API_KEY_21ST is not configured on the server."
    });
    return;
  }

  let payload;
  try {
    payload = await readJsonBody(request);
  } catch (error) {
    sendJson(response, 400, {
      error: error instanceof Error ? error.message : "Invalid JSON body."
    });
    return;
  }

  const slug = String(payload.slug || process.env.AN_AGENT_SLUG || "").trim();
  const message = String(payload.message || "").trim();

  if (!slug) {
    sendJson(response, 400, {
      error: "Missing agent slug. Add one in the UI or set AN_AGENT_SLUG."
    });
    return;
  }

  if (!message) {
    sendJson(response, 400, {
      error: "Message is required."
    });
    return;
  }

  const relayBody = {
    messages: [
      {
        id: crypto.randomUUID(),
        role: "user",
        parts: [{ type: "text", text: message }]
      }
    ]
  };

  let sandboxId = String(payload.sandboxId || "").trim();
  const threadId = String(payload.threadId || "").trim();

  if (!sandboxId) {
    try {
      sandboxId = await createSandbox(slug, apiKey);
    } catch (error) {
      sendJson(response, 502, {
        error: error instanceof Error ? error.message : "Failed to create 21ST sandbox."
      });
      return;
    }
  }

  relayBody.sandboxId = sandboxId;

  if (threadId) {
    relayBody.threadId = threadId;
  }

  try {
    const result = await relayChat(slug, relayBody, apiKey);
    sendJson(response, 200, {
      ...result,
      sandboxId: result.sandboxId || sandboxId,
      threadId: result.threadId || threadId
    });
  } catch (error) {
    sendJson(response, 502, {
      error: error instanceof Error ? error.message : "Relay request failed."
    });
  }
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;

      if (body.length > 1_000_000) {
        reject(new Error("Request body is too large."));
        request.destroy();
      }
    });

    request.on("end", () => {
      if (!body.trim()) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Request body must be valid JSON."));
      }
    });

    request.on("error", reject);
  });
}

async function createSandbox(slug, apiKey) {
  const result = await postJson("/v1/sandboxes", { agent: slug }, apiKey);
  const sandboxId = String(result.id || result.sandboxId || "").trim();

  if (!sandboxId) {
    throw new Error("21ST did not return a sandbox id.");
  }

  return sandboxId;
}

function relayChat(slug, body, apiKey) {
  return new Promise((resolve, reject) => {
    const relayUrl = new URL(`/v1/chat/${encodeURIComponent(slug)}`, relayOrigin);

    const relayRequest = https.request(
      relayUrl,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "text/event-stream"
        }
      },
      (relayResponse) => {
        let raw = "";

        relayResponse.setEncoding("utf8");
        relayResponse.on("data", (chunk) => {
          raw += chunk;
        });

        relayResponse.on("end", () => {
          const statusCode = relayResponse.statusCode || 500;

          if (statusCode >= 400) {
            reject(new Error(extractRelayError(raw) || `Relay returned ${statusCode}.`));
            return;
          }

          try {
            resolve(parseSsePayload(raw));
          } catch (error) {
            reject(error);
          }
        });
      }
    );

    relayRequest.on("error", reject);
    relayRequest.write(JSON.stringify(body));
    relayRequest.end();
  });
}

function postJson(pathname, body, apiKey) {
  return new Promise((resolve, reject) => {
    const relayUrl = new URL(pathname, relayOrigin);

    const relayRequest = https.request(
      relayUrl,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      },
      (relayResponse) => {
        let raw = "";

        relayResponse.setEncoding("utf8");
        relayResponse.on("data", (chunk) => {
          raw += chunk;
        });

        relayResponse.on("end", () => {
          const statusCode = relayResponse.statusCode || 500;

          if (statusCode >= 400) {
            reject(new Error(extractRelayError(raw) || `Relay returned ${statusCode}.`));
            return;
          }

          try {
            resolve(raw.trim() ? JSON.parse(raw) : {});
          } catch (error) {
            reject(new Error("Relay returned invalid JSON."));
          }
        });
      }
    );

    relayRequest.on("error", reject);
    relayRequest.write(JSON.stringify(body));
    relayRequest.end();
  });
}

function parseSsePayload(raw) {
  const lines = raw
    .split(/\r?\n/)
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trim())
    .filter(Boolean);

  let text = "";
  let sandboxId = "";
  let threadId = "";
  let sessionId = "";
  let usage = null;

  for (const item of lines) {
    if (item === "[DONE]") {
      continue;
    }

    let event;
    try {
      event = JSON.parse(item);
    } catch (error) {
      continue;
    }

    if (typeof event.delta === "string" && event.type === "text-delta") {
      text += event.delta;
    }

    if (typeof event.sandboxId === "string") {
      sandboxId = event.sandboxId;
    }

    if (typeof event.threadId === "string") {
      threadId = event.threadId;
    }

    if (event.type === "message-metadata" && event.messageMetadata) {
      const metadata = event.messageMetadata;
      sessionId = typeof metadata.sessionId === "string" ? metadata.sessionId : sessionId;
      usage = {
        totalCostUsd: metadata.totalCostUsd ?? null,
        inputTokens: metadata.inputTokens ?? null,
        outputTokens: metadata.outputTokens ?? null,
        durationMs: metadata.durationMs ?? null
      };
    }
  }

  return {
    text: text.trim(),
    sandboxId,
    threadId,
    sessionId,
    usage
  };
}

function extractRelayError(raw) {
  try {
    const parsed = JSON.parse(raw);
    return parsed.error || parsed.message || "";
  } catch (error) {
    const text = raw.replace(/^data:\s*/gm, "").trim();
    return text || "";
  }
}

function getAnApiKey() {
  return process.env.AN_API_KEY || process.env.API_KEY_21ST || "";
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-cache"
  });
  response.end(JSON.stringify(payload));
}

function loadLocalEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const contents = fs.readFileSync(filePath, "utf8");
  contents
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .forEach((line) => {
      const separatorIndex = line.indexOf("=");
      if (separatorIndex <= 0) {
        return;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    });
}
