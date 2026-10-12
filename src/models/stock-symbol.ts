import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StockSymbol = {
  /** Symbol description */
  description?: string;
  /** Display symbol name. */
  displaySymbol?: string;
  /** Unique symbol used to identify this symbol used in <code>/stock/candle</code> endpoint. */
  symbol?: string;
  /** Security type. */
  type?: string;
  /** Primary exchange's MIC. */
  mic?: string;
  /** FIGI identifier. */
  figi?: string;
  /** Global Share Class FIGI. */
  shareClassFigi?: string;
  /** Price's currency. This might be different from the reporting currency of fundamental data. */
  currency?: string;
  /** Alternative ticker for exchanges with multiple tickers for 1 stock such as BSE. */
  symbol2?: string;
  /**
   * ISIN. This field is only available for EU stocks and selected Asian markets. Entitlement from
   * Finnhub is required to access this field.
   */
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
