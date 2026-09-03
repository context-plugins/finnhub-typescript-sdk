import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyProfile2 = {
  country?: string;
  currency?: string;
  exchange?: string;
  name?: string;
  ticker?: string;
  ipo?: string;
  marketCapitalization?: number;
  shareOutstanding?: number;
  logo?: string;
  phone?: string;
  weburl?: string;
  finnhubIndustry?: string;
};

export const companyProfile2Schema: Schema<CompanyProfile2> = s.object<CompanyProfile2>({
  country: s.optional(s.string()),
  currency: s.optional(s.string()),
  exchange: s.optional(s.string()),
  name: s.optional(s.string()),
  ticker: s.optional(s.string()),
  ipo: s.optional(s.dateOnly()),
  marketCapitalization: s.optional(s.number()),
  shareOutstanding: s.optional(s.number()),
  logo: s.optional(s.string()),
  phone: s.optional(s.string()),
  weburl: s.optional(s.string()),
  finnhubIndustry: s.optional(s.string()),
});
