import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ForexSymbol = {
  description?: string;
  displaySymbol?: string;
  symbol?: string;
};

export const forexSymbolSchema: Schema<ForexSymbol> = s.object<ForexSymbol>({
  description: s.optional(s.string()),
  displaySymbol: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
