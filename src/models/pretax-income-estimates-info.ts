import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PretaxIncomeEstimatesInfo = {
  /** Average pretax income estimates including Finnhub's proprietary estimates. */
  pretaxIncomeAvg?: number;
  /** Highest estimate. */
  pretaxIncomeHigh?: number;
  /** Lowest estimate. */
  pretaxIncomeLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const pretaxIncomeEstimatesInfoSchema: Schema<PretaxIncomeEstimatesInfo> =
  s.object<PretaxIncomeEstimatesInfo>({
    pretaxIncomeAvg: s.optional(s.float64()),
    pretaxIncomeHigh: s.optional(s.float64()),
    pretaxIncomeLow: s.optional(s.float64()),
    numberAnalysts: s.optional(s.int()),
    period: s.optional(s.dateOnly()),
    year: s.optional(s.int()),
    quarter: s.optional(s.int()),
  });
