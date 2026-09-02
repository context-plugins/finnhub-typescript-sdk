import { s, type Schema } from "../core/index.js";

export type Transactions = {
  symbol?: string;
  name?: string;
  share?: number;
  change?: number;
  filingDate?: string;
  transactionDate?: string;
  transactionPrice?: number;
  transactionCode?: string;
};

export const transactionsSchema: Schema<Transactions> = s.object<Transactions>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  share: s.optional(s.number()),
  change: s.optional(s.number()),
  filingDate: s.optional(s.dateOnly()),
  transactionDate: s.optional(s.dateOnly()),
  transactionPrice: s.optional(s.number()),
  transactionCode: s.optional(s.string()),
});
