import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stockTranscriptsSchema, type StockTranscripts } from "./stock-transcripts.js";

export type EarningsCallTranscriptsList = {
  /** Company symbol. */
  symbol?: string;
  /** Array of transcripts' metadata */
  transcripts?: StockTranscripts[];
};

export const earningsCallTranscriptsListSchema: Schema<EarningsCallTranscriptsList> =
  s.object<EarningsCallTranscriptsList>({
    symbol: s.optional(s.string()),
    transcripts: s.optional(s.array(s.lazy(() => stockTranscriptsSchema))),
  });
