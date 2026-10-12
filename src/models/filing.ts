import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Filing = {
  /** Access number. */
  accessNumber?: string;
  /** Symbol. */
  symbol?: string;
  /** CIK. */
  cik?: string;
  /** Form type. */
  form?: string;
  /** Filed date <code>%Y-%m-%d %H:%M:%S</code>. */
  filedDate?: string;
  /** Accepted date <code>%Y-%m-%d %H:%M:%S</code>. */
  acceptedDate?: string;
  /** Report's URL. */
  reportUrl?: string;
  /** Filing's URL. */
  filingUrl?: string;
};

export const filingSchema: Schema<Filing> = s.object<Filing>({
  accessNumber: s.optional(s.string()),
  symbol: s.optional(s.string()),
  cik: s.optional(s.string()),
  form: s.optional(s.string()),
  filedDate: s.optional(s.string()),
  acceptedDate: s.optional(s.string()),
  reportUrl: s.optional(s.string()),
  filingUrl: s.optional(s.string()),
});
