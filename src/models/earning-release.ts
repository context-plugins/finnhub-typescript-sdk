import { s, type Schema } from "../core/index.js";

export type EarningRelease = {
  symbol?: string;
  date?: string;
  hour?: string;
  year?: number;
  quarter?: number;
  epsEstimate?: number;
  epsActual?: number;
  revenueEstimate?: number;
  revenueActual?: number;
};

export const earningReleaseSchema: Schema<EarningRelease> = s.object<EarningRelease>({
  symbol: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  hour: s.optional(s.string()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
  epsEstimate: s.optional(s.number()),
  epsActual: s.optional(s.number()),
  revenueEstimate: s.optional(s.number()),
  revenueActual: s.optional(s.number()),
});
