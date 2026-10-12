import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Report = {
  /** Access number. */
  accessNumber?: string;
  /** Symbol. */
  symbol?: string;
  /** CIK. */
  cik?: string;
  /** Year. */
  year?: number;
  /** Quarter. */
  quarter?: number;
  /** Form type. */
  form?: string;
  /** Period start date <code>%Y-%m-%d %H:%M:%S</code>. */
  startDate?: string;
  /** Period end date <code>%Y-%m-%d %H:%M:%S</code>. */
  endDate?: string;
  /** Filed date <code>%Y-%m-%d %H:%M:%S</code>. */
  filedDate?: string;
  /** Accepted date <code>%Y-%m-%d %H:%M:%S</code>. */
  acceptedDate?: string;
  report?: Record<string, unknown>;
};

export const reportSchema: Schema<Report> = s.object<Report>({
  accessNumber: s.optional(s.string()),
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
  form: s.optional(s.string()),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  filedDate: s.optional(s.string()),
  acceptedDate: s.optional(s.string()),
  report: s.optional(s.record(s.string(), s.unknown())),
});
