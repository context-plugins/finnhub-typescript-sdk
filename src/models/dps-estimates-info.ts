import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DpsEstimatesInfo = {
  /** Average DPS estimates including Finnhub's proprietary estimates. */
  dpsAvg?: number;
  /** Highest estimate. */
  dpsHigh?: number;
  /** Lowest estimate. */
  dpsLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const dpsEstimatesInfoSchema: Schema<DpsEstimatesInfo> = s.object<DpsEstimatesInfo>({
  dpsAvg: s.optional(s.float64()),
  dpsHigh: s.optional(s.float64()),
  dpsLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
