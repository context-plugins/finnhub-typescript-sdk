import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { indicatorSchema, type Indicator } from "./indicator.js";

export type TechnicalAnalysis = {
  count?: Indicator;
  signal?: string;
};

export const technicalAnalysisSchema: Schema<TechnicalAnalysis> = s.object<TechnicalAnalysis>({
  count: s.optional(s.lazy(() => indicatorSchema)),
  signal: s.optional(s.string()),
});
