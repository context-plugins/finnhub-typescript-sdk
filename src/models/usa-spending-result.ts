import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usaSpendingSchema, type UsaSpending } from "./usa-spending.js";

export type UsaSpendingResult = {
  symbol?: string;
  data?: UsaSpending[];
};

export const usaSpendingResultSchema: Schema<UsaSpendingResult> = s.object<UsaSpendingResult>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => usaSpendingSchema))),
});
