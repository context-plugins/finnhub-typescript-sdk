import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TranscriptParticipant = {
  /** Participant's name */
  name?: string;
  /** Participant's description */
  description?: string;
  /** Whether the speak is a company's executive or an analyst */
  role?: string;
};

export const transcriptParticipantSchema: Schema<TranscriptParticipant> = s.object<TranscriptParticipant>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  role: s.optional(s.string()),
});
