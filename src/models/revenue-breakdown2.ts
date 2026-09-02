import { s, type Schema } from "../core/index.js";

export type RevenueBreakdown2 = {
  symbol?: string;
  currency?: string;
  data?: Record<string, unknown>;
};

export const revenueBreakdown2Schema: Schema<RevenueBreakdown2> = s.object<RevenueBreakdown2>({
  symbol: s.optional(s.string()),
  currency: s.optional(s.string()),
  data: s.optional(s.record(s.string(), s.unknown())),
});
