import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quote = {
  o?: number;
  h?: number;
  l?: number;
  c?: number;
  pc?: number;
  d?: number;
  dp?: number;
};

export const quoteSchema: Schema<Quote> = s.object<Quote>({
  o: s.optional(s.number()),
  h: s.optional(s.number()),
  l: s.optional(s.number()),
  c: s.optional(s.number()),
  pc: s.optional(s.number()),
  d: s.optional(s.number()),
  dp: s.optional(s.number()),
});
