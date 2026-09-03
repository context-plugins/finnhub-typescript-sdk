import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TickData = {
  s?: string;
  skip?: number;
  count?: number;
  total?: number;
  v?: number[];
  p?: number[];
  t?: number[];
  x?: string[];
  c?: string[][];
};

export const tickDataSchema: Schema<TickData> = s.object<TickData>({
  s: s.optional(s.string()),
  skip: s.optional(s.number()),
  count: s.optional(s.number()),
  total: s.optional(s.number()),
  v: s.optional(s.array(s.number())),
  p: s.optional(s.array(s.number())),
  t: s.optional(s.array(s.number())),
  x: s.optional(s.array(s.string())),
  c: s.optional(s.array(s.array(s.string()))),
});
