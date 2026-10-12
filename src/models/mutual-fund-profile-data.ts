import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MutualFundProfileData = {
  /** Name */
  name?: string;
  /** Fund's category. */
  category?: string;
  /** Investment Segment. */
  investmentSegment?: string;
  /** NAV. */
  totalNav?: number;
  /** Expense ratio. */
  expenseRatio?: number;
  /** Index benchmark. */
  benchmark?: string;
  /** Inception date. */
  inceptionDate?: string;
  /** Fund's description. */
  description?: string;
  /** Fund Family. */
  fundFamily?: string;
  /** Fund Company. */
  fundCompany?: string;
  /** Fund's managers. */
  manager?: string;
  /** Status. */
  status?: string;
  /** Beta. */
  beta?: number;
  /** Deferred load. */
  deferredLoad?: number;
  /** 12B-1 fee. */
  fee12B1?: number;
  /** Front Load. */
  frontLoad?: number;
  /** IRA minimum investment. */
  iraMinInvestment?: number;
  /** ISIN. */
  isin?: string;
  /** CUSIP. */
  cusip?: string;
  /** Max redemption fee. */
  maxRedemptionFee?: number;
  /** Minimum investment for standard accounts. */
  standardMinInvestment?: number;
  /** Turnover. */
  turnover?: number;
  /**
   * Fund's series ID. This field can be used to group multiple share classes into 1 unique fund.
   */
  seriesId?: string;
  /** Fund's series name. */
  seriesName?: string;
  /** Class ID. */
  classId?: string;
  /** Class name. */
  className?: string;
  /**
   * SFDR classification for EU funds. Under the new classifications, a fund's strategy will labeled
   * under either Article 6, 8 or 9. Article 6 covers funds which do not integrate any kind of
   * sustainability into the investment process. Article 8, also known as ‘environmental and
   * socially promoting’, applies “… where a financial product promotes, among other
   * characteristics, environmental or social characteristics, or a combination of those
   * characteristics, provided that the companies in which the investments are made follow good
   * governance practices.”. Article 9, also known as ‘products targeting sustainable investments’,
   * covers products targeting bespoke sustainable investments and applies “… where a financial
   * product has sustainable investment as its objective and an index has been designated as a
   * reference benchmark.”
   */
  sfdrClassification?: string;
  /** Fund's currency */
  currency?: string;
};

export const mutualFundProfileDataSchema: Schema<MutualFundProfileData> = s.object<MutualFundProfileData>({
  name: s.optional(s.string()),
  category: s.optional(s.string()),
  investmentSegment: s.optional(s.string()),
  totalNav: s.optional(s.float64()),
  expenseRatio: s.optional(s.float64()),
  benchmark: s.optional(s.string()),
  inceptionDate: s.optional(s.dateOnly()),
  description: s.optional(s.string()),
  fundFamily: s.optional(s.string()),
  fundCompany: s.optional(s.string()),
  manager: s.optional(s.string()),
  status: s.optional(s.string()),
  beta: s.optional(s.float64()),
  deferredLoad: s.optional(s.float64()),
  fee12B1: s.optional(s.float64()),
  frontLoad: s.optional(s.float64()),
  iraMinInvestment: s.optional(s.float64()),
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  maxRedemptionFee: s.optional(s.float64()),
  standardMinInvestment: s.optional(s.float64()),
  turnover: s.optional(s.float64()),
  seriesId: s.optional(s.string()),
  seriesName: s.optional(s.string()),
  classId: s.optional(s.string()),
  className: s.optional(s.string()),
  sfdrClassification: s.optional(s.string()),
  currency: s.optional(s.string()),
  _keysMap: {
    fee12B1: "fee12b1",
  },
});
