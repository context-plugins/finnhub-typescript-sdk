import { s, type Schema } from "../core/index.js";

export type AirlinePriceIndex = {
  date?: string;
  priceIndex?: number;
  dailyAvgPrice?: number;
};

export const airlinePriceIndexSchema: Schema<AirlinePriceIndex> = s.object<AirlinePriceIndex>({
  date: s.optional(s.string()),
  priceIndex: s.optional(s.number()),
  dailyAvgPrice: s.optional(s.number()),
});
