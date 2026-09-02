import { s, type Schema } from "../core/index.js";
import { earningsEstimatesInfoSchema, type EarningsEstimatesInfo } from "./earnings-estimates-info.js";

export type EarningsEstimates = {
  data?: EarningsEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const earningsEstimatesSchema: Schema<EarningsEstimates> = s.object<EarningsEstimates>({
  data: s.optional(s.array(s.lazy(() => earningsEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
