import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FcfEstimatesInfo = {
  fcfAvg?: number;
  fcfHigh?: number;
  fcfLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const fcfEstimatesInfoSchema: Schema<FcfEstimatesInfo> = s.object<FcfEstimatesInfo>({
  fcfAvg: s.optional(s.number()),
  fcfHigh: s.optional(s.number()),
  fcfLow: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
