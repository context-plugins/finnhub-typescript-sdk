import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filingSentimentSchema, type FilingSentiment } from "./filing-sentiment.js";

export type SecSentimentAnalysis = {
  /** Access number. */
  accessNumber?: string;
  /** Symbol. */
  symbol?: string;
  /** CIK. */
  cik?: string;
  sentiment?: FilingSentiment;
};

export const secSentimentAnalysisSchema: Schema<SecSentimentAnalysis> = s.object<SecSentimentAnalysis>({
  accessNumber: s.optional(s.string()),
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  sentiment: s.optional(s.lazy(() => filingSentimentSchema)),
});
