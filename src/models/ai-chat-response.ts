import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiChatResponse = {
  /** Chat ID. */
  chatId?: string;
  /** Response text. */
  content?: string;
  /** Query summary */
  querySummary?: string;
  /** Related queries. */
  relatedQueries?: Record<string, unknown>[];
  /** List of tickers mentioned. */
  tickers?: Record<string, unknown>[];
  /** Sources. */
  sources?: Record<string, unknown>[];
  /** Widgets. */
  widgets?: Record<string, unknown>[];
};

export const aiChatResponseSchema: Schema<AiChatResponse> = s.object<AiChatResponse>({
  chatId: s.optional(s.string()),
  content: s.optional(s.string()),
  querySummary: s.optional(s.string()),
  relatedQueries: s.optional(s.array(s.record(s.string(), s.unknown()))),
  tickers: s.optional(s.array(s.record(s.string(), s.unknown()))),
  sources: s.optional(s.array(s.record(s.string(), s.unknown()))),
  widgets: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
