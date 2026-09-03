import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyProfile = {
  alias?: string[];
  address?: string;
  city?: string;
  country?: string;
  currency?: string;
  estimateCurrency?: string;
  marketCapCurrency?: string;
  cusip?: string;
  sedol?: string;
  description?: string;
  exchange?: string;
  ggroup?: string;
  gind?: string;
  gsector?: string;
  gsubind?: string;
  isin?: string;
  lei?: string;
  irUrl?: string;
  naicsNationalIndustry?: string;
  naics?: string;
  naicsSector?: string;
  naicsSubsector?: string;
  name?: string;
  phone?: string;
  state?: string;
  ticker?: string;
  weburl?: string;
  ipo?: string;
  marketCapitalization?: number;
  shareOutstanding?: number;
  employeeTotal?: number;
  logo?: string;
  finnhubIndustry?: string;
};

export const companyProfileSchema: Schema<CompanyProfile> = s.object<CompanyProfile>({
  alias: s.optional(s.array(s.string())),
  address: s.optional(s.string()),
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  currency: s.optional(s.string()),
  estimateCurrency: s.optional(s.string()),
  marketCapCurrency: s.optional(s.string()),
  cusip: s.optional(s.string()),
  sedol: s.optional(s.string()),
  description: s.optional(s.string()),
  exchange: s.optional(s.string()),
  ggroup: s.optional(s.string()),
  gind: s.optional(s.string()),
  gsector: s.optional(s.string()),
  gsubind: s.optional(s.string()),
  isin: s.optional(s.string()),
  lei: s.optional(s.string()),
  irUrl: s.optional(s.string()),
  naicsNationalIndustry: s.optional(s.string()),
  naics: s.optional(s.string()),
  naicsSector: s.optional(s.string()),
  naicsSubsector: s.optional(s.string()),
  name: s.optional(s.string()),
  phone: s.optional(s.string()),
  state: s.optional(s.string()),
  ticker: s.optional(s.string()),
  weburl: s.optional(s.string()),
  ipo: s.optional(s.dateOnly()),
  marketCapitalization: s.optional(s.number()),
  shareOutstanding: s.optional(s.number()),
  employeeTotal: s.optional(s.number()),
  logo: s.optional(s.string()),
  finnhubIndustry: s.optional(s.string()),
});
