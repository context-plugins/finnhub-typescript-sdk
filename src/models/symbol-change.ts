import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { symbolChangeInfoSchema, type SymbolChangeInfo } from "./symbol-change-info.js";

export type SymbolChange = {
  /** From date. */
  fromDate?: string;
  /** To date. */
  toDate?: string;
  /** Array of symbol change events. */
  data?: SymbolChangeInfo[];
};

export const symbolChangeSchema: Schema<SymbolChange> = s.object<SymbolChange>({
  fromDate: s.optional(s.string()),
  toDate: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => symbolChangeInfoSchema))),
});
