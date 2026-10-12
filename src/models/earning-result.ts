import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EarningResult = {
  /** Actual earning result. */
  actual?: number;
  /** Estimated earning. */
  estimate?: number;
  /** Surprise - The difference between actual and estimate. */
  surprise?: number;
  /** Surprise percent. */
  surprisePercent?: number;
  /** Reported period. */
  period?: string;
  /** Company symbol. */
  symbol?: string;
  /** Fiscal year. */
  year?: number;
  /** Fiscal quarter. */
  quarter?: number;
};

export const earningResultSchema: Schema<EarningResult> = s.object<EarningResult>({
  actual: s.optional(s.float64()),
  estimate: s.optional(s.float64()),
  surprise: s.optional(s.float64()),
  surprisePercent: s.optional(s.float64()),
  period: s.optional(s.dateOnly()),
  symbol: s.optional(s.string()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
});
