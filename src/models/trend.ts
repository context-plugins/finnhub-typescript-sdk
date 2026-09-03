import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Trend = {
  adx?: number;
  trending?: boolean;
};

export const trendSchema: Schema<Trend> = s.object<Trend>({
  adx: s.optional(s.number()),
  trending: s.optional(s.boolean()),
});
