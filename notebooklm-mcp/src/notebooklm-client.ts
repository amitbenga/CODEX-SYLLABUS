import { GoogleAuth } from "google-auth-library";

/**
 * Thin REST client for the official Google Cloud NotebookLM Enterprise API,
 * which is served by the Discovery Engine API (v1alpha).
 *
 * Docs: https://cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks
 *
 * Notebook resource name format:
 *   projects/{PROJECT_NUMBER}/locations/{LOCATION}/notebooks/{NOTEBOOK_ID}
 */

const CLOUD_PLATFORM_SCOPE = "https://www.googleapis.com/auth/cloud-platform";

export interface NotebookLMConfig {
  /** Google Cloud project number (preferred) or project id. */
  project: string;
  /** Data location, e.g. "global", "us", "eu". Defaults to "global". */
  location: string;
  /**
   * Optional pre-fetched OAuth access token. When omitted, Application Default
   * Credentials (ADC) are used to mint a cloud-platform scoped token.
   */
  accessToken?: string;
  /** Optional override of the API version segment. Defaults to "v1alpha". */
  apiVersion?: string;
}

export interface Notebook {
  /** Full resource name: projects/.../locations/.../notebooks/{id}. */
  name?: string;
  notebookId?: string;
  title?: string;
  emoji?: string;
  createTime?: string;
  updateTime?: string;
  metadata?: Record<string, unknown>;
  [key: string]: unknown;
}

export class NotebookLMApiError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(message: string, status: number, body: unknown) {
    super(message);
    this.name = "NotebookLMApiError";
    this.status = status;
    this.body = body;
  }
}

export class NotebookLMClient {
  private readonly project: string;
  private readonly location: string;
  private readonly apiVersion: string;
  private readonly staticToken?: string;
  private readonly auth?: GoogleAuth;

  constructor(config: NotebookLMConfig) {
    if (!config.project) {
      throw new Error("NotebookLM client requires a Google Cloud project number.");
    }
    this.project = config.project;
    this.location = config.location || "global";
    this.apiVersion = config.apiVersion || "v1alpha";
    this.staticToken = config.accessToken;

    if (!this.staticToken) {
      // ADC: works with `gcloud auth application-default login`, a service
      // account key referenced by GOOGLE_APPLICATION_CREDENTIALS, or workload
      // identity when running on Google Cloud.
      this.auth = new GoogleAuth({ scopes: [CLOUD_PLATFORM_SCOPE] });
    }
  }

  /** Host is region-prefixed for regional locations, bare for "global". */
  private get host(): string {
    return this.location === "global"
      ? "discoveryengine.googleapis.com"
      : `${this.location}-discoveryengine.googleapis.com`;
  }

  private get parent(): string {
    return `projects/${this.project}/locations/${this.location}`;
  }

  private url(suffix: string): string {
    return `https://${this.host}/${this.apiVersion}/${suffix}`;
  }

  private async token(): Promise<string> {
    if (this.staticToken) {
      return this.staticToken;
    }
    const client = await this.auth!.getClient();
    const { token } = await client.getAccessToken();
    if (!token) {
      throw new Error(
        "Failed to obtain an access token from Application Default Credentials."
      );
    }
    return token;
  }

  private async request<T>(
    method: string,
    url: string,
    body?: unknown
  ): Promise<T> {
    const token = await this.token();
    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      // Required so quota/billing is attributed to the caller's project.
      "X-Goog-User-Project": this.project,
    };
    if (body !== undefined) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(url, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    });

    const text = await response.text();
    let parsed: unknown = undefined;
    if (text) {
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = text;
      }
    }

    if (!response.ok) {
      const message = extractApiError(parsed) || `${method} ${url} failed`;
      throw new NotebookLMApiError(
        `NotebookLM API error (${response.status}): ${message}`,
        response.status,
        parsed
      );
    }

    return (parsed ?? {}) as T;
  }

  /** Create a new notebook. */
  async createNotebook(input: { title: string; emoji?: string }): Promise<Notebook> {
    const body: Record<string, unknown> = { title: input.title };
    if (input.emoji) {
      body.emoji = input.emoji;
    }
    return this.request<Notebook>("POST", this.url(`${this.parent}/notebooks`), body);
  }

  /** Fetch a single notebook by id or full resource name. */
  async getNotebook(notebookIdOrName: string): Promise<Notebook> {
    return this.request<Notebook>("GET", this.url(this.resolveName(notebookIdOrName)));
  }

  /**
   * List notebooks recently viewed by the caller. NotebookLM Enterprise scopes
   * notebooks to the calling user, so listing uses the `listRecentlyViewed`
   * custom verb rather than a standard collection GET.
   */
  async listNotebooks(input?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<{ notebooks: Notebook[]; nextPageToken?: string }> {
    const params = new URLSearchParams();
    if (input?.pageSize) {
      params.set("pageSize", String(input.pageSize));
    }
    if (input?.pageToken) {
      params.set("pageToken", input.pageToken);
    }
    const query = params.toString() ? `?${params.toString()}` : "";
    const result = await this.request<{
      notebooks?: Notebook[];
      nextPageToken?: string;
    }>("GET", this.url(`${this.parent}/notebooks:listRecentlyViewed${query}`));
    return {
      notebooks: result.notebooks ?? [],
      nextPageToken: result.nextPageToken,
    };
  }

  /** Delete a notebook by id or full resource name. */
  async deleteNotebook(notebookIdOrName: string): Promise<void> {
    await this.request<unknown>("DELETE", this.url(this.resolveName(notebookIdOrName)));
  }

  /** Accept either a bare notebook id or a full resource name. */
  private resolveName(notebookIdOrName: string): string {
    const value = notebookIdOrName.trim();
    if (value.startsWith("projects/")) {
      return value;
    }
    return `${this.parent}/notebooks/${value}`;
  }
}

function extractApiError(body: unknown): string {
  if (!body) {
    return "";
  }
  if (typeof body === "string") {
    return body;
  }
  if (typeof body === "object") {
    const error = (body as { error?: unknown }).error;
    if (error && typeof error === "object") {
      const message = (error as { message?: unknown }).message;
      if (typeof message === "string") {
        return message;
      }
    }
    const message = (body as { message?: unknown }).message;
    if (typeof message === "string") {
      return message;
    }
  }
  return "";
}
