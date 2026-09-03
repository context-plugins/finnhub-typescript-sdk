import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecommendationTrend = {
  symbol?: string;
  buy?: number;
  hold?: number;
  period?: string;
  sell?: number;
  strongBuy?: number;
  strongSell?: number;
};

export const recommendationTrendSchema: Schema<RecommendationTrend> = s.object<RecommendationTrend>({
  symbol: s.optional(s.string()),
  buy: s.optional(s.number()),
  hold: s.optional(s.number()),
  period: s.optional(s.string()),
  sell: s.optional(s.number()),
  strongBuy: s.optional(s.number()),
  strongSell: s.optional(s.number()),
});
