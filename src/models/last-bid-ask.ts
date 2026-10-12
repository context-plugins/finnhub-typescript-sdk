import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LastBidAsk = {
  /** Bid price. */
  b?: number;
  /** Ask price. */
  a?: number;
  /** Bid volume. */
  bv?: number;
  /** Ask volume. */
  av?: number;
  /** Reference UNIX timestamp in ms. */
  t?: number;
};

export const lastBidAskSchema: Schema<LastBidAsk> = s.object<LastBidAsk>({
  b: s.optional(s.float64()),
  a: s.optional(s.float64()),
  bv: s.optional(s.float64()),
  av: s.optional(s.float64()),
  t: s.optional(s.int()),
});
