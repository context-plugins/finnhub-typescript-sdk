import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Trend = {
  /** ADX reading */
  adx?: number;
  /** Whether market is trending or going sideway */
  trending?: boolean;
};

export const trendSchema: Schema<Trend> = s.object<Trend>({
  adx: s.optional(s.float64()),
  trending: s.optional(s.boolean()),
});
