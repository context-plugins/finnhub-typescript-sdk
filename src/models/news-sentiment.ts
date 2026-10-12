import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyNewsStatisticsSchema, type CompanyNewsStatistics } from "./company-news-statistics.js";
import { sentimentSchema, type Sentiment } from "./sentiment.js";

export type NewsSentiment = {
  buzz?: CompanyNewsStatistics;
  /** News score. */
  companyNewsScore?: number;
  /** Sector average bullish percent. */
  sectorAverageBullishPercent?: number;
  /** Sectore average score. */
  sectorAverageNewsScore?: number;
  sentiment?: Sentiment;
  /** Requested symbol. */
  symbol?: string;
};

export const newsSentimentSchema: Schema<NewsSentiment> = s.object<NewsSentiment>({
  buzz: s.optional(s.lazy(() => companyNewsStatisticsSchema)),
  companyNewsScore: s.optional(s.float64()),
  sectorAverageBullishPercent: s.optional(s.float64()),
  sectorAverageNewsScore: s.optional(s.float64()),
  sentiment: s.optional(s.lazy(() => sentimentSchema)),
  symbol: s.optional(s.string()),
});
