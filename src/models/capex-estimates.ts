import { s, type Schema } from "../core/index.js";
import { capexEstimatesInfoSchema, type CapexEstimatesInfo } from "./capex-estimates-info.js";

export type CapexEstimates = {
  data?: CapexEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const capexEstimatesSchema: Schema<CapexEstimates> = s.object<CapexEstimates>({
  data: s.optional(s.array(s.lazy(() => capexEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
