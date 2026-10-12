import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompanyProfile2 = {
  /** Country of company's headquarter. */
  country?: string;
  /** Currency used in company filings. */
  currency?: string;
  /** Listed exchange. */
  exchange?: string;
  /** Company name. */
  name?: string;
  /** Company symbol/ticker as used on the listed exchange. */
  ticker?: string;
  /** IPO date. */
  ipo?: string;
  /** Market Capitalization. */
  marketCapitalization?: number;
  /** Number of oustanding shares. */
  shareOutstanding?: number;
  /** Logo image. */
  logo?: string;
  /** Company phone number. */
  phone?: string;
  /** Company website. */
  weburl?: string;
  /** Finnhub industry classification. */
  finnhubIndustry?: string;
};

export const companyProfile2Schema: Schema<CompanyProfile2> = s.object<CompanyProfile2>({
  country: s.optional(s.string()),
  currency: s.optional(s.string()),
  exchange: s.optional(s.string()),
  name: s.optional(s.string()),
  ticker: s.optional(s.string()),
  ipo: s.optional(s.dateOnly()),
  marketCapitalization: s.optional(s.float64()),
  shareOutstanding: s.optional(s.float64()),
  logo: s.optional(s.string()),
  phone: s.optional(s.string()),
  weburl: s.optional(s.string()),
  finnhubIndustry: s.optional(s.string()),
});
