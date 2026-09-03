import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MutualFundHoldingsData = {
  symbol?: string;
  name?: string;
  isin?: string;
  cusip?: string;
  share?: number;
  percent?: number;
  value?: number;
  assetType?: string;
};

export const mutualFundHoldingsDataSchema: Schema<MutualFundHoldingsData> = s.object<MutualFundHoldingsData>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  share: s.optional(s.number()),
  percent: s.optional(s.number()),
  value: s.optional(s.number()),
  assetType: s.optional(s.string()),
});
