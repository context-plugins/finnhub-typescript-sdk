import { s, type Schema } from "../core/index.js";
import { symbolLookupInfoSchema, type SymbolLookupInfo } from "./symbol-lookup-info.js";

export type SymbolLookup = {
  result?: SymbolLookupInfo[];
  count?: number;
};

export const symbolLookupSchema: Schema<SymbolLookup> = s.object<SymbolLookup>({
  result: s.optional(s.array(s.lazy(() => symbolLookupInfoSchema))),
  count: s.optional(s.number()),
});
