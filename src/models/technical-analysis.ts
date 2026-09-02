import { s, type Schema } from "../core/index.js";
import { indicatorSchema, type Indicator } from "./indicator.js";

export type TechnicalAnalysis = {
  count?: Indicator;
  signal?: string;
};

export const technicalAnalysisSchema: Schema<TechnicalAnalysis> = s.object<TechnicalAnalysis>({
  count: s.optional(s.lazy(() => indicatorSchema)),
  signal: s.optional(s.string()),
});
