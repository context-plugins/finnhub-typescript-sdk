import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EbitEstimatesInfo = {
  /** Average EBIT estimates including Finnhub's proprietary estimates. */
  ebitAvg?: number;
  /** Highest estimate. */
  ebitHigh?: number;
  /** Lowest estimate. */
  ebitLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const ebitEstimatesInfoSchema: Schema<EbitEstimatesInfo> = s.object<EbitEstimatesInfo>({
  ebitAvg: s.optional(s.float64()),
  ebitHigh: s.optional(s.float64()),
  ebitLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
