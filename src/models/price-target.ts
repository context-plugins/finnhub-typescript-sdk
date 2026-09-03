import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceTarget = {
  symbol?: string;
  targetHigh?: number;
  targetLow?: number;
  targetMean?: number;
  targetMedian?: number;
  numberAnalysts?: number;
  lastUpdated?: string;
};

export const priceTargetSchema: Schema<PriceTarget> = s.object<PriceTarget>({
  symbol: s.optional(s.string()),
  targetHigh: s.optional(s.number()),
  targetLow: s.optional(s.number()),
  targetMean: s.optional(s.number()),
  targetMedian: s.optional(s.number()),
  numberAnalysts: s.optional(s.number()),
  lastUpdated: s.optional(s.string()),
});
