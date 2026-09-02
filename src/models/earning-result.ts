import { s, type Schema } from "../core/index.js";

export type EarningResult = {
  actual?: number;
  estimate?: number;
  surprise?: number;
  surprisePercent?: number;
  period?: string;
  symbol?: string;
  year?: number;
  quarter?: number;
};

export const earningResultSchema: Schema<EarningResult> = s.object<EarningResult>({
  actual: s.optional(s.number()),
  estimate: s.optional(s.number()),
  surprise: s.optional(s.number()),
  surprisePercent: s.optional(s.number()),
  period: s.optional(s.dateOnly()),
  symbol: s.optional(s.string()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
});
