import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyNewsStatisticsSchema, type CompanyNewsStatistics } from "./company-news-statistics.js";
import { sentimentSchema, type Sentiment } from "./sentiment.js";

export type NewsSentiment = {
  buzz?: CompanyNewsStatistics;
  companyNewsScore?: number;
  sectorAverageBullishPercent?: number;
  sectorAverageNewsScore?: number;
  sentiment?: Sentiment;
  symbol?: string;
};

export const newsSentimentSchema: Schema<NewsSentiment> = s.object<NewsSentiment>({
  buzz: s.optional(s.lazy(() => companyNewsStatisticsSchema)),
  companyNewsScore: s.optional(s.number()),
  sectorAverageBullishPercent: s.optional(s.number()),
  sectorAverageNewsScore: s.optional(s.number()),
  sentiment: s.optional(s.lazy(() => sentimentSchema)),
  symbol: s.optional(s.string()),
});
