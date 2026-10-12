import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OcfEstimatesInfo = {
  /** Average OCF estimates including Finnhub's proprietary estimates. */
  ocfAvg?: number;
  /** Highest estimate. */
  ocfHigh?: number;
  /** Lowest estimate. */
  ocfLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const ocfEstimatesInfoSchema: Schema<OcfEstimatesInfo> = s.object<OcfEstimatesInfo>({
  ocfAvg: s.optional(s.float64()),
  ocfHigh: s.optional(s.float64()),
  ocfLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
