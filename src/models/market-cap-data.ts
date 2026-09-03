import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarketCapData = {
  atDate?: string;
  marketCapitalization?: number;
};

export const marketCapDataSchema: Schema<MarketCapData> = s.object<MarketCapData>({
  atDate: s.optional(s.string()),
  marketCapitalization: s.optional(s.number()),
});
