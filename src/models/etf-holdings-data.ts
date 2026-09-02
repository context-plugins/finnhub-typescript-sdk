import { s, type Schema } from "../core/index.js";

export type EtfHoldingsData = {
  symbol?: string;
  name?: string;
  isin?: string;
  cusip?: string;
  share?: number;
  percent?: number;
  value?: number;
  assetType?: string;
};

export const etfHoldingsDataSchema: Schema<EtfHoldingsData> = s.object<EtfHoldingsData>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  share: s.optional(s.number()),
  percent: s.optional(s.number()),
  value: s.optional(s.number()),
  assetType: s.optional(s.string()),
});
