import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CapexEstimatesInfo = {
  /** Average capex estimates including Finnhub's proprietary estimates. */
  capexAvg?: number;
  /** Highest estimate. */
  capexHigh?: number;
  /** Lowest estimate. */
  capexLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const capexEstimatesInfoSchema: Schema<CapexEstimatesInfo> = s.object<CapexEstimatesInfo>({
  capexAvg: s.optional(s.float64()),
  capexHigh: s.optional(s.float64()),
  capexLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
