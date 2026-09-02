import { s, type Schema } from "../core/index.js";

export type BondYieldCurveInfo = {
  d?: string;
  v?: number;
};

export const bondYieldCurveInfoSchema: Schema<BondYieldCurveInfo> = s.object<BondYieldCurveInfo>({
  d: s.optional(s.string()),
  v: s.optional(s.number()),
});
