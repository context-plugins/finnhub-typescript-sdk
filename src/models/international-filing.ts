import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InternationalFiling = {
  /** Symbol. */
  symbol?: string;
  /** Company name. */
  companyName?: string;
  /** Filed date <code>%Y-%m-%d %H:%M:%S</code>. */
  filedDate?: string;
  /** Category. */
  category?: string;
  /** Document's title. */
  title?: string;
  /** Document's description. */
  description?: string;
  /** Url. */
  url?: string;
  /** Language. */
  language?: string;
  /** Country. */
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
