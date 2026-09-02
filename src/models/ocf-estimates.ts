import { s, type Schema } from "../core/index.js";
import { ocfEstimatesInfoSchema, type OcfEstimatesInfo } from "./ocf-estimates-info.js";

export type OcfEstimates = {
  data?: OcfEstimatesInfo[];
  freq?: string;
  symbol?: string;
};

export const ocfEstimatesSchema: Schema<OcfEstimates> = s.object<OcfEstimates>({
  data: s.optional(s.array(s.lazy(() => ocfEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
