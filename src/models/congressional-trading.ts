import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  congressionalTransactionSchema,
  type CongressionalTransaction,
} from "./congressional-transaction.js";

export type CongressionalTrading = {
  /** Symbol of the company. */
  symbol?: string;
  /** Array of stock trades. */
  data?: CongressionalTransaction[];
};

export const congressionalTradingSchema: Schema<CongressionalTrading> = s.object<CongressionalTrading>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => congressionalTransactionSchema))),
});
