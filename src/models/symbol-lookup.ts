import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { symbolLookupInfoSchema, type SymbolLookupInfo } from "./symbol-lookup-info.js";

export type SymbolLookup = {
  /** Array of search results. */
  result?: SymbolLookupInfo[];
  /** Number of results. */
  count?: number;
};

export const symbolLookupSchema: Schema<SymbolLookup> = s.object<SymbolLookup>({
  result: s.optional(s.array(s.lazy(() => symbolLookupInfoSchema))),
  count: s.optional(s.int()),
});
