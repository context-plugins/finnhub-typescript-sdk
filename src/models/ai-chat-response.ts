import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiChatResponse = {
  chatId?: string;
  content?: string;
  querySummary?: string;
  relatedQueries?: Record<string, unknown>[];
  tickers?: Record<string, unknown>[];
  sources?: Record<string, unknown>[];
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
