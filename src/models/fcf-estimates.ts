import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fcfEstimatesInfoSchema, type FcfEstimatesInfo } from "./fcf-estimates-info.js";

export type FcfEstimates = {
  data?: FcfEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const fcfEstimatesSchema: Schema<FcfEstimates> = s.object<FcfEstimates>({
  data: s.optional(s.array(s.lazy(() => fcfEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
