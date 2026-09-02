import { s, type Schema } from "../core/index.js";

export type PriceMetrics = {
  symbol?: string;
  atDate?: string;
  data?: Record<string, unknown>;
};

export const priceMetricsSchema: Schema<PriceMetrics> = s.object<PriceMetrics>({
  symbol: s.optional(s.string()),
  atDate: s.optional(s.string()),
  data: s.optional(s.record(s.string(), s.unknown())),
});
