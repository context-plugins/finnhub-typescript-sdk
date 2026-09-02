import { s, type Schema } from "../core/index.js";

export type CompanyEarningsQualityScoreData = {
  period?: string;
  growth?: number;
  profitability?: number;
  cashGenerationCapitalAllocation?: number;
  leverage?: number;
  score?: number;
  letterScore?: string;
};

export const companyEarningsQualityScoreDataSchema: Schema<CompanyEarningsQualityScoreData> =
  s.object<CompanyEarningsQualityScoreData>({
    period: s.optional(s.string()),
    growth: s.optional(s.number()),
    profitability: s.optional(s.number()),
    cashGenerationCapitalAllocation: s.optional(s.number()),
    leverage: s.optional(s.number()),
    score: s.optional(s.number()),
    letterScore: s.optional(s.string()),
  });
