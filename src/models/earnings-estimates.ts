import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { earningsEstimatesInfoSchema, type EarningsEstimatesInfo } from "./earnings-estimates-info.js";

export type EarningsEstimates = {
  /** List of estimates */
  data?: EarningsEstimatesInfo[];
  /** Frequency: annual or quarterly. */
  freq?: string;
  /** Company symbol. */
  symbol?: string;
};

export const earningsEstimatesSchema: Schema<EarningsEstimates> = s.object<EarningsEstimates>({
  data: s.optional(s.array(s.lazy(() => earningsEstimatesInfoSchema))),
  freq: s.optional(s.string()),
  symbol: s.optional(s.string()),
});
