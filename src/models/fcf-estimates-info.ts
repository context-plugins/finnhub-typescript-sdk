import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FcfEstimatesInfo = {
  /** Average FCF estimates including Finnhub's proprietary estimates. */
  fcfAvg?: number;
  /** Highest estimate. */
  fcfHigh?: number;
  /** Lowest estimate. */
  fcfLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const fcfEstimatesInfoSchema: Schema<FcfEstimatesInfo> = s.object<FcfEstimatesInfo>({
  fcfAvg: s.optional(s.float64()),
  fcfHigh: s.optional(s.float64()),
  fcfLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
