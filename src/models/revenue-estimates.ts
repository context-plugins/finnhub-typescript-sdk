import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { revenueEstimatesInfoSchema, type RevenueEstimatesInfo } from "./revenue-estimates-info.js";

export type RevenueEstimates = {
  data?: RevenueEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const revenueEstimatesSchema: Schema<RevenueEstimates> = s.object<RevenueEstimates>({
  data: s.optional(s.array(s.lazy(() => revenueEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
