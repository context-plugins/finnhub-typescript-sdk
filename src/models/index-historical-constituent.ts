import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IndexHistoricalConstituent = {
  /** Symbol */
  symbol?: string;
  /** <code>add</code> or <code>remove</code>. */
  action?: string;
  /** Date of joining or leaving the index. */
  date?: string;
};

export const indexHistoricalConstituentSchema: Schema<IndexHistoricalConstituent> =
  s.object<IndexHistoricalConstituent>({
    symbol: s.optional(s.string()),
    action: s.optional(s.string()),
    date: s.optional(s.dateOnly()),
  });
