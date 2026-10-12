import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExcerptResponse = {
  /** Highlighted content */
  content?: string;
  /** Location of the content in the rendered document */
  snippetId?: string;
  /** Start offset of highlighted content */
  startOffset?: string;
  /** End offset of highlighted content */
  endOffset?: string;
};

export const excerptResponseSchema: Schema<ExcerptResponse> = s.object<ExcerptResponse>({
  content: s.optional(s.string()),
  snippetId: s.optional(s.string()),
  startOffset: s.optional(s.string()),
  endOffset: s.optional(s.string()),
});
