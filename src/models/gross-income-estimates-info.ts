import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrossIncomeEstimatesInfo = {
  grossIncomeAvg?: number;
  grossIncomeHigh?: number;
  grossIncomeLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const grossIncomeEstimatesInfoSchema: Schema<GrossIncomeEstimatesInfo> =
  s.object<GrossIncomeEstimatesInfo>({
    grossIncomeAvg: s.optional(s.number()),
    grossIncomeHigh: s.optional(s.number()),
    grossIncomeLow: s.optional(s.number()),
    numberAnalysts: s.optional(s.number()),
    period: s.optional(s.dateOnly()),
    year: s.optional(s.number()),
    quarter: s.optional(s.number()),
  });
