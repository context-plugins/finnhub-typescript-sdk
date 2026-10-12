import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CongressionalTransaction = {
  /** Transaction amount from. */
  amountFrom?: number;
  /** Transaction amount to. */
  amountTo?: number;
  /** Asset name. */
  assetName?: string;
  /** Filing date. */
  filingDate?: string;
  /** Name of the representative. */
  name?: string;
  /** Owner Type. */
  ownerType?: string;
  /** Position. */
  position?: string;
  /** Symbol. */
  symbol?: string;
  /** Transaction date. */
  transactionDate?: string;
  /** Transaction type <code>Sale</code> or <code>Purchase</code>. */
  transactionType?: string;
};

export const congressionalTransactionSchema: Schema<CongressionalTransaction> =
  s.object<CongressionalTransaction>({
    amountFrom: s.optional(s.float64()),
    amountTo: s.optional(s.float64()),
    assetName: s.optional(s.string()),
    filingDate: s.optional(s.string()),
    name: s.optional(s.string()),
    ownerType: s.optional(s.string()),
    position: s.optional(s.string()),
    symbol: s.optional(s.string()),
    transactionDate: s.optional(s.string()),
    transactionType: s.optional(s.string()),
  });
