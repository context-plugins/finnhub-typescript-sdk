import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { airlinePriceIndexSchema, type AirlinePriceIndex } from "./airline-price-index.js";

export type AirlinePriceIndexData = {
  /** Array of price index. */
  data?: AirlinePriceIndex[];
  /** Airline name */
  airline?: string;
  /** From date */
  from?: string;
  /** To date */
  to?: string;
};

export const airlinePriceIndexDataSchema: Schema<AirlinePriceIndexData> = s.object<AirlinePriceIndexData>({
  data: s.optional(s.array(s.lazy(() => airlinePriceIndexSchema))),
  airline: s.optional(s.string()),
  from: s.optional(s.string()),
  to: s.optional(s.string()),
});
