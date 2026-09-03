import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OcfEstimatesInfo = {
  ocfAvg?: number;
  ocfHigh?: number;
  ocfLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const ocfEstimatesInfoSchema: Schema<OcfEstimatesInfo> = s.object<OcfEstimatesInfo>({
  ocfAvg: s.optional(s.number()),
  ocfHigh: s.optional(s.number()),
  ocfLow: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
