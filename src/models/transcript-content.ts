import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TranscriptContent = {
  /** Speaker's name */
  name?: string;
  /** Speaker's speech */
  speech?: string[];
  /** Earnings calls section (management discussion or Q&A) */
  session?: string;
};

export const transcriptContentSchema: Schema<TranscriptContent> = s.object<TranscriptContent>({
  name: s.optional(s.string()),
  speech: s.optional(s.array(s.string())),
  session: s.optional(s.string()),
});
