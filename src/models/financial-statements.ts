import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FinancialStatements = {
  symbol?: string;
  financials?: Record<string, unknown>[];
};

export const financialStatementsSchema: Schema<FinancialStatements> = s.object<FinancialStatements>({
  symbol: s.optional(s.string()),
  financials: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
