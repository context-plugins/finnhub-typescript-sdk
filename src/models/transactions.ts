import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transactions = {
  /** Symbol. */
  symbol?: string;
  /** Insider's name. */
  name?: string;
  /** Number of shares held after the transaction. */
  share?: number;
  /**
   * Number of share changed from the last period. A positive value suggests a <code>BUY</code>
   * transaction. A negative value suggests a <code>SELL</code> transaction.
   */
  change?: number;
  /** Filing date. */
  filingDate?: string;
  /** Transaction date. */
  transactionDate?: string;
  /** Average transaction price. */
  transactionPrice?: number;
  /**
   * Transaction code. A list of codes and their meanings can be found <a
   * href="https://www.sec.gov/about/forms/form4data.pdf" target="_blank" rel="noopener">here</a>.
   */
  transactionCode?: string;
};

export const transactionsSchema: Schema<Transactions> = s.object<Transactions>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  share: s.optional(s.int()),
  change: s.optional(s.int()),
  filingDate: s.optional(s.dateOnly()),
  transactionDate: s.optional(s.dateOnly()),
  transactionPrice: s.optional(s.float64()),
  transactionCode: s.optional(s.string()),
});
