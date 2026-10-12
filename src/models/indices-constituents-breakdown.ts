import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IndicesConstituentsBreakdown = {
  /** Symbol. */
  symbol?: string;
  /** Name. */
  name?: string;
  /** ISIN. */
  isin?: string;
  /** Cusip. */
  cusip?: string;
  /** Global Share Class FIGI. */
  shareClassFigi?: string;
  /** Weight. */
  weight?: number;
};

export const indicesConstituentsBreakdownSchema: Schema<IndicesConstituentsBreakdown> =
  s.object<IndicesConstituentsBreakdown>({
    symbol: s.optional(s.string()),
    name: s.optional(s.string()),
    isin: s.optional(s.string()),
    cusip: s.optional(s.string()),
    shareClassFigi: s.optional(s.string()),
    weight: s.optional(s.float64()),
    _keysMap: {
      shareClassFigi: "shareClassFIGI",
    },
  });
