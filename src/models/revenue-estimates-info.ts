import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RevenueEstimatesInfo = {
  /** Average revenue estimates including Finnhub's proprietary estimates. */
  revenueAvg?: number;
  /** Highest estimate. */
  revenueHigh?: number;
  /** Lowest estimate. */
  revenueLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const revenueEstimatesInfoSchema: Schema<RevenueEstimatesInfo> = s.object<RevenueEstimatesInfo>({
  revenueAvg: s.optional(s.float64()),
  revenueHigh: s.optional(s.float64()),
  revenueLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
