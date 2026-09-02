import { s, type Schema } from "../core/index.js";

export type PretaxIncomeEstimatesInfo = {
  pretaxIncomeAvg?: number;
  pretaxIncomeHigh?: number;
  pretaxIncomeLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const pretaxIncomeEstimatesInfoSchema: Schema<PretaxIncomeEstimatesInfo> =
  s.object<PretaxIncomeEstimatesInfo>({
    pretaxIncomeAvg: s.optional(s.number()),
    pretaxIncomeHigh: s.optional(s.number()),
    pretaxIncomeLow: s.optional(s.number()),
    numberAnalysts: s.optional(s.number()),
    period: s.optional(s.dateOnly()),
    year: s.optional(s.number()),
    quarter: s.optional(s.number()),
  });
