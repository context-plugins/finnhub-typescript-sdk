import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EarningsEstimatesInfo = {
  epsAvg?: number;
  epsHigh?: number;
  epsLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const earningsEstimatesInfoSchema: Schema<EarningsEstimatesInfo> = s.object<EarningsEstimatesInfo>({
  epsAvg: s.optional(s.number()),
  epsHigh: s.optional(s.number()),
  epsLow: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
