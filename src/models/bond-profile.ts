import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BondProfile = {
  /** ISIN. */
  isin?: string;
  /** Cusip. */
  cusip?: string;
  /** FIGI. */
  figi?: string;
  /** Coupon. */
  coupon?: number;
  /** Period. */
  maturityDate?: string;
  /** Offering price. */
  offeringPrice?: number;
  /** Issue date. */
  issueDate?: string;
  /** Bond type. */
  bondType?: string;
  /** Bond type. */
  debtType?: string;
  /** Industry. */
  industryGroup?: string;
  /** Sub-Industry. */
  industrySubGroup?: string;
  /** Asset. */
  asset?: string;
  /** Asset. */
  assetType?: string;
  /** Dated date. */
  datedDate?: string;
  /** First coupon date. */
  firstCouponDate?: string;
  /** Offering amount. */
  originalOffering?: number;
  /** Outstanding amount. */
  amountOutstanding?: number;
  /** Payment frequency. */
  paymentFrequency?: string;
  /** Security level. */
  securityLevel?: string;
  /** Callable. */
  callable?: boolean;
  /** Coupon type. */
  couponType?: string;
};

export const bondProfileSchema: Schema<BondProfile> = s.object<BondProfile>({
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  figi: s.optional(s.string()),
  coupon: s.optional(s.float64()),
  maturityDate: s.optional(s.string()),
  offeringPrice: s.optional(s.float64()),
  issueDate: s.optional(s.string()),
  bondType: s.optional(s.string()),
  debtType: s.optional(s.string()),
  industryGroup: s.optional(s.string()),
  industrySubGroup: s.optional(s.string()),
  asset: s.optional(s.string()),
  assetType: s.optional(s.string()),
  datedDate: s.optional(s.string()),
  firstCouponDate: s.optional(s.string()),
  originalOffering: s.optional(s.float64()),
  amountOutstanding: s.optional(s.float64()),
  paymentFrequency: s.optional(s.string()),
  securityLevel: s.optional(s.string()),
  callable: s.optional(s.boolean()),
  couponType: s.optional(s.string()),
});
