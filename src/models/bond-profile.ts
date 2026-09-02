import { s, type Schema } from "../core/index.js";

export type BondProfile = {
  isin?: string;
  cusip?: string;
  figi?: string;
  coupon?: number;
  maturityDate?: string;
  offeringPrice?: number;
  issueDate?: string;
  bondType?: string;
  debtType?: string;
  industryGroup?: string;
  industrySubGroup?: string;
  asset?: string;
  assetType?: string;
  datedDate?: string;
  firstCouponDate?: string;
  originalOffering?: number;
  amountOutstanding?: number;
  paymentFrequency?: string;
  securityLevel?: string;
  callable?: boolean;
  couponType?: string;
};

export const bondProfileSchema: Schema<BondProfile> = s.object<BondProfile>({
  isin: s.optional(s.string()),
  cusip: s.optional(s.string()),
  figi: s.optional(s.string()),
  coupon: s.optional(s.number()),
  maturityDate: s.optional(s.string()),
  offeringPrice: s.optional(s.number()),
  issueDate: s.optional(s.string()),
  bondType: s.optional(s.string()),
  debtType: s.optional(s.string()),
  industryGroup: s.optional(s.string()),
  industrySubGroup: s.optional(s.string()),
  asset: s.optional(s.string()),
  assetType: s.optional(s.string()),
  datedDate: s.optional(s.string()),
  firstCouponDate: s.optional(s.string()),
  originalOffering: s.optional(s.number()),
  amountOutstanding: s.optional(s.number()),
  paymentFrequency: s.optional(s.string()),
  securityLevel: s.optional(s.string()),
  callable: s.optional(s.boolean()),
  couponType: s.optional(s.string()),
});
