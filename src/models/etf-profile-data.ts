import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtfProfileData = {
  /** Name */
  name?: string;
  /** Asset Class. */
  assetClass?: string;
  /** Investment Segment. */
  investmentSegment?: string;
  /** AUM. */
  aum?: number;
  /** NAV. */
  nav?: number;
  /** NAV currency. */
  navCurrency?: string;
  /**
   * Expense ratio. For non-US funds, this is the <a
   * href="https://www.esma.europa.eu/sites/default/files/library/2015/11/09_1028_final_kid_ongoing_charges_methodology_for_publication_u_2_.pdf"
   * target="_blank">KID ongoing charges<a/>.
   */
  expenseRatio?: number;
  /** Tracking Index. */
  trackingIndex?: string;
  /** ETF issuer. */
  etfCompany?: string;
  /** ETF domicile. */
  domicile?: string;
  /** Inception date. */
  inceptionDate?: string;
  /** ETF's website. */
  website?: string;
  /** Logo. */
  logo?: string;
  /** ISIN. */
  isin?: string;
  /** CUSIP. */
  cusip?: string;
  /** P/E. */
  priceToEarnings?: number;
  /** P/B. */
  priceToBook?: number;
  /** 30-day average volume. */
  avgVolume?: number;
  /** ETF's description. */
  description?: string;
  /** Whether the ETF is inverse */
  isInverse?: boolean;
  /** Whether the ETF is leveraged */
  isLeveraged?: boolean;
  /** Leverage factor. */
  leverageFactor?: number;
  /** Dividend yield. */
  dividendYield?: number;
};

export const etfProfileDataSchema: Schema<EtfProfileData> = s.object<EtfProfileData>({
  name: s.optional(s.string()),
  assetClass: s.optional(s.string()),
  investmentSegment: s.optional(s.string()),
  aum: s.optional(s.float64()),
  nav: s.optional(s.float64()),
  navCurrency: s.optional(s.string()),
  expenseRatio: s.optional(s.float64()),
  trackingIndex: s.optional(s.string()),
  etfCompany: s.optional(s.string()),
  domicile: s.optional(s.string()),
  inceptionDate: s.optional(s.dateOnly()),
  website: s.optional(s.string()),
  logo: s.optional(s.string()),
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  priceToEarnings: s.optional(s.float64()),
  priceToBook: s.optional(s.float64()),
  avgVolume: s.optional(s.float64()),
  description: s.optional(s.string()),
  isInverse: s.optional(s.boolean()),
  isLeveraged: s.optional(s.boolean()),
  leverageFactor: s.optional(s.float64()),
  dividendYield: s.optional(s.float64()),
});
