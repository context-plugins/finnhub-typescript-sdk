import { s, type Schema } from "../core/index.js";

export type CryptoSymbol = {
  description?: string;
  displaySymbol?: string;
  symbol?: string;
};

export const cryptoSymbolSchema: Schema<CryptoSymbol> = s.object<CryptoSymbol>({
  description: s.optional(s.string()),
  displaySymbol: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
