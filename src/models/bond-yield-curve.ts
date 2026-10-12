import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bondYieldCurveInfoSchema, type BondYieldCurveInfo } from "./bond-yield-curve-info.js";

export type BondYieldCurve = {
  /** Array of data. */
  data?: BondYieldCurveInfo[];
  /** Bond's code */
  code?: string;
};

export const bondYieldCurveSchema: Schema<BondYieldCurve> = s.object<BondYieldCurve>({
  data: s.optional(s.array(s.lazy(() => bondYieldCurveInfoSchema))),
  code: s.optional(s.string()),
});
