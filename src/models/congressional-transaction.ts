import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CongressionalTransaction = {
  amountFrom?: number;
  amountTo?: number;
  assetName?: string;
  filingDate?: string;
  name?: string;
  ownerType?: string;
  position?: string;
  symbol?: string;
  transactionDate?: string;
  transactionType?: string;
};

export const congressionalTransactionSchema: Schema<CongressionalTransaction> =
  s.object<CongressionalTransaction>({
    amountFrom: s.optional(s.number()),
    amountTo: s.optional(s.number()),
    assetName: s.optional(s.string()),
    filingDate: s.optional(s.string()),
    name: s.optional(s.string()),
    ownerType: s.optional(s.string()),
    position: s.optional(s.string()),
    symbol: s.optional(s.string()),
    transactionDate: s.optional(s.string()),
    transactionType: s.optional(s.string()),
  });
