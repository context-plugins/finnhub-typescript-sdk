import { s, type Schema } from "../core/index.js";
import { transcriptContentSchema, type TranscriptContent } from "./transcript-content.js";
import { transcriptParticipantSchema, type TranscriptParticipant } from "./transcript-participant.js";

export type EarningsCallTranscripts = {
  symbol?: string;
  transcript?: TranscriptContent[];
  participant?: TranscriptParticipant[];
  audio?: string;
  id?: string;
  title?: string;
  time?: string;
  year?: number;
  quarter?: number;
};

export const earningsCallTranscriptsSchema: Schema<EarningsCallTranscripts> =
  s.object<EarningsCallTranscripts>({
    symbol: s.optional(s.string()),
    transcript: s.optional(s.array(s.lazy(() => transcriptContentSchema))),
    participant: s.optional(s.array(s.lazy(() => transcriptParticipantSchema))),
    audio: s.optional(s.string()),
    id: s.optional(s.string()),
    title: s.optional(s.string()),
    time: s.optional(s.string()),
    year: s.optional(s.number()),
    quarter: s.optional(s.number()),
  });
