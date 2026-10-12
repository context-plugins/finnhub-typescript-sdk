import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BondCandles = {
  /** List of close prices for returned candles. */
  c?: number[];
  /** List of timestamp for returned candles. */
  t?: number[];
  /** Status of the response. This field can either be ok or no_data. */
  s?: string;
};

export const bondCandlesSchema: Schema<BondCandles> = s.object<BondCandles>({
  c: s.optional(s.array(s.float64())),
  t: s.optional(s.array(s.int())),
  s: s.optional(s.string()),
});
