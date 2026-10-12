import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AirlinePriceIndex = {
  /** Date */
  date?: string;
  /** Price Index */
  priceIndex?: number;
  /** Daily average ticket price. */
  dailyAvgPrice?: number;
};

export const airlinePriceIndexSchema: Schema<AirlinePriceIndex> = s.object<AirlinePriceIndex>({
  date: s.optional(s.string()),
  priceIndex: s.optional(s.float64()),
  dailyAvgPrice: s.optional(s.float64()),
});
