import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transcriptContentSchema, type TranscriptContent } from "./transcript-content.js";
import { transcriptParticipantSchema, type TranscriptParticipant } from "./transcript-participant.js";

export type EarningsCallTranscripts = {
  /** Company symbol. */
  symbol?: string;
  /** Transcript content. */
  transcript?: TranscriptContent[];
  /** Participant list */
  participant?: TranscriptParticipant[];
  /** Audio link. */
  audio?: string;
  /** Transcript's ID. */
  id?: string;
  /** Title. */
  title?: string;
  /** Time of the event. */
  time?: string;
  /** Year of earnings result in the case of earnings call transcript. */
  year?: number;
  /** Quarter of earnings result in the case of earnings call transcript. */
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
    year: s.optional(s.int()),
    quarter: s.optional(s.int()),
  });
