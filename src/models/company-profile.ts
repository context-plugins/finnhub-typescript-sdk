import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyProfile = {
  /** Company name alias. */
  alias?: string[];
  /** Address of company's headquarter. */
  address?: string;
  /** City of company's headquarter. */
  city?: string;
  /** Country of company's headquarter. */
  country?: string;
  /** Currency used in company filings and financials. */
  currency?: string;
  /** Currency used in Estimates data. */
  estimateCurrency?: string;
  /** Currency used in market capitalization. */
  marketCapCurrency?: string;
  /** CUSIP number. */
  cusip?: string;
  /** Sedol number. */
  sedol?: string;
  /** Company business summary. */
  description?: string;
  /** Listed exchange. */
  exchange?: string;
  /** Industry group. */
  ggroup?: string;
  /** Industry. */
  gind?: string;
  /** Sector. */
  gsector?: string;
  /** Sub-industry. */
  gsubind?: string;
  /** ISIN number. */
  isin?: string;
  /** LEI number. */
  lei?: string;
  /** Investor relations website. */
  irUrl?: string;
  /** NAICS national industry. */
  naicsNationalIndustry?: string;
  /** NAICS industry. */
  naics?: string;
  /** NAICS sector. */
  naicsSector?: string;
  /** NAICS subsector. */
  naicsSubsector?: string;
  /** Company name. */
  name?: string;
  /** Company phone number. */
  phone?: string;
  /** State of company's headquarter. */
  state?: string;
  /** Company symbol/ticker as used on the listed exchange. */
  ticker?: string;
  /** Company website. */
  weburl?: string;
  /** IPO date. */
  ipo?: string;
  /** Market Capitalization. */
  marketCapitalization?: number;
  /** Number of oustanding shares. */
  shareOutstanding?: number;
  /** Number of employee. */
  employeeTotal?: number;
  /** Logo image. */
  logo?: string;
  /** Finnhub industry classification. */
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
  marketCapitalization: s.optional(s.float64()),
  shareOutstanding: s.optional(s.float64()),
  employeeTotal: s.optional(s.float64()),
  logo: s.optional(s.string()),
  finnhubIndustry: s.optional(s.string()),
});
