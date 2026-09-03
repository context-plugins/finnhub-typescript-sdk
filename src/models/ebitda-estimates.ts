import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ebitdaEstimatesInfoSchema, type EbitdaEstimatesInfo } from "./ebitda-estimates-info.js";

export type EbitdaEstimates = {
  data?: EbitdaEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const ebitdaEstimatesSchema: Schema<EbitdaEstimates> = s.object<EbitdaEstimates>({
  data: s.optional(s.array(s.lazy(() => ebitdaEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
