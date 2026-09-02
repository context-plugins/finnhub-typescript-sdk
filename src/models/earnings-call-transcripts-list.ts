import { s, type Schema } from "../core/index.js";
import { stockTranscriptsSchema, type StockTranscripts } from "./stock-transcripts.js";

export type EarningsCallTranscriptsList = {
  symbol?: string;
  transcripts?: StockTranscripts[];
};

export const earningsCallTranscriptsListSchema: Schema<EarningsCallTranscriptsList> =
  s.object<EarningsCallTranscriptsList>({
    symbol: s.optional(s.string()),
    transcripts: s.optional(s.array(s.lazy(() => stockTranscriptsSchema))),
  });
