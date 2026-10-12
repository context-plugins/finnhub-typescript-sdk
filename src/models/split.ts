import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Split = {
  /** Symbol. */
  symbol?: string;
  /** Split date. */
  date?: string;
  /** From factor. */
  fromFactor?: number;
  /** To factor. */
  toFactor?: number;
};

export const splitSchema: Schema<Split> = s.object<Split>({
  symbol: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  fromFactor: s.optional(s.float64()),
  toFactor: s.optional(s.float64()),
});
