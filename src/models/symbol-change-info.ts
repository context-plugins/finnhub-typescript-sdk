import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SymbolChangeInfo = {
  atDate?: string;
  oldSymbol?: string;
  newSymbol?: string;
};

export const symbolChangeInfoSchema: Schema<SymbolChangeInfo> = s.object<SymbolChangeInfo>({
  atDate: s.optional(s.string()),
  oldSymbol: s.optional(s.string()),
  newSymbol: s.optional(s.string()),
});
