import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RevenueEstimatesInfo = {
  revenueAvg?: number;
  revenueHigh?: number;
  revenueLow?: number;
  numberAnalysts?: number;
  period?: string;
  year?: number;
  quarter?: number;
};

export const revenueEstimatesInfoSchema: Schema<RevenueEstimatesInfo> = s.object<RevenueEstimatesInfo>({
  revenueAvg: s.optional(s.number()),
  revenueHigh: s.optional(s.number()),
  revenueLow: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
