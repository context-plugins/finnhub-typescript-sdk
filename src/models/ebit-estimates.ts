import { s, type Schema } from "../core/index.js";
import { ebitEstimatesInfoSchema, type EbitEstimatesInfo } from "./ebit-estimates-info.js";

export type EbitEstimates = {
  data?: EbitEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const ebitEstimatesSchema: Schema<EbitEstimates> = s.object<EbitEstimates>({
  data: s.optional(s.array(s.lazy(() => ebitEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
