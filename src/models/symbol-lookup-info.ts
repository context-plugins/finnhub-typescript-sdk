import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SymbolLookupInfo = {
  description?: string;
  displaySymbol?: string;
  symbol?: string;
  type?: string;
};

export const symbolLookupInfoSchema: Schema<SymbolLookupInfo> = s.object<SymbolLookupInfo>({
  description: s.optional(s.string()),
  displaySymbol: s.optional(s.string()),
  symbol: s.optional(s.string()),
  type: s.optional(s.string()),
});
