import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionsSchema, type Transactions } from "./transactions.js";

export type InsiderTransactions = {
  /** Symbol of the company. */
  symbol?: string;
  /** Array of insider transactions. */
  data?: Transactions[];
};

export const insiderTransactionsSchema: Schema<InsiderTransactions> = s.object<InsiderTransactions>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => transactionsSchema))),
});
