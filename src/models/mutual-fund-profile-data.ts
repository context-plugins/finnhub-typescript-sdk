import { s, type Schema } from "../core/index.js";

export type MutualFundProfileData = {
  name?: string;
  category?: string;
  investmentSegment?: string;
  totalNav?: number;
  expenseRatio?: number;
  benchmark?: string;
  inceptionDate?: string;
  description?: string;
  fundFamily?: string;
  fundCompany?: string;
  manager?: string;
  status?: string;
  beta?: number;
  deferredLoad?: number;
  fee12B1?: number;
  frontLoad?: number;
  iraMinInvestment?: number;
  isin?: string;
  cusip?: string;
  maxRedemptionFee?: number;
  standardMinInvestment?: number;
  turnover?: number;
  seriesId?: string;
  seriesName?: string;
  classId?: string;
  className?: string;
  sfdrClassification?: string;
  currency?: string;
};

export const mutualFundProfileDataSchema: Schema<MutualFundProfileData> = s.object<MutualFundProfileData>({
  name: s.optional(s.string()),
  category: s.optional(s.string()),
  investmentSegment: s.optional(s.string()),
  totalNav: s.optional(s.number()),
  expenseRatio: s.optional(s.number()),
  benchmark: s.optional(s.string()),
  inceptionDate: s.optional(s.dateOnly()),
  description: s.optional(s.string()),
  fundFamily: s.optional(s.string()),
  fundCompany: s.optional(s.string()),
  manager: s.optional(s.string()),
  status: s.optional(s.string()),
  beta: s.optional(s.number()),
  deferredLoad: s.optional(s.number()),
  fee12B1: s.optional(s.number()),
  frontLoad: s.optional(s.number()),
  iraMinInvestment: s.optional(s.number()),
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  maxRedemptionFee: s.optional(s.number()),
  standardMinInvestment: s.optional(s.number()),
  turnover: s.optional(s.number()),
  seriesId: s.optional(s.string()),
  seriesName: s.optional(s.string()),
  classId: s.optional(s.string()),
  className: s.optional(s.string()),
  sfdrClassification: s.optional(s.string()),
  currency: s.optional(s.string()),
  _keysMap: {
    fee12B1: "fee12b1",
  },
});
