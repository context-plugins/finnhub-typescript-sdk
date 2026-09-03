import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BondTickData = {
  skip?: number;
  count?: number;
  total?: number;
  v?: number[];
  p?: number[];
  y?: number[];
  t?: number[];
  si?: string[];
  cp?: string[];
  rp?: string[];
  ats?: string[];
  c?: string[][];
};

export const bondTickDataSchema: Schema<BondTickData> = s.object<BondTickData>({
  skip: s.optional(s.number()),
  count: s.optional(s.number()),
  total: s.optional(s.number()),
  v: s.optional(s.array(s.number())),
  p: s.optional(s.array(s.number())),
  y: s.optional(s.array(s.number())),
  t: s.optional(s.array(s.number())),
  si: s.optional(s.array(s.string())),
  cp: s.optional(s.array(s.string())),
  rp: s.optional(s.array(s.string())),
  ats: s.optional(s.array(s.string())),
  c: s.optional(s.array(s.array(s.string()))),
});
