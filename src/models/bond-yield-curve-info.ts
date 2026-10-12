import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BondYieldCurveInfo = {
  /** Date of the reading */
  d?: string;
  /** Value */
  v?: number;
};

export const bondYieldCurveInfoSchema: Schema<BondYieldCurveInfo> = s.object<BondYieldCurveInfo>({
  d: s.optional(s.string()),
  v: s.optional(s.float64()),
});
