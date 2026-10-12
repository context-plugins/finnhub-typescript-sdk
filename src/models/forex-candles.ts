import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ForexCandles = {
  /** List of open prices for returned candles. */
  o?: number[];
  /** List of high prices for returned candles. */
  h?: number[];
  /** List of low prices for returned candles. */
  l?: number[];
  /** List of close prices for returned candles. */
  c?: number[];
  /** List of volume data for returned candles. */
  v?: number[];
  /** List of timestamp for returned candles. */
  t?: number[];
  /** Status of the response. This field can either be ok or no_data. */
  s?: string;
};

export const forexCandlesSchema: Schema<ForexCandles> = s.object<ForexCandles>({
  o: s.optional(s.array(s.float64())),
  h: s.optional(s.array(s.float64())),
  l: s.optional(s.array(s.float64())),
  c: s.optional(s.array(s.float64())),
  v: s.optional(s.array(s.float64())),
  t: s.optional(s.array(s.float64())),
  s: s.optional(s.string()),
});
