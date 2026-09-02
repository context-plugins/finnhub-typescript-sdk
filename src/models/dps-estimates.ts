import { s, type Schema } from "../core/index.js";
import { dpsEstimatesInfoSchema, type DpsEstimatesInfo } from "./dps-estimates-info.js";

export type DpsEstimates = {
  data?: DpsEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const dpsEstimatesSchema: Schema<DpsEstimates> = s.object<DpsEstimates>({
  data: s.optional(s.array(s.lazy(() => dpsEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
