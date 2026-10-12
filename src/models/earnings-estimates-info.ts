import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EarningsEstimatesInfo = {
  /** Average EPS estimates including Finnhub's proprietary estimates. */
  epsAvg?: number;
  /** Highest estimate. */
  epsHigh?: number;
  /** Lowest estimate. */
  epsLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const earningsEstimatesInfoSchema: Schema<EarningsEstimatesInfo> = s.object<EarningsEstimatesInfo>({
  epsAvg: s.optional(s.float64()),
  epsHigh: s.optional(s.float64()),
  epsLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
