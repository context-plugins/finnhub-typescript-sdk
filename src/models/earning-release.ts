import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EarningRelease = {
  /** Symbol. */
  symbol?: string;
  /** Date. */
  date?: string;
  /**
   * Indicates whether the earnings is announced before market open(<code>bmo</code>), after market
   * close(<code>amc</code>), or during market hour(<code>dmh</code>).
   */
  hour?: string;
  /** Earnings year. */
  year?: number;
  /** Earnings quarter. */
  quarter?: number;
  /** EPS estimate. */
  epsEstimate?: number;
  /** EPS actual. */
  epsActual?: number;
  /** Revenue estimate including Finnhub's proprietary estimates. */
  revenueEstimate?: number;
  /** Revenue actual. */
  revenueActual?: number;
};

export const earningReleaseSchema: Schema<EarningRelease> = s.object<EarningRelease>({
  symbol: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  hour: s.optional(s.string()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
  epsEstimate: s.optional(s.float64()),
  epsActual: s.optional(s.float64()),
  revenueEstimate: s.optional(s.float64()),
  revenueActual: s.optional(s.float64()),
});
