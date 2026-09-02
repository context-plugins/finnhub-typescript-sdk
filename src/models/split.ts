import { s, type Schema } from "../core/index.js";

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
