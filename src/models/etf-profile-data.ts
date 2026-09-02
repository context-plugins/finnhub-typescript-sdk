import { s, type Schema } from "../core/index.js";

export type EtfProfileData = {
  name?: string;
  assetClass?: string;
  investmentSegment?: string;
  aum?: number;
  nav?: number;
  navCurrency?: string;
  expenseRatio?: number;
  trackingIndex?: string;
  etfCompany?: string;
  domicile?: string;
  inceptionDate?: string;
  website?: string;
  logo?: string;
  isin?: string;
  cusip?: string;
  priceToEarnings?: number;
  priceToBook?: number;
  avgVolume?: number;
  description?: string;
  isInverse?: boolean;
  isLeveraged?: boolean;
  leverageFactor?: number;
  dividendYield?: number;
};

export const etfProfileDataSchema: Schema<EtfProfileData> = s.object<EtfProfileData>({
  name: s.optional(s.string()),
  assetClass: s.optional(s.string()),
  investmentSegment: s.optional(s.string()),
  aum: s.optional(s.number()),
  nav: s.optional(s.number()),
  navCurrency: s.optional(s.string()),
  expenseRatio: s.optional(s.number()),
  trackingIndex: s.optional(s.string()),
  etfCompany: s.optional(s.string()),
  domicile: s.optional(s.string()),
  inceptionDate: s.optional(s.dateOnly()),
  website: s.optional(s.string()),
  logo: s.optional(s.string()),
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  priceToEarnings: s.optional(s.number()),
  priceToBook: s.optional(s.number()),
  avgVolume: s.optional(s.number()),
  description: s.optional(s.string()),
  isInverse: s.optional(s.boolean()),
  isLeveraged: s.optional(s.boolean()),
  leverageFactor: s.optional(s.number()),
  dividendYield: s.optional(s.number()),
});
