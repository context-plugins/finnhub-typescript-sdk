import { s, type Schema } from "../core/index.js";
import { marketCapDataSchema, type MarketCapData } from "./market-cap-data.js";

export type HistoricalMarketCapData = {
  data?: MarketCapData[];
  symbol?: string;
  currency?: string;
};

export const historicalMarketCapDataSchema: Schema<HistoricalMarketCapData> =
  s.object<HistoricalMarketCapData>({
    data: s.optional(s.array(s.lazy(() => marketCapDataSchema))),
    symbol: s.optional(s.string()),
    currency: s.optional(s.string()),
  });
