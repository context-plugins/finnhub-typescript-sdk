import { s, type Schema } from "../core/index.js";
import { transactionsSchema, type Transactions } from "./transactions.js";

export type InsiderTransactions = {
  symbol?: string;
  data?: Transactions[];
};

export const insiderTransactionsSchema: Schema<InsiderTransactions> = s.object<InsiderTransactions>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => transactionsSchema))),
});
