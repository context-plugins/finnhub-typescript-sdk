import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExcerptResponse = {
  content?: string;
  snippetId?: string;
  startOffset?: string;
  endOffset?: string;
};

export const excerptResponseSchema: Schema<ExcerptResponse> = s.object<ExcerptResponse>({
  content: s.optional(s.string()),
  snippetId: s.optional(s.string()),
  startOffset: s.optional(s.string()),
  endOffset: s.optional(s.string()),
});
