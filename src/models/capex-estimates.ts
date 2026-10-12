import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capexEstimatesInfoSchema, type CapexEstimatesInfo } from "./capex-estimates-info.js";

export type CapexEstimates = {
  /** List of estimates */
  data?: CapexEstimatesInfo[];
  /** Frequency: annual or quarterly. */
  freq?: string;
  /** Company symbol. */
  symbol?: string;
};

export const capexEstimatesSchema: Schema<CapexEstimates> = s.object<CapexEstimates>({
  data: s.optional(s.array(s.lazy(() => capexEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
