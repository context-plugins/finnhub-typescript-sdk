import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StockSymbol = {
  description?: string;
  displaySymbol?: string;
  symbol?: string;
  type?: string;
  mic?: string;
  figi?: string;
  shareClassFigi?: string;
  currency?: string;
  symbol2?: string;
  isin?: string;
};

export const stockSymbolSchema: Schema<StockSymbol> = s.object<StockSymbol>({
  description: s.optional(s.string()),
  displaySymbol: s.optional(s.string()),
  symbol: s.optional(s.string()),
  type: s.optional(s.string()),
  mic: s.optional(s.string()),
  figi: s.optional(s.string()),
  shareClassFigi: s.optional(s.string()),
  currency: s.optional(s.string()),
  symbol2: s.optional(s.string()),
  isin: s.optional(s.string()),
  _keysMap: {
    shareClassFigi: "shareClassFIGI",
  },
});
