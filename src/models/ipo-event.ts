import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IpoEvent = {
  symbol?: string;
  date?: string;
  exchange?: string;
  name?: string;
  status?: string;
  price?: string;
  numberOfShares?: number;
  totalSharesValue?: number;
};

export const ipoEventSchema: Schema<IpoEvent> = s.object<IpoEvent>({
  symbol: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  exchange: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.string()),
  price: s.optional(s.string()),
  numberOfShares: s.optional(s.number()),
  totalSharesValue: s.optional(s.number()),
});
