import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceTarget = {
  /** Company symbol. */
  symbol?: string;
  /** Highes analysts' target. */
  targetHigh?: number;
  /** Lowest analysts' target. */
  targetLow?: number;
  /** Mean of all analysts' targets. */
  targetMean?: number;
  /** Median of all analysts' targets. */
  targetMedian?: number;
  /** Number of Analysts. */
  numberAnalysts?: number;
  /** Updated time of the data */
  lastUpdated?: string;
};

export const priceTargetSchema: Schema<PriceTarget> = s.object<PriceTarget>({
  symbol: s.optional(s.string()),
  targetHigh: s.optional(s.float64()),
  targetLow: s.optional(s.float64()),
  targetMean: s.optional(s.float64()),
  targetMedian: s.optional(s.float64()),
  numberAnalysts: s.optional(s.int()),
  lastUpdated: s.optional(s.string()),
});
