import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usaSpendingSchema, type UsaSpending } from "./usa-spending.js";

export type UsaSpendingResult = {
  /** Symbol. */
  symbol?: string;
  /** Array of government's spending data points. */
  data?: UsaSpending[];
};

export const usaSpendingResultSchema: Schema<UsaSpendingResult> = s.object<UsaSpendingResult>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => usaSpendingSchema))),
});
