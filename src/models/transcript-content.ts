import { s, type Schema } from "../core/index.js";

export type TranscriptContent = {
  name?: string;
  speech?: string[];
  session?: string;
};

export const transcriptContentSchema: Schema<TranscriptContent> = s.object<TranscriptContent>({
  name: s.optional(s.string()),
  speech: s.optional(s.array(s.string())),
  session: s.optional(s.string()),
});
