import { s, type Schema } from "../core/index.js";

export type BondCandles = {
  c?: number[];
  t?: number[];
  s?: string;
};

export const bondCandlesSchema: Schema<BondCandles> = s.object<BondCandles>({
  c: s.optional(s.array(s.number())),
  t: s.optional(s.array(s.number())),
  s: s.optional(s.string()),
});
