import { s, type Schema } from "../core/index.js";
import { technicalAnalysisSchema, type TechnicalAnalysis } from "./technical-analysis.js";
import { trendSchema, type Trend } from "./trend.js";

export type AggregateIndicators = {
  technicalAnalysis?: TechnicalAnalysis;
  trend?: Trend;
};

export const aggregateIndicatorsSchema: Schema<AggregateIndicators> = s.object<AggregateIndicators>({
  technicalAnalysis: s.optional(s.lazy(() => technicalAnalysisSchema)),
  trend: s.optional(s.lazy(() => trendSchema)),
});
