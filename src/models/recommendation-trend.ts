import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecommendationTrend = {
  /** Company symbol. */
  symbol?: string;
  /** Number of recommendations that fall into the Buy category */
  buy?: number;
  /** Number of recommendations that fall into the Hold category */
  hold?: number;
  /** Updated period */
  period?: string;
  /** Number of recommendations that fall into the Sell category */
  sell?: number;
  /** Number of recommendations that fall into the Strong Buy category */
  strongBuy?: number;
  /** Number of recommendations that fall into the Strong Sell category */
  strongSell?: number;
};

export const recommendationTrendSchema: Schema<RecommendationTrend> = s.object<RecommendationTrend>({
  symbol: s.optional(s.string()),
  buy: s.optional(s.int()),
  hold: s.optional(s.int()),
  period: s.optional(s.string()),
  sell: s.optional(s.int()),
  strongBuy: s.optional(s.int()),
  strongSell: s.optional(s.int()),
});
