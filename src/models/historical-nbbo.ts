import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HistoricalNbbo = {
  s?: string;
  skip?: number;
  count?: number;
  total?: number;
  av?: number[];
  a?: number[];
  ax?: string[];
  bv?: number[];
  b?: number[];
  bx?: string[];
  t?: number[];
  c?: string[][];
};

export const historicalNbboSchema: Schema<HistoricalNbbo> = s.object<HistoricalNbbo>({
  s: s.optional(s.string()),
  skip: s.optional(s.number()),
  count: s.optional(s.number()),
  total: s.optional(s.number()),
  av: s.optional(s.array(s.number())),
  a: s.optional(s.array(s.number())),
  ax: s.optional(s.array(s.string())),
  bv: s.optional(s.array(s.number())),
  b: s.optional(s.array(s.number())),
  bx: s.optional(s.array(s.string())),
  t: s.optional(s.array(s.number())),
  c: s.optional(s.array(s.array(s.string()))),
});
