import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InternationalFiling = {
  symbol?: string;
  companyName?: string;
  filedDate?: string;
  category?: string;
  title?: string;
  description?: string;
  url?: string;
  language?: string;
  country?: string;
};

export const internationalFilingSchema: Schema<InternationalFiling> = s.object<InternationalFiling>({
  symbol: s.optional(s.string()),
  companyName: s.optional(s.string()),
  filedDate: s.optional(s.string()),
  category: s.optional(s.string()),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  url: s.optional(s.string()),
  language: s.optional(s.string()),
  country: s.optional(s.string()),
});
