import { s, type Schema } from "../core/index.js";

export type BasicFinancials = {
  symbol?: string;
  metricType?: string;
  series?: Record<string, unknown>;
  metric?: Record<string, unknown>;
};

export const basicFinancialsSchema: Schema<BasicFinancials> = s.object<BasicFinancials>({
  symbol: s.optional(s.string()),
  metricType: s.optional(s.string()),
  series: s.optional(s.record(s.string(), s.unknown())),
  metric: s.optional(s.record(s.string(), s.unknown())),
});
