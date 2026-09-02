import { s, type Schema } from "../core/index.js";

export type Dividends = {
  symbol?: string;
  date?: string;
  amount?: number;
  adjustedAmount?: number;
  payDate?: string;
  recordDate?: string;
  declarationDate?: string;
  currency?: string;
  freq?: string;
};

export const dividendsSchema: Schema<Dividends> = s.object<Dividends>({
  symbol: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  amount: s.optional(s.number()),
  adjustedAmount: s.optional(s.number()),
  payDate: s.optional(s.dateOnly()),
  recordDate: s.optional(s.dateOnly()),
  declarationDate: s.optional(s.dateOnly()),
  currency: s.optional(s.string()),
  freq: s.optional(s.string()),
});
