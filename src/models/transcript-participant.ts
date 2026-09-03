import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TranscriptParticipant = {
  name?: string;
  description?: string;
  role?: string;
};

export const transcriptParticipantSchema: Schema<TranscriptParticipant> = s.object<TranscriptParticipant>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  role: s.optional(s.string()),
});
