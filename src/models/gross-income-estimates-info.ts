import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrossIncomeEstimatesInfo = {
  /** Average gross income estimates including Finnhub's proprietary estimates. */
  grossIncomeAvg?: number;
  /** Highest estimate. */
  grossIncomeHigh?: number;
  /** Lowest estimate. */
  grossIncomeLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const grossIncomeEstimatesInfoSchema: Schema<GrossIncomeEstimatesInfo> =
  s.object<GrossIncomeEstimatesInfo>({
    grossIncomeAvg: s.optional(s.float64()),
    grossIncomeHigh: s.optional(s.float64()),
    grossIncomeLow: s.optional(s.float64()),
    numberAnalysts: s.optional(s.int()),
    period: s.optional(s.dateOnly()),
    year: s.optional(s.int()),
    quarter: s.optional(s.int()),
  });
