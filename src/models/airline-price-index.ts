import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
