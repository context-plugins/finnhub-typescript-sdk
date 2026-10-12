import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EbitdaEstimatesInfo = {
  /** Average EBITDA estimates including Finnhub's proprietary estimates. */
  ebitdaAvg?: number;
  /** Highest estimate. */
  ebitdaHigh?: number;
  /** Lowest estimate. */
  ebitdaLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const ebitdaEstimatesInfoSchema: Schema<EbitdaEstimatesInfo> = s.object<EbitdaEstimatesInfo>({
  ebitdaAvg: s.optional(s.float64()),
  ebitdaHigh: s.optional(s.float64()),
  ebitdaLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
