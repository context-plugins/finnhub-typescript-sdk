import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetIncomeEstimatesInfo = {
  /** Average net income estimates including Finnhub's proprietary estimates. */
  netIncomeAvg?: number;
  /** Highest estimate. */
  netIncomeHigh?: number;
  /** Lowest estimate. */
  netIncomeLow?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Period. */
  period?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const netIncomeEstimatesInfoSchema: Schema<NetIncomeEstimatesInfo> = s.object<NetIncomeEstimatesInfo>({
  netIncomeAvg: s.optional(s.float64()),
  netIncomeHigh: s.optional(s.float64()),
  netIncomeLow: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  period: s.optional(s.dateOnly()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
