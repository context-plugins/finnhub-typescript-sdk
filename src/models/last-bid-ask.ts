import { s, type Schema } from "../core/index.js";

export type LastBidAsk = {
  b?: number;
  a?: number;
  bv?: number;
  av?: number;
  t?: number;
};

export const lastBidAskSchema: Schema<LastBidAsk> = s.object<LastBidAsk>({
  b: s.optional(s.number()),
  a: s.optional(s.number()),
  bv: s.optional(s.number()),
  av: s.optional(s.number()),
  t: s.optional(s.number()),
});
