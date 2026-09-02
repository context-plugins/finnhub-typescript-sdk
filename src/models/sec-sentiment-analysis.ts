import { s, type Schema } from "../core/index.js";
import { filingSentimentSchema, type FilingSentiment } from "./filing-sentiment.js";

export type SecSentimentAnalysis = {
  accessNumber?: string;
  symbol?: string;
  cik?: string;
  sentiment?: FilingSentiment;
};

export const secSentimentAnalysisSchema: Schema<SecSentimentAnalysis> = s.object<SecSentimentAnalysis>({
  accessNumber: s.optional(s.string()),
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  sentiment: s.optional(s.lazy(() => filingSentimentSchema)),
});
