import { s, type Schema } from "../core/index.js";

export type NetIncomeEstimatesInfo = {
  netIncomeAvg?: number;
  netIncomeHigh?: number;
  netIncomeLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const netIncomeEstimatesInfoSchema: Schema<NetIncomeEstimatesInfo> = s.object<NetIncomeEstimatesInfo>({
  netIncomeAvg: s.optional(s.number()),
  netIncomeHigh: s.optional(s.number()),
  netIncomeLow: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
