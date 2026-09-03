import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Split = {
  symbol?: string;
  date?: string;
  fromFactor?: number;
  toFactor?: number;
};

export const splitSchema: Schema<Split> = s.object<Split>({
  symbol: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  fromFactor: s.optional(s.number()),
  toFactor: s.optional(s.number()),
});
