import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EbitEstimatesInfo = {
  ebitAvg?: number;
  ebitHigh?: number;
  ebitLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const ebitEstimatesInfoSchema: Schema<EbitEstimatesInfo> = s.object<EbitEstimatesInfo>({
  ebitAvg: s.optional(s.number()),
  ebitHigh: s.optional(s.number()),
  ebitLow: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
