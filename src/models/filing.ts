import { s, type Schema } from "../core/index.js";

export type Filing = {
  accessNumber?: string;
  symbol?: string;
  cik?: string;
  form?: string;
  filedDate?: string;
  acceptedDate?: string;
  reportUrl?: string;
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
