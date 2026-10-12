import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilingResponse = {
  /** Filing Id in Alpharesearch platform */
  filingId?: string;
  /** Filing title */
  title?: string;
  /** Id of the entity submitted the filing */
  filerId?: string;
  /** List of symbol associate with this filing */
  symbol?: Record<string, unknown>;
  /** Filer name */
  name?: string;
  /** Date the filing is submitted. */
  acceptanceDate?: string;
  /** Date the filing is made available to the public */
  filedDate?: string;
  /** Date as which the filing is reported */
  reportDate?: string;
  /** Filing Form */
  form?: string;
  /** Amendment */
  amend?: boolean;
  /** Filing Source */
  source?: string;
  /** Estimate number of page when printing */
  pageCount?: number;
  /** Number of document in this filing */
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
  pageCount: s.optional(s.int()),
  documentCount: s.optional(s.int()),
});
