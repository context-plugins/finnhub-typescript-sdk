import { s, type Schema } from "../core/index.js";

export type Trend = {
  adx?: number;
  trending?: boolean;
};

export const trendSchema: Schema<Trend> = s.object<Trend>({
  adx: s.optional(s.number()),
  trending: s.optional(s.boolean()),
});
