import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IpoEvent = {
  /** Symbol. */
  symbol?: string;
  /** IPO date. */
  date?: string;
  /** Exchange. */
  exchange?: string;
  /** Company's name. */
  name?: string;
  /**
   * IPO status. Can take 1 of the following values:
   * <code>expected</code>,<code>priced</code>,<code>withdrawn</code>,<code>filed</code>
   */
  status?: string;
  /** Projected price or price range. */
  price?: string;
  /** Number of shares offered during the IPO. */
  numberOfShares?: number;
  /** Total shares value. */
  totalSharesValue?: number;
};

export const ipoEventSchema: Schema<IpoEvent> = s.object<IpoEvent>({
  symbol: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  exchange: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.string()),
  price: s.optional(s.string()),
  numberOfShares: s.optional(s.float64()),
  totalSharesValue: s.optional(s.float64()),
});
