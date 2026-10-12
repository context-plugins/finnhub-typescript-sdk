import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyEarningsQualityScoreData = {
  /** Period */
  period?: string;
  /** Growth Score */
  growth?: number;
  /** Profitability Score */
  profitability?: number;
  /** Cash Generation and Capital Allocation */
  cashGenerationCapitalAllocation?: number;
  /** Leverage Score */
  leverage?: number;
  /** Total Score */
  score?: number;
  /** Letter Score */
  letterScore?: string;
};

export const companyEarningsQualityScoreDataSchema: Schema<CompanyEarningsQualityScoreData> =
  s.object<CompanyEarningsQualityScoreData>({
    period: s.optional(s.string()),
    growth: s.optional(s.float64()),
    profitability: s.optional(s.float64()),
    cashGenerationCapitalAllocation: s.optional(s.float64()),
    leverage: s.optional(s.float64()),
    score: s.optional(s.float64()),
    letterScore: s.optional(s.string()),
  });
