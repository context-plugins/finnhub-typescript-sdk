import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchBody = {
  query: string;
  isins?: string;
  cusips?: string;
  ciks?: string;
  sedarIds?: string;
  chIds?: string;
  symbols?: string;
  sedols?: string;
  sources?: string;
  forms?: string;
  gics?: string;
  naics?: string;
  exhibits?: string;
  exchanges?: string;
  countries?: string;
  acts?: string;
  caps?: string;
  fromDate?: string;
  toDate?: string;
  page?: string;
  sort?: string;
  highlighted?: boolean;
};

export const searchBodySchema: Schema<SearchBody> = s.object<SearchBody>({
  query: s.string(),
  isins: s.optional(s.string()),
  cusips: s.optional(s.string()),
  ciks: s.optional(s.string()),
  sedarIds: s.optional(s.string()),
  chIds: s.optional(s.string()),
  symbols: s.optional(s.string()),
  sedols: s.optional(s.string()),
  sources: s.optional(s.string()),
  forms: s.optional(s.string()),
  gics: s.optional(s.string()),
  naics: s.optional(s.string()),
  exhibits: s.optional(s.string()),
  exchanges: s.optional(s.string()),
  countries: s.optional(s.string()),
  acts: s.optional(s.string()),
  caps: s.optional(s.string()),
  fromDate: s.optional(s.string()),
  toDate: s.optional(s.string()),
  page: s.optional(s.string()),
  sort: s.optional(s.string()),
  highlighted: s.optional(s.boolean()),
});
