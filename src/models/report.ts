import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Report = {
  accessNumber?: string;
  symbol?: string;
  cik?: string;
  year?: number;
  quarter?: number;
  form?: string;
  startDate?: string;
  endDate?: string;
  filedDate?: string;
  acceptedDate?: string;
  report?: Record<string, unknown>;
};

export const reportSchema: Schema<Report> = s.object<Report>({
  accessNumber: s.optional(s.string()),
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
  form: s.optional(s.string()),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  filedDate: s.optional(s.string()),
  acceptedDate: s.optional(s.string()),
  report: s.optional(s.record(s.string(), s.unknown())),
});
