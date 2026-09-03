import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EbitdaEstimatesInfo = {
  ebitdaAvg?: number;
  ebitdaHigh?: number;
  ebitdaLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const ebitdaEstimatesInfoSchema: Schema<EbitdaEstimatesInfo> = s.object<EbitdaEstimatesInfo>({
  ebitdaAvg: s.optional(s.number()),
  ebitdaHigh: s.optional(s.number()),
  ebitdaLow: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
