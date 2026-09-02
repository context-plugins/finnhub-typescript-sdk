import { s, type Schema } from "../core/index.js";

export type MarketCapData = {
  atDate?: string;
  marketCapitalization?: number;
};

export const marketCapDataSchema: Schema<MarketCapData> = s.object<MarketCapData>({
  atDate: s.optional(s.string()),
  marketCapitalization: s.optional(s.number()),
});
