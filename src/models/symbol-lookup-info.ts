import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SymbolLookupInfo = {
  /** Symbol description */
  description?: string;
  /** Display symbol name. */
  displaySymbol?: string;
  /** Unique symbol used to identify this symbol used in <code>/stock/candle</code> endpoint. */
  symbol?: string;
  /** Security type. */
  type?: string;
};

export const symbolLookupInfoSchema: Schema<SymbolLookupInfo> = s.object<SymbolLookupInfo>({
  description: s.optional(s.string()),
  displaySymbol: s.optional(s.string()),
  symbol: s.optional(s.string()),
  type: s.optional(s.string()),
});
