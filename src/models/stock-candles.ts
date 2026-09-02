import { s, type Schema } from "../core/index.js";

export type StockCandles = {
  o?: number[];
  h?: number[];
  l?: number[];
  c?: number[];
  v?: number[];
  t?: number[];
  s?: string;
};

export const stockCandlesSchema: Schema<StockCandles> = s.object<StockCandles>({
  o: s.optional(s.array(s.number())),
  h: s.optional(s.array(s.number())),
  l: s.optional(s.array(s.number())),
  c: s.optional(s.array(s.number())),
  v: s.optional(s.array(s.number())),
  t: s.optional(s.array(s.number())),
  s: s.optional(s.string()),
});
