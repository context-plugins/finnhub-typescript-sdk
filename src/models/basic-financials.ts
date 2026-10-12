import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BasicFinancials = {
  /** Symbol of the company. */
  symbol?: string;
  /** Metric type. */
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
