import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IndicesConstituentsBreakdown = {
  symbol?: string;
  name?: string;
  isin?: string;
  cusip?: string;
  shareClassFigi?: string;
  weight?: number;
};

export const indicesConstituentsBreakdownSchema: Schema<IndicesConstituentsBreakdown> =
  s.object<IndicesConstituentsBreakdown>({
    symbol: s.optional(s.string()),
    name: s.optional(s.string()),
    isin: s.optional(s.string()),
    cusip: s.optional(s.string()),
    shareClassFigi: s.optional(s.string()),
    weight: s.optional(s.number()),
    _keysMap: {
      shareClassFigi: "shareClassFIGI",
    },
  });
