import { s, type Schema } from "../core/index.js";

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
