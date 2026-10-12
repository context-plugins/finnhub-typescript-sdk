import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ocfEstimatesInfoSchema, type OcfEstimatesInfo } from "./ocf-estimates-info.js";

export type OcfEstimates = {
  /** List of estimates */
  data?: OcfEstimatesInfo[];
  /** Frequency: annual or quarterly. */
  freq?: string;
  /** Company symbol. */
  symbol?: string;
};

export const ocfEstimatesSchema: Schema<OcfEstimates> = s.object<OcfEstimates>({
  data: s.optional(s.array(s.lazy(() => ocfEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
