import { s, type Schema } from "../core/index.js";

export type FilingResponse = {
  filingId?: string;
  title?: string;
  filerId?: string;
  symbol?: Record<string, unknown>;
  name?: string;
  acceptanceDate?: string;
  filedDate?: string;
  reportDate?: string;
  form?: string;
  amend?: boolean;
  source?: string;
  pageCount?: number;
  documentCount?: number;
};

export const filingResponseSchema: Schema<FilingResponse> = s.object<FilingResponse>({
  filingId: s.optional(s.string()),
  title: s.optional(s.string()),
  filerId: s.optional(s.string()),
  symbol: s.optional(s.record(s.string(), s.unknown())),
  name: s.optional(s.string()),
  acceptanceDate: s.optional(s.string()),
  filedDate: s.optional(s.string()),
  reportDate: s.optional(s.string()),
  form: s.optional(s.string()),
  amend: s.optional(s.boolean()),
  source: s.optional(s.string()),
  pageCount: s.optional(s.number()),
  documentCount: s.optional(s.number()),
});
