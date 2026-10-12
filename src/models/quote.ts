import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quote = {
  /** Open price of the day */
  o?: number;
  /** High price of the day */
  h?: number;
  /** Low price of the day */
  l?: number;
  /** Current price */
  c?: number;
  /** Previous close price */
  pc?: number;
  /** Change */
  d?: number;
  /** Percent change */
  dp?: number;
};

export const quoteSchema: Schema<Quote> = s.object<Quote>({
  o: s.optional(s.float64()),
  h: s.optional(s.float64()),
  l: s.optional(s.float64()),
  c: s.optional(s.float64()),
  pc: s.optional(s.float64()),
  d: s.optional(s.float64()),
  dp: s.optional(s.float64()),
});
