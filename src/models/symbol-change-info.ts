import { s, type Schema } from "../core/index.js";

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
