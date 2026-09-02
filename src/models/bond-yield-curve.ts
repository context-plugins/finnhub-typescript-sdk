import { s, type Schema } from "../core/index.js";
import { bondYieldCurveInfoSchema, type BondYieldCurveInfo } from "./bond-yield-curve-info.js";

export type BondYieldCurve = {
  data?: BondYieldCurveInfo[];
  code?: string;
};

export const bondYieldCurveSchema: Schema<BondYieldCurve> = s.object<BondYieldCurve>({
  data: s.optional(s.array(s.lazy(() => bondYieldCurveInfoSchema))),
  code: s.optional(s.string()),
});
