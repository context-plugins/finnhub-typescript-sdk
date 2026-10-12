import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceMetrics = {
  /** Symbol of the company. */
  symbol?: string;
  /** Data date. */
  atDate?: string;
  data?: Record<string, unknown>;
};

export const priceMetricsSchema: Schema<PriceMetrics> = s.object<PriceMetrics>({
  symbol: s.optional(s.string()),
  atDate: s.optional(s.string()),
  data: s.optional(s.record(s.string(), s.unknown())),
});
